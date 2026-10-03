import type { CalcFunction } from '../../lib/types';
import { add, exact, LIMIT, MAX_ITEMS, nonzeroFinite, RANGE, ratio, read, shown, stat, times, tokens } from '../stats-descriptive/statisticsNumeric';

export const compute: CalcFunction = (inputs) => {
  const fail = (label: string, message: string) => ({ primary: { label: 'Взвешенное среднее', value: '—' }, secondary: [{ label, value: message, accent: 'red' as const }] });
  if (typeof inputs.pairs !== 'string') return fail('Проверьте данные', 'Введите хотя бы одну пару «значение вес»');
  if (inputs.pairs.length > 1000000) return fail('Проверьте данные', LIMIT);
  const lines = inputs.pairs.split('\n').map(line => line.trim()).filter(Boolean);
  if (!lines.length) return fail('Проверьте данные', 'Введите хотя бы одну пару «значение вес»');
  if (lines.length > MAX_ITEMS) return fail('Проверьте данные', LIMIT);
  let weights = exact(0), products = exact(0);
  for (const line of lines) {
    const parts = tokens(line), value = read(parts[0]), weight = read(parts[1]);
    if (parts.length !== 2 || !Number.isFinite(value) || !Number.isFinite(weight) || weight < 0) return fail('Строка не разобрана', line);
    weights = add(weights, exact(weight)); products = add(products, times(exact(value), exact(weight)));
  }
  if (!weights.coefficient) return fail('Проверьте данные', 'Сумма весов должна быть больше нуля');
  const mean = ratio(products, weights);
  if (!nonzeroFinite(mean, products)) return fail('Проверьте данные', RANGE);
  return { primary: { label: 'Взвешенное среднее', value: stat(mean) }, secondary: [
    { label: 'Сумма весов', value: shown(weights) }, { label: 'Сумма произведений', value: shown(products) }, { label: 'Количество пар', value: stat(lines.length) },
  ] };
};
