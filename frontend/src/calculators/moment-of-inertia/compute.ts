import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Момент инерции тела относительно оси.
//
// Это мера сопротивления ВРАЩЕНИЮ, и она зависит не только от массы, но и от
// того, как масса распределена: у кольца весь материал на радиусе, поэтому его
// момент вдвое больше, чем у диска той же массы и радиуса.
//
// Отличие от момента силы: тот считает вращающее ДЕЙСТВИЕ силы через плечо,
// здесь же считается свойство самого тела, к которому сила ещё не приложена.
const SHAPES: Record<string, { factor: number; label: string }> = {
  'rod-center': { factor: 1 / 12, label: 'стержень через центр' },
  'rod-end': { factor: 1 / 3, label: 'стержень через конец' },
  disk: { factor: 1 / 2, label: 'сплошной диск' },
  ring: { factor: 1, label: 'тонкое кольцо' },
  'sphere-solid': { factor: 2 / 5, label: 'сплошной шар' },
  'sphere-hollow': { factor: 2 / 3, label: 'полая сфера' },
};

export const compute: CalcFunction = (inputs) => {
  const shape = toStr(inputs.shape, 'disk');
  const mass = toNumber(inputs.m);
  const size = toNumber(inputs.r);
  const fail = (message: string) => ({
    primary: { label: 'Момент инерции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  const body = SHAPES[shape];
  if (!body) return fail('Неизвестное тело');
  if (!(mass > 0)) return fail('Масса должна быть больше нуля');
  if (!(size > 0)) return fail('Размер должен быть больше нуля');

  const inertia = body.factor * mass * size * size;
  return {
    primary: { label: 'Момент инерции', value: `${formatQuantity(inertia, fmtNumber)} кг·м²` },
    secondary: [
      { label: 'Масса', value: m(mass, 'кг') },
      { label: 'Размер', value: m(size, 'м') },
      { label: 'Радиус инерции', value: m(Math.sqrt(inertia / mass), 'м') },
      { label: 'Тело', value: body.label },
    ],
  };
};
