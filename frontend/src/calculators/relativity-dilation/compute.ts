import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatQuantity, formatStatistic } from '../../lib/platform/measurement';

// Замедление времени: γ = 1/√(1 − β²), где β — доля скорости света.
//
// Скорость задаётся именно долей, а не метрами в секунду: в метрах разница
// между 0,99c и 0,999c теряется в разрядах, а по доле она видна сразу, и
// множитель Лоренца между ними отличается втрое.
//
// Область определения — ПОЛУОТКРЫТЫЙ промежуток от нуля до единицы. Единица
// отвергается не как «неудобное значение», а потому что там подкоренное
// выражение обращается в нуль и множитель уходит в бесконечность: разогнать
// тело с массой до скорости света нельзя.
const LIGHT = 299792458;

export const compute: CalcFunction = (inputs) => {
  const beta = toNumber(inputs.beta);
  const properTime = toNumber(inputs.properTime);
  const fail = (message: string) => ({
    primary: { label: 'Замедленное время', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(beta >= 0)) return fail('Доля скорости света не может быть отрицательной');
  if (!(beta < 1)) return fail('Достичь скорости света нельзя: доля должна быть меньше единицы');
  if (!(properTime > 0)) return fail('Собственное время должно быть больше нуля');

  const gamma = 1 / Math.sqrt(1 - beta * beta);
  const dilated = properTime * gamma;

  return {
    primary: { label: 'Замедленное время', value: `${formatMeasure(dilated, fmtNumber)} с` },
    secondary: [
      { label: 'Множитель Лоренца', value: formatMeasure(gamma, fmtNumber) },
      { label: 'Сокращение длины', value: `${formatStatistic(100 / gamma, fmtNumber)} %` },
      { label: 'Скорость', value: `${formatQuantity(beta * LIGHT, fmtNumber)} м/с` },
      { label: 'Разница во времени', value: `${formatMeasure(dilated - properTime, fmtNumber)} с` },
    ],
  };
};
