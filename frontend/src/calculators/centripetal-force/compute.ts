import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Центростремительная сила при движении по окружности.
//
//   F = m · v² / r        сила, направленная к центру
//   a = v² / r            центростремительное ускорение
//   ω = v / r             угловая скорость
//   T = 2πr / v           период полного оборота
//
// Квадрат скорости — главное практическое следствие: удвоение скорости в
// повороте учетверяет требуемую силу, а радиус входит в первой степени.
// Поэтому вписаться в вдвое более крутой поворот проще, чем проехать тот же
// поворот вдвое быстрее.
//
// Период при нулевой скорости не определён — оборот не завершится никогда, —
// и строка не выводится. Сама нулевая скорость законна: это неподвижное тело,
// и нулевая сила для него верный ответ.
export const compute: CalcFunction = (inputs) => {
  const m = toNumber(inputs.m);
  const v = toNumber(inputs.v);
  const r = toNumber(inputs.r);

  const fail = (message: string) => ({
    primary: { label: 'Центростремительная сила', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(m > 0)) return fail('Масса должна быть больше нуля');
  if (!(r > 0)) return fail('Радиус должен быть больше нуля');

  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Центростремительная сила', value: q((m * v * v) / r, 'Н') },
    secondary: [
      { label: 'Центростремительное ускорение', value: q((v * v) / r, 'м/с²') },
      { label: 'Угловая скорость', value: q(v / r, 'рад/с') },
      ...(v !== 0 ? [{ label: 'Период обращения', value: q((2 * Math.PI * r) / v, 'с') }] : []),
    ],
  };
};
