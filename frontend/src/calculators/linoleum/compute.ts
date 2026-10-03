import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, times, negative, evaluated, mul, decimal, ceilDecimal, reserve } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const length = read(inputs.length);
  const width = read(inputs.width);
  const rollWidth = read(inputs.rollWidth);
  const reserve = read(inputs.reserve);
  const fail = (message: string) => ({
    primary: { label: 'Погонных метров', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(length,width,rollWidth,reserve)) return fail(INPUT);
  if (!(length > 0) || !(width > 0)) return fail('Размеры комнаты должны быть больше нуля');
  if (!(rollWidth > 0)) return fail('Ширина рулона должна быть больше нуля');
  if (reserve < 0 || reserve > 50) return fail('Запас должен быть от 0 до 50 %');

  const strips = ceilDecimal(decimal(width),decimal(rollWidth));
  if (!finite(strips)) return fail(RANGE);
  const runningD = times(exact(strips),exact(length),add(exact(100),exact(reserve)));
  const running = evaluated(runningD,exact(100));
  const bought = evaluated(times(runningD,exact(rollWidth)),exact(100));
  const area = mul(length,width);
  const offcuts = evaluated(add(times(runningD,exact(rollWidth)),negative(times(exact(length),exact(width),exact(100)))),exact(100));
  if (!finite(running,bought,area,offcuts) || offcuts < 0) return fail(RANGE);
  const measure = (x: number) => displayMeasure(x);

  return {
    primary: { label: 'Погонных метров', value: `${measure(running)} м` },
    secondary: [
      { label: 'Полос', value: fmtNumber(strips, 0) },
      { label: 'Площадь пола', value: `${measure(area)} м²` },
      { label: 'Куплено', value: `${measure(bought)} м²` },
      { label: 'Обрезки', value: `${measure(offcuts)} м²` },
      { label: 'Швов', value: fmtNumber(Math.max(0, strips - 1), 0) },
    ],
  };
};
