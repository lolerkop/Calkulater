import type { CalcFunction } from '../../lib/types';
import { fmtNumber as ordinaryNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Geometric comparison at chosen horizontal angles 40° and 30°.
// One-pixel angular size 1′ is a modelling assumption, not a vision guarantee.
const CM_IN_INCH = 2.54;
const THX_ANGLE = 40;
const SMPTE_ANGLE = 30;
const ARCMIN_IN_RADIAN = 3438;
const CM_IN_M = 100;

const RATIOS: Record<string, [number, number]> = {
  '16:9': [16, 9],
  '21:9': [21, 9],
  '4:3': [4, 3],
};

import { read, INPUT, RANGE } from '../../lib/platform/measurementScalar';
import { integerInput } from '../../lib/platform/strictNumericInput';
import { exact, times, ratio as divide } from '../../lib/platform/geometryNumericInput';

const fmtNumber = (value: number, digits = 2): string => value !== 0 && Math.abs(value) < 0.5 * 10 ** -digits ? value.toExponential(3).replace('.', ',') : ordinaryNumber(value, digits);

export const compute: CalcFunction = (inputs) => {
  const diagonal = read(inputs.diag);
  const ratio = (typeof inputs.ratio === 'string' ? inputs.ratio : inputs.ratio === undefined ? '16:9' : '');
  const lines = integerInput(inputs.lines) ?? NaN;
  const fail = (message: string) => ({
    primary: { label: 'Расстояние при угле 40°', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const shape = Object.hasOwn(RATIOS, ratio) ? RATIOS[ratio] : null;
  if (!shape) return fail('Выберите пропорцию экрана из списка');
  if (![diagonal, lines].every(Number.isFinite)) return fail(INPUT);
  if (!(diagonal > 0)) return fail('Диагональ должна быть больше нуля');
  if (!(lines > 0)) return fail('Число строк разрешения должно быть больше нуля');

  const [wRatio, hRatio] = shape;
  const diagonalCm = diagonal * CM_IN_INCH;
  const norm = Math.sqrt(wRatio * wRatio + hRatio * hRatio);
  const width = divide(times(exact(diagonal), exact(CM_IN_INCH), exact(wRatio)), exact(norm));
  const height = divide(times(exact(diagonal), exact(CM_IN_INCH), exact(hRatio)), exact(norm));
  const thx = width / 2 / Math.tan((THX_ANGLE / 2) * (Math.PI / 180));
  const smpte = width / 2 / Math.tan((SMPTE_ANGLE / 2) * (Math.PI / 180));
  const pixel = height / lines;
  const sharp = divide(times(exact(height), exact(ARCMIN_IN_RADIAN)), times(exact(lines), exact(CM_IN_M)));
  if (![width, height, thx / CM_IN_M, smpte / CM_IN_M, sharp].every(v => Number.isFinite(v) && v > 0)) return fail(RANGE);

  return {
    primary: { label: 'Расстояние при угле 40°', value: `${formatMeasure(thx / CM_IN_M, fmtNumber)} м` },
    secondary: [
      { label: 'Расстояние при угле 30°', value: `${formatMeasure(smpte / CM_IN_M, fmtNumber)} м` },
      { label: 'Ширина экрана', value: `${formatMeasure(width, fmtNumber)} см` },
      { label: 'Высота экрана', value: `${formatMeasure(height, fmtNumber)} см` },
      { label: 'Оценка для углового размера 1′', value: `${formatMeasure(sharp, fmtNumber)} м` },
    ],
  };
};
