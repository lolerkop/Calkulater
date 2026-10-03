import { measure as displayMeasure, read, finite, INPUT, RANGE, exact, add, times, negative, evaluated } from '../beam-deflection/buildingWave13Numeric';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';


export const compute: CalcFunction = (inputs) => {
  const outer = read(inputs.d);
  const wall = read(inputs.wall);
  const length = read(inputs.len);
  const density = read(inputs.rho);
  const fail = (message: string) => ({
    primary: { label: 'Масса трубы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!finite(outer,wall,length,density)) return fail(INPUT);
  if (!(outer > 0)) return fail('Наружный диаметр должен быть больше нуля');
  if (!(wall > 0)) return fail('Толщина стенки должна быть больше нуля');
  if (!(length > 0)) return fail('Длина должна быть больше нуля');
  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (2 * wall >= outer) {
    return fail('Удвоенная стенка не может быть больше наружного диаметра или равна ему');
  }

  const innerD = add(exact(outer),negative(times(exact(2),exact(wall))));
  const inner = evaluated(innerD);
  // π t(D−t), not a difference of nearly equal squared diameters.
  const areaD = times(exact(Math.PI),exact(wall),add(exact(outer),negative(exact(wall))));
  const mass = evaluated(times(areaD,exact(length),exact(density)),exact(1e6));
  const linear = evaluated(times(areaD,exact(density)),exact(1e6));
  const cmArea = evaluated(areaD,exact(100));
  const litres = evaluated(times(exact(Math.PI),innerD,innerD,exact(length)),exact(4000));
  if (!finite(inner,mass,linear,cmArea,litres)) return fail(RANGE);

  return {
    primary: { label: 'Масса трубы', value: `${displayMeasure(mass)} кг` },
    secondary: [
      { label: 'Масса погонного метра', value: `${displayMeasure(linear)} кг/м` },
      { label: 'Внутренний диаметр', value: `${displayMeasure(inner)} мм` },
      { label: 'Площадь сечения металла', value: `${displayMeasure(cmArea)} см²` },
      { label: 'Объём внутренней полости', value: `${displayMeasure(litres)} л` },
    ],
  };
};
