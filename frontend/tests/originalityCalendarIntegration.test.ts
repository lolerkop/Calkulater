import { describe, expect, it } from 'vitest';
import { getCalculatorById, locales } from '../src/lib/i18n';
import { runtimeFor, v2DateValidators } from '../src/calculators/runtime.generated';
import { validateValues } from '../src/components/islands/calculator/validation';

describe('date-only calendar validity reaches the actual form', () => {
  for (const id of ['day-of-week', 'week-number']) for (const locale of locales) {
    const page = getCalculatorById(id, locale)!;
    const runtime = runtimeFor(page.id);
    it.each(['0001-01-01', '0099-01-01', '2011-12-30', '2024-02-29'])(`${id}/${locale}: accepts Gregorian %s`, (date) => {
      expect(validateValues(page.id, page.fields, { date }, locale, runtime)).toEqual({});
      expect(runtime.compute({ date }).primary.value).not.toBe('—');
    });
    it.each(['0000-01-01', '1900-02-29', '2024-02-30', '2024-13-01'])(`${id}/${locale}: rejects nonexistent %s`, (date) => {
      expect(validateValues(page.id, page.fields, { date }, locale, runtime).date).toBeTruthy();
      expect(runtime.compute({ date }).primary.value).toBe('—');
    });
  }
  it('retains the two calculator-owned hooks and validates reviewed legacy age dates through the date-only parser', () => {
    expect(Object.keys(v2DateValidators).sort()).toEqual(['day-of-week', 'week-number']);
    const page = getCalculatorById('age-calculator', 'ru')!;
    expect(runtimeFor(page.id).validateDate).toBeUndefined();
    expect(validateValues(page.id, page.fields, { birthDate: '0001-01-01', targetDate: '2024-01-01' }, 'ru', runtimeFor(page.id)).birthDate).toBeUndefined();
  });
});
