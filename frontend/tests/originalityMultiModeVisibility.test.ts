import { describe, expect, it } from 'vitest';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import { isVisible, validateValues } from '../src/components/islands/calculator/validation';
import { buildCalculatorQueryString } from '../src/lib/shareLink';
import { validateDefinitions } from '../src/lib/platform/validateDefinitions';
import type { Field } from '../src/lib/types';
import type { CalculatorDefinitionV2 } from '../src/lib/platform/types';

// CPM has three inverse modes. Each needs two known quantities, not one.
const fields: Field[] = [
  { name: 'mode', label: 'Mode', type: 'select', defaultValue: 'cpm', options: ['cpm', 'cost', 'impressions'].map((value) => ({ value, label: value })) },
  { name: 'cost', label: 'Cost', type: 'number', min: 0, defaultValue: 0, showIf: { field: 'mode', oneOf: ['cpm', 'impressions'] } },
  { name: 'cpm', label: 'CPM', type: 'number', min: 0, defaultValue: 0, showIf: { field: 'mode', oneOf: ['cost', 'impressions'] } },
  { name: 'impressions', label: 'Impressions', type: 'number', min: 0, defaultValue: 0, showIf: { field: 'mode', oneOf: ['cpm', 'cost'] } },
];

describe('one visibility rule for an inverse calculation form and its saved links', () => {
  for (const [mode, visible, hidden] of [
    ['cpm', ['cost', 'impressions'], 'cpm'],
    ['cost', ['cpm', 'impressions'], 'cost'],
    ['impressions', ['cost', 'cpm'], 'impressions'],
  ] as const) {
    it(`${mode}: both known quantities are visible and preserved in the link`, () => {
      const values = { mode, cost: 900, cpm: 30, impressions: 30000 };
      expect(fields.filter((field) => isVisible(field, values)).map((field) => field.name)).toEqual(['mode', ...visible]);
      const query = new URLSearchParams(buildCalculatorQueryString(fields, values, 'en'));
      for (const key of visible) expect(query.has(key)).toBe(true);
      expect(query.has(hidden)).toBe(false);
    });
    it(`${mode}: malformed inactive output cannot block the two active inputs`, () => {
      const values = { mode, cost: 900, cpm: 30, impressions: 30000, [hidden]: 'malformed' };
      expect(validateValues('fixture', fields, values, 'en')).toEqual({});
      const query = new URLSearchParams(buildCalculatorQueryString(fields, values, 'en'));
      expect(query.has(hidden)).toBe(false);
      expect(validateValues('fixture', fields, { ...values, [visible[0]]: 'malformed' }, 'en')[visible[0]]).toBeTruthy();
    });
  }
  it('compares booleans and numbers exactly, preserving legacy equals behaviour', () => {
    const numeric: Field = { name: 'x', label: 'X', type: 'number', showIf: { field: 'mode', oneOf: [1, true] } };
    expect(isFieldVisible(numeric, { mode: 1 })).toBe(true);
    expect(isFieldVisible(numeric, { mode: true })).toBe(true);
    expect(isFieldVisible(numeric, { mode: '1' })).toBe(false);
    const legacy: Field = { ...numeric, showIf: { field: 'mode', equals: 'cpm' } };
    expect(isVisible(legacy, { mode: 'cpm' })).toBe(true);
    expect(isVisible(legacy, { mode: 'cost' })).toBe(false);
  });
  it.each([{ oneOf: [] }, { oneOf: ['cpm', Infinity] }])('rejects a malformed oneOf definition$oneOf', ({ oneOf }) => {
    const definition = { id: 'sample', definitionVersion: 1, lifecycle: 'implemented', compute: () => ({ primary: { label: '', value: '' }, secondary: [] }),
      presentation: { id: 'sample', category: 'business', slug: 'sample', fields: [{ name: 'mode', type: 'select' }, { name: 'value', type: 'number', showIf: { field: 'mode', oneOf } }] } } as unknown as CalculatorDefinitionV2;
    expect(validateDefinitions([definition]).some((item) => item.problem.includes('oneOf'))).toBe(true);
  });
});
