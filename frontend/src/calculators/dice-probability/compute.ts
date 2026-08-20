import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Вероятность выпадения заданной суммы на нескольких одинаковых кубиках.
//
// Число благоприятных исходов даёт формула включений-исключений:
//
//   N(сумма) = Σ (−1)^k · C(кубиков, k) · C(сумма − граней·k − 1, кубиков − 1)
//
// суммирование идёт по k от нуля до ⌊(сумма − кубиков) / граней⌋. Всего исходов
// ровно граней^кубиков, и вероятность — их отношение.
//
// ТОЧНОСТЬ. Оба целых считаются в BigInt и потому точны при любых допустимых
// входах: граней^кубиков перерастает 2⁵³ уже на десяти двадцатигранниках, и
// обычная арифметика double начала бы терять единицы в младших разрядах —
// незаметно, но именно там, где живёт число исходов. Границу поставили на
// ВХОДАХ (не больше десяти кубиков и ста граней), а не на проверке готовой
// суммы: ограничение принадлежит тому, что вводит посетитель.
//
// Дробным остаётся только отношение — ему точность целого не нужна.
const factorials: bigint[] = [1n];
const factorial = (n: number): bigint => {
  for (let i = factorials.length; i <= n; i += 1) factorials[i] = factorials[i - 1] * BigInt(i);
  return factorials[n];
};
const choose = (n: number, k: number): bigint =>
  k < 0 || n < 0 || k > n ? 0n : factorial(n) / (factorial(k) * factorial(n - k));

const exactInt = (value: bigint) => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(value);

export const compute: CalcFunction = (inputs) => {
  const count = Math.floor(toNumber(inputs.count));
  const sides = Math.floor(toNumber(inputs.sides));
  const target = Math.floor(toNumber(inputs.target));

  const fail = (message: string) => ({
    primary: { label: 'Вероятность суммы', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(count >= 1)) return fail('Кубиков должно быть не меньше одного');
  if (count > 10) return fail('Кубиков не больше десяти');
  if (!(sides >= 2)) return fail('У кубика должно быть не меньше двух граней');
  if (sides > 100) return fail('Граней не больше ста');
  if (!(target >= count && target <= count * sides)) {
    return fail('Сумма должна быть от числа кубиков до числа кубиков, умноженного на число граней');
  }

  let ways = 0n;
  for (let k = 0; k <= Math.floor((target - count) / sides); k += 1) {
    const term = choose(count, k) * choose(target - sides * k - 1, count - 1);
    ways += k % 2 === 0 ? term : -term;
  }
  const total = BigInt(sides) ** BigInt(count);
  const probability = (Number(ways) / Number(total)) * 100;

  return {
    primary: { label: 'Вероятность суммы', value: `${fmtNumber(probability, 2)}%` },
    secondary: [
      { label: 'Благоприятных исходов', value: exactInt(ways) },
      { label: 'Всего исходов', value: exactInt(total) },
      { label: 'Ожидаемая сумма', value: formatMeasure((count * (sides + 1)) / 2, fmtNumber) },
    ],
  };
};
