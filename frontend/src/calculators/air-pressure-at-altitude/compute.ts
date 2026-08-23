import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Барометрическая формула международной стандартной атмосферы.
//
// Давление падает не линейно: половина всей массы воздуха лежит ниже пяти с
// половиной километров, поэтому на Эвересте остаётся меньше трети давления
// уровня моря. Отсюда и кислородное голодание — доля кислорода та же 21 %, но
// молекул в том же вдохе втрое меньше.
//
// Плотность считается уравнением состояния уже по полученным давлению и
// температуре, а не берётся отдельной эмпирикой: так строки согласованы между
// собой.
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
  const height = toNumber(inputs.h);
  const fail = (message: string) => ({
    primary: { label: 'Давление', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

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
