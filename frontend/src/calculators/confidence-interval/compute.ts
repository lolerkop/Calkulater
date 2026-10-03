import type { CalcFunction } from '../../lib/types';
import { add, exact, INPUT, integer, MODE, mode, negative, nonzeroFinite, number, RANGE, read, sqrtRatio, stat, times } from '../stats-descriptive/statisticsNumeric';

// Preserved rounded normal critical values; no Student t calculation is implied.
const Z: Record<string, number> = { '90': 1.645, '95': 1.96, '99': 2.576 };
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Доверительный интервал', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const mean = read(inputs.mean), sd = read(inputs.sd), n = integer(inputs.n);
  const confidence = mode(inputs.confidence, '95', ['90', '95', '99']);
  if (!confidence) return fail(MODE);
  if (![mean, sd].every(Number.isFinite)) return fail(INPUT);
  if (sd < 0) return fail('Стандартное отклонение не может быть отрицательным');
  if (!Number.isFinite(n)) return fail('Объём выборки должен быть целым числом');
  if (n < 2) return fail('Объём выборки должен быть не меньше двух');
  const z = Z[confidence], squared = times(exact(sd), exact(sd));
  const se = sqrtRatio(squared, exact(n)), margin = sqrtRatio(times(squared, exact(z), exact(z)), exact(n));
  const lowExact = add(exact(mean), negative(exact(margin))), highExact = add(exact(mean), exact(margin));
  const low = number(lowExact), high = number(highExact);
  if (![se, margin, low, high].every(Number.isFinite) || (sd > 0 && (se === 0 || margin === 0)) || !nonzeroFinite(low, lowExact) || !nonzeroFinite(high, highExact)) return fail(RANGE);
  if (margin > 0 && low === high) return fail(RANGE);
  let lower = stat(low), upper = stat(high);
  if (margin > 0 && lower === upper) {
    const precise = (value: number): string => {
      const [mantissa, exponent] = value.toExponential(16).split('e');
      return `${mantissa.replace('.', ',')}·10^${Number(exponent)}`;
    };
    lower = precise(low); upper = precise(high);
  }
  return { primary: { label: 'Доверительный интервал', value: `${lower} … ${upper}` }, secondary: [
    { label: 'Предел погрешности', value: stat(margin) }, { label: 'Стандартная ошибка', value: stat(se) },
    { label: 'Критическое значение z', value: stat(z) }, { label: 'Нижняя граница', value: lower }, { label: 'Верхняя граница', value: upper },
  ] };
};
