import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, exact, add, times, scale, sqrt, INPUT, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const u = unit(inputs.unit); if (!u) return fail(UNIT);
  const d1 = read(inputs.d1), d2 = read(inputs.d2);
  if (![d1, d2].every(Number.isFinite)) return fail(INPUT);
  if (!valid(d1, d2)) return fail('Обе диагонали должны быть больше нуля');
  const area = product(d1, d2, 0.5);
  const side = sqrt(scale(add(times(exact(d1), exact(d1)), times(exact(d2), exact(d2))), -2));
  const perimeter = product(4, side), height = area / side;
  if (!valid(area, side, perimeter, height)) return fail(RANGE);
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [{ label: 'Сторона', value: `${dim(side)} ${u}` }, { label: 'Периметр', value: `${dim(perimeter)} ${u}` }, { label: 'Высота', value: `${dim(height)} ${u}` }] };
};
