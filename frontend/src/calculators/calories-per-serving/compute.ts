import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Калорийность порции по списку ингредиентов.
//
// Грамматика строки та же, что у отгруженного recipe-cost: последние ДВА числа
// читаются как масса и калорийность на сто граммов, всё перед ними — название.
// Так разбирается «мука в/с 300 364», где в названии есть пробел.
//
// Строка без калорийности отклоняется, а не достраивается нулём: подставленный
// ноль занизил бы итог молча, и ошибка выглядела бы правдоподобно.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const servings = toNumber(inputs.servings);
  const fail = (message: string) => ({
    primary: { label: 'Калорий в порции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(servings >= 1)) return fail('Порций должно быть не меньше одной');

  const rows: Array<{ name: string; grams: number; per100: number; kcal: number }> = [];
  for (const line of toStr(inputs.ingredients, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 3) return fail(`Нужны название, масса и калорийность в строке: ${text}`);
    const per100 = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    const grams = parseLocalizedNumber(tokens[tokens.length - 2], 'ru');
    if (grams === null || per100 === null) return fail(`Масса и калорийность должны быть числами в строке: ${text}`);
    if (grams < 0 || per100 < 0) return fail('Масса и калорийность не могут быть отрицательными');
    rows.push({ name: tokens.slice(0, -2).join(' '), grams, per100, kcal: (grams / 100) * per100 });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const total = rows.reduce((sum, r) => sum + r.kcal, 0);
  const mass = rows.reduce((sum, r) => sum + r.grams, 0);
  const top = rows.reduce((a, b) => (b.kcal > a.kcal ? b : a));

  const table: CalcResultTable = {
    title: 'Вклад ингредиентов',
    columns: ['Ингредиент', 'Граммы', 'Ккал на 100 г', 'Ккал'],
    rows: rows.map((r) => [r.name, formatMeasure(r.grams, fmtNumber), fmtNumber(r.per100, 0), fmtNumber(r.kcal, 0)]),
  };

  return {
    primary: { label: 'Калорий в порции', value: `${fmtNumber(total / servings, 0)} ккал` },
    secondary: [
      { label: 'Всего калорий', value: `${fmtNumber(total, 0)} ккал` },
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
      { label: 'Самый калорийный', value: top.name },
      { label: 'Порций', value: fmtNumber(servings, 0) },
      { label: 'Масса порции', value: `${fmtNumber(mass / servings, 1)} г` },
    ],
    table,
  };
};
