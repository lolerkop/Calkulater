import { describe, it, expect } from 'vitest';
import { bmiValue, bmiCategory, calcBmi } from '../src/lib/calculators/bmi';

describe('bmi: bmiValue', () => {
  it('178 см / 75 кг ≈ 23.67', () => {
    expect(bmiValue(178, 75)).toBeCloseTo(23.67, 1);
  });

  it('0 рост → 0', () => {
    expect(bmiValue(0, 70)).toBe(0);
  });
});

describe('bmi: bmiCategory', () => {
  it('17 — недостаток веса', () => {
    expect(bmiCategory(17).category).toBe('Недостаток веса');
    expect(bmiCategory(17).accent).toBe('red');
  });

  it('22 — норма', () => {
    expect(bmiCategory(22).category).toBe('Норма');
    expect(bmiCategory(22).accent).toBe('green');
  });

  it('27 — избыточный вес', () => {
    expect(bmiCategory(27).category).toBe('Избыточный вес');
  });

  it('33 — ожирение I степени', () => {
    expect(bmiCategory(33).category).toBe('Ожирение I степени');
  });

  it('41 — ожирение III степени', () => {
    expect(bmiCategory(41).category).toBe('Ожирение III степени');
  });

  it('15 — выраженный дефицит', () => {
    expect(bmiCategory(15).category).toBe('Выраженный дефицит');
  });
});

describe('bmi: calcBmi', () => {
  it('возвращает результат для корректных данных', () => {
    const r = calcBmi({ height: 178, weight: 75 });
    expect(r.primary.value).toMatch(/23,7/);
  });

  it('ошибка при пустых данных', () => {
    expect(calcBmi({ height: 0, weight: 0 }).primary.value).toBe('—');
  });
});
