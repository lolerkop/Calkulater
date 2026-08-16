import { describe, it, expect } from 'vitest';
import { calcLaminate, laminatePacks } from '../src/lib/calculators/laminate';

describe('laminate: laminatePacks', () => {
  it('считает площадь и упаковки', () => {
    // 5×4 м = 20 м², запас 10% → 22 м², упаковка 2.5 м² → ceil(22/2.5) = 9
    const { area, areaWithReserve, packs } = laminatePacks(5, 4, 2.5, 10);
    expect(area).toBe(20);
    expect(areaWithReserve).toBeCloseTo(22, 5);
    expect(packs).toBe(9);
  });

  it('без запаса = ровное деление', () => {
    expect(laminatePacks(4, 3, 2, 0).packs).toBe(6);
  });
});

describe('laminate: calcLaminate', () => {
  it('возвращает количество упаковок', () => {
    const r = calcLaminate({ length: 5, width: 4, packArea: 2.5, reserve: 10 });
    expect(r.primary.value).toMatch(/9 шт\./);
  });

  it('ошибка при нулевых размерах', () => {
    expect(calcLaminate({ length: 0, width: 0, packArea: 0, reserve: 0 }).primary.value).toBe('—');
  });
});

describe('laminate: округление вверх не добавляет лишнюю упаковку из-за FP', () => {
  const norm = (s: string) => s.replace(/[\s\u00a0\u202f]+/g, ' ');

  it('1,5×6 м, запас 12%, упаковка 1,44 м² = ровно 7 упаковок', () => {
    // 9 м² × 1,12 = 10,08 м²; 10,08 / 1,44 = 7
    expect(norm(calcLaminate({ length: 1.5, width: 6, packArea: 1.44, reserve: 12 }).primary.value)).toBe('7 шт.');
  });

  it('1,5×8 м, запас 5%, упаковка 1,8 м² = ровно 7 упаковок', () => {
    expect(norm(calcLaminate({ length: 1.5, width: 8, packArea: 1.8, reserve: 5 }).primary.value)).toBe('7 шт.');
  });

  it('настоящий остаток по-прежнему округляется вверх', () => {
    // 20,1 м² / 2,13 = 9,43… -> 10
    expect(norm(calcLaminate({ length: 6.7, width: 3, packArea: 2.13, reserve: 0 }).primary.value)).toBe('10 шт.');
  });
});
