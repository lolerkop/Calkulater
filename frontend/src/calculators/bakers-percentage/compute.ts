import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Пекарские проценты.
//
// В пекарской записи мука всегда 100 %, а всё остальное выражено долей от НЕЁ,
// а не от массы теста. Поэтому сумма процентов больше ста — это норма, а не
// ошибка: тесто при гидратации 68 % весит 170 % массы муки.
//
// Гидратация распознаётся по названию ингредиента и намеренно принимает и
// русское, и английское слово: умолчание поля не имеет пути локализации и
// обязано быть нейтральным, а посетитель вправе писать на своём языке.

const WATER = /вод|water/i;
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const flour = toNumber(inputs.flour);
  const fail = (message: string) => ({
    primary: { label: 'Вес теста', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(flour > 0)) return fail('Вес муки должен быть больше нуля');

  const rows: Array<{ name: string; percent: number; weight: number }> = [];
  for (const line of toStr(inputs.ingredients, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 2) return fail(`Строка «${text}»: нужны название и процент`);
    const percent = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    if (percent === null) return fail(`Строка «${text}»: процент должен быть числом`);
    if (percent < 0) return fail('Процент не может быть отрицательным');
    rows.push({ name: tokens.slice(0, -1).join(' '), percent, weight: (flour * percent) / 100 });
  }
  if (rows.length === 0) return fail('Введите хотя бы один ингредиент');

  const total = flour + rows.reduce((s, r) => s + r.weight, 0);
  const water = rows.filter((r) => WATER.test(r.name)).reduce((s, r) => s + r.weight, 0);

  const table: CalcResultTable = {
    title: 'Ингредиенты по пекарским процентам',
    columns: ['Ингредиент', 'Процент', 'Вес, г'],
    rows: rows.map((r) => [r.name, `${formatMeasure(r.percent, fmtNumber)} %`, formatMeasure(r.weight, fmtNumber)]),
    note: 'Мука всегда принимается за 100 %, поэтому сумма процентов больше ста — это норма.',
  };

  return {
    primary: { label: 'Вес теста', value: `${formatMeasure(total, fmtNumber)} г` },
    secondary: [
      { label: 'Гидратация', value: `${fmtNumber((water / flour) * 100, 2)}%` },
      { label: 'Мука', value: `${formatMeasure(flour, fmtNumber)} г` },
      { label: 'Ингредиентов', value: fmtNumber(rows.length, 0) },
    ],
    table,
  };
};
