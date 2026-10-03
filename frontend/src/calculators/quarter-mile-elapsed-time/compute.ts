import type { CalcFunction } from '../../lib/types';
import { cubeRootRatio, exact, finite, INPUT, measure, mul, positive, quotient, RANGE, read, times } from '../engine-displacement/automotiveNumeric';
// Explicit inherited empirical preset; no calibrated accuracy claim or automatic wheel/crank correction.
const LB_PER_KG = 2.2046226218, ET_K = 5.825, TRAP_K = 234, MILE_KM = 1.609344;
export const compute: CalcFunction = inputs => {
  const power = read(inputs.power), mass = read(inputs.mass);
  const fail = (message: string) => ({ primary: { label: 'Время четверти мили', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(power, mass)) return fail(INPUT);
  if (!(power > 0)) return fail('Мощность должна быть больше нуля');
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  const poundsExact = times(exact(mass), exact(LB_PER_KG)), pounds = quotient([mass, LB_PER_KG], [1]);
  const elapsed = mul(ET_K, cubeRootRatio(poundsExact, exact(power)));
  const mph = mul(TRAP_K, cubeRootRatio(exact(power), poundsExact)), speed = mul(mph, MILE_KM), specific = quotient([power, 1000], [mass]);
  if (!positive(pounds, elapsed, mph, speed, specific)) return fail(RANGE);
  return { primary: { label: 'Время четверти мили', value: `${measure(elapsed)} с` }, secondary: [
    { label: 'Скорость на финише', value: `${measure(speed)} км/ч` }, { label: 'Удельная мощность', value: `${measure(specific)} л.с./т` },
    { label: 'Масса в фунтах', value: `${measure(pounds)} фунт` }, { label: 'Скорость на финише в милях в час', value: `${measure(mph)} миль/ч` },
  ] };
};
