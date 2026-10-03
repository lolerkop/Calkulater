import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

import { formatStatistic } from '../../lib/platform/measurement';
// NICE central-adiposity screening bands for adults with BMI<35.
// Ratios are classified before rounding; intervals are visible in the band.
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'Отношение талии к росту', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const waist = number(inputs.waist), hip = number(inputs.hip), height = number(inputs.height);
  if (![waist, hip, height].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (!(waist > 0) || !(hip > 0) || !(height > 0)) return fail('Обхваты и рост должны быть больше нуля');
  const whtr = waist / height, whr = waist / hip;
  if (![whtr, whr].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');
  const band = whtr < .4 ? 'ниже диапазона 0,4–0,5'
    : whtr < .5 ? 'центральное жироотложение: не повышено (0,4 ≤ r < 0,5)'
      : whtr < .6 ? 'центральное жироотложение: повышено (0,5 ≤ r < 0,6)' : 'центральное жироотложение: высокое (r ≥ 0,6)';
  const measure = (x: number) => formatMeasure(x, fmtNumber);
  return { primary: { label: 'Отношение талии к росту', value: formatStatistic(whtr, fmtNumber) }, secondary: [
    { label: 'Отношение талии к бёдрам', value: formatStatistic(whr, fmtNumber) }, { label: 'Категория', value: band },
    { label: 'Обхват талии', value: `${measure(waist)} см` }, { label: 'Обхват бёдер', value: `${measure(hip)} см` }, { label: 'Рост', value: `${measure(height)} см` },
  ], note: 'Категория использует неокруглённое отношение и относится к скринингу центрального жироотложения у взрослых с ИМТ ниже 35. Округлённое число у границы может совпасть с ней; это не диагноз общего здоровья.' };
};
