import { describe, expect, it } from 'vitest';
import { calcBrick, masonryModuleArea } from '../src/lib/calculators/brick';
import type { CalcResult } from '../src/lib/types';

// Модель кладки: каждому камню принадлежит один шов справа и один сверху, поэтому
// расчётный модуль равен (длина + шов) × (высота + шов). Ожидания ниже выведены
// из этой геометрии, а не сняты с раннера.

const base = {
  mode: 'dimensions', wallLength: 6, wallHeight: 2.8, openingsArea: 0,
  unitLength: 250, unitHeight: 65, joint: 10, reserve: 5, unitPrice: 0,
};
const run = (overrides: Record<string, string | number> = {}): CalcResult =>
  calcBrick({ ...base, ...overrides });
const rowOf = (result: CalcResult, label: string) =>
  result.secondary.find((row) => row.label === label)?.value;
const count = (value: string | undefined) => {
  const match = value?.match(/^\s*(-?\d[\d ]*)/);
  if (!match) throw new Error(`нет числа: «${value}»`);
  return Number(match[1].replace(/ /g, ''));
};

describe('brick: расчётный модуль', () => {
  it('добавляет шов по одному разу к каждой стороне', () => {
    expect(masonryModuleArea(250, 65, 10)).toBeCloseTo(0.26 * 0.075, 12);
    expect(masonryModuleArea(400, 200, 10)).toBeCloseTo(0.41 * 0.21, 12);
    // Без шва модуль равен самому камню.
    expect(masonryModuleArea(250, 65, 0)).toBeCloseTo(0.25 * 0.065, 12);
  });
});

describe('brick: нормальные случаи', () => {
  it('стена 6 × 2,8 из кирпича 250 × 65 со швом 10', () => {
    const result = run();
    // 16,8 / 0,0195 = 861,54 → 862 без запаса; ×1,05 = 904,62 → 905.
    expect(count(result.primary.value)).toBe(905);
    expect(count(rowOf(result, 'Камней без запаса'))).toBe(862);
    expect(count(rowOf(result, 'Запас'))).toBe(43);
    expect(rowOf(result, 'Площадь кладки')).toBe('16,80 м²');
  });

  it('режим площади даёт тот же результат, что и размеры', () => {
    expect(run({ mode: 'area', manualArea: 16.8 }).primary.value).toBe(run().primary.value);
  });

  it('проёмы уменьшают площадь кладки', () => {
    const result = run({ openingsArea: 4 });
    expect(rowOf(result, 'Площадь кладки')).toBe('12,80 м²');
    expect(rowOf(result, 'Площадь проёмов')).toBe('4,00 м²');
    expect(count(result.primary.value)).toBe(690);
  });

  it('без запаса итог равен количеству без запаса', () => {
    const result = run({ reserve: 0 });
    expect(count(result.primary.value)).toBe(862);
    expect(count(rowOf(result, 'Запас'))).toBe(0);
  });

  it('цена появляется только когда задана, и равна количеству на цену', () => {
    expect(rowOf(run(), 'Ориентировочная стоимость')).toBeUndefined();
    const priced = run({ unitPrice: 25 });
    expect(count(rowOf(priced, 'Ориентировочная стоимость'))).toBe(905 * 25);
  });

  it('ограничение модели названо прямо', () => {
    expect(run().note).toContain('одного слоя кладки');
  });
});

describe('brick: границы округления', () => {
  it('точное деление не добавляет лишний камень', () => {
    // Модуль 0,5 × 0,25 = 0,125 м²; 10 м² делится ровно на 80.
    const exact = run({ mode: 'area', manualArea: 10, unitLength: 490, unitHeight: 240, joint: 10, reserve: 0 });
    expect(count(exact.primary.value)).toBe(80);
  });

  it('дробный остаток округляется вверх', () => {
    const over = run({ mode: 'area', manualArea: 10.01, unitLength: 490, unitHeight: 240, joint: 10, reserve: 0 });
    expect(count(over.primary.value)).toBe(81);
  });
});

describe('brick: валидация', () => {
  it('отвергает непозитивные и отрицательные значения', () => {
    for (const overrides of [
      { wallLength: 0 }, { wallHeight: -1 }, { unitLength: 0 }, { unitHeight: 0 },
      { joint: -1 }, { openingsArea: -1 }, { reserve: -5 },
      { mode: 'area', manualArea: 0 },
    ]) {
      const result = run(overrides);
      expect(result.primary.value, JSON.stringify(overrides)).toBe('—');
      expect(result.secondary[0].accent).toBe('red');
    }
  });

  it('проёмы во всю стену не дают отрицательной площади', () => {
    for (const openings of [16.8, 20, 1000]) {
      const result = run({ openingsArea: openings });
      expect(result.primary.value, `проёмы ${openings}`).toBe('—');
      expect(result.secondary[0].value).toContain('всю стену');
    }
  });
});

describe('brick: инварианты на детерминированной сетке', () => {
  const areas = [1, 4.5, 16.8, 50, 250];
  const units = [[250, 65], [400, 200], [600, 250], [88, 190]] as const;
  const joints = [0, 2, 10, 12];
  const reserves = [0, 5, 10, 25];

  it('рост площади не уменьшает количество, рост проёмов не увеличивает', () => {
    for (const [length, height] of units) {
      for (const joint of joints) {
        let previous = -1;
        for (const area of areas) {
          const value = count(run({ mode: 'area', manualArea: area, unitLength: length, unitHeight: height, joint, reserve: 0 }).primary.value);
          expect(value, `площадь ${area}`).toBeGreaterThanOrEqual(previous);
          previous = value;
        }
        let byOpenings = Number.POSITIVE_INFINITY;
        for (const openings of [0, 1, 5, 10]) {
          const value = count(run({ mode: 'area', manualArea: 50, openingsArea: openings, unitLength: length, unitHeight: height, joint, reserve: 0 }).primary.value);
          expect(value, `проёмы ${openings}`).toBeLessThanOrEqual(byOpenings);
          byOpenings = value;
        }
      }
    }
  });

  it('рост запаса не уменьшает количество', () => {
    for (const area of areas) {
      let previous = -1;
      for (const reserve of reserves) {
        const value = count(run({ mode: 'area', manualArea: area, reserve }).primary.value);
        expect(value, `площадь ${area}, запас ${reserve}`).toBeGreaterThanOrEqual(previous);
        previous = value;
      }
    }
  });

  it('камней хватает на площадь, а на единицу меньше — уже нет', () => {
    for (const area of areas) {
      for (const [length, height] of units) {
        for (const joint of joints) {
          const module = masonryModuleArea(length, height, joint);
          const bought = count(run({ mode: 'area', manualArea: area, unitLength: length, unitHeight: height, joint, reserve: 0 }).primary.value);
          const label = `${area} м², ${length}×${height}, шов ${joint}`;
          expect(Number.isInteger(bought), `${label}: не целое`).toBe(true);
          expect(bought * module, `${label}: не хватает`).toBeGreaterThanOrEqual(area - 1e-9);
          expect((bought - 1) * module, `${label}: лишний камень`).toBeLessThan(area);
        }
      }
    }
  });

  it('результат всегда без мусора', () => {
    for (const area of areas) {
      for (const [length, height] of units) {
        for (const reserve of reserves) {
          const result = run({ mode: 'area', manualArea: area, unitLength: length, unitHeight: height, reserve, unitPrice: 12.5 });
          for (const value of [result.primary.value, ...result.secondary.map((r) => r.value), result.note ?? '']) {
            expect(value, `${area}/${length}/${reserve}: «${value}»`).not.toMatch(/NaN|Infinity|undefined|\[object/);
          }
        }
      }
    }
  });
});
