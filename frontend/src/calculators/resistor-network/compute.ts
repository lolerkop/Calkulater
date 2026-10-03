import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Общее сопротивление', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (inputs.mode !== 'series' && inputs.mode !== 'parallel') return fail(MODE);
  if (typeof inputs.resistances !== 'string') return fail(INPUT);
  if (inputs.resistances.length > 16384) return fail('Список ограничен 256 номиналами и 16 384 символами');
  const tokens = inputs.resistances.trim().replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
  if (tokens.length < 2) return fail('Нужно хотя бы два резистора');
  if (tokens.length > 256) return fail('Список ограничен 256 номиналами и 16 384 символами');
  const values = tokens.map(read);
  if (!values.every(Number.isFinite)) return fail(INPUT);
  if (!values.every(n => n > 0)) return fail('Сопротивление должно быть больше нуля');
  const min = values.reduce((a, b) => Math.min(a, b)), max = values.reduce((a, b) => Math.max(a, b));
  // Scale conductances by the smallest resistance, avoiding reciprocal overflow.
  const total = inputs.mode === 'parallel' ? min / values.reduce((sum, n) => sum + min / n, 0) : values.reduce((sum, n) => sum + n, 0);
  if (!(Number.isFinite(total) && total > 0)) return fail(RANGE);
  const ohm = (n: number) => (n < 1e-4 || n >= 1e12 ? formatQuantity(n, fmtNumber) : formatMeasure(n, fmtNumber)) + ' Ом';
  return { primary: { label: 'Общее сопротивление', value: ohm(total) }, secondary: [
    { label: 'Резисторов', value: fmtNumber(values.length, 0) }, { label: 'Наименьший', value: ohm(min) }, { label: 'Наибольший', value: ohm(max) },
    { label: 'Соединение', value: inputs.mode === 'parallel' ? 'параллельное' : 'последовательное' },
  ] };
};
