import type { CalcFunction } from '../../lib/types';
import { fmtNumber, preserveNonZero, toNumber, toStr } from '../../lib/format';

// Дроби считаются ТОЧНО, целыми числами, без промежуточных десятичных.
//
// Одна треть в десятичной записи бесконечна: округлив её, получают
// 1/3 + 2/3 = 0,99999… вместо единицы. Поэтому числитель и знаменатель
// остаются целыми до самого конца, а десятичное значение показывается
// отдельной строкой — как справка, а не как основа расчёта.
//
// Границы ввода (миллион по модулю) выбраны так, чтобы любое промежуточное
// произведение — b·d при сложении — оставалось не больше 10¹², то есть далеко
// внутри диапазона точных целых. Проверка всё равно стоит: она ловит случай,
// когда границы полей однажды поменяют.
const LIMIT = 1_000_000;
const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

export const compute: CalcFunction = (inputs) => {
  const op = toStr(inputs.op, 'add');
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const c = toNumber(inputs.c);
  const d = toNumber(inputs.d);
  const fail = (message: string) => ({
    primary: { label: 'Результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![a, b, c, d].every(Number.isInteger)) return fail('Числа должны быть целыми');
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
      { label: 'Десятичное значение', value: fmtNumber(preserveNonZero(rn / rd, 6), 6).replace(/0+$/, '').replace(/,$/, '') },
      { label: 'Смешанное число', value: mixed },
      { label: 'Сокращено на', value: `${divisor}` },
    ],
  };
};
