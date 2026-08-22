import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Точка росы по Магнусу — Тетенсу.
//
//   γ = ln(RH/100) + a·t/(b + t),  a = 17,27, b = 237,7 °C
//   Td = b·γ / (a − γ)
//
// Это приближение, а не определение: оно выведено под давление у поверхности
// земли и держит около 0,4 °C в диапазоне 0…60 °C. Коэффициенты названы прямо,
// потому что в литературе ходят и другие пары — Бака, Сонтага, — и число из
// одной формулы не сходится с числом из другой на десятые доли.
//
// Нулевая влажность отвергается не из осторожности: логарифм нуля не
// определён, и «сухой воздух без точки росы» — это не край диапазона, а
// отсутствие величины. Влажность выше 100 % физически невозможна в
// равновесии, поэтому тоже отвергается.
const MAGNUS_A = 17.27;
const MAGNUS_B = 237.7;

export const compute: CalcFunction = (inputs) => {
  const t = toNumber(inputs.t);
  const rh = toNumber(inputs.rh);
  const fail = (message: string) => ({
    primary: { label: 'Точка росы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(rh > 0)) return fail('Влажность должна быть больше нуля');
  if (rh > 100) return fail('Влажность не может быть больше 100 %');
  if (!(MAGNUS_B + t !== 0)) return fail('Температура вне области применимости формулы');

  const gamma = Math.log(rh / 100) + (MAGNUS_A * t) / (MAGNUS_B + t);
  const dew = (MAGNUS_B * gamma) / (MAGNUS_A - gamma);
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Точка росы', value: m(dew, '°C') },
    secondary: [
      { label: 'Разрыв с температурой', value: m(t - dew, '°C') },
      { label: 'Температура воздуха', value: m(t, '°C') },
      { label: 'Относительная влажность', value: `${formatMeasure(rh, fmtNumber)} %` },
      { label: 'Точка росы в градусах Фаренгейта', value: m((dew * 9) / 5 + 32, '°F') },
    ],
  };
};
