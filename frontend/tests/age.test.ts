import { describe, it, expect } from 'vitest';
import { calculateAge, calcAge } from '../src/lib/calculators/age';

describe('age: calculateAge', () => {
  it('точный год без переходов месяцев', () => {
    const r = calculateAge(new Date('1990-06-15'), new Date('2020-06-15'));
    expect(r.years).toBe(30);
    expect(r.months).toBe(0);
    expect(r.days).toBe(0);
  });

  it('день рождения ещё не наступил в этом году', () => {
    const r = calculateAge(new Date('1990-06-15'), new Date('2020-06-14'));
    expect(r.years).toBe(29);
    expect(r.months).toBe(11);
  });

  it('возвращает нули если target раньше birth', () => {
    const r = calculateAge(new Date('2020-01-01'), new Date('2019-01-01'));
    expect(r.years).toBe(0);
    expect(r.totalDays).toBe(0);
  });

  it('считает количество прожитых дней', () => {
    const r = calculateAge(new Date('2020-01-01'), new Date('2020-01-11'));
    expect(r.totalDays).toBe(10);
  });
});

describe('age: calcAge', () => {
  it('ошибка при пустой дате', () => {
    expect(calcAge({ birthDate: '', targetDate: '' }).primary.value).toBe('—');
  });

  it('ошибка если target раньше birth', () => {
    const r = calcAge({ birthDate: '2020-01-01', targetDate: '2019-01-01' });
    expect(r.primary.value).toBe('—');
  });

  it('возвращает строку с правильным склонением', () => {
    const r = calcAge({ birthDate: '1990-06-15', targetDate: '2020-06-15' });
    expect(r.primary.value).toContain('30 лет');
  });
});
