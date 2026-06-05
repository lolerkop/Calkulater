import { describe, it, expect } from 'vitest';
import { calcCalorie } from '../src/lib/calculators/calorie';

const num = (s: string) =>
  parseFloat(s.replace(/[^\d.,-]/g, '').replace(/\s/g, '').replace(',', '.'));

describe('Калькулятор калорий', () => {
  it('Mifflin-St Jeor для мужчины 30 лет, 180 см, 80 кг, актив 1.55', () => {
    // BMR = 10*80 + 6.25*180 − 5*30 + 5 = 800 + 1125 − 150 + 5 = 1780
    // TDEE = 1780 * 1.55 = 2759
    const res = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' });
    expect(num(res.primary.value)).toBeCloseTo(2759, 0);
    expect(num(res.secondary.find((r) => r.label === 'Базовый обмен (BMR)')!.value)).toBeCloseTo(1780, 0);
  });

  it('женская формула отличается константой', () => {
    // Ж: 10*60 + 6.25*165 − 5*30 − 161 = 600 + 1031.25 − 150 − 161 = 1320.25
    const res = calcCalorie({ gender: 'female', age: 30, height: 165, weight: 60, activity: 1.2, goal: 'maintain' });
    const bmr = num(res.secondary.find((r) => r.label === 'Базовый обмен (BMR)')!.value);
    expect(bmr).toBeCloseTo(1320, 0);
  });

  it('цель «похудеть» снижает калории на 15%', () => {
    const base = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' });
    const lose = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'lose' });
    expect(num(lose.primary.value)).toBeCloseTo(num(base.primary.value) * 0.85, 0);
  });

  it('БЖУ суммарно близки к итоговым калориям', () => {
    const res = calcCalorie({ gender: 'male', age: 30, height: 180, weight: 80, activity: 1.55, goal: 'maintain' });
    const cal = num(res.primary.value);
    const p = num(res.secondary.find((r) => r.label === 'Белки')!.value);
    const f = num(res.secondary.find((r) => r.label === 'Жиры')!.value);
    const c = num(res.secondary.find((r) => r.label === 'Углеводы')!.value);
    const total = p * 4 + f * 9 + c * 4;
    // допуск из-за округления граммов
    expect(Math.abs(total - cal)).toBeLessThan(20);
  });
});
