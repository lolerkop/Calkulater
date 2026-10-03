import type { CalcFunction } from '../../lib/types';
import { add, exact, interpolation, LIMIT, list, MODE, mode, moments, negative, nonzeroFinite, number, RANGE, ratio, shown, sqrtRatio, stat, times } from './statisticsNumeric';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Среднее', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const selected = mode(inputs.mode, 'sample', ['sample', 'population']);
  if (!selected) return fail(MODE);
  const values = list(inputs.values);
  if (!values) return fail(typeof inputs.values === 'string' && !inputs.values.trim() ? 'Введите хотя бы одно число' : LIMIT + '; проверьте каждый числовой токен');
  const n = values.length, m = moments(values), mean = ratio(m.sum, exact(n));
  if (!nonzeroFinite(mean, m.sum)) return fail(RANGE);
  const sorted = [...values].sort((a, b) => a - b), median = interpolation(sorted, 0.5);
  const counts = new Map<number, number>();
  for (const x of values) counts.set(x, (counts.get(x) ?? 0) + 1);
  let top = 0;
  for (const count of counts.values()) top = Math.max(top, count);
  const modes = top === 1 ? '—' : [...counts.entries()].filter(([, c]) => c === top).map(([v]) => v).sort((a, b) => a - b).map(stat).join(', ');
  const divisor = selected === 'population' ? n * n : n * (n - 1);
  const sd = divisor ? sqrtRatio(m.centered, exact(divisor)) : null;
  return {
    primary: { label: 'Среднее', value: stat(mean) },
    secondary: [
      { label: 'Количество', value: stat(n) }, { label: 'Сумма', value: shown(m.sum) },
      { label: 'Медиана', value: shown(median) }, { label: 'Мода', value: modes },
      { label: 'Минимум', value: stat(sorted[0]) }, { label: 'Максимум', value: stat(sorted[n - 1]) },
      { label: 'Размах', value: shown(add(exact(sorted[n - 1]), negative(exact(sorted[0])))) },
      { label: 'Дисперсия', value: divisor ? shown(m.centered, exact(divisor)) : '—' },
      { label: 'Стандартное отклонение', value: sd === null ? '—' : sd === 0 && m.centered.coefficient ? 'Ненулевое значение меньше числового диапазона' : stat(sd) },
    ],
  };
};
