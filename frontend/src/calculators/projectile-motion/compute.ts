import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, sinDegrees } from '../../lib/platform/measurement';

// Бросок под углом с произвольной высоты. g = 9,80665 м/с² — точное значение СИ.
//
//   vy = v·sin α        vx = v·cos α
//   t  = (vy + √(vy² + 2gh)) / g        полное время до земли
//   L  = vx · t                          дальность
//   h_max = h + vy² / (2g)               высшая точка
//
// Сопротивление воздуха не моделируется: для плотного тела на скоростях
// нескольких десятков метров в секунду поправка невелика, но для мяча или
// оперённого снаряда она значительна, и страница об этом говорит прямо.
//
// Косинус 90° в двоичной арифметике равен 6,1·10⁻¹⁷, а не нулю, и дальность
// вертикального броска вышла бы 1,2·10⁻¹⁵ м вместо ровно нуля. Порог тот же,
// что у общего `sinDegrees`: величина меньше 10⁻¹² — машинный нуль.
const g = 9.80665;
const cosDegrees = (degrees: number): number => {
  const value = Math.cos((degrees * Math.PI) / 180);
  return Math.abs(value) < 1e-12 ? 0 : value;
};

export const compute: CalcFunction = (inputs) => {
  const v0 = toNumber(inputs.v0);
  const angle = toNumber(inputs.angle);
  const h0 = toNumber(inputs.h0);
  const fail = (message: string) => ({
    primary: { label: 'Дальность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(v0 > 0)) return fail('Начальная скорость должна быть больше нуля');
  if (!(angle >= 0) || angle > 90) return fail('Угол должен быть от 0 до 90 градусов');
  if (!(h0 >= 0)) return fail('Высота броска не может быть отрицательной');

  const vy = v0 * sinDegrees(angle);
  const vx = v0 * cosDegrees(angle);
  const time = (vy + Math.sqrt(vy * vy + 2 * g * h0)) / g;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Дальность', value: q(vx * time, 'м') },
    secondary: [
      { label: 'Время полёта', value: q(time, 'с') },
      { label: 'Высшая точка', value: q(h0 + (vy * vy) / (2 * g), 'м') },
      { label: 'Горизонтальная составляющая', value: q(vx, 'м/с') },
      { label: 'Вертикальная составляющая', value: q(vy, 'м/с') },
      { label: 'Время до высшей точки', value: q(vy / g, 'с') },
    ],
  };
};
