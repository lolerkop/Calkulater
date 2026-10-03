import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Validate the active numeric contract before arithmetic; malformed values must
// never turn into a valid zero or a health interpretation.
const number = (value: unknown) => typeof value === 'string' || typeof value === 'number' ? toNumber(value, NaN) : NaN;

// Named equations compared in Peterson et al.2016, table3. Hamwi is imperial;
// use exact international pound conversion rather than rounded metric constants.
const FORMULAS = {
  male: { devine: [50, 2.3], robinson: [52, 1.9], miller: [56.2, 1.41], hamwi: [106 * .45359237, 6 * .45359237] },
  female: { devine: [45.5, 2.3], robinson: [49, 1.7], miller: [53.1, 1.36], hamwi: [100 * .45359237, 5 * .45359237] },
} as const;
export const compute: CalcFunction = (inputs) => {
  const fail = (value: string) => ({ primary: { label: 'Среднее по формулам', value: '—' }, secondary: [{ label: 'Проверьте данные', value, accent: 'red' as const }] });
  const height = number(inputs.height), sex = toStr(inputs.sex, 'male');
  if (!Object.hasOwn(FORMULAS, sex)) return fail('Неизвестный пол');
  if (!Number.isFinite(height)) return fail('Введите конечные числа для выбранного режима');
  if (height < 152.4 || height > 230) return fail('Рост для этих формул должен быть от 152,4 до 230 см');
  const set = FORMULAS[sex as keyof typeof FORMULAS], excess = height / 2.54 - 60;
  const values = Object.fromEntries(Object.entries(set).map(([key, [base, slope]]) => [key, base + slope * excess])) as Record<keyof typeof set, number>;
  const average = (values.devine + values.robinson + values.miller + values.hamwi) / 4;
  const square = (height / 100) ** 2;
  const weight = (x: number) => `${formatMeasure(x, fmtNumber)} кг`;
  return { primary: { label: 'Среднее по формулам', value: weight(average) }, secondary: [
    { label: 'Девайн', value: weight(values.devine) }, { label: 'Робинсон', value: weight(values.robinson) },
    { label: 'Миллер', value: weight(values.miller) }, { label: 'Хамви', value: weight(values.hamwi) },
    { label: 'Граница при ИМТ 18,5 (включительно)', value: weight(18.5 * square) },
    { label: 'Граница при ИМТ 25 (не включительно)', value: weight(25 * square) },
  ], note: 'Среднее — статистика сравнения формул, не цель веса и не интервал уверенности. Диапазон ИМТ относится к взрослым от 20 лет и служит скрининговым ориентиром.' };
};
