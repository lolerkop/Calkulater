import { describe, it, expect } from 'vitest';
import { calcMortgage } from '../src/lib/calculators/mortgage';

describe('mortgage: calcMortgage', () => {
  it('считает аннуитетный платёж по ипотеке', () => {
    // 5 000 000 - 1 000 000 = 4 000 000 кредит, 20 лет, 10% годовых
    const r = calcMortgage({ price: 5_000_000, downPayment: 1_000_000, years: 20, rate: 10, type: 'annuity' });
    expect(r.primary.label).toBe('Ежемесячный платеж');
    expect(r.primary.value).not.toBe('—');
    const loan = r.secondary.find((s) => s.label === 'Сумма кредита')?.value;
    expect(loan).toMatch(/4[\s\u00A0\u202F]?000[\s\u00A0\u202F]?000/);
  });

  it('первоначальный взнос больше или равен цене → ошибка', () => {
    const r = calcMortgage({ price: 1_000_000, downPayment: 1_000_000, years: 10, rate: 8 });
    expect(r.primary.value).toBe('—');
  });

  it('дифференцированный платёж содержит note', () => {
    const r = calcMortgage({ price: 3_000_000, downPayment: 500_000, years: 10, rate: 9, type: 'differentiated' });
    expect(r.note).toBeDefined();
  });

  it('принимает первоначальный взнос в процентах и учитывает досрочную доплату', () => {
    const r = calcMortgage({
      price: 5_000_000,
      downPaymentMode: 'percent',
      downPaymentPct: 20,
      years: 20,
      rate: 10,
      type: 'annuity',
      extraPayment: 10_000,
    });
    expect(r.secondary.find((s) => s.label === 'Сумма кредита')?.value).toMatch(/4[\s\u00A0\u202F]?000[\s\u00A0\u202F]?000/);
    expect(r.secondary.find((s) => s.label === 'Первоначальный взнос')?.value).toContain('20.0%');
    expect(r.secondary.some((s) => s.label === 'Сокращение срока')).toBe(true);
  });
});
