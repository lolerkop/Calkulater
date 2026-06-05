import { describe, it, expect } from 'vitest';
import { oneRepMax, calcOneRm } from '../src/lib/calculators/oneRm';

describe('Калькулятор 1ПМ (Эпли)', () => {
  it('1 повторение = тот же вес', () => {
    expect(oneRepMax(100, 1)).toBe(100);
  });

  it('формула Эпли: w * (1 + r/30)', () => {
    // 100 кг на 10 повторений → 100 * (1 + 10/30) ≈ 133.33
    expect(oneRepMax(100, 10)).toBeCloseTo(133.333, 2);
  });

  it('возвращает 0 при некорректных данных', () => {
    expect(oneRepMax(0, 5)).toBe(0);
    expect(oneRepMax(100, 0)).toBe(0);
  });

  it('calcOneRm выдаёт примечание при повторениях > 10', () => {
    const res = calcOneRm({ weight: 100, reps: 12 });
    expect(res.note).toBeDefined();
  });

  it('проценты от 1ПМ присутствуют в результате', () => {
    const res = calcOneRm({ weight: 100, reps: 5 });
    const labels = res.secondary.map((r) => r.label);
    expect(labels).toContain('50% от 1ПМ');
    expect(labels).toContain('90% от 1ПМ');
  });
});
