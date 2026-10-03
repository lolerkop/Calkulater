import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, times, negative, evaluated, mul } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';

const MAX_BALUSTERS = 10000;

export const compute: CalcFunction = (inputs) => {
  const run = read(inputs.run);
  const width = read(inputs.baluster_width);
  const maxGap = read(inputs.max_gap);
  const fail = (message: string) => ({
    primary: { label: 'Балясин', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(run,width,maxGap)) return fail(INPUT);
  if (!(run > 0)) return fail('Пролёт должен быть больше нуля');
  if (!(width > 0)) return fail('Ширина стойки должна быть больше нуля');
  if (!(maxGap > 0)) return fail('Предельный просвет должен быть больше нуля');
  if (width >= run) return fail('Стойка не может быть шире пролёта');

  let count = 1;
  let clear = add(exact(run),negative(times(exact(count),exact(width))));
  while (add(clear,negative(times(exact(count+1),exact(maxGap)))).coefficient > 0n) {
    count += 1;
    if (count > MAX_BALUSTERS) return fail('Пролёт слишком велик для такого просвета');
    clear = add(exact(run),negative(times(exact(count),exact(width))));
    if (clear.coefficient <= 0n) return fail('При таком просвете стойки не помещаются в пролёт');
  }

  const gap = evaluated(clear,exact(count+1));
  const pitch = evaluated(add(exact(run),exact(width)),exact(count+1));
  const occupied = mul(count,width);
  if (!finite(gap,pitch,occupied)) return fail(RANGE);
  const m = (value: number, unit: string) => `${displayMeasure(value)} ${unit}`;
  return {
    primary: { label: 'Балясин', value: `${fmtInt(count)} шт` },
    secondary: [
      { label: 'Фактический просвет', value: m(gap, 'мм') },
      { label: 'Шаг между осями', value: m(pitch, 'мм') },
      { label: 'Суммарная ширина стоек', value: m(occupied, 'мм') },
      { label: 'Просветов', value: `${fmtInt(count + 1)} шт` },
    ],
  };
};
