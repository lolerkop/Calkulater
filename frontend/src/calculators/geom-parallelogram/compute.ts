import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, lengthSymbol, sinDegrees } from '../../lib/platform/measurement';

// Параллелограмм: площадь по основанию и высоте либо по двум сторонам и углу.
//
// Угол приходит в ГРАДУСАХ, а Math.sin принимает РАДИАНЫ: перевод сделан явно.
// Синус, обратившийся в машинный нуль, приравнивается к точному нулю — иначе
// развёрнутый угол дал бы площадь 1,2·10⁻¹⁵ вместо честного отказа: при 0° и 180°
// параллелограмм вырождается в отрезок, и фигуры не существует.
//
// В режиме по высоте периметр неизвестен: вторая сторона из основания и высоты
// не выводится, и вместо правдоподобного числа выводится прочерк.

const dim = (value: number): string => formatMeasure(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const unit = lengthSymbol(toStr(inputs.unit, 'cm'));
  const mode = toStr(inputs.mode, 'height');
  const a = toNumber(inputs.a);
  const fail = (message: string) => ({
    primary: { label: 'Площадь', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(a > 0)) return fail('Сторона должна быть больше нуля');

  if (mode === 'sides') {
    const b = toNumber(inputs.b);
    const angle = toNumber(inputs.angle);
    if (!(b > 0)) return fail('Вторая сторона должна быть больше нуля');
    if (!(angle > 0) || angle >= 180) return fail('Угол должен быть больше 0 и меньше 180 градусов');
    const sin = sinDegrees(angle);
    if (sin === 0) return fail('При таком угле параллелограмм вырождается в отрезок');
    const cos = Math.cos((angle * Math.PI) / 180);
    return {
      primary: { label: 'Площадь', value: `${dim(a * b * sin)} ${unit}²` },
      secondary: [
        { label: 'Периметр', value: `${dim(2 * (a + b))} ${unit}` },
        { label: 'Высота к стороне a', value: `${dim(b * sin)} ${unit}` },
        { label: 'Большая диагональ', value: `${dim(Math.sqrt(a * a + b * b + 2 * a * b * Math.abs(cos)))} ${unit}` },
        { label: 'Меньшая диагональ', value: `${dim(Math.sqrt(a * a + b * b - 2 * a * b * Math.abs(cos)))} ${unit}` },
      ],
    };
  }

  const h = toNumber(inputs.h);
  if (!(h > 0)) return fail('Высота должна быть больше нуля');
  return {
    primary: { label: 'Площадь', value: `${dim(a * h)} ${unit}²` },
    secondary: [
      // Вторая сторона из основания и высоты не следует, поэтому периметра нет.
      { label: 'Периметр', value: '—' },
      { label: 'Основание', value: `${dim(a)} ${unit}` },
      { label: 'Высота', value: `${dim(h)} ${unit}` },
    ],
  };
};
