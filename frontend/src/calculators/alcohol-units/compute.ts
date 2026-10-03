import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Mass-based alcohol units: volume × ABV/100 × 0.789 g/mL ÷ selected grams per unit.
const ETHANOL_DENSITY = 0.789;

export const compute: CalcFunction = (inputs) => {
  const volume = toNumber(inputs.volume_ml);
  const abv = toNumber(inputs.abv);
  const standard = toNumber(inputs.standard_g);
  const fail = (message: string) => ({
    primary: { label: 'Стандартных единиц', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (volume === null || abv === null || standard === null) return fail('Введите корректные числовые данные');
  if (!(volume > 0)) return fail('Объём должен быть больше нуля');
  if (!(abv >= 0) || abv > 100) return fail('Крепость должна быть от 0 до 100 %');
  if (!(standard > 0)) return fail('Норма единицы должна быть больше нуля');

  const pureMl = volume * (abv / 100);
  const grams = pureMl * ETHANOL_DENSITY;
  const units = grams / standard;
  if (![pureMl, grams, units].every(v => validOutput(v, abv > 0))) return fail('Результат вне допустимого диапазона');
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Стандартных единиц', value: fmtNumber(units, 2) },
    secondary: [
      { label: 'Чистого спирта по массе', value: m(grams, 'г') },
      { label: 'Чистого спирта по объёму', value: m(pureMl, 'мл') },
      { label: 'Норма единицы', value: m(standard, 'г') },
      { label: 'Крепость', value: `${formatMeasure(abv, fmtNumber)} %` },
    ],
  };
};
