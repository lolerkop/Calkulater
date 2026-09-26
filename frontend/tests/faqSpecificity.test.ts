import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';

const enIds = [
  'credit-calculator', 'compound-interest', 'mortgage-calculator', 'discount-calculator',
  'currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl',
  'bmi-calculator', 'calorie-calculator', 'running-pace-calculator',
  'one-rep-max-calculator', 'tile-calculator', 'wallpaper-calculator',
  'laminate-calculator', 'age-calculator', 'working-days-calculator',
];

const esIds = [
  'compound-interest', 'mortgage-calculator', 'currency-converter',
  'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl', 'calorie-calculator',
  'running-pace-calculator', 'one-rep-max-calculator', 'wallpaper-calculator',
  'paint-calculator', 'laminate-calculator', 'working-days-calculator',
];

describe('calculator-specific FAQ copy', () => {
  it.each([
    ['en', enIds, /How accurate is this|require an account|Can I share a .* result\?/i],
    ['es', esIds, /¿Qué exactitud tiene esta|¿Qué exactitud tiene este|¿Hace falta una cuenta|¿Puedo compartir un resultado/i],
  ] as const)('%s pages replace the generic accuracy/account/share FAQ', (locale, ids, genericQuestion) => {
    for (const id of ids) {
      const calculator = getCalculatorById(id, locale);
      expect(calculator, `${locale}/${id} exists`).toBeDefined();
      const faq = calculator!.seoContent?.faq ?? calculator!.faq;
      expect(faq.length, `${locale}/${id} has useful questions`).toBeGreaterThanOrEqual(3);
      expect(new Set(faq.map(({ q }) => q)).size, `${locale}/${id} has distinct questions`).toBe(faq.length);
      for (const { q, a } of faq) {
        expect(q, `${locale}/${id} should not have a template question`).not.toMatch(genericQuestion);
        expect(a.trim().length, `${locale}/${id} needs a substantive answer`).toBeGreaterThan(35);
      }
      // The page renders and serializes the same seoFaq array for its visible FAQ and JSON-LD.
      expect(calculator!.faq).toEqual(faq);
    }
  });
});
