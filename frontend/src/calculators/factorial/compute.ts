import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { integerInput } from './numeric';

// Факториал: произведение всех натуральных чисел до n.
//
// BigInt preserves every integer digit. Beyond the safe-integer range,
// Number cannot guarantee exactness for every integer (20! itself is representable).
//
// ГРАНИЦА n ≤ 170 — ПРОДУКТОВАЯ, А НЕ МАТЕМАТИЧЕСКАЯ. Целые произвольной
// длины считают и 171!, и 10000!; ограничение стоит потому, что 170! — это
// уже 307 цифр, дальше результат перестаёт читаться на странице, а научная
// форма перестаёт быть представимой в обычном числе. Утверждать, будто
// «дальше не считается», было бы неправдой.
const MAX_N = 170;

const factorial = (n: number): bigint => {
  let result = 1n;
  for (let i = 2n; i <= BigInt(n); i += 1n) result *= i;
  return result;
};

// Мантисса берётся из первых цифр строки: перевод в обычное число как раз и
// потерял бы точность, ради которой считали в целых.
const scientific = (digits: string) => {
  const mantissa = digits.length === 1 ? digits : `${digits[0]},${digits.slice(1, 7)}`;
  return `≈ ${mantissa} · 10^${digits.length - 1}`;
};

export const compute: CalcFunction = (inputs) => {
  const raw = integerInput(inputs.n);

  const fail = (message: string) => ({
    primary: { label: 'Факториал', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (raw === null) return fail('Число должно быть целым');
  if (raw < 0) return fail('Факториал определён для неотрицательных целых');
  if (raw > MAX_N) return fail('Здесь считаются факториалы до 170: дальше результат перестаёт читаться');

  const value = factorial(raw);
  const digits = value.toString();

  return {
    primary: { label: 'Факториал', value: digits },
    secondary: [
      { label: 'Разрядов в ответе', value: fmtInt(digits.length) },
      { label: 'Научная форма', value: scientific(digits) },
      { label: 'Запись', value: `${raw}! = ${raw === 0 ? '1 по определению' : raw === 1 ? '1' : raw === 2 ? '1 · 2' : `1 · 2 · … · ${raw}`}` },
    ],
  };
};
