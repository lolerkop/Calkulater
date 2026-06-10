import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, pluralRu, toStr } from '../format';

export function calculateAge(birth: Date, target: Date): {
  years: number;
  months: number;
  days: number;
  totalDays: number;
} {
  if (target < birth) {
    return { years: 0, months: 0, days: 0, totalDays: 0 };
  }
  let years = target.getFullYear() - birth.getFullYear();
  let months = target.getMonth() - birth.getMonth();
  let days = target.getDate() - birth.getDate();

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

function parseDate(s: string): Date | null {
  if (!s) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!match) return null;
  const d = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]));
  if (isNaN(d.getTime())) return null;
  return d;
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

  const birth = parseDate(birthStr);
  const target = targetStr ? parseDate(targetStr) : new Date();

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
  let nextBirthday = new Date(target.getFullYear(), birth.getMonth(), birth.getDate());
  if (nextBirthday < target) nextBirthday = new Date(target.getFullYear() + 1, birth.getMonth(), birth.getDate());
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
