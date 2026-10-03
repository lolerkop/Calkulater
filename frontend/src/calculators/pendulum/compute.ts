import type { CalcFunction } from '../../lib/types';
import { INPUT, RANGE, read, qty } from '../../lib/platform/measurementScalar';
import { exact, times } from '../../lib/platform/geometryNumericInput';
import { evaluated, sqrtRatio } from '../../lib/platform/electronicsNumericInput';

// Full out-and-back period of a point bob on a massless suspension, small angles.
export const compute: CalcFunction = (inputs) => {
  const length = read(inputs.length), g = read(inputs.g);
  const fail = (message: string) => ({ primary: { label: 'Период колебаний', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (![length, g].every(Number.isFinite)) return fail(INPUT);
  if (length <= 0) return fail('Длина подвеса должна быть больше нуля');
  if (g <= 0) return fail('Ускорение свободного падения должно быть больше нуля');
  // Include (2π)² in the exact ratio so √(L/g) cannot underflow before multiplication.
  const period = sqrtRatio(times(exact(4), exact(Math.PI), exact(Math.PI), exact(length)), exact(g));
  if (!Number.isFinite(period) || period <= 0) return fail(RANGE);
  const frequency = evaluated(exact(1), exact(period));
  const perMinute = evaluated(exact(60), exact(period));
  const oneSecondLength = evaluated(exact(g), times(exact(4), exact(Math.PI), exact(Math.PI)));
  if (![frequency, perMinute, oneSecondLength].every(Number.isFinite)) return fail(RANGE);
  return {
    primary: { label: 'Период колебаний', value: `${qty(period)} с` },
    secondary: [
      { label: 'Частота', value: `${qty(frequency)} Гц` },
      { label: 'Колебаний в минуту', value: qty(perMinute) },
      { label: 'Длина для периода 1 с', value: `${qty(oneSecondLength)} м` },
      { label: 'Ускорение свободного падения', value: `${qty(g)} м/с²` },
    ],
  };
};
