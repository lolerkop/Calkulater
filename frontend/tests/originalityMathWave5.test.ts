import { describe, expect, it } from 'vitest';
import { definition as power } from '../src/calculators/power-root/definition';
import { definition as quadratic } from '../src/calculators/quadratic-equation/definition';
import { definition as linear } from '../src/calculators/linear-equation/definition';
import { definition as system } from '../src/calculators/linear-system/definition';
import { definition as modulo } from '../src/calculators/modulo/definition';
import { definition as gcd } from '../src/calculators/gcd-lcm/definition';
import { definition as fraction } from '../src/calculators/fraction-arith/definition';
import { definition as factorial } from '../src/calculators/factorial/definition';
import { localization as powerLoc } from '../src/calculators/power-root/localization';
import { localization as quadraticLoc } from '../src/calculators/quadratic-equation/localization';
import { localization as linearLoc } from '../src/calculators/linear-equation/localization';
import { localization as systemLoc } from '../src/calculators/linear-system/localization';
import { localization as moduloLoc } from '../src/calculators/modulo/localization';
import { localization as gcdLoc } from '../src/calculators/gcd-lcm/localization';
import { localization as fractionLoc } from '../src/calculators/fraction-arith/localization';
import { localization as factorialLoc } from '../src/calculators/factorial/localization';
import { asNumber, differenceOfProducts, divideDyadics } from '../src/calculators/quadratic-equation/arithmetic';
import { differenceOfProducts as systemDifference, asNumber as systemNumber, divideDyadics as systemDivide } from '../src/calculators/linear-system/arithmetic';
import { getMathWave5MethodSources } from '../src/data/mathWave5MethodSources';
import { isCompleteCalculatorCopy, type CalculatorDefinitionV2 } from '../src/lib/platform/types';

const tools = [power, quadratic, linear, system, modulo, gcd, fraction, factorial];
const localizations = [powerLoc, quadraticLoc, linearLoc, systemLoc, moduloLoc, gcdLoc, fractionLoc, factorialLoc];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const bad = [undefined, null, true, false, '', ' ', 'abc', '12 apples', '1,2,3', NaN, Infinity, -Infinity];
const failure = (result: ReturnType<typeof power.compute>) => {
  expect(result.primary.value).toBe('—');
  expect(result.secondary?.some(row => row.label === 'Проверьте данные' && row.accent === 'red')).toBe(true);
  expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity/);
};
const value = (result: ReturnType<typeof power.compute>, label: string) => {
  const row = result.secondary?.find(row => row.label === label); expect(row).toBeDefined(); return String(row!.value);
};
const parsed = (text: string) => Number(text.replace(/\s/g, '').replace(',', '.').replace('·10^', 'e'));

describe('strict active input contracts', () => {
  for (const tool of tools.filter(tool => tool !== gcd)) {
    const defaults = Object.fromEntries(tool.presentation.fields.map(field => [field.name, field.defaultValue]));
    for (const field of tool.presentation.fields.filter(field => field.type === 'number'))
      it.each(bad)(`${tool.id}/${field.name}: invalid %s`, input => failure(tool.compute({ ...defaults, [field.name]: input })));
  }
  for (const mode of ['power', 'root']) it(`power mode ${mode} validates both inputs`, () => {
    failure(power.compute({ mode, base: false, exponent: 3 })); failure(power.compute({ mode, base: 8, exponent: true }));
  });
  it.each(['bad', '', true, false, 'constructor', '__proto__'])('rejects explicit invalid mode %s', mode => {
    failure(power.compute({ mode, base: 2, exponent: 3 })); failure(fraction.compute({ op: mode, a: 1, b: 2, c: 1, d: 3 }));
  });
  it('retains omitted defaults and decimal grammar, without parsing expressions', () => {
    expect(power.compute({ base: '2', exponent: '10' }).primary.value).toBe('1 024');
    expect(fraction.compute({ a: 1, b: 2, c: 1, d: 3 }).primary.value).toBe('5/6');
    expect(linear.compute({ a: '2,5', b: '-3', c: '4,5' }).primary.value).toBe('x = 3');
    failure(power.compute({ base: 8, exponent: '1/3' })); failure(power.compute({ base: '1e3', exponent: 2 }));
  });
  it.each(['1.00000000000000001', '1,00000000000000001', '9 007 199 254 740 990,99999'])('never rounds fractional strings into integers %s', input => {
    failure(modulo.compute({ a: input, b: 2 })); failure(fraction.compute({ op: 'add', a: input, b: 2, c: 1, d: 3 }));
    failure(factorial.compute({ n: input })); failure(gcd.compute({ numbers: `${input.replaceAll(' ', '')} 2` }));
  });
  it('accepts exact decimal zero tails and unambiguous zero', () => {
    expect(modulo.compute({ a: '17,0', b: '5,00' }).primary.value).toBe('2');
    expect(factorial.compute({ n: '0,000' }).primary.value).toBe('1');
    expect(fraction.compute({ op: 'add', a: 0, b: 2, c: 0, d: -3 }).primary.value).toBe('0');
  });
});

describe('powers and reciprocal powers', () => {
  it('preserves signed, zero, negative and fractional valid cases independently', () => {
    expect(power.compute({ mode: 'power', base: 2, exponent: -3 }).primary.value).toBe('0,125');
    expect(power.compute({ mode: 'power', base: -2, exponent: -3 }).primary.value).toBe('-0,125');
    expect(power.compute({ mode: 'root', base: -125, exponent: 3 }).primary.value).toBe('-5');
    expect(power.compute({ mode: 'power', base: 9, exponent: .5 }).primary.value).toBe('3');
    expect(power.compute({ mode: 'root', base: 9, exponent: .5 }).primary.value).toBe('81');
    expect(power.compute({ mode: 'root', base: 0, exponent: 3 }).primary.value).toBe('0');
    expect(power.compute({ mode: 'power', base: 0, exponent: 2 }).primary.value).toBe('0');
    expect(power.compute({ mode: 'root', base: 1, exponent: Number.MIN_VALUE }).primary.value).toBe('1');
  });
  it.each([
    { mode: 'power', base: 0, exponent: 0 }, { mode: 'power', base: 0, exponent: -1 },
    { mode: 'root', base: -8, exponent: 2 }, { mode: 'root', base: -8, exponent: 1.5 },
    { mode: 'root', base: 8, exponent: 0 }, { mode: 'power', base: -8, exponent: 1.5 },
    { mode: 'power', base: -1, exponent: 9007199254740992 }, { mode: 'root', base: -1, exponent: 9007199254740992 },
    { mode: 'power', base: 1e-200, exponent: 2 }, { mode: 'power', base: 1e200, exponent: 2 },
    { mode: 'root', base: .5, exponent: Number.MIN_VALUE },
  ])('rejects domain/range case %j', input => failure(power.compute(input)));
  it('displays nonzero small and large quantities without an artificial minimum', () => {
    expect(power.compute({ base: 1e-200, exponent: 1 }).primary.value).toBe('1,000·10^-200');
    expect(power.compute({ base: 1e200, exponent: 1 }).primary.value).toBe('1,000·10^200');
  });
});

describe('exact binary products and rounded algebraic solutions', () => {
  for (const api of [{ name: 'quadratic', diff: differenceOfProducts, number: asNumber, divide: divideDyadics },
    { name: 'system', diff: systemDifference, number: systemNumber, divide: systemDivide }]) {
    it(`${api.name}: cancellation before overflowing or underflowing product conversion`, () => {
      expect(api.number(api.diff(1e308, 1e308, 1e308, 1e308))).toBe(0);
      expect(api.number(api.diff(1e-300, 1e-300, 1e-300, 1e-300))).toBe(0);
      const tiny = api.diff(Number.MIN_VALUE, .5, 0, 0), den = api.diff(Number.MIN_VALUE, 1, 0, 0);
      expect(tiny.coefficient).not.toBe(0n); expect(api.number(tiny)).toBe(0);
      expect(api.divide(tiny, den)).toBe(.5);
      expect(api.number(den)).toBe(Number.MIN_VALUE);
    });
    it(`${api.name}: exactly distinguishes a product difference hidden by ordinary rounding`, () => {
      const d = api.diff(1 + 2 ** -52, 1 - 2 ** -52, 1, 1);
      expect(api.number(d)).toBe(-(2 ** -104));
    });
  }
  it('avoids small quadratic-root cancellation and preserves plus/minus order', () => {
    const positiveB = quadratic.compute({ a: 1, b: 1e8, c: 1 });
    expect(positiveB.primary.value).toBe('x₁ = -1,00000e-8, x₂ = -100000000');
    const negativeB = quadratic.compute({ a: 1, b: -1e8, c: 1 });
    expect(negativeB.primary.value).toBe('x₁ = 100000000, x₂ = 1,00000e-8');
  });
  it('correctly classifies nearby positive, negative and exact-zero discriminants', () => {
    expect(value(quadratic.compute({ a: 1, b: 2, c: 1 - 2 ** -52 }), 'Число корней')).toBe('2');
    expect(value(quadratic.compute({ a: 1, b: 2, c: 1 + 2 ** -52 }), 'Число корней')).toBe('0');
    expect(value(quadratic.compute({ a: 1, b: 2, c: 1 }), 'Число корней')).toBe('1');
    expect(quadratic.compute({ a: -1, b: 0, c: 4 }).primary.value).toBe('x₁ = -2, x₂ = 2');
    expect(quadratic.compute({ a: 1, b: 0, c: 0 }).primary.value).toBe('x = 0');
  });
  it.each([{ a: 0, b: 2, c: 1 }, { a: 1e308, b: 1e308, c: 1e308 },
    { a: 1e-300, b: 1e-300, c: 0 }, { a: Number.MIN_VALUE, b: 1, c: 1 }])('rejects unrepresentable complete quadratic output %j', input => failure(quadratic.compute(input)));
  it('retains finite linear roots, degeneracy and honest rounded substitution', () => {
    expect(linear.compute({ a: -4, b: 7, c: -9 }).primary.value).toBe('x = 4');
    expect(linear.compute({ a: 0, b: 5, c: 5 }).primary.value).toBe('любое число');
    expect(linear.compute({ a: 0, b: 5, c: 9 }).primary.value).toBe('решений нет');
    expect(linear.compute({ a: 1, b: 5, c: 5 }).primary.value).toBe('x = 0');
    expect(linear.compute({ a: 1, b: 0, c: 1e-100 }).primary.value).toBe('x = 1,00000e-100');
    expect(linear.compute({ a: 1, b: 0, c: 0.000012345678 }).primary.value).toBe('x = 0,0000123457');
    expect(linear.compute({ a: 1e308, b: 0, c: 1e308 }).primary.value).toBe('x = 1');
    failure(linear.compute({ a: 1e308, b: 0, c: 1e-300 }));
    failure(linear.compute({ a: 1e308, b: -1e308, c: 1e308 }));
  });
  it('uses finite ratios despite an unrepresentable unshown Cramer numerator', () => {
    const r = system.compute({ a1: 1e308, b1: 0, c1: 1e308, a2: 0, b2: 1, c2: 2 });
    expect(r.primary.value).toBe('x = 1'); expect(value(r, 'y')).toBe('2'); expect(parsed(value(r, 'Определитель'))).toBe(1e308);
    const tiny = system.compute({ a1: Number.MIN_VALUE, b1: 0, c1: Number.MIN_VALUE, a2: 0, b2: 1, c2: .5 });
    expect(tiny.primary.value).toBe('x = 1'); expect(value(tiny, 'y')).toBe('0,5');
  });
  it('handles zero coefficients and zero solutions without pretending to classify singular systems', () => {
    expect(system.compute({ a1: 1, b1: 0, c1: 0, a2: 0, b2: 1, c2: 0 }).primary.value).toBe('x = 0');
    for (const c1 of [0, 1]) failure(system.compute({ a1: 0, b1: 0, c1, a2: 1, b2: 1, c2: 2 }));
    failure(system.compute({ a1: 1e308, b1: 1e308, c1: 1, a2: 1e308, b2: 1e308, c2: 2 }));
    failure(system.compute({ a1: 1e-300, b1: 0, c1: 1, a2: 0, b2: 1e-300, c2: 2 }));
    failure(system.compute({ a1: 1e308, b1: 0, c1: Number.MIN_VALUE, a2: 0, b2: 1, c2: 0 }));
  });
});

describe('integer arithmetic and factorial presentation', () => {
  it.each([[17,5,3,2],[-17,5,-3,-2],[17,-5,-3,2],[-17,-5,3,-2],
    [0,-5,0,0],[9007199254740991,3,3002399751580330,1]])('exact quotient/remainder %s %s', (a,b,q,r) => {
    const out = modulo.compute({ a, b }); expect(parsed(out.primary.value)).toBe(r); expect(parsed(value(out, 'Частное'))).toBe(q);
    expect(BigInt(a)).toBe(BigInt(b) * BigInt(q) + BigInt(r));
  });
  it('rejects zero divisors and unsafe integers even if a float is integral', () => {
    failure(modulo.compute({ a: 1, b: 0 })); failure(modulo.compute({ a: 9007199254740992, b: 3 }));
    failure(modulo.compute({ a: 3, b: -9007199254740992 }));
  });
  it('collective GCD1 is not pairwise coprimality', () => {
    const r = gcd.compute({ numbers: '6 10 15' }); expect(r.primary.value).toBe('1'); expect(value(r, 'НОК')).toBe('30');
    expect(value(r, 'Взаимно простые')).toBe('да'); expect(6 * 10 * 15).toBe(900);
    expect(value(gcd.compute({ numbers: '8; 15' }), 'НОК')).toBe('120');
    expect(value(gcd.compute({ numbers: '12, 18\n24' }), 'НОК')).toBe('72');
  });
  it.each([true,false,'','1','0 2','-1 2','7,5 12','abc 2','9007199254740992 2', '9007199254740991 2',
    '1 '.repeat(1001), ' '.repeat(20001)])('bounds malformed/unsafe/oversized GCD input %s', numbers => failure(gcd.compute({ numbers })));
  it('accepts the exact maximum list/count and safe-integer boundary', () => {
    expect(gcd.compute({ numbers: '1 '.repeat(1000) }).primary.value).toBe('1');
    expect(value(gcd.compute({ numbers: '9007199254740991 9007199254740991' }), 'НОК')).toBe('9 007 199 254 740 991');
  });
  it('exact fractions keep meaningful zero and signed denominators', () => {
    expect(fraction.compute({ op: 'add', a: 1, b: -2, c: 1, d: 3 }).primary.value).toBe('-1/6');
    expect(fraction.compute({ op: 'sub', a: 1, b: 3, c: 1, d: 3 }).primary.value).toBe('0');
    expect(fraction.compute({ op: 'div', a: 0, b: 2, c: 1, d: 3 }).primary.value).toBe('0');
    failure(fraction.compute({ op: 'div', a: 1, b: 2, c: 0, d: 3 }));
    failure(fraction.compute({ op: 'add', a: 1000001, b: 2, c: 1, d: 3 }));
  });
  it('displays a tiny exact fraction decimal without a false zero or clamp', () => {
    const r = fraction.compute({ op: 'mul', a: 1, b: 1000000, c: 1, d: 1000000 });
    expect(r.primary.value).toBe('1/1000000000000'); expect(value(r, 'Десятичное значение')).toBe('1,000000e-12');
    expect(parsed(value(r, 'Десятичное значение'))).toBe(1e-12);
  });
  it.each([[0,'1','≈ 1 · 10^0','0! = 1 по определению'],[1,'1','≈ 1 · 10^0','1! = 1'],
    [2,'2','≈ 2 · 10^0','2! = 1 · 2'],[3,'6','≈ 6 · 10^0','3! = 1 · 2 · … · 3'],
    [5,'120','≈ 1,20 · 10^2','5! = 1 · 2 · … · 5']])('factorial %s exact and readable', (n,answer,scientific,written) => {
    const r = factorial.compute({ n }); expect(r.primary.value).toBe(answer); expect(value(r, 'Научная форма')).toBe(scientific); expect(value(r, 'Запись')).toBe(written);
  });
  it('keeps factorial170 exact with 307 digits and bounds171', () => {
    const r = factorial.compute({ n: 170 }); expect(r.primary.value.length).toBe(307); expect(value(r, 'Разрядов в ответе')).toBe('307');
    expect(r.primary.value.startsWith('7257415615')).toBe(true); failure(factorial.compute({ n: 171 })); failure(factorial.compute({ n: -1 }));
  });
});

describe('preserved published contracts', () => {
  for (const tool of tools) {
    for (const ref of tool.referenceCases ?? []) it(`${tool.id}/${ref.name}`, () => {
      const result = tool.compute(ref.inputs);
      if (ref.expectPrimary !== undefined) expect(result.primary.value).toBe(ref.expectPrimary);
      for (const row of ref.expectSecondary ?? []) expect(result.secondary?.find(item => item.label === row.label)?.value).toBe(row.value);
    });
    it(`${tool.id}: published example`, () => {
      const example = tool.publishedExample!; const r = JSON.stringify(tool.compute(example.inputs)).replaceAll(' ', ' ');
      expect(example.expected.some(text => r.includes(text))).toBe(true);
    });
  }
});

describe('40 complete authored copies, bounded primary sources and native errors', () => {
  for (const [index,tool] of tools.entries()) for (const locale of locales) {
    it(`${tool.id}/${locale}: complete substantive copy`, () => {
      const copy = locale === 'ru' ? tool.presentation : tool.copy?.[locale];
      expect(isCompleteCalculatorCopy(copy)).toBe(true);
      if (!isCompleteCalculatorCopy(copy)) throw new Error('incomplete owned copy');
      expect(copy.faq.length).toBeGreaterThanOrEqual(4); expect(copy.disclaimer).toBeTruthy();
      expect(copy.howItWorks).toBeTruthy(); expect(copy.example).toBeTruthy(); expect(new Set(copy.faq.map(row=>row.q)).size).toBe(copy.faq.length);
      if (locale !== 'ru' && locale !== 'uk') expect(JSON.stringify(copy)).not.toMatch(/[А-Яа-яЁё]/u);
      // Ukrainian shares Cyrillic letters with Russian; check only other foreign-language copies above.
    });
    it(`${tool.id}/${locale}: sources identify an actual method, no certification`, () => {
      const sources = getMathWave5MethodSources(tool.id, locale);
      expect(sources.length).toBe(tool === gcd ? 2 : 1);
      for (const source of sources) { expect(source.href).toMatch(/^https:\/\/(openstax\.org|tc39\.es)\//); expect(source.label.length).toBeGreaterThan(20); expect(source.label).not.toMatch(/certif|verified|Google|гарант|завір/i); }
    });
  }
  it('unknown IDs do not inherit decorative sources', () => {
    expect(getMathWave5MethodSources('constructor','en')).toEqual([]); expect(getMathWave5MethodSources('linear','ru')).toEqual([]);
  });
  it('new and existing error paths have native owned values and labels', () => {
    const scenarios = [
      [power,{ mode:'bad',base:2,exponent:3 }],[power,{ base:false,exponent:3 }],[power,{ base:0,exponent:0 }],
      [power,{ base:-8,exponent:.5 }],[power,{ mode:'root',base:-8,exponent:2 }],[power,{ base:1e308,exponent:2 }],
      [quadratic,{ a:false,b:2,c:1 }],[quadratic,{ a:1e308,b:1e308,c:1e308 }],
      [linear,{ a:false,b:2,c:1 }],[linear,{ a:1e308,b:0,c:1e-300 }],
      [system,{ a1:false,b1:0,c1:1,a2:0,b2:1,c2:2 }],[system,{ a1:0,b1:0,c1:0,a2:1,b2:1,c2:1 }],
      [system,{ a1:1e-300,b1:0,c1:1,a2:0,b2:1e-300,c2:2 }],[modulo,{ a:true,b:2 }],
      [gcd,{ numbers:false }],[gcd,{ numbers:'1 '.repeat(1001) }],[gcd,{ numbers:'1.5 2' }],
      [fraction,{ op:'bad',a:1,b:2,c:1,d:3 }],[factorial,{ n:false }],
    ] as const;
    for (const [tool,input] of scenarios) {
      const result = tool.compute(input); failure(result); const index = tools.indexOf(tool);
      for (const locale of ['en','uk','de','es'] as const) {
        const loc = localizations[index][locale]!; const error = result.secondary![0];
        expect(loc.results?.[error.label]).toBeTruthy(); expect(loc.values?.[String(error.value)]).toBeTruthy();
      }
    }
  });
});


// Expected values below were calculated independently using Python Fraction →
// IEEE-754 float, including exact halfway cases. They are literal oracles;
// production helpers never generate their own expected values.
const fractionOracles = [
  {
    "name": "zero",
    "numerator": {
      "coefficient": "0",
      "exponent": 0
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 0.0,
    "expectedFloatHex": "0x0.0p+0"
  },
  {
    "name": "half-minimum-tie",
    "numerator": {
      "coefficient": "1",
      "exponent": -1075
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 0.0,
    "expectedFloatHex": "0x0.0p+0"
  },
  {
    "name": "above-half-minimum",
    "numerator": {
      "coefficient": "9007199254740993",
      "exponent": -1128
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 5e-324,
    "expectedFloatHex": "0x0.0000000000001p-1022"
  },
  {
    "name": "below-half-minimum",
    "numerator": {
      "coefficient": "18014398509481983",
      "exponent": -1129
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 0.0,
    "expectedFloatHex": "0x0.0p+0"
  },
  {
    "name": "negative-above-half",
    "numerator": {
      "coefficient": "-9007199254740993",
      "exponent": -1128
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": -5e-324,
    "expectedFloatHex": "-0x0.0000000000001p-1022"
  },
  {
    "name": "2.5-minimum-even",
    "numerator": {
      "coefficient": "5",
      "exponent": -1075
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 1e-323,
    "expectedFloatHex": "0x0.0000000000002p-1022"
  },
  {
    "name": "3.5-minimum-even",
    "numerator": {
      "coefficient": "7",
      "exponent": -1075
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 2e-323,
    "expectedFloatHex": "0x0.0000000000004p-1022"
  },
  {
    "name": "normal-boundary-tie",
    "numerator": {
      "coefficient": "9007199254740991",
      "exponent": -1075
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 2.2250738585072014e-308,
    "expectedFloatHex": "0x1.0000000000000p-1022"
  },
  {
    "name": "below-normal-boundary",
    "numerator": {
      "coefficient": "18014398509481981",
      "exponent": -1076
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 2.225073858507201e-308,
    "expectedFloatHex": "0x0.fffffffffffffp-1022"
  },
  {
    "name": "above-normal-boundary",
    "numerator": {
      "coefficient": "18014398509481983",
      "exponent": -1076
    },
    "denominator": {
      "coefficient": "1",
      "exponent": 0
    },
    "expected": 2.2250738585072014e-308,
    "expectedFloatHex": "0x1.0000000000000p-1022"
  },
  {
    "name": "normal-one-third",
    "numerator": {
      "coefficient": "1",
      "exponent": 0
    },
    "denominator": {
      "coefficient": "3",
      "exponent": 0
    },
    "expected": 0.3333333333333333,
    "expectedFloatHex": "0x1.5555555555555p-2"
  },
  {
    "name": "normal-one-tenth",
    "numerator": {
      "coefficient": "1",
      "exponent": 0
    },
    "denominator": {
      "coefficient": "10",
      "exponent": 0
    },
    "expected": 0.1,
    "expectedFloatHex": "0x1.999999999999ap-4"
  },
  {
    "name": "normal-halfway",
    "numerator": {
      "coefficient": "9007199254740993",
      "exponent": 0
    },
    "denominator": {
      "coefficient": "9007199254740992",
      "exponent": 0
    },
    "expected": 1.0,
    "expectedFloatHex": "0x1.0000000000000p+0"
  },
  {
    "name": "normal-just-below-next",
    "numerator": {
      "coefficient": "9007199254740994",
      "exponent": 0
    },
    "denominator": {
      "coefficient": "9007199254740993",
      "exponent": 0
    },
    "expected": 1.0,
    "expectedFloatHex": "0x1.0000000000000p+0"
  },
  {
    "name": "normal-just-above-next",
    "numerator": {
      "coefficient": "18014398509481987",
      "exponent": 0
    },
    "denominator": {
      "coefficient": "18014398509481984",
      "exponent": 0
    },
    "expected": 1.0000000000000002,
    "expectedFloatHex": "0x1.0000000000001p+0"
  }
] as const;
describe('single final-grid rounding: independent exact Fraction oracles', () => {
  for (const api of [{ name:'quadratic',number:asNumber,divide:divideDyadics },
    { name:'system',number:systemNumber,divide:systemDivide }]) {
    for (const fixture of fractionOracles) {
      const n={coefficient:BigInt(fixture.numerator.coefficient),exponent:fixture.numerator.exponent};
      const d={coefficient:BigInt(fixture.denominator.coefficient),exponent:fixture.denominator.exponent};
      it(`${api.name}/ratio/${fixture.name}`,()=>expect(api.divide(n,d)).toBe(fixture.expected));
      if (d.coefficient===1n && d.exponent===0)
        it(`${api.name}/conversion/${fixture.name}`,()=>expect(api.number(n)).toBe(fixture.expected));
    }
  }
  it('literal zero-solution system keeps representable subnormal determinant',()=>{
    const r=system.compute({a1:5e-324,b1:-(2**-54),c1:0,a2:5e-324,b2:.5,c2:0});
    // Exact Δ = 2^-1074(1/2 + 2^-54), strictly above half the minimum
    // positive float. Direct Fraction rounding gives 5e-324; x=y=0 exactly.
    expect(r.primary.value).toBe('x = 0');expect(value(r,'y')).toBe('0');
    expect(parsed(value(r,'Определитель'))).toBe(5e-324);
  });
  it('literal ratio system keeps rounded subnormal x and exact y',()=>{
    const r=system.compute({a1:2,b1:-(2**-54),c1:5e-324,a2:0,b2:.5,c2:5e-324});
    // Δ=1; exact x=2^-1074(1/2+2^-54) rounds to5e-324; y=2^-1073.
    expect(parsed(String(r.primary.value).replace('x = ',''))).toBe(5e-324);
    expect(parsed(value(r,'y'))).toBe(1e-323);expect(value(r,'Определитель')).toBe('1');
  });
});
