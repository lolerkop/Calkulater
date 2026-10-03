import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getCalculatorById, isCalculatorAvailableInLocale, locales } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import type { CalculatorDef } from '../src/lib/types';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { definition as advertising } from '../src/calculators/ad-roi/definition';
import { definition as aov } from '../src/calculators/aov/definition';
import { definition as day } from '../src/calculators/day-of-week/definition';
import { definition as difference } from '../src/calculators/difference-abs-rel/definition';
import { definition as dividend } from '../src/calculators/dividend-yield/definition';
import { definition as logarithm } from '../src/calculators/logarithm/definition';
import { definition as returns } from '../src/calculators/return-rate/definition';
import { definition as employee } from '../src/calculators/revenue-per-employee/definition';
import { definition as roi } from '../src/calculators/roi/definition';
import { definition as shipping } from '../src/calculators/shipping-per-unit/definition';
import { methodSources as advertisingSources } from '../src/calculators/ad-roi/methodSources';
import { methodSources as daySources } from '../src/calculators/day-of-week/methodSources';
import { methodSources as dividendSources } from '../src/calculators/dividend-yield/methodSources';

const definitions = {
  'ad-roi': advertising, aov, 'day-of-week': day, 'difference-abs-rel': difference,
  'dividend-yield': dividend, logarithm, 'return-rate': returns,
  'revenue-per-employee': employee, roi, 'shipping-per-unit': shipping,
};
type Id = keyof typeof definitions;
const ids = Object.keys(definitions) as Id[];
const entries = locales.flatMap((locale) => ids.filter((id) => isCalculatorAvailableInLocale(id, locale)).map((id) => ({ id, locale })));
const report = JSON.parse(readFileSync(new URL('../reports/originality-business-math-wave-3.json', import.meta.url), 'utf8')) as {
  publicBaseline: Record<Id, Record<string, Partial<CalculatorDef> & { faqCount: number }>>;
};
function claims(text: string, english = false): number[] {
  // DD.MM.YYYY is a date, not a multi-separator decimal amount.
  const datePattern = /\b(\d{2})\.(\d{2})\.(\d{4})\b/g;
  const dateYears = [...text.matchAll(datePattern)].map((match) => Number(match[3]));
  return [...dateYears, ...[...text.replace(datePattern, '').matchAll(/\d+(?:[\s\u00a0\u202f]\d{3})*(?:[.,]\d+)*/g)].map(([token]) => {
    const compact = token.replace(/[\s\u00a0\u202f]/g, '');
    return Number(english ? compact.replace(/,/g, '') : compact.replace(/,/g, '.'));
  })];
}
const exampleClaims: Record<Id, readonly number[]> = {
  'ad-roi': [200000, 50000, 4, 300, 150000, 0, 100],
  aov: [250000, 200, 1250],
  'day-of-week': [2024, 60, 9, 2025, 2023, 52, 2022],
  'difference-abs-rel': [120, 150, 30, 25, 50, 100, 200, 0, 5],
  'dividend-yield': [12, 200, 6, 2.5, 30, 500],
  logarithm: [1024, 2, 10, 4, 0.5, 1, 0],
  'return-rate': [45, 900, 5, 95, 0, 100],
  'revenue-per-employee': [12000000, 20, 600000, 50000, 2.5],
  roi: [130000, 100000, 5000, 105000, 25000, 23.81, 100],
  'shipping-per-unit': [5000, 1000, 100, 6000, 60, 50],
};
const stableKeys = ['name', 'slug', 'fullPath', 'category', 'h1', 'seoTitle', 'fields', 'resultLabels', 'relatedCalculatorIds', 'isNew'] as const;

describe('business, maths and Gregorian date copy at the public rendering boundary', () => {
  it('reviews the actual ten canonical V2 calculators and all fifty public versions', () => {
    expect(entries).toHaveLength(50);
    for (const id of ids) expect(getCalculatorById(id, 'ru')).toBeDefined();
    expect(ids).toContain('roi');
  });

  it.each(entries)('$locale $id preserves the existing URL, title, fields, defaults and structural metadata', ({ id, locale }) => {
    const calc = getCalculatorById(id, locale)!;
    const previous = report.publicBaseline[id][locale];
    for (const key of stableKeys) expect(calc[key], key).toEqual(previous[key]);
  });

  it.each(entries)('$locale $id renders the owned subject instructions, method, examples and four useful FAQs', ({ id, locale }) => {
    const calc = getCalculatorById(id, locale)!;
    const definition = definitions[id];
    const owned = locale === 'ru' ? definition.presentation : definition.copy![locale]!;
    for (const key of ['longDescription', 'howToUse', 'howItWorks', 'example', 'faq', 'disclaimer'] as const) expect(calc[key], key).toEqual(owned[key as keyof typeof owned]);
    expect(calc.seoContent!.intro).toBe(calc.longDescription);
    expect(calc.seoContent!.howItWorks).toBe(calc.howItWorks);
    expect(calc.seoContent!.example).toBe(calc.example);
    expect(calc.seoContent!.faq).toEqual(calc.faq);
    expect(calc.seoContent!.tips).toBe(calc.howToUse.join(' '));
    expect(calc.faq.length).toBeGreaterThanOrEqual(report.publicBaseline[id][locale].faqCount);
    expect(calc.faq.length).toBeGreaterThanOrEqual(4);
    expect(calc.disclaimer!.trim().length).toBeGreaterThan(35);
  });

  it.each(locales)('%s gives ten different subject instructions, with unique FAQ questions within each page', (locale) => {
    const tips = ids.map((id) => getCalculatorById(id, locale)!.seoContent!.tips);
    expect(new Set(tips).size).toBe(10);
    for (const id of ids) {
      const calc = getCalculatorById(id, locale)!;
      expect(new Set(calc.faq.map(({ q }) => q)).size).toBe(calc.faq.length);
    }
  });

  it.each(entries)('$locale $id publishes numeric claims consistent with independently checked subject scenarios', ({ id, locale }) => {
    const numbers = claims(getCalculatorById(id, locale)!.seoContent!.example, locale === 'en');
    for (const expected of exampleClaims[id]) expect(numbers, `${expected} in ${id} example`).toContain(expected);
    // Currency labels cannot be changed by selecting a text locale.
    expect(getCalculatorById(id, locale)!.example).not.toMatch(/[$€₴]/);
  });

  it.each(entries)('$locale $id uses the approved published scenario without contradicting its numeric first example', ({ id }) => {
    const definition = definitions[id];
    const example = definition.publishedExample!;
    const result = definition.compute({ ...example.inputs });
    const values = [result.primary.value, ...result.secondary.map(({ value }) => value)].join('\n').replace(/[\u00a0\u202f]/g, ' ');
    for (const value of example.expected) expect(values).toContain(value.replace(/[\u00a0\u202f]/g, ' '));
  });

  it.each(entries)('$locale $id attaches only primary methodology sources supporting the model boundary', ({ id, locale }) => {
    const calc = getCalculatorById(id, locale)!;
    const editorial = getCalculatorEditorial(calc, locale);
    const expected = id === 'ad-roi' ? advertisingSources[locale]
      : id === 'day-of-week' ? daySources[locale]
        : id === 'dividend-yield' ? dividendSources[locale] : [];
    expect(editorial.method).toBe(calc.howItWorks);
    expect(editorial.limitation).toBe(calc.disclaimer);
    expect(editorial.sources).toEqual(expected);
    for (const source of expected) expect(source.href).toMatch(/^https:\/\/(support\.google\.com|docs\.python\.org|www\.finra\.org)\//);
  });

  it.each(entries.filter(({ locale }) => locale !== 'ru'))('$locale $id translates active input errors at the actual runtime boundary', ({ id, locale }) => {
    const definition = definitions[id];
    const example = definition.publishedExample!;
    const firstActive = definition.presentation.fields.find(({ type }) => type === 'number' || type === 'date')!;
    const raw = definition.compute({ ...example.inputs, [firstActive.name]: firstActive.type === 'date' ? '2023-02-30' : true });
    expect(raw.primary.value).toBe('—');
    const result = localizeResult(raw, locale, id, runtimeFor(id)!);
    expect(result.secondary[0].value).not.toBe(raw.secondary[0].value);
    if (locale !== 'uk') expect(result.secondary[0].value).not.toMatch(/[А-Яа-яЁё]/);
  });

  it.each(locales.filter((locale) => locale !== 'ru'))('%s localises the renamed ad difference, ISO year and optional-negative errors', (locale) => {
    for (const [id, input, key] of [
      ['ad-roi', { revenue: 200000, spend: 50000 }, 'Выручка минус реклама'],
      ['day-of-week', { date: '2024-12-31' }, 'Год недели ISO'],
    ] as const) {
      const result = localizeResult(definitions[id].compute(input), locale, id, runtimeFor(id)!);
      expect(result.secondary.some(({ label }) => label === key)).toBe(false);
    }
    for (const [id, input] of [
      ['ad-roi', { revenue: -1, spend: 50000 }],
      ['dividend-yield', { dividend: 12, price: 200, shares: -1 }],
      ['roi', { received: 130000, invested: 100000, extra: -5000 }],
      ['shipping-per-unit', { shipping: 5000, units: 100, packaging: -1000 }],
    ] as const) {
      const raw = definitions[id].compute(input);
      const result = localizeResult(raw, locale, id, runtimeFor(id)!);
      expect(result.primary.value).toBe('—');
      expect(result.secondary[0].value).not.toBe(raw.secondary[0].value);
    }
  });
});
