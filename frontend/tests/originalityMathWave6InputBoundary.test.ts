import { describe, expect, it } from 'vitest';
import { definition as arithmetic } from '../src/calculators/arithmetic-progression/definition';
import { definition as geometric } from '../src/calculators/geometric-progression/definition';
import { definition as fibonacci } from '../src/calculators/fibonacci/definition';
import { definition as divisors } from '../src/calculators/divisors/definition';
import { definition as prime } from '../src/calculators/prime-factorization/definition';
import { definition as counting } from '../src/calculators/combinatorics/definition';
import { definition as proportion } from '../src/calculators/proportion/definition';
import { validateValues } from '../src/components/islands/calculator/validation';
import { parseLocalizedNumber } from '../src/lib/format';
import { readValuesFromSearch, buildCalculatorQueryString } from '../src/lib/shareLink';
import { isFieldVisible } from '../src/lib/fieldVisibility';
import type { CalculatorDefinitionV2, CalculatorFormValues } from '../src/lib/platform/types';
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const defaults = (tool: CalculatorDefinitionV2): CalculatorFormValues => Object.fromEntries(tool.presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const errors = (tool: CalculatorDefinitionV2, raw: CalculatorFormValues, locale: typeof locales[number]) =>
  validateValues(tool.id, tool.presentation.fields, raw, locale, { compute: tool.compute, validate: tool.validate });
const integerModels = [arithmetic, geometric, fibonacci, divisors, prime, counting];
const messages: Record<string, readonly string[]> = {
  'arithmetic-progression': ['Номер члена должен быть целым от 1 до 9007199254740991', 'The term number must be an integer from 1 to 9007199254740991', 'Номер члена має бути цілим від 1 до 9007199254740991', 'Die Gliednummer muss ganzzahlig zwischen 1 und 9007199254740991 liegen', 'El número de término debe ser un entero entre 1 y 9007199254740991'],
  'geometric-progression': ['Число членов должно быть целым от 1 до 50', 'The number of terms must be a whole number from 1 to 50', 'Кількість членів має бути цілим числом від 1 до 50', 'Die Zahl der Glieder muss eine ganze Zahl von 1 bis 50 sein', 'El número de términos debe ser un entero de 1 a 50'],
  fibonacci: ['Здесь доступны целые номера от 1 до 78', 'Integer positions from 1 to 78 are available here', 'Тут доступні цілі номери від 1 до 78', 'Hier sind ganzzahlige Positionen von 1 bis 78 verfügbar', 'Aquí se admiten posiciones enteras entre 1 y 78'],
  divisors: ['Число должно быть целым', 'The number must be a whole number', 'Число має бути цілим', 'Die Zahl muss eine ganze Zahl sein', 'El número debe ser entero'],
  'prime-factorization': ['Число должно быть целым', 'The number must be a whole number', 'Число має бути цілим', 'Die Zahl muss eine ganze Zahl sein', 'El número debe ser entero'],
  combinatorics: ['Оба числа должны быть целыми и неотрицательными', 'Both numbers must be whole and non-negative', 'Обидва числа мають бути цілими й невід’ємними', 'Beide Zahlen müssen ganz und nicht negativ sein', 'Ambos números deben ser enteros y no negativos'],
};
const enterNumber = ['Введите число.', 'Enter a number.', 'Введіть число.', 'Bitte eine Zahl eingeben.', 'Introduce un número.'];

describe('six owned integer validators preserve original input before rounding', () => {
  for (const [index, locale] of locales.entries()) for (const tool of integerModels) for (const field of tool === counting ? ['n', 'k'] : ['n']) {
    const point = locale === 'en' ? '.' : ',';
    it(`${tool.id}/${locale}/${field}: fractional lexeme remains invalid after share and restore`, () => {
      const raw = { ...defaults(tool), [field]: `3${point}00000000000000001` };
      expect(errors(tool, raw, locale)[field]).toBe(messages[tool.id][index]);
      const query = buildCalculatorQueryString(tool.presentation.fields, raw, locale);
      const restored = readValuesFromSearch(tool.presentation.fields, defaults(tool), query, locale);
      expect(restored[field]).toBe(raw[field]); expect(errors(tool, restored, locale)[field]).toBe(messages[tool.id][index]);
    });
    it(`${tool.id}/${locale}/${field}: safe bound and exact integer zero tails`, () => {
      expect(errors(tool, { ...defaults(tool), [field]: 9007199254740992 }, locale)[field]).toBe(messages[tool.id][index]);
      expect(errors(tool, { ...defaults(tool), [field]: `3${point}00000000000000000` }, locale)).toEqual({});
      expect(errors(tool, { ...defaults(tool), [field]: `9007199254740991${point}1` }, locale)[field]).toBe(messages[tool.id][index]);
    });
    it(`${tool.id}/${locale}/${field}: scientific near-integer query cannot become3`, () => {
      // Root's shared URL grammar preserves the original scientific fraction;
      // its locale parser rejects this scientific text rather than rounding it.
      const raw = '3.00000000000000001e0';
      const restored = readValuesFromSearch(tool.presentation.fields, defaults(tool), `?${new URLSearchParams({ [field]: raw })}`, locale);
      expect(restored[field]).toBe(raw); expect(errors(tool, restored, locale)[field]).toBe(enterNumber[index]);
      const exact = readValuesFromSearch(tool.presentation.fields, defaults(tool), `?${new URLSearchParams({ [field]: '3e0' })}`, locale);
      expect(exact[field]).toBe(3); expect(errors(tool, exact, locale)).toEqual({});
    });
  }
  for (const locale of locales) for (const tool of integerModels) it(`${tool.id}/${locale}: incomplete grammar remains shared validation's concern`, () => {
    const raw = { ...defaults(tool), n: '-', ...(tool === counting ? { k: '-' } : {}) };
    expect(tool.validate!({ values: raw, fields: tool.presentation.fields, locale, parseNumber: text => parseLocalizedNumber(text, locale) })).toEqual({});
  });
});

describe('proportion hides exactly the chosen unknown in UI, validation and sharing', () => {
  for (const locale of locales) for (const find of ['a', 'b', 'c', 'd']) it(`${locale}/find${find}: three known fields, ignored hidden invalid value`, () => {
    const raw = { find, a: 2, b: 3, c: 4, d: 6, [find]: 'abc' };
    const visible = proportion.presentation.fields.filter(field => field.type === 'number' && isFieldVisible(field, raw));
    expect(visible.map(field => field.name)).toEqual(['a', 'b', 'c', 'd'].filter(key => key !== find));
    expect(errors(proportion, raw, locale)).toEqual({});
    const query = new URLSearchParams(buildCalculatorQueryString(proportion.presentation.fields, raw, locale));
    expect(query.has(find)).toBe(false);
    for (const known of ['a', 'b', 'c', 'd'].filter(key => key !== find)) {
      const invalid = { ...raw, [known]: 'abc' }; expect(errors(proportion, invalid, locale)[known]).toBeTruthy();
    }
  });
  for (const [index, locale] of locales.entries()) it(`${locale}: positive underflow never becomes a valid zero numerator`, () => {
    for (const c of [`0${locale === 'en' ? '.' : ','}${'0'.repeat(400)}1`, '1e-400']) {
      const restored = readValuesFromSearch(proportion.presentation.fields, defaults(proportion), `?${new URLSearchParams({ find: 'a', b: '1', c, d: '2' })}`, locale);
      expect(restored.c).toBe(c); expect(errors(proportion, restored, locale).c).toBe(enterNumber[index]);
    }
    expect(errors(proportion, { find: 'a', b: 1, c: 0, d: 2, a: 'abc' }, locale)).toEqual({});
  });
});
