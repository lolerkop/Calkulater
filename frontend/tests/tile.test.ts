import { describe, it, expect } from 'vitest';
import { calcTile } from '../src/lib/calculators/tile';

describe('Калькулятор плитки', () => {
  it('считает количество плиток с запасом', () => {
    // Комната 4×5 = 20 м². Плитка 30×30 см = 0.09 м². Запас 10% → 22 м²
    // Плиток: ceil(22 / 0.09) = 245
    const res = calcTile({
      mode: 'room',
      length: 4,
      width: 5,
      tileLength: 30,
      tileWidth: 30,
      packArea: 1.44,
      reserve: 10,
    });
    expect(res.primary.value).toMatch(/245/);
  });

  it('режим manualArea использует введённую площадь', () => {
    const res = calcTile({
      mode: 'manual',
      manualArea: 10,
      tileLength: 50,
      tileWidth: 50,
      packArea: 1.25,
      reserve: 0,
    });
    // 10 / 0.25 = 40
    expect(res.primary.value).toMatch(/40/);
  });

  it('количество упаковок округляется вверх', () => {
    const res = calcTile({
      mode: 'manual',
      manualArea: 10,
      tileLength: 30,
      tileWidth: 30,
      packArea: 3,
      reserve: 10,
    });
    // 11 м² / 3 м² = 3.67 → 4
    expect(res.secondary.find((r) => r.label === 'Количество упаковок')?.value).toMatch(/4/);
  });

  it('ошибка при нулевых данных', () => {
    expect(calcTile({ mode: 'manual', manualArea: 0 }).primary.value).toBe('—');
  });
});
