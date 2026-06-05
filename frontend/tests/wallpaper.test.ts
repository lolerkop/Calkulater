import { describe, it, expect } from 'vitest';
import { calcWallpaper } from '../src/lib/calculators/wallpaper';

describe('wallpaper: calcWallpaper', () => {
  it('считает рулоны для прямоугольной комнаты', () => {
    // 4×3 м, высота 2.7 м, рулон 0.53×10 м, без раппорта
    // периметр = 14 м
    // длина полотна = 2.7 → полотен из рулона = floor(10/2.7) = 3
    // всего полотен = ceil(14/0.53) = 27
    // рулонов = ceil(27/3) = 9
    const r = calcWallpaper({
      length: 4,
      width: 3,
      height: 2.7,
      rollWidth: 0.53,
      rollLength: 10,
      windows: 0,
      doors: 0,
      pattern: 0,
    });
    expect(r.primary.value).toMatch(/9 шт\./);
    expect(r.secondary.find((s) => s.label === 'Периметр')?.value).toMatch(/14,00/);
  });

  it('учитывает раппорт', () => {
    const noPattern = calcWallpaper({
      length: 4, width: 3, height: 2.5, rollWidth: 0.53, rollLength: 10,
      windows: 0, doors: 0, pattern: 0,
    });
    const withPattern = calcWallpaper({
      length: 4, width: 3, height: 2.5, rollWidth: 0.53, rollLength: 10,
      windows: 0, doors: 0, pattern: 50,
    });
    // С раппортом длина полотна больше → полотен из рулона меньше → больше рулонов
    const num = (s: string) => parseInt(s.replace(/\D/g, ''), 10);
    expect(num(withPattern.primary.value)).toBeGreaterThanOrEqual(num(noPattern.primary.value));
  });

  it('ошибка при пустых данных', () => {
    expect(calcWallpaper({
      length: 0, width: 0, height: 0, rollWidth: 0, rollLength: 0,
      windows: 0, doors: 0, pattern: 0,
    }).primary.value).toBe('—');
  });
});
