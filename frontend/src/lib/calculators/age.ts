import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, pluralRu, toStr } from '../format';
import { parseIsoDate } from '../date';

export function calculateAge(birth: Date, target: Date): {
  years: number;
  months: number;
  days: number;
  totalDays: number;
} {
  if (target < birth) {
    return { years: 0, months: 0, days: 0, totalDays: 0 };
  }
  const leapBirthdayObservedOnFeb28 = birth.getMonth() === 1 && birth.getDate() === 29 &&
    new Date(target.getFullYear(), 1, 29).getMonth() !== 1;
  const comparisonDay = leapBirthdayObservedOnFeb28 ? 28 : birth.getDate();
  let years = target.getFullYear() - birth.getFullYear();
  let months = target.getMonth() - birth.getMonth();
  let days = target.getDate() - comparisonDay;

  if (days < 0) {
    months -= 1;
    // Дни в предыдущем месяце относительно target
    const prevMonth = new Date(target.getFullYear(), target.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((target.getTime() - birth.getTime()) / msPerDay);

  return { years, months, days, totalDays };
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
  if (nextBirthday < target) nextBirthday = birthdayInYear(target.getFullYear() + 1);
  const daysUntilBirthday = Math.ceil((nextBirthday.getTime() - target.getTime()) / 86_400_000);

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
