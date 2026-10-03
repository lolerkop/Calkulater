import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE } from '../../lib/platform/measurementScalar';

// Rounded Coulomb constant from CODATA2022 vacuum permittivity; not an exact SI defining constant.
const K = 8.9875517862e9;
const BELOW = 'Ненулевое значение меньше числового диапазона';
const ABOVE = 'Значение выходит за числовой диапазон';
export const compute: CalcFunction = (inputs) => {
  const q1 = readScalar(inputs.q1), q2 = readScalar(inputs.q2), r = readScalar(inputs.r);
  const fail = (message: string) => ({ primary: { label: 'Сила взаимодействия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![q1, q2, r].every(Number.isFinite)) return fail(INPUT);
  if (!(r > 0)) return fail('Расстояние должно быть больше нуля');
  const force = positiveRatio([K, Math.abs(q1), Math.abs(q2), 1e-9, 1e-9], [r, r, .01, .01]);
  const zero = q1 === 0 || q2 === 0, sign = Math.sign(q1) * Math.sign(q2);
  if (!Number.isFinite(force) || (!zero && !(force > 0))) return fail(RANGE);
  const field = positiveRatio([K, Math.abs(q1), 1e-9], [r, r, .01, .01]);
  const potential = sign * positiveRatio([K, Math.abs(q1), Math.abs(q2), 1e-9, 1e-9], [r, .01]);
  const diagnostic = (x: number, nonzero: boolean, unit: string) => Number.isFinite(x)
    ? (x === 0 && nonzero ? BELOW : `${formatQuantity(x === 0 ? 0 : x, fmtNumber)} ${unit}`) : ABOVE;
  return { primary: { label: 'Сила взаимодействия', value: `${formatQuantity(force, fmtNumber)} Н` }, secondary: [
    { label: 'Характер', value: zero ? 'Нет силы взаимодействия' : sign < 0 ? 'притяжение' : 'отталкивание' },
    { label: 'Напряжённость поля первого заряда', value: diagnostic(field, q1 !== 0, 'В/м') },
    { label: 'Потенциальная энергия', value: diagnostic(potential, !zero, 'Дж') },
    { label: 'Расстояние', value: `${formatQuantity(r, fmtNumber)} см` },
  ] };
};
