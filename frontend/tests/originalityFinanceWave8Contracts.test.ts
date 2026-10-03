import { describe, expect, it } from 'vitest';
import { definition as inflation } from '../src/calculators/inflation/definition';
import { definition as real } from '../src/calculators/real-return/definition';
import { definition as rule } from '../src/calculators/rule-of-72/definition';
import { definition as tvm } from '../src/calculators/time-value-money/definition';
import { definition as dti } from '../src/calculators/dti/definition';
import { definition as reserve } from '../src/calculators/emergency-fund/definition';
import { definition as savings } from '../src/calculators/savings-rate/definition';
import { definition as budget } from '../src/calculators/budget-50-30-20/definition';
const tools = [inflation, real, rule, tvm, dti, reserve, savings, budget];
const clean = (value: string) => value.replace(/[\u00a0\u202f]/g, ' ');
const row = (result: ReturnType<typeof inflation.compute>, label: string) => clean(result.secondary!.find(item => item.label === label)!.value);
const defaults = (index: number) => Object.fromEntries(tools[index].presentation.fields.map(field => [field.name, field.defaultValue ?? '']));
const malformed: unknown[] = [true, false, null, {}, [], NaN, Infinity, -Infinity, 'broken', '1xyz', '1e309', '1e-9999'];

describe('FinanceWave8 retains36 independently supplied reference cases', () => {
  for (const tool of tools) for (const sample of tool.referenceCases!) it(`${tool.id}: ${sample.name}`, () => {
    const result = tool.compute(sample.inputs);
    expect(clean(result.primary.value)).toBe(clean(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(row(result, expected.label)).toBe(clean(expected.value));
  });
  for (const [index, tool] of tools.entries()) for (const field of tool.presentation.fields.filter(field => field.type === 'number')) for (const [i, invalid] of malformed.entries()) it(`${tool.id}/${field.name}: malformed active input${i}`, () => {
    const result = tool.compute({ ...defaults(index), [field.name]: invalid } as never);
    expect(result.primary.value).toBe('—'); expect(result.secondary![0].accent).toBe('red');
  });
});

describe('FinanceWave8 independent Decimal/algebraic money and domain expectations', () => {
  it('the representable dyadic deflation boundary preserves the100+p price denominator', () => {
    const rate = -100 + 2 ** -40;
    // Exactly represented input: price factor =2^-40/100, purchasing power
    // of one monetary unit =100×2^40. No calculator creates this oracle.
    const inverseFactor = 100 * 2 ** 40;
    const deflated = inflation.compute({ amount: 1, ratePct: rate, years: 1 });
    const adjusted = real.compute({ nominal: 0, inflation: rate, amount: 1, years: 1 });
    const value = (text: string) => Number(clean(text).replace(/\s|₽|%/g, '').replace(',', '.'));
    expect(value(deflated.primary.value) / inverseFactor).toBeCloseTo(1, 12);
    expect(value(row(adjusted, 'Покупательная способность через 1')) / inverseFactor).toBeCloseTo(1, 12);
    expect(value(adjusted.primary.value) / ((inverseFactor - 1) * 100)).toBeCloseTo(1, 12);
    const lostCapital = real.compute({ nominal: rate, inflation: 0, amount: inverseFactor, years: 1 });
    expect(value(row(lostCapital, 'Номинальная сумма'))).toBeCloseTo(1, 10);
  });
  it('small nonzero purchasing power is not displayed as a zero amount', () => {
    expect(inflation.compute({ amount: .001, ratePct: 0, years: 1 }).primary.value).toBe('0,001 ₽');
  });
  it('small nonzero real annual return retains its value instead of0.00percent', () => {
    expect(real.compute({ nominal: .000001, inflation: 0 }).primary.value).toBe('1,000·10^-6%');
  });
  it('a high positive rule72 rate preserves its nonzero72-microyear estimate', () => {
    expect(rule.compute({ rate: 1000000 }).primary.value).toBe('7,200·10^-5 лет');
  });
  it('TVM small positive annual rate is shown as nonzero effective growth', () => {
    const result = tvm.compute({ amount: 10000, rate: .000001, years: 1, compounding: 'month' });
    expect(row(result, 'Эффективная годовая ставка')).toBe('1,000·10^-6%');
  });
  it('small positive DTI and debt payment do not become apparent zero debt', () => {
    const result = dti.compute({ income: 1, payments: .00004 });
    expect(result.primary.value).toBe('0,004 %'); expect(row(result, 'Платежи по долгам')).toBe('4,000·10^-5 ₽');
  });
  it('small reserve target remains a positive cash amount', () => {
    expect(reserve.compute({ monthlyExpenses: .001, months: 1, saved: 0 }).primary.value).toBe('0,001 ₽');
  });
  it('a small saved cash remainder remains positive after display formatting', () => {
    expect(row(savings.compute({ income: 1, expenses: .999 }), 'Сбережения за период')).toBe('0,001 ₽');
  });
  it('very small budget shares remain three positive amounts', () => {
    const result = budget.compute({ income: .000001 });
    expect(result.primary.value).toBe('5,000·10^-7 ₽');
    expect(row(result, 'Желания')).toBe('3,000·10^-7 ₽'); expect(row(result, 'Сбережения')).toBe('2,000·10^-7 ₽');
  });
  it('inflation tiny annual rate over a long finite duration preserves the nonzero exponent', () => {
    const result = inflation.compute({ amount: 10000, ratePct: 1e-18, years: 1e18 });
    expect(clean(result.primary.value)).toBe('9 900,50 ₽');
    expect(row(result, 'Столько же в будущих деньгах')).toBe('10 100,50 ₽');
    expect(row(result, 'Потеряно покупательной способности')).toBe('99,50 ₽');
    expect(row(result, 'Доля потери')).toBe('1,00%');
  });
  it('deflation expands purchasing power and makes signed lost power negative', () => {
    const result = inflation.compute({ amount: 100, ratePct: -20, years: 2 });
    expect(result.primary.value).toBe('156,25 ₽');
    expect(row(result, 'Столько же в будущих деньгах')).toBe('64,00 ₽');
    expect(row(result, 'Потеряно покупательной способности')).toBe('-56,25 ₽');
    expect(row(result, 'Доля потери')).toBe('-56,25%');
  });
  it('inflation fractional years are used directly, not as a rounded calendar year', () => {
    const result = inflation.compute({ amount: 100, ratePct: 21, years: .5 });
    expect(result.primary.value).toBe('90,91 ₽'); expect(row(result, 'Столько же в будущих деньгах')).toBe('110,00 ₽');
  });
  it('real-return1.5-year cash growth is independently107090.603863 and118529.658736', () => {
    const result = real.compute({ nominal: 12, inflation: 7, amount: 100000, years: 1.5 });
    expect(result.primary.value).toBe('4,67%');
    expect(row(result, 'Покупательная способность через 1,5')).toBe('107 090,60 ₽');
    expect(row(result, 'Номинальная сумма')).toBe('118 529,66 ₽');
  });
  it('complete annual capital loss is valid, while below−100percent is invalid', () => {
    const result = real.compute({ nominal: -100, inflation: 7, amount: 100, years: .5 });
    expect(result.primary.value).toBe('-100,00%');
    expect(row(result, 'Покупательная способность через 0,5')).toBe('0,00 ₽');
    expect(row(result, 'Номинальная сумма')).toBe('0,00 ₽');
    expect(real.compute({ nominal: -100.01, inflation: 7, amount: 100, years: 1 }).primary.value).toBe('—');
  });
  it('negative returns and deflation use the same annual-factor basis', () => {
    const result = real.compute({ nominal: -5, inflation: -2, amount: 100, years: 1 });
    expect(result.primary.value).toBe('-3,06%');
    expect(row(result, 'Покупательная способность через 1')).toBe('96,94 ₽');
    expect(row(result, 'Номинальная сумма')).toBe('95,00 ₽');
  });
  it('optional capital controls only cash rows and visible duration remains validated', () => {
    for (const amount of [undefined, '', 0]) expect(real.compute({ nominal: 12, inflation: 7, amount, years: 1 } as never).secondary).toHaveLength(4);
    expect(real.compute({ nominal: 12, inflation: 7, amount: 0, years: false } as never).primary.value).toBe('—');
    expect(real.compute({ nominal: 12, inflation: 7, amount: -1, years: 1 }).primary.value).toBe('—');
  });
  it('rule72 tiny positive rate has a finite logarithmic time rather than a zero denominator', () => {
    const result = rule.compute({ rate: 1e-15 });
    expect(result.primary.value).not.toBe('—');
    // ln(2)/ln(1+1e-17) =69314718055994531.288... years.
    const value = Number(row(result, 'Точный срок удвоения').replace(/\s/g, '').replace(',', '.').replace('лет', ''));
    expect(value / 69314718055994531).toBeCloseTo(1, 12);
    expect(row(result, 'Ставка')).toBe('1,000·10^-15% годовых');
  });
  it('rule72 at6percent differs by0.104338954years; a zero rate cannot double', () => {
    const result = rule.compute({ rate: 6, amount: 100 });
    expect(result.primary.value).toBe('12,00 лет'); expect(row(result, 'Точный срок удвоения')).toBe('11,90 лет');
    expect(row(result, 'Расхождение правила')).toBe('0,10 лет');
    expect(row(result, 'Сумма после удвоения')).toBe('200,00 ₽');
    expect(rule.compute({ rate: 0 }).primary.value).toBe('—');
    expect(rule.compute({ rate: 8, amount: -1 }).primary.value).toBe('—');
  });
  it('TVM fraction of a quarterly period remains0.5, with square-root1.03 growth', () => {
    const result = tvm.compute({ mode: 'fv', amount: 10000, rate: 12, years: .125, compounding: 'quarter' });
    expect(clean(result.primary.value)).toBe('10 148,89 ₽');
    expect(row(result, 'Периодов начисления')).toBe('0,5');
    expect(row(result, 'Множитель роста')).toBe('1,0149');
    expect(row(result, 'Эффективная годовая ставка')).toBe('12,55%');
  });
  it('TVM PV reverses the same one-year annual factor', () => {
    const result = tvm.compute({ mode: 'pv', amount: 121, rate: 21, years: 1, compounding: 'year' });
    expect(result.primary.value).toBe('100,00 ₽'); expect(row(result, 'Множитель роста')).toBe('1,21');
  });
  it('TVM unknown direction/frequency never silently select future/annual growth', () => {
    for (const mode of ['unknown', '', true, 'toString', null]) expect(tvm.compute({ amount: 100, rate: 12, years: 1, mode } as never).primary.value).toBe('—');
    for (const compounding of ['unknown', '', true, 'constructor', null]) expect(tvm.compute({ amount: 100, rate: 12, years: 1, compounding } as never).primary.value).toBe('—');
    expect(tvm.compute({ amount: 100, rate: 12, years: 1 }).primary.value).toBe('112,00 ₽');
  });
  it('positive tiny rate has a positive effective annual rate instead of an erased zero', () => {
    const result = tvm.compute({ amount: 10000, rate: 1e-15, years: 1, compounding: 'month' });
    expect(clean(result.primary.value)).toBe('10 000,00 ₽'); expect(row(result, 'Эффективная годовая ставка')).toBe('1,000·10^-15%');
  });
  it('DTI does not infer comfort or credit approval and never accepts negative payments', () => {
    const result = dti.compute({ income: 150000, payments: 45000 });
    expect(result.primary.value).toBe('30,00 %'); expect(row(result, 'Оценка')).toBe('До 30 % (условная зона)');
    expect(result.secondary![0].accent).toBe('neutral');
    expect(dti.compute({ income: 150000, payments: -45000 }).primary.value).toBe('—');
    expect(dti.compute({ income: 150000, payments: 180000 }).primary.value).toBe('120,00 %');
  });
  it('DTI fractional monetary input keeps a meaningful fractional gross remainder', () => {
    const result = dti.compute({ income: 1, payments: .25 });
    expect(result.primary.value).toBe('25,00 %'); expect(row(result, 'Остаётся после платежей')).toBe('0,75 ₽');
  });
  it('reserve permits continuous1.5-month target and caps both target-progress measures', () => {
    const result = reserve.compute({ monthlyExpenses: 100, months: 1.5, saved: 200 });
    expect(result.primary.value).toBe('150,00 ₽'); expect(row(result, 'Не хватает')).toBe('0,00 ₽');
    expect(row(result, 'Уже покрыто месяцев')).toBe('1,5'); expect(row(result, 'Готовность')).toBe('100,00%');
    expect(reserve.compute({ monthlyExpenses: 100, months: .5, saved: 200 }).primary.value).toBe('—');
  });
  it('reserve zero holdings stay zero, while negative holdings and expenses fail', () => {
    const result = reserve.compute({ monthlyExpenses: 100, months: 2, saved: 0 });
    expect(row(result, 'Готовность')).toBe('0,00%'); expect(row(result, 'Уже покрыто месяцев')).toBe('0');
    expect(reserve.compute({ monthlyExpenses: 100, months: 2, saved: -1 }).primary.value).toBe('—');
  });
  it('negative saving is a valid deficit; negative expenses are invalid', () => {
    const result = savings.compute({ income: 100, expenses: 150 });
    expect(result.primary.value).toBe('-50,00 %'); expect(row(result, 'Сбережения за период')).toBe('-50 ₽');
    expect(result.secondary!.at(-1)!.value).toBe('Расходы превышают доход');
    expect(savings.compute({ income: 100, expenses: -25 }).primary.value).toBe('—');
    expect(savings.compute({ income: 100, expenses: 0 }).primary.value).toBe('100,00 %');
  });
  it('budget one-unit income preserves0.50/0.30/0.20 rather than fabricating1/0/0', () => {
    const result = budget.compute({ income: 1 });
    expect(result.primary.value).toBe('0,50 ₽'); expect(row(result, 'Желания')).toBe('0,30 ₽'); expect(row(result, 'Сбережения')).toBe('0,20 ₽');
    expect(result.secondary![1].accent).toBeUndefined();
  });
  it('individually rounded budget parts103 become52+31+21, rather than pretending exact allocation', () => {
    const result = budget.compute({ income: 103 });
    expect(result.primary.value).toBe('52 ₽'); expect(row(result, 'Желания')).toBe('31 ₽'); expect(row(result, 'Сбережения')).toBe('21 ₽');
  });
  for (const [index, input] of [
    [0, { amount: 1e308, ratePct: 100, years: 1000 }],
    [1, { nominal: 100, inflation: 0, amount: 1e308, years: 1000 }],
    [2, { rate: Number.MIN_VALUE, amount: 0 }],
    [2, { rate: 8, amount: 1e308 }],
    [3, { mode: 'fv', amount: 1e308, rate: 100, years: 1000, compounding: 'year' }],
    [4, { income: Number.MIN_VALUE, payments: 1e308 }],
    [5, { monthlyExpenses: 1e308, months: 10, saved: 0 }],
    [6, { income: Number.MIN_VALUE, expenses: 1e308 }],
    [7, { income: Number.MIN_VALUE }],
  ] as const) it(`${tools[index].id}: unsupported numeric boundary is an explicit error`, () => {
    const result = tools[index].compute(input);
    expect(result.primary.value).toBe('—'); expect(result.secondary![0].value).toBe('Результат вне допустимого диапазона');
    expect(JSON.stringify(result)).not.toMatch(/\b(?:NaN|Infinity|undefined)\b/);
  });
});
