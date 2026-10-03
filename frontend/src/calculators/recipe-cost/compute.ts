import { tokenizeIngredientLine as tokenize, ingredientNumber as parseLocalizedNumber } from '../../lib/platform/householdIngredientLines';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Ingredient cost only: matching quantity/unit-price basis, one currency without FX.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
export const compute: CalcFunction = (inputs) => {
  const servings = toNumber(inputs.servings);
  const fail = (message: string) => ({
    primary: { label: 'Стоимость порции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (servings === null) return fail('Введите корректные числовые данные');
  if (!(servings > 0)) return fail('Число порций должно быть больше нуля');

  if (typeof inputs.ingredients !== 'string') return fail('Введите список ингредиентов текстом');

  const rows: Array<{ name: string; qty: number; price: number }> = [];
  for (const line of inputs.ingredients.split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 3) return fail(`Нужны название, количество и цена в строке: ${text}`);
    const price = parseLocalizedNumber(tokens[tokens.length - 1]);
    const qty = parseLocalizedNumber(tokens[tokens.length - 2]);
    if (qty === null || price === null) return fail(`Количество и цена должны быть числами в строке: ${text}`);
    if (qty < 0 || price < 0) return fail('Количество и цена не могут быть отрицательными');
    if (!validOutput(qty * price, qty > 0 && price > 0)) return fail('Результат вне допустимого диапазона');
    rows.push({ name: tokens.slice(0, -2).join(' '), qty, price });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const total = rows.reduce((sum, r) => sum + r.qty * r.price, 0);
  const portion = total / servings;
  if (!validOutput(total) || !validOutput(portion, total > 0)) return fail('Результат вне допустимого диапазона');
  const dearest = rows.reduce((a, b) => (b.qty * b.price > a.qty * a.price ? b : a));

  const table: CalcResultTable = {
    title: 'Состав и стоимость',
    columns: ['Ингредиент', 'Количество', 'Цена', 'Стоимость'],
    rows: rows.map((r) => [r.name, formatMeasure(r.qty, fmtNumber), fmtNumber(r.price, 2), fmtNumber(r.qty * r.price, 2)]),
  };

  return {
    primary: { label: 'Стоимость порции', value: money(portion) },
    secondary: [
      { label: 'Стоимость всего', value: money(total) },
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
      { label: 'Самый дорогой', value: dearest.name },
      { label: 'Порций', value: formatMeasure(servings, fmtNumber) },
    ],
    table,
  };
};
