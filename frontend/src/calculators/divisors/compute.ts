import type { CalcFunction } from '../../lib/types';
import { fmtInt, toNumber } from '../../lib/format';

// Все делители числа, их количество и сумма.
//
// Перебор идёт до квадратного корня: каждый найденный делитель сразу даёт
// парный, поэтому для числа порядка 10^12 хватает миллиона шагов вместо
// триллиона. У полного квадрата пара совпадает сама с собой, и дубль
// приходится убирать — иначе количество делителей вышло бы чётным там, где
// оно всегда нечётно.
//
// Разложение на простые множители отвечает на другой вопрос: из него полный
// список делителей ещё надо построить.
const MAX_N = 1e12;
const SHOWN = 40;

export const compute: CalcFunction = (inputs) => {
  const n = toNumber(inputs.n);

  const fail = (message: string) => ({
    primary: { label: 'Делители', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(n)) return fail('Число должно быть целым');
  if (n < 1) return fail('Делители считаются для натуральных чисел, начиная с единицы');
  if (n > MAX_N) return fail('Здесь считаются числа до триллиона');

  const small: number[] = [];
  const large: number[] = [];
  for (let i = 1; i * i <= n; i += 1) {
    if (n % i !== 0) continue;
    small.push(i);
    if (i !== n / i) large.push(n / i);
  }
  const all = [...small, ...large.reverse()];
  const sum = all.reduce((total, value) => total + value, 0);

  const list = all.length > SHOWN
    ? `${all.slice(0, SHOWN).join(', ')} … и ещё ${all.length - SHOWN}`
    : all.join(', ');

  const secondary = [
    { label: 'Количество делителей', value: fmtInt(all.length) },
    { label: 'Сумма делителей', value: fmtInt(sum) },
    { label: 'Сумма собственных делителей', value: fmtInt(sum - n) },
  ];

  if (all.length === 2) secondary.push({ label: 'Это число', value: 'простое' });
  else if (n > 1 && sum - n === n) secondary.push({ label: 'Это число', value: 'совершенное' });

  return {
    primary: { label: 'Делители', value: list },
    secondary,
  };
};
