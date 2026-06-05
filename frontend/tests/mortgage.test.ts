import { describe, it, expect } from 'vitest';
import { calcMortgage } from '../src/lib/calculators/mortgage';

const num = (s: string) =>
  parseFloat(s.replace(/[^\d.,-]/g, '').replace(/\s/g, '').replace(',', '.'));

describe('Ипотечный калькулятор', () => {
  it('считает аннуитетный платёж по сумме кредита (цена − взнос)', () => {
    // 5 000 000 − 1 000 000 = 4 000 000 на 20 лет (240 мес.) под 9% ≈ 35 989 ₽
    const res = calcMortgage({
      price: 5_000_000,
      downPayment: 1_000_000,
      years: 20,
      rate: 9,
      type: 'annuity',
    });
    const monthly = num(res.primary.value);
    expect(monthly).toBeGreaterThan(35_900);
    expect(monthly).toBeLessThan(36_100);
    expect(num(res.secondary.find((r) => r.label === 'Сумма кредита')!.value)).toBeCloseTo(4_000_000, 0);
  });

  it('общая стоимость с взносом = общая сумма выплат + первоначальный взнос', () => {
    const res = calcMortgage({
      price: 3_000_000,
      downPayment: 500_000,
      years: 10,
      rate: 10,
      type: 'annuity',
    });
    const monthly = num(res.primary.value);
    const totalCost = num(res.secondary.find((r) => r.label === 'Общая стоимость с взносом')!.value);
    const expected = monthly * 120 + 500_000;
    expect(Math.abs(totalCost - expected)).toBeLessThan(2); // округление формата
  });

  it('возвращает ошибку, если взнос ≥ цены', () => {
    const res = calcMortgage({ price: 1_000_000, downPayment: 1_500_000, years: 10, rate: 8 });
    expect(res.primary.value).toBe('—');
  });
});
