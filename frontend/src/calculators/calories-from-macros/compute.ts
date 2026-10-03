import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

// General Atwater4/9/4 energy accounting, not a diet-target calculation.
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'Всего калорий', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const protein = number(inputs.protein), fat = number(inputs.fat), carbs = number(inputs.carbs);
  if (![protein, fat, carbs].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if ([protein, fat, carbs].some(x => x < 0)) return fail('Граммы макронутриентов не могут быть отрицательными');
  const parts = [protein * 4, fat * 9, carbs * 4], total = parts.reduce((sum, x) => sum + x, 0);
  if (!Number.isFinite(total)) return fail('Результат выходит за числовой диапазон');
  const energy = (x: number) => `${x >= 1 ? fmtNumber(x, 0) : formatMeasure(x, fmtNumber)} ккал`;
  const share = (part: number) => total > 0 ? `${fmtNumber((part / total) * 100, 2)} %` : 'доля отсутствует при нулевом итоге';
  return { primary: { label: 'Всего калорий', value: energy(total) }, secondary: ['Из белков', 'Из жиров', 'Из углеводов'].map((label, i) => ({ label, value: `${energy(parts[i])} · ${share(parts[i])}` })),
    note: 'Доли относятся к энергии, а не к массе. Клетчатка, полиолы, алкоголь и особые коэффициенты продуктов отдельно не рассчитываются.' };
};
