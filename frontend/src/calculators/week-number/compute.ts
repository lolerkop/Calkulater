import type { CalcFunction } from '../../lib/types';
import { fmtInt, toStr } from '../../lib/format';
import { parseIsoDate } from '../../lib/date';

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
// Разбор даты идёт через общий `parseIsoDate`, который строит локальную дату
// без сдвига часового пояса, — своей системы времени калькулятор не заводит.

const WEEKDAYS = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/** Порядковый номер дня в году: 1 января — первый. */
function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  const day = 24 * 60 * 60 * 1000;
  return Math.round((date.getTime() - start.getTime()) / day) + 1;
}

/** Понедельник — 1, воскресенье — 7. */
function isoWeekday(date: Date): number {
  return date.getDay() === 0 ? 7 : date.getDay();
}

/** Число ISO-недель в году: 53 бывает не всегда. */
function weeksInYear(year: number): number {
  const jan1 = isoWeekday(new Date(year, 0, 1));
  return jan1 === 4 || (isLeapYear(year) && jan1 === 3) ? 53 : 52;
}

export function isoWeek(date: Date): { week: number; year: number } {
  const week = Math.floor((dayOfYear(date) - isoWeekday(date) + 10) / 7);
  if (week < 1) return { week: weeksInYear(date.getFullYear() - 1), year: date.getFullYear() - 1 };
  if (week > weeksInYear(date.getFullYear())) return { week: 1, year: date.getFullYear() + 1 };
  return { week, year: date.getFullYear() };
}

export const compute: CalcFunction = (inputs) => {
  const date = parseIsoDate(toStr(inputs.date, ''));
  if (!date) {
    return {
      primary: { label: 'Номер недели', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Укажите корректную дату', accent: 'red' }],
    };
  }

  const { week, year } = isoWeek(date);
  const ordinal = dayOfYear(date);
  const total = isLeapYear(date.getFullYear()) ? 366 : 365;

  return {
    primary: { label: 'Номер недели', value: `${fmtInt(week)}` },
    secondary: [
      { label: 'Неделя относится к году', value: `${year}` },
      { label: 'День года', value: `${fmtInt(ordinal)}` },
      { label: 'Всего дней в году', value: `${fmtInt(total)}` },
      { label: 'День недели', value: WEEKDAYS[isoWeekday(date) - 1] },
      { label: 'Осталось дней до конца года', value: `${fmtInt(total - ordinal)}` },
      { label: 'Високосный год', value: isLeapYear(date.getFullYear()) ? 'да' : 'нет' },
    ],
  };
};
