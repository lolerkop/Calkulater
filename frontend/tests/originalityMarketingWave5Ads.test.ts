import { describe, expect, it } from 'vitest';
import { definition as cpc } from '../src/calculators/cpc/definition';
import { definition as cpm } from '../src/calculators/cpm/definition';
import { definition as ctr } from '../src/calculators/ctr/definition';
import { definition as roas } from '../src/calculators/roas/definition';
import { getCalculatorById } from '../src/lib/i18n';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import { getCalculatorEditorial } from '../src/data/calculatorEditorial';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { validateValues } from '../src/components/islands/calculator/validation';
import { methodSources as s1 } from '../src/calculators/cpc/methodSources';
import { methodSources as s2 } from '../src/calculators/cpm/methodSources';
import { methodSources as s3 } from '../src/calculators/ctr/methodSources';
import { methodSources as s4 } from '../src/calculators/roas/methodSources';
import { withSharedPhrases } from '../src/lib/platform/runtime';
import { localization as l1 } from '../src/calculators/cpc/localization';
import { shared as h1 } from '../src/calculators/cpc/shared.generated';
import { localization as l2 } from '../src/calculators/cpm/localization';
import { shared as h2 } from '../src/calculators/cpm/shared.generated';
import { localization as l3 } from '../src/calculators/ctr/localization';
import { shared as h3 } from '../src/calculators/ctr/shared.generated';
import { localization as l4 } from '../src/calculators/roas/localization';
import { shared as h4 } from '../src/calculators/roas/shared.generated';
const ownedLocales = [l1,l2,l3,l4], sharedPhrases = [h1,h2,h3,h4];
const tools = [cpc, cpm, ctr, roas], sources = [s1, s2, s3, s4];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const norm = (s: string) => s.replace(/[\u00a0\u202f]/g, ' ');
const row = (r: ReturnType<typeof cpc.compute>, label: string) => norm(r.secondary!.find(item => item.label === label)!.value);
const defaults = { cpc: { cost: 36000, clicks: 1450, impressions: 92000 }, cpm: { mode: 'cpm', cost: 45000, impressions: 1200000 }, ctr: { clicks: 1250, impressions: 84000, cost: 25000 }, roas: { revenue: 480000, cost: 120000, margin: 40 } };
const active = { cpc: ['cost', 'clicks', 'impressions'], cpm: ['cost', 'impressions'], ctr: ['clicks', 'impressions', 'cost'], roas: ['revenue', 'cost', 'margin'] };
const bad = [true, false, null, NaN, Infinity, -Infinity, {}, [], '123bad'];
const input = (id: string) => defaults[id as keyof typeof defaults];
describe('wave5 advertising independent contracts', () => {
  for (const t of tools) for (const sample of t.referenceCases!) it(`${t.id}: preserved ${sample.name}`, () => {
    const r = t.compute(sample.inputs); expect(norm(r.primary.value)).toBe(norm(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(row(r, expected.label)).toBe(norm(expected.value));
  });
  for (const t of tools) for (const key of active[t.id as keyof typeof active]) for (const [i, value] of bad.entries()) it(`${t.id}: active ${key} malformed${i}`, () => {
    const r = t.compute({ ...input(t.id), [key]: value } as never); expect(r.primary.value).toBe('—'); expect(r.secondary![0].accent).toBe('red');
  });
  for (const [id, keys] of Object.entries({ cpc: ['clicks', 'impressions'], cpm: ['impressions'], ctr: ['clicks', 'impressions'] })) for (const key of keys) for (const value of [0.5, 1.5, Number.MAX_SAFE_INTEGER + 1]) it(`${id}: strictcount ${key}/${value}`, () => {
    expect(tools.find(t => t.id === id)!.compute({ ...input(id), [key]: value } as never).primary.value).toBe('—');
  });
  it('CPC independentDecimal oracle and unknown-impression omission', () => {
    const r = cpc.compute(defaults.cpc); expect(r.primary.value).toBe('24,83 ₽'); expect(row(r, 'CPM')).toBe('391,30 ₽'); expect(row(r, 'Кликабельность')).toBe('1,58%');
    for (const impressions of [undefined, '', ' ', 0]) { const result = cpc.compute({ cost: 5200, clicks: 260, impressions }); expect(result.primary.value).toBe('20,00 ₽'); expect(result.secondary!.map(item => item.label)).toEqual(['Кликов', 'Бюджет']); }
    expect(cpc.compute({ cost: 5200, clicks: 260, impressions: -1 }).primary.value).toBe('—');
  });
  for (const mode of ['cpm', 'cost', 'impressions']) it(`CPM ${mode}: actualform visibility and inactive validation`, () => {
    const values = { mode, cost: 30000, cpm: 250, impressions: 120000 };
    const inactive = mode === 'cpm' ? 'cpm' : mode === 'cost' ? 'cost' : 'impressions';
    const expected = mode === 'cpm' ? '250,00 ₽' : mode === 'cost' ? '30 000,00 ₽' : '120 000';
    for (const value of bad) expect(norm(cpm.compute({ ...values, [inactive]: value } as never).primary.value)).toBe(expected);
    const fields = getCalculatorById('cpm', 'ru')!.fields;
    expect(fields.filter(f => isFieldVisible(f, values)).map(f => f.name)).toEqual(mode === 'cpm' ? ['mode', 'cost', 'impressions'] : mode === 'cost' ? ['mode', 'impressions', 'cpm'] : ['mode', 'cost', 'cpm']);
    expect(validateValues('cpm', fields, { ...values, [inactive]: NaN }, 'ru')).toEqual({});
  });
  for (const mode of ['', null, true, 'other']) it(`CPM unknownmode ${String(mode)}`, () => expect(cpm.compute({ mode, cost: 30000, cpm: 250, impressions: 120000 } as never).primary.value).toBe('—'));
  it('inverse estimated impressions have nearest-whole display; sourcecounts are strict', () => {
    expect(cpm.compute({ mode: 'impressions', cost: 1, cpm: 3000 }).primary.value).toBe('0'); expect(cpm.compute({ mode: 'impressions', cost: 1.5, cpm: 1000 }).primary.value).toBe('2'); expect(cpm.compute({ mode: 'cost', cpm: 3000, impressions: 1.5 }).primary.value).toBe('—');
  });
  it('CTR independentDecimal oracle, zero clicks and negative optional spend', () => {
    const r = ctr.compute(defaults.ctr); expect(r.primary.value).toBe('1,49%'); expect(row(r, 'Цена клика')).toBe('20,00 ₽'); expect(row(r, 'Цена тысячи показов')).toBe('297,62 ₽');
    const zero = ctr.compute({ clicks: 0, impressions: 5000, cost: 100 }); expect(zero.primary.value).toBe('0,00%'); expect(row(zero, 'Цена клика')).toBe('—');
    expect(ctr.compute({ clicks: 1, impressions: 5000, cost: -1 }).primary.value).toBe('—'); expect(ctr.compute({ clicks: 120, impressions: 100 }).primary.value).toBe('120,00%');
  });
  it('ROAS independent40percent margin oracle changes contribution, return and threshold', () => {
    const r = roas.compute(defaults.roas); expect(r.primary.value).toBe('4,00×'); expect(row(r, 'Остаток после учтённых затрат и рекламы')).toBe('72 000,00 ₽'); expect(row(r, 'Доходность рекламного расхода')).toBe('60,00%'); expect(row(r, 'Точка окупаемости по доходу')).toBe('300 000,00 ₽'); expect(row(r, 'ROAS для покрытия рекламы')).toBe('2,50×'); expect(row(r, 'ROAS по валовой марже')).toBe('1,60×'); expect(r.secondary!.some(item => item.label === 'ROI' || item.label === 'Прибыль')).toBe(false);
  });
  it('ROAS1 at40percent is negative', () => {
    const r = roas.compute({ revenue: 120000, cost: 120000, margin: 40 }); expect(r.primary.value).toBe('1,00×'); expect(row(r, 'Остаток после учтённых затрат и рекламы')).toBe('-72 000,00 ₽'); expect(row(r, 'Доходность рекламного расхода')).toBe('-60,00%'); expect(r.secondary![1].accent).toBe('red');
  });
  it('ROAS zero margin has no finite covering revenue; zero revenue loses all ad spend', () => {
    const r = roas.compute({ revenue: 480000, cost: 120000, margin: 0 }); expect(row(r, 'Доходность рекламного расхода')).toBe('-100,00%'); expect(row(r, 'Остаток после учтённых затрат и рекламы')).toBe('-120 000,00 ₽'); expect(row(r, 'Точка окупаемости по доходу')).toBe('—'); expect(r.note).toBeTruthy();
    expect(row(roas.compute({ revenue: 0, cost: 120000, margin: 40 }), 'Доходность рекламного расхода')).toBe('-100,00%');
  });
  it('CPM finite budget survives formerly overflowing cpm×impressions intermediate', () => expect(cpm.compute({ mode: 'cost', impressions: 1000, cpm: 1e308 }).primary.value).toBe('1,000·10^308 ₽'));
  for (const t of tools) it(`${t.id}: explicit overflow domain failure`, () => {
    const r = t.compute({ ...input(t.id), cost: 1e308, clicks: 1, impressions: 1, revenue: 1e308, margin: 40 } as never); expect(r.primary.value).toBe('—'); expect(r.secondary![0].value).toBe('Результат вне допустимого диапазона');
  });
});

describe('actual20 advertising pages and native runtime', () => {
  for (const [i, t] of tools.entries()) for (const locale of locales) it(`${t.id}/${locale}: copy, SEO, bounded sources and native result`, () => {
    const actual = getCalculatorById(t.id, locale)!, copy = locale === 'ru' ? t.presentation : t.copy![locale]!;
    for (const key of ['longDescription', 'howToUse', 'howItWorks', 'example', 'faq', 'disclaimer'] as const) expect(actual[key]).toEqual(copy[key]);
    expect(actual.seoContent?.intro).toBe(copy.longDescription); expect(actual.seoContent?.howItWorks).toBe(copy.howItWorks); expect(actual.seoContent?.example).toBe(copy.example); expect(actual.seoContent?.tips).toBe(copy.howToUse!.join(' ')); expect(actual.seoContent?.faq).toEqual(copy.faq);
    expect(actual.faq.length).toBeGreaterThanOrEqual(4); expect(new Set(actual.faq.map(item => item.q)).size).toBe(actual.faq.length); expect(actual.name).toBe(copy.name); expect(actual.h1).toBe(copy.h1);
    const editorial = getCalculatorEditorial(actual, locale); expect(editorial.sources).toEqual(sources[i][locale]); expect(editorial.method).toBe(actual.howItWorks); expect(editorial.limitation).toContain(actual.disclaimer);
    expect(JSON.stringify([actual.longDescription, actual.howToUse, actual.howItWorks, actual.example, actual.faq, actual.disclaimer])).not.toMatch(/\b(?:undefined|NaN|Infinity)\b/);
    for (const values of [input(t.id), { ...input(t.id), cost: true }]) { const result = localizeResult(t.compute(values as never), locale, t.id, { compute: t.compute, localization: withSharedPhrases(ownedLocales[i],sharedPhrases[i]) }); if (['en', 'de', 'es'].includes(locale)) expect(JSON.stringify(result)).not.toMatch(/[А-Яа-яЁё]/); }
    const fields = actual.fields.filter(f => f.unit === ({ ru: '₽', en: '$', uk: '₴', de: '€', es: '€' } as const)[locale]); expect(fields.length).toBeGreaterThan(0); for (const field of fields) expect(field.label).not.toMatch(/[₽$₴€]/);
  });
});
