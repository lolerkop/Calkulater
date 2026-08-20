import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Ряд Фибоначчи.
//
// Нумерация начинается с F₁ = 0, F₂ = 1 — это соглашение выбрано и держится
// последовательно, потому что вариант с F₁ = 1 сдвинул бы каждый ответ на один
// номер.
//
// Верхняя граница 78 не произвольна. Начиная с 79-го члена ряд выходит за
// пределы точного целого double, и результат начал бы тихо расходиться с
// настоящим. Проверено сравнением с точной арифметикой: до 78-го включительно
// и члены, и суммы совпадают в точности, на 79-м расходится член.
//
// Отношение к предыдущему у первых двух членов не определено — делить на нуль
// нечем, — поэтому строка появляется только с третьего члена, а не показывает
// бесконечность.

const PREVIEW = 10;
const MAX_N = 78;
// Постоянная строка: с подставленным числом её нельзя перевести по словарю.
const PREVIEW_NOTE = 'Показаны первые 10 членов ряда.';

export const compute: CalcFunction = (inputs) => {
  const n = toNumber(inputs.n);
  const fail = (message: string) => ({
    primary: { label: 'n-й член', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(n >= 1)) return fail('Номер члена должен быть не меньше единицы');
  if (!Number.isInteger(n)) return fail('Номер члена должен быть целым');
  if (n > MAX_N) return fail('Номер члена больше 78 выходит за предел точного расчёта');

  const series: number[] = [];
  let current = 0;
  let next = 1;
  let sum = 0;
  for (let i = 1; i <= n; i += 1) {
    series.push(current);
    sum += current;
    [current, next] = [next, current + next];
  }

  const an = series[n - 1];
  const previous = n >= 2 ? series[n - 2] : 0;

  const table: CalcResultTable = {
    title: 'Начало ряда',
    columns: ['№', 'Значение'],
    rows: series.slice(0, PREVIEW).map((value, i) => [fmtNumber(i + 1, 0), fmtNumber(value, 0)]),
    note: n > PREVIEW ? PREVIEW_NOTE : undefined,
  };

  return {
    primary: { label: 'n-й член', value: fmtNumber(an, 0) },
    secondary: [
      { label: 'Сумма ряда', value: fmtNumber(sum, 0) },
      ...(n >= 3
        ? [{ label: 'Отношение к предыдущему', value: formatStatistic(an / previous, fmtNumber) }]
        : []),
      { label: 'Предыдущий член', value: n >= 2 ? fmtNumber(previous, 0) : '0' },
      { label: 'Членов', value: fmtNumber(n, 0) },
    ],
    table,
  };
};
