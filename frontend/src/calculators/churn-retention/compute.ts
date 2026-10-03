import type { CalcFunction } from '../../lib/types';
import { integer as readInteger } from '../../lib/platform/scalarInputDisplay';
import { displayNumber } from '../../lib/platform/financeDisplay';
import { fmtNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';


export const compute: CalcFunction = (inputs) => {
  const start = readInteger(inputs.startCustomers);
  const lost = readInteger(inputs.lost);
  const gained = readInteger(inputs.gained);
  const fail = (message: string) => ({
    primary: { label: 'Отток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (start === null || lost === null || gained === null) return fail('Введите корректные числовые данные');

  if (!(start > 0)) return fail('Клиентов на начало должно быть больше нуля');
  if (lost < 0 || gained < 0) return fail('Числа клиентов не могут быть отрицательными');
  if (lost > start) return fail('Ушло не может быть больше, чем было на начало');

  const end = start - lost + gained;
  if (!Number.isSafeInteger(end)) return fail('Количество должно быть целым в допустимом диапазоне');
  const churn = (lost / start) * 100;
  const pct = (value: number) => `${displayNumber(value, 2)}%`;

  return {
    primary: { label: 'Отток', value: pct(churn) },
    secondary: [
      { label: 'Удержание', value: pct(100 - churn) },
      { label: 'Клиентов на конец', value: fmtNumber(end, 0) },
      { label: 'Чистый прирост', value: pct(((gained - lost) / start) * 100) },
      ...(churn > 0
        ? [{ label: 'Средний срок жизни, периодов', value: formatMeasure(100 / churn, fmtNumber) }]
        : []),
    ],
  };
};
