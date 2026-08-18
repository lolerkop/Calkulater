import type { CalcFunction } from '../../lib/types';
import { toStr } from '../../lib/format';
import { parseIsoDate } from '../../lib/date';

// День недели по дате.
//
// Разбор идёт через общий `parseIsoDate`, который строит локальную дату без
// сдвига часового пояса. Своей системы времени калькулятор не заводит: сдвиг
// на час в другую сторону переносил бы дату через полночь и менял ответ.
//
// Номер недели по ISO 8601 считается тем же правилом, что и в калькуляторе
// номера недели: неделя 1 — та, что содержит первый четверг года. Правило
// повторено, а не вынесено в общий модуль: два потребителя ещё не семейство,
// а поспешное обобщение связало бы два калькулятора одной реализацией.
const WEEKDAYS = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

const isLeap = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

/** Понедельник — 1, воскресенье — 7. */
function isoWeekday(date: Date): number {
  const day = date.getDay();
  return day === 0 ? 7 : day;
}

function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 1);
  return Math.round((date.getTime() - start.getTime()) / 86400000) + 1;
}

export const compute: CalcFunction = (inputs) => {
  const date = parseIsoDate(toStr(inputs.date, ''));

  if (!date) {
    return {
      primary: { label: 'День недели', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите существующую дату', accent: 'red' as const }],
    };
  }

  const weekday = isoWeekday(date);
  const ordinal = dayOfYear(date);
  const year = date.getFullYear();
  const week = Math.floor((ordinal - weekday + 10) / 7);
  const weekLabel = week === 0 ? 'последняя неделя предыдущего года' : week === 53 ? '53' : String(week);

  return {
    primary: { label: 'День недели', value: WEEKDAYS[weekday - 1] },
    secondary: [
      { label: 'День года', value: String(ordinal) },
      { label: 'Номер недели ISO', value: weekLabel },
      { label: 'Дней в году', value: isLeap(year) ? '366' : '365' },
      { label: 'Выходной', value: weekday >= 6 ? 'Да' : 'Нет', accent: weekday >= 6 ? 'green' : 'neutral' },
    ],
  };
};
