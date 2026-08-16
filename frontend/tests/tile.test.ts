import { describe, it, expect } from 'vitest';
import { calcTile } from '../src/lib/calculators/tile';

describe('tile: calcTile', () => {
  it('считает количество плиток 30×30 см на 12 м² с запасом 10%', () => {
    // площадь с запасом = 12 * 1.1 = 13.2 м²
    // площадь плитки = 0.3 * 0.3 = 0.09 м²
    // плиток = ceil(13.2 / 0.09) = ceil(146.66) = 147
    const r = calcTile({
      mode: 'room',
      length: 4,
      width: 3,
      tileLength: 30,
      tileWidth: 30,
      packArea: 1.44,
      reserve: 10,
    });
    expect(r.primary.value).toMatch(/147 шт\./);
    // упаковок = ceil(13.2 / 1.44) = 10
    expect(r.secondary.find((s) => s.label === 'Количество упаковок')?.value).toMatch(/10 шт\./);
  });

  it('ручной ввод площади работает', () => {
    const r = calcTile({
      mode: 'manual',
      manualArea: 10,
      tileLength: 20,
      tileWidth: 20,
      packArea: 1,
      reserve: 0,
    });
    // площадь = 10, плитки 0.04 → 250 шт
    expect(r.primary.value).toMatch(/250 шт\./);
  });

  it('ошибка при некорректных размерах', () => {
    expect(calcTile({ mode: 'room', length: 0, width: 0, tileLength: 0, tileWidth: 0, packArea: 0, reserve: 0 }).primary.value).toBe('—');
    expect(calcTile({ mode: 'room', length: -4, width: 3, tileLength: 30, tileWidth: 30, packArea: 1.44, reserve: 10 }).primary.value).toBe('—');
  });
});

// Регрессия на дефект двоичной точности: значение до округления вверх
// математически целое, но в double оказывается на несколько ULP выше, и
// Math.ceil добавлял лишнюю единицу.
describe('tile: округление вверх не добавляет лишнюю единицу из-за FP', () => {
  const norm = (s: string) => s.replace(/[\s\u00a0\u202f]+/g, ' ');
  const row = (r: ReturnType<typeof calcTile>, label: string) =>
    norm(r.secondary.find((s) => s.label === label)?.value ?? '');

  it('1×1 м, запас 5%, плитка 25×30 см = ровно 14 плиток', () => {
    // 1 м² × 1,05 = 1,05 м²; плитка 0,25 × 0,30 = 0,075 м²; 1,05 / 0,075 = 14
    const r = calcTile({ mode: 'room', length: 1, width: 1, tileLength: 25, tileWidth: 30, packArea: 1.44, reserve: 5, glueConsumption: 5 });
    expect(norm(r.primary.value)).toBe('14 шт.');
  });

  it('1×1 м, запас 5%, плитка 25×60 см = ровно 7 плиток', () => {
    const r = calcTile({ mode: 'room', length: 1, width: 1, tileLength: 25, tileWidth: 60, packArea: 1.44, reserve: 5, glueConsumption: 5 });
    expect(norm(r.primary.value)).toBe('7 шт.');
  });

  it('1,5×6 м, запас 12%, упаковка 1,44 м² = ровно 7 упаковок', () => {
    // 9 м² × 1,12 = 10,08 м²; 10,08 / 1,44 = 7
    const r = calcTile({ mode: 'room', length: 1.5, width: 6, tileLength: 30, tileWidth: 30, packArea: 1.44, reserve: 12, glueConsumption: 5 });
    expect(row(r, 'Количество упаковок')).toBe('7 шт.');
  });

  it('настоящий остаток по-прежнему округляется вверх', () => {
    // 12,1 м² / 0,09 м² = 134,44… -> 135
    const r = calcTile({ mode: 'area', manualArea: 12.1, tileLength: 30, tileWidth: 30, packArea: 1.44, reserve: 0, glueConsumption: 5 });
    expect(norm(r.primary.value)).toBe('135 шт.');
  });
});
