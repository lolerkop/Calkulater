import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { finiteInput, integerInput } from '../../lib/platform/strictNumericInput';
import { formatQuantity } from '../../lib/platform/measurement';
import { exact, add, times, scale, number, type Dyadic } from '../../lib/platform/geometryNumericInput';

// Exact bounded dyadic formulas for finite binary inputs; one final rounding.
export const compute: CalcFunction = (inputs) => {
  const a1 = finiteInput(inputs.a1), d = finiteInput(inputs.d), n = integerInput(inputs.n);
  const fail = (message: string) => ({ primary: { label: 'n-й член', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (a1 === null || d === null) return fail('Введите конечные числа для первого члена и разности');
  if (n === null || n < 1) return fail('Номер члена должен быть целым от 1 до 9007199254740991');
  const term = (index: number) => add(exact(a1), times(exact(index - 1), exact(d)));
  const anExact = term(n), sumExact = scale(times(exact(n), add(exact(a1), anExact)), -1);
  const materialize = (value: Dyadic) => {
    const result = number(value);
    return Number.isFinite(result) && (result !== 0 || value.coefficient === 0n) ? result : null;
  };
  const an = materialize(anExact), sum = materialize(sumExact);
  const preview = Array.from({ length: Math.min(n, 10) }, (_, i) => materialize(term(i + 1)));
  if (an === null || sum === null || preview.some(value => value === null)) return fail('Результат вне числового диапазона: переполнение или потеря ненулевого значения');
  const show = (value: number) => formatQuantity(value === 0 ? 0 : value, fmtNumber);
  const table: CalcResultTable = { title: 'Первые члены ряда', columns: ['№ члена', 'Значение'], rows: preview.map((value, i) => [fmtInt(i + 1), show(value!)]), note: n > 10 ? 'Показаны первые 10 членов ряда.' : undefined };
  return { primary: { label: 'n-й член', value: show(an) }, secondary: [{ label: 'Сумма ряда', value: show(sum) }, { label: 'Разность', value: show(d) }, { label: 'Первый член', value: show(a1) }, { label: 'Членов', value: fmtInt(n) }], table };
};
