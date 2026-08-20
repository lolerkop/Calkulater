import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Пересчёт рецепта на другое число порций.
//
// Грамматика проще, чем у стоимости рецепта: в конце строки ОДНО число —
// количество, всё перед ним название. Разделители те же, что у отгруженных
// списковых калькуляторов, поэтому «0,5» остаётся дробью.
//
// Коэффициент показан отдельной строкой намеренно: посетитель обычно хочет
// знать не только новые граммы, но и во сколько раз он увеличивает замес —
// это число проще держать в голове, чем четыре пересчитанных веса.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const from = toNumber(inputs.fromServings);
  const to = toNumber(inputs.toServings);
  const fail = (message: string) => ({
    primary: { label: 'Коэффициент', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(from > 0)) return fail('Исходное число порций должно быть больше нуля');
  if (!(to > 0)) return fail('Нужное число порций должно быть больше нуля');

  const rows: Array<{ name: string; qty: number }> = [];
  for (const line of toStr(inputs.ingredients, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 2) return fail(`Строка «${text}»: нужны название и количество`);
    const qty = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    if (qty === null) return fail(`Строка «${text}»: количество должно быть числом`);
    if (qty < 0) return fail('Количество не может быть отрицательным');
    rows.push({ name: tokens.slice(0, -1).join(' '), qty });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const k = to / from;
  const oldTotal = rows.reduce((s, r) => s + r.qty, 0);

  const table: CalcResultTable = {
    title: 'Пересчёт ингредиентов',
    columns: ['Ингредиент', 'Было', 'Стало'],
    rows: rows.map((r) => [r.name, formatMeasure(r.qty, fmtNumber), formatMeasure(r.qty * k, fmtNumber)]),
  };

  return {
    primary: { label: 'Коэффициент', value: formatStatistic(k, fmtNumber) },
    secondary: [
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
      { label: 'Было всего', value: formatMeasure(oldTotal, fmtNumber) },
      { label: 'Стало всего', value: formatMeasure(oldTotal * k, fmtNumber) },
      { label: 'Порций было', value: fmtNumber(from, 0) },
      { label: 'Порций стало', value: fmtNumber(to, 0) },
    ],
    table,
  };
};
