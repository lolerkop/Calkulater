import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Масса трубы по кольцевому сечению.
//
// Труба отличается от круга не «поправкой», а самим сечением: работает кольцо
// между наружным и внутренним диаметром, и именно поэтому вдвое более толстая
// стенка не даёт вдвое большей массы. Внутренний диаметр печатается отдельно —
// его же спрашивают при подборе фитингов.
//
// Плотность — вход: 7850 кг/м³ для стали, около 950 для полиэтилена, 8960 для
// меди. Никаких скрытых таблиц сортамента здесь нет.
const MM_IN_M = 1000;
const CM2_IN_M2 = 1e4;
const L_IN_M3 = 1000;

export const compute: CalcFunction = (inputs) => {
  const outer = toNumber(inputs.d);
  const wall = toNumber(inputs.wall);
  const length = toNumber(inputs.len);
  const density = toNumber(inputs.rho);
  const fail = (message: string) => ({
    primary: { label: 'Масса трубы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(outer > 0)) return fail('Наружный диаметр должен быть больше нуля');
  if (!(wall > 0)) return fail('Толщина стенки должна быть больше нуля');
  if (!(length > 0)) return fail('Длина должна быть больше нуля');
  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (2 * wall >= outer) {
    return fail('Удвоенная стенка не может быть больше наружного диаметра или равна ему');
  }

  const inner = outer - 2 * wall;
  const outerM = outer / MM_IN_M;
  const innerM = inner / MM_IN_M;
  const area = (Math.PI / 4) * (outerM * outerM - innerM * innerM);
  const mass = area * length * density;

  return {
    primary: { label: 'Масса трубы', value: `${formatMeasure(mass, fmtNumber)} кг` },
    secondary: [
      { label: 'Масса погонного метра', value: `${formatMeasure(area * density, fmtNumber)} кг/м` },
      { label: 'Внутренний диаметр', value: `${formatMeasure(inner, fmtNumber)} мм` },
      { label: 'Площадь сечения металла', value: `${formatMeasure(area * CM2_IN_M2, fmtNumber)} см²` },
      { label: 'Объём внутренней полости', value: `${formatMeasure((Math.PI / 4) * innerM * innerM * length * L_IN_M3, fmtNumber)} л` },
    ],
  };
};
