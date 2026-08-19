import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Средневзвешенное значение по парам «значение вес».
//
// Грамматика построчная и намеренно строже, чем у плоского списка: строка
// обязана содержать ровно два числа. Строку с одним числом нельзя ни пропустить,
// ни достроить весом 1 — и то и другое посчитало бы не тот набор, который видит
// посетитель. Внутри строки действует то же правило запятой, что и в списке:
// «4,5 2» — это значение 4,5 с весом 2, а не три числа.

const parseLine = (line: string): [number, number] | null => {
  const tokens = line.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);
  if (tokens.length !== 2) return null;
  const value = parseLocalizedNumber(tokens[0], 'ru');
  const weight = parseLocalizedNumber(tokens[1], 'ru');
  if (value === null || weight === null) return null;
  // Отрицательный вес не имеет смысла: он вычитал бы наблюдение из выборки.
  if (weight < 0) return null;
  return [value, weight];
};

const statNumber = (value: number): string => formatStatistic(value, fmtNumber);

export const compute: CalcFunction = (inputs) => {
  const fail = (label: string, message: string) => ({
    primary: { label: 'Взвешенное среднее', value: '—' },
    secondary: [{ label, value: message, accent: 'red' as const }],
  });

  const lines = toStr(inputs.pairs, '').split('\n').map((line) => line.trim()).filter(Boolean);
  if (lines.length === 0) return fail('Проверьте данные', 'Введите хотя бы одну пару «значение вес»');

  const pairs: [number, number][] = [];
  for (const line of lines) {
    const pair = parseLine(line);
    if (pair === null) return fail('Строка не разобрана', line);
    pairs.push(pair);
  }

  const weightSum = pairs.reduce((acc, [, w]) => acc + w, 0);
  if (!(weightSum > 0)) return fail('Проверьте данные', 'Сумма весов должна быть больше нуля');
  const productSum = pairs.reduce((acc, [v, w]) => acc + v * w, 0);

  return {
    primary: { label: 'Взвешенное среднее', value: statNumber(productSum / weightSum) },
    secondary: [
      { label: 'Сумма весов', value: statNumber(weightSum) },
      { label: 'Сумма произведений', value: statNumber(productSum) },
      { label: 'Количество пар', value: statNumber(pairs.length) },
    ],
  };
};
