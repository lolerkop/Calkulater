import { describe, expect, it } from 'vitest';
import { definition as cac } from '../src/calculators/cac/definition';
import { definition as cpa } from '../src/calculators/cpa-cpl-cpi/definition';
import { definition as cr } from '../src/calculators/conversion-rate/definition';
import { localization as cacLocale } from '../src/calculators/cac/localization';
import { localization as cpaLocale } from '../src/calculators/cpa-cpl-cpi/localization';
import { localization as crLocale } from '../src/calculators/conversion-rate/localization';
import { methodSources as cacSources } from '../src/calculators/cac/methodSources';
import { methodSources as cpaSources } from '../src/calculators/cpa-cpl-cpi/methodSources';
import { methodSources as crSources } from '../src/calculators/conversion-rate/methodSources';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { isCompleteCalculatorCopy } from '../src/lib/platform/types';
import { getCalculatorById } from '../src/lib/i18n';
import type { CalcResult } from '../src/lib/types';

const tools = [cac, cpa, cr];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const translated = ['en', 'uk', 'de', 'es'] as const;
const ownLocales = [cacLocale, cpaLocale, crLocale];
const sources = [cacSources, cpaSources, crSources];
const normalize = (value: string) => value.replace(/[\u00a0\u202f]/g, ' ');
const row = (r: CalcResult, label: string) => r.secondary.find(x => x.label === label);
const error = (r: CalcResult) => { expect(r.primary.value).toBe('—'); expect(r.secondary[0].accent).toBe('red'); };
const invalid = [true, false, '', ' ', 'Infinity', 'NaN', Infinity, -Infinity, NaN] as const;
const max = Number.MAX_SAFE_INTEGER;

describe('marketing wave 4 independent arithmetic and domain', () => {
  for (const tool of tools) for (const sample of tool.referenceCases ?? []) it(`${tool.id}: preserved reference ${sample.name}`, () => {
    const r = tool.compute(sample.inputs);
    expect(normalize(r.primary.value)).toBe(normalize(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(normalize(row(r, expected.label)?.value ?? '')).toBe(normalize(expected.value));
  });

  it('zero CAC preserves cost but has no ratio or financial health rating', () => {
    const r = cac.compute({ spend: 0, customers: 50, ltv: 9000 });
    expect(r.primary.value).toBe('0 ₽');
    expect(row(r, 'LTV к CAC')?.value).toBe('—');
    expect(row(r, 'LTV к CAC')?.accent).toBeUndefined();
    expect(r.note).toBe('При нулевом CAC отношение не рассчитывается: деление на ноль.');
    for (const ltv of [500, 2000, 9000]) expect(row(cac.compute({ spend: 100000, customers: 50, ltv }), 'LTV к CAC')?.accent).toBeUndefined();
  });
  it('CAC preserves the direct quotient and ignores only omitted optional revenue', () => {
    expect(cac.compute({ spend: 100000, customers: 50, ltv: 9000 }).primary.value).toBe('2 000 ₽');
    expect(row(cac.compute({ spend: 100000, customers: 50, ltv: 9000 }), 'LTV к CAC')?.value).toBe('4,50 : 1');
    for (const ltv of [undefined, '', ' ', 0]) expect(row(cac.compute({ spend: 100000, customers: 50, ltv }), 'LTV к CAC')).toBeUndefined();
    for (const ltv of [true, false, -1, Infinity, 'NaN']) error(cac.compute({ spend: 100000, customers: 50, ltv }));
  });
  for (const value of invalid) for (const name of ['spend', 'customers'] as const) it(`CAC rejects active ${name}=${String(value)}`, () => error(cac.compute({ spend: 100000, customers: 50, [name]: value })));
  it('CAC rejects unsafe counts and nonzero underflow, retains small money', () => {
    for (const customers of [0, -1, 1.5, max + 1]) error(cac.compute({ spend: 100, customers }));
    error(cac.compute({ spend: Number.MIN_VALUE, customers: 2 }));
    expect(cac.compute({ spend: 1e-8, customers: 1 }).primary.value).toBe('1,000·10^-8 ₽');
    const r = cac.compute({ spend: 1e308, customers: 50, ltv: 1e308 });
    expect(r.primary.value).toBe('2,000·10^306 ₽');
    expect(row(r, 'LTV к CAC')?.value).toBe('50,00 : 1');
    error(cac.compute({ spend: 1e-308, customers: 1, ltv: 1e308 }));
  });
  it('CPA labels three different events without changing their common quotient', () => {
    const labels = ['CPA — цена действия', 'CPL — цена заявки', 'CPI — цена установки'];
    for (const [i, mode] of ['cpa', 'cpl', 'cpi'].entries()) {
      const r = cpa.compute({ mode, cost: 84000, actions: 320 });
      expect(r.primary).toEqual({ label: labels[i], value: '262,50 ₽' });
      expect(row(r, 'На тысячу действий')?.value).toBe('262 500,00 ₽');
    }
  });
  for (const mode of ['bad', '', 'constructor', 'toString', true, 0]) it(`CPA rejects unknown mode ${String(mode)}`, () => error(cpa.compute({ mode, cost: 84000, actions: 320 })));
  for (const value of invalid) for (const name of ['cost', 'actions'] as const) it(`CPA rejects active ${name}=${String(value)}`, () => error(cpa.compute({ cost: 84000, actions: 320, [name]: value })));
  it('CPA never rounds fractional events or presents an unrepresentable thousand-event price', () => {
    for (const actions of [0, -1, 2.5, max + 1]) error(cpa.compute({ cost: 100, actions }));
    error(cpa.compute({ cost: 0, actions: 1 }));
    error(cpa.compute({ cost: 1e308, actions: 1 }));
    error(cpa.compute({ cost: Number.MIN_VALUE, actions: 2 }));
    // (1e308 / 1e6) * 1000 = 1e305; multiplying the input first would overflow.
    const r = cpa.compute({ cost: 1e308, actions: 1e6 });
    expect(r.primary.value).toBe('1,000·10^302 ₽');
    expect(row(r, 'На тысячу действий')?.value).toBe('1,000·10^305 ₽');
    expect(cpa.compute({ cost: 1e-8, actions: 1 }).primary.value).toBe('1,000·10^-8 ₽');
  });
  it('conversion is a percent of converting visits, while reciprocal and CPA retain their own units', () => {
    const r = cr.compute({ visitors: 8000, conversions: 240, cost: 60000 });
    expect(r.primary.value).toBe('3,00%'); // 240/8000 * 100
    expect(row(r, 'Цена конверсии')?.value).toBe('250,00 ₽'); // 60000/240
    expect(row(r, 'Визитов на одну конверсию')?.value).toBe('33,333'); // 8000/240
    expect(cr.compute({ visitors: 100, conversions: 100 }).primary.value).toBe('100,00%');
    error(cr.compute({ visitors: 100, conversions: 101 }));
  });
  it('zero conversions leave a real zero rate, without divisions by zero', () => {
    const r = cr.compute({ visitors: 5000, conversions: 0, cost: 40000 });
    expect(r.primary.value).toBe('0,00%');
    expect(r.secondary).toHaveLength(2);
    for (const cost of [undefined, '', ' ', 0]) expect(row(cr.compute({ visitors: 8000, conversions: 240, cost }), 'Цена конверсии')).toBeUndefined();
    for (const cost of [-1, true, false, Infinity, 'NaN']) error(cr.compute({ visitors: 8000, conversions: 240, cost }));
  });
  for (const value of invalid) for (const name of ['visitors', 'conversions'] as const) it(`conversion rejects active ${name}=${String(value)}`, () => error(cr.compute({ visitors: 8000, conversions: 240, [name]: value })));
  it('conversion bounds are whole counted visits, not general event-per-visit metrics', () => {
    for (const visitors of [0, -1, 1.5, max + 1]) error(cr.compute({ visitors, conversions: 0 }));
    for (const conversions of [-1, 1.5, max + 1]) error(cr.compute({ visitors: max, conversions }));
    expect(cr.compute({ visitors: max, conversions: 1 }).primary.value).toBe('1,110·10^-14%');
    error(cr.compute({ visitors: 2, conversions: 2, cost: Number.MIN_VALUE }));
    expect(row(cr.compute({ visitors: 100, conversions: 1, cost: 1e-8 }), 'Цена конверсии')?.value).toBe('1,000·10^-8 ₽');
  });
  it('pooled conversion uses counts instead of averaging percentages', () => {
    // 1/100=1%,90/900=10%; pooled91/1000=9.1%, not(1+10)/2=5.5%.
    expect(cr.compute({ visitors: 1000, conversions: 91 }).primary.value).toBe('9,10%');
    // Cost totals1000+9000, customers1+90: 10000/91=109.890..., displayed110.
    expect(cac.compute({ spend: 10000, customers: 91 }).primary.value).toBe('110 ₽');
  });
});

describe('marketing wave 4 complete owned editorial and native runtime contracts', () => {
  for (const tool of tools) it(`${tool.id}: preserves base path and every published route`, () => {
    expect(tool.presentation.fullPath).toBe(`/business/${tool.id}/`);
    for (const locale of locales) {
      const publicPage = getCalculatorById(tool.id, locale)!;
      const slug = locale === 'ru' ? tool.presentation.slug : tool.copy![locale]!.slug;
      expect(publicPage.fullPath).toBe(`/${locale}/${locale === 'es' ? 'negocios' : 'business'}/${slug}/`);
      expect(publicPage.name).toBe(locale === 'ru' ? tool.presentation.name : tool.copy![locale]!.name);
      expect(publicPage.h1).toBe(locale === 'ru' ? tool.presentation.h1 : tool.copy![locale]!.h1);
      for (const field of publicPage.fields.filter(x => ['spend', 'ltv', 'cost'].includes(x.name))) {
        expect(field.unit).toBe(locale === 'ru' ? '₽' : locale === 'en' ? '$' : locale === 'uk' ? '₴' : '€');
        expect(field.label).not.toMatch(/[₽$₴€]/);
      }
    }
  });
  for (const [index, tool] of tools.entries()) for (const locale of locales) it(`${tool.id}/${locale}: complete bounded copy and real source links`, () => {
    const copy = locale === 'ru' ? tool.presentation : tool.copy?.[locale];
    expect(isCompleteCalculatorCopy(copy)).toBe(true);
    if (!isCompleteCalculatorCopy(copy)) throw new Error('complete copy required');
    expect(copy.faq.length).toBeGreaterThanOrEqual(tool.id === 'conversion-rate' ? 5 : 4);
    expect(copy.howToUse.length).toBeGreaterThanOrEqual(4);
    expect(copy.disclaimer?.length).toBeGreaterThan(40);
    expect(sources[index][locale]).toHaveLength(2);
    for (const source of sources[index][locale]) expect(source.href).toMatch(/^https:\/\/(stripe\.com|support\.google\.com|developers\.google\.com)\//);
  });
  for (const [index, tool] of tools.entries()) for (const locale of translated) it(`${tool.id}/${locale}: source-owned runtime translates success, errors and zero-CAC note`, () => {
    const own = ownLocales[index];
    const runtime = { compute: tool.compute, localization: own };
    const inputs = index === 0 ? { spend: 100000, customers: 50, ltv: 9000 } : index === 1 ? { mode: 'cpl', cost: 84000, actions: 320 } : { visitors: 8000, conversions: 240, cost: 60000 };
    const results = [tool.compute(inputs), tool.compute({ ...inputs, [index === 0 ? 'customers' : index === 1 ? 'actions' : 'visitors']: true })];
    if (index === 0) results.push(tool.compute({ spend: 0, customers: 50, ltv: 9000 }));
    for (const result of results) {
      const localized = localizeResult(result, locale, tool.id, runtime);
      expect(JSON.stringify(localized)).not.toMatch(locale === 'uk' ? /[ЁёЫыЭэЪъ]/ : /[А-Яа-яЁё]/);
      expect(localized.primary.label).not.toBe(result.primary.label);
      if (result.secondary[0]?.accent === 'red') expect(localized.secondary[0].value).not.toBe(result.secondary[0].value);
      if (result.note) expect(localized.note).not.toBe(result.note);
      if (result.primary.value.includes('₽')) expect(localized.primary.value).toContain(locale === 'en' ? '$' : locale === 'uk' ? '₴' : '€');
    }
  });
});
