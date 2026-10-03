import type { CalcFunction } from '../../lib/types';

// День недели по дате.
//
// Calendar-only UTC components avoid local timezone transitions, including
// historical whole-day omissions. Years 1–99 use setUTCFullYear so JavaScript
// does not reinterpret them as 1901–1999. This is a Gregorian date calculator,
// not a conversion of an instant or a local historical civil calendar.
//
// Номер недели по ISO 8601 считается тем же правилом, что и в калькуляторе
// номера недели: неделя 1 — та, что содержит первый четверг года. Правило
// повторено, а не вынесено в общий модуль: два потребителя ещё не семейство,
// а поспешное обобщение связало бы два калькулятора одной реализацией.
const WEEKDAYS = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

const isLeap = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

/** Понедельник — 1, воскресенье — 7. */
function isoWeekday(date: Date): number {
  const day = date.getUTCDay();
  return day === 0 ? 7 : day;
}

function utcCalendarDate(year: number, month: number, day: number): Date {
  const result = new Date(0);
  result.setUTCFullYear(year, month, day);
  result.setUTCHours(0, 0, 0, 0);
  return result;
}

export function parseCalendarDate(value: unknown): Date | null {
  if (typeof value !== 'string') return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  if (year < 1) return null;
  const date = utcCalendarDate(year, month, day);
  return date.getUTCFullYear() === year && date.getUTCMonth() === month && date.getUTCDate() === day ? date : null;
}

function dayOfYear(date: Date): number {
  const day = utcCalendarDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  const start = utcCalendarDate(date.getUTCFullYear(), 0, 1);
  return Math.round((day.getTime() - start.getTime()) / 86400000) + 1;
}

/** The Thursday belongs to the ISO week-year, including both year boundaries. */
function isoWeek(date: Date): { year: number; week: number } {
  const thursday = utcCalendarDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
  thursday.setUTCDate(thursday.getUTCDate() + 4 - isoWeekday(date));
  const year = thursday.getUTCFullYear();
  const start = utcCalendarDate(year, 0, 1);
  return { year, week: Math.floor((thursday.getTime() - start.getTime()) / 604800000) + 1 };
}

export const compute: CalcFunction = (inputs) => {
  const date = parseCalendarDate(inputs.date);

  if (!date) {
    return {
      primary: { label: 'День недели', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите существующую дату', accent: 'red' as const }],
    };
  }

  const weekday = isoWeekday(date);
  const ordinal = dayOfYear(date);
  const year = date.getUTCFullYear();
  const week = isoWeek(date);

  return {
    primary: { label: 'День недели', value: WEEKDAYS[weekday - 1] },
    secondary: [
      { label: 'День года', value: String(ordinal) },
      { label: 'Номер недели ISO', value: String(week.week) },
      { label: 'Год недели ISO', value: String(week.year) },
      { label: 'Дней в году', value: isLeap(year) ? '366' : '365' },
      { label: 'Выходной', value: weekday >= 6 ? 'Да' : 'Нет', accent: weekday >= 6 ? 'green' : 'neutral' },
    ],
  };
};
