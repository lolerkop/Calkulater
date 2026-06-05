import { describe, it, expect } from 'vitest';
import { calcPace } from '../src/lib/calculators/pace';

describe('pace: calcPace', () => {
  it('10 км за 50:00 → темп 5:00/км', () => {
    const r = calcPace({ distance: 10, unit: 'km', hours: 0, minutes: 50, seconds: 0 });
    expect(r.primary.value).toBe('5:00/км');
  });

  it('5 км за 25:00 → скорость 12 км/ч', () => {
    const r = calcPace({ distance: 5, unit: 'km', hours: 0, minutes: 25, seconds: 0 });
    const speed = r.secondary.find((s) => s.label === 'Средняя скорость')?.value;
    expect(speed).toMatch(/12,00/);
  });

  it('мили конвертируются в км', () => {
    // 6.2137 mi ≈ 10 km, за 50:00 → темп ≈ 5:00/км
    const r = calcPace({ distance: 6.2137, unit: 'mi', hours: 0, minutes: 50, seconds: 0 });
    expect(r.primary.value).toMatch(/^5:00/);
  });

  it('содержит прогнозы по формуле Ригеля', () => {
    const r = calcPace({ distance: 10, unit: 'km', hours: 0, minutes: 50, seconds: 0 });
    expect(r.secondary.find((s) => s.label === 'Прогноз на марафон')).toBeDefined();
    expect(r.secondary.find((s) => s.label === 'Прогноз на 5 км')).toBeDefined();
  });

  it('ошибка при отсутствии данных', () => {
    expect(calcPace({ distance: 0, hours: 0, minutes: 0, seconds: 0 }).primary.value).toBe('—');
  });
});
