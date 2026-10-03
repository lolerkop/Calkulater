import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE, MODE } from '../../lib/platform/measurementScalar';

const BELOW = 'Ненулевое значение меньше числового диапазона';
const ABOVE = 'Значение выходит за числовой диапазон';
const diagnostic = (x: number, nonzero: boolean, unit = '') => Number.isFinite(x)
  ? (x === 0 && nonzero ? BELOW : `${formatQuantity(x === 0 ? 0 : x, fmtNumber)}${unit ? ' ' + unit : ''}`) : ABOVE;
// Combine binary mass scale with the decay before rounding. A subnormal
// attenuation factor by itself can lose most of its significant digits even
// when the final remaining mass is an ordinary finite number.
const remainingMass = (initial: number, periods: number): number => {
  if (!Number.isFinite(periods)) return 0;
  const massExponent = Math.min(1023, Math.floor(Math.log2(initial)));
  const mantissa = initial / (2 ** massExponent);
  const integerPeriods = Math.floor(periods);
  const attenuatedMantissa = mantissa * (2 ** -(periods - integerPeriods));
  const exponent = massExponent - integerPeriods;
  if (exponent < -1075) return 0;
  return exponent < -1022
    ? (attenuatedMantissa * (2 ** (exponent + 1074))) * Number.MIN_VALUE
    : attenuatedMantissa * (2 ** exponent);
};
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'remaining' : inputs.mode;
  const initial = readScalar(inputs.n0), half = readScalar(inputs.half);
  const fail = (message: string) => ({ primary: { label: mode === 'time' ? 'Время' : 'Остаток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'remaining' && mode !== 'time') return fail(MODE);
  if (![initial, half].every(Number.isFinite)) return fail(INPUT);
  if (!(half > 0)) return fail('Период полураспада должен быть больше нуля');
  if (!(initial > 0)) return fail('Исходное количество должно быть больше нуля');
  const meanLife = positiveRatio([half], [Math.LN2]);
  if (mode === 'remaining') {
    const time = readScalar(inputs.t);
    if (!Number.isFinite(time)) return fail(INPUT);
    if (time < 0) return fail('Время не может быть отрицательным');
    const periods = positiveRatio([time], [half]);
    const x = periods * Math.LN2;
    const remaining = time === 0 ? initial : remainingMass(initial, periods);
    if (!Number.isFinite(remaining) || !(remaining > 0)) return fail(RANGE);
    // expm1 avoids cancellation. In the tiny-x branch scale before multiplying,
    // using its analytic limit when x itself cannot be represented.
    const correction = x === 0 ? 1 : -Math.expm1(-x) / x;
    const decayed = time === 0 ? 0 : periods < 1e-8
      ? positiveRatio([initial, time, Math.LN2, correction], [half])
      : positiveRatio([initial, -Math.expm1(-x)], []);
    const percent = remainingMass(100, periods);
    return { primary: { label: 'Остаток', value: `${formatQuantity(remaining, fmtNumber)} г` }, secondary: [
      { label: 'Распалось', value: diagnostic(decayed, time > 0, 'г') },
      { label: 'Осталось доли', value: diagnostic(percent, true, '%') },
      { label: 'Периодов полураспада прошло', value: diagnostic(periods, time > 0) },
      { label: 'Среднее время жизни', value: diagnostic(meanLife, true, 'лет') },
    ] };
  }
  const left = readScalar(inputs.left);
  if (!Number.isFinite(left)) return fail(INPUT);
  if (!(left > 0)) return fail('Остаток должен быть больше нуля');
  if (left > initial) return fail('Остаток не может превышать исходное количество');
  const differenceRatio = positiveRatio([initial - left], [left]);
  const logRatio = Number.isFinite(differenceRatio) ? Math.log1p(differenceRatio) : Math.log(initial) - Math.log(left);
  const waited = positiveRatio([half, logRatio], [Math.LN2]);
  if (!Number.isFinite(waited) || (left < initial && !(waited > 0))) return fail(RANGE);
  const periods = positiveRatio([logRatio], [Math.LN2]), percent = positiveRatio([left, 100], [initial]);
  return { primary: { label: 'Время', value: `${formatQuantity(waited, fmtNumber)} лет` }, secondary: [
    { label: 'Периодов полураспада', value: diagnostic(periods, left < initial) },
    { label: 'Осталось доли', value: diagnostic(percent, true, '%') },
    { label: 'Распалось', value: `${formatQuantity(initial - left, fmtNumber)} г` },
    { label: 'Среднее время жизни', value: diagnostic(meanLife, true, 'лет') },
  ] };
};
