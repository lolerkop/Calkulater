import { describe, expect, it } from 'vitest';
import { compute as leap } from '../src/calculators/leap-year/compute';
import { compute as sleep } from '../src/calculators/sleep-time/compute';
import { compute as duration } from '../src/calculators/time-duration/compute';
import { compute as zone } from '../src/calculators/timezone-difference/compute';
import { compute as work } from '../src/calculators/work-hours/compute';
import { leapYearReferenceCases } from '../src/calculators/leap-year/referenceCases';
import { sleepTimeReferenceCases } from '../src/calculators/sleep-time/referenceCases';
import { timeDurationReferenceCases } from '../src/calculators/time-duration/referenceCases';
import { timezoneDifferenceReferenceCases } from '../src/calculators/timezone-difference/referenceCases';
import { workHoursReferenceCases } from '../src/calculators/work-hours/referenceCases';
import { calcAge } from '../src/lib/calculators/age';
import { calcDateShift } from '../src/lib/calculators/dateShift';
import { calcWorkingDays, parseExcludedDates } from '../src/lib/calculators/workingDays';
import type { CalcResult } from '../src/lib/types';
const row = (r: CalcResult, label: string) => r.secondary.find(x => x.label === label)?.value;

describe('preserved25 reference contracts; one confirmed invalid clamp revised', () => {
  for (const [id, compute, fixtures] of [['leap-year', leap, leapYearReferenceCases], ['sleep-time', sleep, sleepTimeReferenceCases], ['time-duration', duration, timeDurationReferenceCases], ['timezone-difference', zone, timezoneDifferenceReferenceCases], ['work-hours', work, workHoursReferenceCases]] as const) {
    for (const f of fixtures) it(`${id}: ${f.name}`, () => {
      const r = compute({ ...f.inputs }); expect(r.primary.value).toBe(f.expectPrimary);
      for (const x of f.expectSecondary ?? []) expect(row(r, x.label)).toBe(x.value);
    });
  }
});

describe('bounded contextual calendar/time contracts', () => {
  it('no ISO year0000 and no9999 overflow result', () => {
    expect(calcDateShift({ startDate: '0001-01-01', shiftDirection: 'backward', shiftDays: 1 }).primary.value).toBe('—');
    expect(calcDateShift({ startDate: '9999-12-31', shiftDays: 1 }).primary.value).toBe('—');
    expect(calcDateShift({ startDate: '9999-12-31', shiftDirection: 'backward', shiftDays: 3652058 }).primary.value).toBe('0001-01-01');
    expect(calcDateShift({ startDate: '0001-01-01', shiftDays: 3652058 }).primary.value).toBe('9999-12-31');
  });
  it('preserves combined-month clamping before exact days and its noninvertibility', () => {
    expect(calcDateShift({ startDate: '2000-02-29', shiftYears: 1, shiftMonths: 1 }).primary.value).toBe('2001-03-29');
    expect(calcDateShift({ startDate: '2026-01-31', shiftMonths: 1 }).primary.value).toBe('2026-02-28');
    expect(calcDateShift({ startDate: '2026-02-28', shiftDirection: 'backward', shiftMonths: 1 }).primary.value).toBe('2026-01-28');
  });
  it('blank and omitted legacy counts both mean zero', () => {
    expect(calcDateShift({ startDate: '0001-01-01', shiftYears: '', shiftMonths: ' ', shiftWeeks: '', shiftDays: '' }).primary.value).toBe('0001-01-01');
  });
  it('clamps Feb29 birthday toFeb28 and bounds nextbirthday secondary', () => {
    expect(calcAge({ birthDate: '0004-02-29', targetDate: '0005-02-28' }).primary.value).toBe('1 год, 0 месяцев, 0 дней');
    expect(row(calcAge({ birthDate: '0001-01-01', targetDate: '9999-12-31' }), 'Следующий день рождения')).toBe('—');
    expect(row(calcAge({ birthDate: '0001-01-01', targetDate: '9999-12-31' }), 'До дня рождения')).toBe('—');
  });
  it('bounds next leap year and exits immediately for huge invalid years', () => {
    expect(row(leap({ year: 9999 }), 'Следующий високосный')).toBe('—');
    expect(leap({ year: 1e308 }).primary.value).toBe('—');
    expect(leap({ year: Number.MAX_SAFE_INTEGER }).primary.value).toBe('—');
  });
  it('does not silently select unknown or coerced legacy/weekend modes', () => {
    expect(calcDateShift({ startDate: '2026-01-01', shiftDirection: 'sideways' }).primary.value).toBe('—');
    expect(calcWorkingDays({ startDate: '2026-01-01', endDate: '2026-01-07', includeWeekends: 'invalid' }).primary.value).toBe('—');
    expect(calcWorkingDays({ startDate: '2026-01-01', endDate: '2026-01-07', saturdayWorking: false }).primary.value).toBe('—');
  });
  it('date exclusions are unique, inclusive and take precedence over weekend categories', () => {
    expect(parseExcludedDates('0001-01-01;0001-01-01\n0004-02-29').dates.size).toBe(2);
    const r = calcWorkingDays({ startDate: '2026-02-02', endDate: '2026-02-08', excludedDates: '2026-02-08,2026-02-08,2026-02-09' });
    expect(r.primary.value).toBe('5 дн.'); expect(row(r, 'Выходные дни')).toBe('1'); expect(row(r, 'Исключённые даты')).toBe('1');
  });
  it('duration equal clock iszero; work shift equal clock is24h', () => {
    expect(duration({ mode: 'difference', startHour: 9, startMinute: 0, endHour: 9, endMinute: 0 }).primary.value).toBe('0 ч 0 мин');
    expect(work({ startHour: 9, startMin: 0, endHour: 9, endMin: 0, breakMin: 0, days: 1, ratePerHour: 0 }).primary.value).toBe('24 ч');
  });
  it('inactive duration inputs cannot veto valid mode; active subtract span is required', () => {
    expect(duration({ mode: 'difference', startHour: 9, startMinute: 0, endHour: 17, endMinute: 30, spanHour: 'bad', spanMinute: false }).primary.value).toBe('8 ч 30 мин');
    expect(duration({ mode: 'subtract', startHour: 0, startMinute: 20, spanHour: 0, spanMinute: 45, endHour: 'bad', endMinute: false }).primary.value).toBe('23:35');
    expect(duration({ mode: 'subtract', startHour: 0, startMinute: 20, spanHour: '', spanMinute: 45 }).primary.value).toBe('—');
  });
  it('timezone26h extreme difference explicitly carries two dates', () => {
    const r = zone({ fromOffset: -12, toOffset: 14, hour: 23, minute: 0 }); expect(r.primary.value).toBe('01:00'); expect(row(r, 'Сдвиг суток')).toBe('2'); expect(row(r, 'Календарный день')).toBe('через двое суток');
    const back = zone({ fromOffset: 14, toOffset: -12, hour: 0, minute: 0 }); expect(back.primary.value).toBe('22:00'); expect(row(back, 'Сдвиг суток')).toBe('-2'); expect(row(back, 'Календарный день')).toBe('двое суток назад');
  });
});


describe('authorized boundary-crossing label semantics for multi-day clock arithmetic', () => {
  it.each([['add', 'Переход вперёд через границу суток'], ['subtract', 'Переход назад через границу суток']] as const)('01:00 %s48h gives01:00 with truthfully bounded boolean', (mode, label) => {
    const result = duration({ mode, startHour: 1, startMinute: 0, spanHour: 48, spanMinute: 0 });
    expect(result.primary.value).toBe('01:00');
    expect(row(result, 'Длительность')).toBe('48 ч 0 мин');
    expect(row(result, label)).toBe('да');
    expect(result.secondary.some(x => x.label === 'Следующие сутки' || x.label === 'Предыдущие сутки')).toBe(false);
  });
});
