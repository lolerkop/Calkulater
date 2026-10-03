import type { CalcFunction } from '../../lib/types';
import { read, unit, valid, dim, product, exact, ratio, sqrt, INPUT, MODE, UNIT, RANGE } from '../../lib/platform/geometryNumericInput';

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Площадь', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const mode = inputs.mode, u = unit(inputs.unit);
  if (typeof mode !== 'string' || !['radius', 'diameter', 'circumference', 'area'].includes(mode)) return fail(MODE);
  if (!u) return fail(UNIT);
  const supplied = read(inputs[mode === 'radius' ? 'r' : mode === 'diameter' ? 'd' : mode === 'circumference' ? 'c' : 'area']);
  if (!Number.isFinite(supplied)) return fail(INPUT);
  if (!(supplied > 0)) return fail(mode === 'radius' ? 'Радиус должен быть больше нуля' : mode === 'diameter' ? 'Диаметр должен быть больше нуля' : mode === 'circumference' ? 'Длина окружности должна быть больше нуля' : 'Площадь должна быть больше нуля');
  // Taking square roots before division preserves positive subnormal input areas.
  const r = mode === 'radius' ? supplied : mode === 'diameter' ? supplied / 2 : mode === 'circumference' ? ratio(exact(supplied), exact(2 * Math.PI)) : sqrt(exact(supplied)) / Math.sqrt(Math.PI);
  const area = mode === 'area' ? supplied : product(Math.PI, r, r);
  const diameter = mode === 'diameter' ? supplied : product(2, r);
  const circumference = mode === 'circumference' ? supplied : product(2, Math.PI, r);
  if (!valid(r, area, diameter, circumference)) return fail(RANGE);
  return { primary: { label: 'Площадь', value: `${dim(area)} ${u}²` }, secondary: [
    { label: 'Радиус', value: `${dim(r)} ${u}` }, { label: 'Диаметр', value: `${dim(diameter)} ${u}` }, { label: 'Длина окружности', value: `${dim(circumference)} ${u}` },
  ] };
};
