import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Скорость звука в воздухе зависит ТОЛЬКО от температуры и не зависит ни от
// давления, ни от высоты напрямую: в уравнении состояния давление и плотность
// сокращаются. Поэтому поле здесь одно.
//
// Строка «километр звук пройдёт за» — практическая: именно так на глаз считают
// расстояние до грозы, деля секунды между вспышкой и громом на три.
const C0 = 331.3;
const KELVIN = 273.15;
const KMH = 3.6;
const MIN_T = -80;
const MAX_T = 80;

export const compute: CalcFunction = (inputs) => {
  const temperature = toNumber(inputs.t);
  const fail = (message: string) => ({
    primary: { label: 'Скорость звука', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(temperature >= MIN_T && temperature <= MAX_T)) {
    return fail('Температура вне диапазона от −80 до 80 °C');
  }

  const speed = C0 * Math.sqrt(1 + temperature / KELVIN);

  return {
    primary: { label: 'Скорость звука', value: `${formatMeasure(speed, fmtNumber)} м/с` },
    secondary: [
      { label: 'В километрах в час', value: `${formatMeasure(speed * KMH, fmtNumber)} км/ч` },
      { label: 'Километр звук пройдёт за', value: `${formatMeasure(1000 / speed, fmtNumber)} с` },
      { label: 'За три секунды', value: `${formatMeasure(speed * 3, fmtNumber)} м` },
      { label: 'Отклонение от значения при 0 °C', value: `${formatMeasure(speed - C0, fmtNumber)} м/с` },
    ],
  };
};
