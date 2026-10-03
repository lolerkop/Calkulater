import { describe, expect, it } from 'vitest';
import { getCalculatorById, locales } from '../src/lib/i18n';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { currencyTeachingScenarios, currencyExpectedExample, getCurrencyScenarioCopy } from '../src/data/currencyScenarioContent';
import { exchangeFeeContractContent } from '../src/calculators/currency-exchange-fee/contractContent';
import { contextualField } from '../src/calculators/currency-exchange-fee/contextualField';
import { publishedExamples } from '../src/data/publishedExamples';
import { calcCurrency } from '../src/lib/calculators/currency';
import { buildInitialValues, readValuesFromSearch } from '../src/lib/shareLink';

describe('published saved-rate currency examples', () => {
  for (const locale of locales) {
    for (const id of ['usd-to-eur', 'eur-to-mdl', 'usd-to-mdl']) {
      it(`${locale}/${id}: a link cannot replace the pinned pair`, () => {
        const page = getCalculatorById(id, locale)!;
        const defaults = buildInitialValues(page.fields);
        const values = readValuesFromSearch(page.fields, defaults, '?amount=200&from=GBP&to=RON', locale);
        expect(values.amount).toBe(200);
        expect(values.from).toBe(defaults.from);
        expect(values.to).toBe(defaults.to);
      });
    }
    for (const id of Object.keys(currencyTeachingScenarios) as (keyof typeof currencyTeachingScenarios)[]) {
      it(`${locale}/${id}: publishes its actual numeric scenario and cross-rate scope`, () => {
        const page = getCalculatorById(id, locale)!;
        const scenario = currencyTeachingScenarios[id];
        const copy = getCurrencyScenarioCopy(id, locale)!;
        expect(page.howItWorks).toBe(copy.howItWorks);
        expect(page.seoContent!.howItWorks).toBe(copy.howItWorks);
        expect(page.seoContent!.example).toBe(copy.example);
        expect(copy.example).toContain(`${scenario.from} ×`);
        expect(copy.example).toContain(`0 ${scenario.from} = 0 ${scenario.to}`);
        expect(calcCurrency(scenario).primary.value).toBe(currencyExpectedExample(id));
        expect(publishedExamples.find((row) => row.calculatorId === id && row.locale === locale)?.input).toEqual(scenario);
        expect(getCalculatorEditorial(page, locale).sources.length).toBeGreaterThan(0);
      });
    }
    it(`${locale}/currency-exchange-fee: renders the real buy/sell order without attributing it to central banks`, () => {
      const page = getCalculatorById('currency-exchange-fee', locale)!;
      const copy = exchangeFeeContractContent[locale];
      expect(page.howItWorks).toBe(copy.howItWorks);
      expect(page.seoContent!.howItWorks).toBe(copy.howItWorks);
      expect(page.seoContent!.example).toBe(copy.example);
      expect(page.disclaimer).toBe(copy.disclaimer);
      expect(page.howItWorks).toContain('(A − F) × (1 − c)');
      expect(page.example).toContain('1690');
      expect(page.example).toContain('855');
      expect(page.faq).toHaveLength(5);
      expect(getCalculatorEditorial(page, locale).sources).toHaveLength(0);
    });
    it(`${locale}/currency-exchange-fee: changes amount units with direction and keeps the fixed charge in local money`, () => {
      const page = getCalculatorById('currency-exchange-fee', locale)!;
      const amount = page.fields.find((field) => field.name === 'amount')!;
      const fixed = page.fields.find((field) => field.name === 'feeFixed')!;
      const selling = contextualField(amount, { direction: 'sell' }, locale);
      const buying = contextualField(amount, { direction: 'buy' }, locale);
      expect(selling.label).not.toBe(buying.label);
      expect(selling.unit).not.toBe(buying.unit);
      expect(contextualField(fixed, { direction: 'sell' }, locale).unit).toBe(buying.unit);
      expect(contextualField(fixed, { direction: 'buy' }, locale).unit).toBe(buying.unit);
    });
  }
});
