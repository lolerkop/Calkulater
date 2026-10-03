import type { CalcFunction } from '../../lib/types';
import { add, compare, exact, interpolation, LIMIT, list, measure, negative, nonzeroFinite, RANGE, ratio, shown, times } from '../stats-descriptive/statisticsNumeric';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Медиана', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const values = list(inputs.values);
  if (!values) return fail(typeof inputs.values === 'string' && !inputs.values.trim() ? 'Введите числа через пробел или с новой строки' : LIMIT + '; проверьте каждый числовой токен');
  if (values.length < 4) return fail('Нужно не меньше четырёх значений');
  const sorted = [...values].sort((a, b) => a - b);
  const q1 = interpolation(sorted, 0.25), q2 = interpolation(sorted, 0.5), q3 = interpolation(sorted, 0.75);
  if (!nonzeroFinite(ratio(q2, exact(1)), q2)) return fail(RANGE);
  const iqr = add(q3, negative(q1)), offset = times(exact(1.5), iqr);
  const low = add(q1, negative(offset)), high = add(q3, offset);
  const outliers = sorted.filter(v => compare(exact(v), low) < 0 || compare(exact(v), high) > 0).length;
  return { primary: { label: 'Медиана', value: shown(q2, exact(1), measure) }, secondary: [
    { label: 'Первый квартиль', value: shown(q1, exact(1), measure) }, { label: 'Третий квартиль', value: shown(q3, exact(1), measure) },
    { label: 'Межквартильный размах', value: shown(iqr, exact(1), measure) },
    { label: 'Границы усов', value: `${shown(low, exact(1), measure)} … ${shown(high, exact(1), measure)}` },
    { label: 'Выбросов', value: String(outliers) }, { label: 'Значений', value: String(values.length) },
  ] };
};
