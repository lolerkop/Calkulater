import { describe, expect, it, vi } from 'vitest';
import { calcCurrency, convertCurrency } from '../src/lib/calculators/currency';
import { compute as exchangeCost } from '../src/calculators/currency-exchange-fee/compute';

// Fixed teaching rates isolate the arithmetic from changing external data.
// Provider/date behavior is covered by the existing currency provenance suite.
vi.mock('../src/data/currencies', async (importActual) => {
  const actual = await importActual<typeof import('../src/data/currencies')>();
  return { ...actual, ratesToUSD: { ...actual.ratesToUSD, USD: 1, EUR: 0.8, CHF: 0.5, MDL: 16 } };
});

describe('reference currency conversion domain', () => {
  it.each(['', ' ', 'junk', undefined, null, true, false, -1, Number.NaN, Number.POSITIVE_INFINITY])('rejects amount %s', (amount) => {
    const result = calcCurrency({ amount, from: 'USD', to: 'EUR' } as never);
    expect(result.primary.value).toBe('—');
    expect(result.secondary).toContainEqual(expect.objectContaining({ label: 'Проверьте данные', accent: 'red' }));
  });
  it.each(['constructor', '__proto__', 'toString', 'UNKNOWN'])('rejects the currency key %s without throwing', (bad) => {
    for (const side of ['from', 'to']) {
      const result = calcCurrency({ amount: 100, from: 'USD', to: 'EUR', [side]: bad });
      expect(result.primary.value).toBe('—');
      expect(result.secondary[0].value).toBe('Неизвестная валюта');
    }
  });
  it('converts the fixed USD/EUR teaching rate independently', () => {
    expect(calcCurrency({ amount: 100, from: 'USD', to: 'EUR' }).primary.value).toBe('80,00 €');
  });
  it('derives the cross-rate from two fixed coefficients independently', () => {
    // 100 EUR / (0.8 EUR/USD) × (16 MDL/USD) = 2,000 MDL.
    expect(calcCurrency({ amount: 100, from: 'EUR', to: 'MDL' }).primary.value).toBe('2 000,00 L');
  });
  it('accepts zero without interpreting an empty field as zero', () => {
    expect(calcCurrency({ amount: 0, from: 'USD', to: 'EUR' }).primary.value).toBe('0,00 €');
  });
  it('accepts grouped comma-decimal input', () => {
    expect(calcCurrency({ amount: '1 000,5', from: 'USD', to: 'EUR' }).primary.value).toBe('800,40 €');
  });
  it('preserves a finite same-currency amount without overflowing an intermediate', () => {
    expect(convertCurrency(1.79e308, 'EUR', 'EUR')).toBe(1.79e308);
  });
  it('combines the cross-rate before multiplying a large finite amount', () => {
    expect(convertCurrency(1.5e308, 'EUR', 'CHF') / 1.5e308).toBe(0.625);
  });
  it('reports a true overflow explicitly', () => {
    const result = calcCurrency({ amount: 1e308, from: 'USD', to: 'MDL' });
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].value).toBe('Результат выходит за пределы числовой точности.');
  });
});

const costInputs = { direction: 'sell', amount: 1000, rate: 2, spreadPct: 10, feePct: 5, feeFixed: 20 };

describe('manually entered currency exchange costs', () => {
  for (const field of ['amount', 'rate', 'spreadPct', 'feePct', 'feeFixed']) {
    it.each(['', 'junk', null, true, false, Number.NaN, Number.POSITIVE_INFINITY])(`${field}: rejects invalid active value %s`, (value) => {
      const result = exchangeCost({ ...costInputs, [field]: value } as never);
      expect(result.primary.value).toBe('—');
      expect(result.secondary[0]).toEqual(expect.objectContaining({ label: 'Проверьте данные', accent: 'red' }));
    });
  }
  it.each(['constructor', '__proto__', 'unexpected'])('rejects direction %s', (direction) => {
    expect(exchangeCost({ ...costInputs, direction }).primary.value).toBe('—');
  });
  it('sells: applies spread, then percentage commission, then the fixed local charge', () => {
    // 1,000 × 2 × .9 × .95 − 20 = 1,690; total loss 310 / 2,000 = 15.5%.
    const result = exchangeCost(costInputs);
    expect(result.primary.value).toBe('1 690,00 ₽');
    expect(result.secondary).toContainEqual({ label: 'Комиссия', value: '90,00 ₽' });
    expect(result.secondary).toContainEqual({ label: 'Полная стоимость обмена', value: '310,00 ₽' });
    expect(result.secondary).toContainEqual({ label: 'Доля потерь', value: '15,50%' });
  });
  it('buys: takes the fixed local charge from the budget before calculating commission', () => {
    // (2,000 − 20) × .95 / (2 × 1.1) = 855 foreign units.
    const result = exchangeCost({ ...costInputs, direction: 'buy', amount: 2000 });
    expect(result.primary.value).toBe('855,00 ед. валюты');
    expect(result.secondary).toContainEqual({ label: 'Комиссия', value: '45,00 ед. валюты' });
    expect(result.secondary).toContainEqual({ label: 'Полная стоимость обмена', value: '145,00 ед. валюты' });
    expect(result.secondary).toContainEqual({ label: 'Доля потерь', value: '14,50%' });
  });
  it.each(['sell', 'buy'])('allows a zero payout when the available amount exactly pays all charges: %s', (direction) => {
    const result = exchangeCost({ ...costInputs, direction, amount: 1000, spreadPct: 0, feePct: 0, feeFixed: direction === 'sell' ? 2000 : 1000 });
    expect(result.primary.value).toBe(direction === 'sell' ? '0,00 ₽' : '0,00 ед. валюты');
    expect(result.secondary).toContainEqual({ label: 'Доля потерь', value: '100,00%' });
  });
  it.each(['sell', 'buy'])('rejects charges that would make the payout negative: %s', (direction) => {
    const result = exchangeCost({ ...costInputs, direction, amount: 1000, feeFixed: 2001 });
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].value).toBe('Сборы превышают доступную сумму обмена.');
  });
  it('rejects arithmetic overflow rather than showing partially valid rows', () => {
    const result = exchangeCost({ ...costInputs, amount: 1e308, rate: 1e308 });
    expect(result.primary.value).toBe('—');
    expect(result.secondary).toHaveLength(1);
  });
  it('keeps the optional fixed charge at zero when it is omitted', () => {
    expect(exchangeCost({ ...costInputs, feeFixed: undefined }).primary.value).toBe('1 710,00 ₽');
  });
});
