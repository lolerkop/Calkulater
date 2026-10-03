import type { CalcFunction } from '../../lib/types';
import { read, qty, RANGE, INPUT, MODE } from '../../lib/platform/measurementScalar';



// Non-negative average mass density of a positive volume, with fixed SI inputs.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode;
  const label = mode === 'm' ? 'Масса' : mode === 'V' ? 'Объём' : 'Плотность';
  const fail = (message: string) => ({ primary: { label, value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'rho' && mode !== 'm' && mode !== 'V') return fail(MODE);
  let m: number, v: number, rho: number;
  if (mode === 'rho') {
    m = read(inputs.m); v = read(inputs.V);
    if (![m, v].every(Number.isFinite)) return fail(INPUT);
    if (m < 0) return fail('Масса не может быть отрицательной');
    if (!(v > 0)) return fail('Объём должен быть больше нуля');
    rho = m / v;
  } else if (mode === 'm') {
    rho = read(inputs.rho); v = read(inputs.V2);
    if (![rho, v].every(Number.isFinite)) return fail(INPUT);
    if (rho < 0) return fail('Плотность не может быть отрицательной');
    if (!(v > 0)) return fail('Объём должен быть больше нуля');
    m = rho * v;
  } else {
    m = read(inputs.m2); rho = read(inputs.rho2);
    if (![m, rho].every(Number.isFinite)) return fail(INPUT);
    if (!(m > 0)) return fail('Для положительного объёма масса и плотность должны быть больше нуля');
    if (!(rho > 0)) return fail('Плотность должна быть больше нуля');
    v = m / rho;
  }
  const grams = rho / 1000;
  if (![m, v, rho, grams].every(Number.isFinite) || !(v > 0) || (mode === 'rho' && m > 0 && rho === 0) || (mode === 'm' && rho > 0 && m === 0) || (rho > 0 && grams === 0)) return fail(RANGE);
  return { primary: { label, value: mode === 'rho' ? `${qty(rho)} кг/м³` : mode === 'm' ? `${qty(m)} кг` : `${qty(v)} м³` }, secondary: [
    { label: 'Плотность', value: `${qty(rho)} кг/м³` }, { label: 'Масса', value: `${qty(m)} кг` }, { label: 'Объём', value: `${qty(v)} м³` }, { label: 'В граммах на кубический сантиметр', value: `${qty(grams)} г/см³` },
  ] };
};
