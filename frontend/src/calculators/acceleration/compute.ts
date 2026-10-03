import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Signed velocity on one fixed axis, constant acceleration over a positive interval.
// Distance integrates |v|, whereas displacement integrates v; they differ at reversal.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'v' ? 'Конечная скорость' : 'Ускорение';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'a' && mode !== 'v') return fail(MODE);
  const v0 = read(inputs.v0), t = read(inputs.t), supplied = read(mode === 'a' ? inputs.v : inputs.a);
  if (![v0, t, supplied].every(Number.isFinite)) return fail(INPUT);
  if (!(t > 0)) return fail('Время должно быть больше нуля');
  const delta = mode === 'a' ? supplied - v0 : supplied * t;
  const v = mode === 'a' ? supplied : v0 + delta;
  const a = mode === 'a' ? delta / t : supplied;
  if (![delta, v, a].every(Number.isFinite) || (mode === 'v' && supplied !== 0 && delta === 0) || (delta !== 0 && a === 0)) return fail(RANGE);
  // Prefer sum first when it is finite, avoiding loss from halving subnormal inputs.
  const sum = v0 + v;
  const average = Number.isFinite(sum) ? sum / 2 : v0 / 2 + v / 2;
  const displacement = sum === 0 ? 0 : [average * t, sum * (t / 2), v0 * (t / 2) + v * (t / 2)].find(x => Number.isFinite(x) && x !== 0) ?? NaN;
  let distance = Math.abs(displacement);
  if ((v0 < 0 && v > 0) || (v0 > 0 && v < 0)) {
    const high = Math.max(Math.abs(v0), Math.abs(v)), ratio = Math.min(Math.abs(v0), Math.abs(v)) / high;
    // Two triangular areas under |v(t)|, scaled before multiplying by time.
    distance = (high * ((1 + ratio * ratio) / (2 * (1 + ratio)))) * t;
    if (!Number.isFinite(distance) || distance === 0) distance = high * (t * ((1 + ratio * ratio) / (2 * (1 + ratio))));
  }
  if (![displacement, distance].every(Number.isFinite) || (average !== 0 && displacement === 0) || ((v0 !== 0 || v !== 0) && distance === 0)) return fail(RANGE);
  const q = (value: number, unit: string) => `${qty(value)} ${unit}`;
  return { primary: { label, value: mode === 'v' ? q(v, 'м/с') : q(a, 'м/с²') }, secondary: [
    { label: 'Изменение скорости', value: q(delta, 'м/с') },
    { label: 'Пройденный путь', value: q(distance, 'м') },
    { label: 'Перемещение', value: q(displacement, 'м') },
    { label: 'Время', value: q(t, 'с') },
  ] };
};
