import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';

// Описательная статистика по произвольному списку чисел.
//
// Первый в V2 потребитель textarea как списка. Грамматика разделителей задана
// явно, потому что иначе русская десятичная запятая неотличима от разделителя:
//
//   запятая, ЗА КОТОРОЙ идёт пробел или конец ввода → разделитель («2, 3» — два числа);
//   запятая между цифрами без пробела              → десятичная («4,5» — одно число).
//
// Всё остальное — перевод строки, точка с запятой, пробел — разделители всегда.
// Неразобранный токен отклоняет ВЕСЬ ввод: молча пропустить опечатку значило бы
// посчитать среднее не по тем данным, которые видит посетитель.

const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

// Разряды: у статистики точность выше, чем у размеров фигуры, — стандартное
// отклонение 13,4907 отличимо от 13,491. Хвост нулей срезается.
const statNumber = (value: number): string => {
  const text = fmtNumber(Number(value.toFixed(4)), 4);
  return text.includes(',') ? text.replace(/0+$/, '').replace(/,$/, '') : text;
};

export const compute: CalcFunction = (inputs) => {
  const population = toStr(inputs.mode, 'sample') === 'population';
  const fail = (label: string, message: string) => ({
    primary: { label: 'Среднее', value: '—' },
    secondary: [{ label, value: message, accent: 'red' as const }],
  });

  const tokens = tokenize(toStr(inputs.values, ''));
  if (tokens.length === 0) return fail('Проверьте данные', 'Введите хотя бы одно число');

  const values: number[] = [];
  for (const token of tokens) {
    const parsed = parseLocalizedNumber(token, 'ru');
    // Токен возвращается как значение строки, а не вклеивается в текст: это
    // ввод посетителя, и переводить его нечем и незачем.
    if (parsed === null) return fail('Не число', token);
    values.push(parsed);
  }

  const n = values.length;
  const sum = values.reduce((acc, x) => acc + x, 0);
  const mean = sum / n;
  const sorted = [...values].sort((a, b) => a - b);
  const median = n % 2 === 0 ? (sorted[n / 2 - 1] + sorted[n / 2]) / 2 : sorted[(n - 1) / 2];

  const counts = new Map<number, number>();
  for (const x of values) counts.set(x, (counts.get(x) ?? 0) + 1);
  const top = Math.max(...counts.values());
  // Все значения по разу — моды нет. Выдумывать первое из них нельзя.
  const mode =
    top === 1
      ? '—'
      : [...counts.entries()]
          .filter(([, c]) => c === top)
          .map(([v]) => v)
          .sort((a, b) => a - b)
          .map(statNumber)
          .join(', ');

  const divisor = population ? n : n - 1;
  const deviation = values.reduce((acc, x) => acc + (x - mean) ** 2, 0);
  // Выборочная дисперсия одного значения не определена: делить на нуль нечем.
  const variance = divisor > 0 ? deviation / divisor : null;

  return {
    primary: { label: 'Среднее', value: statNumber(mean) },
    secondary: [
      { label: 'Количество', value: statNumber(n) },
      { label: 'Сумма', value: statNumber(sum) },
      { label: 'Медиана', value: statNumber(median) },
      { label: 'Мода', value: mode },
      { label: 'Минимум', value: statNumber(sorted[0]) },
      { label: 'Максимум', value: statNumber(sorted[n - 1]) },
      { label: 'Размах', value: statNumber(sorted[n - 1] - sorted[0]) },
      { label: 'Дисперсия', value: variance === null ? '—' : statNumber(variance) },
      { label: 'Стандартное отклонение', value: variance === null ? '—' : statNumber(Math.sqrt(variance)) },
    ],
  };
};
