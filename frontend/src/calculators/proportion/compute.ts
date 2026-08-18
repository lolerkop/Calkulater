import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Пропорция a / b = c / d: находим любой из четырёх членов.
//
// Спецификация описывала ввод как «одно поле оставляется пустым». Реализовано
// через явный выбор искомого члена: пустое числовое поле неотличимо от нуля,
// а ноль здесь законное значение члена. Явный выбор снимает двусмысленность
// и заодно прячет то поле, которое считается.
//
//   d = b·c / a   a = b·c / d   b = a·d / c   c = a·d / b
// В каждом случае делитель — тот член, что стоит по диагонали от искомого,
// и именно он не может быть нулём.
const show = (value: number) => (Number.isInteger(value) ? String(value) : fmtNumber(value, 4));

export const compute: CalcFunction = (inputs) => {
  const find = toStr(inputs.find, 'd');
  const a = toNumber(inputs.a);
  const b = toNumber(inputs.b);
  const c = toNumber(inputs.c);
  const d = toNumber(inputs.d);

  const fail = (message: string) => ({
    primary: { label: 'Неизвестный член', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const solved =
    find === 'a' ? (d === 0 ? null : (b * c) / d)
    : find === 'b' ? (c === 0 ? null : (a * d) / c)
    : find === 'c' ? (b === 0 ? null : (a * d) / b)
    : (a === 0 ? null : (b * c) / a);

  if (solved === null) return fail('Член, стоящий по диагонали от искомого, не может быть нулём');
  if (!Number.isFinite(solved)) return fail('Результат вне допустимого диапазона');

  const terms = { a, b, c, d, [find]: solved } as Record<string, number>;
  const ratio = terms.b === 0 ? null : terms.a / terms.b;

  return {
    primary: { label: 'Неизвестный член', value: show(solved) },
    secondary: [
      { label: 'Пропорция', value: `${show(terms.a)} : ${show(terms.b)} = ${show(terms.c)} : ${show(terms.d)}` },
      ...(ratio === null ? [] : [{ label: 'Отношение', value: show(ratio) }]),
      { label: 'Проверка произведений', value: `${show(terms.a * terms.d)} = ${show(terms.b * terms.c)}` },
    ],
  };
};
