import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Смесь для двухтактного двигателя: масла = топливо · 1000 / N при пропорции 1:N.
//
// Пропорция ограничена диапазоном 20…100 намеренно. Богаче 1:20 масло не
// сгорает и коксует поршневые кольца, беднее 1:100 не остаётся смазки — оба
// края не «неудобные значения», а режимы, в которых мотор выходит из строя.
// Точная пропорция берётся из руководства к конкретному двигателю: разброс у
// современных масел большой, и подставлять чужое значение опасно.
//
// Доля масла считается от ОБЪЁМА СМЕСИ, а не от объёма бензина: при 1:50 это
// 1,96 %, а не ровно 2 %, и разница видна на больших канистрах.
const ML_IN_LITRE = 1000;
const MIN_RATIO = 20;
const MAX_RATIO = 100;

export const compute: CalcFunction = (inputs) => {
  const fuel = toNumber(inputs.fuel);
  const ratio = toNumber(inputs.ratio);
  const fail = (message: string) => ({
    primary: { label: 'Масла', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(fuel > 0)) return fail('Объём топлива должен быть больше нуля');
  if (!(ratio >= MIN_RATIO) || !(ratio <= MAX_RATIO)) return fail('Пропорция допустима от 1:20 до 1:100');

  const oilMl = (fuel * ML_IN_LITRE) / ratio;
  const mix = fuel + oilMl / ML_IN_LITRE;
  const m = (value: number, unit: string) => `${formatMeasure(value, fmtNumber)} ${unit}`;

  return {
    primary: { label: 'Масла', value: m(oilMl, 'мл') },
    secondary: [
      { label: 'Объём смеси', value: m(mix, 'л') },
      { label: 'Доля масла', value: `${formatStatistic((oilMl / ML_IN_LITRE / mix) * 100, fmtNumber)} %` },
      { label: 'Соотношение', value: `1:${formatMeasure(ratio, fmtNumber)}` },
      { label: 'Бензина', value: m(fuel, 'л') },
    ],
  };
};
