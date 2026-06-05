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
