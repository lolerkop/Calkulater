import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Вес металлопроката: площадь сечения × длина × плотность.
//
//   круг    S = π(d/2)²
//   квадрат S = a²
//   полоса  S = a · b
//   масса   = S[мм²] / 10⁶ × длина[м] × плотность[г/см³] × 1000
//
// Плотность задаётся посетителем, а не выбирается из таблицы марок: у стали
// разных марок она отличается в третьем знаке, у алюминия и латуни — в первом,
// и подставлять справочное число за посетителя значило бы отвечать за сплав,
// которого страница не знает. Отличие от расчёта веса древесины: там влажность
// меняет плотность на десятки процентов и требует собственной поправки, здесь
// плотность металла постоянна.
const AREA: Record<string, (a: number, b: number) => number> = {
  round: (a) => Math.PI * (a / 2) ** 2,
  square: (a) => a * a,
  flat: (a, b) => a * b,
};

export const compute: CalcFunction = (inputs) => {
  const shape = toStr(inputs.shape, 'round');
  const density = toNumber(inputs.density);
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const length = toNumber(inputs.length);
  const fail = (message: string) => ({
    primary: { label: 'Масса', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(density > 0)) return fail('Плотность должна быть больше нуля');
  if (!(length > 0)) return fail('Длина должна быть больше нуля');
  if (!(a > 0)) return fail('Размер сечения должен быть больше нуля');
  if (shape === 'flat' && !(b > 0)) return fail('Вторая сторона полосы должна быть больше нуля');
  const area = AREA[shape]?.(a, b);
  if (area === undefined || !(area > 0)) return fail('Выберите форму сечения из списка');

  const volume = (area / 1e6) * length;
  const mass = volume * density * 1000;
  const q = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Масса', value: q(mass, 'кг') },
    secondary: [
      { label: 'Площадь сечения', value: q(area, 'мм²') },
      { label: 'Объём металла', value: q(volume, 'м³') },
      { label: 'Погонная масса', value: q(mass / length, 'кг/м') },
      { label: 'Метров в тонне', value: q(1000 / (mass / length), 'м') },
    ],
  };
};
