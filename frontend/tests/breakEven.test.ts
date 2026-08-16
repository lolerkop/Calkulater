import { describe, expect, it } from 'vitest';
import { calcBreakEven, contributionMargin } from '../src/lib/calculators/breakEven';
import type { CalcResult } from '../src/lib/types';

// Ожидания выведены из определения точки безубыточности, а не сняты с раннера:
// маржинальная прибыль с единицы это цена минус переменные затраты, а объём
// безубыточности — постоянные затраты, делённые на эту маржу.

const run = (fixedCosts: number, unitPrice: number, variableCost: number, plannedUnits = 0): CalcResult =>
  calcBreakEven({ fixedCosts, unitPrice, variableCost, plannedUnits });

const rowOf = (result: CalcResult, label: string) =>
  result.secondary.find((row) => row.label === label)?.value;

// Раннер печатает числа в ru-RU: неразрывный пробел между тройками и запятая.
// Берётся именно числовой префикс: в единице «шт.» есть точка, и посимвольная
// фильтрация превратила бы «0,00 шт.» в «0.00.» и дала бы NaN.
const num = (value: string | undefined) => {
  if (value === undefined) throw new Error('строки нет');
  const match = value.match(/^\s*(-?\d[\d\u00a0]*(?:,\d+)?)/);
  if (!match) throw new Error(`нет числа: «${value}»`);
  return Number(match[1].replace(/\u00a0/g, '').replace(',', '.'));
};
const units = (result: CalcResult) => num(result.primary.value);

describe('breakEven: маржинальная прибыль', () => {
  it('равна цене минус переменные затраты', () => {
    expect(contributionMargin(500, 300)).toBe(200);
    expect(contributionMargin(1500, 900)).toBe(600);
    expect(contributionMargin(900, 900)).toBe(0);
    expect(contributionMargin(800, 900)).toBe(-100);
  });
});

describe('breakEven: нормальные случаи', () => {
  it('10 000 при марже 200 дают 50 единиц и 25 000 выручки', () => {
    const result = run(10_000, 500, 300);
    expect(units(result)).toBe(50);
    expect(rowOf(result, 'Маржинальная прибыль с единицы')).toBe('200 ₽');
    expect(rowOf(result, 'Коэффициент маржинальной прибыли')).toBe('40,00%');
    expect(num(rowOf(result, 'Выручка при расчётном объёме'))).toBe(25_000);
    expect(num(rowOf(result, 'Выручка при целом числе единиц'))).toBe(25_000);
  });

  it('10 000 при марже 250 дают 40 единиц', () => {
    expect(units(run(10_000, 600, 350))).toBe(40);
    expect(num(rowOf(run(10_000, 600, 350), 'Выручка при целом числе единиц'))).toBe(24_000);
  });

  it('дефолтный набор даёт 500 единиц и 750 000 выручки', () => {
    const result = run(300_000, 1500, 900);
    expect(units(result)).toBe(500);
    expect(num(rowOf(result, 'Выручка при целом числе единиц'))).toBe(750_000);
  });

  it('нулевые постоянные затраты дают нулевой объём', () => {
    expect(units(run(0, 500, 300))).toBe(0);
  });
});

describe('breakEven: границы округления', () => {
  it('точное целое не получает лишней единицы', () => {
    // 10 000 / 200 математически равно 50; ceilUnits не должен дать 51.
    expect(units(run(10_000, 500, 300))).toBe(50);
    expect(units(run(1_000_000, 250, 150))).toBe(10_000);
    // Десятичные множители, которые не представимы в двоичной системе точно.
    expect(units(run(1.05 * 20_000, 1.5, 0.45))).toBe(20_000);
  });

  it('дробный остаток округляется вверх', () => {
    expect(units(run(10_001, 500, 300))).toBe(51);
    expect(units(run(10_199, 500, 300))).toBe(51);
    expect(units(run(10_200, 500, 300))).toBe(51);
    expect(units(run(10_201, 500, 300))).toBe(52);
  });
});

describe('breakEven: валидация и невозможные условия', () => {
  it('нулевая и отрицательная маржа не дают точки безубыточности', () => {
    for (const [price, variable] of [[900, 900], [800, 900], [1, 1000]] as const) {
      const result = run(300_000, price, variable);
      expect(result.primary.value, `${price}/${variable}`).toBe('—');
      expect(result.note, `${price}/${variable}`).toContain('не приводит к безубыточности');
      for (const value of [result.primary.value, ...result.secondary.map((r) => r.value)]) {
        expect(value).not.toMatch(/NaN|Infinity/);
      }
    }
  });

  it('отвергает неположительную цену и отрицательные затраты', () => {
    for (const [fixed, price, variable] of [[10_000, 0, 100], [10_000, -5, 100], [-1, 500, 300], [10_000, 500, -1]] as const) {
      const result = run(fixed, price, variable);
      expect(result.primary.value, `${fixed}/${price}/${variable}`).toBe('—');
      expect(result.secondary[0].accent).toBe('red');
    }
  });

  it('никогда не публикует отрицательный объём безубыточности', () => {
    for (const fixed of [0, 1, 10_000, 1e9]) {
      for (const [price, variable] of [[500, 300], [1000, 1], [2, 1]] as const) {
        expect(units(run(fixed, price, variable)), `${fixed}/${price}/${variable}`).toBeGreaterThanOrEqual(0);
      }
    }
  });
});

describe('breakEven: плановый объём продаж', () => {
  it('считает прибыль и запас прочности выше точки безубыточности', () => {
    const result = run(300_000, 1500, 900, 700);
    // 700 × 600 = 420 000 маржинальной прибыли, минус 300 000 постоянных.
    expect(num(rowOf(result, 'Маржинальная прибыль при плане'))).toBe(420_000);
    expect(num(rowOf(result, 'Прибыль при плане'))).toBe(120_000);
    expect(num(rowOf(result, 'Запас прочности'))).toBe(200);
    expect(rowOf(result, 'Запас прочности, %')).toBe('28,57%');
    expect(result.note).toBeUndefined();
  });

  it('показывает убыток и отрицательный запас ниже точки безубыточности', () => {
    const result = run(300_000, 1500, 900, 300);
    expect(num(rowOf(result, 'Прибыль при плане'))).toBe(-120_000);
    expect(num(rowOf(result, 'Запас прочности'))).toBe(-200);
    expect(result.note).toContain('меньше точки безубыточности');
  });

  it('ровно в точке безубыточности прибыль нулевая', () => {
    const result = run(10_000, 500, 300, 50);
    expect(num(rowOf(result, 'Прибыль при плане'))).toBe(0);
    expect(num(rowOf(result, 'Запас прочности'))).toBe(0);
  });

  it('без плана дополнительные строки не показываются', () => {
    const result = run(10_000, 500, 300);
    for (const label of ['Прибыль при плане', 'Запас прочности', 'Выручка при плане продаж']) {
      expect(rowOf(result, label), label).toBeUndefined();
    }
  });
});

describe('breakEven: инварианты на детерминированной сетке', () => {
  const fixedGrid = [0, 1, 999, 10_000, 250_000, 3_000_000];
  const priceGrid = [1, 12.5, 500, 1500, 99_999];
  const variableShare = [0, 0.1, 0.5, 0.9, 0.99];

  it('рост постоянных затрат не уменьшает точку безубыточности', () => {
    for (const price of priceGrid) {
      for (const share of variableShare) {
        let previous = -1;
        for (const fixed of fixedGrid) {
          const value = units(run(fixed, price, price * share));
          expect(value, `цена ${price}, доля ${share}, постоянные ${fixed}`).toBeGreaterThanOrEqual(previous);
          previous = value;
        }
      }
    }
  });

  it('рост маржинальной прибыли не увеличивает расчётный объём', () => {
    for (const fixed of fixedGrid) {
      let previous = Number.POSITIVE_INFINITY;
      // Чем меньше доля переменных затрат, тем больше маржа.
      for (const share of [...variableShare].reverse()) {
        const value = num(rowOf(run(fixed, 1000, 1000 * share), 'Расчётный объём без округления'));
        expect(value, `постоянные ${fixed}, доля ${share}`).toBeLessThanOrEqual(previous + 1e-9);
        previous = value;
      }
    }
  });

  it('целых единиц хватает на покрытие затрат, а на единицу меньше — уже нет', () => {
    for (const fixed of fixedGrid) {
      for (const price of priceGrid) {
        for (const share of variableShare) {
          const variable = price * share;
          const margin = price - variable;
          if (margin <= 0) continue;
          const bought = units(run(fixed, price, variable));
          const label = `${fixed}/${price}/${share}`;
          expect(Number.isInteger(bought), `${label}: не целое`).toBe(true);
          expect(bought * margin, `${label}: не покрывает`).toBeGreaterThanOrEqual(fixed - 1e-6);
          // На единицу меньше не хватает всегда, кроме случая ровно целого объёма.
          const exact = fixed / margin;
          if (!Number.isInteger(Math.round(exact * 1e9) / 1e9)) {
            expect((bought - 1) * margin, `${label}: лишняя единица`).toBeLessThan(fixed);
          }
        }
      }
    }
  });

  it('результат всегда конечен и без мусора', () => {
    for (const fixed of fixedGrid) {
      for (const price of priceGrid) {
        for (const share of variableShare) {
          for (const planned of [0, 1, 12_345]) {
            const result = run(fixed, price, price * share, planned);
            for (const value of [result.primary.value, ...result.secondary.map((r) => r.value), result.note ?? '']) {
              expect(value, `${fixed}/${price}/${share}/${planned}: «${value}»`)
                .not.toMatch(/NaN|Infinity|undefined|\[object/);
            }
          }
        }
      }
    }
  });
});
