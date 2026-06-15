import { describe, expect, it } from 'vitest';
import type { Field } from '../src/lib/types';
import {
  buildCalculatorQueryString,
  buildInitialValues,
  readValuesFromSearch,
} from '../src/lib/shareLink';

const fields: Field[] = [
  { name: 'amount', label: 'Amount', type: 'number', defaultValue: 100 },
  { name: 'mode', label: 'Mode', type: 'select', defaultValue: 'gross', options: [
    { value: 'gross', label: 'Gross' },
    { value: 'net', label: 'Net' },
  ] },
  { name: 'includeTax', label: 'Include tax', type: 'checkbox', defaultValue: false },
  { name: 'deduction', label: 'Deduction', type: 'number', defaultValue: 0, showIf: { field: 'mode', equals: 'net' } },
];

describe('calculator share-link codec', () => {
  it('encodes only changed visible values without mutating the current URL', () => {
    const query = buildCalculatorQueryString(fields, {
      amount: '1 250,5',
      mode: 'net',
      includeTax: true,
      deduction: 50,
    }, 'ru');

    expect(query).toBe('?amount=1250.5&mode=net&includeTax=1&deduction=50');
  });

  it('decodes current and legacy-compatible values', () => {
    const defaults = buildInitialValues(fields);
    const values = readValuesFromSearch(
      fields,
      defaults,
      '?amount=2500.75&mode=net&includeTax=true&deduction=100',
      'en',
    );

    expect(values).toEqual({ amount: 2500.75, mode: 'net', includeTax: true, deduction: 100 });
  });

  it('ignores malformed numbers and unsupported select values', () => {
    const defaults = buildInitialValues(fields);
    const values = readValuesFromSearch(fields, defaults, '?amount=oops&mode=other', 'en');
    expect(values).toEqual(defaults);
  });
});
