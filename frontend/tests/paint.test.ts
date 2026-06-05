import { describe, it, expect } from 'vitest';
import { calcPaint } from '../src/lib/calculators/paint';

const num = (s: string) =>
  parseFloat(s.replace(/[^\d.,-]/g, '').replace(/\s/g, '').replace(',', '.'));

describe('Калькулятор краски', () => {
  it('считает литры для прямой площади', () => {
    // 50 м² × 0.15 л/м² × 2 слоя = 15 л
    const res = calcPaint({
      mode: 'manual',
      area: 50,
      coats: 2,
      consumption: 0.15,
      canVolume: 5,
    });
    expect(num(res.primary.value)).toBeCloseTo(15, 1);
  });

  it('режим room считает периметр × высоту', () => {
    // 2*(4+5)*2.7 = 48.6 м²
    const res = calcPaint({
      mode: 'room',
      length: 4,
      width: 5,
      height: 2.7,
      coats: 1,
      consumption: 0.1,
      canVolume: 2.5,
    });
    const area = num(res.secondary.find((r) => r.label === 'Площадь окрашивания')!.value);
    expect(area).toBeCloseTo(48.6, 1);
  });

  it('количество банок округляется вверх', () => {
    const res = calcPaint({
      mode: 'manual',
      area: 30,
      coats: 2,
      consumption: 0.15, // 9 л
      canVolume: 5,
    });
    expect(res.secondary.find((r) => r.label === 'Количество банок')!.value).toMatch(/2/);
  });

  it('ошибка при нулевой площади', () => {
    expect(calcPaint({ mode: 'manual', area: 0, coats: 2, consumption: 0.1, canVolume: 5 }).primary.value).toBe('—');
  });
});
