import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';
import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Общая ёмкость', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (inputs.mode !== 'series' && inputs.mode !== 'parallel') return fail(MODE);
  if (typeof inputs.capacitances !== 'string') return fail(INPUT);
  if (inputs.capacitances.length > 16384) return fail('Список ограничен 256 номиналами и 16 384 символами');
  // Comma remains a list separator; a decimal point is required in this list.
  const tokens = inputs.capacitances.trim().split(/[\s,;]+/).filter(Boolean);
  if (tokens.length > 256) return fail('Список ограничен 256 номиналами и 16 384 символами');
  const values = tokens.map(read);
  if (!values.length || !values.every(n => Number.isFinite(n) && n > 0)) return fail('Введите ёмкости через пробел, каждая больше нуля');
  const min = values.reduce((a, b) => Math.min(a, b)), max = values.reduce((a, b) => Math.max(a, b));
  const total = inputs.mode === 'series' ? min / values.reduce((sum, n) => sum + min / n, 0) : values.reduce((sum, n) => sum + n, 0);
  if (!(Number.isFinite(total) && total > 0)) return fail(RANGE);
  const uf = (n: number) => (n < 1e-4 || n >= 1e12 ? formatQuantity(n, fmtNumber) : formatMeasure(n, fmtNumber)) + ' мкФ';
  return { primary: { label: 'Общая ёмкость', value: uf(total) }, secondary: [
    { label: 'Конденсаторов', value: fmtInt(values.length) }, { label: 'Наименьший', value: uf(min) }, { label: 'Наибольший', value: uf(max) },
    { label: 'Соединение', value: inputs.mode === 'parallel' ? 'параллельное' : 'последовательное' },
  ] };
};
