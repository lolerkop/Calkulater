import type { CalcFunction } from '../../lib/types';
import { exactInt, INTEGER, integer, measure, stat } from '../stats-descriptive/statisticsNumeric';
import { fmtNumber } from '../../lib/format';

const choose = (n: number, k: number): bigint => {
  if (k < 0 || n < 0 || k > n) return 0n;
  const size = Math.min(k, n - k);
  let result = 1n;
  for (let i = 1; i <= size; i++) result = result * BigInt(n - size + i) / BigInt(i);
  return result;
};
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Вероятность суммы', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const count = integer(inputs.count), sides = integer(inputs.sides), target = integer(inputs.target);
  if (![count, sides, target].every(Number.isFinite)) return fail(INTEGER);
  if (count < 1) return fail('Кубиков должно быть не меньше одного');
  if (count > 10) return fail('Кубиков не больше десяти');
  if (sides < 2) return fail('У кубика должно быть не меньше двух граней');
  if (sides > 100) return fail('Граней не больше ста');
  if (target < count || target > count * sides) return fail('Сумма должна быть от числа кубиков до числа кубиков, умноженного на число граней');
  let ways = 0n;
  for (let k = 0; k <= Math.floor((target - count) / sides); k++) {
    const term = choose(count, k) * choose(target - sides * k - 1, count - 1);
    ways += k % 2 === 0 ? term : -term;
  }
  const total = BigInt(sides) ** BigInt(count), percent = Number(ways) / Number(total) * 100;
  const percentage = percent > 0 && percent < 0.005 ? stat(percent) : fmtNumber(percent, 2);
  return { primary: { label: 'Вероятность суммы', value: `${percentage}%` }, secondary: [
    { label: 'Благоприятных исходов', value: exactInt(ways) }, { label: 'Всего исходов', value: exactInt(total) },
    { label: 'Ожидаемая сумма', value: measure(count * (sides + 1) / 2) },
  ] };
};
