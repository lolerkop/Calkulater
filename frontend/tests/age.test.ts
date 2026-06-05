import { describe, it, expect } from 'vitest';
import { calculateAge, calcAge } from '../src/lib/calculators/age';

describe('Калькулятор возраста', () => {
  it('возраст между 2000-01-15 и 2026-02-10', () => {
    const r = calculateAge(new Date('2000-01-15'), new Date('2026-02-10'));
    expect(r.years).toBe(26);
    expect(r.months).toBe(0);
    expect(r.days).toBe(26);
  });

  it('точно через год = 1 год 0 мес 0 дней', () => {
    const r = calculateAge(new Date('2024-03-10'), new Date('2025-03-10'));
    expect(r.years).toBe(1);
    expect(r.months).toBe(0);
    expect(r.days).toBe(0);
  });

  it('target раньше birth → нули', () => {
    const r = calculateAge(new Date('2025-01-01'), new Date('2020-01-01'));
    expect(r).toEqual({ years: 0, months: 0, days: 0, totalDays: 0 });
  });

  it('totalDays считается верно', () => {
    const r = calculateAge(new Date('2020-01-01'), new Date('2020-01-11'));
    expect(r.totalDays).toBe(10);
  });

  it('calcAge возвращает ошибку без даты рождения', () => {
    const res = calcAge({});
    expect(res.primary.value).toBe('—');
  });

  it('calcAge: текстовый результат содержит правильное склонение', () => {
    const res = calcAge({ birthDate: '2000-01-15', targetDate: '2026-02-10' });
    expect(res.primary.value).toMatch(/26 лет/);
  });
});
