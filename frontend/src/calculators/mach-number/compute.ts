import { read, INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { exact,times,evaluated,finite } from '../../lib/platform/electronicsNumericInput';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

const SPEED_AT_ZERO = 331.3;
const KELVIN_AT_ZERO = 273.15;
const KMH_IN_MS = 3.6;
const TRANSONIC = 0.8;
const SUPERSONIC = 1.2;
const HYPERSONIC = 5;

export const compute: CalcFunction = (inputs) => {
  const speedKmh = read(inputs.v);
  const temperature = read(inputs.t);
  const fail = (message: string) => ({
    primary: { label: 'Число Маха', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![speedKmh, temperature].every(Number.isFinite)) return fail(INPUT);
  if (!(speedKmh >= 0)) return fail('Скорость не может быть отрицательной');
  if (!(temperature >= -80 && temperature <= 80)) {
    return fail('Температура вне диапазона от −80 до 80 °C');
  }

  const sound = SPEED_AT_ZERO * Math.sqrt(1 + temperature / KELVIN_AT_ZERO);
  const metres = evaluated(exact(speedKmh), exact(KMH_IN_MS));
  const mach = evaluated(exact(speedKmh), times(exact(KMH_IN_MS), exact(sound)));
  if (!finite(metres,mach)) return fail(RANGE);
  const regime = mach < TRANSONIC
    ? 'дозвуковой'
    : mach < SUPERSONIC
      ? 'околозвуковой'
      : mach < HYPERSONIC ? 'сверхзвуковой' : 'гиперзвуковой';

  return {
    primary: { label: 'Число Маха', value: qty(mach) },
    secondary: [
      { label: 'Скорость звука', value: `${formatMeasure(sound, fmtNumber)} м/с` },
      { label: 'Режим', value: regime },
      { label: 'Скорость в метрах в секунду', value: `${qty(metres)} м/с` },
      { label: 'Скорость звука в километрах в час', value: `${formatMeasure(sound * KMH_IN_MS, fmtNumber)} км/ч` },
    ],
  };
};
