import type { CalcFunction } from '../types';
import { fmtInt } from '../format';
import { addCalendarMonthsUtc, calendarDateUtc, calendarDayNumberUtc, formatCalendarDateUtc, isSupportedCalendarDate, localCalendarToUtc, parseCalendarDateUtc, utcCalendarToLocal } from '../date';
import { enumValue, shiftWhole } from './dateTimeNumeric';

const WEEKDAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

/** Existing exported helpers retain local Date component semantics. */
export const formatIsoDate = (date: Date): string => formatCalendarDateUtc(localCalendarToUtc(date));
export const addCalendarMonths = (date: Date, totalMonths: number): Date => utcCalendarToLocal(addCalendarMonthsUtc(localCalendarToUtc(date), totalMonths));

function shiftCalendarDate(start: Date, shift: { years?: number; months?: number; weeks?: number; days?: number }, sign: 1 | -1): Date {
  const months = sign * ((shift.years ?? 0) * 12 + (shift.months ?? 0));
  const withMonths = addCalendarMonthsUtc(start, months);
  return calendarDateUtc(withMonths.getUTCFullYear(), withMonths.getUTCMonth(), withMonths.getUTCDate() + sign * ((shift.weeks ?? 0) * 7 + (shift.days ?? 0)));
}
export const shiftDate = (start: Date, shift: { years?: number; months?: number; weeks?: number; days?: number }, sign: 1 | -1): Date => utcCalendarToLocal(shiftCalendarDate(localCalendarToUtc(start), shift, sign));

function isoWeekCalendar(date: Date): number {
  const thursday = new Date(date);
  thursday.setUTCDate(thursday.getUTCDate() - (thursday.getUTCDay() + 6) % 7 + 3);
  const firstThursday = calendarDateUtc(thursday.getUTCFullYear(), 0, 4);
  firstThursday.setUTCDate(firstThursday.getUTCDate() - (firstThursday.getUTCDay() + 6) % 7 + 3);
  return 1 + Math.round((calendarDayNumberUtc(thursday) - calendarDayNumberUtc(firstThursday)) / 7);
}
export const isoWeekNumber = (date: Date): number => isoWeekCalendar(localCalendarToUtc(date));

export const calcDateShift: CalcFunction = (inputs) => {
  const start = parseCalendarDateUtc(inputs.startDate);
  const fail = (message: string, label = 'Проверьте данные') => ({ primary: { label: 'Итоговая дата', value: '—' }, secondary: [{ label, value: message, accent: 'red' as const }] });
  if (!start) return fail('Выберите исходную дату');
  const direction = enumValue(inputs.shiftDirection, ['forward', 'backward'], 'forward');
  if (direction === null) return fail('Выберите направление сдвига');
  const values = ['shiftYears', 'shiftMonths', 'shiftWeeks', 'shiftDays'].map(name => shiftWhole(inputs[name]));
  if (values.some(value => value === null)) {
    const negative = ['shiftYears', 'shiftMonths', 'shiftWeeks', 'shiftDays'].some(name => typeof inputs[name] === 'number' && (inputs[name] as number) < 0 || typeof inputs[name] === 'string' && /^\s*-\d/.test(inputs[name] as string));
    return fail(negative ? 'Интервал не может быть отрицательным' : 'Интервал должен состоять из целых неотрицательных чисел', negative ? 'Ошибка' : 'Проверьте данные');
  }
  const [years, months, weeks, days] = values as number[];
  // Every final date within the supported range is at most this far away.
  // Separate nonnegative components cannot cancel, so this early bound loses no valid result.
  const totalMonths = BigInt(years) * 12n + BigInt(months);
  const totalDays = BigInt(weeks) * 7n + BigInt(days);
  if (totalMonths > 119987n || totalDays > 3652058n) return fail('Итоговая дата должна быть в диапазоне 0001–9999');
  const result = shiftCalendarDate(start, { years, months, weeks, days }, direction === 'backward' ? -1 : 1);
  if (!isSupportedCalendarDate(result)) return fail('Итоговая дата должна быть в диапазоне 0001–9999');
  return {
    primary: { label: 'Итоговая дата', value: formatCalendarDateUtc(result) },
    secondary: [
      { label: 'День недели', value: WEEKDAYS[result.getUTCDay()], accent: 'green' },
      { label: 'Исходная дата', value: formatCalendarDateUtc(start) },
      { label: 'Всего календарных дней', value: fmtInt(calendarDayNumberUtc(result) - calendarDayNumberUtc(start)) },
      { label: 'Номер дня в году', value: fmtInt(calendarDayNumberUtc(result) - calendarDayNumberUtc(calendarDateUtc(result.getUTCFullYear(), 0, 1)) + 1) },
      { label: 'Номер недели (ISO)', value: fmtInt(isoWeekCalendar(result)) },
    ],
  };
};
