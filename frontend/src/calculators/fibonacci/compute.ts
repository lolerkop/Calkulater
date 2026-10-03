import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { formatStatistic } from '../../lib/platform/measurement';

// Product numbering F1=0,F2=1;78 remains the existing page limit.
export const compute: CalcFunction = (inputs) => {
  const n = integerInput(inputs.n);
  const fail = (message: string) => ({ primary: { label: 'n-й член', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (n === null || n < 1 || n > 78) return fail('Здесь доступны целые номера от 1 до 78');
  const series: bigint[] = []; let current = 0n, next = 1n, sum = 0n;
  for (let i = 1; i <= n; i++) { series.push(current); sum += current; [current, next] = [next, current + next]; }
  const show = (value: bigint) => new Intl.NumberFormat('ru-RU').format(value);
  const an = series[n - 1], previous = n >= 2 ? series[n - 2] : 0n;
  const table: CalcResultTable = { title: 'Начало ряда', columns: ['№', 'Значение'], rows: series.slice(0, 10).map((value, i) => [fmtInt(i + 1), show(value)]), note: n > 10 ? 'Показаны первые 10 членов ряда.' : undefined };
  return { primary: { label: 'n-й член', value: show(an) }, secondary: [{ label: 'Сумма ряда', value: show(sum) }, ...(n >= 3 ? [{ label: 'Отношение к предыдущему', value: formatStatistic(Number(an) / Number(previous), fmtNumber) }] : []), { label: 'Предыдущий член', value: show(previous) }, { label: 'Членов', value: fmtInt(n) }], table };
};
