import { describe, it, expect } from 'vitest';
import { calcCredit, creditAnnuityPayment } from '../src/lib/calculators/credit';

describe('Кредитный калькулятор', () => {
  it('считает аннуитетный платёж по формуле', () => {
    // 1 000 000 ₽ на 5 лет (60 мес.) под 12% годовых ≈ 22 244 ₽/мес
    const monthly = creditAnnuityPayment(1_000_000, 60, 12);
    expect(monthly).toBeGreaterThan(22_240);
    expect(monthly).toBeLessThan(22_250);
  });

  it('при нулевой ставке аннуитет равен сумма / срок', () => {
    expect(creditAnnuityPayment(120_000, 12, 0)).toBeCloseTo(10_000, 5);
  });

  it('calcCredit возвращает корректный primary и secondary для аннуитета', () => {
    const res = calcCredit({
      amount: 1_000_000,
      term: 5,
      termUnit: 'years',
      rate: 12,
      type: 'annuity',
    });
    expect(res.primary.label).toBe('Ежемесячный платеж');
    expect(res.primary.value).toMatch(/22\s?244/);
    expect(res.secondary.find((r) => r.label === 'Срок')?.value).toBe('60 мес.');
  });

  it('дифференцированный платёж имеет меньшую общую переплату чем аннуитет', () => {
    const inputs = { amount: 1_000_000, term: 60, termUnit: 'months', rate: 12 };
    const ann = calcCredit({ ...inputs, type: 'annuity' });
    const diff = calcCredit({ ...inputs, type: 'differentiated' });
    const overpayAnn = ann.secondary.find((r) => r.label === 'Переплата')!.value;
    const overpayDiff = diff.secondary.find((r) => r.label === 'Переплата')!.value;
    const num = (s: string) => parseFloat(s.replace(/[^\d.,]/g, '').replace(/\s/g, '').replace(',', '.'));
    expect(num(overpayDiff)).toBeLessThan(num(overpayAnn));
  });

  it('возвращает ошибку при некорректных данных', () => {
    const res = calcCredit({ amount: 0, term: 0, rate: -1, type: 'annuity' });
    expect(res.primary.value).toBe('—');
  });

  it('срок в годах переводится в месяцы', () => {
    const res = calcCredit({ amount: 100_000, term: 2, termUnit: 'years', rate: 10, type: 'annuity' });
    expect(res.secondary.find((r) => r.label === 'Срок')?.value).toBe('24 мес.');
  });
});
