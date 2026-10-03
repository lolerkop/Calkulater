import type { CalcFunction } from '../types';
import { fmtInt, pluralRu } from '../format';
import { addCalendarMonthsUtc, calendarDateUtc, calendarDayNumberUtc, formatCalendarDateUtc, localCalendarToUtc, parseCalendarDateUtc } from '../date';

function calculateCalendarAge(birth: Date, target: Date): { years: number; months: number; days: number; totalDays: number } {
  if (target < birth) return { years: 0, months: 0, days: 0, totalDays: 0 };
  const estimate = (target.getUTCFullYear() - birth.getUTCFullYear()) * 12 + target.getUTCMonth() - birth.getUTCMonth();
  let totalMonths = Math.max(0, estimate);
  if (addCalendarMonthsUtc(birth, totalMonths) > target) totalMonths -= 1;
  else if (addCalendarMonthsUtc(birth, totalMonths + 1) <= target) totalMonths += 1;
  const anniversary = addCalendarMonthsUtc(birth, totalMonths);
  return { years: Math.floor(totalMonths / 12), months: totalMonths % 12,
    days: calendarDayNumberUtc(target) - calendarDayNumberUtc(anniversary),
    totalDays: calendarDayNumberUtc(target) - calendarDayNumberUtc(birth) };
}

/** Existing external API interprets its Date arguments by their local calendar components. */
export function calculateAge(birth: Date, target: Date): { years: number; months: number; days: number; totalDays: number } {
  return calculateCalendarAge(localCalendarToUtc(birth), localCalendarToUtc(target));
}

export const calcAge: CalcFunction = (inputs) => {
  const birth = parseCalendarDateUtc(inputs.birthDate);
  const targetRaw = inputs.targetDate;
  const target = targetRaw === undefined || targetRaw === '' ? localCalendarToUtc(new Date()) : parseCalendarDateUtc(targetRaw);
  if (!birth || !target) return { primary: { label: 'Возраст', value: '—' }, secondary: [{ label: 'Проверьте данные', value: 'Выберите дату рождения', accent: 'red' }] };
  if (target < birth) return { primary: { label: 'Возраст', value: '—' }, secondary: [{ label: 'Ошибка', value: 'Дата расчёта раньше даты рождения', accent: 'red' }] };
  const { years, months, days, totalDays } = calculateCalendarAge(birth, target);
  const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const birthdayInYear = (year: number) => addCalendarMonthsUtc(birth, (year - birth.getUTCFullYear()) * 12);
  let nextBirthday = birthdayInYear(target.getUTCFullYear());
  if (nextBirthday < target) nextBirthday = birthdayInYear(target.getUTCFullYear() + 1);
  const nextSupported = nextBirthday.getUTCFullYear() <= 9999;
  return {
    primary: { label: 'Возраст', value: `${years} ${pluralRu(years, ['год', 'года', 'лет'])}, ${months} ${pluralRu(months, ['месяц', 'месяца', 'месяцев'])}, ${days} ${pluralRu(days, ['день', 'дня', 'дней'])}` },
    secondary: [
      { label: 'Полных лет', value: String(years) }, { label: 'Месяцев (сверх лет)', value: String(months) }, { label: 'Дней (сверх месяцев)', value: String(days) },
      { label: 'Всего прожито дней', value: fmtInt(totalDays) }, { label: 'День недели рождения', value: weekdays[birth.getUTCDay()] },
      { label: 'Следующий день рождения', value: nextSupported ? formatCalendarDateUtc(nextBirthday) : '—' },
      { label: 'До дня рождения', value: nextSupported ? `${calendarDayNumberUtc(nextBirthday) - calendarDayNumberUtc(target)} дн.` : '—' },
    ],
  };
};
