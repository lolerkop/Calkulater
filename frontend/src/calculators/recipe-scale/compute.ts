import { tokenizeIngredientLine as tokenize, ingredientNumber as parseLocalizedNumber } from '../../lib/platform/householdIngredientLines';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Linear per-row scaling; a mixed-unit numerical sum is not a physical total.
export const compute: CalcFunction = (inputs) => {
  const from = toNumber(inputs.fromServings);
  const to = toNumber(inputs.toServings);
  const fail = (message: string) => ({
    primary: { label: 'Коэффициент', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (from === null || to === null) return fail('Введите корректные числовые данные');
  if (!(from > 0)) return fail('Исходное число порций должно быть больше нуля');
  if (!(to > 0)) return fail('Нужное число порций должно быть больше нуля');

  if (typeof inputs.ingredients !== 'string') return fail('Введите список ингредиентов текстом');

  const rows: Array<{ name: string; qty: number }> = [];
  for (const line of inputs.ingredients.split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 2) return fail(`Нужны название и количество в строке: ${text}`);
    const qty = parseLocalizedNumber(tokens[tokens.length - 1]);
    if (qty === null) return fail(`Количество должно быть числом в строке: ${text}`);
    if (qty < 0) return fail('Количество не может быть отрицательным');
    rows.push({ name: tokens.slice(0, -1).join(' '), qty });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const k = to / from;
  const oldTotal = rows.reduce((s, r) => s + r.qty, 0);

  if (!validOutput(k, true) || !validOutput(oldTotal) || !validOutput(oldTotal * k, oldTotal > 0) || rows.some(r => !validOutput(r.qty * k, r.qty > 0))) return fail('Результат вне допустимого диапазона');
  const table: CalcResultTable = {
    title: 'Пересчёт ингредиентов',
    columns: ['Ингредиент', 'Было', 'Стало'],
    rows: rows.map((r) => [r.name, formatMeasure(r.qty, fmtNumber), formatMeasure(r.qty * k, fmtNumber)]),
  };

  return {
    note: 'Суммы количества имеют смысл только при одной общей единице во всех строках. Смешанные единицы сохраняются по строкам, но их сумму нельзя читать как массу или объём.',
    primary: { label: 'Коэффициент', value: formatStatistic(k, fmtNumber) },
    secondary: [
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
      { label: 'Было всего', value: formatMeasure(oldTotal, fmtNumber) },
      { label: 'Стало всего', value: formatMeasure(oldTotal * k, fmtNumber) },
      { label: 'Порций было', value: formatMeasure(from, fmtNumber) },
      { label: 'Порций стало', value: formatMeasure(to, fmtNumber) },
    ],
    table,
  };
};
