import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Себестоимость рецепта и порции.
//
// Грамматика строки намеренно «название и ДВА числа в конце»: последние два
// токена читаются как количество и цена, а всё, что перед ними, — название.
// Так работает «мука в/с 0,5 45», где в названии есть пробелы. Обратный
// порядок (название в конце) сломался бы на любом составном названии.
//
// Разделители токенов побайтово те же, что у отгруженных stats-descriptive и
// weighted-mean: запятая разделяет только перед пробелом или концом строки,
// поэтому «0,5» остаётся дробью, а «0,5 45» — двумя числами. Посетитель
// вставляет один и тот же столбец в разные калькуляторы и вправе ждать
// одинакового чтения.
//
// Строка без цены отклоняется, а не достраивается нулём: цена по умолчанию
// молча занизила бы себестоимость, и ошибка выглядела бы правдоподобно.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const servings = toNumber(inputs.servings);
  const fail = (message: string) => ({
    primary: { label: 'Стоимость порции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(servings > 0)) return fail('Число порций должно быть больше нуля');

  const rows: Array<{ name: string; qty: number; price: number }> = [];
  for (const line of toStr(inputs.ingredients, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 3) return fail(`Нужны название, количество и цена в строке: ${text}`);
    const price = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    const qty = parseLocalizedNumber(tokens[tokens.length - 2], 'ru');
    if (qty === null || price === null) return fail(`Количество и цена должны быть числами в строке: ${text}`);
    if (qty < 0 || price < 0) return fail('Количество и цена не могут быть отрицательными');
    rows.push({ name: tokens.slice(0, -2).join(' '), qty, price });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const total = rows.reduce((sum, r) => sum + r.qty * r.price, 0);
  const dearest = rows.reduce((a, b) => (b.qty * b.price > a.qty * a.price ? b : a));

  const table: CalcResultTable = {
    title: 'Состав и стоимость',
    columns: ['Ингредиент', 'Количество', 'Цена', 'Стоимость'],
    rows: rows.map((r) => [r.name, formatMeasure(r.qty, fmtNumber), fmtNumber(r.price, 2), fmtNumber(r.qty * r.price, 2)]),
  };

  return {
    primary: { label: 'Стоимость порции', value: money(total / servings) },
    secondary: [
      { label: 'Стоимость всего', value: money(total) },
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
      { label: 'Самый дорогой', value: dearest.name },
      { label: 'Порций', value: fmtNumber(servings, 0) },
    ],
    table,
  };
};
