import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

const FORMULAS = { '220-age': (age: number) => 220 - age, tanaka: (age: number) => 208 - .7 * age, gulati: (age: number) => 206 - .88 * age } as const;
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'Максимальный пульс', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const age = number(inputs.age), formula = toStr(inputs.formula, '220-age');
  if (!Object.hasOwn(FORMULAS, formula)) return fail('Неизвестная формула оценки');
  const optional = inputs.restingHr == null || inputs.restingHr === '';
  const rest = optional ? 0 : number(inputs.restingHr);
  if (![age, rest].every(Number.isFinite)) return fail('Введите конечные числа для выбранного режима');
  if (!Number.isInteger(age) || age < 18 || age > 120) return fail('Возраст должен быть целым числом от 18 до 120 лет');
  if (rest < 0) return fail('Пульс покоя не может быть отрицательным');
  const max = FORMULAS[formula as keyof typeof FORMULAS](age), reserve = max - rest;
  if (rest >= max) return fail('Пульс покоя должен быть ниже оценённого максимума');
  const bound = (percent: number) => rest + reserve * percent / 100;
  const range = (low: number) => `${fmtNumber(bound(low), 0)}–${fmtNumber(bound(low + 10), 0)}`;
  return { primary: { label: 'Максимальный пульс', value: `${fmtNumber(max, 0)} уд/мин` }, secondary: [
    { label: 'Резерв сердца', value: `${fmtNumber(reserve, 0)} уд/мин` },
    { label: 'Пульс покоя', value: rest ? `${fmtNumber(rest, 0)} уд/мин` : 'не задан' },
    { label: 'Диапазон 70–80 %', value: `${range(70)} уд/мин` },
    { label: 'Диапазон 60–70 %', value: `${range(60)} уд/мин` },
  ], table: { title: 'Процентные диапазоны пульса', columns: ['Диапазон', rest > 0 ? 'Доля резерва' : 'Доля максимума', 'Пульс, уд/мин'],
    rows: [50, 60, 70, 80, 90].map(low => [`${low}–${low + 10} %`, `${low}–${low + 10} %`, range(low)]),
    note: rest > 0 ? 'Граница = пульс покоя + доля × (оценка максимума − пульс покоя).' : 'Пульс покоя не задан: границы — доли оценённого максимума.',
  }, note: 'Процентные диапазоны не определяют индивидуальный порог, безопасную нагрузку или скорость сжигания жира.' };
};
