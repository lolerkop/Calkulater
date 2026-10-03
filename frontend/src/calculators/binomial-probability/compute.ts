import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { add, BELOW, exact, exactInt, negative, sqrtRatio, times, INPUT, integer, measure, MODE, mode, RANGE, read, stat } from '../stats-descriptive/statisticsNumeric';

const combinations = (n: number, k: number): bigint => {
  let result = 1n;
  const m = Math.min(k, n - k);
  for (let i = 1; i <= m; i++) result = result * BigInt(n - m + i) / BigInt(i);
  return result;
};
function logSum(logs: number[]): number {
  const largest = Math.max(...logs);
  if (largest === -Infinity) return 0;
  return Math.min(1, Math.exp(largest + Math.log(logs.reduce((sum, x) => sum + Math.exp(x - largest), 0))));
}
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'Вероятность', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  const n = integer(inputs.n), k = integer(inputs.k), p = read(inputs.p);
  const selected = mode(inputs.mode, 'exactly', ['exactly', 'atMost', 'atLeast']);
  if (!selected) return fail(MODE);
  if (![n, k].every(Number.isFinite)) return fail('Число испытаний и успехов должно быть целым');
  if (n < 1) return fail('Число испытаний должно быть больше нуля');
  if (n > 1000) return fail('Поддерживается не больше 1000 испытаний');
  if (k < 0) return fail('Число успехов не может быть отрицательным');
  if (k > n) return fail('Число успехов не может превышать число испытаний');
  if (!Number.isFinite(p)) return fail(INPUT);
  if (p < 0 || p > 1) return fail('Вероятность успеха должна быть от 0 до 1');
  let pmfValue: number, atMost: number, atLeast: number;
  const positive = p > 0 && p < 1;
  if (!positive) {
    const successes = p === 0 ? 0 : n;
    pmfValue = k === successes ? 1 : 0; atMost = successes <= k ? 1 : 0; atLeast = successes >= k ? 1 : 0;
  } else {
    const logs: number[] = [];
    let logC = 0;
    for (let i = 0; i <= n; i++) {
      if (i) logC += Math.log(n - i + 1) - Math.log(i);
      logs.push(logC + i * Math.log(p) + (n - i) * Math.log1p(-p));
    }
    pmfValue = Math.exp(logs[k]); atMost = k === n ? 1 : logSum(logs.slice(0, k + 1)); atLeast = k === 0 ? 1 : logSum(logs.slice(k));
  }
  const value = selected === 'atMost' ? atMost : selected === 'atLeast' ? atLeast : pmfValue;
  if (!Number.isFinite(value) || (positive && value === 0)) return fail(RANGE);
  const probability = (x: number): string => positive && x === 0 ? BELOW : stat(x);
  const label = selected === 'atMost' ? 'Вероятность не более k' : selected === 'atLeast' ? 'Вероятность не менее k' : 'Вероятность ровно k';
  const percent = value * 100;
  return { primary: { label, value: stat(value) }, secondary: [
    { label: 'В процентах', value: `${percent > 0 && percent < 0.005 ? stat(percent) : fmtNumber(percent, 2)}%` },
    { label: 'Вероятность ровно k', value: probability(pmfValue) }, { label: 'Не более k', value: probability(atMost) }, { label: 'Не менее k', value: probability(atLeast) },
    { label: 'Число сочетаний', value: exactInt(combinations(n, k)) }, { label: 'Математическое ожидание', value: measure(n * p) },
    { label: 'Стандартное отклонение', value: stat(sqrtRatio(times(exact(n), exact(p), add(exact(1), negative(exact(p)))), exact(1))) },
  ] };
};
