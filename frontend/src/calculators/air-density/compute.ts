import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Плотность влажного воздуха: сумма парциальных плотностей сухого воздуха и
// водяного пара, у каждого своя газовая постоянная.
//
// Обычно ждут обратного: что влажный воздух тяжелее сухого. Он ЛЕГЧЕ — молекула
// воды весит 18 против 29 у среднего воздуха, и каждая вытесняет более тяжёлую.
// Поэтому в жару и сырость подъёмная сила крыла и тяга двигателя падают вдвойне.
//
// Давление насыщения считается по формуле Тетенса, и её постоянные принадлежат
// самой формуле, а не какой-либо отраслевой таблице.
const R_DRY = 287.058;
const R_VAPOUR = 461.495;
const HPA = 100;
const KELVIN = 273.15;
const STANDARD_DENSITY = 1.225;

export const compute: CalcFunction = (inputs) => {
  const t = toNumber(inputs.t);
  const pressure = toNumber(inputs.pressure);
  const humidity = toNumber(inputs.humidity);
  const fail = (message: string) => ({
    primary: { label: 'Плотность воздуха', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(pressure > 0)) return fail('Атмосферное давление должно быть больше нуля');
  if (!(humidity >= 0) || !(humidity <= 100)) return fail('Относительная влажность задаётся от 0 до 100 процентов');
  if (!(t > -KELVIN)) return fail('Температура не может быть ниже абсолютного нуля');

  const saturation = 6.1078 * Math.pow(10, (7.5 * t) / (t + 237.3));
  const vapour = (saturation * humidity) / 100;
  if (vapour > pressure) return fail('Давление пара выше атмосферного: проверьте температуру и давление');

  const kelvin = t + KELVIN;
  const density = ((pressure - vapour) * HPA) / (R_DRY * kelvin) + (vapour * HPA) / (R_VAPOUR * kelvin);

  return {
    primary: { label: 'Плотность воздуха', value: `${formatMeasure(density, fmtNumber)} кг/м³` },
    secondary: [
      { label: 'Плотность сухого воздуха', value: `${formatMeasure((pressure * HPA) / (R_DRY * kelvin), fmtNumber)} кг/м³` },
      { label: 'Давление водяного пара', value: `${formatMeasure(vapour, fmtNumber)} гПа` },
      { label: 'Давление насыщения', value: `${formatMeasure(saturation, fmtNumber)} гПа` },
      {
        label: 'Отклонение от 1,225',
        value: `${formatStatistic(((density - STANDARD_DENSITY) / STANDARD_DENSITY) * 100, fmtNumber)} %`,
      },
    ],
  };
};
