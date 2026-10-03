import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { add, BELOW, exact, LIMIT, list, magnitude, moments, negative, nonzeroFinite, RANGE, ratio, shown, sqrtRatio, stat, times } from '../stats-descriptive/statisticsNumeric';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Коэффициент корреляции', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const xs = list(inputs.xs), ys = list(inputs.ys);
  if (!xs || !ys) return fail(LIMIT + '; проверьте каждый числовой токен');
  if (xs.length !== ys.length) return fail('В рядах разное число значений — пары не построить');
  const n = xs.length;
  if (n < 3) return fail('Нужно не меньше трёх пар значений');
  const x = moments(xs), y = moments(ys);
  if (!x.centered.coefficient || !y.centered.coefficient) return fail('Все значения одного из рядов совпадают — корреляция не определена');
  let products = exact(0);
  for (let i = 0; i < n; i++) products = add(products, times(exact(xs[i]), exact(ys[i])));
  const cross = add(times(exact(n), products), negative(times(x.sum, y.sum)));
  const squaredCross = times(cross, cross), denominator = times(x.centered, y.centered);
  const r = Math.sign(Number(cross.coefficient)) * sqrtRatio(squaredCross, denominator);
  if (!nonzeroFinite(r, cross)) return fail(RANGE);
  const intercept = add(times(y.sum, x.centered), negative(times(cross, x.sum)));
  return { primary: { label: 'Коэффициент корреляции', value: stat(r) }, secondary: [
    { label: 'Коэффициент детерминации', value: shown(squaredCross, denominator) },
    { label: 'Ковариация выборки', value: shown(cross, exact(n * (n - 1))) },
    { label: 'Наклон линии', value: shown(cross, x.centered) },
    { label: 'Свободный член', value: shown(intercept, times(exact(n), x.centered)) },
    { label: 'Пар значений', value: fmtNumber(n, 0) },
    { label: 'Среднее X', value: shown(x.sum, exact(n)) }, { label: 'Среднее Y', value: shown(y.sum, exact(n)) },
  ] };
};
