import type { CalcFunction, CalcResult } from '../types';
import { fmtInt, toStr } from '../format';
import { parseIsoDate } from '../date';

function isoDate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function parseExcludedDates(value: string): { dates: Set<string>; invalid: string[] } {
  const dates = new Set<string>();
  const invalid: string[] = [];

  for (const token of value.split(/[,;\n]+/).map((item) => item.trim()).filter(Boolean)) {
    const parsed = parseIsoDate(token);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(token) || !parsed || isoDate(parsed) !== token) {
      invalid.push(token);
      continue;
    }
    dates.add(token);
  }

  return { dates, invalid };
}

export const calcWorkingDays: CalcFunction = (inputs) => {
  const startStr = toStr(inputs.startDate);
  const endStr = toStr(inputs.endDate);
  const includeWeekends = toStr(inputs.includeWeekends, 'no') === 'yes';
  const saturdayWorking = toStr(inputs.saturdayWorking, 'no') === 'yes';
  const excludedStr = toStr(inputs.excludedDates);

  const start = parseIsoDate(startStr);
  const end = parseIsoDate(endStr);

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

  const { dates: excluded, invalid } = parseExcludedDates(excludedStr);
  if (invalid.length > 0) {
    return {
      primary: { label: 'Рабочие дни', value: '—' },
      secondary: [{ label: 'Ошибка формата', value: `Проверьте даты: ${invalid.join(', ')}`, accent: 'red' }],
    };
  }

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
    } else if (day === 0 || (day === 6 && !saturdayWorking)) {
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
