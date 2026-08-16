import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, pluralRu, toStr } from '../format';
import { parseIsoDate } from '../date';

const MS_PER_CALENDAR_DAY = 86_400_000;

function calendarDayNumber(date: Date): number {
  return Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / MS_PER_CALENDAR_DAY;
}

function calendarDaysBetween(start: Date, end: Date): number {
  return calendarDayNumber(end) - calendarDayNumber(start);
}

// Годовщина даты рождения через заданное число календарных месяцев. Если в
// целевом месяце нет такого числа, берётся его последний день: 31 января плюс
// месяц — это 28 февраля, а в високосный год 29-е. Та же семантика описана в
// FAQ калькулятора для дня рождения 29 февраля, поэтому отдельная ветка для
// него больше не нужна — усечение обрабатывает его само.
function anniversaryAfterMonths(birth: Date, months: number): Date {
  const shifted = birth.getFullYear() * 12 + birth.getMonth() + months;
  const year = Math.floor(shifted / 12);
  const monthIndex = shifted - year * 12;
  const lastDayOfMonth = new Date(year, monthIndex + 1, 0).getDate();
  return new Date(year, monthIndex, Math.min(birth.getDate(), lastDayOfMonth));
}

export function calculateAge(birth: Date, target: Date): {
  years: number;
  months: number;
  days: number;
  totalDays: number;
} {
  if (target < birth) {
    return { years: 0, months: 0, days: 0, totalDays: 0 };
  }

  // Разложение идёт от даты рождения вперёд: сначала берётся наибольшее число
  // целых календарных месяцев, укладывающихся до даты расчёта, и только потом
  // остаток в днях. Прежний код шёл от даты расчёта назад и при нехватке дней
  // занимал длину месяца, предшествующего дате расчёта. Занимаемый месяц не
  // связан с днём рождения, поэтому для дня рождения 30 или 31 числа с
  // переходом через февраль одного заимствования не хватало и остаток
  // получался отрицательным: 31 января 2000 года на 1 марта 2026 давало
  // «26 лет, 1 месяц, −2 дня». Здесь остаток неотрицателен по построению —
  // это разница между датой расчёта и последней пройденной годовщиной.
  const estimate = (target.getFullYear() - birth.getFullYear()) * 12
    + (target.getMonth() - birth.getMonth());
  let totalMonths = Math.max(0, estimate);
  if (anniversaryAfterMonths(birth, totalMonths) > target) totalMonths -= 1;
  else if (anniversaryAfterMonths(birth, totalMonths + 1) <= target) totalMonths += 1;

  const lastAnniversary = anniversaryAfterMonths(birth, totalMonths);

  return {
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
    days: calendarDaysBetween(lastAnniversary, target),
    totalDays: calendarDaysBetween(birth, target),
  };
}

function formatIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const calcAge: CalcFunction = (inputs) => {
  const birthStr = toStr(inputs.birthDate);
  const targetStr = toStr(inputs.targetDate);

  const birth = parseIsoDate(birthStr);
  const target = targetStr ? parseIsoDate(targetStr) : new Date();

  if (!birth || !target) {
    return {
      primary: { label: 'Возраст', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Выберите дату рождения', accent: 'red' }],
    };
  }

  if (target < birth) {
    return {
      primary: { label: 'Возраст', value: '—' },
      secondary: [{ label: 'Ошибка', value: 'Дата расчёта раньше даты рождения', accent: 'red' }],
    };
  }

  const { years, months, days, totalDays } = calculateAge(birth, target);
  const weekdays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const birthdayInYear = (year: number) => {
    const isNonLeapFeb29 = birth.getMonth() === 1 && birth.getDate() === 29 && new Date(year, 1, 29).getMonth() !== 1;
    return new Date(year, birth.getMonth(), isNonLeapFeb29 ? 28 : birth.getDate());
  };
  let nextBirthday = birthdayInYear(target.getFullYear());
  if (calendarDaysBetween(target, nextBirthday) < 0) {
    nextBirthday = birthdayInYear(target.getFullYear() + 1);
  }
  const daysUntilBirthday = calendarDaysBetween(target, nextBirthday);

  const yearsStr = `${years} ${pluralRu(years, ['год', 'года', 'лет'])}`;
  const monthsStr = `${months} ${pluralRu(months, ['месяц', 'месяца', 'месяцев'])}`;
  const daysStr = `${days} ${pluralRu(days, ['день', 'дня', 'дней'])}`;

  return {
    primary: { label: 'Возраст', value: `${yearsStr}, ${monthsStr}, ${daysStr}` },
    secondary: [
      { label: 'Полных лет', value: String(years) },
      { label: 'Месяцев (сверх лет)', value: String(months) },
      { label: 'Дней (сверх месяцев)', value: String(days) },
      { label: 'Всего прожито дней', value: fmtInt(totalDays) },
      { label: 'День недели рождения', value: weekdays[birth.getDay()] },
      { label: 'Следующий день рождения', value: formatIsoDate(nextBirthday) },
      { label: 'До дня рождения', value: `${daysUntilBirthday} дн.` },
    ],
  };
};
