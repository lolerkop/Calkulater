import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Абсолютная влажность: сколько граммов воды в кубометре воздуха.
//
// Относительная влажность сама по себе о количестве воды не говорит: 50 % при
// пяти градусах и 50 % при тридцати отличаются по содержанию влаги вчетверо.
// Именно поэтому зимой в квартире сухо — уличный воздух с 90 % влажности при
// −10 °C, нагретый до +22 °C, даёт всего около десяти процентов.
//
// Давление насыщения считается по формуле Тетенса; влагосодержание в граммах на
// килограмм сухого воздуха нужно для расчётов вентиляции и осушителей.
const KELVIN = 273.15;
const ABSOLUTE_FACTOR = 216.7;
const MIXING_FACTOR = 621.97;

export const compute: CalcFunction = (inputs) => {
  const t = toNumber(inputs.t);
  const rh = toNumber(inputs.rh);
  const pressure = toNumber(inputs.pressure);
  const fail = (message: string) => ({
    primary: { label: 'Абсолютная влажность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(rh >= 0) || !(rh <= 100)) return fail('Относительная влажность задаётся от 0 до 100 процентов');
  if (!(t > -KELVIN)) return fail('Температура не может быть ниже абсолютного нуля');
  if (!(pressure > 0)) return fail('Атмосферное давление должно быть больше нуля');

  const saturation = 6.1078 * Math.pow(10, (7.5 * t) / (t + 237.3));
  const vapour = (saturation * rh) / 100;
  if (vapour >= pressure) return fail('Давление пара не ниже атмосферного: проверьте температуру и давление');

  const kelvin = t + KELVIN;

  return {
    primary: { label: 'Абсолютная влажность', value: `${formatMeasure((ABSOLUTE_FACTOR * vapour) / kelvin, fmtNumber)} г/м³` },
    secondary: [
      { label: 'Давление пара', value: `${formatMeasure(vapour, fmtNumber)} гПа` },
      { label: 'Давление насыщения', value: `${formatMeasure(saturation, fmtNumber)} гПа` },
      { label: 'Влагосодержание', value: `${formatMeasure((MIXING_FACTOR * vapour) / (pressure - vapour), fmtNumber)} г/кг` },
      { label: 'Максимум при этой температуре', value: `${formatMeasure((ABSOLUTE_FACTOR * saturation) / kelvin, fmtNumber)} г/м³` },
    ],
  };
};
