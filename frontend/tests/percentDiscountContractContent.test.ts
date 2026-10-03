import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { getCalculatorById, isCalculatorAvailableInLocale, locales } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { percentDiscountContractContent, getPercentDiscountMethodSources, type PercentDiscountLocale } from '../src/data/percentDiscountContractContent';
import { calcPercent } from '../src/calculators/percent-calculator/compute';
import { calcDiscount } from '../src/lib/calculators/discount';
import { runtimeFor } from '../src/calculators/runtime.generated';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';

const ids = ['percent-calculator', 'discount-calculator'] as const;
const publicEntries = locales.flatMap((locale) => ids.filter((id) => isCalculatorAvailableInLocale(id, locale))
  .map((id) => ({ id, locale: locale as PercentDiscountLocale })));
const baseline = JSON.parse(readFileSync(new URL('../scripts/content-baseline.json', import.meta.url), 'utf8')) as {
  pages: Record<string, { faq: number; words: number }>;
};
const money = (value: string | undefined) => Number(value?.replace(/[^\d,.-]/g, '').replace(',', '.'));
function claims(text: string, locale: PercentDiscountLocale): number[] {
  // Natural prose spells the quantity three in EN/DE/ES. Normalize that
  // explicit claim rather than requiring awkward digits for a parser's sake.
  const normalizedText = locale === 'en' ? text.replace(/\bthree\b/gi, '3')
    : locale === 'de' ? text.replace(/\bdrei\b/gi, '3')
      : locale === 'es' ? text.replace(/\btres\b/gi, '3') : text;
  return [...normalizedText.matchAll(/\d+(?:[\s\u00a0\u202f]\d{3})*(?:[.,]\d+)*/g)]
    .map(([token]) => {
      const compact = token.replace(/[\s\u00a0\u202f]/g, '');
      return Number(locale === 'en' ? compact.replace(/,/g, '') : compact.replace(/,/g, '.'));
    });
}

describe('percentage and discount contracts at the public rendering boundary', () => {
  it('authors all ten published versions and preserves their routes', () => {
    expect(publicEntries).toHaveLength(10);
    const authored = Object.entries(percentDiscountContractContent).flatMap(([locale, copies]) => Object.keys(copies).map((id) => `${locale}:${id}`));
    expect(authored.sort()).toEqual(publicEntries.map(({ locale, id }) => `${locale}:${id}`).sort());
    const routes = publicEntries.map(({ locale, id }) => getCalculatorById(id, locale)!.fullPath).sort();
    expect(routes).toEqual([
      '/ru/finance/percent-calculator/', '/ru/finance/discount-calculator/',
      '/en/finance/percentage-calculator/', '/en/finance/discount-calculator/',
      '/uk/finansy/kalkulyator-vidsotkiv/', '/uk/finansy/kalkulyator-znyzhky/',
      '/de/finanzen/prozentrechner/', '/de/finanzen/rabattrechner/',
      '/es/finanzas/calculadora-porcentajes/', '/es/finanzas/calculadora-descuento/',
    ].sort());
  });

  it.each(publicEntries)('$locale $id renders its authored method, metadata and actual feature limits', ({ locale, id }) => {
    const calc = getCalculatorById(id, locale)!;
    const copy = percentDiscountContractContent[locale]![id];
    for (const key of ['shortDescription', 'seoDescription', 'longDescription', 'howToUse', 'howItWorks', 'example', 'faq', 'disclaimer'] as const) {
      expect(calc[key], key).toEqual(copy[key]);
    }
    expect(calc.seoContent?.intro).toBe(copy.longDescription);
    expect(calc.seoContent?.howItWorks).toBe(copy.howItWorks);
    expect(calc.seoContent?.example).toBe(copy.example);
    expect(calc.seoContent?.faq).toEqual(copy.faq);
  });

  it.each(publicEntries)('$locale $id retains established subject FAQ coverage', ({ locale, id }) => {
    const calc = getCalculatorById(id, locale)!;
    const count = baseline.pages[calc.fullPath]?.faq ?? (id === 'discount-calculator' && locale === 'ru' ? 4 : 3);
    expect(calc.faq.length).toBeGreaterThanOrEqual(count);
  });

  it.each(locales)('%s uses distinct questions for percentage arithmetic and retail discounts', (locale) => {
    const questions = publicEntries.filter((entry) => entry.locale === locale)
      .flatMap(({ id }) => getCalculatorById(id, locale)!.faq.map(({ q }) => q));
    expect(new Set(questions).size).toBe(questions.length);
  });

  it.each(publicEntries)('$locale $id attaches only a source supporting an actual editorial claim', ({ locale, id }) => {
    const calc = getCalculatorById(id, locale)!;
    const editorial = getCalculatorEditorial(calc, locale);
    expect(editorial.method).toBe(calc.howItWorks);
    expect(editorial.limitation).toBe(calc.disclaimer);
    expect(editorial.sources).toEqual(getPercentDiscountMethodSources(id, locale));
    if (id === 'percent-calculator') {
      expect(editorial.sources[0].href).toBe('https://service-manual.ons.gov.uk/content/numbers/percentages');
      expect(editorial.sources[0].label).toMatch(/ONS/);
    } else expect(editorial.sources).toEqual([]);
  });

  it.each(publicEntries.filter(({ id }) => id === 'percent-calculator'))('$locale percentage examples use independently derived results and denominators', ({ locale, id }) => {
    const numbers = claims(getCalculatorById(id, locale)!.seoContent!.example, locale);
    for (const expected of [15, 200, 30, 50, 25, 230, 170, 100, 130, 0, 10, 110, 99, 12, 2, 20]) expect(numbers).toContain(expected);
    const cases = [
      [{ mode: 'of', a: 15, b: 200 }, '30,00'],
      [{ mode: 'what', a: 50, b: 200 }, '25,00%'],
      [{ mode: 'addPct', a: 200, b: 15 }, '230,00'],
      [{ mode: 'subPct', a: 200, b: 15 }, '170,00'],
      [{ mode: 'change', a: 100, b: 130 }, '+30,00%'],
      [{ mode: 'of', a: 0, b: 200 }, '0,00'],
      [{ mode: 'what', a: 50, b: 0 }, '—'],
      [{ mode: 'change', a: -100, b: -50 }, '-50,00%'],
      [{ mode: 'addPct', a: 100, b: 10 }, '110,00'],
      [{ mode: 'subPct', a: 110, b: 10 }, '99,00'],
      [{ mode: 'change', a: 10, b: 12 }, '+20,00%'],
    ] as const;
    for (const [inputs, expected] of cases) expect(calcPercent(inputs).primary.value).toBe(expected);
    expect(12 - 10).toBe(2);
    expect(80 / (1 - 20 / 100)).toBe(100);
  });

  it.each(publicEntries.filter(({ id }) => id === 'discount-calculator'))('$locale discount examples preserve sequential factors, unit savings and whole quantities', ({ locale, id }) => {
    const numbers = claims(getCalculatorById(id, locale)!.seoContent!.example, locale);
    for (const expected of [1000, 20, 10, 800, 720, 280, 28, 30, 3, 2160, 250, 750, 675, 325, 32.5, 2025, 500, 0, 1.5]) expect(numbers).toContain(expected);
    const percent = calcDiscount({ price: 1000, mode: 'byPercent', discountPct: 20, secondDiscountPct: 10, quantity: 3 });
    const fixed = calcDiscount({ price: 1000, mode: 'byAmount', discountAmt: 250, secondDiscountPct: 10, quantity: 3 });
    expect(money(percent.primary.value)).toBe(720);
    expect(money(percent.secondary.find(({ label }) => label === 'Размер скидки')?.value)).toBe(280);
    expect(money(percent.secondary.find(({ label }) => label === 'Итого за товары')?.value)).toBe(2160);
    expect(money(fixed.primary.value)).toBe(675);
    expect(money(fixed.secondary.find(({ label }) => label === 'Размер скидки')?.value)).toBe(325);
    expect(money(fixed.secondary.find(({ label }) => label === 'Итого за товары')?.value)).toBe(2025);
    expect(calcDiscount({ price: 500, discountPct: 0 }).primary.value).toBe('500 ₽');
    expect(calcDiscount({ price: 500, mode: 'byAmount', discountAmt: 1000 }).primary.value).toBe('0 ₽');
    expect(calcDiscount({ price: 500, mode: 'byAmount', discountAmt: -10 }).primary.value).toBe('—');
    expect(calcDiscount({ price: 500, discountPct: 10, quantity: 1.5 }).primary.value).toBe('—');
    expect(1000 * (1 - 20 / 100) * (1 - 10 / 100) * 3).toBe(2160);
    expect(280 * 3).toBe(840);
  });

  it.each(publicEntries)('$locale $id renders new input errors in the page language', ({ locale, id }) => {
    const raw = id === 'percent-calculator'
      ? calcPercent({ mode: 'of', a: true, b: 200 })
      : calcDiscount({ price: 1000, mode: 'byAmount', discountAmt: -10 });
    const result = localizeResult(raw, locale, id, runtimeFor(id));
    expect(result.primary.value).toBe('—');
    expect(result.secondary[0].accent).toBe('red');
    if (locale !== 'ru' && locale !== 'uk') expect(result.secondary[0].value).not.toMatch(/[А-Яа-яЁё]/u);
    // Ukrainian intentionally uses Cyrillic. Both typographic apostrophes
    // occur in the existing copy; wording must still match the Ukrainian text.
    if (locale === 'uk') expect(result.secondary[0].value.replace(/[’ʼ]/g, "'")).toBe((id === 'percent-calculator'
      ? 'Введіть скінченні числові значення.' : 'Сума знижки не може бути від’ємною.').replace(/[’ʼ]/g, "'"));
  });
});
