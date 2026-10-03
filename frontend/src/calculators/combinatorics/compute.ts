import type { CalcFunction } from '../../lib/types';
import { integerInput } from '../../lib/platform/strictNumericInput';

// Сочетания и размещения, с повторениями и без.
//
// BigInt сохраняет все цифры целых ответов; Number за общей безопасной
// границей не гарантирует точность каждого целого, хотя отдельные значения
// (например, C(60,30)) ещё представимы. Последовательное умножение и точное
// деление вычисляют биномиальный коэффициент без отдельных факториалов.
const combinations = (n: number, k: number): bigint => {
  if (k < 0 || k > n) return 0n;
  const take = Math.min(k, n - k);
  let result = 1n;
  for (let i = 1; i <= take; i += 1) {
    result = (result * BigInt(n - take + i)) / BigInt(i);
  }
  return result;
};

const permutations = (n: number, k: number): bigint => {
  if (k < 0 || k > n) return 0n;
  let result = 1n;
  for (let i = 0; i < k; i += 1) result *= BigInt(n - i);
  return result;
};

const grouped = (value: bigint) => new Intl.NumberFormat('ru-RU').format(value);

// Научная форма нужна там, где разрядов больше, чем читатель способен окинуть
// взглядом. Мантисса берётся из первых значащих цифр строки, а не через
// Number: перевод в double как раз и потерял бы то, ради чего считали точно.
const scientific = (value: bigint) => {
  const digits = value.toString();
  const mantissa = `${digits[0]},${digits.slice(1, 5)}`;
  return `≈ ${mantissa} · 10^${digits.length - 1}`;
};

const MAX_N = 1000;

export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'combinations' : inputs.mode;
  const repetition = inputs.repetition === undefined ? 'no' : inputs.repetition;
  const withRepetition = repetition === 'yes';
  const n = integerInput(inputs.n), k = integerInput(inputs.k);

  const fail = (message: string) => ({
    primary: { label: 'Количество вариантов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (mode !== 'combinations' && mode !== 'permutations') return fail('Выберите сочетания или размещения');
  if (repetition !== 'yes' && repetition !== 'no') return fail('Выберите, разрешены ли повторения');
  if (n === null || k === null || n < 0 || k < 0) return fail('Оба числа должны быть целыми и неотрицательными');
  if (n > MAX_N || k > MAX_N) return fail('Числа больше тысячи выходят за практический предел расчёта');
  if (!withRepetition && k > n) return fail('Без повторений выборка не может быть больше множества');

  let value: bigint;
  let formula: string;

  if (mode === 'combinations') {
    value = k === 0 ? 1n : withRepetition ? combinations(n + k - 1, k) : combinations(n, k);
    formula = k === 0 ? 'Пустая выборка: 1 способ' : withRepetition
      ? `C(${n} + ${k} − 1, ${k}) = C(${n + k - 1}, ${k})`
      : `C(${n}, ${k}) = ${n}! ÷ (${k}! · ${n - k}!)`;
  } else {
    value = withRepetition ? BigInt(n) ** BigInt(k) : permutations(n, k);
    formula = withRepetition ? `${n}^${k}` : `P(${n}, ${k}) = ${n}! ÷ ${n - k}!`;
  }

  const other = mode === 'combinations'
    ? { label: 'Размещений из тех же чисел', value: grouped(withRepetition ? BigInt(n) ** BigInt(k) : permutations(n, k)) }
    : { label: 'Сочетаний из тех же чисел', value: grouped(k === 0 ? 1n : withRepetition ? combinations(n + k - 1, k) : combinations(n, k)) };

  const secondary = [
    { label: 'Формула', value: formula },
    { label: 'Порядок важен', value: mode === 'combinations' ? 'нет' : 'да' },
    { label: 'Повторения разрешены', value: withRepetition ? 'да' : 'нет' },
    other,
  ];

  if (value.toString().length > 15) {
    secondary.splice(1, 0, { label: 'Научная форма', value: scientific(value) });
  }

  return {
    primary: { label: 'Количество вариантов', value: grouped(value) },
    secondary,
  };
};
