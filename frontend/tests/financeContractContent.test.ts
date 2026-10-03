import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { financeContractContent, financeMethodSources, getFinanceMethodSources, type FinanceContentLocale } from '../src/data/financeContractContent';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { getCalculatorById, isCalculatorAvailableInLocale, locales } from '../src/lib/i18n';
import { calcCredit } from '../src/lib/calculators/credit';
import { calcMortgage } from '../src/lib/calculators/mortgage';
import { calcDeposit } from '../src/lib/calculators/deposit';
import { calcCompound } from '../src/lib/calculators/compound';

const financeIds = ['credit-calculator', 'mortgage-calculator', 'deposit-calculator', 'compound-interest'] as const;
const publicEntries = locales.flatMap((locale) => financeIds
  .filter((id) => isCalculatorAvailableInLocale(id, locale))
  .map((id) => ({ id, locale: locale as FinanceContentLocale })));

const money = (value: string | undefined) => Number(value?.replace(/[^\d,.-]/g, '').replace(',', '.'));
const historicalContent = JSON.parse(readFileSync(new URL('../scripts/content-baseline.json', import.meta.url), 'utf8')) as {
  pages: Record<string, { faq: number; words: number }>;
};

// Parse the displayed instructional numbers, including locale grouping. This
// ties the authored examples to independently derived engine expectations,
// instead of merely checking that a field is nonempty or copying its snapshot.
function numericalClaims(text: string, locale: FinanceContentLocale): number[] {
  return [...text.matchAll(/\d+(?:[\s\u00a0\u202f]\d{3})*(?:[.,]\d+)*/g)].map(([token]) => {
    const compact = token.replace(/[\s\u00a0\u202f]/g, '');
    const normalized = locale === 'en'
      ? compact.replace(/,/g, '')
      : compact.replace(/,/g, '.');
    return Number(normalized);
  });
}

describe('finance: contract-aligned content at the public rendering data boundary', () => {
  it('covers exactly current public finance routes without opening deposit translations', () => {
    expect(publicEntries).toHaveLength(16);
    const authoredEntries = Object.entries(financeContractContent).flatMap(([locale, calculators]) =>
      Object.keys(calculators).map((id) => `${locale}:${id}`));
    expect(authoredEntries.sort()).toEqual(publicEntries.map(({ locale, id }) => `${locale}:${id}`).sort());
    for (const locale of locales.filter((value) => value !== 'ru')) {
      expect(getCalculatorById('deposit-calculator', locale)).toBeUndefined();
    }
  });

  it.each(publicEntries)('$locale $id exposes its own copy before deriving visible SEO and FAQ', ({ locale, id }) => {
    const calc = getCalculatorById(id, locale);
    const authored = financeContractContent[locale]?.[id];
    expect(authored).toBeDefined();
    expect(calc).toBeDefined();
    expect(calc?.longDescription).toBe(authored?.longDescription);
    expect(calc?.howToUse).toEqual(authored?.howToUse);
    expect(calc?.howItWorks).toBe(authored?.howItWorks);
    expect(calc?.example).toBe(authored?.example);
    expect(calc?.disclaimer).toBe(authored?.disclaimer);
    expect(calc?.seoContent?.intro).toBe(authored?.longDescription);
    expect(calc?.seoContent?.howItWorks).toBe(authored?.howItWorks);
    expect(calc?.seoContent?.example).toBe(authored?.example);
    expect(calc?.seoContent?.faq).toEqual(authored?.faq);
    expect(calc?.faq).toEqual(authored?.faq);
  });

  it.each(locales)('%s finance questions stay subject-specific and do not share exact generic FAQ', (locale) => {
    const questions = publicEntries.filter((entry) => entry.locale === locale)
      .flatMap(({ id }) => getCalculatorById(id, locale)?.faq.map((item) => item.q) ?? []);
    expect(new Set(questions).size).toBe(questions.length);
  });

  it.each(publicEntries)('$locale $id preserves the established public FAQ coverage', ({ locale, id }) => {
    const calc = getCalculatorById(id, locale)!;
    const baseline = historicalContent.pages[calc.fullPath];
    // The unchanged dist guard records DE/ES/UK pages. RU/EN were already
    // three-question versions; their authored subject coverage stays intact.
    expect(calc.faq.length).toBeGreaterThanOrEqual(baseline?.faq ?? 3);
  });

  it('the added German capitalization and loss-year examples match independent arithmetic', () => {
    const questions = getCalculatorById('compound-interest', 'de')!.faq;
    const capitalization = questions.find(({ q }) => q.includes('Jahresertrag ohne Einzahlungen'))!;
    expect(numericalClaims(capitalization.a, 'de')).toContain(12.6825);
    const model = calcCompound({ principal: 1000000, rate: 12, years: 1, topUp: 0, compounding: 'month' });
    const annualGainPercent = (Math.pow(1 + 12 / 100 / 12, 12) - 1) * 100;
    expect(annualGainPercent).toBeCloseTo(12.6825, 4);
    expect(money(model.primary.value)).toBe(Math.round(1000000 * (1 + annualGainPercent / 100)));
    const loss = questions.find(({ q }) => q.includes('Verlustjahren'))!;
    expect(numericalClaims(loss.a, 'de')).toEqual([10, 10, 100, 99]);
    expect(100 * (1 + 10 / 100) * (1 - 10 / 100)).toBeCloseTo(99, 12);
  });

  it.each(publicEntries)('$locale $id exposes localized subject sources with US applicability, separate from model derivation', ({ locale, id }) => {
    const calc = getCalculatorById(id, locale)!;
    const editorial = getCalculatorEditorial(calc, locale);
    const expected = getFinanceMethodSources(id, locale);
    expect(editorial.method).toBe(calc.howItWorks);
    expect(editorial.limitation).toBe(calc.disclaimer);
    expect(editorial.sources).toEqual(expected);
    expect(editorial.sources.map((source) => source.href)).toEqual(financeMethodSources[id]!.map((source) => source.href));
    expect(editorial.sources.length).toBe(id === 'mortgage-calculator' ? 2 : 1);
    for (const source of editorial.sources) {
      expect(source.label).toMatch(/США|\bUS\b|USA|EE\. UU\./);
      expect(source.href).toMatch(/^https:\/\/(www\.consumerfinance\.gov|www\.investor\.gov)\//);
    }
    if (locale !== 'en') expect(editorial.sources.map((source) => source.label)).not.toEqual(financeMethodSources[id]!.map((source) => source.label));
  });

  it.each(publicEntries.filter(({ id }) => id === 'credit-calculator'))('$locale credit examples agree with fee and differential-payment arithmetic', ({ locale, id }) => {
    const claims = numericalClaims(getCalculatorById(id, locale)!.seoContent!.example, locale);
    for (const number of [120000, 12, 10000, 11200, 10100, 7800, 300, 128100, 8100, 0, 2500, 122500]) {
      expect(claims, `missing numerical claim ${number}`).toContain(number);
    }
    const differential = calcCredit({ amount: 120000, term: 12, termUnit: 'months', rate: 12, type: 'differentiated', oneTimeFee: 300 });
    expect(money(differential.primary.value)).toBe(11200);
    expect(money(differential.secondary.find((row) => row.label === 'Сумма процентов')?.value)).toBe(7800);
    expect(money(differential.secondary.find((row) => row.label === 'Общая сумма выплат')?.value)).toBe(128100);
    const zero = calcCredit({ amount: 120000, term: 12, termUnit: 'months', rate: 0, oneTimeFee: 2500 });
    expect(money(zero.primary.value)).toBe(10000);
    expect(money(zero.secondary.find((row) => row.label === 'Общая сумма выплат')?.value)).toBe(122500);
  });

  it.each(publicEntries.filter(({ id }) => id === 'mortgage-calculator'))('$locale mortgage examples distinguish insurance expense from interest', ({ locale, id }) => {
    const claims = numericalClaims(getCalculatorById(id, locale)!.seoContent!.example, locale);
    for (const number of [150000, 30000, 20, 12, 120000, 11200, 7800, 157800, 0, 10000, 500, 3000, 153000, 20500]) {
      expect(claims, `missing numerical claim ${number}`).toContain(number);
    }
    const differential = calcMortgage({ price: 150000, downPayment: 30000, years: 1, rate: 12, type: 'differentiated' });
    expect(money(differential.secondary.find((row) => row.label === 'Общая стоимость с взносом')?.value)).toBe(157800);
    const zero = calcMortgage({ price: 150000, downPayment: 30000, years: 1, rate: 0, extraPayment: 10000, monthlyInsurance: 500 });
    expect(zero.secondary.find((row) => row.label === 'Срок')?.value).toBe('6 мес.');
    expect(money(zero.secondary.find((row) => row.label === 'Расход в месяц со страховкой')?.value)).toBe(20500);
    expect(money(zero.secondary.find((row) => row.label === 'Общая стоимость с взносом')?.value)).toBe(153000);
  });

  it.each(publicEntries.filter(({ id }) => id === 'compound-interest'))('$locale compound examples preserve the intra-year cash flow', ({ locale, id }) => {
    const claims = numericalClaims(getCalculatorById(id, locale)!.seoContent!.example, locale);
    for (const number of [1000, 12, 100, 120, 66, 2200, 186, 2386, 1400, 138, 1538, 1.5, 1120, 67.2, 1187.2, 1187]) {
      expect(claims, `missing numerical claim ${number}`).toContain(number);
    }
    const monthly = calcCompound({ principal: 1000, rate: 12, years: 1, topUp: 100, frequency: 'month', compounding: 'year' });
    const quarterly = calcCompound({ principal: 1000, rate: 12, years: 1, topUp: 100, frequency: 'quarter', compounding: 'year' });
    const partial = calcCompound({ principal: 1000, rate: 12, years: 1.5, topUp: 0, compounding: 'year' });
    expect(money(monthly.primary.value)).toBe(2386);
    expect(money(quarterly.primary.value)).toBe(1538);
    expect(money(partial.primary.value)).toBe(1187);
    expect(partial.secondary.find((row) => row.label === 'Срок')?.value).toBe('18 мес.');
  });

  it('RU deposit examples preserve capitalization, top-up timing and zero-rate boundary', () => {
    const claims = numericalClaims(getCalculatorById('deposit-calculator', 'ru')!.seoContent!.example, 'ru');
    for (const number of [100000, 12, 112682.5, 112683, 12683, 1000, 100, 120, 66, 2386, 78, 2398, 0, 600]) {
      expect(claims, `missing numerical claim ${number}`).toContain(number);
    }
    const capitalized = calcDeposit({ amount: 100000, months: 12, rate: 12, capitalization: 'yes', capPeriod: 'month', topUp: 0 });
    expect(money(capitalized.primary.value)).toBe(112683);
    const simple = { amount: 1000, months: 12, rate: 12, capitalization: 'no', topUp: 100 };
    expect(money(calcDeposit({ ...simple, topUpTiming: 'end' }).primary.value)).toBe(2386);
    expect(money(calcDeposit({ ...simple, topUpTiming: 'beginning' }).primary.value)).toBe(2398);
    expect(money(calcDeposit({ amount: 0, months: 6, rate: 0, topUp: 100 }).primary.value)).toBe(600);
  });
});
