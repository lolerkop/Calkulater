import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { read, INPUT, MODE, RANGE } from '../../lib/platform/measurementScalar';
import { positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';
const LABEL: Record<string, string> = { charge: 'Заряд', voltage: 'Напряжение', capacitance: 'Ёмкость' };
const UNIT: Record<string, string> = { charge: 'мкКл', voltage: 'В', capacitance: 'мкФ' };
export const compute: CalcFunction = (inputs) => {
  const mode = typeof inputs.mode === 'string' ? inputs.mode : '';
  const supported = Object.hasOwn(LABEL, mode);
  const label = supported ? LABEL[mode] : LABEL.charge;
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!supported) return fail(MODE);
  const first = read(mode === 'capacitance' ? inputs.v : inputs.c);
  const second = read(mode === 'charge' ? inputs.v : inputs.q);
  if (![first, second].every(Number.isFinite)) return fail(INPUT);
  if (mode !== 'capacitance' && !(first > 0)) return fail('Ёмкость должна быть больше нуля');
  if (mode === 'capacitance' && first === 0) return fail('Напряжение не может быть нулевым: делить на него нечего');
  if (mode === 'capacitance' && (second === 0 || Math.sign(first) !== Math.sign(second))) return fail('Заряд и напряжение должны быть одного знака');
  const c = mode === 'capacitance' ? positiveRatio([Math.abs(second)], [Math.abs(first)]) : first;
  const v = mode === 'voltage' ? Math.sign(second) * positiveRatio([Math.abs(second)], [c]) : mode === 'charge' ? second : first;
  const q = mode === 'charge' ? Math.sign(v) * positiveRatio([c, Math.abs(v)], []) : second;
  const energy = positiveRatio([c, Math.abs(v), Math.abs(v)], [2, 1e6]);
  if (!(c > 0) || ![c, v, q, energy].every(Number.isFinite) || (second !== 0 && (v === 0 || q === 0 || energy === 0))) return fail(RANGE);
  const value = mode === 'charge' ? q : mode === 'voltage' ? v : c;
  const m = (n: number, unit: string) => (Math.abs(n) > 0 && (Math.abs(n) < 1e-4 || Math.abs(n) >= 1e12) ? formatQuantity(n, fmtNumber) : formatMeasure(n, fmtNumber)) + ' ' + unit;
  return { primary: { label, value: m(value, UNIT[mode]) }, secondary: [
    { label: 'Энергия поля', value: m(energy, 'Дж') }, { label: 'Ёмкость', value: m(c, 'мкФ') },
    { label: 'Напряжение', value: m(v, 'В') }, { label: 'Заряд', value: m(q, 'мкКл') },
  ] };
};
