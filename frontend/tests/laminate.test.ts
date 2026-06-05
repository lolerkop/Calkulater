import { describe, it, expect } from 'vitest';
import { calcLaminate, laminatePacks } from '../src/lib/calculators/laminate';

describe('Калькулятор ламината', () => {
  it('laminatePacks: 4×5 м, упаковка 2 м², запас 10%', () => {
    const r = laminatePacks(4, 5, 2, 10);
    expect(r.area).toBe(20);
    expect(r.areaWithReserve).toBeCloseTo(22, 5);
    expect(r.packs).toBe(11);
  });

  it('запас 0% → ровно ceil(area / packArea)', () => {
    const r = laminatePacks(3, 3, 2, 0);
    expect(r.packs).toBe(Math.ceil(9 / 2)); // 5
  });

  it('calcLaminate возвращает количество упаковок', () => {
    const res = calcLaminate({ length: 4, width: 5, packArea: 2, reserve: 10 });
    expect(res.primary.value).toMatch(/11/);
  });

  it('ошибка при нулевой ширине', () => {
    expect(calcLaminate({ length: 4, width: 0, packArea: 2, reserve: 10 }).primary.value).toBe('—');
  });
});
