import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, MODE, qty } from '../../lib/platform/measurementScalar';
import { read, exact, times, evaluated, finite, mode, sqrtRatio } from '../../lib/platform/electronicsNumericInput';
/** Release from rest, constant positive g, no drag. Time mode gives speed after elapsed time. */
export const compute: CalcFunction = inputs => {
  const selected = mode(inputs.mode, 'fromHeight', ['fromHeight', 'fromTime']);
  const fail = (value: string) => ({ primary: { label: 'Скорость у земли', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  if (!selected) return fail(MODE);
  const g = read(inputs.g), known = read(selected === 'fromHeight' ? inputs.h : inputs.t);
  if (!finite(g, known)) return fail(INPUT);
  if (!(g > 0)) return fail('Ускорение свободного падения должно быть больше нуля');
  if (!(known > 0)) return fail(selected === 'fromHeight' ? 'Высота должна быть больше нуля' : 'Время падения должно быть больше нуля');
  const time = selected === 'fromTime' ? known : sqrtRatio(times(exact(2), exact(known)), exact(g));
  const height = selected === 'fromHeight' ? known : evaluated(times(exact(g), exact(known), exact(known)), exact(2));
  const speed = selected === 'fromTime' ? evaluated(times(exact(g), exact(known))) : sqrtRatio(times(exact(2), exact(g), exact(known)), exact(1));
  if (!finite(time, height, speed) || time <= 0 || height <= 0 || speed <= 0) return fail(RANGE);
  const kmh = evaluated(times(exact(speed), exact(3.6)));
  const energy = selected === 'fromHeight' ? evaluated(times(exact(g), exact(known))) : evaluated(times(exact(g), exact(g), exact(known), exact(known)), exact(2));
  if (!finite(time, height, speed, kmh, energy) || time <= 0 || height <= 0 || speed <= 0) return fail(RANGE);
  const q = (n: number, unit: string) => `${qty(n)} ${unit}`;
  return { primary: { label: 'Скорость у земли', value: q(speed, 'м/с') }, secondary: [
    { label: 'Время падения', value: q(time, 'с') }, { label: 'Высота падения', value: q(height, 'м') },
    { label: 'В километрах в час', value: q(kmh, 'км/ч') }, { label: 'Кинетическая энергия на килограмм', value: q(energy, 'Дж/кг') },
  ] };
};
