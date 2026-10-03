import { describe, expect, it } from 'vitest';
import { definition as binomial } from '../src/calculators/binomial-probability/definition';
import { definition as interval } from '../src/calculators/confidence-interval/definition';
import { definition as dice } from '../src/calculators/dice-probability/definition';
import { definition as basic } from '../src/calculators/probability-basic/definition';
import { definition as roman } from '../src/calculators/roman-numerals/definition';
import { definition as rounding } from '../src/calculators/rounding/definition';
import { definition as sample } from '../src/calculators/sample-size/definition';
import { statisticsMessages } from '../src/calculators/stats-descriptive/statisticsMessages';
import { INTEGER } from '../src/calculators/stats-descriptive/statisticsNumeric';
import { validateValues } from '../src/components/islands/calculator/validation';
import { parseLocalizedNumber } from '../src/lib/format';
import { readValuesFromSearch, buildCalculatorQueryString } from '../src/lib/shareLink';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import type { CalculatorDefinitionV2, CalculatorFormValues } from '../src/lib/platform/types';
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const models: [CalculatorDefinitionV2, readonly string[], Record<string, string | number>][] = [
  [binomial, ['n', 'k'], {}], [interval, ['n'], {}], [dice, ['count', 'sides', 'target'], {}],
  [rounding, ['digits'], {}], [sample, ['population'], {}], [roman, ['arabic'], { mode: 'toRoman' }],
  [basic, ['favourable', 'total'], { mode: 'single' }], [basic, ['favourable2', 'total2'], { mode: 'complement' }],
];
const defaults = (tool: CalculatorDefinitionV2): CalculatorFormValues => Object.fromEntries(tool.presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const own = (tool: CalculatorDefinitionV2, values: CalculatorFormValues, locale: typeof locales[number]) => tool.validate!({ values, fields: tool.presentation.fields, locale, parseNumber: text => parseLocalizedNumber(text, locale) });
const errors = (tool: CalculatorDefinitionV2, values: CalculatorFormValues, locale: typeof locales[number]) => validateValues(tool.id, tool.presentation.fields, values, locale, { compute: tool.compute, validate: tool.validate });
const enterNumber = ['Введите число.', 'Enter a number.', 'Введіть число.', 'Bitte eine Zahl eingeben.', 'Introduce un número.'];

describe('seven owned integer hooks keep original decimal and query provenance', () => {
  for (const [index, locale] of locales.entries()) for (const [tool, fields, mode] of models) for (const field of fields) {
    const point = locale === 'en' ? '.' : ',';
    const native = locale === 'ru' ? INTEGER : statisticsMessages[locale][INTEGER];
    const state = { ...defaults(tool), ...mode };
    it(`${tool.id}/${locale}/${field}: fractional raw text is rejected before rounding and after sharing`, () => {
      const raw = { ...state, [field]: `3${point}00000000000000001` };
      expect(errors(tool, raw, locale)[field]).toBe(native);
      const query = buildCalculatorQueryString(tool.presentation.fields, raw, locale);
      const restored = readValuesFromSearch(tool.presentation.fields, defaults(tool), query, locale);
      expect(restored[field]).toBe(raw[field]); expect(errors(tool, restored, locale)[field]).toBe(native);
    });
    it(`${tool.id}/${locale}/${field}: exact zero tail is integral, rounded unsafe/fractional bounds are rejected`, () => {
      expect(own(tool, { ...state, [field]: `3${point}00000000000000000` }, locale)).toEqual({});
      expect(own(tool, { ...state, [field]: `9007199254740991${point}1` }, locale)[field]).toBe(native);
      expect(own(tool, { ...state, [field]: 9007199254740992 }, locale)[field]).toBe(native);
    });
    it(`${tool.id}/${locale}/${field}: scientific near-integer query remains malformed instead of becoming3`, () => {
      const raw = '3.00000000000000001e0';
      const restored = readValuesFromSearch(tool.presentation.fields, state, `?${new URLSearchParams({ [field]: raw })}`, locale);
      expect(restored[field]).toBe(raw); expect(errors(tool, restored, locale)[field]).toBe(enterNumber[index]);
      const exact = readValuesFromSearch(tool.presentation.fields, state, `?${new URLSearchParams({ [field]: '3e0' })}`, locale);
      expect(exact[field]).toBe(3); expect(own(tool, exact, locale)).toEqual({});
    });
    it(`${tool.id}/${locale}/${field}: malformed and partial values remain the shared parser concern`, () => {
      expect(own(tool, { ...state, [field]: '-' }, locale)).toEqual({});
      expect(own(tool, { ...state, [field]: 'abc' }, locale)).toEqual({});
      expect(errors(tool, { ...state, [field]: false }, locale)[field]).toBe(enterNumber[index]);
      expect(errors(tool, { ...state, [field]: 'abc' }, locale)[field]).toBe(enterNumber[index]);
    });
  }
});

describe('conditional probability/Roman fields preserve active semantics in validation and sharing', () => {
  for (const locale of locales) for (const mode of ['single', 'complement', 'independentBoth', 'independentEither']) it(`${locale}/${mode}: hidden malformed counts do not reject valid active inputs`, () => {
    const state: CalculatorFormValues = { ...defaults(basic), mode };
    for (const field of basic.presentation.fields.filter(field => field.type === 'number' && !isFieldVisible(field, state))) state[field.name] = 'abc';
    expect(errors(basic, state, locale)).toEqual({});
    const query = new URLSearchParams(buildCalculatorQueryString(basic.presentation.fields, state, locale));
    for (const field of basic.presentation.fields.filter(field => field.type === 'number' && !isFieldVisible(field, state))) expect(query.has(field.name)).toBe(false);
  });
  for (const locale of locales) it(`${locale}: Roman text mode ignores hidden Arabic and shares only active input`, () => {
    const state = { ...defaults(roman), mode: 'toArabic', roman: 'MMXXIV', arabic: 'abc' };
    expect(errors(roman, state, locale)).toEqual({});
    expect(new URLSearchParams(buildCalculatorQueryString(roman.presentation.fields, state, locale)).has('arabic')).toBe(false);
    expect(roman.compute(state).primary.value).toBe('2024');
  });
  for (const [index, locale] of locales.entries()) it(`${locale}: positive probability underflow is preserved as an error, exact zero stays valid`, () => {
    const state = { ...defaults(basic), mode: 'independentBoth', p2: 0.5 };
    for (const raw of [`0${locale === 'en' ? '.' : ','}${'0'.repeat(400)}1`, '1e-400']) {
      const restored = readValuesFromSearch(basic.presentation.fields, state, `?${new URLSearchParams({ mode: state.mode, p1: raw, p2: '.5' })}`, locale);
      expect(restored.p1).toBe(raw); expect(errors(basic, restored, locale).p1).toBe(enterNumber[index]);
    }
    expect(errors(basic, { ...state, p1: 0 }, locale)).toEqual({});
  });
});
