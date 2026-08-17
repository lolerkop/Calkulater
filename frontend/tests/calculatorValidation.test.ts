import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { calcAge } from '../src/lib/calculators/age';
import { bmiValue, calcBmi } from '../src/lib/calculators/bmi';
import { convertCurrency } from '../src/lib/calculators/currency';
import { calcProgressiveTax, calcIncomeTax } from '../src/lib/calculators/incomeTax';
import { calcPercent } from '../src/calculators/percent-calculator/compute';
import { calcVat } from '../src/lib/calculators/vat';
import { calcWorkingDays, parseExcludedDates } from '../src/lib/calculators/workingDays';
import { parseLocalizedNumber } from '../src/lib/format';

const normalized = (value: string) => value.replace(/[\s\u00a0\u202f]+/g, ' ');

describe('tolerant number parser', () => {
  it.each([
    ['1000', 'ru', 1000],
    ['1 000', 'ru', 1000],
    ['1\u00a0000', 'ru', 1000],
    ['1\u202f000', 'ru', 1000],
    ['1,000', 'en', 1000],
    ['1.000', 'ru', 1000],
    ['1,000', 'ru', 1],
    ['1.000', 'en', 1],
    ['1.5', 'en', 1.5],
    ['1,5', 'ru', 1.5],
  ])('parses %s for %s', (value, locale, expected) => {
    expect(parseLocalizedNumber(value, locale)).toBe(expected);
  });

  it('rejects malformed numbers', () => {
    expect(parseLocalizedNumber('1,2,3', 'ru')).toBeNull();
    expect(parseLocalizedNumber('abc', 'en')).toBeNull();
  });
});

describe('required calculator boundaries', () => {
  it('calculates percentage examples and rejects division by zero', () => {
    expect(calcPercent({ mode: 'of', a: 15, b: 2000 }).primary.value).toBe('300,00');
    expect(calcPercent({ mode: 'change', a: 4000, b: 4800 }).primary.value).toBe('+20,00%');
    expect(calcPercent({ mode: 'what', a: 10, b: 0 }).primary.value).toBe('—');
  });

  it('calculates VAT both ways and warns about incompatible date/rate', () => {
    const extract = calcVat({ amount: 12200, rate: 22, operation: 'extract' });
    const add = calcVat({ amount: 10000, rate: 22, operation: 'add' });
    expect(normalized(JSON.stringify(extract))).toContain('2 200 ₽');
    expect(normalized(JSON.stringify(extract))).toContain('10 000 ₽');
    expect(normalized(JSON.stringify(add))).toContain('2 200 ₽');
    expect(normalized(JSON.stringify(add))).toContain('12 200 ₽');
    expect(calcVat({ amount: 10000, rate: 20, operation: 'add', operationDate: '2026-01-01' }).note).toContain('22%');
  });

  it.each([
    [2_400_000, 312_000],
    [2_400_001, 312_000.15],
    [5_000_000, 702_000],
    [5_000_001, 702_000.18],
    [20_000_000, 3_402_000],
    [20_000_001, 3_402_000.20],
    [50_000_000, 9_402_000],
    [50_000_001, 9_402_000.22],
  ])('calculates marginal tax at %d', (income, expected) => {
    expect(calcProgressiveTax(income)).toBeCloseTo(expected, 6);
  });

  it('calculates monthly tax at the first annual threshold', () => {
    const result = normalized(JSON.stringify(calcIncomeTax({ amount: 200000, period: 'month', mode: 'progressive', direction: 'gross' })));
    expect(result).toContain('26 000 ₽');
    expect(result).toContain('174 000 ₽');
  });

  it('calculates BMI and rejects zero height', () => {
    expect(bmiValue(175, 72)).toBeCloseTo(23.51, 2);
    expect(calcBmi({ weight: 72, height: 175 }).primary.value).toBe('23,5');
    expect(calcBmi({ weight: 72, height: 0 }).primary.value).toBe('—');
  });

  it('uses February 28 for leap-day birthdays in non-leap years', () => {
    expect(calcAge({ birthDate: '2000-02-29', targetDate: '2025-02-28' }).primary.value).toContain('25 лет, 0 месяцев, 0 дней');
    expect(calcAge({ birthDate: '2000-02-29', targetDate: '2025-03-01' }).primary.value).toContain('25 лет, 0 месяцев, 1 день');
    expect(calcAge({ birthDate: '2025-02-31', targetDate: '2026-02-01' }).primary.value).toBe('—');
  });

  it('deduplicates excluded dates and rejects invalid dates', () => {
    expect(parseExcludedDates('2026-02-02, 2026-02-02').dates.size).toBe(1);
    expect(parseExcludedDates('2026-02-31').invalid).toEqual(['2026-02-31']);
    const duplicateResult = calcWorkingDays({ startDate: '2026-02-02', endDate: '2026-02-06', excludedDates: '2026-02-03, 2026-02-03' });
    expect(duplicateResult.secondary.find((row) => row.label === 'Исключённые даты')?.value).toBe('1');
    expect(calcWorkingDays({ startDate: '2026-02-01', endDate: '2026-02-28', excludedDates: '2026-02-31' }).primary.value).toBe('—');
  });

  it('keeps same-currency conversion unchanged and locks pair pages', () => {
    expect(convertCurrency(100, 'USD', 'USD')).toBe(100);
    for (const id of ['usd-to-eur', 'eur-to-mdl', 'usd-to-mdl']) {
      const calculator = calculators.find((item) => item.id === id)!;
      expect(calculator.fields.find((field) => field.name === 'from')?.readOnly).toBe(true);
      expect(calculator.fields.find((field) => field.name === 'to')?.readOnly).toBe(true);
    }
  });
});
