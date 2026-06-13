import { describe, it, expect } from 'vitest';
import { calcCurrency, convertCurrency } from '../src/lib/calculators/currency';
import { lastUpdated, ratesSource, ratesToUSD } from '../src/data/currencies';

describe('currency: convertCurrency', () => {
  it('USD → USD = 1:1', () => {
    expect(convertCurrency(100, 'USD', 'USD')).toBe(100);
  });

  it('USD → EUR использует загруженный официальный курс', () => {
    expect(convertCurrency(100, 'USD', 'EUR')).toBeCloseTo(100 * ratesToUSD.EUR, 5);
  });

  it('EUR → USD обратная конвертация', () => {
    const euros = 100 * ratesToUSD.EUR;
    expect(convertCurrency(euros, 'EUR', 'USD')).toBeCloseTo(100, 5);
  });

  it('кросс-курс EUR → MDL', () => {
    const expected = (100 / ratesToUSD.EUR) * ratesToUSD.MDL;
    expect(convertCurrency(100, 'EUR', 'MDL')).toBeCloseTo(expected, 4);
  });
});

describe('currency: calcCurrency', () => {
  it('возвращает строку результата с символом валюты', () => {
    const r = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });
    expect(r.primary.value).toContain('€');
  });

  it('содержит курс конвертации в secondary', () => {
    const r = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });
    const rateRow = r.secondary.find((s) => s.label === 'Курс');
    expect(rateRow?.value).toContain('1 USD =');
    expect(rateRow?.value).toContain('EUR');
  });

  it('показывает источник и дату официальных справочных курсов', () => {
    const r = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });

    expect(r.secondary.find((s) => s.label === 'Тип курса')?.value).toBe('официальный справочный');
    expect(r.secondary.find((s) => s.label === 'Дата курса')?.value).toBe(lastUpdated);
    expect(r.secondary.find((s) => s.label === 'Источник')?.value).toBe('Банк России');
    expect(r.secondary.find((s) => s.label === 'Источник')?.href).toBe(ratesSource);
    expect(r.secondary.find((s) => s.label === 'Статус обновления')?.value).toBeTruthy();
    expect(r.note).toContain('Банка России');
  });
});
