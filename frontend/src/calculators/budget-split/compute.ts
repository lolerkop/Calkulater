import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';

// Деление общей суммы между людьми.
//
// Грамматика строки — «имя и ОДНО число в конце»: последний токен читается как
// доход, всё перед ним считается именем. Так работает «анна с» и «иван петров
// 90000», где в имени есть пробел. Разделители те же, что у отгруженных
// recipe-cost и weighted-mean: запятая разделяет только перед пробелом или
// концом строки, поэтому «80000,5» остаётся дробью.
//
// Сумма округлённых долей ОБЯЗАНА совпасть с делимой суммой. Три человека и
// сто рублей дают по 33,333…, а три раза по 33,33 — это 99,99: недостающая
// копейка относится к наибольшей доле. Без этого таблица показывала бы взносы,
// которые в сумме не дают исходное число, и посетитель был бы прав, не поверив.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
const round2 = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100;

export const compute: CalcFunction = (inputs) => {
  const total = toNumber(inputs.total);
  const mode = toStr(inputs.mode, 'income');
  const fail = (message: string) => ({
    primary: { label: 'Наибольший взнос', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(total > 0)) return fail('Сумма к делению должна быть больше нуля');

  const people: Array<{ name: string; income: number }> = [];
  for (const line of toStr(inputs.incomes, '').split('\n')) {
    const text = line.trim();
    if (!text) continue;
    const tokens = tokenize(text);
    if (tokens.length < 2) return fail(`Нужны имя и доход в строке: ${text}`);
    const income = parseLocalizedNumber(tokens[tokens.length - 1], 'ru');
    if (income === null) return fail(`Доход должен быть числом в строке: ${text}`);
    if (income < 0) return fail('Доход не может быть отрицательным');
    people.push({ name: tokens.slice(0, -1).join(' '), income });
  }
  if (people.length === 0) return fail('Введите хотя бы одного участника');

  const sum = people.reduce((acc, p) => acc + p.income, 0);
  if (mode === 'income' && !(sum > 0)) return fail('Суммарный доход равен нулю: делить пропорционально нечему');

  const raw = people.map((p) => (mode === 'equal' ? total / people.length : (total * p.income) / sum));
  const shares = raw.map(round2);

  // Коррекция дрейфа: остаток относится к наибольшей доле.
  const drift = round2(total - shares.reduce((acc, v) => acc + v, 0));
  if (drift !== 0) {
    let top = 0;
    for (let i = 1; i < shares.length; i += 1) if (shares[i] > shares[top]) top = i;
    shares[top] = round2(shares[top] + drift);
  }

  const table: CalcResultTable = {
    title: 'Кто сколько вносит',
    columns: ['Участник', 'Доход', 'Доля', 'Взнос'],
    rows: people.map((p, i) => [
      p.name,
      fmtNumber(p.income, 2),
      `${fmtNumber((shares[i] / total) * 100, 2)} %`,
      fmtNumber(shares[i], 2),
    ]),
  };

  return {
    primary: { label: 'Наибольший взнос', value: money(Math.max(...shares)) },
    secondary: [
      { label: 'Наименьший взнос', value: money(Math.min(...shares)) },
      { label: 'Участников', value: fmtNumber(people.length, 0) },
      { label: 'Сумма к делению', value: money(total) },
      { label: 'Проверка суммы', value: money(shares.reduce((acc, v) => acc + v, 0)) },
    ],
    table,
  };
};
