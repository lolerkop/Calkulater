import { read, INPUT } from '../../lib/platform/measurementScalar';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

const P0 = 101325;
const T0 = 288.15;
const LAPSE = 0.0065;
const M_AIR = 0.0289644;
const R_GAS = 8.314462618;
const G = 9.80665;
const DH_VAP = 40660;
const T_BOIL_K = 373.15;
const KELVIN = 273.15;
const MMHG = 133.322;
const MIN_H = -430;
const MAX_H = 9000;

export const pressureAtAltitude = (metres: number): number =>
  P0 * Math.pow(1 - (LAPSE * metres) / T0, (G * M_AIR) / (R_GAS * LAPSE));

export const compute: CalcFunction = (inputs) => {
  const height = read(inputs.h);
  const fail = (message: string) => ({
    primary: { label: 'Температура кипения', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![height].every(Number.isFinite)) return fail(INPUT);
  if (!(height >= MIN_H && height <= MAX_H)) {
    return fail('Высота вне диапазона от −430 до 9000 м');
  }

  const pressure = pressureAtAltitude(height);
  const inverse = 1 / T_BOIL_K - (R_GAS * Math.log(pressure / P0)) / DH_VAP;
  const boiling = 1 / inverse - KELVIN;

  return {
    primary: { label: 'Температура кипения', value: `${formatMeasure(boiling, fmtNumber)} °C` },
    secondary: [
      { label: 'Давление на высоте', value: `${formatMeasure(pressure / 1000, fmtNumber)} кПа` },
      { label: 'В миллиметрах ртутного столба', value: `${formatMeasure(pressure / MMHG, fmtNumber)} мм рт. ст.` },
      { label: 'Доля от давления на уровне моря', value: `${formatMeasure((pressure / P0) * 100, fmtNumber)} %` },
      { label: 'Ниже обычных 100 °C на', value: `${formatMeasure(100 - boiling, fmtNumber)} °C` },
    ],
  };
};
