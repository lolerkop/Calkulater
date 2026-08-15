import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { buildInitialValues } from '../src/lib/shareLink';
import { normalizeValues } from '../src/components/islands/calculator/values';
import type { Field } from '../src/lib/types';

// Фиксируется существующая семантика подготовки значений перед расчётом:
// разбираются только числовые поля, непарсящееся значение остаётся как есть.
function fieldsOf(id: string): Field[] {
  const calculator = calculators.find((item) => item.id === id);
  if (!calculator) throw new Error(`unknown calculator: ${id}`);
  return calculator.fields;
}

const bmi = fieldsOf('bmi-calculator');
const vat = fieldsOf('vat-calculator');
const workingDays = fieldsOf('working-days-calculator');

function normalize(fields: Field[], overrides: Record<string, unknown>, locale = 'ru' as const) {
  return normalizeValues(fields, { ...buildInitialValues(fields), ...overrides }, locale);
}

describe('island values: numeric parsing', () => {
  it('turns integer and decimal input into numbers', () => {
    expect(normalize(bmi, { height: '180' }).height).toBe(180);
    expect(normalize(bmi, { weight: '72,5' }).weight).toBe(72.5);
  });

  it('accepts thousands separators, including non-breaking ones', () => {
    expect(normalize(vat, { amount: '1 000' }).amount).toBe(1000);
    expect(normalize(vat, { amount: '1 000' }).amount).toBe(1000);
  });

  it('leaves an already numeric value untouched', () => {
    // Так приходят значения, восстановленные из query-строки.
    expect(normalize(bmi, { height: 175 }).height).toBe(175);
  });

  it('keeps unparsable and empty input as it was', () => {
    // Отвергнутое значение остаётся строкой — ошибку об этом выдаёт валидатор.
    expect(normalize(bmi, { height: '' }).height).toBe('');
    expect(normalize(bmi, { height: 'abc' }).height).toBe('abc');
    expect(normalize(bmi, { height: '1,2,3' }).height).toBe('1,2,3');
  });

  it('skips boolean values instead of coercing them', () => {
    expect(normalize(bmi, { height: true as unknown as string }).height).toBe(true);
  });
});

describe('island values: locale semantics', () => {
  it('reads a comma group as a thousands separator only in en', () => {
    expect(normalize(vat, { amount: '1,000' }, 'en').amount).toBe(1000);
    expect(normalize(vat, { amount: '1,000' }, 'ru').amount).toBe(1);
  });

  it('reads a dot group as a thousands separator outside en', () => {
    expect(normalize(vat, { amount: '1.000' }, 'ru').amount).toBe(1000);
    expect(normalize(vat, { amount: '1.000' }, 'uk').amount).toBe(1000);
    expect(normalize(vat, { amount: '1.000' }, 'en').amount).toBe(1);
  });
});

describe('island values: non-numeric fields', () => {
  it('does not touch select, toggle, date or textarea values', () => {
    const result = normalize(workingDays, {
      startDate: '2026-02-01',
      endDate: '2026-02-28',
      excludedDates: '2026-02-10',
      includeWeekends: 'no',
    });
    expect(result.startDate).toBe('2026-02-01');
    expect(result.endDate).toBe('2026-02-28');
    expect(result.excludedDates).toBe('2026-02-10');
    expect(result.includeWeekends).toBe('no');

    // Ставка НДС — select, операция — toggle: их нельзя разбирать как числа.
    expect(normalize(vat, { operation: 'extract' }).operation).toBe('extract');
    expect(normalize(vat, { rate: '22' }).rate).toBe('22');
  });

  it('returns a new object and leaves the input untouched', () => {
    const input = { ...buildInitialValues(bmi), height: '180' };
    const output = normalizeValues(bmi, input, 'ru');
    expect(output).not.toBe(input);
    expect(input.height).toBe('180');
    expect(output.height).toBe(180);
  });
});
