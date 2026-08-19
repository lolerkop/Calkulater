import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

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
  const tidy = Number(value.toPrecision(6));
  if (Number.isInteger(tidy)) return String(tidy);
  return fmtNumber(tidy, 6).replace(/0+$/, '').replace(/,$/, '');
};

export const compute: CalcFunction = (inputs) => {
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const c = toNumber(inputs.c);

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

  const x = (c - b) / a;

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
