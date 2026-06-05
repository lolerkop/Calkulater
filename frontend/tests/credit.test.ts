import { describe, it, expect } from 'vitest';
import { calcCredit, creditAnnuityPayment } from '../src/lib/calculators/credit';

describe('credit: creditAnnuityPayment', () => {
  it('корректно считает аннуитетный платёж', () => {
    // 1 000 000 ₽ на 12 мес. под 12% годовых ≈ 88 848,79
    const payment = creditAnnuityPayment(1_000_000, 12, 12);
    expect(payment).toBeCloseTo(88848.79, 1);
  });

  it('при нулевой ставке делит сумму на срок', () => {
    expect(creditAnnuityPayment(120_000, 12, 0)).toBeCloseTo(10_000, 5);
  });
});

describe('credit: calcCredit', () => {
  it('возвращает результат для аннуитетного кредита', () => {
    const r = calcCredit({ amount: 1_000_000, term: 1, termUnit: 'years', rate: 12, type: 'annuity' });
    expect(r.primary.label).toBe('Ежемесячный платеж');
    expect(r.primary.value).not.toBe('—');
    // Срок в секции
    expect(r.secondary.some((s) => s.label === 'Срок' && s.value.includes('12'))).toBe(true);
  });

  it('срок в месяцах используется без умножения на 12', () => {
    const r = calcCredit({ amount: 100_000, term: 6, termUnit: 'months', rate: 10, type: 'annuity' });
    expect(r.secondary.find((s) => s.label === 'Срок')?.value).toBe('6 мес.');
  });

  it('возвращает ошибку при отрицательных входных данных', () => {
    const r = calcCredit({ amount: 0, term: 0, rate: 0 });
    expect(r.primary.value).toBe('—');
  });

  it('дифференцированный платёж добавляет note', () => {
    const r = calcCredit({ amount: 500_000, term: 12, termUnit: 'months', rate: 10, type: 'differentiated' });
    expect(r.note).toBeDefined();
    expect(r.note).toContain('первого');
  });
});
