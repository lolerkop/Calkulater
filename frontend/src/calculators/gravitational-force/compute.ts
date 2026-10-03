import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite } from '../../lib/platform/electronicsNumericInput';
// Retain the established rounded constant: it is not the exact SI value of G.
const G = 6.674e-11;
export const compute: CalcFunction = inputs => {
  const m1 = read(inputs.m1), m2 = read(inputs.m2), r = read(inputs.r);
  const fail = (value: string) => ({ primary: { label: 'Сила притяжения', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  if (!finite(m1, m2, r)) return fail(INPUT);
  if (!(m1 > 0)) return fail('Первая масса должна быть больше нуля');
  if (!(m2 > 0)) return fail('Вторая масса должна быть больше нуля');
  if (!(r > 0)) return fail('Расстояние должно быть больше нуля');
  const denominator = times(exact(r), exact(r));
  const force = evaluated(times(exact(G), exact(m1), exact(m2)), denominator);
  const acceleration = evaluated(times(exact(G), exact(m2)), denominator);
  if (!finite(force, acceleration)) return fail(RANGE);
  return { primary: { label: 'Сила притяжения', value: `${qty(force)} Н` }, secondary: [
    { label: 'Ускорение первого тела', value: `${qty(acceleration)} м/с²` }, { label: 'Расстояние', value: `${qty(r)} м` },
  ] };
};
