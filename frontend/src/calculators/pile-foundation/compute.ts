import { measure as displayMeasure, read, integer, finite, INPUT, RANGE, INTEGER, exact, add, times, evaluated } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const count = integer(inputs.count);
  const diameter = read(inputs.diameter);
  const depth = read(inputs.depth);
  const gl = read(inputs.grillageLength);
  const gw = read(inputs.grillageWidth);
  const gh = read(inputs.grillageHeight);
  const waste = read(inputs.waste);
  const fail = (message: string) => ({
    primary: { label: 'Объём бетона', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(diameter,depth,gl,gw,gh,waste)) return fail(INPUT);
  if (!finite(count)) return fail(INTEGER);
  if (!Number.isInteger(count) || count < 1) return fail('Свай должно быть не меньше одной');
  if (!(diameter > 0) || !(depth > 0)) return fail('Диаметр и глубина сваи должны быть больше нуля');
  if (gl < 0 || gw < 0 || gh < 0) return fail('Размеры ростверка не могут быть отрицательными');
  if (waste < 0 || waste > 50) return fail('Запас должен быть от 0 до 50 %');

  const oneD = times(exact(Math.PI),exact(diameter),exact(diameter),exact(depth));
  const pilesD = times(oneD,exact(count));
  const grillageD = times(exact(gl),exact(gw),exact(gh),exact(4));
  const netD = add(pilesD,grillageD);
  const one = evaluated(oneD,exact(4));
  const piles = evaluated(pilesD,exact(4));
  const grillage = evaluated(grillageD,exact(4));
  const net = evaluated(netD,exact(4));
  const total = evaluated(times(netD,add(exact(100),exact(waste))),exact(400));
  const allowance = evaluated(times(netD,exact(waste)),exact(400));
  if (!finite(one,piles,grillage,net,total,allowance)) return fail(RANGE);
  const measure = (x: number) => displayMeasure(x);

  return {
    primary: { label: 'Объём бетона', value: `${measure(total)} м³` },
    secondary: [
      { label: 'Объём свай', value: `${measure(piles)} м³` },
      { label: 'Объём ростверка', value: `${measure(grillage)} м³` },
      { label: 'Чистый объём', value: `${measure(net)} м³` },
      { label: 'Запас', value: `${measure(allowance)} м³` },
      { label: 'Объём одной сваи', value: `${measure(one)} м³` },
    ],
  };
};
