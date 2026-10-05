import { describe, expect, it } from 'vitest';
import { getCalculatorById } from '../src/lib/i18n';
import { instrumentCountLabel } from '../src/lib/plural';
import { localizeText } from '../src/lib/resultText';
import { calculatorFreshness } from '../src/lib/calculatorFreshness';
import { rateProvenance, sourcesForCurrencies } from '../src/data/currencies';
import { defaultHelpForField } from '../src/components/islands/calculator/fields';
import { calculatorCopy } from '../src/components/islands/calculator/copy';
import { contextualField as commissionField } from '../src/calculators/commission/contextualField';
import { compute as bakers } from '../src/calculators/bakers-percentage/compute';
import { calcWorkingDays } from '../src/lib/calculators/workingDays';
import { fetchBnm, parseBnmXml } from '../scripts/update-currency-rates.mjs';
import { buildInitialValues, buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const normalize = (text: string) => text.replace(/[\u00a0\u202f]/g, ' ');

describe('nominal currency, dimensioned help and localized authored inputs', () => {
  for (const locale of locales) {
    it(`${locale}: share and reload retain boundary-significant decimal digits`, () => {
      for (const [id, values] of [
        ['bmi-calculator', { height: '160', weight: '63.99999999999999999' }],
        ['convert-temperature', { value: '-459.6699999999999999', from: 'f', to: 'k' }],
      ] as const) {
        const fields = getCalculatorById(id, locale)!.fields;
        const query = buildCalculatorQueryString(fields, { ...buildInitialValues(fields), ...values }, locale);
        const restored = readValuesFromSearch(fields, buildInitialValues(fields), query, locale);
        for (const [key, value] of Object.entries(values)) expect(restored[key]).toBe(value);
      }
    });
    it(`${locale}: commission units follow the displayed nominal currency in every mode`, () => {
      const currency = { ru: '₽', en: '$', uk: '₴', de: '€', es: '€' }[locale];
      const fields = getCalculatorById('commission', locale)!.fields;
      for (const mode of ['fromAmount', 'fromCommission', 'rate']) {
        for (const field of fields.filter(({ name }) => name === 'a' || name === 'b')) {
          const contextual = commissionField(field, { mode }, locale);
          const rateField = field.name === 'b' && mode !== 'rate';
          expect(contextual.unit).toBe(rateField ? '%' : currency);
        }
      }
    });
    it(`${locale}: reserve days get no percentage help; a percentage reserve still does`, () => {
      const days = getCalculatorById('stock-duration', locale)!.fields.find(({ name }) => name === 'reserveDays')!;
      expect(defaultHelpForField(days, locale)).not.toBe(calculatorCopy(locale).reserveHelp);
      expect(defaultHelpForField({ name: 'reserve', label: 'Reserve', type: 'number', unit: '%' }, locale)).toBe(calculatorCopy(locale).reserveHelp);
    });
    it(`${locale}: manual fee data do not inherit a reference-rate date`, () => {
      const manual = calculatorFreshness(getCalculatorById('currency-exchange-fee', locale)!);
      expect(manual.value).not.toMatch(/\d{4}-\d{2}-\d{2}/);
      expect(calculatorFreshness(getCalculatorById('usd-to-mdl', locale)!).value).toBe(rateProvenance.MDL.date);
      for (const source of sourcesForCurrencies(['EUR', 'MDL'])) {
        expect(calculatorFreshness(getCalculatorById('eur-to-mdl', locale)!).value).toContain(source.date);
      }
    });
    it(`${locale}: localized ingredient defaults retain 856 g, 68% hydration and entered names`, () => {
      const calculator = getCalculatorById('bakers-percentage', locale)!;
      const values = Object.fromEntries(calculator.fields.map((field) => [field.name, field.defaultValue!]));
      const result = bakers(values);
      expect(normalize(result.primary.value)).toBe('856 г');
      expect(result.secondary.find(({ label }) => label === 'Гидратация')?.value).toBe('68,00%');
      const expectedWater = { ru: 'вода', en: 'water', uk: 'вода', de: 'Wasser', es: 'agua' }[locale];
      expect(result.table?.rows[0][0]).toBe(expectedWater);
      const custom = bakers({ flour: 500, ingredients: 'My ingredient 2' });
      expect(custom.table?.rows[0][0]).toBe('My ingredient');
    });
  }
  for (const locale of ['ru', 'uk'] as const) {
    it(`${locale}: stock values and shipping costs are neither percentages nor annual rates`, () => {
      for (const [id, name] of [['stock-duration', 'stock'], ['cogs', 'beginInventory'], ['cogs', 'endInventory'], ['inventory-turnover', 'avgInventory'], ['inventory-turnover', 'beginInventory'], ['inventory-turnover', 'endInventory'], ['shipping-per-unit', 'shipping']]) {
        const field = getCalculatorById(id, locale)!.fields.find((candidate) => candidate.name === name);
        expect(field, `${id}/${name}`).toBeDefined();
        const help = defaultHelpForField(field!, locale);
        expect(help).not.toBe(calculatorCopy(locale).reserveHelp);
        expect(help).not.toBe(calculatorCopy(locale).rateHelp);
      }
      expect(defaultHelpForField({ name: 'interestRate', label: 'Ставка', type: 'number' }, locale)).toBe(calculatorCopy(locale).rateHelp);
    });
  }
});

describe('count grammar has separate rules per language', () => {
  const samples = [1, 2, 5, 11, 21];
  it('Russian instruments use one/few/many', () => {
    expect(samples.map((n) => instrumentCountLabel(n, 'ru', ''))).toEqual(['инструмент', 'инструмента', 'инструментов', 'инструментов', 'инструмент']);
  });
  it('Ukrainian instruments use their own forms', () => {
    expect(samples.map((n) => instrumentCountLabel(n, 'uk', ''))).toEqual(['інструмент', 'інструменти', 'інструментів', 'інструментів', 'інструмент']);
    expect(instrumentCountLabel(373, 'uk', '')).toBe('інструменти');
  });
  it('Spanish periods, including owned abbreviated units, use mes/meses', () => {
    for (const suffix of ['мес', 'мес.', 'месяц', 'месяца', 'месяцев']) {
      for (const count of [...samples, 18, 26, 40]) {
        expect(localizeText(`${count} ${suffix}`, 'es', { 'мес': 'mes' })).toBe(`${count} ${count === 1 ? 'mes' : 'meses'}`);
      }
    }
    expect(localizeText('10\u00a0000 мес', 'es', { 'мес': 'mes' })).toBe('10\u00a0000 meses');
    for (const [duration, expected] of [['1,00', 'mes'], ['1,50', 'meses'], ['2,00', 'meses'], ['18,00', 'meses'], ['21,00', 'meses']]) {
      expect(localizeText(`${duration} мес`, 'es', { 'мес': 'mes' })).toBe(`${duration} ${expected}`);
    }
    for (const [locale, unit] of [['en', 'months'], ['de', 'Monate'], ['uk', 'міс.']] as const) {
      expect(localizeText('18,00 мес', locale, { 'мес': unit })).toBe(`18,00 ${unit}`);
    }
    expect(localizeText('al mes', 'es', {})).toBe('al mes');
  });
});

describe('unchanged working-day model and actual BNM date/nominal', () => {
  const inputs = { startDate: '2026-10-05', endDate: '2026-10-09', includeWeekends: 'no', saturdayWorking: 'no' };
  it('two exclusions reduce five weekdays to three; duplicates and outside dates have no extra effect', () => {
    expect(calcWorkingDays({ ...inputs, excludedDates: '2026-10-06,2026-10-08' }).primary.value).toBe('3 дн.');
    expect(calcWorkingDays({ ...inputs, excludedDates: '2026-10-06,2026-10-08,2026-10-08,2026-11-01' }).primary.value).toBe('3 дн.');
    expect(calcWorkingDays({ ...inputs, excludedDates: '2026-02-30' }).primary.value).toBe('—');
  });
  it('BNM divides value by nominal rather than assuming one unit', () => {
    const parsed = parseBnmXml('<ValCurs Date="05.10.2026"><Valute><CharCode>USD</CharCode><Nominal>10</Nominal><Value>178,92</Value></Valute></ValCurs>');
    expect(parsed.effectiveDate).toBe('2026-10-05');
    expect(parsed.ratesPerUsd.MDL).toBeCloseTo(17.892, 12);
  });
  it('BNM uses its own calendar date at the UTC date boundary and preserves the response date', async () => {
    const calls: string[] = [];
    const result = await fetchBnm(async (url: string) => {
      calls.push(url);
      return { ok: true, text: async () => '<ValCurs Date="02.10.2026"><Valute><CharCode>USD</CharCode><Nominal>1</Nominal><Value>17.8</Value></Valute></ValCurs>' };
    }, new Date('2026-10-04T22:15:00Z'));
    expect(new URL(calls[0]).searchParams.get('date')).toBe('05.10.2026');
    expect(result.effectiveDate).toBe('2026-10-02');
  });
});
