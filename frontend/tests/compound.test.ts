import { describe, it, expect } from 'vitest';
import { calcCompound } from '../src/lib/calculators/compound';

describe('compound: calcCompound', () => {
  it('считает капитал при ежемесячной капитализации', () => {
    const r = calcCompound({ principal: 100_000, rate: 12, years: 1, topUp: 0, frequency: 'month' });
    expect(r.primary.value).not.toBe('—');
    expect(r.table?.rows.length).toBe(1);
  });

  it('таблица содержит строку на каждый год (но не более 30)', () => {
    const r = calcCompound({ principal: 1000, rate: 5, years: 5, topUp: 0, frequency: 'month' });
    expect(r.table?.rows.length).toBe(5);
  });

  it('пополнения увеличивают внесённую сумму', () => {
    const r = calcCompound({ principal: 10_000, rate: 5, years: 1, topUp: 1000, frequency: 'month' });
    const invested = r.secondary.find((s) => s.label === 'Внесённая сумма')?.value;
    // 10 000 + 12 * 1000 = 22 000
    expect(invested).toMatch(/22[\s\u00A0\u202F]?000/);
  });

  it('возвращает ошибку при отрицательных входных данных', () => {
    const r = calcCompound({ principal: -1, rate: 0, years: 0 });
    expect(r.primary.value).toBe('—');
  });
});
