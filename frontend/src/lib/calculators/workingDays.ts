import type { CalcFunction } from '../types';
import { fmtInt } from '../format';
import { calendarDayNumberUtc, parseCalendarDateUtc } from '../date';
import { enumValue } from './dateTimeNumeric';

export function parseExcludedDates(value: string): { dates: Set<string>; invalid: string[] } {
  const dates = new Set<string>();
  const invalid: string[] = [];
  for (const token of value.split(/[,;\n]+/).map(item => item.trim()).filter(Boolean)) {
    if (!parseCalendarDateUtc(token)) invalid.push(token); else dates.add(token);
  }
  return { dates, invalid };
}

export const calcWorkingDays: CalcFunction = (inputs) => {
  const start = parseCalendarDateUtc(inputs.startDate);
  const end = parseCalendarDateUtc(inputs.endDate);
  const fail = (message: string, label = 'Проверьте данные') => ({ primary: { label: 'Рабочие дни', value: '—' }, secondary: [{ label, value: message, accent: 'red' as const }] });
  if (!start || !end) return fail('Выберите начало и конец');
  if (end < start) return fail('Дата конца раньше начала', 'Ошибка');
  const include = enumValue(inputs.includeWeekends, ['yes', 'no'], 'no');
  const saturday = enumValue(inputs.saturdayWorking, ['yes', 'no'], 'no');
  if (include === null || saturday === null) return fail('Выберите режим учёта выходных');
  const rawExcluded = inputs.excludedDates === undefined ? '' : inputs.excludedDates;
  if (typeof rawExcluded !== 'string') return fail('Используйте список дат в формате ГГГГ-ММ-ДД');
  const { dates: excluded, invalid } = parseExcludedDates(rawExcluded);
  if (invalid.length) return fail(`Проверьте даты: ${invalid.join(', ')}`, 'Ошибка формата');
  const first = calendarDayNumberUtc(start);
  const last = calendarDayNumberUtc(end);
  const calendar = last - first + 1;
  const isWeekend = (day: number) => include === 'no' && (day === 0 || day === 6 && saturday === 'no');
  // Every complete block of seven calendar days contains each weekday once.
  let weekends = Math.floor(calendar / 7) * (include === 'yes' ? 0 : saturday === 'yes' ? 1 : 2);
  for (let i = 0; i < calendar % 7; i++) if (isWeekend((start.getUTCDay() + i) % 7)) weekends++;
  let excludedCount = 0;
  for (const token of excluded) {
    const date = parseCalendarDateUtc(token)!;
    const ordinal = calendarDayNumberUtc(date);
    if (ordinal < first || ordinal > last) continue;
    excludedCount++;
    // Exclusions take precedence; do not count the same day as a weekend too.
    if (isWeekend(date.getUTCDay())) weekends--;
  }
  const working = calendar - weekends - excludedCount;
  return { primary: { label: 'Рабочие дни', value: `${fmtInt(working)} дн.` }, secondary: [
    { label: 'Календарные дни', value: fmtInt(calendar) }, { label: 'Выходные дни', value: fmtInt(weekends) }, { label: 'Исключённые даты', value: fmtInt(excludedCount) },
  ] };
};
