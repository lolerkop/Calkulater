import { postAuditField } from './helpers/postAuditAmendments';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { describe, expect, it } from 'vitest';
import { getCalculatorById, type Locale } from '../src/lib/i18n';
import { clientLocales } from '../src/lib/clientI18n';
import { fieldUnitLabel } from '../src/lib/fieldUnitLabel';
import { subjectFieldUnitContracts, subjectFieldUnitLabel } from '../src/lib/subjectFieldUnits';
import type { Field } from '../src/lib/types';
import { amendedFieldHelp as previousFieldHelp } from './helpers/targetedFinishFieldHelp';
const amendedFieldHelp = (id: string, locale: Locale, field: Field) => postAuditField(id,locale,previousFieldHelp(id,locale,field));

// Expected captions come from the three independently curated subject packets,
// with the single approved compact loan-term wording recorded separately. They
// are not read from the implementation's registry. Existing source fields come
// from the immutable C4D integration fixture, not regenerated candidate output.
const reportText = readFileSync(new URL('../reports/originality-final-static-unit-curation.json', import.meta.url), 'utf8');
const captionText = readFileSync(new URL('../reports/originality-final-static-unit-caption-contract.json', import.meta.url), 'utf8');
const beforeText = readFileSync(new URL('../reports/originality-final-before-currency-unit/frontend__e2e__fixtures__originality-final-calculator-route-smoke.json', import.meta.url), 'utf8');
const hash = (s: string) => createHash('sha256').update(s).digest('hex');
const publicLocales = ['ru', 'en', 'uk', 'de', 'es'] as const;
type PublicLocale = typeof publicLocales[number];
type CaptionContract = {type: Field['type']; captions: Record<PublicLocale, string>; semanticMeaning: string};
type PublishedEvidence = {locale: PublicLocale; route: string; beforeStaticUnit: string; sourceField: Field};
type Revise = {id: string; field: string; type: Field['type']; nativeCandidates: Record<PublicLocale, string>; publishedRows: PublishedEvidence[]};
type Keep = {id: string; field: string; type: Field['type']; publishedEvidence: PublishedEvidence[]};
const curation = JSON.parse(reportText) as {revise: Revise[]; keep: Keep[]; summary: Record<string, number>};
const caption = JSON.parse(captionText) as {curationSourceSHA256: string; contracts: Record<string, Record<string, CaptionContract>>; rootConciseCaptionDispositions: {id: string; field: string; before: Record<PublicLocale,string>; after: Record<PublicLocale,string>}[]};
const before = JSON.parse(beforeText) as {rows: {id: string; locale: PublicLocale; route: string; fields: {source: Field; staticUnit: string}[]}[]};
const pageCache = new Map<string, NonNullable<ReturnType<typeof getCalculatorById>>>();
function page(id: string, locale: PublicLocale) {
  const key = `${id}/${locale}`;
  let value = pageCache.get(key);
  if (!value) { value = getCalculatorById(id, locale)!; expect(value, key).toBeDefined(); pageCache.set(key, value); }
  return value;
}
const pairs = (contracts: Record<string, Record<string, unknown>>) => Object.entries(contracts).flatMap(([id, fields]) => Object.keys(fields).map(name => `${id}/${name}`)).sort();
const currencyIds = ['currency-converter', 'usd-to-eur', 'eur-to-mdl', 'usd-to-mdl'] as const;

it('binds the exact independent curation, caption disposition and immutable baseline', () => {
  expect(hash(reportText)).toBe('b6a3bd40f10e8faa5c4a049bb6e726a7aa31c8b381efb7dfff6970af6731f786');
  expect(hash(captionText)).toBe('cbc3d188b5c1ab888c308944faa182a050a30568a155dd50e6550b03cfe9ddd1');
  expect(hash(beforeText)).toBe('c957f613883d99369b5d481bd9896df0078100ff0e98fce598c76c3ec55e5ee2');
  expect(caption.curationSourceSHA256).toBe(hash(reportText));
  expect(curation.revise).toHaveLength(155); expect(curation.keep).toHaveLength(206);
  expect(curation.revise.flatMap(row => row.publishedRows)).toHaveLength(771);
  expect(curation.keep.flatMap(row => row.publishedEvidence)).toHaveLength(1028);
  expect(new Set(curation.revise.map(row => row.id)).size).toBe(80);
  expect(new Set(curation.revise.flatMap(row => row.publishedRows.map(row => row.route))).size).toBe(396);
  expect(pairs(subjectFieldUnitContracts)).toEqual(curation.revise.map(row => `${row.id}/${row.field}`).sort());
  expect(pairs(caption.contracts)).toEqual(pairs(subjectFieldUnitContracts));
  expect(caption.rootConciseCaptionDispositions).toHaveLength(1);
  expect(caption.rootConciseCaptionDispositions[0]).toMatchObject({id: 'credit-calculator', field: 'term'});
  for (const row of curation.revise) {
    const approved = caption.contracts[row.id][row.field];
    expect(approved.type).toBe(row.type);
    const disposition = caption.rootConciseCaptionDispositions.find(change => change.id === row.id && change.field === row.field);
    expect(approved.captions).toEqual(disposition?.after ?? row.nativeCandidates);
    if (disposition) expect(disposition.before).toEqual(row.nativeCandidates);
    expect(subjectFieldUnitContracts[row.id][row.field].type).toBe(row.type);
  }
});

describe('771 published quantity fields retain their input contracts and get exact reviewed static captions', () => {
  for (const record of curation.revise) for (const evidence of record.publishedRows) {
    it(`${record.id}/${evidence.locale}/${record.field}`, () => {
      const calculator = page(record.id, evidence.locale);
      const frozen = before.rows.find(row => row.id === record.id && row.locale === evidence.locale)!;
      expect(calculator.fullPath).toBe(evidence.route);
      const field = calculator.fields.find(field => field.name === record.field)!;
      expect(field).toEqual(amendedFieldHelp(record.id,evidence.locale,evidence.sourceField));
      expect(field.unit).toBeUndefined(); expect(field.type).toBe(record.type);
      expect(frozen.fields.find(row => row.source.name === record.field)!.staticUnit).toBe(evidence.beforeStaticUnit);
      const snapshot = JSON.stringify(calculator.fields);
      const expected = caption.contracts[record.id][record.field].captions[evidence.locale];
      expect(subjectFieldUnitLabel(record.id, field, evidence.locale)).toBe(expected);
      expect(fieldUnitLabel(field, evidence.locale, record.id)).toBe(expected);
      expect(JSON.stringify(calculator.fields)).toBe(snapshot);
    });
  }
});

describe('1028 dimensionless, count, abstract and non-quantity field descriptions are preserved', () => {
  for (const record of curation.keep) for (const evidence of record.publishedEvidence) {
    it(`${record.id}/${evidence.locale}/${record.field}: KEEP`, () => {
      const calculator = page(record.id, evidence.locale);
      const field = calculator.fields.find(field => field.name === record.field)!;
      expect(field).toEqual(amendedFieldHelp(record.id,evidence.locale,evidence.sourceField));
      expect(field.type).toBe(record.type);
      expect(subjectFieldUnitLabel(record.id, field, evidence.locale)).toBeUndefined();
      expect(fieldUnitLabel(field, evidence.locale, record.id)).toBe(evidence.beforeStaticUnit);
    });
  }
});

it('preserves every source-field property across all1866 records with ten exact help-only amendments', () => {
  expect(before.rows).toHaveLength(1866);
  for (const frozen of before.rows) {
    const calculator = page(frozen.id, frozen.locale);
    expect(calculator.fields, `${frozen.id}/${frozen.locale}`).toEqual(frozen.fields.map(field => amendedFieldHelp(frozen.id,frozen.locale,field.source)));
  }
});

for (const record of curation.revise) it(`${record.id}/${record.field}: explicit units and exact field type take precedence`, () => {
  const field = record.publishedRows[0].sourceField;
  expect(subjectFieldUnitLabel(record.id, {...field, unit: 'EXPLICIT'}, 'en')).toBeUndefined();
  expect(fieldUnitLabel({...field, unit: 'EXPLICIT'}, 'en', record.id)).toBe('EXPLICIT');
  const wrong: Field = {...field, type: record.type === 'number' ? 'textarea' : 'number'};
  expect(subjectFieldUnitLabel(record.id, wrong, 'en')).toBeUndefined();
  expect(fieldUnitLabel(wrong, 'en', record.id)).toBe('unitless');
  expect(subjectFieldUnitLabel(`${record.id}-unreviewed`, field, 'en')).toBeUndefined();
  expect(subjectFieldUnitLabel(record.id, {...field, name: `${field.name}-unreviewed`}, 'en')).toBeUndefined();
});

it('rejects prototype-like names and never infers units from a familiar field name alone', () => {
  for (const id of ['__proto__', 'constructor', 'toString', 'hasOwnProperty']) for (const name of ['amount', 'term', 'volume', 'points']) {
    const field: Field = {name, label: name, type: name === 'points' ? 'textarea' : 'number'};
    expect(subjectFieldUnitLabel(id, field, 'en')).toBeUndefined();
    expect(fieldUnitLabel(field, 'en', id)).toBe('unitless');
  }
  for (const name of ['__proto__', 'constructor', 'toString', 'hasOwnProperty']) {
    const field: Field = {name, label: name, type: 'number'};
    expect(subjectFieldUnitLabel('molarity', field, 'en')).toBeUndefined();
    expect(fieldUnitLabel(field, 'en', 'molarity')).toBe('unitless');
  }
});

for (const id of currencyIds) for (const locale of publicLocales) it(`${id}/${locale}: the earlier source-currency scope is excluded from this registry`, () => {
  const amount = page(id, locale).fields.find(field => field.name === 'amount')!;
  expect(Object.hasOwn(subjectFieldUnitContracts, id)).toBe(false);
  expect(subjectFieldUnitLabel(id, amount, locale)).toBeUndefined();
  const expected = id === 'currency-converter' ? {
    ru:'в выбранной исходной валюте', en:'in the selected source currency', uk:'у вибраній початковій валюті', de:'in der gewählten Ausgangswährung', es:'en la divisa de origen seleccionada',
  }[locale] : id === 'eur-to-mdl' ? 'EUR' : 'USD';
  expect(fieldUnitLabel(amount, locale, id)).toBe(expected);
});

it('uses the existing English private-locale fallback without requesting unpublished routes', () => {
  expect(clientLocales).toHaveLength(17);
  const privateLocales = clientLocales.filter(locale => !(publicLocales as readonly string[]).includes(locale));
  expect(privateLocales).toHaveLength(12);
  for (const record of curation.revise) {
    const field = record.publishedRows[0].sourceField;
    for (const locale of privateLocales) {
      expect(subjectFieldUnitLabel(record.id, field, locale)).toBe(caption.contracts[record.id][record.field].captions.en);
      expect(fieldUnitLabel(field, locale as Locale, record.id)).toBe(caption.contracts[record.id][record.field].captions.en);
    }
  }
});
