import { read, INPUT, RANGE, qty } from '../../lib/platform/measurementScalar';
import { exact,times,evaluated,finite } from '../../lib/platform/electronicsNumericInput';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

const C0 = 331.3;
const KELVIN = 273.15;
const KMH = 3.6;
const MIN_T = -80;
const MAX_T = 80;

export const compute: CalcFunction = (inputs) => {
  const temperature = read(inputs.t);
  const fail = (message: string) => ({
    primary: { label: 'Скорость звука', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![temperature].every(Number.isFinite)) return fail(INPUT);
  if (!(temperature >= MIN_T && temperature <= MAX_T)) {
    return fail('Температура вне диапазона от −80 до 80 °C');
  }

  const root = Math.sqrt(1 + temperature / KELVIN);
  const speed = C0 * root;
  const difference = evaluated(times(exact(C0), exact(temperature)), times(exact(KELVIN),exact(root+1)));
  if (!finite(speed,difference)) return fail(RANGE);

  return {
    primary: { label: 'Скорость звука', value: `${formatMeasure(speed, fmtNumber)} м/с` },
    secondary: [
      { label: 'В километрах в час', value: `${formatMeasure(speed * KMH, fmtNumber)} км/ч` },
      { label: 'Километр звук пройдёт за', value: `${formatMeasure(1000 / speed, fmtNumber)} с` },
      { label: 'За три секунды', value: `${formatMeasure(speed * 3, fmtNumber)} м` },
      { label: 'Отклонение от значения при 0 °C', value: `${qty(difference)} м/с` },
    ],
  };
};
