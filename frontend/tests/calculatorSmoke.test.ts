import { describe, expect, it } from 'vitest';
import { calculators } from '../src/data/calculators';
import { runners } from '../src/lib/runners';
import type { CalculatorDef, Field } from '../src/lib/types';

function defaultValueForField(field: Field): string | number | boolean {
  if (field.defaultValue !== undefined) return field.defaultValue;
  if (field.type === 'checkbox') return false;
  if (field.type === 'toggle' || field.type === 'select') return field.options?.[0]?.value ?? '';
  if (field.type === 'number') return field.min ?? 0;
  return '';
}

function defaultInputs(calculator: CalculatorDef): Record<string, string | number | boolean> {
  return Object.fromEntries(
    calculator.fields.map((field) => [field.name, defaultValueForField(field)]),
  );
}

describe('calculator smoke: default form values', () => {
  it('runs every calculator with its configured default field values', () => {
    for (const calculator of calculators) {
      const runner = runners[calculator.id];
      const result = runner(defaultInputs(calculator));

      expect(result.primary.label, `${calculator.id}: primary label`).toBeTruthy();
      expect(result.primary.value, `${calculator.id}: primary value`).toBeTruthy();
      expect(result.secondary.length, `${calculator.id}: secondary rows`).toBeGreaterThan(0);

      for (const [index, row] of result.secondary.entries()) {
        expect(row.label, `${calculator.id}: secondary ${index} label`).toBeTruthy();
        expect(row.value, `${calculator.id}: secondary ${index} value`).toBeTruthy();
      }

      if (result.table) {
        expect(result.table.columns.length, `${calculator.id}: table columns`).toBeGreaterThan(0);
        expect(result.table.rows.length, `${calculator.id}: table rows`).toBeGreaterThan(0);
      }
    }
  });
});
