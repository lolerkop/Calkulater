import { describe, expect, it } from 'vitest';
import { definition as cpc } from '../src/calculators/cpc/definition';
import { definition as cpm } from '../src/calculators/cpm/definition';
import { definition as ctr } from '../src/calculators/ctr/definition';
import { definition as mrr } from '../src/calculators/mrr-arr/definition';
import { definition as arpu } from '../src/calculators/arpu-arppu/definition';
import { definition as er } from '../src/calculators/engagement-rate/definition';
import { getCalculatorById } from '../src/lib/i18n';
import { parseLocalizedNumber } from '../src/lib/format';
import { validateValues } from '../src/components/islands/calculator/validation';
import { buildCalculatorQueryString, readValuesFromSearch } from '../src/lib/shareLink';
import type { CalculatorDefinitionV2, CalculatorFormValues } from '../src/lib/platform/types';

// The fractional decimal is exact text; binary Number rounds it onto the
// integer. Fixed valid baselines below are independently calculated ratios.
const cases: { tool: CalculatorDefinitionV2; values: CalculatorFormValues; key: string; expected: string }[] = [
  { tool: cpc, values: { cost: 10, clicks: 1, impressions: 10 }, key: 'clicks', expected: '10,00 ₽' },
  { tool: cpc, values: { cost: 10, clicks: 1, impressions: 10 }, key: 'impressions', expected: '10,00 ₽' },
  { tool: cpm, values: { mode: 'cpm', cost: 10, impressions: 10 }, key: 'impressions', expected: '1 000,00 ₽' },
  { tool: cpm, values: { mode: 'cost', cpm: 100, impressions: 10 }, key: 'impressions', expected: '1,00 ₽' },
  { tool: ctr, values: { clicks: 1, impressions: 10, cost: 2 }, key: 'clicks', expected: '10,00%' },
  { tool: ctr, values: { clicks: 1, impressions: 10, cost: 2 }, key: 'impressions', expected: '10,00%' },
  { tool: mrr, values: { subscribers: 2, arpuMonth: 1.25, growthPct: 4 }, key: 'subscribers', expected: '2,50 ₽' },
  { tool: arpu, values: { revenue: 10, users: 2, payingUsers: 1 }, key: 'users', expected: '5,00 ₽' },
  { tool: arpu, values: { revenue: 10, users: 2, payingUsers: 1 }, key: 'payingUsers', expected: '5,00 ₽' },
  { tool: er, values: { engagements: 3, base: 'reach', reach: 2, followers: 'invalid-inactive' }, key: 'engagements', expected: '150,00%' },
  { tool: er, values: { engagements: 3, base: 'reach', reach: 2, followers: 'invalid-inactive' }, key: 'reach', expected: '150,00%' },
  { tool: er, values: { engagements: 3, base: 'followers', followers: 2, reach: 'invalid-inactive' }, key: 'engagements', expected: '150,00%' },
  { tool: er, values: { engagements: 3, base: 'followers', followers: 2, reach: 'invalid-inactive' }, key: 'followers', expected: '150,00%' },
];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const native = {
  ru: 'Количество должно быть целым в допустимом диапазоне',
  en: 'The count must be a whole number within the supported range',
  uk: 'Кількість має бути цілою в допустимому діапазоні',
  de: 'Die Anzahl muss eine ganze Zahl im zulässigen Bereich sein',
  es: 'El recuento debe ser entero dentro del rango admitido',
};
const normalize = (text: string) => text.replace(/[\u00a0\u202f]/g, ' ');
const runtime = (tool: CalculatorDefinitionV2) => ({ compute: tool.compute, validate: tool.validate });
const fractionalText = (value: string | number | boolean, point = '.') => `${value}${point}00000000000000001`;

describe('marketing actual count reads preserve original decimal meaning', () => {
  for (const [index, sample] of cases.entries()) {
    it(`${index}/${sample.tool.id}/${sample.key}: direct raw fraction is rejected instead of rounded`, () => {
      for (const point of ['.', ',']) {
        const raw = fractionalText(sample.values[sample.key], point);
        const result = sample.tool.compute({ ...sample.values, [sample.key]: raw });
        expect(result.primary.value).toBe('—');
        expect(result.secondary![0].accent).toBe('red');
      }
    });
    it(`${index}/${sample.tool.id}/${sample.key}: exact integer tails retain independent normal result`, () => {
      const raw = `${sample.values[sample.key]}.00000000000000000`;
      expect(normalize(sample.tool.compute({ ...sample.values, [sample.key]: raw }).primary.value)).toBe(sample.expected);
    });
    for (const locale of locales) {
      const point = locale === 'en' ? '.' : ',';
      it(`${locale}/${index}/${sample.tool.id}/${sample.key}: actual raw form has native whole-count error`, () => {
        const fields = getCalculatorById(sample.tool.id, locale)!.fields;
        const values = { ...sample.values, [sample.key]: fractionalText(sample.values[sample.key], point) };
        expect(validateValues(sample.tool.id, fields, values, locale, runtime(sample.tool))[sample.key]).toBe(native[locale]);
        expect(validateValues(sample.tool.id, fields, { ...sample.values, [sample.key]: `${sample.values[sample.key]}${point}00000000000000000` }, locale, runtime(sample.tool))).toEqual({});
      });
      it(`${locale}/${index}/${sample.tool.id}/${sample.key}: query and copied link retain invalid decimal`, () => {
        const fields = getCalculatorById(sample.tool.id, locale)!.fields;
        const raw = fractionalText(sample.values[sample.key], point);
        const values = { ...sample.values, [sample.key]: raw };
        const query = buildCalculatorQueryString(fields, values, locale);
        expect(new URLSearchParams(query).get(sample.key)).toBe(raw);
        const restored = readValuesFromSearch(fields, sample.values, query, locale);
        expect(restored[sample.key]).toBe(raw);
        expect(validateValues(sample.tool.id, fields, restored, locale, runtime(sample.tool))[sample.key]).toBe(native[locale]);
      });
    }
  }
  for (const tool of [cpc, cpm, ctr, mrr, arpu, er]) for (const locale of locales) it(`${locale}/${tool.id}: hook leaves partial and malformed grammar to common form`, () => {
    const fields = getCalculatorById(tool.id, locale)!.fields;
    for (const value of ['-', 'broken-value']) {
      const values = Object.fromEntries(fields.map(field => [field.name, field.type === 'number' ? value : field.defaultValue ?? '']));
      expect(tool.validate!({ fields, values, locale, parseNumber: text => parseLocalizedNumber(text, locale) })).toEqual({});
    }
  });
});

describe('optional/inactive counts and fractional money keep their published contracts', () => {
  for (const impressions of ['', ' ', undefined, 0]) it(`CPC unknown impressions ${String(impressions)}`, () => {
    const result = cpc.compute({ cost: 10.5, clicks: 2, impressions });
    expect(result.primary.value).toBe('5,25 ₽');
    expect(result.secondary!.map(item => item.label)).toEqual(['Кликов', 'Бюджет']);
  });
  for (const locale of locales) it(`${locale}: CPC optional blank and inactive inverse CPM count stay valid`, () => {
    const cpcFields = getCalculatorById(cpc.id, locale)!.fields;
    expect(validateValues(cpc.id, cpcFields, { cost: 10.5, clicks: 2, impressions: '' }, locale, runtime(cpc))).toEqual({});
    const raw = { mode: 'impressions', cost: 1.5, cpm: 1000, impressions: '1.00000000000000001' };
    const cpmFields = getCalculatorById(cpm.id, locale)!.fields;
    expect(validateValues(cpm.id, cpmFields, raw, locale, runtime(cpm))).toEqual({});
    expect(cpm.compute(raw).primary.value).toBe('2');
    const query = buildCalculatorQueryString(cpmFields, raw, locale);
    expect(new URLSearchParams(query).has('impressions')).toBe(false);
  });
  it('CPC published default known impressions stays92000', () => {
    expect(cpc.presentation.fields.find(field => field.name === 'impressions')!.defaultValue).toBe(92000);
    expect(cpc.compute({ cost: 36000, clicks: 1450, impressions: 92000 }).primary.value).toBe('24,83 ₽');
  });
  it('MRR fractional monthly price remains1.25 per subscriber', () => {
    expect(mrr.compute({ subscribers: 2, arpuMonth: 1.25, growthPct: 4 }).primary.value).toBe('2,50 ₽');
  });
  for (const locale of locales) it(`${locale}: zero payer and inactive reach/follower retain genuine cases`, () => {
    const fields = getCalculatorById(er.id, locale)!.fields;
    for (const base of ['reach', 'followers']) {
      const raw = { engagements: 3, base, reach: base === 'reach' ? 2 : '1.00000000000000001', followers: base === 'followers' ? 2 : '1.00000000000000001' };
      expect(validateValues(er.id, fields, raw, locale, runtime(er))).toEqual({});
      expect(er.compute(raw).primary.value).toBe('150,00%');
    }
    const result = arpu.compute({ revenue: 100, users: 10, payingUsers: 0 });
    expect(result.primary.value).toBe('10,00 ₽');
    expect(result.secondary!.some(row => row.label === 'ARPPU')).toBe(false);
  });
});


describe('scientific query exact decimal meaning survives count restoration', () => {
  for (const locale of locales) for (const tool of [cpc, cpm, ctr, mrr, arpu, er]) {
    const sample = cases.find(item => item.tool === tool)!;
    it(`${locale}/${tool.id}: noninteger scientific query remains invalid after reload`, () => {
      const fields = getCalculatorById(tool.id, locale)!.fields;
      const raw = '1.00000000000000001e0';
      const restored = readValuesFromSearch(fields, sample.values, `?${new URLSearchParams({ [sample.key]: raw })}`, locale);
      expect(restored[sample.key]).toBe(raw);
      expect(validateValues(tool.id, fields, restored, locale, runtime(tool))[sample.key]).toBeTruthy();
      const query = buildCalculatorQueryString(fields, restored, locale);
      expect(new URLSearchParams(query).get(sample.key)).toBe(raw);
    });
  }
  for (const locale of locales) for (const raw of ['1.00000000000000000e0', '1.5e1', '1e3']) it(`${locale}: exact whole scientific query ${raw} remains supported`, () => {
    const fields = getCalculatorById(cpc.id, locale)!.fields;
    const restored = readValuesFromSearch(fields, { cost: 10, clicks: 1, impressions: 1000 }, `?${new URLSearchParams({ clicks: raw })}`, locale);
    expect(restored.clicks).toBe(Number(raw));
    expect(validateValues(cpc.id, fields, restored, locale, runtime(cpc))).toEqual({});
    expect(cpc.compute(restored).primary.value).not.toBe('—');
  });
});
