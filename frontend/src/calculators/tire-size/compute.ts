import type { CalcFunction } from '../../lib/types';
import { add, exact, evaluated, finite, INPUT, measure, positive, quotient, RANGE, read, times } from '../engine-displacement/automotiveNumeric';
const INCH_MM = 25.4;
export const compute: CalcFunction = inputs => {
  const width = read(inputs.width), profile = read(inputs.profile), diameter = read(inputs.diameter);
  const fail = (message: string) => ({ primary: { label: 'Внешний диаметр', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (!finite(width, profile, diameter)) return fail(INPUT);
  if (!(width > 0)) return fail('Ширина шины должна быть больше нуля');
  if (!(profile > 0)) return fail('Профиль должен быть больше нуля');
  if (!(diameter > 0)) return fail('Диаметр диска должен быть больше нуля');
  const sideExact = times(exact(width), exact(profile)), sidewall = evaluated(sideExact, exact(100));
  const outerExact = add(times(exact(diameter), exact(INCH_MM), exact(100)), times(sideExact, exact(2)));
  const outer = evaluated(outerExact, exact(100)), circumference = evaluated(times(outerExact, exact(Math.PI)), exact(100));
  const turns = evaluated(exact(1e8), times(outerExact, exact(Math.PI))), inches = evaluated(outerExact, times(exact(100), exact(INCH_MM)));
  if (!positive(sidewall, outer, circumference, turns, inches)) return fail(RANGE);
  return { primary: { label: 'Внешний диаметр', value: `${measure(outer)} мм` }, secondary: [
    { label: 'Высота профиля', value: `${measure(sidewall)} мм` }, { label: 'Длина окружности', value: `${measure(circumference)} мм` },
    { label: 'Оборотов на километр', value: measure(turns) }, { label: 'Диаметр в дюймах', value: measure(inches) },
  ] };
};
