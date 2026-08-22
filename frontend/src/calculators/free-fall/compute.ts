import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Свободное падение без сопротивления воздуха.
//
// Решается с двух концов: по высоте — сколько лететь и с какой скоростью
// ударится, по времени — какую высоту пролетит. Ускорение вынесено в поле,
// потому что на Луне и на Марсе оно другое, а формула та же.
//
// Допущение названо прямо: сопротивление воздуха не учитывается. Для камня с
// десяти метров это почти точно, для листа бумаги — неверно совсем, и разница
// растёт с высотой: у настоящего парашютиста скорость выходит на предельную и
// дальше не растёт вовсе.
export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'fromHeight');
  const height = toNumber(inputs.h);
  const time = toNumber(inputs.t);
  const g = toNumber(inputs.g);
  const fail = (message: string) => ({
    primary: { label: 'Скорость у земли', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  if (!(g > 0)) return fail('Ускорение свободного падения должно быть больше нуля');
  let fallTime: number;
  let fallHeight: number;
  if (mode === 'fromTime') {
    if (!(time > 0)) return fail('Время падения должно быть больше нуля');
    fallTime = time;
    fallHeight = (g * time * time) / 2;
  } else {
    if (!(height > 0)) return fail('Высота должна быть больше нуля');
    fallHeight = height;
    fallTime = Math.sqrt((2 * height) / g);
  }
  const speed = g * fallTime;

  return {
    // Главный ответ один в обоих режимах: с какой скоростью тело встретит
    // землю. Режим меняет то, что ИЗВЕСТНО, а не то, о чём спрашивают.
    primary: { label: 'Скорость у земли', value: m(speed, 'м/с') },
    secondary: [
      { label: 'Время падения', value: m(fallTime, 'с') },
      { label: 'Высота падения', value: m(fallHeight, 'м') },
      { label: 'В километрах в час', value: m(speed * 3.6, 'км/ч') },
      { label: 'Кинетическая энергия на килограмм', value: m((speed * speed) / 2, 'Дж/кг') },
    ],
  };
};
