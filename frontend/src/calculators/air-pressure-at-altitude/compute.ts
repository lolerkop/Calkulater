import { read, INPUT } from '../../lib/platform/measurementScalar';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

const P0 = 101325;
const T0_C = 15;
const T0 = 288.15;
const LAPSE = 0.0065;
const M_AIR = 0.0289644;
const R_GAS = 8.314462618;
const G = 9.80665;
const KELVIN = 273.15;
const MMHG = 133.322;
const MIN_H = -430;
const MAX_H = 11000;

export const compute: CalcFunction = (inputs) => {
  const height = read(inputs.h);
  const fail = (message: string) => ({
    primary: { label: 'Давление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![height].every(Number.isFinite)) return fail(INPUT);
  if (!(height >= MIN_H && height <= MAX_H)) {
    return fail('Высота вне диапазона от −430 до 11 000 м');
  }

  const pressure = P0 * Math.pow(1 - (LAPSE * height) / T0, (G * M_AIR) / (R_GAS * LAPSE));
  const temperature = T0_C - LAPSE * height;
  const density = (pressure * M_AIR) / (R_GAS * (temperature + KELVIN));

  return {
    primary: { label: 'Давление', value: `${formatMeasure(pressure / 1000, fmtNumber)} кПа` },
    secondary: [
      { label: 'В миллиметрах ртутного столба', value: `${formatMeasure(pressure / MMHG, fmtNumber)} мм рт. ст.` },
      { label: 'Доля от уровня моря', value: `${formatMeasure((pressure / P0) * 100, fmtNumber)} %` },
      { label: 'Температура по стандартной атмосфере', value: `${formatMeasure(temperature, fmtNumber)} °C` },
      { label: 'Плотность воздуха', value: `${formatMeasure(density, fmtNumber)} кг/м³` },
    ],
  };
};
