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
  });
});
