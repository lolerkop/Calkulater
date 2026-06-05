import { describe, it, expect } from 'vitest';
import { calcWallpaper } from '../src/lib/calculators/wallpaper';

describe('Калькулятор обоев', () => {
  it('считает количество рулонов для типовой комнаты', () => {
    // 4×5 м, высота 2.7 м, рулон 1.06×10 м, без раппорта
    // periметр = 18 м, полотен = ceil(18/1.06) = 17
    // полотен из рулона = floor(10 / 2.7) = 3, рулонов = ceil(17/3) = 6
    const res = calcWallpaper({
      length: 4,
      width: 5,
      height: 2.7,
      rollWidth: 1.06,
      rollLength: 10,
      windows: 1,
      doors: 1,
      pattern: 0,
    });
    expect(res.primary.value).toMatch(/6/);
  });

  it('при раппорте требуется больше рулонов', () => {
    const noPattern = calcWallpaper({
      length: 4, width: 4, height: 2.7,
      rollWidth: 1.06, rollLength: 10, pattern: 0,
    });
    const withPattern = calcWallpaper({
      length: 4, width: 4, height: 2.7,
      rollWidth: 1.06, rollLength: 10, pattern: 64,
    });
    const num = (s: string) => parseInt(s.match(/\d+/)?.[0] ?? '0', 10);
    expect(num(withPattern.primary.value)).toBeGreaterThanOrEqual(num(noPattern.primary.value));
  });

  it('ошибка при нулевой высоте', () => {
    expect(calcWallpaper({ length: 4, width: 4, height: 0 }).primary.value).toBe('—');
  });
});
