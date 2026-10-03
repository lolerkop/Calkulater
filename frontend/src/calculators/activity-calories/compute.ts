import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

// 2024 Adult Compendium:17160 walking for pleasure,01014 general cycling,
// 18290 medium crawl~50yd/min,12050 running6–6.3mph. Ages19–59.
const PRESET_MET = { walking: 3.5, cycling: 7, swimming: 8, running: 9.3 } as const;
export const compute: CalcFunction = (inputs) => {
  const activity = toStr(inputs.activity, 'cycling');
  const fail = (value: string) => ({ primary: { label: 'Потрачено калорий', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  if (activity !== 'custom' && !Object.hasOwn(PRESET_MET, activity)) return fail('Неизвестный вид активности');
  const met = activity === 'custom' ? number(inputs.met) : PRESET_MET[activity as keyof typeof PRESET_MET];
  const weight = number(inputs.weightKg), minutes = number(inputs.minutes);
  if (![met, weight, minutes].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (!(met > 0)) return fail('Коэффициент MET должен быть больше нуля');
  if (!(weight > 0)) return fail('Масса тела должна быть больше нуля');
  if (minutes < 0) return fail('Длительность не может быть отрицательной');
  const rate = met * (weight * 3.5 / 200), kcal = rate * minutes;
  const rest = weight * 3.5 / 200 * minutes, difference = kcal - rest;
  if (![rate, kcal, rest, difference, rate * 60].every(Number.isFinite)) return fail('Результат выходит за числовой диапазон');
  const energy = (x: number) => `${formatMeasure(x, fmtNumber)} ккал`;
  const roundedEnergy = (x: number) => `${Math.abs(x) >= 1 ? fmtNumber(x, 0) : formatMeasure(x, fmtNumber)} ккал`;
  return { primary: { label: 'Потрачено калорий', value: roundedEnergy(kcal) }, secondary: [
    { label: 'Калорий в минуту', value: formatMeasure(rate, fmtNumber) },
    { label: 'Расход в час', value: roundedEnergy(rate * 60) },
    { label: 'Коэффициент MET', value: formatMeasure(met, fmtNumber) },
    { label: 'Расход за то же время при 1 MET', value: energy(rest) },
    { label: 'Разница с 1 MET', value: energy(difference) },
  ] };
};
