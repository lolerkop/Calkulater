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

  it('раппорт округляет длину полотна вверх и может увеличить число рулонов', () => {
    const withoutPattern = calcWallpaper({ length: 5, width: 4, height: 2.5, rollWidth: 0.53, rollLength: 10, pattern: 0 });
    const withPattern = calcWallpaper({ length: 5, width: 4, height: 2.5, rollWidth: 0.53, rollLength: 10, pattern: 64 });
    const count = (value: string) => Number(value.match(/\d+/)?.[0]);
    expect(count(withPattern.primary.value)).toBeGreaterThan(count(withoutPattern.primary.value));
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

describe('wallpaper: округление не искажает количество полотен и рулонов', () => {
  const norm = (s: string) => s.replace(/[\s\u00a0\u202f]+/g, ' ');
  const row = (r: ReturnType<typeof calcWallpaper>, label: string) =>
    norm(r.secondary.find((s) => s.label === label)?.value ?? '');

  it('периметр 6 м при рулоне 1,0 м = ровно 6 полотен, а не 7', () => {
    // 2 × (1 + 2) = 6 м; 6 / 1,0 = 6
    const r = calcWallpaper({ length: 1, width: 2, height: 2.7, rollWidth: 1.0, rollLength: 10, windows: 0, doors: 0, pattern: 0 });
    expect(row(r, 'Количество полотен')).toBe('6 шт.');
    expect(norm(r.primary.value)).toBe('2 шт.');
  });

  it('floor не занижает число полотен из рулона', () => {
    // раппорт 10 см, высота 2,25 -> полотно 2,3 м; 11,5 / 2,3 = ровно 5
    const r = calcWallpaper({ length: 3, width: 3, height: 2.25, rollWidth: 0.53, rollLength: 11.5, windows: 0, doors: 0, pattern: 10 });
    expect(row(r, 'Полотен из рулона')).toBe('5 шт.');
  });

  it('настоящий остаток по-прежнему округляется вверх', () => {
    // 2 × (3 + 4) = 14 м; 14 / 0,53 = 26,4… -> 27 полотен
    const r = calcWallpaper({ length: 3, width: 4, height: 2.5, rollWidth: 0.53, rollLength: 10, windows: 0, doors: 0, pattern: 0 });
    expect(row(r, 'Количество полотен')).toBe('27 шт.');
  });
});
