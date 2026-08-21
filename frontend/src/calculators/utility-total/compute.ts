import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Итог по коммунальным платежам.
//
// Строка это услуга, расход и тариф: последние ДВА числа читаются как расход и
// тариф, всё перед ними — название услуги. Постоянная часть (домофон, вывоз
// мусора, содержание) вводится отдельным полем: у неё нет ни расхода, ни
// тарифа, и загонять её в ту же таблицу значило бы придумывать ей единицы.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const fixed = toNumber(inputs.fixed);
  const fail = (message: string) => ({
    primary: { label: 'Итого за месяц', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(fixed >= 0)) return fail('Постоянная часть не может быть отрицательной');

  const rows: Array<{ name: string; use: number; tariff: number; sum: number }> = [];
  for (const line of toStr(inputs.meters, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 3) return fail(`Нужны услуга, расход и тариф в строке: ${text}`);
    const tariff = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    const use = parseLocalizedNumber(tokens[tokens.length - 2], 'ru');
    if (use === null || tariff === null) return fail(`Расход и тариф должны быть числами в строке: ${text}`);
    if (use < 0 || tariff < 0) return fail('Расход и тариф не могут быть отрицательными');
    rows.push({ name: tokens.slice(0, -2).join(' '), use, tariff, sum: use * tariff });
  }
  if (rows.length === 0) return fail('Введите хотя бы одну позицию');

  const variable = rows.reduce((sum, r) => sum + r.sum, 0);
  const total = variable + fixed;
  const top = rows.reduce((a, b) => (b.sum > a.sum ? b : a));

  const table: CalcResultTable = {
    title: 'Расход по услугам',
    columns: ['Услуга', 'Расход', 'Тариф', 'Сумма'],
    rows: rows.map((r) => [r.name, formatMeasure(r.use, fmtNumber), fmtNumber(r.tariff, 2), fmtNumber(r.sum, 2)]),
  };

  return {
    primary: { label: 'Итого за месяц', value: money(total) },
    secondary: [
      { label: 'Позиций', value: fmtNumber(rows.length, 0) },
      { label: 'Самая дорогая услуга', value: top.name },
      { label: 'Переменная часть', value: money(variable) },
      { label: 'Постоянная часть', value: money(fixed) },
      { label: 'В год', value: money(total * 12) },
    ],
    table,
  };
};
