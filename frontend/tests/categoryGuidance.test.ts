import { describe, expect, it } from 'vitest';
import { categoryGuidance, getCategoryGuidance, guidanceLocales } from '../src/data/categoryGuidance';
import { getCalculatorsByCategory, getCategories } from '../src/lib/i18n';

describe('subject guidance for published category pages', () => {
  for (const locale of guidanceLocales) {
    for (const category of getCategories(locale)) {
      it(`${locale}/${category.id}: choices lead to available tools in this category`, () => {
        const guide = getCategoryGuidance(category.id, locale)!;
        expect(guide).toBeDefined();
        expect(guide.choices).toHaveLength(2);
        const tools = getCalculatorsByCategory(category.id, locale);
        for (const choice of guide.choices) {
          const target = tools.find((item) => item.id === choice.calculatorId);
          expect(target, choice.calculatorId).toBeDefined();
          expect(target!.fullPath).toMatch(new RegExp(`^/${locale}/`));
          expect(choice.reason.trim()).not.toBe('');
        }
        expect(guide.checklist.trim()).not.toBe('');
        expect(guide.mistake.trim()).not.toBe('');
        const texts = [...guide.choices.map((choice) => choice.reason), guide.checklist, guide.mistake];
        for (const text of texts) {
          if (locale === 'de' || locale === 'es' || locale === 'en') expect(text).not.toMatch(/[а-яёіїєґ]/i);
          if (locale === 'ru' || locale === 'uk') expect(text).toMatch(/[а-яёіїєґ]/i);
        }
      });
    }
  }

  it('has subject-specific guidance and no public fallback for an unsupported language', () => {
    for (const locale of guidanceLocales) {
      const copy = Object.values(categoryGuidance).map((locales) => JSON.stringify(locales[locale]));
      expect(new Set(copy).size).toBe(getCategories(locale).length);
    }
    expect(getCategoryGuidance('finance', 'fr')).toBeUndefined();
  });

  it('keeps the important distinctions in the selected category contracts', () => {
    expect(categoryGuidance.currency.ru.mistake).toContain('не гарантирует');
    expect(categoryGuidance.physics.en.checklist).toContain('metres per second');
    expect(categoryGuidance.computers.en.mistake).toContain('eight bits');
    expect(categoryGuidance.education.en.mistake).toContain('unequal weights');
    expect(categoryGuidance['date-time'].en.mistake).toContain('does not select');
    expect(categoryGuidance.electronics.en.checklist).toContain('unit selected on the form');
    expect(categoryGuidance.electronics.en.checklist).not.toContain('Convert milliamps to amps');
    expect(categoryGuidance.chemistry.en.checklist).toContain('per volume');
    expect(categoryGuidance.chemistry.en.mistake).toContain('solution masses');
  });
});
