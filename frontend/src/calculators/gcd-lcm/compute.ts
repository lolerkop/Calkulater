import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { integerInput } from './numeric';
const MAX = BigInt(Number.MAX_SAFE_INTEGER);
const gcd2 = (a: bigint, b: bigint): bigint => {
  while (b !== 0n) [a, b] = [b, a % b];
  return a;
};
export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({ primary: { label: 'НОД', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (typeof inputs.numbers !== 'string') return fail('Введите список положительных целых чисел');
  if (inputs.numbers.length > 20000) return fail('Допускается от 2 до 1000 чисел и не более 20000 символов');
  const tokens = inputs.numbers.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
  if (tokens.length < 2) return fail('Нужно хотя бы два числа');
  if (tokens.length > 1000) return fail('Допускается от 2 до 1000 чисел и не более 20000 символов');
  const numbers: bigint[] = [];
  for (const token of tokens) {
    const value = integerInput(token);
    if (value === null) return fail('Введите положительные целые числа до 9007199254740991');
    if (value <= 0) return fail('Числа должны быть больше нуля');
    numbers.push(BigInt(value));
  }
  const gcd = numbers.reduce(gcd2);
  let lcm = numbers[0];
  for (const value of numbers.slice(1)) {
    lcm = (lcm / gcd2(lcm, value)) * value;
    if (lcm > MAX) return fail('НОК этих чисел слишком велик для точного расчёта');
  }
  return { primary: { label: 'НОД', value: fmtNumber(Number(gcd), 0) }, secondary: [
    { label: 'НОК', value: fmtNumber(Number(lcm), 0) },
    { label: 'Чисел', value: fmtNumber(numbers.length, 0) },
    { label: 'Взаимно простые', value: gcd === 1n ? 'да' : 'нет' },
  ] };
};
