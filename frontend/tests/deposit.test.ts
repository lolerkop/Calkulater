import { describe, it, expect } from 'vitest';
import { calcDeposit } from '../src/lib/calculators/deposit';

const num = (s: string) =>
  parseFloat(s.replace(/[^\d.,-]/g, '').replace(/\s/g, '').replace(',', '.'));

describe('Калькулятор вклада', () => {
  it('без капитализации проценты считаются простым способом', () => {
    const res = calcDeposit({
      amount: 100_000,
      months: 12,
      rate: 10,
      capitalization: 'no',
      topUp: 0,
    });
    // 100 000 * 10% = 10 000 простыми процентами
    const profit = num(res.secondary.find((r) => r.label === 'Начисленные проценты')!.value);
    expect(profit).toBeCloseTo(10_000, 0);
  });

  it('капитализация ежемесячно даёт больше, чем без капитализации', () => {
    const inputs = { amount: 100_000, months: 12, rate: 10, topUp: 0 };
    const noCap = calcDeposit({ ...inputs, capitalization: 'no' });
    const monthly = calcDeposit({ ...inputs, capitalization: 'yes', capPeriod: 'month' });
    const a = num(noCap.primary.value);
    const b = num(monthly.primary.value);
    expect(b).toBeGreaterThan(a);
  });

  it('пополнения увеличивают итоговую сумму', () => {
    const base = calcDeposit({ amount: 50_000, months: 12, rate: 5, capitalization: 'yes', capPeriod: 'month', topUp: 0 });
    const withTopUp = calcDeposit({ amount: 50_000, months: 12, rate: 5, capitalization: 'yes', capPeriod: 'month', topUp: 5000 });
    expect(num(withTopUp.primary.value)).toBeGreaterThan(num(base.primary.value));
    expect(num(withTopUp.secondary.find((r) => r.label === 'Сумма пополнений')!.value)).toBeCloseTo(60_000, 0);
  });

  it('возвращает ошибку при некорректном сроке', () => {
    const res = calcDeposit({ amount: 100_000, months: 0, rate: 10 });
    expect(res.primary.value).toBe('—');
  });
});
