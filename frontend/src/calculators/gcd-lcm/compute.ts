import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';

// НОД и НОК списка целых.
//
// Отгруженный divisors раскладывает ОДНО число на делители. Здесь задача о
// связи нескольких чисел, и обе величины считаются точной целой арифметикой:
// НОД по Евклиду попарно, НОК накопительно через a·b/НОД(a,b) — деление перед
// умножением, иначе произведение переполняется раньше, чем нужно.
//
// НОК растёт быстро, и у длинного списка он способен выйти за пределы точного
// целого. Показать округлённый НОК нельзя: он перестал бы делиться на исходные
// числа, оставаясь правдоподобным на вид. Поэтому расчёт останавливается.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

const gcd2 = (a: number, b: number): number => {
  let x = a;
  let y = b;
  while (y > 0) [x, y] = [y, x % y];
  return x;
};

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({
    primary: { label: 'НОД', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const numbers: number[] = [];
  for (const token of tokenize(toStr(inputs.numbers, ''))) {
    const value = parseLocalizedNumber(token, 'ru');
    if (value === null) return fail(`Не число: ${token}`);
    if (!Number.isInteger(value)) return fail(`Не целое число: ${token}`);
    if (value <= 0) return fail('Числа должны быть больше нуля');
    numbers.push(value);
  }
  if (numbers.length < 2) return fail('Нужно хотя бы два числа');

  const gcd = numbers.reduce(gcd2);
  let lcm = numbers[0];
  for (const value of numbers.slice(1)) {
    lcm = (lcm / gcd2(lcm, value)) * value;
    if (!Number.isSafeInteger(lcm)) return fail('НОК этих чисел слишком велик для точного расчёта');
  }

  return {
    primary: { label: 'НОД', value: fmtNumber(gcd, 0) },
    secondary: [
      { label: 'НОК', value: fmtNumber(lcm, 0) },
      { label: 'Чисел', value: fmtNumber(numbers.length, 0) },
      { label: 'Взаимно простые', value: gcd === 1 ? 'да' : 'нет' },
    ],
  };
};
