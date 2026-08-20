import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Арифметическая прогрессия.
//
// Сумма считается по замкнутой формуле Sₙ = n(a₁+aₙ)/2, а не сложением членов
// в цикле: при большом n цикл накапливал бы ошибку округления, а формула даёт
// ответ за одно действие и с той же точностью, что и сам n-й член.
//
// Таблица показывает только первые десять членов. Ряд бесконечен по смыслу, и
// выводить сотни строк незачем: закономерность видна уже на трёх, а n-й член
// и сумма посчитаны для полного ряда, а не для показанного отрезка.

const PREVIEW = 10;
// Примечание постоянно намеренно: строка с подставленным числом не имеет
// ключа в словаре и осталась бы русской в английской и украинской версиях.
const PREVIEW_NOTE = 'Показаны первые 10 членов ряда.';

export const compute: CalcFunction = (inputs) => {
  const a1 = toNumber(inputs.a1);
  const d = toNumber(inputs.d);
  const n = toNumber(inputs.n);
  const fail = (message: string) => ({
    primary: { label: 'n-й член', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(n >= 1)) return fail('Номер члена должен быть не меньше единицы');
  if (!Number.isInteger(n)) return fail('Номер члена должен быть целым');

  const an = a1 + (n - 1) * d;
  const sum = (n * (a1 + an)) / 2;

  const shown = Math.min(n, PREVIEW);
  const table: CalcResultTable = {
    title: 'Первые члены ряда',
    columns: ['№ члена', 'Значение'],
    rows: Array.from({ length: shown }, (_, i) => [
      fmtNumber(i + 1, 0),
      formatMeasure(a1 + i * d, fmtNumber),
    ]),
    note: n > PREVIEW ? PREVIEW_NOTE : undefined,
  };

  return {
    primary: { label: 'n-й член', value: formatMeasure(an, fmtNumber) },
    secondary: [
      { label: 'Сумма ряда', value: formatMeasure(sum, fmtNumber) },
      { label: 'Разность', value: formatMeasure(d, fmtNumber) },
      { label: 'Первый член', value: formatMeasure(a1, fmtNumber) },
      { label: 'Членов', value: fmtNumber(n, 0) },
    ],
    table,
  };
};
