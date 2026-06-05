import { describe, it, expect } from 'vitest';
import { calcPace } from '../src/lib/calculators/pace';

describe('Калькулятор темпа', () => {
  it('10 км за 50:00 → темп 5:00/км', () => {
    const res = calcPace({ distance: 10, unit: 'km', hours: 0, minutes: 50, seconds: 0 });
    expect(res.primary.value).toBe('5:00/км');
  });

  it('средняя скорость = дистанция / время', () => {
    const res = calcPace({ distance: 10, unit: 'km', hours: 1, minutes: 0, seconds: 0 });
    expect(res.secondary.find((r) => r.label === 'Средняя скорость')?.value).toMatch(/10,00/);
  });

  it('мили переводятся в километры (1 миля = 1.609 км)', () => {
    const km = calcPace({ distance: 1, unit: 'km', hours: 0, minutes: 6, seconds: 0 });
    const mi = calcPace({ distance: 1, unit: 'mi', hours: 0, minutes: 6, seconds: 0 });
    expect(km.primary.value).not.toBe(mi.primary.value); // разные темпы
  });

  it('возвращает ошибку при нулевом времени', () => {
    expect(calcPace({ distance: 10, hours: 0, minutes: 0, seconds: 0 }).primary.value).toBe('—');
  });

  it('даёт прогноз на марафон', () => {
    const res = calcPace({ distance: 10, unit: 'km', hours: 0, minutes: 50, seconds: 0 });
    const marathon = res.secondary.find((r) => r.label === 'Прогноз на марафон')?.value;
    expect(marathon).toMatch(/^\d+:\d{2}:\d{2}$/);
  });
});
