import { describe, expect, it } from 'vitest';
import { distinctUsageTip, distinctSourceMethod } from '../src/lib/onPageContent';
import { defaultHelpForField } from '../src/components/islands/calculator/fields';
import { getCalculatorById } from '../src/lib/i18n';

describe('single on-page authored content', () => {
  it('omits only a whitespace-normalized copy of the step list', () => {
    expect(distinctUsageTip(['Enter a value.', 'Choose units.'], ' Enter a value.\nChoose units. ')).toBe('');
    const advice = 'Check the manufacturer coverage for your surface.';
    expect(distinctUsageTip(['Enter an area.'], advice)).toBe(advice);
  });
  it('keeps a source-specific explanation while referencing an identical main method', () => {
    expect(distinctSourceMethod('S = a × h.', ' S = a × h.\n')).toBe('');
    const boundary = 'The source formula uses inches, not centimetres.';
    expect(distinctSourceMethod('S = a × h.', boundary)).toBe(boundary);
  });
});
describe('field help matches the control and its existing domain', () => {
  it('does not give numeric-entry instructions to choices, but keeps authored choice help', () => {
    expect(defaultHelpForField({ name: 'termUnit', label: 'Срок', type: 'toggle', options: [] }, 'ru')).toBe('');
    expect(defaultHelpForField({ name: 'rateMode', label: 'Ставка', type: 'select', options: [], help: 'Choose a rate model.' }, 'en')).toBe('Choose a rate model.');
  });
  it('documents fractional credit years on the numeric field in all public languages', () => {
    for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) {
      const calculator = getCalculatorById('credit-calculator', locale)!;
      expect(calculator.fields.find(f => f.name === 'term')!.help).toMatch(/1[,.]5/);
      expect(defaultHelpForField(calculator.fields.find(f => f.name === 'termUnit')!, locale)).toBe('');
    }
  });
  it('keeps the safe integer paint limit in code, outside the ordinary help', () => {
    for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) {
      const field = getCalculatorById('paint-calculator', locale)!.fields.find(f => f.name === 'coats')!;
      expect(field.max).toBe(Number.MAX_SAFE_INTEGER);
      expect(field.help).not.toContain(String(Number.MAX_SAFE_INTEGER));
      expect(field.help!.trim()).not.toBe('');
    }
  });
});
