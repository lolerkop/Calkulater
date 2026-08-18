import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { allRunners as runners } from '../src/lib/runners.all';
import { buildInitialValues } from '../src/lib/shareLink';
import { creditAnnuityPayment } from '../src/lib/calculators/credit';
import { bmiValue } from '../src/lib/calculators/bmi';
import { shiftDate } from '../src/lib/calculators/dateShift';
import type { CalcResult } from '../src/lib/types';

// Постоянные сторожевые инварианты по доменам. Проверяются не отдельные
// значения, а свойства, которые обязаны выполняться на любом входе: баланс
// сходится к нулю, купленного материала хватает и ни одной лишней единицы,
// обратимые преобразования обратимы, монотонное растёт монотонно. Такие
// проверки переживают смену конкретных чисел и ловят целые классы ошибок.

function resultOf(id: string, overrides: Record<string, unknown> = {}): CalcResult {
  const calculator = calculators.find((item) => item.id === id);
  if (!calculator) throw new Error(`unknown calculator: ${id}`);
  const run = runners[id];
  if (!run) throw new Error(`no runner: ${id}`);
  return run({ ...buildInitialValues(calculator.fields), ...overrides } as never);
}

function leadingCount(value: string | undefined): number {
  const match = value?.match(/^\s*(\d[\d\u00a0]*)/);
  if (!match) throw new Error(`нет ведущего числа: «${value}»`);
  return Number(match[1].replace(/\u00a0/g, ''));
}

const rowOf = (result: CalcResult, label: string) =>
  result.secondary.find((row) => row.label === label)?.value;

// Раннеры печатают числа в ru-RU: неразрывный пробел между тройками и запятая
// как десятичный разделитель.
function num(value: string | undefined): number {
  if (value === undefined) throw new Error('строка результата отсутствует');
  const cleaned = value.replace(/[^\d,.-]/g, '').replace(',', '.');
  const parsed = Number(cleaned);
  if (!Number.isFinite(parsed)) throw new Error(`не число: «${value}»`);
  return parsed;
}

describe('sentinel: аннуитет сходится к нулю', () => {
  it('погашает кредит ровно за срок на всей сетке', () => {
    for (const amount of [50_000, 500_000, 3_000_000]) {
      for (const rate of [0.1, 7, 14, 30]) {
        for (const months of [6, 12, 60, 240]) {
          const payment = creditAnnuityPayment(amount, months, rate);
          // Повторяем амортизацию независимо: остаток растёт на процент и
          // уменьшается на платёж. После последнего платежа долга быть не должно.
          let balance = amount;
          let interestPaid = 0;
          for (let month = 0; month < months; month += 1) {
            const interest = balance * (rate / 100 / 12);
            interestPaid += interest;
            balance = balance + interest - payment;
          }
          const label = `${amount}₽ ${rate}% ${months}мес`;
          expect(Math.abs(balance), `${label}: остаток ${balance}`).toBeLessThan(amount * 1e-9);
          expect(payment * months - amount, `${label}: переплата`).toBeCloseTo(interestPaid, 4);
        }
      }
    }
  });

  it('при нулевой ставке платёж делит сумму нацело', () => {
    for (const amount of [12_000, 999_999]) {
      for (const months of [1, 12, 360]) {
        expect(creditAnnuityPayment(amount, months, 0) * months).toBeCloseTo(amount, 6);
      }
    }
  });

  it('платёж растёт со ставкой и убывает со сроком', () => {
    let previousByRate = 0;
    for (const rate of [0, 5, 10, 20, 40]) {
      const payment = creditAnnuityPayment(1_000_000, 120, rate);
      expect(payment, `ставка ${rate}`).toBeGreaterThan(previousByRate);
      previousByRate = payment;
    }
    let previousByTerm = Number.POSITIVE_INFINITY;
    for (const months of [12, 24, 60, 120, 240]) {
      const payment = creditAnnuityPayment(1_000_000, months, 12);
      expect(payment, `срок ${months}`).toBeLessThan(previousByTerm);
      previousByTerm = payment;
    }
  });
});

describe('sentinel: обратимые финансовые преобразования', () => {
  it('НДС начисляется и выделяется обратно', () => {
    for (const rate of ['10', '20', '22']) {
      for (const amount of [1, 999.99, 12_000, 1_000_000]) {
        const withVat = num(rowOf(resultOf('vat-calculator', { amount, rate, operation: 'add' }), 'Сумма с НДС'));
        const back = num(rowOf(
          resultOf('vat-calculator', { amount: withVat, rate, operation: 'extract' }),
          'Сумма без НДС',
        ));
        expect(back, `${amount} при ${rate}%`).toBeCloseTo(amount, 0);
      }
    }
  });

  it('НДФЛ: обратный расчёт возвращает исходное начисление', () => {
    for (const amount of [30_000, 100_000, 450_000]) {
      const net = num(rowOf(
        resultOf('income-tax-calculator', { amount, period: 'month', direction: 'gross', mode: 'progressive' }),
        'На руки (после налога)',
      ));
      const gross = num(rowOf(
        resultOf('income-tax-calculator', { amount: net, period: 'month', direction: 'net', mode: 'progressive' }),
        'Начислено (до налога)',
      ));
      expect(gross, `начислено ${amount}`).toBeCloseTo(amount, 0);
    }
  });

  it('НДФЛ: эффективная ставка не выходит за границы шкалы и растёт с доходом', () => {
    let previous = 0;
    for (const amount of [500_000, 3_000_000, 6_000_000, 25_000_000, 60_000_000]) {
      const result = resultOf('income-tax-calculator', { amount, period: 'year', direction: 'gross', mode: 'progressive' });
      const effective = num(rowOf(result, 'Эффективная ставка'));
      expect(effective, `${amount}: ниже нижней ступени`).toBeGreaterThanOrEqual(13);
      expect(effective, `${amount}: выше верхней ступени`).toBeLessThanOrEqual(22);
      expect(effective, `${amount}: не монотонна`).toBeGreaterThanOrEqual(previous);
      previous = effective;
    }
  });

  it('скидка: цена минус скидка равна итоговой цене', () => {
    for (const price of [100, 5_000, 123_456.78]) {
      for (const discountPct of [0, 15, 99.9, 100]) {
        const result = resultOf('discount-calculator', { price, mode: 'byPercent', discountPct });
        // Итоговая цена и размер скидки округляются до рубля независимо друг
        // от друга, поэтому их сумма может отличаться от цены не более чем на
        // рубль — но не больше.
        const restored = num(result.primary.value) + num(rowOf(result, 'Размер скидки'));
        expect(Math.abs(restored - price), `${price} −${discountPct}%: восстановлено ${restored}`)
          .toBeLessThanOrEqual(1);
      }
    }
  });
});

describe('sentinel: вклад и сложный процент растут монотонно', () => {
  it('итог не меньше вложенного и растёт со ставкой и сроком', () => {
    let byRate = 0;
    for (const rate of [0, 3, 8, 15]) {
      const value = num(resultOf('deposit-calculator', { amount: 100_000, months: 24, rate, topUp: 0 }).primary.value);
      expect(value, `ставка ${rate}`).toBeGreaterThanOrEqual(100_000);
      expect(value, `ставка ${rate} не растёт`).toBeGreaterThanOrEqual(byRate);
      byRate = value;
    }
    let byTerm = 0;
    for (const years of [1, 3, 10, 25]) {
      const value = num(resultOf('compound-interest', { principal: 100_000, rate: 10, years, topUp: 0 }).primary.value);
      expect(value, `срок ${years} не растёт`).toBeGreaterThan(byTerm);
      byTerm = value;
    }
  });
});

describe('sentinel: строительных материалов хватает и ни одной лишней единицы', () => {
  // Купленного количества должно хватать на требуемый объём работ, а на единицу
  // меньше — уже не хватать. Это ловит и недобор, и лишнее округление вверх.
  const cases = [
    {
      id: 'laminate-calculator', unit: 'упаковка',
      quantity: (o: Record<string, number>) => num(resultOf('laminate-calculator', o).primary.value),
      need: (o: Record<string, number>) => o.length * o.width * (1 + o.reserve / 100),
      per: (o: Record<string, number>) => o.packArea,
      grid: [
        { length: 5, width: 4, packArea: 2.13, reserve: 10 },
        { length: 3.2, width: 2.7, packArea: 1.8, reserve: 0 },
        { length: 12, width: 7.5, packArea: 2.5, reserve: 15 },
        { length: 2, width: 2, packArea: 2, reserve: 0 },
      ],
    },
    {
      id: 'screed-calculator', unit: 'мешок',
      quantity: (o: Record<string, number>) => num(rowOf(resultOf('screed-calculator', { ...o, mode: 'area' }), 'Мешков')),
      need: (o: Record<string, number>) => o.manualArea * o.thickness * o.mixConsumption * (1 + o.reserve / 100),
      per: (o: Record<string, number>) => o.bagWeight,
      grid: [
        { manualArea: 20, thickness: 5, mixConsumption: 18, bagWeight: 25, reserve: 10 },
        { manualArea: 7.5, thickness: 3, mixConsumption: 16, bagWeight: 30, reserve: 0 },
        { manualArea: 100, thickness: 8, mixConsumption: 20, bagWeight: 40, reserve: 5 },
      ],
    },
    {
      id: 'paint-calculator', unit: 'банка',
      // Строка банок имеет вид «4 шт. × 2,5 л», поэтому берётся ведущее число.
      quantity: (o: Record<string, number>) => leadingCount(rowOf(resultOf('paint-calculator', { ...o, mode: 'manual' }), 'Количество банок')),
      need: (o: Record<string, number>) => o.area * o.coats * o.consumption * (1 + o.reserve / 100),
      per: (o: Record<string, number>) => o.canVolume,
      grid: [
        { area: 30, coats: 2, consumption: 0.15, canVolume: 2.5, reserve: 0 },
        { area: 55.5, coats: 3, consumption: 0.12, canVolume: 0.9, reserve: 10 },
        { area: 8, coats: 1, consumption: 0.2, canVolume: 5, reserve: 0 },
      ],
    },
  ];

  for (const scenario of cases) {
    it(`${scenario.id}: количество покрывает потребность и минимально`, () => {
      for (const inputs of scenario.grid) {
        const bought = scenario.quantity(inputs);
        const required = scenario.need(inputs);
        const per = scenario.per(inputs);
        const label = `${scenario.id} ${JSON.stringify(inputs)}`;
        expect(Number.isInteger(bought), `${label}: ${scenario.unit} дробный`).toBe(true);
        expect(bought * per, `${label}: не хватает`).toBeGreaterThanOrEqual(required - 1e-9);
        expect((bought - 1) * per, `${label}: лишняя единица`).toBeLessThan(required - 1e-9);
      }
    });
  }
});

describe('sentinel: календарные преобразования обратимы', () => {
  it('сдвиг на дни вперёд и назад возвращает исходную дату', () => {
    for (const iso of ['2026-01-01', '2024-02-29', '2026-12-31', '2000-01-31']) {
      for (const days of [1, 7, 90, 365, 1000]) {
        const start = new Date(`${iso}T00:00:00`);
        const forward = shiftDate(start, { days }, 1);
        const back = shiftDate(forward, { days }, -1);
        expect(back.getTime(), `${iso} ±${days} дней`).toBe(start.getTime());
      }
    }
  });

  it('усечение месяца никогда не выносит дату в следующий месяц', () => {
    for (const day of [28, 29, 30, 31]) {
      for (let month = 0; month < 12; month += 1) {
        const start = new Date(2026, month, Math.min(day, new Date(2026, month + 1, 0).getDate()));
        const shifted = shiftDate(start, { months: 1 }, 1);
        const expectedMonth = (month + 1) % 12;
        expect(shifted.getMonth(), `${start.toDateString()} + 1 месяц`).toBe(expectedMonth);
      }
    }
  });
});

describe('sentinel: показатели здоровья', () => {
  it('ИМТ растёт с весом и убывает с ростом', () => {
    let byWeight = 0;
    for (const weight of [45, 60, 80, 120]) {
      const value = bmiValue(175, weight);
      expect(value, `вес ${weight}`).toBeGreaterThan(byWeight);
      byWeight = value;
    }
    let byHeight = Number.POSITIVE_INFINITY;
    for (const height of [150, 165, 180, 200]) {
      const value = bmiValue(height, 70);
      expect(value, `рост ${height}`).toBeLessThan(byHeight);
      byHeight = value;
    }
  });

  it('макронутриенты складываются в дневную норму', () => {
    for (const inputs of [
      { gender: 'male', age: 30, height: 175, weight: 70, activity: '1.55', goal: 'maintain' },
      { gender: 'female', age: 45, height: 160, weight: 55, activity: '1.2', goal: 'lose', goalAdjustment: 20 },
      { gender: 'male', age: 22, height: 190, weight: 95, activity: '1.9', goal: 'gain', goalAdjustment: 10 },
    ]) {
      const result = resultOf('calorie-calculator', inputs);
      const target = num(result.primary.value);
      const fromMacros = num(rowOf(result, 'Белки')) * 4
        + num(rowOf(result, 'Жиры')) * 9
        + num(rowOf(result, 'Углеводы')) * 4;
      // Каждый макронутриент округляется до грамма, поэтому сумма может
      // отличаться на несколько килокалорий, но не больше.
      expect(Math.abs(fromMacros - target), `${JSON.stringify(inputs)}: ${fromMacros} против ${target}`)
        .toBeLessThanOrEqual(12);
    }
  });
});

describe('sentinel: ни один раннер не публикует нечисловой результат', () => {
  it('на дефолтах и на граничных значениях полей', () => {
    for (const calculator of calculators) {
      const run = runners[calculator.id];
      const base = buildInitialValues(calculator.fields);
      const variants: Array<Record<string, unknown>> = [{}];
      for (const field of calculator.fields) {
        if (field.type === 'number') {
          for (const value of [field.min, field.max].filter((v) => v !== undefined)) {
            variants.push({ [field.name]: value });
          }
        } else if (field.options) {
          for (const option of field.options) variants.push({ [field.name]: option.value });
        }
      }
      for (const overrides of variants) {
        const result = run({ ...base, ...overrides } as never);
        const values = [
          result.primary.value,
          ...result.secondary.map((row) => row.value),
          ...(result.table?.rows.flat() ?? []),
          result.note ?? '',
        ];
        for (const value of values) {
          expect(value, `${calculator.id} ${JSON.stringify(overrides)}: «${value}»`)
            .not.toMatch(/NaN|Infinity|undefined|\[object/);
        }
      }
    }
  });
});
