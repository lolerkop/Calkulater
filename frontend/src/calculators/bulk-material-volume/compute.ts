import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, times, evaluated, mul, decimal, dproduct, dmul, ceilDecimal, reserveDecimal } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber } from '../../lib/format';

export const compute: CalcFunction = (inputs) => {
  const length = read(inputs.length);
  const width = read(inputs.width);
  const depth = read(inputs.depth);
  const density = read(inputs.density);
  const waste = read(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Нужно материала', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(length,width,depth,density,waste)) return fail(INPUT);
  if (!(length > 0) || !(width > 0)) return fail('Длина и ширина должны быть больше нуля');
  if (!(depth > 0)) return fail('Толщина слоя должна быть больше нуля');
  if (!(density > 0)) return fail('Насыпная плотность должна быть больше нуля');
  if (!(waste >= 0) || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const volumeD = times(exact(length),exact(width),exact(depth));
  const volume = evaluated(volumeD,exact(100));
  const needD = times(volumeD,add(exact(100),exact(waste)));
  const need = evaluated(needD,exact(10000));
  const massT = evaluated(times(needD,exact(density)),exact(10000));
  const bags = ceilDecimal(dmul(reserveDecimal(dproduct(length,width,depth),waste),dproduct(density,40)),decimal(100));
  const area = mul(length,width);
  if (!finite(volume,need,massT,bags,area)) return fail(RANGE);
  const q = (value: number, unit: string) => `${displayMeasure(value)} ${unit}`;

  return {
    primary: { label: 'Нужно материала', value: q(need, 'м³') },
    secondary: [
      { label: 'Чистый объём', value: q(volume, 'м³') },
      { label: 'Масса', value: q(massT, 'т') },
      { label: 'Мешков по 25 кг', value: `${fmtInt(bags)} шт` },
      { label: 'Площадь основания', value: q(area, 'м²') },
    ],
  };
};
