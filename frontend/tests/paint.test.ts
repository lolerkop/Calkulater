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

  it('показывает отдельно заданный запас и остаток из-за целых банок', () => {
    const r = calcPaint({
      mode: 'manual',
      area: 50,
      coats: 2,
      consumption: 0.1,
      canVolume: 3,
      reserve: 10,
    });
    expect(r.secondary.find((s) => s.label === 'Заданный запас')?.value).toContain('10,0');
    expect(r.secondary.find((s) => s.label === 'Остаток из-за целых банок')).toBeDefined();
  });

  it('ошибка при нулевых данных', () => {
    expect(calcPaint({ mode: 'manual', area: 0, coats: 1, consumption: 0, canVolume: 0 }).primary.value).toBe('—');
  });
});

describe('paint: округление вверх не добавляет лишнюю банку из-за FP', () => {
  const norm = (s: string) => s.replace(/[\s\u00a0\u202f]+/g, ' ');
  const row = (r: ReturnType<typeof calcPaint>, label: string) =>
    norm(r.secondary.find((s) => s.label === label)?.value ?? '');

  it('3 м², расход 0,2 л/м², 3 слоя, банка 0,9 л = ровно 2 банки', () => {
    // 3 × 0,2 × 3 = 1,8 л; 1,8 / 0,9 = 2
    const r = calcPaint({ mode: 'manual', area: 3, consumption: 0.2, coats: 3, canVolume: 0.9, reserve: 0 });
    expect(row(r, 'Количество банок')).toContain('2 шт.');
  });

  it('1,5 м², расход 0,2 л/м², 3 слоя, банка 0,9 л = ровно 1 банка', () => {
    const r = calcPaint({ mode: 'manual', area: 1.5, consumption: 0.2, coats: 3, canVolume: 0.9, reserve: 0 });
    expect(row(r, 'Количество банок')).toContain('1 шт.');
  });

  it('настоящий остаток по-прежнему округляется вверх', () => {
    // 3,1 × 0,2 × 3 = 1,86 л; 1,86 / 0,9 = 2,07 -> 3 банки
    const r = calcPaint({ mode: 'manual', area: 3.1, consumption: 0.2, coats: 3, canVolume: 0.9, reserve: 0 });
    expect(row(r, 'Количество банок')).toContain('3 шт.');
  });
});
