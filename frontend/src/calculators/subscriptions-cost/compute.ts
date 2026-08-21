import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';

// Стоимость подписок, приведённая к месяцу.
//
// Строка это название, цена и период В МЕСЯЦАХ: последние ДВА числа читаются
// как цена и период, всё перед ними — название. Период числом, а не словом,
// потому что умолчание поля не имеет пути локализации: «год» утекло бы в
// английские данные, а «12» одинаково читается везде.
//
// Годовая сумма считается от НЕокруглённого месячного итога: округлять
// промежуточное значение и потом умножать на двенадцать — верный способ
// разойтись с самим собой на несколько рублей.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({
    primary: { label: 'В месяц', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const rows: Array<{ name: string; price: number; months: number; perMonth: number }> = [];
  for (const line of toStr(inputs.items, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 3) return fail(`Нужны название, цена и период в месяцах в строке: ${text}`);
    const months = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    const price = parseLocalizedNumber(tokens[tokens.length - 2], 'ru');
    if (price === null || months === null) return fail(`Цена и период должны быть числами в строке: ${text}`);
    if (price < 0) return fail('Цена не может быть отрицательной');
    if (!(months > 0)) return fail(`Период в месяцах должен быть больше нуля в строке: ${text}`);
    rows.push({ name: tokens.slice(0, -2).join(' '), price, months, perMonth: price / months });
  }
  if (rows.length === 0) return fail('Введите хотя бы одну подписку');

  const perMonth = rows.reduce((sum, r) => sum + r.perMonth, 0);
  const top = rows.reduce((a, b) => (b.perMonth > a.perMonth ? b : a));

  const table: CalcResultTable = {
    title: 'Подписки в пересчёте на месяц',
    columns: ['Подписка', 'Цена', 'Месяцев', 'В месяц'],
    rows: rows.map((r) => [r.name, fmtNumber(r.price, 2), fmtNumber(r.months, 0), fmtNumber(r.perMonth, 2)]),
  };

  return {
    primary: { label: 'В месяц', value: money(perMonth) },
    secondary: [
      { label: 'В год', value: money(perMonth * 12) },
      { label: 'Подписок', value: fmtNumber(rows.length, 0) },
      { label: 'Самая дорогая', value: top.name },
      { label: 'Её вклад в месяц', value: money(top.perMonth) },
    ],
    table,
  };
};
