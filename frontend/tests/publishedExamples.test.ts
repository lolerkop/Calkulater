import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { calculatorSeoContent } from '../src/data/calculatorSeoContent';
import { publishedExamples } from '../src/data/publishedExamples';
import { getCalculatorById, getCalculators, locales } from '../src/lib/i18n';
import { runners } from '../src/lib/runners';

const normalize = (value: string) => value.replace(/[\s\u00a0\u202f]+/g, ' ').trim();

describe('published examples', () => {
  it('covers every published calculator example', () => {
    const coveredRoutes = new Set(
      publishedExamples.map((example) => `${example.locale}:${example.calculatorId}`),
    );
    const publishedRoutes = new Set(
      locales.flatMap((locale) =>
        getCalculators(locale).map((calculator) => `${locale}:${calculator.id}`),
      ),
    );
    expect(coveredRoutes).toEqual(publishedRoutes);
    expect(new Set(publishedExamples.map((example) => example.calculatorId))).toEqual(
      new Set(calculators.map((calculator) => calculator.id)),
    );
  });

  it('covers every manually authored SEO example', () => {
    for (const [locale, contentByCalculator] of Object.entries(calculatorSeoContent)) {
      for (const calculatorId of Object.keys(contentByCalculator)) {
        expect(
          publishedExamples.some((example) =>
            example.locale === locale
            && example.calculatorId === calculatorId
            && example.exampleKind === 'seo'),
          `${locale}:${calculatorId}`,
        ).toBe(true);
      }
    }
  });

  for (const example of publishedExamples) {
    it(`${example.calculatorId}: ${JSON.stringify(example.input)}`, () => {
      const calculator = getCalculatorById(example.calculatorId, example.locale);
      expect(calculator).toBeDefined();
      expect(example.source).toBe(calculator!.fullPath);

      const result = runners[example.calculatorId](example.input);
      const rendered = normalize(JSON.stringify(result));
      for (const expected of example.expected) {
        expect(rendered).toContain(normalize(expected));
      }
    });
  }
});
