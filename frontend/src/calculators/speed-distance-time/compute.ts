import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { finite, INPUT, measure, mode, MODE, mul, positive, quotient, RANGE, read, scalar } from '../engine-displacement/automotiveNumeric';
const asDuration = (hours: number) => {
  if (hours > Number.MAX_SAFE_INTEGER / 60) return `${measure(hours)} ч`;
  const totalMinutes = Math.round(hours * 60);
  return `${fmtInt(Math.floor(totalMinutes / 60))} ч ${totalMinutes % 60} мин`;
};
export const compute: CalcFunction = inputs => {
  const selected = mode(inputs.mode, 'speed', ['speed', 'distance', 'time']);
  const fail = (message: string) => ({ primary: { label: 'Результат', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!selected) return fail(MODE);
  let s = selected === 'distance' ? 0 : read(inputs.distance), t = selected === 'time' ? 0 : read(inputs.time), v = selected === 'speed' ? 0 : read(inputs.speed);
  if (!finite(s, t, v)) return fail(INPUT);
  if (s < 0 || t < 0 || v < 0) return fail('Значения не могут быть отрицательными');
  let primary: { label: string; value: string };
  if (selected === 'speed') {
    if (!(t > 0)) return fail('Время должно быть больше нуля');
    v = quotient([s], [t]); primary = { label: 'Скорость', value: `${scalar(v)} км/ч` };
  } else if (selected === 'distance') {
    s = mul(v, t); primary = { label: 'Расстояние', value: `${scalar(s)} км` };
  } else {
    if (!(v > 0)) return fail('Скорость должна быть больше нуля');
    t = quotient([s], [v]); primary = { label: 'Время', value: `${scalar(t, 4)} ч` };
  }
  const pace = v > 0 ? quotient([60], [v]) : 0;
  if (!finite(s, t, v, pace) || (v > 0 && !positive(pace))) return fail(RANGE);
  return { primary, secondary: [ { label: 'Время в пути', value: asDuration(t) }, { label: 'Скорость', value: `${scalar(v)} км/ч` },
    { label: 'Расстояние', value: `${scalar(s)} км` }, { label: 'Минут на километр', value: v > 0 ? scalar(pace) : '—' },
  ] };
};
