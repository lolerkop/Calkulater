import { describe, expect, it } from 'vitest';
import { v2Runtimes } from '../src/calculators/runtime.generated';
import { calculators } from '../src/data/calculators';
import { buildInitialValues } from '../src/lib/shareLink';
import {
  EMPTY_ERRORS,
  isVisible,
  validateValues,
} from '../src/components/islands/calculator/validation';
import type { Field } from '../src/lib/types';

// Проверяется вынесенный валидатор острова на реальных полях калькуляторов,
// а не на выдуманных схемах: набор правил зависит от конкретных имён полей
// и идентификаторов калькуляторов.
function fieldsOf(id: string): Field[] {
  const calculator = calculators.find((item) => item.id === id);
  if (!calculator) throw new Error(`unknown calculator: ${id}`);
  return calculator.fields;
}

const bmi = fieldsOf('bmi-calculator');
const incomeTax = fieldsOf('income-tax-calculator');
const workingDays = fieldsOf('working-days-calculator');
const age = fieldsOf('age-calculator');
const percent = fieldsOf('percent-calculator');

function validate(id: string, fields: Field[], overrides: Record<string, unknown> = {}, locale = 'ru' as const) {
  return validateValues(id, fields, { ...buildInitialValues(fields), ...overrides }, locale, v2Runtimes[id]);
}

describe('island validation: numbers', () => {
  it('accepts the shipped defaults', () => {
    expect(validate('bmi-calculator', bmi)).toEqual({});
  });

  it('reports an empty or unparsable number', () => {
    expect(validate('bmi-calculator', bmi, { height: '' }).height).toBe('Введите число.');
    expect(validate('bmi-calculator', bmi, { height: 'abc' }).height).toBe('Введите число.');
  });

  it('reports values below the field minimum', () => {
    // height объявлен с min: 1
    expect(validate('bmi-calculator', bmi, { height: 0 }).height).toBe('Минимум 1.');
    expect(validate('bmi-calculator', bmi, { height: 1 }).height).toBeUndefined();
  });

  it('reports values above the field maximum', () => {
    // rate объявлен с max: 100 и виден только в режиме fixed
    const errors = validate('income-tax-calculator', incomeTax, { mode: 'fixed', rate: 200 });
    expect(errors.rate).toBe('Максимум 100.');
  });

  it('parses localized input the same way the calculator does', () => {
    expect(validate('bmi-calculator', bmi, { weight: '72,5' }).weight).toBeUndefined();
    expect(validate('bmi-calculator', bmi, { weight: '1 000' }).weight).toBeUndefined();
  });
});

describe('island validation: conditional visibility', () => {
  it('treats a field without showIf as visible', () => {
    const height = bmi.find((field) => field.name === 'height')!;
    expect(isVisible(height, {})).toBe(true);
  });

  it('follows the controlling field', () => {
    const rate = incomeTax.find((field) => field.name === 'rate')!;
    expect(isVisible(rate, { mode: 'fixed' })).toBe(true);
    expect(isVisible(rate, { mode: 'progressive' })).toBe(false);
  });

  it('does not block the calculator on an invalid hidden field', () => {
    // Значение вне диапазона, но поле скрыто режимом progressive.
    const errors = validate('income-tax-calculator', incomeTax, { mode: 'progressive', rate: 999 });
    expect(errors).toEqual({});
    // В видимом состоянии та же величина уже ошибка.
    expect(validate('income-tax-calculator', incomeTax, { mode: 'fixed', rate: 999 }).rate).toBe('Максимум 100.');
  });
});

describe('island validation: dates', () => {
  it('requires the dates a calculator cannot work without', () => {
    // На сервере автоматические даты пусты, и это именно тот случай.
    const errors = validate('working-days-calculator', workingDays);
    expect(errors.startDate).toBe('Выберите корректную дату.');
    expect(errors.endDate).toBe('Выберите корректную дату.');
  });

  it('rejects a syntactically valid but non-existent date', () => {
    const errors = validate('working-days-calculator', workingDays, {
      startDate: '2026-02-31',
      endDate: '2026-03-05',
    });
    expect(errors.startDate).toBe('Выберите корректную дату.');
  });

  it('leaves an optional empty date alone', () => {
    // targetDate необязательна, birthDate имеет собственный дефолт.
    expect(validate('age-calculator', age, { targetDate: '' }).targetDate).toBeUndefined();
  });

  it('checks the order of a date range', () => {
    const errors = validate('working-days-calculator', workingDays, {
      startDate: '2026-02-10',
      endDate: '2026-02-01',
    });
    expect(errors.endDate).toBe('Дата окончания не может быть раньше даты начала.');
  });

  it('checks that the age target is not before the birth date', () => {
    const errors = validate('age-calculator', age, {
      birthDate: '2026-02-10',
      targetDate: '2025-02-10',
    });
    expect(errors.targetDate).toBe('Дата расчёта не может быть раньше даты рождения.');
  });
});

describe('island validation: calculator-specific rules', () => {
  it('rejects a zero divisor in the percentage calculator', () => {
    expect(validate('percent-calculator', percent, { mode: 'what', b: 0 }).b)
      .toBe('Значение не может быть равно нулю.');
    expect(validate('percent-calculator', percent, { mode: 'change', a: 0 }).a)
      .toBe('Значение не может быть равно нулю.');
    // В режиме of ноль допустим.
    expect(validate('percent-calculator', percent, { mode: 'of', b: 0 }).b).toBeUndefined();
  });

  it('lists malformed excluded dates', () => {
    const errors = validate('working-days-calculator', workingDays, {
      startDate: '2026-02-01',
      endDate: '2026-02-28',
      excludedDates: '2026-02-31, 2026-13-01',
    });
    expect(errors.excludedDates).toBe('Используйте формат ГГГГ-ММ-ДД: 2026-02-31, 2026-13-01');
  });
});

describe('island validation: locales and contract', () => {
  it('returns messages in the requested locale', () => {
    expect(validate('bmi-calculator', bmi, { height: '' }, 'uk').height).toBe('Введіть число.');
    expect(validate('bmi-calculator', bmi, { height: '' }, 'en').height).toBe('Enter a number.');
    expect(validate('working-days-calculator', workingDays, {}, 'en').startDate).toBe('Choose a valid date.');
    expect(validate('working-days-calculator', workingDays, {}, 'uk').startDate).toBe('Оберіть коректну дату.');
  });

  it('exposes a frozen empty-error object for the pre-hydration render', () => {
    expect(EMPTY_ERRORS).toEqual({});
    expect(Object.isFrozen(EMPTY_ERRORS)).toBe(true);
  });
});
