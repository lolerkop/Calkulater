import { describe, expect, it } from 'vitest';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { sourcesForCurrencies } from '../src/data/currencies';
import { getCalculatorById, getCategories } from '../src/lib/i18n';

const publishedLocales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const currencyIds = ['currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl'] as const;

describe('published currency provenance copy', () => {
  it('does not describe saved rates as demo data or as refreshed by each build', () => {
    for (const locale of publishedLocales) {
      const category = getCategories(locale).find(({ id }) => id === 'currency');
      expect(category, `${locale} currency category`).toBeDefined();
      for (const text of [category!.longDescription, category!.seoDescription, ...category!.faq.map(({ a }) => a)]) {
        expect(text, `${locale} category`).not.toMatch(/demo|MVP|при сборке|під час складання|during the site build|beim Bau|última compilación/i);
      }

      for (const id of currencyIds) {
        const calculator = getCalculatorById(id, locale);
        expect(calculator, `${locale}/${id}`).toBeDefined();
        for (const text of [
          calculator!.longDescription, calculator!.howItWorks, calculator!.disclaimer,
          ...calculator!.faq.map(({ a }) => a),
        ]) {
          expect(text, `${locale}/${id}`).not.toMatch(/demo|MVP|при сборке|під час складання|during the site build|beim Bau|última compilación/i);
        }
      }
    }
  });

  it('attributes each pair to its actual source dates, including fallback', () => {
    const calculator = getCalculatorById('eur-to-mdl', 'en')!;
    const editorial = getCalculatorEditorial(calculator, 'en');
    const sources = sourcesForCurrencies(['EUR', 'MDL']);
    expect(editorial.sources).toHaveLength(sources.length);
    for (const source of sources) {
      const rendered = editorial.sources.find((item) => item.href === source.url);
      expect(rendered?.label).toContain(source.date);
      if (source.fallback) expect(rendered?.label).toMatch(/fallback/i);
    }
  });
});
