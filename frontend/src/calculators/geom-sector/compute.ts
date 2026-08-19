import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol, sinDegrees } from '../../lib/platform/measurement';

// Сектор круга: площадь, длина дуги и хорда.
//
// Угол приходит в ГРАДУСАХ и переводится в радианы явно: формулы площади и дуги
// работают только с радианной мерой.
//
// Хорда полного круга обязана быть РОВНО нулём. sin(π) в двоичной арифметике
// даёт 1,22·10⁻¹⁶, и показать это как длину хорды значило бы выдать шум за
// измеримую величину — поэтому машинный нуль приравнивается к точному.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const radius = toNumber(inputs.radius);
  const angle = toNumber(inputs.angle);
  const fail = (message: string) => ({
    primary: { label: 'Площадь сектора', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(radius > 0)) return fail('Радиус должен быть больше нуля');
  if (!(angle > 0)) return fail('Угол должен быть больше нуля');
  if (angle > 360) return fail('Угол сектора не может превышать 360 градусов');

  const rad = (angle * Math.PI) / 180;
  return {
    primary: { label: 'Площадь сектора', value: `${dim(0.5 * radius * radius * rad)} ${unit}²` },
    secondary: [
      { label: 'Длина дуги', value: `${dim(radius * rad)} ${unit}` },
      { label: 'Хорда', value: `${dim(2 * radius * sinDegrees(angle / 2))} ${unit}` },
      { label: 'Периметр сектора', value: `${dim(radius * rad + 2 * radius)} ${unit}` },
      { label: 'Доля круга', value: `${fmtNumber((angle / 360) * 100, 2)}%` },
    ],
  };
};
