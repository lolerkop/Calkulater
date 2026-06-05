import { describe, it, expect } from 'vitest';
import { convertCurrency, calcCurrency } from '../src/lib/calculators/currency';
import { ratesToUSD } from '../src/data/currencies';

describe('Конвертер валют', () => {
  it('USD → USD возвращает ту же сумму', () => {
    expect(convertCurrency(100, 'USD', 'USD')).toBeCloseTo(100, 6);
  });

  it('USD → EUR использует ratesToUSD[EUR]', () => {
    expect(convertCurrency(100, 'USD', 'EUR')).toBeCloseTo(100 * ratesToUSD.EUR, 6);
  });

  it('обратная конвертация возвращает исходную сумму', () => {
    const there = convertCurrency(100, 'USD', 'MDL');
    const back = convertCurrency(there, 'MDL', 'USD');
    expect(back).toBeCloseTo(100, 6);
  });

  it('calcCurrency формирует результат с символом валюты', () => {
    const res = calcCurrency({ amount: 100, from: 'USD', to: 'EUR' });
    expect(res.primary.value).toMatch(/€/);
    expect(res.secondary.find((r) => r.label === 'Курс')?.value).toMatch(/1 USD =/);
  });
});
