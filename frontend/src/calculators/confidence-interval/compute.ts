import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';

// Доверительный интервал для среднего.
//
// Ширина интервала определяется не разбросом самих значений, а стандартной
// ОШИБКОЙ среднего: σ делится на корень из объёма выборки. Отсюда главное
// свойство расчёта — чтобы вдвое сузить интервал, выборку нужно увеличить
// вчетверо, а не вдвое.
//
// Критические значения взяты для нормального распределения и зафиксированы
// таблично: 1,645 для 90 %, 1,96 для 95 % и 2,576 для 99 %. Распределение
// Стьюдента для малых выборок здесь не применяется — это осознанное сужение,
// названное в тексте страницы: на малых n интервал получится уже настоящего.
//
// Выборка из одного наблюдения отклоняется: разброс по ней не определён, и
// показать интервал значило бы выдать число там, где его нет.

const stat = (value: number) => formatStatistic(value, fmtNumber);
const Z: Record<string, number> = { '90': 1.645, '95': 1.96, '99': 2.576 };

export const compute: CalcFunction = (inputs) => {
  const mean = toNumber(inputs.mean);
  const sd = toNumber(inputs.sd);
  const n = toNumber(inputs.n);
  const confidence = toStr(inputs.confidence, '95');

  const fail = (message: string) => ({
    primary: { label: 'Доверительный интервал', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (sd < 0) return fail('Стандартное отклонение не может быть отрицательным');
  if (!(n >= 2)) return fail('Объём выборки должен быть не меньше двух');
  if (!Number.isInteger(n)) return fail('Объём выборки должен быть целым числом');

  const z = Z[confidence] ?? Z['95'];
  const se = sd / Math.sqrt(n);
  const margin = z * se;
  const low = mean - margin;
  const high = mean + margin;

  return {
    primary: { label: 'Доверительный интервал', value: `${stat(low)} … ${stat(high)}` },
    secondary: [
      { label: 'Предел погрешности', value: stat(margin) },
      { label: 'Стандартная ошибка', value: stat(se) },
      { label: 'Критическое значение z', value: stat(z) },
      { label: 'Нижняя граница', value: stat(low) },
      { label: 'Верхняя граница', value: stat(high) },
    ],
  };
};
