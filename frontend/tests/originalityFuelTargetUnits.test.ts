import { describe, expect, it } from 'vitest';
import { definition } from '../src/calculators/convert-fuel-economy/definition';
import { localization } from '../src/calculators/convert-fuel-economy/localization';
import { shared } from '../src/calculators/convert-fuel-economy/shared.generated';
import { withSharedPhrases } from '../src/lib/platform/runtime';
import { localizeResult, resultToText } from '../src/components/islands/calculator/resultLocalization';

const runtime = { compute: definition.compute, localization: withSharedPhrases(localization, shared) };
const cases = [
  // 100 × 3.785411784 / 1.609344 / 8 = 29.401822916... US mpg.
  { from: 'l100km', to: 'mpgus', input: 8, value: '29,402', english: '29.402', labels: ['В mpg США', 'In mpg (US)', 'У mpg США', 'In mpg (US)', 'En mpg (EE. UU.)'] },
  // 100 × 3.785411784 / 1.609344 / 35 = 6.720416666... L/100 km.
  { from: 'mpgus', to: 'l100km', input: 35, value: '6,72', english: '6.72', labels: ['В л/100 км', 'In L/100 km', 'У л/100 км', 'In l/100 km', 'En l/100 km'] },
  // Reciprocal consumption: 100 / 8 = 12.5 km/L.
  { from: 'l100km', to: 'kml', input: 8, value: '12,5', english: '12.5', labels: ['В км/л', 'In km/L', 'У км/л', 'In km/l', 'En km/l'] },
  // International mile and imperial gallon: 100 × 4.54609 / 1.609344 / 8.
  { from: 'l100km', to: 'mpguk', input: 8, value: '35,31', english: '35.31', labels: ['В mpg Великобритании', 'In mpg (UK)', 'У mpg Великої Британії', 'In mpg (UK)', 'En mpg (Reino Unido)'] },
] as const;
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;

describe('fuel conversion primary result identifies the selected target unit', () => {
  for (const example of cases) {
    locales.forEach((locale, index) => {
      it(`${example.from} → ${example.to}/${locale}: visible label and copied result retain the target unit`, () => {
        const result = definition.compute({ value: example.input, fromUnit: example.from, toUnit: example.to });
        expect(result.primary.value).toBe(example.value);
        const localized = localizeResult(result, locale, definition.id, runtime);
        expect(localized.primary.label).toBe(example.labels[index]);
        expect(localized.primary.value).toBe(locale === 'en' ? example.english : example.value);
        expect(resultToText({ name: 'Fuel conversion' }, localized, locale)).toContain(`${example.labels[index]}: ${localized.primary.value}`);
      });
    });
  }
  it('preserves all pre-existing primary numbers and secondary results', () => {
    for (const reference of definition.referenceCases!) {
      const result = definition.compute(reference.inputs);
      expect(result.primary.value, reference.name).toBe(reference.expectPrimary);
      for (const secondary of reference.expectSecondary ?? []) expect(result.secondary).toContainEqual(expect.objectContaining(secondary));
    }
  });
  it('keeps identity conversions numeric and uses the target label for every unit', () => {
    for (const example of cases) {
      const result = definition.compute({ value: 6.5, fromUnit: example.to, toUnit: example.to });
      expect(result.primary.value).toBe('6,5');
      expect(result.primary.label).toBe(example.labels[0]);
    }
  });
});
