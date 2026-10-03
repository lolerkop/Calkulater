import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { integerInput } from '../../lib/platform/strictNumericInput';

// Разложение числа на простые множители пробным делением.
//
// Limit10^12 bounds trial division, below the general safe-integer limit.
const MAX_INPUT = 1e12;
const SUPERSCRIPT = ['⁰', '¹', '²', '³', '⁴', '⁵', '⁶', '⁷', '⁸', '⁹'];

function superscript(value: number): string {
  return String(value).split('').map((digit) => SUPERSCRIPT[Number(digit)]).join('');
}

export const compute: CalcFunction = (inputs) => {
  const n = integerInput(inputs.n);

  const fail = (message: string) => ({
    primary: { label: 'Разложение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (n === null) return fail('Число должно быть целым');
  if (n < 2) return fail('Раскладывают числа от двух и больше');
  if (n > MAX_INPUT) return fail('Здесь раскладываются числа до 1000000000000');

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
