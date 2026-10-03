import { describe, expect, it } from 'vitest';
import { definition as simple } from '../src/calculators/simple-interest/definition';
import { definition as margin } from '../src/calculators/contribution-margin/definition';
import { definition as payback } from '../src/calculators/payback-period/definition';
import { definition as week } from '../src/calculators/week-number/definition';
import { discountedPaybackYears } from '../src/calculators/payback-period/compute';
import { parseCalendarDate } from '../src/calculators/week-number/compute';
import { validateDate } from '../src/calculators/week-number/validateDate';
import { localization as simpleLocale } from '../src/calculators/simple-interest/localization';
import { localization as marginLocale } from '../src/calculators/contribution-margin/localization';
import { localization as paybackLocale } from '../src/calculators/payback-period/localization';
import { localization as weekLocale } from '../src/calculators/week-number/localization';
import { localizeResult } from '../src/components/islands/calculator/resultLocalization';
import type { CalcResult, CalcFunction } from '../src/lib/types';
const tools = [simple, margin, payback, week];
const normalize = (value: string) => value.replace(/[\u00a0\u202f]/g, ' ');
const row = (result: CalcResult, label: string) => result.secondary.find(item => item.label === label)?.value;
const error = (result: CalcResult) => { expect(result.primary.value).toBe('—'); expect(result.secondary[0].accent).toBe('red'); };
const inputs = (value: Record<string, unknown>) => value as Parameters<CalcFunction>[0];
const invalid: unknown[] = [true, false, '', ' ', Infinity, -Infinity, NaN, 'Infinity', 'NaN', '12bad', null, {}, { toString: () => '1' }];

describe('four finance/calendar contracts: unchanged references and independent arithmetic', () => {
  for (const tool of tools) for (const sample of tool.referenceCases ?? []) it(`${tool.id}: existing ${sample.name}`, () => {
    const result = tool.compute(sample.inputs);
    expect(normalize(result.primary.value)).toBe(normalize(sample.expectPrimary));
    for (const expected of sample.expectSecondary ?? []) expect(normalize(row(result, expected.label) ?? '')).toBe(normalize(expected.value));
  });
  it('simple forward/inverse, half-year and zero boundaries use the initial principal', () => {
    expect(simple.compute({ principal: 100000, rate: 8, years: 3 }).primary.value).toBe('24 000 ₽');
    expect(simple.compute({ mode: 'rate', principal: 100000, interest: 24000, years: 3 }).primary.value).toBe('8,00 %');
    expect(simple.compute({ principal: 50000, rate: 12, years: 0.5 }).primary.value).toBe('3 000 ₽');
    expect(row(simple.compute({ principal: 100000, rate: 0, years: 3 }), 'Итоговая сумма')).toBe('100 000 ₽');
    expect(simple.compute({ mode: 'rate', principal: 100000, interest: 0, years: 3 }).primary.value).toBe('0,00 %');
  });
  it('simple ignores only inactive values and rejects unknown modes', () => {
    for (const value of [true, Infinity, -1, 'broken']) {
      expect(simple.compute({ principal: 100000, rate: 8, years: 3, interest: value }).primary.value).toBe('24 000 ₽');
      expect(simple.compute({ mode: 'rate', principal: 100000, interest: 24000, years: 3, rate: value }).primary.value).toBe('8,00 %');
    }
    for (const mode of ['typo', true, false, 1, null, {}]) error(simple.compute(inputs({ mode, principal: 100000, rate: 8, years: 3 })));
  });
  for (const value of invalid) for (const field of ['principal', 'rate', 'years']) it(`simple forward rejects ${field}=${String(value)}`, () => error(simple.compute(inputs({ principal: 100000, rate: 8, years: 3, [field]: value }))));
  for (const value of invalid) it(`simple inverse rejects active interest=${String(value)}`, () => error(simple.compute(inputs({ mode: 'rate', principal: 100000, interest: value, years: 3 }))));
  it('simple rejects negative values and overflow while retaining tiny nonzero interest', () => {
    error(simple.compute({ principal: 100000, rate: -1, years: 3 })); error(simple.compute({ mode: 'rate', principal: 100000, interest: -1, years: 3 }));
    error(simple.compute({ principal: 1e308, rate: 100, years: 2 })); error(simple.compute({ principal: Number.MIN_VALUE, rate: 1, years: 1 }));
    expect(simple.compute({ principal: 1e-8, rate: 1, years: 1 }).primary.value).toBe('1,000·10^-10 ₽');
  });
  it('contribution retains fractional measured volume, negative margins and omitted volume', () => {
    const result = margin.compute({ price: 500, variable: 300, volume: 2.5 });
    expect(result.primary.value).toBe('200 ₽'); expect(row(result, 'Доля в цене')).toBe('40,00 %'); expect(row(result, 'Маржинальный доход на объём')).toBe('500 ₽');
    expect(margin.compute({ price: 500, variable: 500 }).primary.value).toBe('0 ₽');
    const loss = margin.compute({ price: 500, variable: 650 });
    expect(loss.primary.value).toBe('-150 ₽'); expect(row(loss, 'Доля в цене')).toBe('-30,00 %'); expect(row(loss, 'Внимание')).toBe('Переменные затраты выше цены');
    for (const volume of [undefined, '', ' ', 0]) expect(row(margin.compute(inputs({ price: 500, variable: 300, volume })), 'Маржинальный доход на объём')).toBeUndefined();
  });
  for (const value of invalid) for (const field of ['price', 'variable']) it(`contribution rejects ${field}=${String(value)}`, () => error(margin.compute(inputs({ price: 500, variable: 300, [field]: value }))));
  for (const volume of [true, false, -1, Infinity, 'NaN', null, {}]) it(`contribution rejects optional volume=${String(volume)}`, () => error(margin.compute(inputs({ price: 500, variable: 300, volume }))));
  it('contribution rejects negative costs and overflow without losing small money', () => {
    error(margin.compute({ price: 500, variable: -10 })); error(margin.compute({ price: 1e308, variable: 0, volume: 2 }));
    expect(margin.compute({ price: 1e-8, variable: 0 }).primary.value).toBe('1,000·10^-8 ₽');
  });
  // Separate 60-digit Decimal oracle: geometric PV sum, then residual
  // divided by independently calculated final annual discounted cash flow.
  const paybackCases = [
    [100000, 100.001, 0.1, 11518.691080425182942], [5000000, 1200000, 10, 5.665894166666667],
    [100000, 20000, 10, 7.282055950000000], [100, 200, 10, 0.550000000000000], [100000, 20000, 1e-10, 5.000000000015000],
    // Separate 400-digit Decimal annual-PV oracle: 2.5 + 2.25e-323 years.
    // The nearest representable double and displayed duration are both 2.5.
    [5, 2, 5e-322, 2.5],
  ];
  for (const [investment, cashflow, rate, expected] of paybackCases) it(`discounted payback Decimal oracle ${investment}/${cashflow}@${rate}%`, () => {
    const actual = discountedPaybackYears(investment, cashflow, rate / 100);
    expect(Math.abs(actual - expected)).toBeLessThan(expected > 1000 ? 1e-7 : 1e-10);
  });
  it('payback separates long finite recovery, non-recovery and numerical limits', () => {
    const long = payback.compute({ investment: 100000, cashflow: 100.001, rate: 0.1 });
    expect(normalize(row(long, 'Дисконтированный срок')!)).toBe('11 518,69 лет');
    for (const cashflow of [10000, 9000]) { const never = payback.compute({ investment: 100000, cashflow, rate: 10 }); error(never); expect(never.secondary[0].value).toContain('никогда'); }
    const precision = payback.compute({ investment: 1e16, cashflow: 1, rate: 1e-16 }); error(precision); expect(precision.secondary[0].value).toBe('Результат вне допустимого диапазона');
    const zero = payback.compute({ investment: 1000000, cashflow: 300000, rate: 0 });
    expect(row(zero, 'Дисконтированный срок')).toBe(zero.primary.value); expect(row(zero, 'В месяцах')).toBe('40 мес');
  });
  it('a positive subnormal discount retains the fractional final year', () => {
    expect(discountedPaybackYears(5, 2, Number.MIN_VALUE)).toBe(2.5);
    const result = payback.compute({ investment: 5, cashflow: 2, rate: 5e-322 });
    expect(result.primary.value).toBe('2,5 лет');
    expect(row(result, 'Дисконтированный срок')).toBe('2,5 лет');
  });
  for (const value of invalid) for (const field of ['investment', 'cashflow', 'rate']) it(`payback rejects ${field}=${String(value)}`, () => error(payback.compute(inputs({ investment: 5000000, cashflow: 1200000, rate: 10, [field]: value }))));
  // Fixed Python datetime.date.isocalendar/timetuple fixtures, not engine output.
  const dates = [
    ['0001-01-01', 1, 1, 1, 365], ['0099-01-01', 99, 1, 1, 365], ['2011-12-30', 2011, 52, 364, 365],
    ['2024-02-29', 2024, 9, 60, 366], ['2024-12-31', 2025, 1, 366, 366], ['2023-01-01', 2022, 52, 1, 365],
    ['9999-12-31', 9999, 52, 365, 365], ['1900-03-01', 1900, 9, 60, 365], ['2000-03-01', 2000, 9, 61, 366], ['2026-08-18', 2026, 34, 230, 365],
  ] as const;
  for (const [date, year, number, ordinal, total] of dates) it(`date-only ISO oracle ${date}`, () => {
    expect(validateDate(date)).toBe(true); expect(week.validateDate?.(date)).toBe(true);
    const result = week.compute({ date }); expect(result.primary.value).toBe(String(number)); expect(row(result, 'Неделя относится к году')).toBe(String(year));
    expect(row(result, 'День года')).toBe(String(ordinal)); expect(row(result, 'Всего дней в году')).toBe(String(total)); expect(row(result, 'Осталось дней до конца года')).toBe(String(total - ordinal));
  });
  for (const date of ['0000-01-01', '10000-01-01', '1900-02-29', '2024-02-30', '2026-13-01', '2026-00-01', '2026-01-00', '2026-1-1', '2026-01-01T00:00:00Z', true, 0, null, {}]) it(`calendar rejects ${String(date)}`, () => {
    expect(parseCalendarDate(date)).toBeNull(); error(week.compute(inputs({ date })));
  });
  it('date-only parsing retains short years and a civil date omitted in Apia', () => {
    expect(parseCalendarDate('0099-01-01')?.getUTCFullYear()).toBe(99); expect(parseCalendarDate('2011-12-30')?.toISOString()).toBe('2011-12-30T00:00:00.000Z');
  });
});

describe('four non-Russian result locales use owned validation phrases', () => {
  const fixtures = [
    { definition: simple, lexicon: simpleLocale, invalidInputs: { principal: true, rate: 8, years: 3 } },
    { definition: margin, lexicon: marginLocale, invalidInputs: { price: 500, variable: -1 } },
    { definition: payback, lexicon: paybackLocale, invalidInputs: { investment: Infinity, cashflow: 1200000, rate: 10 } },
    { definition: week, lexicon: weekLocale, invalidInputs: { date: '1900-02-29' } },
  ];
  for (const fixture of fixtures) for (const locale of ['en', 'uk', 'de', 'es'] as const) it(`${fixture.definition.id}: localized error ${locale}`, () => {
    const raw = fixture.definition.compute(inputs(fixture.invalidInputs));
    const result = localizeResult(raw, locale, fixture.definition.id, { compute: fixture.definition.compute, localization: fixture.lexicon });
    error(result); expect(result.secondary[0].value).not.toMatch(/[ыэъё]/i); expect(result.secondary[0].value).not.toBe(raw.secondary[0].value);
  });
});
