import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol } from '../../lib/platform/measurement';

// Правильный многоугольник: равные стороны, равные углы.
//
// Тангенс берётся от РАДИАН (π / n), а внутренний угол выводится в ГРАДУСАХ.
// Смешение этих двух мер — классическая ошибка, поэтому перевод сделан явно
// и в одном месте.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const n = toNumber(inputs.n);
  const side = toNumber(inputs.side);
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!Number.isInteger(n)) return fail('Число сторон должно быть целым');
  if (!(n >= 3)) return fail('Сторон должно быть не меньше трёх');
  if (!(side > 0)) return fail('Длина стороны должна быть больше нуля');

  const tan = Math.tan(Math.PI / n);
  const area = (n * side * side) / (4 * tan);
  const apothem = side / (2 * tan);
  const interiorDegrees = ((n - 2) * 180) / n;

  return {
    primary: { label: 'Площадь', value: `${dim(area)} ${unit}²` },
    secondary: [
      { label: 'Периметр', value: `${dim(n * side)} ${unit}` },
      { label: 'Апофема', value: `${dim(apothem)} ${unit}` },
      { label: 'Внутренний угол', value: `${dim(interiorDegrees)}°` },
    ],
  };
};
