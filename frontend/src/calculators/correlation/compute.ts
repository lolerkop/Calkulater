import type { CalcFunction } from '../../lib/types';
import { fmtNumber, parseLocalizedNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Коэффициент корреляции Пирсона для двух рядов.
//
// Разбор списка намеренно ПОБАЙТОВО повторяет отгруженные stats-descriptive и
// weighted-mean: запятая считается разделителем только перед пробелом или
// концом строки, поэтому «1,5» остаётся десятичной дробью, а «1, 2, 3» —
// перечислением. Расходиться здесь нельзя: посетитель вставляет один и тот же
// столбец из таблицы в разные калькуляторы и вправе ждать одинакового чтения.
//
// Ряды разной длины отклоняются, а не обрезаются: пары строятся по позиции, и
// молча отбросить хвост значило бы посчитать корреляцию не тех данных.
//
// Нулевая дисперсия любого ряда отклоняется отдельно: знаменатель обращается в
// нуль, и коэффициент не определён. Показать здесь 0 значило бы заявить
// «связи нет» там, где вопрос попросту не имеет смысла.

const stat = (value: number) => formatStatistic(value, fmtNumber);
const tokenize = (raw: string): string[] =>
  raw.replace(/,(?=\s|$)/g, ' ').split(/[\s;]+/).filter(Boolean);

export const compute: CalcFunction = (inputs) => {
  const fail = (message: string) => ({
    primary: { label: 'Коэффициент корреляции', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  const read = (raw: string, which: string): number[] | string => {
    const values: number[] = [];
    for (const token of tokenize(raw)) {
      const parsed = parseLocalizedNumber(token, 'ru');
      if (parsed === null) return `Ряд ${which}: «${token}» не число`;
      values.push(parsed);
    }
    return values;
  };

  const xs = read(toStr(inputs.xs, ''), 'X');
  if (typeof xs === 'string') return fail(xs);
  const ys = read(toStr(inputs.ys, ''), 'Y');
  if (typeof ys === 'string') return fail(ys);

  if (xs.length !== ys.length) return fail('В рядах разное число значений — пары не построить');
  const n = xs.length;
  if (n < 3) return fail('Нужно не меньше трёх пар значений');

  const meanX = xs.reduce((a, b) => a + b, 0) / n;
  const meanY = ys.reduce((a, b) => a + b, 0) / n;
  let sxy = 0;
  let sxx = 0;
  let syy = 0;
  for (let i = 0; i < n; i += 1) {
    const dx = xs[i] - meanX;
    const dy = ys[i] - meanY;
    sxy += dx * dy;
    sxx += dx * dx;
    syy += dy * dy;
  }
  if (sxx === 0 || syy === 0) return fail('Все значения одного из рядов совпадают — корреляция не определена');

  const r = sxy / Math.sqrt(sxx * syy);
  const slope = sxy / sxx;

  return {
    primary: { label: 'Коэффициент корреляции', value: stat(r) },
    secondary: [
      { label: 'Коэффициент детерминации', value: stat(r * r) },
      { label: 'Ковариация выборки', value: stat(sxy / (n - 1)) },
      { label: 'Наклон линии', value: stat(slope) },
      { label: 'Свободный член', value: stat(meanY - slope * meanX) },
      { label: 'Пар значений', value: fmtNumber(n, 0) },
      { label: 'Среднее X', value: stat(meanX) },
      { label: 'Среднее Y', value: stat(meanY) },
    ],
  };
};
