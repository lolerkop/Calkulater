import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, toStr } from '../format';

function parseDate(s: string): Date | null {
  if (!s) return null;
  const d = new Date(s);
  if (isNaN(d.getTime())) return null;
  d.setHours(0, 0, 0, 0);
  return d;
}

function isoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export const calcWorkingDays: CalcFunction = (inputs) => {
  const startStr = toStr(inputs.startDate);
  const endStr = toStr(inputs.endDate);
  const includeWeekends = toStr(inputs.includeWeekends, 'no') === 'yes';
  const excludedStr = toStr(inputs.excludedDates);

  const start = parseDate(startStr);
  const end = parseDate(endStr);

  if (!start || !end) {
    return {
      primary: { label: 'Рабочие дни', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Выберите начало и конец', accent: 'red' }],
    };
  }

  if (end < start) {
    return {
      primary: { label: 'Рабочие дни', value: '—' },
      secondary: [{ label: 'Ошибка', value: 'Дата конца раньше начала', accent: 'red' }],
    };
  }

  const excluded = new Set(
    excludedStr
      .split(/[,;\n]+/)
      .map((x) => x.trim())
      .filter(Boolean),
  );

  let calendar = 0;
  let working = 0;
  let weekendCount = 0;
  let excludedCount = 0;

  const cursor = new Date(start);
  while (cursor <= end) {
    calendar++;
    const day = cursor.getDay(); // 0=Sun, 6=Sat
    const iso = isoDate(cursor);

    if (excluded.has(iso)) {
      excludedCount++;
    } else if (day === 0 || day === 6) {
      if (includeWeekends) {
        working++;
      } else {
        weekendCount++;
      }
    } else {
      working++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return {
    primary: { label: 'Рабочие дни', value: `${fmtInt(working)} дн.` },
    secondary: [
      { label: 'Календарные дни', value: fmtInt(calendar) },
      { label: 'Выходные дни', value: fmtInt(weekendCount) },
      { label: 'Исключённые даты', value: fmtInt(excludedCount) },
    ],
  };
};
