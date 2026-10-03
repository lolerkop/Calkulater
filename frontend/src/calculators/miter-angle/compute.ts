import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, negative, evaluated, quotient } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';

const STRAIGHT = 180;

export const compute: CalcFunction = (inputs) => {
  const corner = read(inputs.corner);
  const fail = (message: string) => ({
    primary: { label: 'Угол реза', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(corner)) return fail(INPUT);
  if (!(corner > 0) || !(corner < STRAIGHT)) return fail('Угол стыка должен быть больше 0 и меньше 180 градусов');

  const cut = quotient([corner],[2]);
  const saw = evaluated(add(exact(180),negative(exact(corner))),exact(2));
  if (!finite(cut,saw)) return fail(RANGE);
  const measure = (value: number, unit: string) => `${displayMeasure(value)} ${unit}`;

  return {
    primary: { label: 'Угол реза', value: measure(cut, '°') },
    secondary: [
      { label: 'Угол на пиле от 90°', value: measure(saw, '°') },
      { label: 'Угол стыка', value: measure(corner, '°') },
      { label: 'Сумма двух резов', value: measure(corner, '°') },
    ],
  };
};
