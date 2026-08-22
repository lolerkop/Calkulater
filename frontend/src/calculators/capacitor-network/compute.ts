import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Батарея конденсаторов: последовательно и параллельно.
//
// Формулы ОБРАТНЫ резисторным, и это ловушка, из-за которой считают наоборот:
// параллельно ёмкости складываются, а последовательно складываются обратные,
// как сопротивления в параллели. Физическая причина простая: параллельное
// соединение увеличивает площадь обкладок, а последовательное — расстояние
// между ними, и общая ёмкость становится МЕНЬШЕ самой маленькой в цепи.
const parseList = (raw: string): number[] | null => {
  const parts = raw.split(/[\s,;]+/).filter(Boolean);
  if (!parts.length) return null;
  const values: number[] = [];
  for (const part of parts) {
    const value = toNumber(part);
    if (!(value > 0)) return null;
    values.push(value);
  }
  return values;
};

export const compute: CalcFunction = (inputs) => {
  const raw = toStr(inputs.capacitances, '');
  const mode = toStr(inputs.mode, 'series');
  const fail = (message: string) => ({
    primary: { label: 'Общая ёмкость', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  const uf = (value: number) => `${formatMeasure(value, fmtNumber)} мкФ`;

  const values = parseList(raw);
  if (!values) return fail('Введите ёмкости через пробел, каждая больше нуля');

  const total = mode === 'parallel'
    ? values.reduce((sum, c) => sum + c, 0)
    : 1 / values.reduce((sum, c) => sum + 1 / c, 0);

  return {
    primary: { label: 'Общая ёмкость', value: uf(total) },
    secondary: [
      { label: 'Конденсаторов', value: fmtInt(values.length) },
      { label: 'Наименьший', value: uf(Math.min(...values)) },
      { label: 'Наибольший', value: uf(Math.max(...values)) },
      { label: 'Соединение', value: mode === 'parallel' ? 'параллельное' : 'последовательное' },
    ],
  };
};
