import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Число Маха — отношение скорости к скорости звука В ЭТОМ ЖЕ воздухе.
//
// Скорость звука зависит только от температуры и не зависит от давления и
// высоты напрямую, поэтому вводится температура, а не высота: на одиннадцати
// километрах воздух около −56 °C, и один и тот же километраж в час даёт там
// заметно большее число Маха, чем у земли.
//
// Режим печатается словом: граница «сверхзвука» проходит не по единице, а по
// диапазону около неё, где на разных частях аппарата поток уже сверхзвуковой,
// а на других ещё нет.
const SPEED_AT_ZERO = 331.3;
const KELVIN_AT_ZERO = 273.15;
const KMH_IN_MS = 3.6;
const TRANSONIC = 0.8;
const SUPERSONIC = 1.2;
const HYPERSONIC = 5;

export const compute: CalcFunction = (inputs) => {
  const speedKmh = toNumber(inputs.v);
  const temperature = toNumber(inputs.t);
  const fail = (message: string) => ({
    primary: { label: 'Число Маха', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(speedKmh >= 0)) return fail('Скорость не может быть отрицательной');
  if (!(temperature >= -80 && temperature <= 80)) {
    return fail('Температура вне диапазона от −80 до 80 °C');
  }

  const sound = SPEED_AT_ZERO * Math.sqrt(1 + temperature / KELVIN_AT_ZERO);
  const mach = speedKmh / KMH_IN_MS / sound;
  const regime = mach < TRANSONIC
    ? 'дозвуковой'
    : mach < SUPERSONIC
      ? 'околозвуковой'
      : mach < HYPERSONIC ? 'сверхзвуковой' : 'гиперзвуковой';

  return {
    primary: { label: 'Число Маха', value: formatMeasure(mach, fmtNumber) },
    secondary: [
      { label: 'Скорость звука', value: `${formatMeasure(sound, fmtNumber)} м/с` },
      { label: 'Режим', value: regime },
      { label: 'Скорость в метрах в секунду', value: `${formatMeasure(speedKmh / KMH_IN_MS, fmtNumber)} м/с` },
      { label: 'Скорость звука в километрах в час', value: `${formatMeasure(sound * KMH_IN_MS, fmtNumber)} км/ч` },
    ],
  };
};
