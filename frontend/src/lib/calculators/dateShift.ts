import type { CalcFunction } from '../types';
import { fmtInt, toNumber, toStr } from '../format';
import { parseIsoDate } from '../date';

const MS_PER_CALENDAR_DAY = 86_400_000;

const WEEKDAYS = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function calendarDayNumber(date: Date): number {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_CALENDAR_DAY;
}

export function formatIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Календарные единицы применяются первыми и усекаются до последнего дня месяца:
// 31 января + 1 месяц = 28 (или 29) февраля. Иначе дата «перетекала» бы в март.
export function addCalendarMonths(date: Date, totalMonths: number): Date {
  const shifted = date.getFullYear() * 12 + date.getMonth() + totalMonths;
  const targetYear = Math.floor(shifted / 12);
  const targetMonth = shifted - targetYear * 12;
  const lastDayOfTargetMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
  return new Date(targetYear, targetMonth, Math.min(date.getDate(), lastDayOfTargetMonth));
}

export function shiftDate(
  start: Date,
  shift: { years?: number; months?: number; weeks?: number; days?: number },
  sign: 1 | -1,
): Date {
  const months = sign * ((shift.years ?? 0) * 12 + (shift.months ?? 0));
  const withMonths = addCalendarMonths(start, months);
  const exactDays = sign * ((shift.weeks ?? 0) * 7 + (shift.days ?? 0));
  return new Date(withMonths.getFullYear(), withMonths.getMonth(), withMonths.getDate() + exactDays);
}

// Номер недели по ISO 8601: неделя начинается с понедельника, первая неделя года
// содержит первый четверг.
export function isoWeekNumber(date: Date): number {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayOfWeek = (target.getUTCDay() + 6) % 7; // 0 = понедельник
  target.setUTCDate(target.getUTCDate() - dayOfWeek + 3); // четверг этой недели
  const firstThursday = new Date(Date.UTC(target.getUTCFullYear(), 0, 4));
  const firstDayOfWeek = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayOfWeek + 3);
  return 1 + Math.round((target.getTime() - firstThursday.getTime()) / (7 * MS_PER_CALENDAR_DAY));
}

function dayOfYear(date: Date): number {
  return calendarDayNumber(date) - calendarDayNumber(new Date(date.getFullYear(), 0, 1)) + 1;
}

export const calcDateShift: CalcFunction = (inputs) => {
  const startStr = toStr(inputs.startDate);
  const start = parseIsoDate(startStr);
  const sign: 1 | -1 = toStr(inputs.shiftDirection, 'forward') === 'backward' ? -1 : 1;
  const shift = {
    years: Math.trunc(toNumber(inputs.shiftYears)),
    months: Math.trunc(toNumber(inputs.shiftMonths)),
    weeks: Math.trunc(toNumber(inputs.shiftWeeks)),
    days: Math.trunc(toNumber(inputs.shiftDays)),
  };

  if (!start) {
    return {
      primary: { label: 'Итоговая дата', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Выберите исходную дату', accent: 'red' }],
    };
  }

  if (Object.values(shift).some((value) => value < 0)) {
    return {
      primary: { label: 'Итоговая дата', value: '—' },
      secondary: [{ label: 'Ошибка', value: 'Интервал не может быть отрицательным', accent: 'red' }],
    };
  }

  const result = shiftDate(start, shift, sign);
  const totalDays = calendarDayNumber(result) - calendarDayNumber(start);

  return {
    primary: { label: 'Итоговая дата', value: formatIsoDate(result) },
    secondary: [
      { label: 'День недели', value: WEEKDAYS[result.getDay()], accent: 'green' },
      { label: 'Исходная дата', value: formatIsoDate(start) },
      { label: 'Всего календарных дней', value: fmtInt(totalDays) },
      { label: 'Номер дня в году', value: fmtInt(dayOfYear(result)) },
      { label: 'Номер недели (ISO)', value: fmtInt(isoWeekNumber(result)) },
    ],
  };
};
