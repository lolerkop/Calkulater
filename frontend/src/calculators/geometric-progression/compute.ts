import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { finiteInput, integerInput } from '../../lib/platform/strictNumericInput';
import { formatQuantity } from '../../lib/platform/measurement';
import { exact, add, times, negative, number, ratio, type Dyadic } from '../../lib/platform/geometryNumericInput';

// At most50 exact binary terms. This avoids cancellation near r=1 and
// overflowing a power before multiplication by a small or zero first term.
export const compute: CalcFunction = (inputs) => {
  const a1 = finiteInput(inputs.a1), r = finiteInput(inputs.r), n = integerInput(inputs.n);
  const fail = (message: string) => ({ primary: { label: 'n-й член', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (a1 === null || r === null) return fail('Введите конечные числа для первого члена и знаменателя');
  if (n === null || n < 1 || n > 50) return fail('Число членов должно быть целым от 1 до 50');
  if (r === 0) return fail('Знаменатель не может быть нулём');
  const materialize = (value: Dyadic) => { const result = number(value); return Number.isFinite(result) && (result !== 0 || value.coefficient === 0n) ? result : null; };
  const exactTerms: Dyadic[] = []; let current = exact(a1);
  for (let i = 0; i < n; i++) { exactTerms.push(current); if (i + 1 < n) current = times(current, exact(r)); }
  const an = materialize(exactTerms[n - 1]), sum = materialize(add(...exactTerms));
  const preview = exactTerms.slice(0, 20).map(materialize);
  if (an === null || sum === null || preview.some(value => value === null) || Math.abs(an) >= 1e15 || Math.abs(sum) >= 1e15) return fail('Член или сумма выходят за диапазон этой страницы; измените исходные значения');
  const show = (value: number) => formatQuantity(value === 0 ? 0 : value, fmtNumber);
  const secondary = [{ label: 'Сумма ряда', value: show(sum) }, { label: 'Знаменатель', value: show(r) }, { label: 'Первый член', value: show(a1) }, { label: 'Членов', value: fmtInt(n) }];
  if (Math.abs(r) < 1) {
    const infinite = ratio(exact(a1), add(exact(1), negative(exact(r))));
    if (!Number.isFinite(infinite) || (infinite === 0 && a1 !== 0)) return fail('Член или сумма выходят за диапазон этой страницы; измените исходные значения');
    secondary.push({ label: 'Сумма бесконечного ряда', value: show(infinite) });
  }
  const table: CalcResultTable = { title: 'Члены прогрессии', columns: ['№ члена', 'Значение'], rows: preview.map((value, i) => [fmtInt(i + 1), show(value!)]), note: n > 20 ? 'Показаны первые 20 членов прогрессии.' : undefined };
  return { primary: { label: 'n-й член', value: show(an) }, secondary, table };
};
