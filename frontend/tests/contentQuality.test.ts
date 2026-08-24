import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getCalculatorEditorial, contentReviewedAt } from '../src/data/calculatorEditorial';
import { publishedExamples } from '../src/data/publishedExamples';
import { getCalculators } from '../src/lib/i18n';

const priorityPages = [
  { locale: 'ru', id: 'age-calculator' },
  { locale: 'ru', id: 'tile-calculator' },
  { locale: 'ru', id: 'currency-converter' },
  { locale: 'ru', id: 'usd-to-eur' },
  { locale: 'uk', id: 'bmi-calculator' },
  { locale: 'ru', id: 'income-tax-calculator' },
  { locale: 'ru', id: 'vat-calculator' },
] as const;

function priorityCalculator(locale: string, id: string) {
  const calculator = getCalculators(locale).find((item) => item.id === id);
  expect(calculator, `${locale}/${id}`).toBeDefined();
  return calculator!;
}

describe('on-page content quality', () => {
  it('keeps priority pages specific and backed by verified examples', () => {
    for (const page of priorityPages) {
      const calculator = priorityCalculator(page.locale, page.id);
      const content = calculator.seoContent!;
      expect(content.intro).toBe(calculator.longDescription);
      expect(content.howItWorks).toBe(calculator.howItWorks);
      expect(content.example).toBe(calculator.example);
      expect(content.faq).toEqual(calculator.faq);
      expect(publishedExamples.some((example) => example.calculatorId === page.id && example.locale === page.locale)).toBe(true);
    }
  });

  it('adds reviewed sources and limitations to priority pages', () => {
    for (const page of priorityPages) {
      const editorial = getCalculatorEditorial(priorityCalculator(page.locale, page.id), page.locale);
      expect(editorial.reviewedAt).toBe(contentReviewedAt);
      expect(editorial.method.trim()).not.toBe('');
      expect(editorial.sources.length).toBeGreaterThan(0);
      expect(editorial.limitation.trim()).not.toBe('');
    }

    expect(getCalculatorEditorial(priorityCalculator('ru', 'currency-converter'), 'ru').sources[0].href).toBe('https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html');
    expect(getCalculatorEditorial(priorityCalculator('ru', 'income-tax-calculator'), 'ru').sources[0].href).toContain('nalog.gov.ru');
    expect(getCalculatorEditorial(priorityCalculator('ru', 'vat-calculator'), 'ru').sources[0].href).toContain('nalog.gov.ru');
    expect(getCalculatorEditorial(priorityCalculator('uk', 'bmi-calculator'), 'uk').sources[0].href).toContain('who.int');
  });

  it('renders visible source data and only emits FAQ schema for visible FAQ', () => {
    const calculatorPage = readFileSync('src/pages/[locale]/[category]/[calculator].astro', 'utf8');
    expect(calculatorPage).toContain('data-testid="calculator-source-review"');
    expect(calculatorPage).toContain('data-testid="calculator-fields"');
    expect(calculatorPage).toContain('dateModified: editorial.reviewedAt');
    expect(calculatorPage).toContain('...(seoFaq.length > 0 ? [faqJsonLd(seoFaq)] : [])');
    expect(calculatorPage).toContain('{seoFaq.length > 0 && (');
  });

  it('replaces category keyword chips with natural navigation links', () => {
    const categoryPage = readFileSync('src/pages/[locale]/[category]/index.astro', 'utf8');
    expect(categoryPage).not.toContain('keywordChips');
    expect(categoryPage).not.toContain('category-keywords');
    expect(categoryPage).toContain('data-testid="category-useful-links"');
  });
});
