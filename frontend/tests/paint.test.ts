import { describe, it, expect } from 'vitest';
import { calcPaint } from '../src/lib/calculators/paint';

describe('paint: calcPaint', () => {
  it('считает литры краски при ручном вводе площади', () => {
    // 50 м² × 0.1 л/м² × 2 слоя = 10 л → банок 5 шт по 2 л
    const r = calcPaint({
      mode: 'manual',
      area: 50,
      coats: 2,
      consumption: 0.1,
      canVolume: 2,
    });
    expect(r.primary.value).toMatch(/10,0 л/);
    expect(r.secondary.find((s) => s.label === 'Количество банок')?.value).toMatch(/5 шт\./);
  });

  it('режим "комната" считает площадь стен', () => {
    // 5×4 м, высота 2.7 → периметр 18, площадь = 2*9*2.7 = 48.6
    const r = calcPaint({
      mode: 'room',
      length: 5,
      width: 4,
      height: 2.7,
      coats: 1,
      consumption: 0.1,
      canVolume: 5,
    });
    expect(r.secondary.find((s) => s.label === 'Площадь окрашивания')?.value).toMatch(/48,60/);
  });

  it('ошибка при нулевых данных', () => {
    expect(calcPaint({ mode: 'manual', area: 0, coats: 1, consumption: 0, canVolume: 0 }).primary.value).toBe('—');
  });
});
