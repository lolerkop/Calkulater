import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity, formatStatistic } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE } from '../../lib/platform/measurementScalar';

const C = 299792458;
export const compute: CalcFunction = (inputs) => {
  const beta = readScalar(inputs.beta), time = readScalar(inputs.properTime);
  const fail = (message: string) => ({ primary: { label: 'Замедленное время', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![beta, time].every(Number.isFinite)) return fail(INPUT);
  if (beta < 0) return fail('Доля скорости света не может быть отрицательной');
  if (!(beta < 1)) return fail('Достичь скорости света нельзя: доля должна быть меньше единицы');
  if (!(time > 0)) return fail('Собственное время должно быть больше нуля');
  const s = Math.sqrt((1 - beta) * (1 + beta)), gamma = 1 / s;
  const dilated = positiveRatio([time], [s]);
  // τ(γ−1)=τβ²/[s(1+s)]; subtraction of rounded near-equal times loses this difference.
  const difference = beta === 0 ? 0 : positiveRatio([time, beta, beta], [s, 1 + s]);
  const speed = beta === 0 ? 0 : positiveRatio([beta, C], []);
  if (![gamma, dilated].every(x => Number.isFinite(x) && x > 0) || !Number.isFinite(difference) || !Number.isFinite(speed)
    || (beta > 0 && (!(difference > 0) || !(speed > 0)))) return fail(RANGE);
  return { primary: { label: 'Замедленное время', value: `${formatQuantity(dilated, fmtNumber)} с` }, secondary: [
    { label: 'Множитель Лоренца', value: formatQuantity(gamma, fmtNumber) },
    { label: 'Длина от собственной', value: `${100 * s < 1e-4 ? formatQuantity(100 * s, fmtNumber) : formatStatistic(100 * s, fmtNumber)} %` },
    { label: 'Скорость', value: `${formatQuantity(speed, fmtNumber)} м/с` },
    { label: 'Разница во времени', value: `${formatQuantity(difference, fmtNumber)} с` },
  ] };
};
