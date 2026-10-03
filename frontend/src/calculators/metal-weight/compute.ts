import { measure as displayMeasure, read, finite, mode as selectedMode, INPUT, MODE, RANGE, exact, times, evaluated } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const shape = selectedMode(inputs.shape, 'round', ['round','square','flat']);
  const density = read(inputs.density);
  const a = read(inputs.a);
  const b = read(inputs.b);
  const length = read(inputs.length);
  const fail = (message: string) => ({
    primary: { label: 'Масса', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (shape === null) return fail('Выберите форму сечения из списка');
  if (!finite(density,a,length,...(shape === 'flat' ? [b] : []))) return fail(INPUT);
  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (!(length > 0)) return fail('Длина должна быть больше нуля');
  if (!(a > 0)) return fail('Размер сечения должен быть больше нуля');
  if (shape === 'flat' && !(b > 0)) return fail('Вторая сторона полосы должна быть больше нуля');
  const areaD = shape === 'round' ? times(exact(Math.PI),exact(a),exact(a)) : shape === 'square' ? times(exact(a),exact(a)) : times(exact(a),exact(b));
  const divider = shape === 'round' ? 4 : 1;
  const area = evaluated(areaD,exact(divider));
  const volume = evaluated(times(areaD,exact(length)),exact(divider*1e6));
  const mass = evaluated(times(areaD,exact(length),exact(density)),exact(divider*1000));
  const linear = evaluated(times(areaD,exact(density)),exact(divider*1000));
  const metres = evaluated(exact(divider*1e6),times(areaD,exact(density)));
  if (!finite(area,volume,mass,linear,metres)) return fail(RANGE);
  const q = (value: number, unit: string) => `${displayMeasure(value)} ${unit}`;

  return {
    primary: { label: 'Масса', value: q(mass, 'кг') },
    secondary: [
      { label: 'Площадь сечения', value: q(area, 'мм²') },
      { label: 'Объём металла', value: q(volume, 'м³') },
      { label: 'Погонная масса', value: q(linear, 'кг/м') },
      { label: 'Метров в тонне', value: q(metres, 'м') },
    ],
  };
};
