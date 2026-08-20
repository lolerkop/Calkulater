import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Биномиальная вероятность.
//
// Отличается от базовой вероятности тем, что считает не один исход, а СЕРИЮ
// независимых испытаний: вероятность ровно k успехов из n равна C(n,k)·pᵏ·(1−p)ⁿ⁻ᵏ.
// Три сомножителя отвечают за разное — сколько существует способов расставить
// успехи, насколько вероятны сами успехи и насколько вероятны остальные неудачи.
//
// Число сочетаний считается мультипликативно, а не через факториалы: 20! уже
// не помещается в точное представление double, тогда как C(20,5) — целое
// число из четырёх цифр. Порядок умножения и деления выбран так, чтобы
// промежуточное значение всегда оставалось целым.

const stat = (value: number) => formatStatistic(value, fmtNumber);

const combinations = (n: number, k: number): number => {
  const m = Math.min(k, n - k);
  let result = 1;
  for (let i = 1; i <= m; i += 1) result = (result * (n - m + i)) / i;
  return Math.round(result);
};

const pmf = (n: number, k: number, p: number): number =>
  combinations(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);

export const compute: CalcFunction = (inputs) => {
  const n = toNumber(inputs.n);
  const k = toNumber(inputs.k);
  const p = toNumber(inputs.p);
  const mode = toStr(inputs.mode, 'exactly');

  const fail = (message: string) => ({
    primary: { label: 'Вероятность', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(n) || !Number.isInteger(k)) return fail('Число испытаний и успехов должно быть целым');
  if (!(n >= 1)) return fail('Число испытаний должно быть больше нуля');
  if (k < 0) return fail('Число успехов не может быть отрицательным');
  if (k > n) return fail('Число успехов не может превышать число испытаний');
  if (p < 0 || p > 1) return fail('Вероятность успеха должна быть от 0 до 1');

  const exact = pmf(n, k, p);
  let atMost = 0;
  for (let i = 0; i <= k; i += 1) atMost += pmf(n, i, p);
  let atLeast = 0;
  for (let i = k; i <= n; i += 1) atLeast += pmf(n, i, p);

  const value = mode === 'atMost' ? atMost : mode === 'atLeast' ? atLeast : exact;
  const label = mode === 'atMost' ? 'Вероятность не более k' : mode === 'atLeast' ? 'Вероятность не менее k' : 'Вероятность ровно k';

  return {
    primary: { label, value: stat(value) },
    secondary: [
      { label: 'В процентах', value: `${fmtNumber(value * 100, 2)}%` },
      { label: 'Вероятность ровно k', value: stat(exact) },
      { label: 'Не более k', value: stat(atMost) },
      { label: 'Не менее k', value: stat(atLeast) },
      { label: 'Число сочетаний', value: fmtNumber(combinations(n, k), 0) },
      { label: 'Математическое ожидание', value: formatMeasure(n * p, fmtNumber) },
      { label: 'Стандартное отклонение', value: stat(Math.sqrt(n * p * (1 - p))) },
    ],
  };
};
