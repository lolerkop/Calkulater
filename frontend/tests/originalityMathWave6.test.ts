import { describe, expect, it } from 'vitest';
import { definition as arithmetic } from '../src/calculators/arithmetic-progression/definition';
import { definition as geometric } from '../src/calculators/geometric-progression/definition';
import { definition as fibonacci } from '../src/calculators/fibonacci/definition';
import { definition as divisors } from '../src/calculators/divisors/definition';
import { definition as prime } from '../src/calculators/prime-factorization/definition';
import { definition as counting } from '../src/calculators/combinatorics/definition';
import { definition as ratio } from '../src/calculators/ratio/definition';
import { definition as proportion } from '../src/calculators/proportion/definition';
import { localization as arithmeticLoc } from '../src/calculators/arithmetic-progression/localization';
import { localization as geometricLoc } from '../src/calculators/geometric-progression/localization';
import { localization as fibonacciLoc } from '../src/calculators/fibonacci/localization';
import { localization as divisorsLoc } from '../src/calculators/divisors/localization';
import { localization as primeLoc } from '../src/calculators/prime-factorization/localization';
import { localization as countingLoc } from '../src/calculators/combinatorics/localization';
import { localization as ratioLoc } from '../src/calculators/ratio/localization';
import { localization as proportionLoc } from '../src/calculators/proportion/localization';
import { isCompleteCalculatorCopy, type CalculatorDefinitionV2 } from '../src/lib/platform/types';
import { getMathWave6MethodSources } from '../src/data/mathWave6MethodSources';
// Deliberately exercise malformed runtime payloads beyond the static form type.
const run = (tool: CalculatorDefinitionV2, input: Record<string, unknown>) => tool.compute(input as Record<string, string | number | boolean>);
const tools = [arithmetic, geometric, fibonacci, divisors, prime, counting, ratio, proportion];
const localizations = [arithmeticLoc, geometricLoc, fibonacciLoc, divisorsLoc, primeLoc, countingLoc, ratioLoc, proportionLoc];
const locales = ['ru', 'en', 'uk', 'de', 'es'] as const;
const defaults = (tool: CalculatorDefinitionV2) => Object.fromEntries(tool.presentation.fields.map(field => [field.name, field.defaultValue]));
const bad = [undefined, null, true, false, '', ' ', 'abc', '12 apples', '1,2,3', NaN, Infinity, -Infinity];
const failure = (result: ReturnType<typeof arithmetic.compute>) => {
  expect(result.primary.value).toBe('—');
  expect(result.secondary?.some(row => row.label === 'Проверьте данные' && row.accent === 'red')).toBe(true);
  expect(JSON.stringify(result)).not.toMatch(/NaN|Infinity/);
};
const secondary = (result: ReturnType<typeof arithmetic.compute>, label: string) => {
  const row = result.secondary?.find(row => row.label === label); expect(row).toBeDefined(); return String(row!.value);
};
const ungroup = (value: string | number) => String(value).replace(/\s/g, '');
const parsed = (value: string | number) => Number(ungroup(value).replace(',', '.').replace('·10^', 'e'));

describe('strict active inputs and original integer lexemes', () => {
  for (const tool of tools.filter(tool => tool !== ratio)) {
    const fields = tool.presentation.fields.filter(field => field.type === 'number' && !(tool === proportion && field.name === 'd'));
    for (const field of fields) it.each(bad)(`${tool.id}/${field.name} malformed %s`, input => failure(run(tool, { ...defaults(tool), [field.name]: input })));
  }
  for (const tool of [arithmetic, geometric, fibonacci, divisors, prime, counting]) {
    const fields = tool === counting ? ['n', 'k'] : ['n'];
    for (const field of fields) it.each(['3.00000000000000001', '3,00000000000000001', '9007199254740991.1', 9007199254740992])(`${tool.id}/${field} unrounded integer domain %s`, input => failure(run(tool, { ...defaults(tool), [field]: input })));
  }
  for (const tool of [arithmetic, geometric, fibonacci, divisors, prime, counting]) it(`${tool.id}: exact zero tails remain valid`, () => {
    const input = { ...defaults(tool), n: '3,00000000000000000', ...(tool === counting ? { k: '2,000' } : {}) };
    expect(run(tool, input).primary.value).not.toBe('—');
  });
  it.each(['bad', '', true, false, 'constructor', '__proto__'])('explicit unknown modes never select a fallback %s', mode => {
    failure(run(counting, { n: 5, k: 2, mode }));
    failure(run(counting, { n: 5, k: 2, repetition: mode }));
    failure(run(proportion, { find: mode, a: 2, b: 3, c: 4, d: 6 }));
  });
  it('omitted modes still use established defaults', () => {
    expect(run(counting, { n: 5, k: 2 }).primary.value).toBe('10');
    expect(run(proportion, { a: 2, b: 3, c: 4 }).primary.value).toBe('6');
  });
});

describe('arithmetic formulas, signed values and a single final rounding', () => {
  it.each([
    [{ a1: 100, d: -7, n: 15 }, '2', '765'],
    [{ a1: 0, d: 0, n: 1 }, '0', '0'],
    [{ a1: -3, d: 0, n: 10 }, '-3', '-30'],
    [{ a1: -5, d: 2, n: 6 }, '5', '0'],
    [{ a1: 1e308, d: 0, n: 1 }, '1,000·10^308', '1,000·10^308'],
    [{ a1: -1e308, d: 1e308, n: 3 }, '1,000·10^308', '0'],
    [{ a1: 1e-300, d: 1e-300, n: 2 }, '2,000·10^-300', '3,000·10^-300'],
    [{ a1: Number.MIN_VALUE, d: 0, n: 1 }, '4,941·10^-324', '4,941·10^-324'],
  ] as const)('fixed independent %j', (input, an, sum) => {
    const r = run(arithmetic, input); expect(r.primary.value).toBe(an); expect(secondary(r, 'Сумма ряда')).toBe(sum);
  });
  it('maximum safe index is handled by a bounded preview, not a huge loop', () => {
    const r = run(arithmetic, { a1: 1, d: 0, n: 9007199254740991 });
    expect(r.primary.value).toBe('1'); expect(parsed(secondary(r, 'Сумма ряда'))).toBe(9.007e15);
    expect(r.table?.rows).toHaveLength(10); expect(r.table?.note).toBe('Показаны первые 10 членов ряда.');
  });
  it.each([{ a1: 1e308, d: 0, n: 2 }, { a1: 1e308, d: 1e308, n: 2 }, { a1: 1, d: 2, n: 0 }])('explicit domain/range error %j', input => failure(run(arithmetic, input)));
});

describe('geometric exact recurrence and page bounds', () => {
  it.each([
    [{ a1: 2, r: 1, n: 5 }, '2', '10'],
    [{ a1: 2, r: -1, n: 4 }, '-2', '0'],
    [{ a1: 2, r: -1, n: 5 }, '2', '2'],
    [{ a1: 0, r: 1e308, n: 50 }, '0', '0'],
    [{ a1: -2, r: .5, n: 3 }, '-0,5', '-3,5'],
    [{ a1: 1e-12, r: .5, n: 2 }, '5,000·10^-13', '1,500·10^-12'],
    [{ a1: Number.MIN_VALUE, r: 1, n: 2 }, '4,941·10^-324', '9,881·10^-324'],
  ] as const)('fixed independent %j', (input, an, sum) => { const r = run(geometric, input); expect(r.primary.value).toBe(an); expect(secondary(r, 'Сумма ряда')).toBe(sum); });
  it('near-one sum does not suffer closed-form cancellation', () => {
    // Exact rational oracle for r=1+2^-52: S50 rounds to 50.00000000000027.
    // Four-place display is 50; all finite terms remain shown correctly.
    const r = run(geometric, { a1: 1, r: 1 + 2 ** -52, n: 50 });
    expect(r.primary.value).toBe('1'); expect(secondary(r, 'Сумма ряда')).toBe('50');
    expect(r.table?.rows).toHaveLength(20); expect(r.table?.note).toBe('Показаны первые 20 членов прогрессии.');
  });
  it('infinite sum is separate from the retained finite-result magnitude cap', () => {
    const r = run(geometric, { a1: 1, r: 1 - 2 ** -52, n: 1 });
    expect(r.primary.value).toBe('1'); expect(parsed(secondary(r, 'Сумма бесконечного ряда'))).toBe(4.504e15);
    expect(secondary(run(geometric, { a1: 2, r: .5, n: 3 }), 'Сумма бесконечного ряда')).toBe('4');
  });
  it.each([{ a1: 1, r: 0, n: 2 }, { a1: 1, r: 2, n: 51 }, { a1: 1e15, r: 1, n: 1 }, { a1: Number.MIN_VALUE, r: .5, n: 2 }, { a1: 1e-200, r: 1e-200, n: 2 }])('explicit domain/range error %j', input => failure(run(geometric, input)));
});

describe('Fibonacci indexing, exact inclusive sums and retained page limit', () => {
  it.each([[1, '0', '0'], [2, '1', '1'], [3, '1', '2'], [4, '2', '4'], [10, '34', '88'], [20, '4181', '10945'], [78, '5527939700884757', '14472334024676220']] as const)('literal independent n=%d', (n, an, sum) => {
    const r = run(fibonacci, { n }); expect(ungroup(r.primary.value)).toBe(an); expect(ungroup(secondary(r, 'Сумма ряда'))).toBe(sum);
    expect(r.secondary?.some(row => row.label === 'Отношение к предыдущему')).toBe(n >= 3);
    expect(r.table?.rows).toHaveLength(Math.min(n, 10));
  });
  it.each([0, -1, 1.5, 79, 1000000000])('retained cap/domain %s', n => failure(run(fibonacci, { n })));
});

describe('positive divisors and prime factorization have bounded exact integers', () => {
  it.each([[1, 1, 1, 0], [2, 2, 3, 1], [6, 4, 12, 6], [28, 6, 56, 28], [35, 4, 48, 13], [36, 9, 91, 55], [360, 24, 1170, 810], [1000000000000, 169, 2499694822171, 1499694822171]])('independent divisors n=%d', (n, count, sum, proper) => {
    const r = run(divisors, { n }); expect(Number(ungroup(secondary(r, 'Количество делителей')))).toBe(count);
    expect(Number(ungroup(secondary(r, 'Сумма делителей')))).toBe(sum); expect(Number(ungroup(secondary(r, 'Сумма собственных делителей')))).toBe(proper);
    if (count > 40) { expect(String(r.primary.value).split(' …')[0].split(', ')).toHaveLength(40); expect(r.note).toContain('первые 40'); }
    else expect(r.note).toBeUndefined();
    if (n === 1) expect(r.secondary?.some(row => row.value === 'простое')).toBe(false);
  });
  it.each([[2, '2 = 2', 1, 2], [36, '36 = 2² · 3²', 2, 9], [360, '360 = 2³ · 3² · 5', 3, 24], [99991, '99991 = 99991', 1, 2], [1000000000000, '1000000000000 = 2¹² · 5¹²', 2, 169]])('independent prime powers n=%d', (n, written, kinds, count) => {
    const r = run(prime, { n }); expect(ungroup(r.primary.value)).toBe(written.replace(/\s/g, ''));
    expect(Number(ungroup(secondary(r, 'Различных простых')))).toBe(kinds); expect(Number(ungroup(secondary(r, 'Всего делителей')))).toBe(count);
  });
  it.each([0, -1, 1000000000001])('divisors outside page %s', n => failure(run(divisors, { n })));
  it.each([0, 1, -1, 1000000000001])('prime outside page %s', n => failure(run(prime, { n })));
});

describe('exact combinatorial models and empty selections', () => {
  for (const mode of ['combinations', 'permutations']) for (const repetition of ['yes', 'no']) it(`${mode}/${repetition}: empty set, empty sample is one`, () => {
    const r = run(counting, { n: 0, k: 0, mode, repetition }); expect(r.primary.value).toBe('1');
    expect(r.secondary?.find(row => /из тех же чисел/.test(row.label))?.value).toBe('1');
  });
  it.each([
    ['combinations', 'no', 5, 2, '10'], ['permutations', 'no', 5, 2, '20'],
    ['combinations', 'yes', 5, 2, '15'], ['permutations', 'yes', 5, 2, '25'],
    ['combinations', 'yes', 2, 2, '3'], ['permutations', 'yes', 2, 2, '4'],
    ['combinations', 'no', 52, 5, '2598960'], ['combinations', 'no', 60, 30, '118264581564861424'],
    ['combinations', 'no', 61, 30, '232714176627630544'],
    ['combinations', 'yes', 0, 5, '0'], ['permutations', 'yes', 0, 5, '0'],
    ['combinations', 'no', 1000, 1, '1000'], ['permutations', 'yes', 1, 1000, '1'],
  ] as const)('independent %s repeat=%s n=%d k=%d', (mode, repetition, n, k, value) => expect(ungroup(run(counting, { mode, repetition, n, k }).primary.value)).toBe(value));
  it('1000^1000 keeps all 3001 integer digits', () => {
    const r = run(counting, { mode: 'permutations', repetition: 'yes', n: 1000, k: 1000 });
    expect(ungroup(r.primary.value)).toBe(`1${'0'.repeat(3000)}`); expect(secondary(r, 'Научная форма')).toBe('≈ 1,0000 · 10^3000');
  });
  it.each([{ n: 0, k: 1 }, { n: 3, k: 4 }, { n: 1001, k: 0 }, { n: 1, k: 1001, repetition: 'yes' }, { n: -1, k: 0 }])('unsupported/domain %j', input => failure(run(counting, input)));
});

describe('ratio weights, exact GCD and optional allocation', () => {
  it.each(['2:3:5', '2 3 5', '2;3;5', '2, 3, 5'])('supported separator %s', parts => {
    const r = run(ratio, { parts, total: 6000 }); expect(r.primary.value).toBe('2:3:5');
    expect(secondary(r, 'Доля первой части')).toBe('20,00%'); expect(secondary(r, 'Разбиение суммы')).toBe('1 200 · 1 800 · 3 000');
  });
  it.each([undefined, '', ' ', 0, '0,000'])('blank or zero only disables allocation %s', total => {
    const r = run(ratio, { parts: '12:18', total }); expect(r.primary.value).toBe('2:3'); expect(secondary(r, 'Сумма частей')).toBe('30'); expect(r.table?.columns).toHaveLength(3);
  });
  it.each([null, true, false, 'abc', NaN, Infinity, -1, '1e-400'])('invalid optional total is not silently ignored %s', total => failure(run(ratio, { parts: '2:3', total })));
  it.each([undefined, true, '', '2', '2:0', '2:-3', '2:abc', '2:Infinity', '9007199254740993:3', '9007199254740992:2', '2:3e-400', Array(1001).fill('1').join(':')])('invalid parts %s', parts => failure(run(ratio, { parts, total: 0 })));
  it('integer sum retains exact digits beyond the general safe bound', () => {
    const r = run(ratio, { parts: '9007199254740991:9007199254740990' });
    expect(ungroup(r.primary.value)).toBe('9007199254740991:9007199254740990'); expect(ungroup(secondary(r, 'Сумма частей'))).toBe('18014398509481981');
  });
  it('decimal ratios are intentionally unreduced and share weights still work', () => {
    const r = run(ratio, { parts: '1,5:2,5', total: 80 }); expect(r.primary.value).toBe('1,5:2,5');
    expect(secondary(r, 'Доля первой части')).toBe('37,50%'); expect(secondary(r, 'Разбиение суммы')).toBe('30 · 50');
    expect(r.secondary?.some(row => row.label === 'Сокращено на')).toBe(false);
  });
  it('allocation divides before an overflowing product can corrupt it', () => {
    const r = run(ratio, { parts: '2:3', total: 1e308 }); expect(secondary(r, 'Разбиение суммы')).toBe('4,000·10^307 · 6,000·10^307');
  });
  it('tiny weights and tiny percentages are never falsely shown as zero', () => {
    const r = run(ratio, { parts: '0.000000000001:0.000000000002' }); expect(r.primary.value).toBe('1,000·10^-12:2,000·10^-12');
    expect(secondary(r, 'Доля первой части')).toBe('33,33%');
    const skew = run(ratio, { parts: '0.000000000001:1' }); expect(parsed(secondary(skew, 'Доля первой части').replace('%', ''))).toBeGreaterThan(0);
  });
  it('bounded 1000-part ratio is fully accounted for', () => {
    const r = run(ratio, { parts: Array(1000).fill('1').join(':') }); expect(r.table?.rows).toHaveLength(1000); expect(secondary(r, 'Сумма частей')).toBe('1 000');
  });
  it('unrepresentable positive allocation is an explicit error', () => failure(run(ratio, { parts: '1:1', total: Number.MIN_VALUE })));
});

describe('proportions require genuine ratios and ignore the computed input', () => {
  it.each([
    ['a', { b: 8, c: 3, d: 12 }, '2'], ['b', { a: 5, c: 10, d: 4 }, '2'],
    ['c', { a: 2, b: 3, d: 9 }, '6'], ['d', { a: 2, b: 3, c: 4 }, '6'],
  ] as const)('all four inversions %s', (find, known, value) => {
    for (const inactive of bad) expect(run(proportion, { find, ...known, [find]: inactive }).primary.value).toBe(value);
  });
  it.each([{ find: 'a', b: 1, c: 0, d: 2 }, { find: 'c', a: 0, b: 2, d: 3 }])('true zero numerator is valid %j', input => {
    const r = run(proportion, input); expect(r.primary.value).toBe('0'); expect(secondary(r, 'Отношение')).toBe('0'); expect(secondary(r, 'Проверка произведений')).toBe('0 = 0');
  });
  it.each([{ find: 'd', a: 2, b: 0, c: 0 }, { find: 'b', a: 0, c: 2, d: 3 }, { find: 'a', b: 0, c: 2, d: 3 }, { find: 'c', a: 2, b: 3, d: 0 }, { find: 'd', a: 0, b: 3, c: 0 }])('zero denominator or nonunique inversion %j', input => failure(run(proportion, input)));
  it('signed proportions are supported', () => {
    const r = run(proportion, { find: 'd', a: -2, b: 3, c: 4 }); expect(r.primary.value).toBe('-6'); expect(secondary(r, 'Проверка произведений')).toBe('12 = 12');
  });
  it('tiny nonzero solved values and products keep scientific notation', () => {
    const r = run(proportion, { find: 'a', b: 1, c: 1e-12, d: 1 }); expect(r.primary.value).toBe('1,000·10^-12'); expect(secondary(r, 'Проверка произведений')).toBe('1,000·10^-12 = 1,000·10^-12');
  });
  it('a formally finite answer does not mask unrepresentable displayed cross products', () => {
    failure(run(proportion, { find: 'd', a: 1e308, b: 1e308, c: 1e308 }));
    failure(run(proportion, { find: 'a', b: Number.MIN_VALUE, c: .5, d: 1 }));
  });
});

describe('unchanged baseline expectations and bounded primary sources', () => {
  for (const tool of tools) for (const ref of tool.referenceCases ?? []) it(`${tool.id}: baseline ${ref.name}`, () => {
    const result = run(tool, ref.inputs); expect(result.primary.value).toBe(ref.expectPrimary);
    for (const expected of ref.expectSecondary ?? []) expect(result.secondary).toEqual(expect.arrayContaining([expect.objectContaining(expected)]));
  });
  for (const tool of tools) it(`${tool.id}: published example unchanged`, () => {
    const example = tool.publishedExample!; expect(example).toBeDefined(); const result = run(tool, example.inputs);
    const text = [result.primary.value, ...(result.secondary ?? []).map(row => row.value)].join(' ');
    for (const expected of example.expected) expect(text.replace(/\s/g, ' ')).toContain(expected.replace(/\s/g, ' '));
  });
  for (const [index, tool] of tools.entries()) for (const locale of locales) it(`${tool.id}/${locale}: complete owned body and native emitted messages`, () => {
    const copy = locale === 'ru' ? tool.presentation : tool.copy?.[locale]; expect(copy).toBeDefined(); expect(isCompleteCalculatorCopy(copy)).toBe(true);
    if (!isCompleteCalculatorCopy(copy)) throw new Error('Incomplete owned copy');
    expect(copy!.faq!.length).toBeGreaterThanOrEqual(4); expect(copy!.seoDescription!.length).toBeGreaterThanOrEqual(80); expect(copy!.seoDescription!.length).toBeLessThanOrEqual(180);
    expect(getMathWave6MethodSources(tool.id, locale).length).toBeGreaterThan(0);
    if (locale !== 'ru') {
      const key = String(run(tool, { ...defaults(tool), ...(tool === ratio ? { parts: 'bad' } : { [tool === proportion ? 'a' : 'n']: true }) }).secondary?.[0].value);
      expect(localizations[index][locale]?.values?.[key] ?? localizations[index][locale]?.results?.[key]).toBeTruthy();
      expect(getMathWave6MethodSources(tool.id, locale).map(s => s.label)).not.toEqual(getMathWave6MethodSources(tool.id, 'ru').map(s => s.label));
    }
  });
  it('unknown IDs do not receive decorative sources and unknown locale uses English', () => {
    expect(getMathWave6MethodSources('constructor', 'ru')).toEqual([]); expect(getMathWave6MethodSources('__proto__', 'de')).toEqual([]);
    expect(getMathWave6MethodSources('unknown', 'en')).toEqual([]); expect(getMathWave6MethodSources('ratio', 'fr')).toEqual(getMathWave6MethodSources('ratio', 'en'));
  });
  it('OEIS indexing and counting source scopes are stated in every native label', () => {
    for (const locale of locales) expect(getMathWave6MethodSources('fibonacci', locale)[0].label).toContain('F(0) = 0');
    expect(getMathWave6MethodSources('combinatorics', 'en')[0].label).toContain('without repetition');
    expect(getMathWave6MethodSources('proportion', 'en')[0].label).toContain('nonzero denominators');
  });
});
