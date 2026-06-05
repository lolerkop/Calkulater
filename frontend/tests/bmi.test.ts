import { describe, it, expect } from 'vitest';
import { bmiValue, bmiCategory, calcBmi } from '../src/lib/calculators/bmi';

describe('Калькулятор ИМТ', () => {
  it('рост 180 см, вес 75 кг → ИМТ ≈ 23.15', () => {
    expect(bmiValue(180, 75)).toBeCloseTo(23.148, 2);
  });

  it('категории по диапазонам', () => {
    expect(bmiCategory(15).category).toMatch(/Выраженный/);
    expect(bmiCategory(17).category).toMatch(/Недостаток/);
    expect(bmiCategory(22).category).toBe('Норма');
    expect(bmiCategory(27).category).toMatch(/Избыточный/);
    expect(bmiCategory(32).category).toMatch(/I степени/);
    expect(bmiCategory(37).category).toMatch(/II степени/);
    expect(bmiCategory(41).category).toMatch(/III степени/);
  });

  it('норма имеет accent=green', () => {
    expect(bmiCategory(22).accent).toBe('green');
  });

  it('calcBmi возвращает значение с одним знаком после запятой', () => {
    const res = calcBmi({ height: 180, weight: 75 });
    expect(res.primary.value).toMatch(/23,1/);
  });

  it('некорректные данные → прочерк', () => {
    expect(calcBmi({ height: 0, weight: 0 }).primary.value).toBe('—');
  });
});
