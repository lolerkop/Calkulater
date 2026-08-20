import type { CalcFunction, CalcResultTable } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Отношение: сокращение и разбиение суммы.
//
// Отгруженный proportion решает уравнение a/b = c/d относительно неизвестного.
// Здесь другая задача: сократить отношение и, если задана сумма, разложить её
// по частям.
//
// Сокращение делается ТОЧНО, через наибольший общий делитель, и только когда
// все части целые: делить дробные части на НОД нечего, и попытка выдать
// «1,5:2,5» за сокращённый вид была бы неправдой. Такое отношение показывается
// как есть.
//
// Сумма частей считается по ИСХОДНЫМ значениям, а не по сокращённым: посетитель
// вводил их, и доли должны сходиться именно с введённым.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;:]+/).filter(Boolean);

const gcd2 = (a: number, b: number): number => {
  let x = a;
  let y = b;
  while (y > 0) [x, y] = [y, x % y];
  return x;
};

export const compute: CalcFunction = (inputs) => {
  const total = toNumber(inputs.total);
  const fail = (message: string) => ({
    primary: { label: 'Отношение', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const parts: number[] = [];
  for (const token of tokenize(toStr(inputs.parts, ''))) {
    const value = parseLocalizedNumber(token, 'ru');
    if (value === null) return fail(`Не число: ${token}`);
    if (!(value > 0)) return fail('Каждая часть должна быть больше нуля');
    parts.push(value);
  }
  if (parts.length < 2) return fail('Нужно хотя бы две части');

  const sum = parts.reduce((a, b) => a + b, 0);
  const whole = parts.every((value) => Number.isInteger(value));
  const divisor = whole ? parts.reduce(gcd2) : 1;
  const reduced = parts.map((value) => value / divisor);

  const columns = ['Часть', 'Значение', 'Доля'];
  if (total > 0) columns.push('Сумма');
  const table: CalcResultTable = {
    title: 'Разбор по частям',
    columns,
    rows: parts.map((value, i) => {
      const row = [
        fmtNumber(i + 1, 0),
        formatMeasure(value, fmtNumber),
        `${fmtNumber((value / sum) * 100, 2)}%`,
      ];
      if (total > 0) row.push(formatMeasure((total * value) / sum, fmtNumber));
      return row;
    }),
  };

  return {
    primary: {
      label: 'Отношение',
      value: reduced.map((value) => formatMeasure(value, fmtNumber)).join(':'),
    },
    secondary: [
      { label: 'Сумма частей', value: formatMeasure(sum, fmtNumber) },
      { label: 'Доля первой части', value: `${fmtNumber((parts[0] / sum) * 100, 2)}%` },
      { label: 'Частей', value: fmtNumber(parts.length, 0) },
      ...(divisor > 1 ? [{ label: 'Сокращено на', value: fmtNumber(divisor, 0) }] : []),
      ...(total > 0
        ? [{
            label: 'Разбиение суммы',
            value: parts.map((value) => formatMeasure((total * value) / sum, fmtNumber)).join(' · '),
          }]
        : []),
    ],
    table,
  };
};
