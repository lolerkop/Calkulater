import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
const LABEL: Record<string, string> = { kva: 'Полная мощность', kw: 'Активная мощность' };
export const compute: CalcFunction = (inputs) => {
  const mode = typeof inputs.mode === 'string' ? inputs.mode : '';
  const supported = Object.hasOwn(LABEL, mode);
  const label = supported ? LABEL[mode] : LABEL.kva;
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!supported) return fail(MODE);
  const known = read(mode === 'kw' ? inputs.kva : inputs.kw), pf = read(inputs.pf);
  if (![known, pf].every(Number.isFinite)) return fail(INPUT);
  if (!(pf > 0)) return fail('Коэффициент мощности должен быть больше нуля');
  if (pf > 1) return fail('Коэффициент мощности не может быть больше единицы');
  if (known < 0) return fail('Мощность должна быть неотрицательной');
  const apparent = mode === 'kw' ? known : positiveRatio([known], [pf]);
  const active = mode === 'kva' ? known : positiveRatio([known, pf], []);
  // Sinusoidal model: avoid cancellation and overflow in S² − P².
  const reactive = positiveRatio([apparent, Math.sqrt((1 - pf) * (1 + pf))], []);
  if (![apparent, active, reactive].every(Number.isFinite) || (known > 0 && (active === 0 || apparent === 0 || (pf < 1 && reactive === 0)))) return fail(RANGE);
  const m = (n: number, unit: string) => (n > 0 && (n < 1e-4 || n >= 1e12) ? formatQuantity(n, fmtNumber) : formatMeasure(n, fmtNumber)) + ' ' + unit;
  return { primary: { label, value: m(mode === 'kw' ? active : apparent, mode === 'kw' ? 'кВт' : 'кВА') }, secondary: [
    { label: 'Реактивная мощность', value: m(reactive, 'квар') }, { label: 'Активная мощность', value: m(active, 'кВт') },
    { label: 'Полная мощность', value: m(apparent, 'кВА') }, { label: 'Коэффициент мощности', value: formatMeasure(pf, fmtNumber) },
  ] };
};
