import { describe, expect, it } from 'vitest';
import { definition as annuity } from '../src/calculators/annuity/definition';
import { definition as apr } from '../src/calculators/apr-apy/definition';
import { definition as cagr } from '../src/calculators/cagr/definition';
import { definition as savings } from '../src/calculators/savings-goal/definition';
import { definition as lease } from '../src/calculators/lease-payment/definition';
import { definition as early } from '../src/calculators/early-repayment/definition';
import { definition as refi } from '../src/calculators/refinancing/definition';
import { definition as down } from '../src/calculators/down-payment/definition';
const tools = [annuity, apr, cagr, savings, lease, early, refi, down];
const normalize = (text: string) => text.replace(/[\u00a0\u202f]/g, ' ');
const row = (result: ReturnType<typeof annuity.compute>, label: string) => normalize(result.secondary!.find(item => item.label === label)!.value);
const defaults = (tool: typeof annuity) => Object.fromEntries(tool.presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const malformed = [true, false, null, {}, [], NaN, Infinity, -Infinity, 'not-a-number'];

describe('FinanceWave6 retains independently supplied existing contracts', () => {
  for (const tool of tools) for (const sample of tool.referenceCases!) it(`${tool.id}: preserved ${sample.name}`, () => {
    const result = tool.compute(sample.inputs);
    expect(normalize(result.primary.value)).toBe(normalize(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(row(result, expected.label)).toBe(normalize(expected.value));
  });
  for (const tool of tools) for (const field of tool.presentation.fields.filter(field => field.type === 'number' && (!field.showIf || defaults(tool)[field.showIf.field] === field.showIf.equals))) for (const [i, value] of malformed.entries()) it(`${tool.id}/${field.name}: malformed active input${i}`, () => {
    const result = tool.compute({ ...defaults(tool), [field.name]: value } as never);
    expect(result.primary.value).toBe('—'); expect(result.secondary![0].accent).toBe('red');
  });
});

describe('FinanceWave6 independent Decimal/analytic fixed expectations', () => {
  it('annuity cents schedule preserves principal and last-payment correction', () => {
    const result = annuity.compute({ amount: 1000, rate: 0, months: 3 });
    expect(result.primary.value).toBe('333,33 ₽'); expect(row(result, 'Всего выплат')).toBe('1 000,00 ₽');
    expect(row(result, 'Последний платёж')).toBe('333,34 ₽'); expect(result.table!.rows.at(-1)!.map(normalize)).toEqual(['3','333,34 ₽','0,00 ₽','333,34 ₽','0,00 ₽']);
  });
  it('annuity German example independent240-row recurrence', () => {
    const result = annuity.compute({ amount: 200000, rate: 4, months: 240 });
    expect(normalize(result.primary.value)).toBe('1 211,96 ₽'); expect(row(result, 'Последний платёж')).toBe('1 212,34 ₽');
    expect(row(result, 'Всего выплат')).toBe('290 870,78 ₽'); expect(result.table!.rows).toHaveLength(240);
  });
  it('annuity tiny positive rate avoids zero denominator; extreme precision is explicit', () => {
    expect(normalize(annuity.compute({ amount: 12000, rate: 1e-15, months: 12 }).primary.value)).toBe('1 000,00 ₽');
    expect(annuity.compute({ amount: 1000000, rate: 100, months: 480 }).primary.value).toBe('—');
    expect(annuity.compute({ amount: 1e308, rate: 1e308, months: 480 }).primary.value).toBe('—');
  });
  it('APR/APY tiny positive forward/inverse rate remains positive, zero stays zero', () => {
    expect(apr.compute({ mode: 'toApy', rate: 1e-15, periods: 12 }).primary.value).toBe('1,000·10^-15%');
    expect(apr.compute({ mode: 'toApr', rate: 1e-15, periods: 12 }).primary.value).toBe('1,000·10^-15%');
    expect(apr.compute({ mode: 'toApy', rate: 0, periods: 12 }).primary.value).toBe('0,00%');
    expect(apr.compute({ mode: 'toApr', rate: 0, periods: 12 }).primary.value).toBe('0,00%');
  });
  it('CAGR tiny annualized endpoint change uses1e-25percent, not an erased zero', () => {
    const result = cagr.compute({ begin: 1e15, end: 1e15 + 1, years: 1e12 });
    expect(result.primary.value).toBe('1,000·10^-25 %'); expect(row(result, 'Общий рост за срок')).toBe('1,000·10^-13 %');
  });
  it('CAGR fractional duration and negative decline remain supported', () => {
    expect(cagr.compute({ begin: 100, end: 121, years: 2 }).primary.value).toBe('10,00 %');
    expect(cagr.compute({ begin: 100, end: 110, years: 0.5 }).primary.value).toBe('21,00 %');
    expect(cagr.compute({ begin: 200000, end: 100000, years: 4 }).primary.value).toBe('-15,91 %');
  });
  it('savings zero-interest reachable10000-month goal has finite exact result', () => {
    const result = savings.compute({ mode: 'term', goal: 10000, initial: 0, rate: 0, monthly: 1 });
    expect(normalize(result.primary.value)).toBe('10 000 мес'); expect(row(result, 'Итоговая сумма')).toBe('10 000,00 ₽');
    expect(row(result, 'Всего взносов')).toBe('10 000,00 ₽'); expect(row(result, 'Начислено процентов')).toBe('0,00 ₽');
  });
  it('savings integer contribution timing reaches10000 via3334 deposits of3', () => {
    const result = savings.compute({ mode: 'term', goal: 10000, initial: 0, rate: 0, monthly: 3 });
    expect(normalize(result.primary.value)).toBe('3 334 мес'); expect(row(result, 'Итоговая сумма')).toBe('10 002,00 ₽');
  });
  it('savings end-of-month deposits have independently stepped122.11 after2months', () => {
    const result = savings.compute({ mode: 'term', goal: 121, initial: 100, rate: 12, monthly: 10 });
    expect(result.primary.value).toBe('2 мес'); expect(row(result, 'Итоговая сумма')).toBe('122,11 ₽');
    expect(row(result, 'Начислено процентов')).toBe('2,11 ₽');
  });
  it('savings German example preserves independently derived360.413051 monthly', () => {
    const result = savings.compute({ mode: 'payment', goal: 30000, initial: 5000, rate: 4, years: 5 });
    expect(result.primary.value).toBe('360,41 ₽'); expect(row(result, 'Всего взносов')).toBe('21 624,78 ₽');
  });
  it('savings tiny positive rate retains stable payment and tiny positive accrued amount', () => {
    const result = savings.compute({ mode: 'payment', goal: 12000, initial: 0, rate: 1e-15, years: 1 });
    expect(normalize(result.primary.value)).toBe('1 000,00 ₽'); expect(row(result, 'Начислено процентов')).toBe('5,500·10^-14 ₽');
  });
  it('lease corrected default example includes36months and excludes800000buyout', () => {
    const result = lease.compute({ price: 2000000, down: 400000, residualPct: 40, months: 36, rate: 12 });
    expect(normalize(result.primary.value)).toBe('34 222,22 ₽'); expect(row(result, 'Всего выплат с авансом')).toBe('1 632 000 ₽');
    expect(row(result, 'Остаточная стоимость')).toBe('800 000 ₽');
  });
  it('lease equal financed/residual boundary allows zero depreciation and10rent', () => {
    const result = lease.compute({ price: 1000, down: 0, residualPct: 100, months: 12, rate: 12 });
    expect(result.primary.value).toBe('10 ₽'); expect(row(result, 'Амортизационная часть')).toBe('0 ₽');
    expect(row(result, 'Всего выплат с авансом')).toBe('120 ₽'); expect(row(result, 'Остаточная стоимость')).toBe('1 000 ₽');
  });
  it('early repayment has no truncated6000-month false600saving', () => {
    const result = early.compute({ amount: 1200, rate: 0, years: 1000, extra: 0 });
    expect(result.primary.value).toBe('0,00 ₽'); expect(row(result, 'Платежей вместо графика')).toBe('12 000');
    expect(row(result, 'Всего выплат')).toBe('1 200,00 ₽');
  });
  it('early repayment first/last partial payment at zero rate has6actual payments', () => {
    const result = early.compute({ amount: 1200, rate: 0, years: 1, extra: 100 });
    expect(result.primary.value).toBe('0,00 ₽'); expect(row(result, 'Платежей вместо графика')).toBe('6'); expect(row(result, 'Всего выплат')).toBe('1 200,00 ₽');
  });
  it('early repayment tiny positive rate saving independently equals5.4166667e-15', () => {
    const result = early.compute({ amount: 12000, rate: 1e-15, years: 1, extra: 100 });
    expect(result.primary.value).toBe('5,417·10^-15 ₽'); expect(row(result, 'Платежей вместо графика')).toBe('11');
  });
  it('refinance German example corrects1479.36to1479.38 and retains35500.80saving', () => {
    const result = refi.compute({ balance: 200000, oldRate: 6, oldMonths: 180, newRate: 4, newMonths: 180, fee: 2000 });
    expect(normalize(result.primary.value)).toBe('35 500,80 ₽'); expect(row(result, 'Платёж после')).toBe('1 479,38 ₽');
  });
  it('refinance tiny rates compare independent interest amounts without subtracting12000totals', () => {
    const result = refi.compute({ balance: 12000, oldRate: 1e-15, oldMonths: 12, newRate: 0, newMonths: 12, fee: 0 });
    expect(result.primary.value).toBe('6,500·10^-14 ₽'); expect(row(result, 'Разница в платеже')).toBe('5,417·10^-15 ₽');
  });
  it('down payment finite50percent of1e308 avoids overflowing price×share', () => {
    const result = down.compute({ mode: 'percent', price: 1e308, percent: 50 });
    expect(result.primary.value).toBe('5,000·10^307 ₽'); expect(row(result, 'Сумма кредита')).toBe('5,000·10^307 ₽');
  });
  for (const tool of [apr, savings, down]) it(`${tool.id}: unknown mode does not fall back to another formula`, () => {
    expect(tool.compute({ ...defaults(tool), mode: 'unknown' }).primary.value).toBe('—');
  });
  it('inactive savings/down-payment fields never invalidate selected contract', () => {
    expect(savings.compute({ mode: 'term', goal: 121, initial: 100, rate: 12, monthly: 10, years: true }).primary.value).toBe('2 мес');
    expect(down.compute({ mode: 'percent', price: 1000, percent: 20, downPayment: true }).primary.value).toBe('200,00 ₽');
    expect(down.compute({ mode: 'amount', price: 1000, downPayment: 200, percent: true }).primary.value).toBe('200,00 ₽');
  });
  for (const sample of [{tool:annuity,key:'months'},{tool:apr,key:'periods'},{tool:lease,key:'months'},{tool:refi,key:'oldMonths'},{tool:refi,key:'newMonths'}]) for (const value of [1.5,'1.00000000000000001',Number.MAX_SAFE_INTEGER+1]) it(`${sample.tool.id}/${sample.key}: exact whole period count ${value}`, () => {
    expect(sample.tool.compute({ ...defaults(sample.tool), [sample.key]: value }).primary.value).toBe('—');
  });
});


describe('FinanceWave6 final independently confirmed numerical boundaries', () => {
  it('first month-end deposit has exactly no contribution interest', () => {
    const result = savings.compute({ mode: 'term', goal: 100, initial: 0, rate: 12, monthly: 100 });
    expect(result.primary.value).toBe('1 мес');
    expect(row(result, 'Итоговая сумма')).toBe('100,00 ₽');
    expect(row(result, 'Начислено процентов')).toBe('0,00 ₽');
  });
  // Decimal first-order interest: 12000×(12+1)/2400×10^-320 =6.5×10^-319.
  // Number's nonzero subnormal monthly rate distorted this by18.5%.
  it('refinance explicitly rejects an imprecise subnormal rate conversion', () => {
    const result = refi.compute({ balance: 12000, oldRate: 1e-320, oldMonths: 12, newRate: 0, newMonths: 12, fee: 0 });
    expect(result.primary.value).toBe('—'); expect(result.secondary![0].value).toBe('Результат вне допустимого диапазона');
  });
  for (const tool of [annuity, apr, savings, lease, early]) it(`${tool.id}: imprecise subnormal periodic rate is explicit`, () => {
    const result = tool.compute({ ...defaults(tool), rate: 1e-320 });
    expect(result.primary.value).toBe('—'); expect(result.secondary![0].value).toBe('Результат вне допустимого диапазона');
  });
});
