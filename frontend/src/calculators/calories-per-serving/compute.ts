import { tokenizeIngredientLine as tokenize, ingredientNumber as parseLocalizedNumber } from '../../lib/platform/householdIngredientLines';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Sum listed ingredient kcal, assuming all listed portions are consumed.
export const compute: CalcFunction = (inputs) => {
  const servings = toNumber(inputs.servings);
  const fail = (message: string) => ({
    primary: { label: 'Калорий в порции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (servings === null) return fail('Введите корректные числовые данные');
  if (!(servings >= 1)) return fail('Порций должно быть не меньше одной');

  if (typeof inputs.ingredients !== 'string') return fail('Введите список ингредиентов текстом');

  const rows: Array<{ name: string; grams: number; per100: number; kcal: number }> = [];
  for (const line of inputs.ingredients.split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 3) return fail(`Нужны название, масса и калорийность в строке: ${text}`);
    const per100 = parseLocalizedNumber(tokens[tokens.length - 1]);
    const grams = parseLocalizedNumber(tokens[tokens.length - 2]);
    if (grams === null || per100 === null) return fail(`Масса и калорийность должны быть числами в строке: ${text}`);
    if (grams < 0 || per100 < 0) return fail('Масса и калорийность не могут быть отрицательными');
    const kcal = grams * (per100 / 100);
    if (!validOutput(kcal, grams > 0 && per100 > 0)) return fail('Результат вне допустимого диапазона');
    rows.push({ name: tokens.slice(0, -2).join(' '), grams, per100, kcal });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const total = rows.reduce((sum, r) => sum + r.kcal, 0);
  const mass = rows.reduce((sum, r) => sum + r.grams, 0);
  const portion = total / servings;
  const portionMass = mass / servings;
  if (![total, mass].every(v => validOutput(v)) || !validOutput(portion, total > 0) || !validOutput(portionMass, mass > 0)) return fail('Результат вне допустимого диапазона');
  const top = rows.reduce((a, b) => (b.kcal > a.kcal ? b : a));

  const table: CalcResultTable = {
    title: 'Вклад ингредиентов',
    columns: ['Ингредиент', 'Граммы', 'Ккал на 100 г', 'Ккал'],
    rows: rows.map((r) => [r.name, formatMeasure(r.grams, fmtNumber), fmtNumber(r.per100, 0), fmtNumber(r.kcal, 0)]),
  };

  return {
    note: 'Учтена энергия перечисленных ингредиентов при условии их полного потребления. Масса порции относится к введённым массам, а не к взвешенному готовому блюду.',
    primary: { label: 'Калорий в порции', value: `${fmtNumber(portion, 0)} ккал` },
    secondary: [
      { label: 'Всего калорий', value: `${fmtNumber(total, 0)} ккал` },
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
      { label: 'Самый калорийный', value: top.name },
      { label: 'Порций', value: formatMeasure(servings, fmtNumber) },
      { label: 'Масса порции', value: `${fmtNumber(portionMass, 1)} г` },
    ],
    table,
  };
};
