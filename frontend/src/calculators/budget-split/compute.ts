import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave11Input';

// Allocate integer cents with the largest-remainder method. Independent
// rounding plus a single correction can turn an equal share negative.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const tokenize = (raw: string): string[] => raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
export const compute: CalcFunction = (inputs) => {
  const total = number(inputs.total);
  const mode = choice(inputs.mode, ['income', 'equal'], 'income');
  const fail = (message: string) => ({ primary: { label: 'Наибольший взнос', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode === null) return fail('Выберите корректный режим расчёта');
  if (total === null || total <= 0) return fail('Сумма к делению должна быть больше нуля');
  if (typeof inputs.incomes !== 'string') return fail('Введите имена и числовые доходы по одному участнику в строке');
  const cents = Math.round((total + Number.EPSILON) * 100);
  if (!Number.isSafeInteger(cents) || cents < 1) return fail('Сумма должна округляться хотя бы до одной копейки и укладываться в точные целые копейки');
  const people: Array<{ name: string; income: number }> = [];
  for (const line of inputs.incomes.split('\n')) {
    const tokens = tokenize(line.trim());
    if (!tokens.length) continue;
    if (tokens.length < 2) return fail('Введите имена и числовые доходы по одному участнику в строке');
    const income = number(tokens[tokens.length - 1]);
    if (income === null || income < 0) return fail('Доход должен быть неотрицательным числом');
    people.push({ name: tokens.slice(0, -1).join(' '), income });
  }
  if (!people.length) return fail('Введите хотя бы одного участника');
  const maxIncome = people.reduce((max, p) => Math.max(max, p.income), 0);
  if (mode === 'income' && maxIncome === 0) return fail('Суммарный доход равен нулю: делить пропорционально нечему');
  const weights = people.map(p => mode === 'equal' ? 1 : p.income / maxIncome);
  const sumWeights = weights.reduce((sum, value) => sum + value, 0);
  const quotas = weights.map(value => cents * (value / sumWeights));
  const allocated = quotas.map(Math.floor);
  const remainder = cents - allocated.reduce((sum, value) => sum + value, 0);
  if (!Number.isSafeInteger(remainder) || remainder < 0 || remainder > people.length) return fail('Результат выходит за числовые пределы расчёта');
  const priority = quotas.map((quota, index) => ({ index, fraction: quota - allocated[index] })).sort((a, b) => b.fraction - a.fraction || a.index - b.index);
  for (let i = 0; i < remainder; i++) allocated[priority[i].index] += 1;
  const shares = allocated.map(value => value / 100);
  const roundedTotal = cents / 100;
  const table: CalcResultTable = {
    title: 'Кто сколько вносит', columns: ['Участник', 'Доход', 'Доля', 'Взнос'],
    rows: people.map((p, i) => [p.name, fmtNumber(p.income, 2), `${fmtNumber((allocated[i] / cents) * 100, 2)} %`, fmtNumber(shares[i], 2)]),
  };
  return {
    primary: { label: 'Наибольший взнос', value: money(shares.reduce((max, value) => Math.max(max, value), 0)) },
    secondary: [
      { label: 'Наименьший взнос', value: money(shares.reduce((min, value) => Math.min(min, value), Infinity)) },
      { label: 'Участников', value: fmtNumber(people.length, 0) },
      { label: 'Сумма к делению', value: money(roundedTotal) },
      { label: 'Проверка суммы', value: money(allocated.reduce((sum, value) => sum + value, 0) / 100) },
    ], table,
  };
};
