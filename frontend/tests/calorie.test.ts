import { describe, it, expect } from 'vitest';
import { calcCalorie } from '../src/lib/calculators/calorie';

describe('calorie: calcCalorie', () => {
  it('считает BMR и TDEE для мужчины (Mifflin-St Jeor)', () => {
    // М, 30 лет, 180 см, 80 кг, активность 1.55, цель maintain
    // BMR = 10*80 + 6.25*180 - 5*30 + 5 = 800 + 1125 - 150 + 5 = 1780
    // TDEE = 1780 * 1.55 = 2759
    const r = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' });
    expect(r.primary.value).toMatch(/2[\s\u00A0\u202F]?759/);
    expect(r.secondary.find((s) => s.label === 'Базовый обмен (BMR)')?.value).toMatch(/1[\s\u00A0\u202F]?780/);
  });

  it('для женщины формула с -161', () => {
    // Ж, 25, 165, 60, 1.2 → BMR = 600 + 1031.25 - 125 - 161 = 1345.25
    const r = calcCalorie({ gender: 'female', age: 25, height: 165, weight: 60, activity: 1.2, goal: 'maintain' });
    expect(r.secondary.find((s) => s.label === 'Базовый обмен (BMR)')?.value).toMatch(/1[\s\u00A0\u202F]?345/);
  });

  it('цель «похудеть» уменьшает калории на 15%', () => {
    const maintain = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' });
    const lose = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'lose' });
    const num = (s: string) => parseInt(s.replace(/\D/g, ''), 10);
    expect(num(lose.primary.value)).toBeLessThan(num(maintain.primary.value));
  });

  it('содержит распределение БЖУ', () => {
    const r = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' });
    expect(r.secondary.find((s) => s.label === 'Белки')).toBeDefined();
    expect(r.secondary.find((s) => s.label === 'Жиры')).toBeDefined();
    expect(r.secondary.find((s) => s.label === 'Углеводы')).toBeDefined();
  });

  it('ошибка при некорректных данных', () => {
    expect(calcCalorie({ gender: 'male', age: 0, height: 0, weight: 0 }).primary.value).toBe('—');
  });
});
