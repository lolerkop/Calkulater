import { describe, expect, it } from 'vitest';
import { calculatorSeoContent } from '../src/data/calculatorSeoContent';
import { getCalculators, locales } from '../src/lib/i18n';

function wordCount(text: string): number {
  return text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

describe('calculator SEO content', () => {
  it('exists for every generated calculator page', () => {
    for (const locale of locales) {
      for (const calculator of getCalculators(locale)) {
        expect(calculator.seoContent, `${locale}/${calculator.id}`).toBeDefined();
      }
    }
  });

  it('keeps dedicated SEO blocks within the editorial brief', () => {
    for (const locale of locales) {
      for (const calculator of getCalculators(locale)) {
        const id = calculator.id;
        const content = calculator.seoContent!;
        expect.soft(wordCount(content.intro), `${locale}/${id} intro`).toBeGreaterThanOrEqual(40);
        expect.soft(wordCount(content.intro), `${locale}/${id} intro`).toBeLessThanOrEqual(80);

        expect.soft(wordCount(content.howItWorks), `${locale}/${id} howItWorks`).toBeGreaterThanOrEqual(120);
        expect.soft(wordCount(content.howItWorks), `${locale}/${id} howItWorks`).toBeLessThanOrEqual(250);

        expect.soft(wordCount(content.example), `${locale}/${id} example`).toBeGreaterThanOrEqual(80);
        expect.soft(wordCount(content.example), `${locale}/${id} example`).toBeLessThanOrEqual(150);

        expect.soft(wordCount(content.tips), `${locale}/${id} tips`).toBeGreaterThanOrEqual(120);
        expect.soft(wordCount(content.tips), `${locale}/${id} tips`).toBeLessThanOrEqual(200);

        expect.soft(content.faq.length, `${locale}/${id} faq count`).toBeGreaterThanOrEqual(4);
        expect.soft(content.faq.length, `${locale}/${id} faq count`).toBeLessThanOrEqual(7);

        for (const item of content.faq) {
          expect.soft(wordCount(item.a), `${locale}/${id} FAQ: ${item.q}`).toBeGreaterThanOrEqual(40);
          expect.soft(wordCount(item.a), `${locale}/${id} FAQ: ${item.q}`).toBeLessThanOrEqual(90);
        }
      }
    }
  });

  it('does not duplicate FAQ questions inside one locale', () => {
    for (const locale of locales) {
      const questions = getCalculators(locale).flatMap((calculator) =>
        calculator.seoContent!.faq.map((item) => item.q.toLowerCase().trim()),
      );
      expect(new Set(questions).size, `${locale} FAQ questions`).toBe(questions.length);
    }
  });

  it('keeps manually written SEO content registered for priority pages', () => {
    expect(Object.keys(calculatorSeoContent.ru)).toContain('credit-calculator');
    expect(Object.keys(calculatorSeoContent.en)).toContain('bmi-calculator');
  });
});
