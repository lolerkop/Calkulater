import { tokenizeIngredientLine as tokenize, ingredientNumber as parseLocalizedNumber } from '../../lib/platform/householdIngredientLines';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Ingredient mass = total flour mass × percentage/100; flour is the 100% basis.
const WATER = /(?:^|\s)(?:вода|воды|water|wasser|agua)(?:$|\s)/iu;
export const compute: CalcFunction = (inputs) => {
  const flour = toNumber(inputs.flour);
  const fail = (message: string) => ({
    primary: { label: 'Вес теста', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (flour === null) return fail('Введите корректные числовые данные');
  if (!(flour > 0)) return fail('Вес муки должен быть больше нуля');

  if (typeof inputs.ingredients !== 'string') return fail('Введите список ингредиентов текстом');

  const rows: Array<{ name: string; percent: number; weight: number }> = [];
  for (const line of inputs.ingredients.split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 2) return fail(`Нужны название и процент в строке: ${text}`);
    const percent = parseLocalizedNumber(tokens[tokens.length - 1]);
    if (percent === null) return fail(`Процент должен быть числом в строке: ${text}`);
    if (percent < 0) return fail('Процент не может быть отрицательным');
    const weight = flour * (percent / 100);
    if (!validOutput(weight, percent > 0)) return fail('Результат вне допустимого диапазона');
    rows.push({ name: tokens.slice(0, -1).join(' '), percent, weight });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const total = flour + rows.reduce((s, r) => s + r.weight, 0);
  const water = rows.filter((r) => WATER.test(r.name)).reduce((s, r) => s + r.weight, 0);

  const hydration = (water / flour) * 100;
  if (![total, water, hydration].every(v => validOutput(v))) return fail('Результат вне допустимого диапазона');
  const table: CalcResultTable = {
    title: 'Ингредиенты по пекарским процентам',
    columns: ['Ингредиент', 'Процент', 'Вес, г'],
    rows: rows.map((r) => [r.name, `${formatMeasure(r.percent, fmtNumber)} %`, formatMeasure(r.weight, fmtNumber)]),
    note: 'Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.',
  };

  return {
    primary: { label: 'Вес теста', value: `${formatMeasure(total, fmtNumber)} г` },
    secondary: [
      { label: 'Гидратация', value: `${fmtNumber(hydration, 2)}%` },
      { label: 'Мука', value: `${formatMeasure(flour, fmtNumber)} г` },
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
    ],
    table,
  };
};
