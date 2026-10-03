import { describe, expect, it } from 'vitest';
import { getCalculatorById, locales } from '../src/lib/i18n';
import { buildInitialValues, buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';
import { validateValues } from '../src/components/islands/calculator/validation';
import { runtimeFor } from '../src/calculators/runtime.generated';

describe('finite numerical values survive form and share-link boundaries', () => {
  for (const locale of locales) {
    const calculator = getCalculatorById('convert-energy', locale)!;
    const defaults = buildInitialValues(calculator.fields);
    const runtime = runtimeFor(calculator.id);
    for (const value of [1e-308, 1e-9, 1e21, 1e308]) it(`${locale}: restores ${value} without replacing it with the default`, () => {
      const values = { ...defaults, value, from: 'ev', to: 'j' };
      const query = buildCalculatorQueryString(calculator.fields, values, locale);
      const restored = readValuesFromSearch(calculator.fields, defaults, query, locale);
      expect(restored.value).toBe(value);
      expect(restored.from).toBe('ev');
      expect(restored.to).toBe('j');
      expect(validateValues(calculator.id, calculator.fields, restored, locale, runtime)).toEqual({});
      if (value === 1e-308) {
        const result = runtime.compute(restored);
        expect(result.primary.value).toBe('—');
        expect(result.secondary).toContainEqual(expect.objectContaining({ value: 'Результат вне допустимого диапазона', accent: 'red' }));
      }
    });
    it(`${locale}: still rejects nonfinite and boolean values`, () => {
      for (const value of [NaN, Infinity, -Infinity, true]) {
        expect(validateValues(calculator.id, calculator.fields, { ...defaults, value }, locale, runtime).value).toBeTruthy();
      }
      expect(readValuesFromSearch(calculator.fields, defaults, '?value=1e309', locale).value).toBe(defaults.value);
    });
    it(`${locale}: retains the original min/max contract`, () => {
      const credit = getCalculatorById('credit-calculator', locale)!;
      const base = buildInitialValues(credit.fields);
      expect(validateValues(credit.id, credit.fields, { ...base, amount: -1e-9 }, locale, runtimeFor(credit.id)).amount).toBeTruthy();
    });
    it(`${locale}: optional numeric fields reject booleans and do not turn them into shared amounts`, () => {
      const cac = getCalculatorById('cac', locale)!;
      const initial = buildInitialValues(cac.fields);
      for (const ltv of [true, false]) {
        const values = { ...initial, ltv };
        expect(validateValues(cac.id, cac.fields, values, locale, runtimeFor(cac.id)).ltv).toBeTruthy();
        const query = buildCalculatorQueryString(cac.fields, values, locale);
        expect(new URLSearchParams(query).has('ltv')).toBe(false);
      }
      expect(validateValues(cac.id, cac.fields, { ...initial, ltv: '' }, locale, runtimeFor(cac.id)).ltv).toBeUndefined();
    });
  }
});
