import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { finiteInput } from './numeric';

// Линейное уравнение ax + b = c.
//
// Вырожденные случаи здесь не ошибки ввода, а осмысленные ответы, и разводить
// их приходится явно: при a = 0 уравнение превращается в b = c, которое либо
// верно при любом x, либо не верно никогда. Вернуть в этих случаях «—» значило
// бы спрятать ответ, а поделить на ноль — выдать Infinity за корень.
//
// Символьной алгебры здесь нет и не нужно: степень первая, коэффициенты
// числовые, разбор шагов собирается подстановкой.
const show = (value: number) => {
  if (value !== 0 && (Math.abs(value) < 1e-6 || Math.abs(value) >= 1e12)) return value.toExponential(5).replace('.', ',');
  const tidy = Number(value.toPrecision(6));
  if (Number.isInteger(tidy)) return String(tidy);
  const digits = Math.max(0, 5 - Math.floor(Math.log10(Math.abs(tidy))));
  return fmtNumber(tidy, digits).replace(/0+$/, '').replace(/,$/, '');
};

export const compute: CalcFunction = (inputs) => {
  const a = finiteInput(inputs.a), b = finiteInput(inputs.b), c = finiteInput(inputs.c);
  const fail = (message: string) => ({ primary: { label: 'Корень', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (a === null || b === null || c === null) return fail('Введите конечные числовые коэффициенты');

  const equation = `${show(a)}x ${b < 0 ? '−' : '+'} ${show(Math.abs(b))} = ${show(c)}`;

  if (a === 0) {
    const identity = b === c;
    return {
      primary: { label: 'Корень', value: identity ? 'любое число' : 'решений нет' },
      secondary: [
        { label: 'Уравнение', value: equation },
        {
          label: 'Почему так',
          value: identity
            ? 'При нулевом коэффициенте уравнение превращается в верное равенство, которому удовлетворяет любое x'
            : 'При нулевом коэффициенте уравнение превращается в неверное равенство, и корня нет',
          ...(identity ? {} : { accent: 'red' as const }),
        },
      ],
    };
  }

  const difference = c - b, x = difference / a;
  const check = a * x + b;
  if (![difference, x, check].every(Number.isFinite) || (difference !== 0 && x === 0))
    return fail('Промежуточное значение или корень вне числового диапазона');

  return {
    primary: { label: 'Корень', value: `x = ${show(x)}` },
    secondary: [
      { label: 'Уравнение', value: equation },
      { label: 'Перенос свободного члена', value: `${show(a)}x = ${show(c - b)}` },
      { label: 'Деление на коэффициент', value: `x = ${show(c - b)} ÷ ${show(a)}` },
      { label: 'Проверка подстановкой', value: `${show(a)} · ${show(x)} + ${show(b)} = ${show(a * x + b)}` },
    ],
  };
};
