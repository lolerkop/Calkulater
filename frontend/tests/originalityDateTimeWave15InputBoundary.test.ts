import { describe, expect, it } from 'vitest';
import { parseLocalizedNumber } from '../src/lib/format';
import type { CalculatorValidator } from '../src/lib/platform/types';
import type { CalcFunction } from '../src/lib/types';
import { compute as leap } from '../src/calculators/leap-year/compute';
import { compute as sleep } from '../src/calculators/sleep-time/compute';
import { compute as duration } from '../src/calculators/time-duration/compute';
import { compute as zone } from '../src/calculators/timezone-difference/compute';
import { compute as work } from '../src/calculators/work-hours/compute';
import { validate as leapValidate } from '../src/calculators/leap-year/validate';
import { validate as sleepValidate } from '../src/calculators/sleep-time/validate';
import { validate as durationValidate } from '../src/calculators/time-duration/validate';
import { validate as zoneValidate } from '../src/calculators/timezone-difference/validate';
import { validate as workValidate } from '../src/calculators/work-hours/validate';
import { calcDateShift } from '../src/lib/calculators/dateShift';
import { calcAge } from '../src/lib/calculators/age';
import { calcWorkingDays } from '../src/lib/calculators/workingDays';
import { validateDateShift } from '../src/lib/calculators/dateShiftValidate';
const bad = [false, true, null, {}, [], NaN, Infinity, -Infinity, '', 'bad', '1.00000000000000000001', 1.1];
const context = (values: any, locale: any) => ({ values, locale, fields: [], parseNumber: (text: string) => parseLocalizedNumber(text, locale) });
const cases: [string, CalcFunction, CalculatorValidator, any, string[]][] = [
 ['leap', leap, leapValidate, { year: 2024 }, ['year']],
 ['sleep', sleep, sleepValidate, { mode: 'bedtime', hour: 23, minute: 0, cycles: 5, fallAsleep: 15 }, ['hour', 'minute', 'cycles', 'fallAsleep']],
 ['duration-diff', duration, durationValidate, { mode: 'difference', startHour: 9, startMinute: 0, endHour: 17, endMinute: 30 }, ['startHour', 'startMinute', 'endHour', 'endMinute']],
 ['duration-add', duration, durationValidate, { mode: 'add', startHour: 9, startMinute: 0, spanHour: 2, spanMinute: 30 }, ['startHour', 'startMinute', 'spanHour', 'spanMinute']],
 ['zone-clock', zone, zoneValidate, { fromOffset: 3, toOffset: -5, hour: 14, minute: 30 }, ['hour', 'minute']],
 ['work', work, workValidate, { startHour: 9, startMin: 0, endHour: 18, endMin: 0, breakMin: 60, days: 21, ratePerHour: 500 }, ['startHour', 'startMin', 'endHour', 'endMin', 'breakMin', 'days']],
];
describe('strict direct active integers and raw form lexemes', () => {
 for (const [id, compute, validator, base, fields] of cases) for (const field of fields) for (const [index, value] of bad.entries()) it(`${id}/${field}/bad${index}`, () => {
   const values = { ...base, [field]: value }; expect(compute(values).primary.value).toBe('—');
   for (const locale of ['ru', 'en', 'uk', 'de', 'es']) expect(validator(context(values, locale))[field]).toBeTruthy();
 });
 for (const [id, compute, validator, base] of cases) it(`${id} all5 native hidden fractional tail rejection`, () => {
   const field = id === 'leap' ? 'year' : id === 'sleep' || id === 'zone-clock' ? 'hour' : 'startHour';
   for (const locale of ['ru', 'en', 'uk', 'de', 'es']) {
     const values = { ...base, [field]: locale === 'ru' || locale === 'uk' ? '1,00000000000000000001' : '1.00000000000000000001' };
     expect(validator(context(values, locale))[field]).toBeTruthy();
   }
 });
 it.each([false, true, null, {}, [], '', 'bad', Infinity, NaN, '-0.1'])('work rate malformed %s', raw => expect(work({ startHour: 9, startMin: 0, endHour: 18, endMin: 0, breakMin: 60, days: 1, ratePerHour: raw } as any).primary.value).toBe('—'));
});
describe('mode/offset and legacy date/count strictness', () => {
 for (const [id, compute, base] of [['sleep', sleep, { hour: 23, minute: 0, cycles: 5, fallAsleep: 15 }], ['duration', duration, { startHour: 9, startMinute: 0, endHour: 17, endMinute: 30 }]] as const) for (const [index, mode] of [null, false, [], {}, 1, '', 'unknown'].entries()) it(`${id}/mode${index}`, () => expect(compute({ ...base, mode } as any).primary.value).toBe('—'));
 for (const field of ['fromOffset', 'toOffset']) for (const [index, value] of [false, true, null, {}, [], '', 'bad', Infinity, NaN, '1.10000000000000000001', .001, .01].entries()) it(`offset/${field}/${index}`, () => {
   const values = { fromOffset: 3, toOffset: -5, hour: 14, minute: 30, [field]: value };
   expect(zone(values as any).primary.value).toBe('—');
   for (const locale of ['ru', 'en', 'uk', 'de', 'es']) expect(zoneValidate(context(values, locale))[field]).toBeTruthy();
 });
 for (const field of ['shiftYears', 'shiftMonths', 'shiftWeeks', 'shiftDays']) for (const [index, value] of bad.filter(x => x !== '').entries()) it(`legacy-shift/${field}/${index}`, () => {
   const values = { startDate: '2026-01-01', [field]: value };
   expect(calcDateShift(values as any).primary.value).toBe('—');
   for (const locale of ['ru', 'en', 'uk', 'de', 'es']) expect(validateDateShift(context(values, locale))[field]).toBeTruthy();
 });
 for (const [index, raw] of [false, true, null, {}, [], '', '0000-01-01', '0001-02-29', '10000-01-01'].entries()) it(`legacy-date malformed${index}`, () => {
   expect(calcAge({ birthDate: raw, targetDate: '2026-01-01' } as any).primary.value).toBe('—');
   expect(calcDateShift({ startDate: raw } as any).primary.value).toBe('—');
   expect(calcWorkingDays({ startDate: raw, endDate: '2026-01-01' } as any).primary.value).toBe('—');
 });
});
