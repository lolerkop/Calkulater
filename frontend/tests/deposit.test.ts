import { describe, it, expect } from 'vitest';
import { calcDeposit } from '../src/lib/calculators/deposit';

describe('deposit: calcDeposit', () => {
  it('считает депозит с ежемесячной капитализацией', () => {
    const r = calcDeposit({
      amount: 100_000,
      months: 12,
      rate: 12,
      capitalization: 'yes',
      capPeriod: 'month',
      topUp: 0,
    });
    expect(r.primary.label).toBe('Итоговая сумма');
    expect(r.primary.value).not.toBe('—');
    // (1 + 0.12/12)^12 ≈ 1.12683, итого ≈ 112 683
    const profitRow = r.secondary.find((s) => s.label === 'Начисленные проценты');
    expect(profitRow).toBeDefined();
  });

  it('без капитализации проценты копятся отдельно', () => {
    const r = calcDeposit({
      amount: 100_000,
      months: 12,
      rate: 12,
      capitalization: 'no',
      topUp: 0,
    });
    // Простые проценты: 100000 * 0.12 = 12000
    const profitRow = r.secondary.find((s) => s.label === 'Начисленные проценты');
    expect(profitRow?.value).toMatch(/12[\s\u00A0\u202F]?000/);
  });

  it('учитывает пополнения', () => {
    const r = calcDeposit({
      amount: 10_000,
      months: 6,
      rate: 10,
      capitalization: 'yes',
      capPeriod: 'month',
      topUp: 1000,
    });
    const topUpRow = r.secondary.find((s) => s.label === 'Сумма пополнений');
    expect(topUpRow?.value).toMatch(/6[\s\u00A0\u202F]?000/);
  });

  it('возвращает ошибку при некорректных входных данных', () => {
    const r = calcDeposit({ amount: -1, months: 0, rate: 0 });
    expect(r.primary.value).toBe('—');
  });
});
