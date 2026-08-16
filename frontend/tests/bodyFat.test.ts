import { describe, expect, it } from 'vitest';
import { calcBodyFat, navyBodyFat, navyCircumferenceDifference } from '../src/lib/calculators/bodyFat';
import type { CalcResult } from '../src/lib/types';

// Контракт формулы взят из первоисточника — регрессии Ходждона и Беккета
// (Naval Health Research Center, отчёты 84-11 и 84-29, 1984), заданной в дюймах:
//   мужчины: 86,010·log10(талия − шея) − 70,041·log10(рост) + 36,76
//   женщины: 163,205·log10(талия + бёдра − шея) − 97,684·log10(рост) − 78,387
// Оракул ниже записан заново и проверяет две вещи сразу: и коэффициенты, и то,
// что сантиметры переведены в дюймы, а не подставлены в дюймовые константы.

const INCH = 2.54;
const oracleMale = (h: number, neck: number, waist: number) =>
  86.010 * Math.log10((waist - neck) / INCH) - 70.041 * Math.log10(h / INCH) + 36.76;
const oracleFemale = (h: number, neck: number, waist: number, hip: number) =>
  163.205 * Math.log10((waist + hip - neck) / INCH) - 97.684 * Math.log10(h / INCH) - 78.387;

const run = (i: Record<string, string | number>): CalcResult => calcBodyFat(i);
const percent = (result: CalcResult) => Number(result.primary.value.replace('%', '').replace(',', '.'));

describe('bodyFat: совпадение с независимым оракулом', () => {
  it.each([
    [180, 38, 90], [165, 34, 78], [195, 42, 110], [170, 36, 82], [188, 40, 99],
  ])('мужчина рост %i шея %i талия %i', (h, neck, waist) => {
    expect(navyBodyFat('male', h, neck, waist, 0)).toBeCloseTo(oracleMale(h, neck, waist), 10);
  });

  it.each([
    [165, 32, 72, 96], [158, 30, 68, 92], [175, 34, 80, 104], [170, 31, 75, 99],
  ])('женщина рост %i шея %i талия %i бёдра %i', (h, neck, waist, hip) => {
    expect(navyBodyFat('female', h, neck, waist, hip)).toBeCloseTo(oracleFemale(h, neck, waist, hip), 10);
  });

  it('перевод единиц выполнен, а не пропущен', () => {
    // Если бы сантиметры подставили в дюймовые константы, разница составила бы
    // около шести с половиной процентных пунктов у мужчин.
    const naive = 86.010 * Math.log10(90 - 38) - 70.041 * Math.log10(180) + 36.76;
    const actual = navyBodyFat('male', 180, 38, 90, 0);
    expect(Math.abs(actual - naive)).toBeGreaterThan(6);
    expect(actual).toBeCloseTo(19.9271, 3);
  });
});

describe('bodyFat: видимый результат', () => {
  it('мужской и женский примеры', () => {
    expect(run({ sex: 'male', height: 180, neck: 38, waist: 90 }).primary.value).toBe('19,9%');
    expect(run({ sex: 'female', height: 165, neck: 32, waist: 72, hip: 96 }).primary.value).toBe('26,7%');
  });

  it('обхват бёдер участвует только в женской ветке', () => {
    const male = run({ sex: 'male', height: 180, neck: 38, waist: 90, hip: 150 });
    expect(male.primary.value).toBe('19,9%');
    expect(male.secondary.find((r) => r.label === 'Обхват бёдер')).toBeUndefined();
    expect(run({ sex: 'female', height: 165, neck: 32, waist: 72, hip: 96 })
      .secondary.find((r) => r.label === 'Обхват бёдер')?.value).toBe('96,0 см');
  });

  it('предупреждение об оценочном характере присутствует всегда', () => {
    expect(run({ sex: 'male', height: 180, neck: 38, waist: 90 }).note).toContain('не является медицинским заключением');
  });
});

describe('bodyFat: область определения', () => {
  it('разность обхватов должна быть положительной', () => {
    expect(navyCircumferenceDifference('male', 38, 90, 0)).toBe(52);
    expect(navyCircumferenceDifference('female', 32, 72, 96)).toBe(136);
    for (const inputs of [
      { sex: 'male', height: 180, neck: 90, waist: 90 },
      { sex: 'male', height: 180, neck: 95, waist: 90 },
      { sex: 'female', height: 165, neck: 200, waist: 72, hip: 96 },
    ]) {
      const result = run(inputs);
      expect(result.primary.value, JSON.stringify(inputs)).toBe('—');
      expect(result.secondary[0].accent).toBe('red');
    }
  });

  it('отвергает неположительные измерения', () => {
    for (const inputs of [
      { sex: 'male', height: 0, neck: 38, waist: 90 },
      { sex: 'male', height: 180, neck: 0, waist: 90 },
      { sex: 'male', height: 180, neck: 38, waist: 0 },
      { sex: 'female', height: 165, neck: 32, waist: 72, hip: 0 },
    ]) {
      expect(run(inputs).primary.value, JSON.stringify(inputs)).toBe('—');
    }
  });

  it('не публикует бессмысленную оценку за пределами применимости', () => {
    // Талия почти равна шее: логарифм уходит в минус и формула даёт
    // отрицательный процент. Публиковать такое число нельзя.
    const result = run({ sex: 'male', height: 180, neck: 38, waist: 39 });
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].value).toContain('пределы применимости');
  });

  it('никогда не отдаёт NaN, Infinity и отрицательный процент', () => {
    for (const sex of ['male', 'female'] as const) {
      for (const height of [100, 165, 180, 250]) {
        for (const neck of [20, 32, 38, 60]) {
          for (const waist of [40, 72, 90, 140]) {
            for (const hip of [50, 96, 130]) {
              const result = run({ sex, height, neck, waist, hip });
              for (const value of [result.primary.value, ...result.secondary.map((r) => r.value)]) {
                expect(value).not.toMatch(/NaN|Infinity|undefined/);
              }
              if (result.primary.value !== '—') {
                expect(percent(result)).toBeGreaterThan(0);
                expect(percent(result)).toBeLessThan(100);
              }
            }
          }
        }
      }
    }
  });
});

describe('bodyFat: монотонность, следующая из формулы', () => {
  it('рост обхвата талии увеличивает оценку', () => {
    for (const sex of ['male', 'female'] as const) {
      let previous = 0;
      for (const waist of [70, 80, 90, 100, 110]) {
        const value = navyBodyFat(sex, 175, 36, waist, 100);
        expect(value, `${sex} талия ${waist}`).toBeGreaterThan(previous);
        previous = value;
      }
    }
  });

  it('рост обхвата шеи уменьшает оценку', () => {
    for (const sex of ['male', 'female'] as const) {
      let previous = Number.POSITIVE_INFINITY;
      for (const neck of [30, 34, 38, 42]) {
        const value = navyBodyFat(sex, 175, neck, 95, 100);
        expect(value, `${sex} шея ${neck}`).toBeLessThan(previous);
        previous = value;
      }
    }
  });

  it('рост при неизменных обхватах уменьшает оценку', () => {
    let previous = Number.POSITIVE_INFINITY;
    for (const height of [160, 170, 180, 190]) {
      const value = navyBodyFat('male', height, 38, 95, 0);
      expect(value, `рост ${height}`).toBeLessThan(previous);
      previous = value;
    }
  });
});
