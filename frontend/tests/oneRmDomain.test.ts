import { describe, expect, it } from 'vitest';
import { calcOneRm } from '../src/lib/calculators/oneRm';
import { calculators } from '../src/data/calculators';
import { validateValues } from '../src/components/islands/calculator/validation';
import type { CalcResult } from '../src/lib/types';

// Область определения формул калькулятора 1ПМ. Публичная форма ограничивает
// повторения двенадцатью, но раннер — чистая функция с более широким входом,
// и его результат должен оставаться математически осмысленным на всём входе.

const LANDER_A = 101.3;
const LANDER_B = 2.67123;
const LANDER_POLE = LANDER_A / LANDER_B;      // ≈ 37,9226 — знаменатель здесь ноль

const run = (weight: number, reps: number) => calcOneRm({ weight, reps });
const rowOf = (result: CalcResult, label: string) =>
  result.secondary.find((entry) => entry.label === label)?.value;

// Раннер форматирует числа в ru-RU: неразрывные пробелы между тройками и
// запятая как десятичный разделитель.
function parseKg(value: string | undefined): number | null {
  if (value === undefined) return null;
  const cleaned = value.replace(' кг', '').replace(/ /g, '').replace(',', '.');
  if (cleaned === '—') return null;
  const parsed = Number(cleaned);
  return Number.isNaN(parsed) ? Number.NaN : parsed;
}

const estimateLabels = ['Формула Бжицки', 'Формула Лэндера', 'Средняя оценка'];
const allValues = (result: CalcResult) => [result.primary.value, ...result.secondary.map((r) => r.value)];

describe('one-rep-max: публичная достижимость', () => {
  it('форма ограничивает повторения двенадцатью', () => {
    const calculator = calculators.find((item) => item.id === 'one-rep-max-calculator')!;
    const reps = calculator.fields.find((field) => field.name === 'reps')!;
    expect(reps.min).toBe(1);
    expect(reps.max).toBe(12);
    expect(reps.max! < LANDER_POLE).toBe(true);
  });

  it('валидация отвергает значения выше максимума, и раннер до них не доходит', () => {
    const calculator = calculators.find((item) => item.id === 'one-rep-max-calculator')!;
    const check = (reps: number) =>
      validateValues('one-rep-max-calculator', calculator.fields, { weight: 100, reps }, 'ru');
    for (const reps of [1, 5, 12]) expect(check(reps), `reps=${reps}`).toEqual({});
    for (const reps of [13, 37, 38, 100]) {
      expect(Object.keys(check(reps)), `reps=${reps}`).toContain('reps');
    }
    expect(Object.keys(check(0))).toContain('reps');
  });
});

describe('one-rep-max: поддерживаемая область 1..12 не меняется', () => {
  // Независимый оракул: формулы записаны здесь заново по их определениям.
  const epley = (w: number, r: number) => (r === 1 ? w : w * (1 + r / 30));
  const brzycki = (w: number, r: number) => w * (36 / (37 - r));
  const lander = (w: number, r: number) => (100 * w) / (LANDER_A - LANDER_B * r);

  it.each([1, 2, 5, 8, 10, 12])('reps = %i совпадает с оракулом', (reps) => {
    for (const weight of [20, 40, 60, 100, 150, 250]) {
      const result = run(weight, reps);
      const expected = {
        'Формула Бжицки': brzycki(weight, reps),
        'Формула Лэндера': lander(weight, reps),
        'Средняя оценка': (epley(weight, reps) + brzycki(weight, reps) + lander(weight, reps)) / 3,
      };
      // Раннер печатает один знак после запятой, поэтому сравнение идёт с
      // допуском, заведомо превышающим ошибку округления, но во много раз
      // меньшим любого содержательного расхождения формул.
      const round1 = (x: number) => Math.round(x * 10) / 10;
      expect(parseKg(result.primary.value), `${weight}×${reps} primary`)
        .toBe(round1(epley(weight, reps)));
      for (const [label, value] of Object.entries(expected)) {
        expect(parseKg(rowOf(result, label)), `${weight}×${reps} ${label}`).toBe(round1(value));
      }
    }
  });

  it('строки результата остаются прежними', () => {
    const result = run(100, 5);
    expect(result.primary.value).toBe('116,7 кг');
    expect(rowOf(result, 'Формула Бжицки')).toBe('112,5 кг');
    expect(rowOf(result, 'Формула Лэндера')).toBe('113,7 кг');
    expect(rowOf(result, 'Средняя оценка')).toBe('114,3 кг');
    expect(result.secondary).toHaveLength(8);
    expect(result.note).toBeUndefined();

    const twelve = run(60, 12);
    expect(twelve.primary.value).toBe('84,0 кг');
    expect(rowOf(twelve, 'Формула Бжицки')).toBe('86,4 кг');
    expect(rowOf(twelve, 'Формула Лэндера')).toBe('86,6 кг');
    expect(twelve.note).toBe('Точность формулы снижается при повторениях больше 10.');
  });
});

describe('one-rep-max: знаменатель Лэндера', () => {
  it('обращается в ноль между 37 и 38 повторениями', () => {
    expect(LANDER_A - LANDER_B * 37).toBeGreaterThan(0);
    expect(LANDER_A - LANDER_B * 38).toBeLessThan(0);
    expect(LANDER_POLE).toBeGreaterThan(37);
    expect(LANDER_POLE).toBeLessThan(38);
  });

  it('за полюсом оценка Лэндера не публикуется отрицательной', () => {
    for (const reps of [38, 39, 40, 50, 100, 1000, 100000]) {
      const value = parseKg(rowOf(run(100, reps), 'Формула Лэндера'));
      expect(value, `reps=${reps}: «${rowOf(run(100, reps), 'Формула Лэндера')}»`).not.toBeNull();
      expect(value, `reps=${reps}`).toBeGreaterThan(0);
    }
  });

  it('за полюсом средняя оценка не становится отрицательной', () => {
    for (const reps of [38, 39, 40, 50]) {
      const value = parseKg(rowOf(run(100, reps), 'Средняя оценка'));
      expect(value, `reps=${reps}`).toBeGreaterThan(0);
    }
  });

  it('на границе публичной области и сразу за ней ничего не ломается', () => {
    for (const reps of [12, 13, 20, 30, 36, 37]) {
      const result = run(100, reps);
      for (const value of allValues(result)) {
        expect(value, `reps=${reps}: «${value}»`).not.toMatch(/^-|\s-\d/);
        expect(value, `reps=${reps}`).not.toMatch(/NaN|Infinity/);
      }
    }
  });
});

describe('one-rep-max: сетка весов и повторений', () => {
  const weights = [20, 40, 60, 100, 150, 250];

  it('в поддерживаемой области все оценки конечны и положительны', () => {
    for (const weight of weights) {
      for (let reps = 1; reps <= 12; reps += 1) {
        const result = run(weight, reps);
        for (const label of ['Примерный 1ПМ', ...estimateLabels]) {
          const value = label === 'Примерный 1ПМ'
            ? parseKg(result.primary.value)
            : parseKg(rowOf(result, label));
          expect(value, `${weight}×${reps} ${label}`).not.toBeNull();
          expect(Number.isFinite(value!), `${weight}×${reps} ${label} конечно`).toBe(true);
          expect(value!, `${weight}×${reps} ${label} положительно`).toBeGreaterThan(0);
        }
      }
    }
  });

  it('вне поддерживаемой области раннер не публикует небезопасную оценку', () => {
    for (const weight of weights) {
      for (let reps = 13; reps <= 200; reps += 1) {
        const result = run(weight, reps);
        for (const value of allValues(result)) {
          expect(value, `${weight}×${reps}: «${value}»`).not.toMatch(/NaN|Infinity/);
          expect(value, `${weight}×${reps}: «${value}»`).not.toMatch(/-\d/);
        }
        const lander = parseKg(rowOf(result, 'Формула Лэндера'));
        expect(lander, `${weight}×${reps} Лэндер`).toBeGreaterThan(0);
      }
    }
  });

  it('нечисловые и бесконечные входы не дают подписанного нуля или мусора', () => {
    for (const [weight, reps] of [[100, Number.POSITIVE_INFINITY], [100, Number.NaN]] as const) {
      for (const value of allValues(run(weight, reps))) {
        expect(value, `weight=${weight} reps=${reps}: «${value}»`).not.toMatch(/-\d|NaN|Infinity/);
      }
    }
  });
});

describe('one-rep-max: остальные формулы уже защищены', () => {
  it('Бжицки не проходит через свой полюс при 37 повторениях', () => {
    for (const reps of [36, 37, 38, 100, 1000]) {
      const value = parseKg(rowOf(run(100, reps), 'Формула Бжицки'));
      expect(value, `reps=${reps}`).toBeGreaterThan(0);
      expect(Number.isFinite(value!), `reps=${reps}`).toBe(true);
    }
  });

  it('Эпли не имеет знаменателя и монотонно растёт', () => {
    let previous = 0;
    for (let reps = 1; reps <= 60; reps += 1) {
      const value = parseKg(run(100, reps).primary.value)!;
      expect(value, `reps=${reps}`).toBeGreaterThan(0);
      expect(value, `reps=${reps} монотонность`).toBeGreaterThanOrEqual(previous);
      previous = value;
    }
  });

  it('нулевые и отрицательные входы по-прежнему дают явную ошибку', () => {
    for (const [weight, reps] of [[0, 5], [100, 0], [100, -5], [-100, 5]] as const) {
      const result = run(weight, reps);
      expect(result.primary.value, `${weight}×${reps}`).toBe('—');
      expect(result.secondary[0].accent).toBe('red');
    }
  });
});
