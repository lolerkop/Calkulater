import { describe, it, expect } from 'vitest';
import { oneRepMax, calcOneRm } from '../src/lib/calculators/oneRm';

describe('oneRm: oneRepMax (формула Эпли)', () => {
  it('1 повторение = чистый вес', () => {
    expect(oneRepMax(100, 1)).toBe(100);
  });

  it('100 кг × 5 повторений = 100 * (1 + 5/30) ≈ 116.67', () => {
    expect(oneRepMax(100, 5)).toBeCloseTo(116.67, 1);
  });

  it('нулевые входные данные → 0', () => {
    expect(oneRepMax(0, 5)).toBe(0);
    expect(oneRepMax(100, 0)).toBe(0);
  });
});

describe('oneRm: calcOneRm', () => {
  it('возвращает 1ПМ и проценты от него', () => {
    const r = calcOneRm({ weight: 100, reps: 5 });
    expect(r.primary.value).toMatch(/116,7/);
    expect(r.secondary.length).toBeGreaterThanOrEqual(5);
  });

  it('при reps > 10 добавляется note о снижении точности', () => {
    const r = calcOneRm({ weight: 60, reps: 12 });
    expect(r.note).toBeDefined();
  });

  it('ошибка при нулевых данных', () => {
    expect(calcOneRm({ weight: 0, reps: 0 }).primary.value).toBe('—');
  });
});
