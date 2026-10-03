import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, sinDegrees } from '../../lib/platform/measurement';

// Силы на наклонной плоскости.
//
// Вес раскладывается на две составляющие: скатывающую вдоль склона m·g·sin α и
// прижимающую поперёк m·g·cos α. Косинус берётся как sinDegrees(90 − α) — тем
// же выпущенным помощником с его порогом машинного нуля, чтобы на вертикали
// нормальная сила выходила РОВНО нулевой, а не 6·10⁻¹⁷.
//
// Направление вниз положительно. Модель описывает УЖЕ скользящее вниз тело
// и коэффициент трения скольжения. Отрицательные сила и ускорение означают
// замедление до остановки, а не трение покоя или запас устойчивости.
const G = 9.80665;
const MAX_ANGLE = 90;

export const compute: CalcFunction = (inputs) => {
  const m = toNumber(inputs.m, Number.NaN);
  const angle = toNumber(inputs.angle, Number.NaN);
  const mu = toNumber(inputs.mu, Number.NaN);
  const fail = (message: string) => ({
    primary: { label: 'Скатывающая сила', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (['m', 'angle', 'mu'].some((key) => typeof inputs[key] === 'boolean') || ![m, angle, mu].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (!(m > 0)) return fail('Масса должна быть больше нуля');
  if (!(angle >= 0) || !(angle <= MAX_ANGLE)) return fail('Угол наклона задаётся от 0 до 90 градусов');
  if (!(mu >= 0)) return fail('Коэффициент трения не может быть отрицательным');

  const weight = m * G;
  const along = weight * sinDegrees(angle);
  const normal = weight * sinDegrees(MAX_ANGLE - angle);
  const friction = mu * normal;
  const net = along - friction;
  if (![along, normal, friction, net, net / m].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');
  const measure = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Скатывающая сила', value: measure(along, 'Н') },
    secondary: [
      { label: 'Сила нормального давления', value: measure(normal, 'Н') },
      { label: 'Сила трения', value: measure(friction, 'Н') },
      { label: 'Равнодействующая', value: measure(net, 'Н') },
      { label: 'Ускорение', value: measure(net / m, 'м/с²') },
    ],
  };
};
