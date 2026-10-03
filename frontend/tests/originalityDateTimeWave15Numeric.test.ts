import { describe, expect, it } from 'vitest';
import oracle from './fixtures/originalityDateTimeWave15Oracle.json';
import { calendarDayNumberUtc, formatCalendarDateUtc, isValidIsoDate, parseCalendarDateUtc, parseIsoDate } from '../src/lib/date';
import { calcAge } from '../src/lib/calculators/age';
import { calcDateShift } from '../src/lib/calculators/dateShift';
import { calcWorkingDays } from '../src/lib/calculators/workingDays';
import { compute as sleep } from '../src/calculators/sleep-time/compute';
import { compute as work } from '../src/calculators/work-hours/compute';
import { utcOffsetMinutes } from '../src/lib/calculators/dateTimeNumeric';
import type { CalcResult } from '../src/lib/types';
const row = (result: CalcResult, label: string) => result.secondary.find(x => x.label === label)?.value;
const integer = (text: string | undefined) => Number(text?.replace(/\s/g, '').replace(',', '.'));

describe('independent Python Gregorian literals and date-only range', () => {
  for (const fixture of oracle.calendar) it(`calendar ${fixture.iso}`, () => {
    const d = parseCalendarDateUtc(fixture.iso)!;
    expect(d).not.toBeNull(); expect(formatCalendarDateUtc(d)).toBe(fixture.iso);
    expect(d.getUTCDay()).toBe(fixture.weekdaySundayZero);
    expect(calendarDayNumberUtc(d)).toBe(fixture.ordinalEpoch1970);
    const result = calcDateShift({ startDate: fixture.iso });
    expect(integer(row(result, 'Номер дня в году'))).toBe(fixture.yearDay);
    expect(integer(row(result, 'Номер недели (ISO)'))).toBe(fixture.isoWeek);
  });
  for (const f of oracle.ages) it(`age ${f.birth} → ${f.target}`, () => {
    const result = calcAge({ birthDate: f.birth, targetDate: f.target });
    expect(integer(row(result, 'Полных лет'))).toBe(f.expected.years);
    expect(integer(row(result, 'Месяцев (сверх лет)'))).toBe(f.expected.months);
    expect(integer(row(result, 'Дней (сверх месяцев)'))).toBe(f.expected.days);
    expect(integer(row(result, 'Всего прожито дней'))).toBe(f.expected.totalDays);
  });
  for (const f of oracle.shifts) it(`shift ${f.start}/${f.sign}/${f.years}/${f.months}/${f.weeks}/${f.days}`, () => {
    const result = calcDateShift({ startDate: f.start, shiftDirection: f.sign < 0 ? 'backward' : 'forward', shiftYears: f.years, shiftMonths: f.months, shiftWeeks: f.weeks, shiftDays: f.days });
    expect(result.primary.value).toBe(f.result);
    expect(integer(row(result, 'Всего календарных дней'))).toBe(f.totalDays);
    expect(integer(row(result, 'Номер дня в году'))).toBe(f.yearDay);
    expect(integer(row(result, 'Номер недели (ISO)'))).toBe(f.isoWeek);
  });
  it.each(['0001-01-01', '0099-12-31', '0100-01-01'])('preserves local Date getter API for %s', text => {
    const d = parseIsoDate(text)!;
    expect(d.getFullYear()).toBe(Number(text.slice(0, 4))); expect(d.getMonth() + 1).toBe(Number(text.slice(5, 7))); expect(d.getDate()).toBe(Number(text.slice(8)));
  });
  it.each(['0000-01-01', '10000-01-01', '1900-02-29', '0100-02-29', '0001-02-29', '2000-02-30', '0099-13-01'])('rejects %s rather than normalizing', text => {
    expect(parseCalendarDateUtc(text)).toBeNull(); expect(isValidIsoDate(text)).toBe(false);
  });
  it('has no local date-line/DST omission in the date-only calculation', () => {
    const old = process.env.TZ;
    try { for (const zone of ['Pacific/Apia', 'Europe/Berlin', 'America/New_York', 'UTC']) {
      process.env.TZ = zone;
      expect(isValidIsoDate('2011-12-30')).toBe(true);
      expect(calcDateShift({ startDate: '2011-12-29', shiftDays: 1 }).primary.value).toBe('2011-12-30');
      expect(integer(row(calcAge({ birthDate: '2011-12-29', targetDate: '2011-12-31' }), 'Всего прожито дней'))).toBe(2);
    } } finally { if (old === undefined) delete process.env.TZ; else process.env.TZ = old; }
  });
});

describe('independent day-by-day working calendar, exclusions and full range', () => {
  for (const [index, f] of oracle.working.entries()) it(`working ${index} ${f.start}…${f.end}`, () => {
    const result = calcWorkingDays({ startDate: f.start, endDate: f.end, includeWeekends: f.include ? 'yes' : 'no', saturdayWorking: f.saturday ? 'yes' : 'no', excludedDates: f.excluded.concat(f.excluded).join(',') });
    expect(integer(result.primary.value.replace(' дн.', ''))).toBe(f.expected.working);
    expect(integer(row(result, 'Календарные дни'))).toBe(f.expected.calendar);
    expect(integer(row(result, 'Выходные дни'))).toBe(f.expected.weekends);
    expect(integer(row(result, 'Исключённые даты'))).toBe(f.expected.excluded);
  });
  it.each([['no', 'no', oracle.fullDomainWorking.fiveDayWorking], ['no', 'yes', oracle.fullDomainWorking.sixDayWorking], ['yes', 'no', oracle.fullDomainWorking.calendar]] as const)('complete 0001–9999: weekends%s/saturday%s', (includeWeekends, saturdayWorking, expected) => {
    const result = calcWorkingDays({ startDate: '0001-01-01', endDate: '9999-12-31', includeWeekends, saturdayWorking });
    expect(integer(result.primary.value.replace(' дн.', ''))).toBe(expected);
    expect(integer(row(result, 'Календарные дни'))).toBe(3652059);
  });
});

describe('90-minute declared sleep arithmetic and exact whole-minute offset lexemes', () => {
  for (const f of oracle.sleep) it(`sleep ${f.mode} ${f.hour}:${f.minute}/${f.cycles}/${f.fallAsleep}`, () => {
    const result = sleep(f); expect(result.primary.value).toBe(f.clock); expect(integer(row(result, 'Всего в постели')?.replace(' мин', ''))).toBe(f.total);
  });
  it.each([['1.1', 66], ['1,10', 66], ['5.75', 345], ['-12', -720], [14, 840], ['0.05', 3], ['1.10000000000000000000', 66]] as const)('whole minute %s = %s', (raw, expected) => expect(utcOffsetMinutes(raw)).toBe(expected));
  it.each(['0.001', '0.01', '1.10000000000000000001', '5.750000000000000000001', '0.0166666666666666666667', '', 'Infinity', '14.01'])('does not round %s to whole minutes', raw => expect(utcOffsetMinutes(raw)).toBeNull());
  it('safe full sleep total wraps before clock addition', () => {
    // (2^53−1) mod1440 =31; 23:59+31 =00:30.
    expect(sleep({ mode: 'bedtime', hour: 23, minute: 59, cycles: 1, fallAsleep: 9007199254740901 }).primary.value).toBe('00:30');
    expect(sleep({ mode: 'bedtime', hour: 23, minute: 59, cycles: 1, fallAsleep: 9007199254740902 }).primary.value).toBe('—');
  });
});

describe('work minutes and exact ratio-first pay range', () => {
  const base = { startHour: 0, startMin: 0, endHour: 1, endMin: 0, breakMin: 0, days: 1, ratePerHour: 0 };
  it('same clock means24h here', () => expect(work({ ...base, endHour: 0 }).primary.value).toBe('24 ч'));
  it('zero rate is zero money', () => expect(row(work(base), 'Заработок')).toBe('0,00 ден. ед.'));
  it('retains the exact one-hour pay after product cancellation', () => {
    const result = work({ ...base, endHour: 0, endMin: 30, days: 2, ratePerHour: 1e308 });
    expect(result.primary.value).toBe('1 ч'); expect(integer(row(result, 'Заработок')?.replace(' ден. ед.', ''))).toBe(1e308);
  });
  it('real positive financial overflow fails the whole result', () => expect(work({ ...base, days: 2, ratePerHour: 1e308 }).primary.value).toBe('—'));
  it('positive subnormal pay at one hour is shown without false zero', () => {
    const result = work({ ...base, ratePerHour: Number.MIN_VALUE });
    expect(row(result, 'Заработок')).toBe('4,941·10^-324 ден. ед.');
  });
  it('positive pay below the last floating-point rounding midpoint is rejected', () => expect(work({ ...base, endHour: 0, endMin: 1, ratePerHour: Number.MIN_VALUE }).primary.value).toBe('—'));
  it('whole minute counts are bounded by safe integer representation', () => {
    expect(work({ ...base, endHour: 0, endMin: 1, days: Number.MAX_SAFE_INTEGER }).primary.value).not.toBe('—');
    expect(work({ ...base, endHour: 0, endMin: 2, days: Number.MAX_SAFE_INTEGER }).primary.value).toBe('—');
  });
});

import payOracle from './fixtures/originalityDateTimeWave15PayOracle.json';
describe('60 independent exact Fraction pay literals', () => {
  const decimal = (text: string) => Number(text.replace(/\s/g, '').replace(',', '.').replace('·10^', 'e'));
  for (const [i, f] of payOracle.fixtures.entries()) it(`pay Fraction ${i}: ${f.netMinutes}min ×${f.days} @${f.rate}`, () => {
    const minutes = f.netMinutes === 1440 ? 0 : f.netMinutes;
    const result = work({ startHour: 0, startMin: 0, endHour: Math.floor(minutes / 60), endMin: minutes % 60, breakMin: 0, days: f.days, ratePerHour: Number(f.rate) });
    if (f.mustFail) { expect(result.primary.value).toBe('—'); return; }
    expect(result.primary.value).not.toBe('—');
    const expected = Number(f.expectedRoundedBinary);
    const text = row(result, 'Заработок')!.replace(' ден. ед.', '');
    const actual = decimal(text);
    expect(Number.isFinite(actual)).toBe(true);
    if (expected > 0) expect(actual).toBeGreaterThan(0);
    if (expected === 0 || Math.abs(expected) < 1e-307) expect(actual).toBe(expected);
    else if (text.includes('·10^')) expect(Math.abs(actual / expected - 1)).toBeLessThanOrEqual(0.0005);
    else expect(Math.abs(actual - expected)).toBeLessThanOrEqual(Math.max(0.005001, Math.abs(expected) * Number.EPSILON));
  });
});


describe('authorized nonzero money display threshold amendment', () => {
  const base = { startHour: 0, startMin: 0, endHour: 1, endMin: 0, breakMin: 0, days: 1 };
  it.each([[1e-6, '1,000·10^-6 ден. ед.'], [0.0002, '2,000·10^-4 ден. ед.'], [0.0049, '4,900·10^-3 ден. ед.'], [0.004999, '4,999·10^-3 ден. ед.'], [0.005, '0,01 ден. ед.'], [0.01, '0,01 ден. ед.']] as const)('one hour @%s preserves the declared display %s', (ratePerHour, expected) => {
    expect(row(work({ ...base, ratePerHour }), 'Заработок')).toBe(expected);
  });
});
