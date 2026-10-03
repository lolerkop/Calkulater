import { describe, expect, it } from 'vitest';
import { definition as modulo } from '../src/calculators/modulo/definition';
import { definition as power } from '../src/calculators/power-root/definition';
import { definition as fraction } from '../src/calculators/fraction-arith/definition';
import { definition as factorial } from '../src/calculators/factorial/definition';
import { validateValues } from '../src/components/islands/calculator/validation';
import { parseLocalizedNumber } from '../src/lib/format';
import { readValuesFromSearch } from '../src/lib/shareLink';
import type { CalculatorDefinitionV2, CalculatorFormValues } from '../src/lib/platform/types';

// Concrete raw-form regressions found after the105 snapshot freeze. These
// require a separate runtime-boundary amendment; initial direct-engine and
// publication passes cannot establish this property. Root owns integration.
describe('raw form values must not become plausible rounded math answers', () => {
  it('rejects a noninteger string that binary parsing rounds to1', () => {
    const raw={a:'1.00000000000000001',b:'2'};
    expect(modulo.compute(raw).primary.value).toBe('—');
    const errors=validateValues(modulo.id,modulo.presentation.fields,raw,'en',{compute:modulo.compute,validate:modulo.validate});
    // The hook sees the original string, before Number normalization hides it.
    expect(errors.a).toBeTruthy();
  });
  it('rejects a positive decimal string that binary parsing turns into0', () => {
    const raw={mode:'power',base:'0.'+'0'.repeat(400)+'1',exponent:'2'};
    expect(power.compute(raw).primary.value).toBe('—');
    const errors=validateValues(power.id,power.presentation.fields,raw,'en',{compute:power.compute,validate:power.validate});
    expect(errors.base).toBeTruthy();
  });
});

const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const nativeErrors = {
  modulo: ['Введите целые числа по модулю до 9007199254740991', 'Enter integers of magnitude at most 9007199254740991', 'Введіть цілі числа за модулем до 9007199254740991', 'Geben Sie ganze Zahlen mit Betrag bis 9007199254740991 ein', 'Introduzca enteros con valor absoluto máximo de 9007199254740991'],
  fraction: ['Числа должны быть целыми', 'The numbers must be whole', 'Числа мають бути цілими', 'Die Zahlen müssen ganz sein', 'Los números deben ser enteros'],
  factorial: ['Число должно быть целым', 'The number must be a whole number', 'Число має бути цілим', 'Die Zahl muss eine ganze Zahl sein', 'El número debe ser entero'],
  power: ['Отрицательное основание требует целого показателя по модулю до 9007199254740991', 'A negative base requires an integer exponent of magnitude at most 9007199254740991', 'Від’ємна основа потребує цілого показника за модулем до 9007199254740991', 'Eine negative Basis verlangt einen ganzzahligen Exponenten mit Betrag bis 9007199254740991', 'Una base negativa requiere un exponente entero con valor absoluto máximo de 9007199254740991'],
  root: ['Отрицательное число требует положительной нечётной целой степени корня до 9007199254740991', 'A negative number requires a positive odd integer root index up to 9007199254740991', 'Від’ємне число потребує додатного непарного цілого індексу кореня до 9007199254740991', 'Eine negative Zahl verlangt einen positiven ungeraden ganzzahligen Wurzelgrad bis 9007199254740991', 'Un número negativo requiere un índice de raíz entero positivo e impar hasta 9007199254740991'],
} as const;
const integerModels = [
  { tool: modulo, fields: ['a', 'b'], key: 'modulo' },
  { tool: fraction, fields: ['a', 'b', 'c', 'd'], key: 'fraction' },
  { tool: factorial, fields: ['n'], key: 'factorial' },
] as const;
const defaults = (tool: CalculatorDefinitionV2): CalculatorFormValues => Object.fromEntries(tool.presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const errors = (tool: CalculatorDefinitionV2, raw: CalculatorFormValues, locale: typeof locales[number]) =>
  validateValues(tool.id, tool.presentation.fields, raw, locale, { compute: tool.compute, validate: tool.validate });

describe('owned integer validators retain original decimal meaning in five locales', () => {
  for (const [index, locale] of locales.entries()) {
    const point = locale === 'en' ? '.' : ',';
    for (const { tool, fields, key } of integerModels) for (const field of fields) {
      it(`${locale}/${tool.id}/${field}: rejects rounded fraction with native error`, () => {
        const raw = { ...defaults(tool), [field]: `1${point}00000000000000001` };
        expect(errors(tool, raw, locale)[field]).toBe(nativeErrors[key][index]);
        const restored = readValuesFromSearch(tool.presentation.fields, defaults(tool), `?${new URLSearchParams({ [field]: String(raw[field]) })}`, locale);
        expect(restored[field]).toBe(raw[field]);
        expect(errors(tool, restored, locale)[field]).toBe(nativeErrors[key][index]);
      });
      it(`${locale}/${tool.id}/${field}: safe bound and exact zero tails`, () => {
        expect(errors(tool, { ...defaults(tool), [field]: 9007199254740992 }, locale)[field]).toBe(nativeErrors[key][index]);
        expect(errors(tool, { ...defaults(tool), [field]: `1${point}00000000000000000` }, locale)).toEqual({});
      });
    }
    for (const mode of ['power', 'root'] as const) {
      it(`${locale}/negative ${mode}: original fraction and safe bound`, () => {
        for (const exponent of [`1${point}00000000000000001`, 9007199254740992])
          expect(errors(power, { mode, base: -8, exponent }, locale).exponent).toBe(nativeErrors[mode][index]);
        expect(errors(power, { mode, base: -8, exponent: `1${point}00000000000000000` }, locale)).toEqual({});
        const raw = { mode, base: '-8', exponent: `1${point}00000000000000001` };
        const restored = readValuesFromSearch(power.presentation.fields, defaults(power), `?${new URLSearchParams(raw)}`, locale);
        expect(restored.exponent).toBe(raw.exponent);
        expect(errors(power, restored, locale).exponent).toBe(nativeErrors[mode][index]);
      });
      it(`${locale}/positive ${mode}: fractional exponent remains supported`, () => {
        expect(errors(power, { mode, base: 4, exponent: `0${point}5` }, locale)).toEqual({});
      });
    }
    it(`${locale}: hooks leave malformed and partial grammar to shared validation`, () => {
      for (const { tool } of integerModels) {
        const raw = Object.fromEntries(tool.presentation.fields.filter(field => field.type === 'number').map(field => [field.name, '-']));
        expect(tool.validate!({ values: raw, fields: tool.presentation.fields, locale, parseNumber: text => parseLocalizedNumber(text, locale) })).toEqual({});
      }
      expect(power.validate!({ values: { mode: 'power', base: -8, exponent: '-' }, fields: power.presentation.fields, locale, parseNumber: text => parseLocalizedNumber(text, locale) })).toEqual({});
    });
    it(`${locale}: query preserves nonzero decimal and exponential underflow as invalid`, () => {
      for (const base of [`0${point}${'0'.repeat(400)}1`, '1e-400']) {
        const restored = readValuesFromSearch(power.presentation.fields, defaults(power), `?${new URLSearchParams({ mode: 'power', base, exponent: '2' })}`, locale);
        expect(restored.base).toBe(base);
        expect(errors(power, restored, locale).base).toBeTruthy();
      }
    });
  }
});

describe('direct negative-base computations inspect the original exponent', () => {
  for (const mode of ['power', 'root'] as const) {
    it.each(['1.00000000000000001', '3,00000000000000001'])(`${mode}: rejects raw rounded integer %s`, exponent => {
      expect(power.compute({ mode, base: -8, exponent }).primary.value).toBe('—');
    });
    it(`${mode}: accepts exact integer zero tails`, () => {
      expect(power.compute({ mode, base: -8, exponent: '1,00000000000000000' }).primary.value).toBe('-8');
    });
  }
  it('retains positive fractional power and fractional root index', () => {
    expect(power.compute({ mode: 'power', base: 4, exponent: '0,5' }).primary.value).toBe('2');
    expect(power.compute({ mode: 'root', base: 4, exponent: '0,5' }).primary.value).toBe('16');
  });
});
