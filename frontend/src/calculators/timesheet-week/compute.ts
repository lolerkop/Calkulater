import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { number as readNumber, integer as readInteger, validOutput } from '../../lib/platform/scalarInputDisplay';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

const MIN_IN_DAY = 24 * 60;
const OVERTIME_RATE = 1.5;

const parseClock = (raw: string): number | null => {
  const m = /^(\d{1,2}):(\d{2})$/.exec(raw.trim());
  if (!m) return null;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
};

export const compute: CalcFunction = (inputs) => {
  const rate = readNumber(inputs.rate);
  const normal = readNumber(inputs.normal);
  const fail = (message: string) => ({
    primary: { label: 'Всего часов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (rate === null || normal === null) return fail('Введите корректные числовые данные');

  if (!(rate >= 0)) return fail('Ставка не может быть отрицательной');
  if (!(normal >= 0)) return fail('Норма часов не может быть отрицательной');

  if (typeof inputs.lines !== 'string') return fail('Введите строки табеля текстом');
  const rows: string[][] = [];
  let totalMinutes = 0;
  for (const line of inputs.lines.split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const parts = text.split(',').map((p) => p.trim());
    if (parts.length < 2 || parts.length > 3) return fail('В строке нужны начало и конец через запятую');
    const start = parseClock(parts[0]);
    const end = parseClock(parts[1]);
    if (start === null || end === null) return fail('Время задаётся как 09:00');
    const breakMinutes = parts.length > 2 && parts[2] !== '' ? readInteger(parts[2]) : 0;
    if (breakMinutes === null || breakMinutes < 0) {
      return fail('Перерыв задаётся целым числом минут');
    }
    const worked = (end < start ? end + MIN_IN_DAY : end) - start - breakMinutes;
    if (worked < 0) return fail('Перерыв длиннее смены');
    totalMinutes += worked;
    if (!Number.isSafeInteger(totalMinutes)) return fail('Результат вне допустимого диапазона');
    rows.push([parts[0], parts[1], String(breakMinutes), formatMeasure(worked / 60, fmtNumber)]);
  }
  if (rows.length === 0) return fail('Введите хотя бы одну строку вида «09:00,18:00,60»');

  const hours = totalMinutes / 60;
  const overtime = Math.max(0, hours - normal);
  const base = Math.min(hours, normal);
  const pay = base * rate + overtime * rate * OVERTIME_RATE;
  if (!validOutput(pay) || (rate > 0 && hours > 0 && pay === 0)) return fail('Результат вне допустимого диапазона');
  const table: CalcResultTable = {
    title: 'Смены',
    columns: ['Начало', 'Конец', 'Перерыв, мин', 'Часов'],
    rows,
  };

  return {
    primary: { label: 'Всего часов', value: `${formatMeasure(hours, fmtNumber)} ч` },
    secondary: [
      { label: 'Дней в табеле', value: String(rows.length) },
      {
        label: 'В часах и минутах',
        value: `${Math.floor(totalMinutes / 60)} ч ${totalMinutes % 60} мин`,
      },
      { label: 'Сверхурочных', value: `${formatMeasure(overtime, fmtNumber)} ч` },
      { label: 'Начислено', value: `${formatMeasure(pay, fmtNumber)} ₽` },
    ],
    table,
  };
};
