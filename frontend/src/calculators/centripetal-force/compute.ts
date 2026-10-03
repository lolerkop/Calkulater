import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, read, qty } from '../../lib/platform/measurementScalar';
import { exact, times } from '../../lib/platform/geometryNumericInput';
import { evaluated } from '../../lib/platform/electronicsNumericInput';

// Scalar speed, positive mass/radius: these are magnitudes in uniform circular motion.
export const compute: CalcFunction = (inputs) => {
  const m = read(inputs.m), v = read(inputs.v), r = read(inputs.r);
  const fail = (message: string) => ({ primary: { label: 'Центростремительная сила', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![m, v, r].every(Number.isFinite)) return fail(INPUT);
  if (m <= 0) return fail('Масса должна быть больше нуля');
  if (r <= 0) return fail('Радиус должен быть больше нуля');
  if (v < 0) return fail('Скорость по окружности не может быть отрицательной');
  const squared = times(exact(v), exact(v));
  const force = evaluated(times(exact(m), squared), exact(r));
  const acceleration = evaluated(squared, exact(r));
  const angular = evaluated(exact(v), exact(r));
  const period = v === 0 ? null : evaluated(times(exact(2), exact(Math.PI), exact(r)), exact(v));
  if (![force, acceleration, angular, ...(period === null ? [] : [period])].every(Number.isFinite)) return fail(RANGE);
  return {
    primary: { label: 'Центростремительная сила', value: `${qty(force)} Н` },
    secondary: [
      { label: 'Центростремительное ускорение', value: `${qty(acceleration)} м/с²` },
      { label: 'Угловая скорость', value: `${qty(angular)} рад/с` },
      ...(period === null ? [] : [{ label: 'Период обращения', value: `${qty(period)} с` }]),
    ],
  };
};
