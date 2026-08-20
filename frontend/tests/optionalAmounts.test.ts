import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { allRunners as runners } from '../src/lib/runners.all';
import { buildInitialValues } from '../src/lib/shareLink';
import { validateValues } from '../src/components/islands/calculator/validation';
import { isPartialNumber, normalizeValues } from '../src/components/islands/calculator/values';
import type { FormValues } from '../src/components/islands/calculator/values';

// Необязательные суммы и незакрытые дроби.
//
// Раннеры сверяют доплаты, сборы и цены с нулём и при нуле просто не выводят
// зависящую от них строку — нуль для них законное «ничего». Валидатор же считал
// ошибкой любое пустое числовое поле, поэтому стёртая цена гасила весь расчёт:
// вместо «905 шт.» посетитель получал «Расчёт временно недоступен».
//
// Второй случай — набор дроби. Поля дробные, и путь к «1,5» обязательно проходит
// через «1,», которое парсер числом не считает. Результат пропадал между
// нажатиями клавиш.
//
// Тесты закрепляют обе стороны: необязательное пустое и неполное число не
// ошибка, а вот настоящий мусор и пустое ОБЯЗАТЕЛЬНОЕ поле — ошибка по-прежнему.
// Ослабить проверку ради красивой панели нельзя: подставлять нуль вместо
// обязательной величины значит показать правдоподобное, но неверное число.

const базовые = (id: string): FormValues => {
  const calc = calculators.find((item) => item.id === id)!;
  return buildInitialValues(calc.fields) as FormValues;
};
const поля = (id: string) => calculators.find((item) => item.id === id)!.fields;
const считать = (id: string, values: FormValues) =>
  runners[id](normalizeValues(поля(id), values, 'ru') as never);
const мусор = (текст: string) => /NaN|Infinity|undefined|\[object/.test(текст);

// Ровно те поля, у которых раннер защищает строку условием «> 0».
const НЕОБЯЗАТЕЛЬНЫЕ: Array<[string, string]> = [
  ['contribution-margin', 'volume'],
  ['roi', 'extra'],
  ['shipping-per-unit', 'packaging'],
  ['dividend-yield', 'shares'],
  ['cac', 'ltv'],
  ['credit-calculator', 'extraPayment'],
  ['credit-calculator', 'oneTimeFee'],
  ['mortgage-calculator', 'extraPayment'],
  ['mortgage-calculator', 'monthlyInsurance'],
  ['break-even-calculator', 'plannedUnits'],
  ['brick-calculator', 'unitPrice'],
  ['tile-calculator', 'packPrice'],
  ['wallpaper-calculator', 'rollPrice'],
  ['paint-calculator', 'canPrice'],
  ['laminate-calculator', 'packPrice'],
  ['laminate-calculator', 'underlayPrice'],
  ['screed-calculator', 'bagPrice'],
  ['test-score-percent', 'passMark'],
  ['reading-speed', 'bookWords'],
  ['power-to-weight', 'payload'],
  ['electricity-usage', 'tariff'],
  ['rule-of-72', 'amount'],
  ['ctr', 'cost'],
  ['network-bandwidth', 'overhead'],
  ['trip-cost', 'tolls'],
  ['real-return', 'amount'],
  ['ltv', 'cac'],
  ['rental-yield', 'annualCosts'],
  ['stock-duration', 'reserveDays'],
  ['bike-gear-ratio', 'wheelCircumference'],
  ['board-volume', 'pricePerM3'],
  ['generator-fuel', 'price'],
  ['hydrostatic-pressure', 'p0'],
  ['fee-chain', 'storage'],
  ['trip-budget', 'other'],
  ['print-3d-cost', 'wearPerHour'],
  ['print-3d-cost', 'markupPct'],
  ['freelance-rate', 'expenses'],
  ['internet-traffic', 'quotaGb'],
  ['currency-exchange-fee', 'feeFixed'],
];

describe('необязательные суммы', () => {
  it('помечены в реестре ровно там, где раннер сверяет их с нулём', () => {
    const помечены = calculators.flatMap((calc) =>
      calc.fields.filter((field) => field.optional).map((field) => `${calc.id}.${field.name}`));
    expect(помечены.sort()).toEqual(НЕОБЯЗАТЕЛЬНЫЕ.map(([c, f]) => `${c}.${f}`).sort());
  });

  it('у каждого нуль объявлен допустимым и является значением по умолчанию', () => {
    for (const [id, name] of НЕОБЯЗАТЕЛЬНЫЕ) {
      const field = поля(id).find((item) => item.name === name)!;
      expect(field.min, `${id}.${name}: min`).toBe(0);
      expect(field.defaultValue, `${id}.${name}: default`).toBe(0);
    }
  });

  it.each(НЕОБЯЗАТЕЛЬНЫЕ)('%s: стёртое поле %s не ошибка, расчёт остаётся', (id, name) => {
    const values = { ...базовые(id), [name]: '' } as FormValues;
    expect(validateValues(id, поля(id), values, 'ru'), `${id}.${name}`).toEqual({});

    const результат = считать(id, values);
    expect(результат.primary.value, `${id}.${name}: основной результат`).not.toBe('—');
    for (const текст of [результат.primary.value, ...результат.secondary.map((r) => r.value), результат.note ?? '']) {
      expect(мусор(текст), `${id}.${name}: «${текст}»`).toBe(false);
    }
  });

  it.each(НЕОБЯЗАТЕЛЬНЫЕ)('%s: стёртое %s даёт тот же результат, что явный нуль', (id, name) => {
    const пусто = считать(id, { ...базовые(id), [name]: '' } as FormValues);
    const нуль = считать(id, { ...базовые(id), [name]: 0 } as FormValues);
    expect(пусто.primary.value).toBe(нуль.primary.value);
    expect(пусто.secondary.map((r) => r.label)).toEqual(нуль.secondary.map((r) => r.label));
  });

  it.each(НЕОБЯЗАТЕЛЬНЫЕ)('%s: заполненное %s возвращает зависящую строку', (id, name) => {
    const пусто = считать(id, { ...базовые(id), [name]: '' } as FormValues);
    const заполнено = считать(id, { ...базовые(id), [name]: 100 } as FormValues);
    expect(заполнено.secondary.length, `${id}.${name}`).toBeGreaterThan(пусто.secondary.length);
  });

  it('обязательные поля стереть по-прежнему нельзя', () => {
    for (const [id, name] of [
      ['credit-calculator', 'amount'],
      ['currency-converter', 'amount'],
      ['deposit-calculator', 'amount'],
      ['break-even-calculator', 'fixedCosts'],
      ['break-even-calculator', 'unitPrice'],
      ['bmi-calculator', 'height'],
      ['brick-calculator', 'wallLength'],
    ] as const) {
      const errors = validateValues(id, поля(id), { ...базовые(id), [name]: '' } as FormValues, 'ru');
      expect(Object.keys(errors), `${id}.${name} обязано остаться ошибкой`).toContain(name);
    }
  });
});

describe('незакрытая дробь', () => {
  it('распознаётся только у настоящих префиксов числа', () => {
    for (const текст of ['-', '.', ',', '1.', '1,', '-1.', '12 ', ' 1,']) {
      expect(isPartialNumber(текст), `«${текст}»`).toBe(true);
    }
    for (const текст of ['', '   ', 'abc', '1e3', '1,2,3', '--1', '1..', 'p1']) {
      expect(isPartialNumber(текст), `«${текст}»`).toBe(false);
    }
  });

  it('не ругается, пока посетитель набирает число', () => {
    for (const текст of ['1,', '1.', '-', '.']) {
      const errors = validateValues('credit-calculator', поля('credit-calculator'),
        { ...базовые('credit-calculator'), rate: текст } as FormValues, 'ru');
      expect(errors, `rate=«${текст}»`).toEqual({});
    }
  });

  it('считает по набранной части и не отдаёт мусор', () => {
    const по1 = считать('credit-calculator', { ...базовые('credit-calculator'), rate: '1,' } as FormValues);
    const ровно1 = считать('credit-calculator', { ...базовые('credit-calculator'), rate: 1 } as FormValues);
    expect(по1.primary.value).toBe(ровно1.primary.value);

    for (const текст of ['1,', '1.', '-', '.']) {
      const результат = считать('credit-calculator', { ...базовые('credit-calculator'), rate: текст } as FormValues);
      for (const значение of [результат.primary.value, ...результат.secondary.map((r) => r.value)]) {
        expect(мусор(значение), `rate=«${текст}»: «${значение}»`).toBe(false);
      }
    }
  });

  it('настоящий мусор остаётся ошибкой', () => {
    for (const текст of ['abc', '1e3', '1,2,3', '--1', '1..']) {
      const errors = validateValues('credit-calculator', поля('credit-calculator'),
        { ...базовые('credit-calculator'), rate: текст } as FormValues, 'ru');
      expect(Object.keys(errors), `rate=«${текст}» обязано остаться ошибкой`).toContain('rate');
    }
  });

  it('границы min и max по-прежнему проверяются', () => {
    const ниже = validateValues('bmi-calculator', поля('bmi-calculator'),
      { ...базовые('bmi-calculator'), height: 0 } as FormValues, 'ru');
    expect(Object.keys(ниже)).toContain('height');
    const выше = validateValues('body-fat-calculator', поля('body-fat-calculator'),
      { ...базовые('body-fat-calculator'), neck: 999 } as FormValues, 'ru');
    expect(Object.keys(выше)).toContain('neck');
  });
});

describe('все опубликованные калькуляторы переживают стирание любого поля', () => {
  it('ни один не отдаёт NaN, Infinity или undefined', () => {
    for (const calc of calculators) {
      const run = runners[calc.id];
      if (!run) continue;
      for (const field of calc.fields.filter((item) => item.type === 'number')) {
        const values = { ...(buildInitialValues(calc.fields) as FormValues), [field.name]: '' };
        const errors = validateValues(calc.id, calc.fields, values, 'ru');
        // Когда есть ошибка, результат посетителю не показывается, но упасть
        // раннер всё равно не должен.
        let результат;
        try {
          результат = run(normalizeValues(calc.fields, values, 'ru') as never);
        } catch (error) {
          throw new Error(`${calc.id}.${field.name}: раннер упал — ${String(error)}`);
        }
        if (Object.keys(errors).length > 0) continue;
        for (const текст of [результат.primary.value, ...результат.secondary.map((r) => r.value), результат.note ?? '']) {
          expect(мусор(текст), `${calc.id}.${field.name} без ошибок: «${текст}»`).toBe(false);
        }
      }
    }
  });
});
