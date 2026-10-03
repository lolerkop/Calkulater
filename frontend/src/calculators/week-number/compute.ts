import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';

// Номер недели по ISO 8601 и день года.
//
// Неделя 1 — та, что содержит первый четверг года. Отсюда следствие, которое
// и делает расчёт нетривиальным: начало января может принадлежать последней
// неделе предыдущего года, а конец декабря — первой неделе следующего.
//
//   день года    = порядковый номер даты в году
//   день недели  = 1 (понедельник) … 7 (воскресенье)
//   номер недели = floor((день года − день недели + 10) / 7)
//
// Значение 0 означает, что дата принадлежит прошлому году, значение 53 —
// что она может принадлежать следующему: 53 недели бывают только в годах,
// начинающихся с четверга, и в високосных, начинающихся со среды.
//
// Date-only proleptic Gregorian components avoid local timezone omissions.
// setUTCFullYear preserves years 0001–0099. Historical civil calendars and
// conversion of timestamps are outside this calculator's domain.

const WEEKDAYS = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/** Порядковый номер дня в году: 1 января — первый. */
function dayOfYear(date: Date): number {
  const start = calendarDate(date.getUTCFullYear(), 0, 1);
  const day = 24 * 60 * 60 * 1000;
  return Math.round((date.getTime() - start.getTime()) / day) + 1;
}

/** Понедельник — 1, воскресенье — 7. */
function isoWeekday(date: Date): number {
  return date.getUTCDay() === 0 ? 7 : date.getUTCDay();
}

/** Число ISO-недель в году: 53 бывает не всегда. */
function weeksInYear(year: number): number {
  const jan1 = isoWeekday(calendarDate(year, 0, 1));
  return jan1 === 4 || (isLeapYear(year) && jan1 === 3) ? 53 : 52;
}

export function isoWeek(date: Date): { week: number; year: number } {
  const week = Math.floor((dayOfYear(date) - isoWeekday(date) + 10) / 7);
  if (week < 1) return { week: weeksInYear(date.getUTCFullYear() - 1), year: date.getUTCFullYear() - 1 };
  if (week > weeksInYear(date.getUTCFullYear())) return { week: 1, year: date.getUTCFullYear() + 1 };
  return { week, year: date.getUTCFullYear() };
}

function calendarDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month, day);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

export function parseCalendarDate(value: unknown): Date | null {
  if (typeof value !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  if (year < 1) return null;
  const date = calendarDate(year, month, day);
  return date.getUTCFullYear() === year && date.getUTCMonth() === month && date.getUTCDate() === day ? date : null;
}

export const compute: CalcFunction = (inputs) => {
  const date = parseCalendarDate(inputs.date);
  if (!date) {
    return {
      primary: { label: 'Номер недели', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Укажите корректную дату', accent: 'red' }],
    };
  }

  const { week, year } = isoWeek(date);
  const ordinal = dayOfYear(date);
  const total = isLeapYear(date.getUTCFullYear()) ? 366 : 365;

  return {
    primary: { label: 'Номер недели', value: `${fmtInt(week)}` },
    secondary: [
      { label: 'Неделя относится к году', value: `${year}` },
      { label: 'День года', value: `${fmtInt(ordinal)}` },
      { label: 'Всего дней в году', value: `${fmtInt(total)}` },
      { label: 'День недели', value: WEEKDAYS[isoWeekday(date) - 1] },
      { label: 'Осталось дней до конца года', value: `${fmtInt(total - ordinal)}` },
      { label: 'Високосный год', value: isLeapYear(date.getUTCFullYear()) ? 'да' : 'нет' },
    ],
  };
};
