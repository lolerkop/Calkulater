import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity } from '../../lib/platform/measurement';

// Энергия покоя E = mc².
//
// Масса задаётся в ГРАММАХ намеренно. В килограммах разумные бытовые значения
// пришлось бы вводить как 0,001, а любое «сколько энергии в грамме вещества»
// — это именно граммы. Само значение энергии при этом выходит за 10¹², поэтому
// главный ответ печатается показательной записью: 8,988·10¹³ Дж читается, а
// 89 875 517 873 681,8 Дж — нет.
//
// Тротиловый эквивалент даёт масштаб: грамм вещества — это две с лишним
// десятитысячные Хиросимы, и строка с тоннами объясняет число лучше джоулей.
const C_LIGHT = 299792458;
const G_IN_KG = 1000;
const J_IN_KWH = 3.6e6;
const J_IN_TON_TNT = 4.184e9;
const MILLION = 1e6;

export const compute: CalcFunction = (inputs) => {
  const grams = toNumber(inputs.massG);
  const fail = (message: string) => ({
    primary: { label: 'Энергия покоя', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(grams > 0)) return fail('Масса должна быть больше нуля');

  const kilograms = grams / G_IN_KG;
  const energy = kilograms * C_LIGHT * C_LIGHT;
  const kwh = energy / J_IN_KWH;

  return {
    primary: { label: 'Энергия покоя', value: `${formatQuantity(energy, fmtNumber)} Дж` },
    secondary: [
      { label: 'В киловатт-часах', value: `${formatQuantity(kwh, fmtNumber)} кВт·ч` },
      { label: 'В тоннах тротилового эквивалента', value: `${formatQuantity(energy / J_IN_TON_TNT, fmtNumber)} т` },
      { label: 'Масса', value: `${formatMeasure(kilograms, fmtNumber)} кг` },
      { label: 'Хватило бы городу на', value: `${formatMeasure(kwh / MILLION, fmtNumber)} млн кВт·ч` },
    ],
  };
};
