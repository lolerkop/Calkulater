import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Scalar magnitudes of net force and acceleration for constant positive mass.
// Standard gravity is a conventional reference, not a location-specific measurement.
const G = 9.80665;
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'm' ? 'Масса' : mode === 'a' ? 'Ускорение' : 'Сила';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'F' && mode !== 'm' && mode !== 'a') return fail(MODE);
  let m: number, a: number, f: number;
  if (mode === 'F') {
    m = read(inputs.m); a = read(inputs.a);
    if (![m, a].every(Number.isFinite)) return fail(INPUT);
    if (!(m > 0)) return fail('Масса должна быть больше нуля');
    if (a < 0) return fail('Ускорение не может быть отрицательным');
    f = m * a;
  } else if (mode === 'm') {
    f = read(inputs.F); a = read(inputs.a2);
    if (![f, a].every(Number.isFinite)) return fail(INPUT);
    if (!(f > 0)) return fail('Для положительной массы сила и ускорение должны быть больше нуля');
    if (!(a > 0)) return fail('Ускорение должно быть больше нуля, иначе масса не определена');
    m = f / a;
  } else {
    f = read(inputs.F2); m = read(inputs.m2);
    if (![f, m].every(Number.isFinite)) return fail(INPUT);
    if (f < 0) return fail('Сила не может быть отрицательной');
    if (!(m > 0)) return fail('Масса должна быть больше нуля, иначе ускорение не определено');
    a = f / m;
  }
  const weight = m * G;
  if (![m, a, f, weight].every(Number.isFinite) || !(m > 0) || (mode === 'F' && a > 0 && f === 0) || (mode === 'a' && f > 0 && a === 0) || weight === 0) return fail(RANGE);
  return { primary: { label, value: mode === 'F' ? `${qty(f)} Н` : mode === 'm' ? `${qty(m)} кг` : `${qty(a)} м/с²` }, secondary: [
    { label: 'Сила', value: `${qty(f)} Н` }, { label: 'Масса', value: `${qty(m)} кг` }, { label: 'Ускорение', value: `${qty(a)} м/с²` },
    { label: 'Вес у поверхности Земли', value: `${qty(weight)} Н` },
  ] };
};
