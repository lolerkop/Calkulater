import { measure as displayMeasure, read, integer, finite, INPUT, RANGE, INTEGER, exact, times, evaluated, scalar } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


const m3 = (value: number): string => `${displayMeasure(value)} м³`;

export const compute: CalcFunction = (inputs) => {
  const length = read(inputs.length);
  const width = read(inputs.width);
  const thickness = read(inputs.thickness);
  const count = integer(inputs.count);
  const price = inputs.pricePerM3 === undefined ? 0 : read(inputs.pricePerM3);
  const fail = (message: string) => ({
    primary: { label: 'Общий объём', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(length,width,thickness,price)) return fail(INPUT);
  if (!finite(count)) return fail(INTEGER);
  if (!(length > 0)) return fail('Длина доски должна быть больше нуля');
  if (!(width > 0)) return fail('Ширина доски должна быть больше нуля');
  if (!(thickness > 0)) return fail('Толщина доски должна быть больше нуля');
  if (!(count >= 1)) return fail('Количество досок должно быть хотя бы одно');

  if (price < 0) return fail(INPUT);
  const singleD = times(exact(length),exact(width),exact(thickness));
  const single = evaluated(singleD,exact(1e6));
  const total = evaluated(times(singleD,exact(count)),exact(1e6));
  const perCube = evaluated(exact(1e6),singleD);
  const cost = price > 0 ? evaluated(times(singleD,exact(count),exact(price)),exact(1e6)) : 0;
  if (!finite(single,total,perCube,cost)) return fail(RANGE);
  const secondary = [
    { label: 'Объём одной доски', value: m3(single) },
    { label: 'Досок в кубометре', value: `${scalar(perCube, 2)} шт` },
  ];
  // Необязательная сумма: цена появляется строкой только тогда, когда её ввели.
  if (price > 0) secondary.push({ label: 'Стоимость', value: `${scalar(cost, 2)} ₽` });

  return { primary: { label: 'Общий объём', value: m3(total) }, secondary };
};
