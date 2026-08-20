import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Ромб по диагоналям. Диагонали ромба пересекаются под прямым углом и делятся
// пополам, поэтому сторона — это гипотенуза треугольника с катетами d₁/2 и d₂/2,
// а площадь равна половине их произведения.
//
// Высота выводится из площади: h = S/a. Считать её через синус угла не нужно —
// угол здесь неизвестен, а площадь уже посчитана точно.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const d1 = toNumber(inputs.d1);
  const d2 = toNumber(inputs.d2);
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(d1 > 0) || !(d2 > 0)) return fail('Обе диагонали должны быть больше нуля');

  const area = (d1 * d2) / 2;
  const side = Math.hypot(d1 / 2, d2 / 2);

  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Сторона', value: `${dim(side)} ${unit}` },
      { label: 'Периметр', value: `${dim(4 * side)} ${unit}` },
      { label: 'Высота', value: `${dim(area / side)} ${unit}` },
    ],
  };
};
