import { describe, expect, it } from 'vitest';
import { calculators, newCalculators } from '../src/data/calculators';
import { categories } from '../src/data/categories';
import { calculatorGuidance } from '../src/lib/calculatorGuidance';
import { calculatorFreshness } from '../src/lib/calculatorFreshness';
import { runners } from '../src/lib/runners';
import { lastUpdated as currencyRatesUpdatedAt } from '../src/data/currencies';

const categoryIds = new Set(categories.map((category) => category.id));
const categorySlugsById = new Map(categories.map((category) => [category.id, category.slug]));
const calculatorIds = new Set(calculators.map((calculator) => calculator.id));

function expectUnique(values: string[], label: string) {
  const duplicates = values.filter((value, index) => values.indexOf(value) !== index);
  expect([...new Set(duplicates)], label).toEqual([]);
}

describe('data quality: calculators', () => {
  it('has unique ids, slugs and full paths', () => {
    expect(new Set(calculators.map((calculator) => calculator.id)).size).toBe(calculators.length);
    expect(new Set(calculators.map((calculator) => calculator.slug)).size).toBe(calculators.length);
    expect(new Set(calculators.map((calculator) => calculator.fullPath)).size).toBe(calculators.length);
  });

  it('has valid category and URL shape', () => {
    for (const calculator of calculators) {
      const categorySlug = categorySlugsById.get(calculator.category);
      expect(categoryIds.has(calculator.category)).toBe(true);
      expect(calculator.fullPath).toBe(`/${categorySlug}/${calculator.slug}/`);
      expect(calculator.fullPath.endsWith('/')).toBe(true);
    }
  });

  it('has runner for every calculator', () => {
    for (const calculator of calculators) {
      expect(runners[calculator.id], calculator.id).toBeTypeOf('function');
    }
  });

  it('has complete SEO and content blocks', () => {
    for (const calculator of calculators) {
      expect(calculator.seoTitle.length, `${calculator.id}: seoTitle`).toBeGreaterThanOrEqual(25);
      expect(calculator.seoTitle.length, `${calculator.id}: seoTitle`).toBeLessThanOrEqual(90);
      expect(calculator.seoDescription.length, `${calculator.id}: seoDescription`).toBeGreaterThanOrEqual(80);
      expect(calculator.seoDescription.length, `${calculator.id}: seoDescription`).toBeLessThanOrEqual(170);
      expect(calculator.longDescription.length, `${calculator.id}: longDescription`).toBeGreaterThanOrEqual(170);
      expect(calculator.howToUse.length, `${calculator.id}: howToUse`).toBeGreaterThanOrEqual(3);
      expect(calculator.faq.length, `${calculator.id}: faq`).toBeGreaterThanOrEqual(4);
      expect(calculator.keywords.length, `${calculator.id}: keywords`).toBeGreaterThanOrEqual(3);
      expect(calculator.example.length, `${calculator.id}: example`).toBeGreaterThanOrEqual(30);
    }
  });

  it('keeps calculator SEO titles and descriptions unique', () => {
    expectUnique(calculators.map((calculator) => calculator.seoTitle), 'calculator seoTitle');
    expectUnique(calculators.map((calculator) => calculator.seoDescription), 'calculator seoDescription');
    expectUnique(calculators.map((calculator) => calculator.h1), 'calculator h1');
  });

  it('has valid fields and conditional visibility references', () => {
    for (const calculator of calculators) {
      const fieldsByName = new Map(calculator.fields.map((field) => [field.name, field]));
      const fieldNames = new Set(fieldsByName.keys());
      expect(fieldNames.size, `${calculator.id}: duplicate fields`).toBe(calculator.fields.length);

      for (const field of calculator.fields) {
        expect(field.label.length, `${calculator.id}.${field.name}: label`).toBeGreaterThan(1);
        if (field.type !== 'date') {
          expect(field.defaultValue, `${calculator.id}.${field.name}: defaultValue`).toBeDefined();
        }

        if (field.type === 'number') {
          const defaultValue = Number(field.defaultValue);
          expect(Number.isFinite(defaultValue), `${calculator.id}.${field.name}: numeric default`).toBe(true);
          if (field.min !== undefined) {
            expect(defaultValue, `${calculator.id}.${field.name}: default >= min`).toBeGreaterThanOrEqual(field.min);
          }
          if (field.max !== undefined) {
            expect(defaultValue, `${calculator.id}.${field.name}: default <= max`).toBeLessThanOrEqual(field.max);
          }
        }

        if (field.type === 'number' && calculator.id !== 'percent-calculator') {
          expect(field.min, `${calculator.id}.${field.name}: min`).toBeDefined();
        }
        if (field.type === 'select' || field.type === 'toggle') {
          expect(field.options?.length ?? 0, `${calculator.id}.${field.name}: options`).toBeGreaterThan(0);
          const optionValues = field.options?.map((option) => option.value) ?? [];
          expect(optionValues, `${calculator.id}.${field.name}: default option`).toContain(String(field.defaultValue));
        }
        if (field.showIf) {
          expect(fieldNames.has(field.showIf.field), `${calculator.id}.${field.name}: showIf`).toBe(true);
          const controller = fieldsByName.get(field.showIf.field);
          if (controller?.type === 'select' || controller?.type === 'toggle') {
            const controllerValues = controller.options?.map((option) => option.value) ?? [];
            expect(controllerValues, `${calculator.id}.${field.name}: showIf option`).toContain(String(field.showIf.equals));
          }
        }
      }
    }
  });

  it('has valid related calculator links', () => {
    for (const calculator of calculators) {
      expect(calculator.relatedCalculatorIds.length, `${calculator.id}: related`).toBeGreaterThan(0);
      for (const relatedId of calculator.relatedCalculatorIds) {
        expect(relatedId, `${calculator.id}: self related`).not.toBe(calculator.id);
        expect(calculatorIds.has(relatedId), `${calculator.id}: missing ${relatedId}`).toBe(true);
      }
    }
  });

  it('keeps related calculator links useful for same-category navigation', () => {
    const calculatorsById = new Map(calculators.map((calculator) => [calculator.id, calculator]));

    for (const calculator of calculators) {
      const relatedCalculators = calculator.relatedCalculatorIds
        .map((relatedId) => calculatorsById.get(relatedId))
        .filter(Boolean);
      const sameCategoryLinks = relatedCalculators
        .filter((relatedCalculator) => relatedCalculator?.category === calculator.category);

      expect(sameCategoryLinks.length, `${calculator.id}: same category related`).toBeGreaterThan(0);
    }
  });

  it('keeps Russian tax calculators explicit about scope and source freshness', () => {
    const incomeTax = calculators.find((calculator) => calculator.id === 'income-tax-calculator');
    const vat = calculators.find((calculator) => calculator.id === 'vat-calculator');

    expect(incomeTax?.shortDescription).toContain('России');
    expect(incomeTax?.longDescription).toContain('ФНС');
    expect(incomeTax?.longDescription).toContain('2026');
    expect(vat?.shortDescription).toContain('России');
    expect(vat?.longDescription).toContain('1 января 2026');
    expect(vat?.longDescription).toContain('ФНС');
    expect(vat?.disclaimer).toContain('налоговой');
    expect(vat?.disclaimer).toContain('бухгалтерской');
  });

  it('keeps currency calculators explicit about official reference rates', () => {
    const currencyCalculators = calculators.filter((calculator) => calculator.category === 'currency');

    expect(currencyCalculators.length).toBeGreaterThan(0);
    for (const calculator of currencyCalculators) {
      const content = [
        calculator.shortDescription,
        calculator.longDescription,
        calculator.seoDescription,
        calculator.howItWorks,
        calculator.disclaimer,
        ...calculator.howToUse,
        ...calculator.faq.map((item) => `${item.q} ${item.a}`),
      ].join(' ');

      expect(content, calculator.id).toMatch(/официальн|справочн/i);
      expect(content, calculator.id).toMatch(/банк|обменник/i);
    }
  });

  it('provides practical guidance blocks for every calculator page', () => {
    for (const calculator of calculators) {
      const guidance = calculatorGuidance(calculator);
      const sections = [guidance.useCases, guidance.checklist, guidance.mistakes];

      for (const section of sections) {
        expect(section.length, `${calculator.id}: guidance section length`).toBeGreaterThanOrEqual(3);
        for (const item of section) {
          expect(item.length, `${calculator.id}: guidance item`).toBeGreaterThanOrEqual(25);
        }
      }
    }
  });

  it('keeps tax guidance specific to tax calculator risks', () => {
    const incomeTax = calculators.find((calculator) => calculator.id === 'income-tax-calculator');
    const vat = calculators.find((calculator) => calculator.id === 'vat-calculator');

    expect(incomeTax).toBeDefined();
    expect(vat).toBeDefined();
    expect(calculatorGuidance(incomeTax!).mistakes.join(' ')).toContain('прогрессивную шкалу');
    expect(calculatorGuidance(vat!).mistakes.join(' ')).toContain('выделить НДС');
  });

  it('shows honest freshness context for currency and tax calculators', () => {
    const currency = calculators.find((calculator) => calculator.id === 'currency-converter');
    const incomeTax = calculators.find((calculator) => calculator.id === 'income-tax-calculator');
    const vat = calculators.find((calculator) => calculator.id === 'vat-calculator');

    expect(currency).toBeDefined();
    expect(incomeTax).toBeDefined();
    expect(vat).toBeDefined();
    expect(calculatorFreshness(currency!).value).toBe(currencyRatesUpdatedAt);
    expect(calculatorFreshness(currency!).note).toContain('Официальные справочные курсы');
    expect(calculatorFreshness(incomeTax!).value).toBe('проверяйте нормы');
    expect(calculatorFreshness(vat!).note).toContain('официальными источниками');
  });

  it('marks the recently added finance calculators as new', () => {
    const newCalculatorIds = calculators
      .filter((calculator) => calculator.isNew)
      .map((calculator) => calculator.id)
      .sort();
    const financeNewCalculatorIds = calculators
      .filter((calculator) => calculator.category === 'finance' && calculator.isNew)
      .map((calculator) => calculator.id)
      .sort();

    expect(newCalculatorIds).toEqual([
      'discount-calculator',
      'income-tax-calculator',
      'percent-calculator',
      'vat-calculator',
    ]);
    expect(financeNewCalculatorIds).toEqual(newCalculatorIds);
    expect(newCalculators.map((calculator) => calculator.id).sort()).toEqual(newCalculatorIds);
  });
});

describe('data quality: categories', () => {
  it('has complete SEO and FAQ content', () => {
    for (const category of categories) {
      expect(category.seoTitle.length, `${category.id}: seoTitle`).toBeGreaterThanOrEqual(25);
      expect(category.seoDescription.length, `${category.id}: seoDescription`).toBeGreaterThanOrEqual(80);
      expect(category.seoDescription.length, `${category.id}: seoDescription`).toBeLessThanOrEqual(170);
      expect(category.longDescription.length, `${category.id}: longDescription`).toBeGreaterThanOrEqual(170);
      expect(category.faq.length, `${category.id}: faq`).toBeGreaterThanOrEqual(4);
    }
  });

  it('keeps category SEO titles and descriptions unique', () => {
    expectUnique(categories.map((category) => category.seoTitle), 'category seoTitle');
    expectUnique(categories.map((category) => category.seoDescription), 'category seoDescription');
    expectUnique(categories.map((category) => category.name), 'category name');
  });
});
