import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'current' ? 'Ток' : 'Активная мощность';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'P' && mode !== 'current') return fail(MODE);
  const voltage = read(inputs.voltage), pf = read(inputs.powerFactor), known = read(mode === 'P' ? inputs.current : inputs.power);
  if (![voltage, pf, known].every(Number.isFinite)) return fail(INPUT);
  if (!(voltage > 0)) return fail('Напряжение должно быть больше нуля');
  if (!(pf > 0 && pf <= 1)) return fail('Коэффициент мощности должен быть больше нуля и не больше единицы');
  if (known < 0) return fail(mode === 'P' ? 'Ток должен быть неотрицательным' : 'Активная мощность должна быть неотрицательной');
  const current = mode === 'P' ? known : positiveRatio([known], [voltage, pf]);
  const active = mode === 'current' ? known : positiveRatio([voltage, known, pf], []);
  const apparent = mode === 'P' ? positiveRatio([voltage, known], []) : positiveRatio([known], [pf]);
  const reactive = positiveRatio([apparent, Math.sqrt((1 - pf) * (1 + pf))], []);
  if (![current, active, apparent, reactive].every(Number.isFinite) || (known > 0 && (current === 0 || active === 0 || apparent === 0 || (pf < 1 && reactive === 0)))) return fail(RANGE);
  const q = (n: number, unit: string) => (n > 0 && (n < 1e-4 || n >= 1e12) ? formatQuantity(n, fmtNumber) : formatMeasure(n, fmtNumber)) + ' ' + unit;
  const rows = [{ label: 'Полная мощность', value: q(apparent, 'ВА') }, { label: 'Реактивная мощность', value: q(reactive, 'вар') }];
  return mode === 'current' ? { primary: { label: 'Ток', value: q(current, 'А') }, secondary: [{ label: 'Активная мощность', value: q(active, 'Вт') }, ...rows] }
    : { primary: { label: 'Активная мощность', value: q(active, 'Вт') }, secondary: [...rows, { label: 'Ток', value: q(current, 'А') }] };
};
