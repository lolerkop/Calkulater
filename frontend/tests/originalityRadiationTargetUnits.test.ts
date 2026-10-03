import { describe, expect, it } from 'vitest';
import { definition } from '../src/calculators/convert-radiation/definition';
import { localization } from '../src/calculators/convert-radiation/localization';
import { shared } from '../src/calculators/convert-radiation/shared.generated';
import { withSharedPhrases } from '../src/lib/platform/runtime';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';

const runtime = { compute: definition.compute, localization: withSharedPhrases(localization, shared) };
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const cases = [
  // Independently evaluated from1rem=.01Sv and the decimal SI prefixes.
  { from: 'mSv', to: 'Sv', input: 125, value: '0,125', english: '0.125', labels: ['В Зв', 'In Sv', 'У Зв', 'In Sv', 'En Sv'] },
  { from: 'mrem', to: 'mSv', input: 250, value: '2,5', english: '2.5', labels: ['В мЗв', 'In mSv', 'У мЗв', 'In mSv', 'En mSv'] },
  { from: 'mSv', to: 'uSv', input: 1, value: '1 000', english: '1,000', labels: ['В мкЗв', 'In µSv', 'У мкЗв', 'In µSv', 'En µSv'] },
  { from: 'uSv', to: 'nSv', input: 4, value: '4 000', english: '4,000', labels: ['В нЗв', 'In nSv', 'У нЗв', 'In nSv', 'En nSv'] },
  { from: 'Sv', to: 'rem', input: .01, value: '1', english: '1', labels: ['В бэр', 'In rem', 'У бер', 'In rem', 'En rem'] },
  { from: 'uSv', to: 'mrem', input: 20, value: '2', english: '2', labels: ['В мбэр', 'In mrem', 'У мбер', 'In mrem', 'En mrem'] },
] as const;

describe('radiation primary labels identify all six selected target units', () => {
  for (const example of cases) locales.forEach((locale, index) => {
    it(`${example.from}→${example.to}/${locale}: visible and copied units accompany the unchanged number`, () => {
      const result = definition.compute({ value: example.input, from: example.from, to: example.to });
      expect(result.primary.value).toBe(example.value);
      const localized = localizeResult(result, locale, definition.id, runtime);
      expect(localized.primary.label).toBe(example.labels[index]);
      expect(localized.primary.value).toBe(locale === 'en' ? example.english : example.value);
      expect(resultToText({ name: 'Radiation dose conversion' }, localized, locale)).toContain(`${example.labels[index]}: ${localized.primary.value}`);
    });
  });
  it('preserves old reference values, secondary outputs and the published example', () => {
    for (const reference of definition.referenceCases!) {
      const result = definition.compute(reference.inputs);
      expect(result.primary.value, reference.name).toBe(reference.expectPrimary);
      for (const secondary of reference.expectSecondary ?? []) expect(result.secondary).toContainEqual(expect.objectContaining(secondary));
    }
    expect(definition.compute(definition.publishedExample!.inputs).primary.value).toBe('1 000');
  });
  it('preserves exact zero and tiny scientific values while retaining the target unit', () => {
    for (const example of cases) {
      const zero = definition.compute({ value: 0, from: example.from, to: example.to });
      expect(zero.primary).toEqual({ label: example.labels[0], value: '0' });
    }
    expect(definition.compute({ value: 1, from: 'nSv', to: 'Sv' }).primary).toEqual({ label: 'В Зв', value: '1,000·10^-9' });
  });
  it('keeps failed or physically unsupported conversions under the generic error result', () => {
    for (const inputs of [
      { value: 0, from: 'Gy', to: 'Sv' }, { value: 1, from: 'Sv', to: 'Bq' },
      { value: 1, from: 'mSv', to: 'constructor' }, { value: true, from: 'mSv', to: 'uSv' },
      { value: 1e308, from: 'Sv', to: 'rem' }, { value: 5e-324, from: 'nSv', to: 'Sv' },
    ]) {
      const result = definition.compute(inputs);
      expect(result.primary).toEqual({ label: 'Результат', value: '—' });
      expect(result.secondary[0].accent).toBe('red');
    }
  });
});
