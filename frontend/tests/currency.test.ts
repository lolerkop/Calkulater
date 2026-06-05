import { describe, it, expect } from 'vitest';
import { calcCurrency, convertCurrency } from '../src/lib/calculators/currency';

describe('currency: convertCurrency', () => {
  it('USD → USD = 1:1', () => {
    expect(convertCurrency(100, 'USD', 'USD')).toBe(100);
  });

  it('USD → EUR корректно по курсу 0.92', () => {
    expect(convertCurrency(100, 'USD', 'EUR')).toBeCloseTo(92, 5);
  });

  it('EUR → USD обратная конвертация', () => {
    expect(convertCurrency(92, 'EUR', 'USD')).toBeCloseTo(100, 5);
  });

  it('кросс-курс EUR → MDL', () => {
    // 100 EUR -> USD -> MDL: 100/0.92 * 17.85
    const expected = (100 / 0.92) * 17.85;
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
    expect(rateRow?.value).toMatch(/1 USD = 0,92/);
  });
});
