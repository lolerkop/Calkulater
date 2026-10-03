import { describe, expect, it } from 'vitest';
import type { Field } from '../src/lib/types';
import { buildCalculatorQueryString, readValuesFromSearch, type ShareFormValues } from '../src/lib/shareLink';
import { normalizeValues } from '../src/components/islands/calculator/values';
import { validateValues } from '../src/components/islands/calculator/validation';
import metadata from './fixtures/originalityFinalExplicitBlankFields.json';

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const records = metadata.fields as unknown as { id: string; field: Field; defaults: ShareFormValues }[];
// These are actual resolved field shapes from the immutable public fixture.
// A parser-locale case is not permission to publish a tax URL in that language.
describe('66 actual optional numeric field shapes preserve explicit blank state', () => {
  it('keeps the exact resolved numeric inventory', () => {
    expect(records).toHaveLength(66);
    expect(new Set(records.map(({ id, field }) => `${id}.${field.name}`)).size).toBe(66);
    expect(records.every(({ field }) => field.type === 'number' && field.optional === true)).toBe(true);
  });
  for (const { id, field, defaults } of records) for (const locale of locales) {
    it(`${id}/${field.name}/${locale}: blank and whitespace roundtrip, absent stays default`, () => {
      const fields = [field];
      for (const raw of ['', ' \t']) {
        const values = { ...defaults, [field.name]: raw };
        const query = buildCalculatorQueryString(fields, values, locale);
        const params = new URLSearchParams(query);
        expect(params.has(field.name)).toBe(true);
        expect(params.get(field.name)).toBe(raw);
        const restored = readValuesFromSearch(fields, defaults, query, locale);
        expect(restored[field.name]).toBe(raw);
        expect(validateValues('blank-codec', fields, restored, locale)[field.name]).toBeUndefined();
        expect(normalizeValues(fields, restored, locale)[field.name]).toBe(0);
      }
      expect(readValuesFromSearch(fields, defaults, '?unrelated=1', locale)[field.name]).toBe(defaults[field.name]);
      expect(buildCalculatorQueryString(fields, defaults, locale)).toBe('');
      if (defaults[field.name] !== 0) {
        const zeroQuery = buildCalculatorQueryString(fields, { ...defaults, [field.name]: 0 }, locale);
        expect(new URLSearchParams(zeroQuery).get(field.name)).toBe('0');
        expect(readValuesFromSearch(fields, defaults, zeroQuery, locale)[field.name]).toBe(0);
      }
    });
  }
});
for (const locale of locales) {
  it(`${locale}: required numeric blank remains invalid, absent remains100`, () => {
    const field: Field = { name: 'amount', type: 'number', label: 'Amount', defaultValue: 100 };
    const defaults = { amount: 100 };
    const query = buildCalculatorQueryString([field], { amount: '' }, locale);
    expect(new URLSearchParams(query).get('amount')).toBe('');
    const restored = readValuesFromSearch([field], defaults, query, locale);
    expect(restored.amount).toBe('');
    expect(validateValues('blank-codec', [field], restored, locale)).toHaveProperty('amount');
    expect(normalizeValues([field], restored, locale).amount).toBe('');
    expect(readValuesFromSearch([field], defaults, '', locale)).toEqual(defaults);
  });
  it(`${locale}: text and date blanks preserve cleared seed; empty defaults remain omitted`, () => {
    const fields: Field[] = [
      { name: 'text', label: 'Text', type: 'textarea', defaultValue: 'seed text' },
      { name: 'birthDate', label: 'Birth', type: 'date', defaultValue: '1990-01-01' },
      { name: 'operationDate', label: 'Optional date', type: 'date', optional: true, defaultValue: '2026-01-01' },
      { name: 'alreadyEmpty', label: 'Empty', type: 'textarea', defaultValue: '' },
    ];
    const defaults = { text: 'seed text', birthDate: '1990-01-01', operationDate: '2026-01-01', alreadyEmpty: '' };
    const cleared = { text: '', birthDate: '', operationDate: '', alreadyEmpty: '' };
    const query = buildCalculatorQueryString(fields, cleared, locale);
    expect(Object.fromEntries(new URLSearchParams(query))).toEqual({ text: '', birthDate: '', operationDate: '' });
    const restored = readValuesFromSearch(fields, defaults, query, locale);
    expect(restored).toEqual(cleared);
    expect(validateValues('blank-codec', fields, restored, locale)).toHaveProperty('birthDate');
    expect(validateValues('blank-codec', fields, restored, locale)).not.toHaveProperty('operationDate');
  });
  it(`${locale}: malformed, enum, bool, pinned readOnly and hidden policy remains unchanged`, () => {
    const fields: Field[] = [
      { name: 'amount', label: 'Amount', type: 'number', defaultValue: 100 },
      { name: 'mode', label: 'Mode', type: 'select', defaultValue: 'a', options: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }] },
      { name: 'fee', label: 'Fee', type: 'number', optional: true, defaultValue: 0, showIf: { field: 'mode', equals: 'b' } },
      { name: 'from', label: 'From', type: 'select', defaultValue: 'USD', readOnly: true, options: [{ value: 'USD', label: 'USD' }, { value: 'JPY', label: 'JPY' }] },
      { name: 'include', label: 'Include', type: 'checkbox', defaultValue: false },
    ];
    const defaults = { amount: 100, mode: 'a', fee: 0, from: 'USD', include: false };
    expect(readValuesFromSearch(fields, defaults, '?amount=oops&mode=unknown&from=JPY&include=other', locale)).toEqual(defaults);
    const query = buildCalculatorQueryString(fields, { ...defaults, amount: true, fee: '' }, locale);
    expect(query).toBe(''); // numeric bool excluded, hidden blank excluded, exact defaults omitted.
    expect(buildCalculatorQueryString(fields, { ...defaults, mode: 'unknown' }, locale)).toBe('?mode=unknown');
    for (const type of ['select', 'toggle', 'checkbox'] as const) {
      const enumField: Field = { name: 'enum', label: 'Enum', type, defaultValue: type === 'checkbox' ? false : 'a', options: [{ value: 'a', label: 'A' }, { value: 'b', label: 'B' }] };
      const enumDefaults = { enum: type === 'checkbox' ? false : 'a' };
      expect(buildCalculatorQueryString([enumField], { enum: '' }, locale)).toBe('');
      expect(readValuesFromSearch([enumField], enumDefaults, '?enum=', locale)).toEqual(enumDefaults);
    }
    const visible = buildCalculatorQueryString(fields, { ...defaults, mode: 'b', fee: '' }, locale);
    expect(Object.fromEntries(new URLSearchParams(visible))).toEqual({ mode: 'b', fee: '' });
  });
  it(`${locale}: exponent and exact fraction safeguards keep original text and values`, () => {
    const field: Field = { name: 'value', label: 'Value', type: 'number', defaultValue: 7 };
    for (const raw of ['1.00000000000000001', '1.00000000000000001e0', '1e-999']) {
      const query = buildCalculatorQueryString([field], { value: raw }, locale);
      expect(new URLSearchParams(query).get('value')).toBe(raw);
      expect(readValuesFromSearch([field], { value: 7 }, query, locale).value).toBe(raw);
    }
    for (const [raw, value] of [['1.00000000000000000e0', 1], ['1.5e1', 15], ['1e3', 1000], ['0e-999', 0]] as const)
      expect(readValuesFromSearch([field], { value: 7 }, `?value=${raw}`, locale).value).toBe(value);
  });
}
