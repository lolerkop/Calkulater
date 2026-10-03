import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatQuantity, formatStatistic } from '../../lib/platform/measurement';
import { readScalar, positiveRatio } from '../../lib/platform/scaledPositiveRatio';
import { INPUT, RANGE } from '../../lib/platform/measurementScalar';

const BELOW = 'Ненулевое значение меньше числового диапазона';
const ABOVE = 'Значение выходит за числовой диапазон';
export const compute: CalcFunction = (inputs) => {
  const initial = readScalar(inputs.i1), d1 = readScalar(inputs.d1), d2 = readScalar(inputs.d2);
  const fail = (message: string) => ({ primary: { label: 'Интенсивность на новом расстоянии', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![initial, d1, d2].every(Number.isFinite)) return fail(INPUT);
  if (initial < 0) return fail('Исходная интенсивность не может быть отрицательной');
  if (!(d1 > 0)) return fail('Исходное расстояние должно быть больше нуля');
  if (!(d2 > 0)) return fail('Новое расстояние должно быть больше нуля');
  const result = positiveRatio([initial, d1, d1], [d2, d2]);
  if (!Number.isFinite(result) || (initial > 0 && !(result > 0))) return fail(RANGE);
  const factor = positiveRatio([d1, d1], [d2, d2]);
  const distanceRatio = positiveRatio([d2], [d1]);
  const percent = positiveRatio([100, d1, d1], [d2, d2]);
  const diagnostic = (x: number, digits: boolean) => !Number.isFinite(x) ? ABOVE : x === 0 ? BELOW
    : digits && x >= 1e-4 && x < 1e12 ? formatStatistic(x, fmtNumber) : formatQuantity(x, fmtNumber);
  return { primary: { label: 'Интенсивность на новом расстоянии', value: formatQuantity(result, fmtNumber) }, secondary: [
    { label: 'Во сколько раз изменилась', value: diagnostic(factor, false) },
    { label: 'Отношение расстояний', value: diagnostic(distanceRatio, false) },
    { label: 'В процентах от исходной', value: Number.isFinite(percent) && percent > 0 ? `${diagnostic(percent, true)} %` : diagnostic(percent, true) },
    { label: 'Исходная интенсивность', value: formatQuantity(initial, fmtNumber) },
  ] };
};
