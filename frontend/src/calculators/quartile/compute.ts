import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Квартили, межквартильный размах и выбросы по выборке.
//
// Метод перцентиля выбран и зафиксирован ЯВНО: линейная интерполяция по
// позиции (n−1)·p — то же, что делает PERCENTILE.INC и NumPy по умолчанию.
// Существуют и другие определения (метод исключения медианы, метод Тьюки), и
// они дают другие числа на тех же данных, поэтому молчаливый выбор здесь был
// бы источником вечного спора с посетителем.
//
// Границы усов Q1−1,5·IQR и Q3+1,5·IQR — та самая договорённость ящика с усами;
// всё за ними считается выбросом.
const WHISKER = 1.5;

const percentile = (sorted: number[], p: number): number => {
  if (sorted.length === 1) return sorted[0];
  const index = (sorted.length - 1) * p;
  const low = Math.floor(index);
  const high = Math.ceil(index);
  return sorted[low] + (sorted[high] - sorted[low]) * (index - low);
};

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({
    primary: { label: 'Медиана', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const raw = toStr(inputs.values, '').replace(/,(?=\s|$)/g, ' ');
  const tokens = raw.split(/[\s;]+/).filter(Boolean);
  if (tokens.length === 0) return fail('Введите числа через пробел или с новой строки');
  const values: number[] = [];
  for (const token of tokens) {
    const parsed = parseLocalizedNumber(token, 'ru');
    if (parsed === null) return fail(`Это не число: ${token}`);
    values.push(parsed);
  }
  if (values.length < 4) return fail('Нужно не меньше четырёх значений');

  const sorted = [...values].sort((a, b) => a - b);
  const q1 = percentile(sorted, 0.25);
  const q2 = percentile(sorted, 0.5);
  const q3 = percentile(sorted, 0.75);
  const iqr = q3 - q1;
  const low = q1 - WHISKER * iqr;
  const high = q3 + WHISKER * iqr;
  const outliers = sorted.filter((v) => v < low || v > high).length;

  return {
    primary: { label: 'Медиана', value: formatMeasure(q2, fmtNumber) },
    secondary: [
      { label: 'Первый квартиль', value: formatMeasure(q1, fmtNumber) },
      { label: 'Третий квартиль', value: formatMeasure(q3, fmtNumber) },
      { label: 'Межквартильный размах', value: formatMeasure(iqr, fmtNumber) },
      {
        label: 'Границы усов',
        value: `${formatMeasure(low, fmtNumber)} … ${formatMeasure(high, fmtNumber)}`,
      },
      { label: 'Выбросов', value: String(outliers) },
      { label: 'Значений', value: String(values.length) },
    ],
  };
};
