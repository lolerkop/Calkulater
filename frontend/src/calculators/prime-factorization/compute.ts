import type { CalcFunction } from '../../lib/types';
import { fmtInt, toNumber } from '../../lib/format';

// Разложение числа на простые множители пробным делением.
//
// Граница домена выбрана по стоимости, а не по вкусу: пробное деление идёт до
// корня из числа, поэтому 10¹² означает миллион шагов — мгновенно в браузере.
// Выше начинается и потеря точности обычных чисел, и заметная задержка,
// поэтому граница объявлена явно, а не молча обрезана.
const MAX_INPUT = 1e12;
const SUPERSCRIPT = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

function superscript(value: number): string {
  return String(value).split('').map((digit) => SUPERSCRIPT[Number(digit)]).join('');
}

export const compute: CalcFunction = (inputs) => {
  const n = toNumber(inputs.n);

  const fail = (message: string) => ({
    primary: { label: 'Разложение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(n)) return fail('Число должно быть целым');
  if (n < 2) return fail('Раскладывают числа от двух и больше');
  if (n > MAX_INPUT) return fail('Число слишком велико для точного разложения');

  const factors: { prime: number; power: number }[] = [];
  let rest = n;
  for (let divisor = 2; divisor * divisor <= rest; divisor += divisor === 2 ? 1 : 2) {
    let power = 0;
    while (rest % divisor === 0) {
      rest /= divisor;
      power += 1;
    }
    if (power > 0) factors.push({ prime: divisor, power });
  }
  // Остаток больше единицы сам является простым: все меньшие делители исчерпаны.
  if (rest > 1) factors.push({ prime: rest, power: 1 });

  const written = factors
    .map(({ prime, power }) => (power === 1 ? fmtInt(prime) : `${fmtInt(prime)}${superscript(power)}`))
    .join(' · ');
  const divisors = factors.reduce((total, { power }) => total * (power + 1), 1);
  const isPrime = factors.length === 1 && factors[0].power === 1;

  return {
    primary: { label: 'Разложение', value: `${fmtInt(n)} = ${written}` },
    secondary: [
      { label: 'Различных простых', value: fmtInt(factors.length) },
      { label: 'Всего делителей', value: fmtInt(divisors) },
      { label: 'Простое число', value: isPrime ? 'Да' : 'Нет', accent: isPrime ? 'green' : 'neutral' },
    ],
  };
};
