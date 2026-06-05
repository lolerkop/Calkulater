import { describe, it, expect } from 'vitest';
import { calcCompound } from '../src/lib/calculators/compound';

const num = (s: string) =>
  parseFloat(s.replace(/[^\d.,-]/g, '').replace(/\s/g, '').replace(',', '.'));

describe('Сложный процент', () => {
  it('без пополнений капитал растёт по формуле (1+r/12)^(12*Y)', () => {
    const res = calcCompound({ principal: 100_000, rate: 12, years: 5, topUp: 0, frequency: 'month' });
    // (1 + 0.01)^60 ≈ 1.8167 → ~181 670
    const total = num(res.primary.value);
    expect(total).toBeGreaterThan(181_000);
    expect(total).toBeLessThan(182_500);
  });

  it('пополнения увеличивают итог', () => {
    const a = calcCompound({ principal: 100_000, rate: 8, years: 10, topUp: 0, frequency: 'month' });
    const b = calcCompound({ principal: 100_000, rate: 8, years: 10, topUp: 1000, frequency: 'month' });
    expect(num(b.primary.value)).toBeGreaterThan(num(a.primary.value));
  });

  it('таблица содержит ровно years строк (для лет ≤ 30)', () => {
    const res = calcCompound({ principal: 10_000, rate: 5, years: 5, topUp: 0, frequency: 'month' });
    expect(res.table?.rows.length).toBe(5);
  });

  it('возвращает ошибку при отрицательной ставке', () => {
    const res = calcCompound({ principal: 10_000, rate: -1, years: 5 });
    expect(res.primary.value).toBe('—');
  });
});
