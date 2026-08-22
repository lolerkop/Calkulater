import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Вторая космическая скорость: v = √(2GM/r).
//
// Единицы полей выбраны НЕ произвольно. Масса Земли в килограммах равна
// 5,972·10²⁴, а `String(number)` в JavaScript при |x| ≥ 10²¹ переходит на
// показательную запись, которую разбор поля не принимает: адрес обмена,
// сброс формы и восстановление состояния сломались бы на первом же вводе.
// Поэтому масса задаётся в 10²⁴ кг, а радиус в километрах — и то и другое
// остаётся обычным десятичным числом. Парсер при этом не менялся.
//
// Отличие от силы притяжения: та считает взаимодействие ДВУХ тел на
// расстоянии. Здесь одно тело и вопрос «с какой скоростью нужно бросить,
// чтобы не вернулось» — величина, зависящая только от массы и радиуса
// притягивающего тела, но не от массы самого снаряда.
const G = 6.6743e-11;
const MASS_UNIT = 1e24;
const KM = 1000;

export const compute: CalcFunction = (inputs) => {
  const mass24 = toNumber(inputs.mass24);
  const radiusKm = toNumber(inputs.radiusKm);
  const fail = (message: string) => ({
    primary: { label: 'Вторая космическая скорость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(mass24 > 0)) return fail('Масса должна быть больше нуля');
  if (!(radiusKm > 0)) return fail('Радиус должен быть больше нуля');

  const mass = mass24 * MASS_UNIT;
  const radius = radiusKm * KM;
  const escape = Math.sqrt((2 * G * mass) / radius);
  const orbital = Math.sqrt((G * mass) / radius);

  const q = (value: number, unit: string) => `${formatQuantity(value, fmtNumber)} ${unit}`;
  return {
    primary: { label: 'Вторая космическая скорость', value: q(escape, 'м/с') },
    secondary: [
      { label: 'Первая космическая скорость', value: q(orbital, 'м/с') },
      { label: 'В километрах в час', value: q(escape * 3.6, 'км/ч') },
      { label: 'Ускорение свободного падения', value: `${formatMeasure((G * mass) / (radius * radius), fmtNumber)} м/с²` },
      { label: 'Масса тела', value: `${formatMeasure(mass24, fmtNumber)}·10²⁴ кг` },
    ],
  };
};
