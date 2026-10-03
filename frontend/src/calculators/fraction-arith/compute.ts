import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { integerInput } from './numeric';

// Дроби считаются ТОЧНО, целыми числами, без промежуточных десятичных.
//
// Промежуточное округление может изменить результат. Числитель и знаменатель
// остаются целыми до самого конца, а десятичное значение показывается
// отдельной строкой — как справка, а не как основа расчёта.
//
// Границы ввода (миллион по модулю) выбраны так, чтобы любое промежуточное
// произведение — b·d при сложении — оставалось не больше 10¹², то есть далеко
// внутри диапазона точных целых. Проверка всё равно стоит: она ловит случай,
// когда границы полей однажды поменяют.
const LIMIT = 1_000_000;
const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

const decimal = (value: number) => value !== 0 && Math.abs(value) < 1e-6
  ? value.toExponential(6).replace('.', ',')
  : Number.isInteger(value) ? String(value) : fmtNumber(value, 6).replace(/0+$/, '').replace(/,$/, '');

export const compute: CalcFunction = (inputs) => {
  const op = inputs.op === undefined ? 'add' : inputs.op;
  const a = integerInput(inputs.a);
  const b = integerInput(inputs.b);
  const c = integerInput(inputs.c);
  const d = integerInput(inputs.d);
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!['add', 'sub', 'mul', 'div'].includes(op as string)) return fail('Выберите сложение, вычитание, умножение или деление');
  if (a === null || b === null || c === null || d === null) return fail('Числа должны быть целыми');
  if (![a, b, c, d].every((value) => Math.abs(value) <= LIMIT)) {
    return fail('Числа слишком велики для точного расчёта');
  }
  if (b === 0 || d === 0) return fail('Знаменатель не может быть нулём');

  let num = 0;
  let den = 0;
  if (op === 'add') { num = a * d + c * b; den = b * d; }
  else if (op === 'sub') { num = a * d - c * b; den = b * d; }
  else if (op === 'mul') { num = a * c; den = b * d; }
  else {
    if (c === 0) return fail('На нулевую дробь делить нельзя');
    num = a * d; den = b * c;
  }

  // Знак живёт в числителе: −1/2 и 1/−2 — одна и та же дробь.
  if (den < 0) { num = -num; den = -den; }
  const divisor = gcd(num, den) || 1;
  const rn = num / divisor;
  const rd = den / divisor;

  const whole = Math.trunc(rn / rd);
  const rest = Math.abs(rn % rd);
  const mixed = rd === 1 ? `${rn}` : whole === 0 ? `${rn}/${rd}` : `${whole} ${rest}/${rd}`;

  return {
    primary: { label: 'Результат', value: rd === 1 ? `${rn}` : `${rn}/${rd}` },
    secondary: [
      { label: 'Десятичное значение', value: decimal(rn / rd) },
      { label: 'Смешанное число', value: mixed },
      { label: 'Сокращено на', value: `${divisor}` },
    ],
  };
};
