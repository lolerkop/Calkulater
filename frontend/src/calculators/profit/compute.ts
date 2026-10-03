import type { CalcFunction } from '../../lib/types';
import { number as readNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney, displayNumber } from '../../lib/platform/financeDisplay';

export const compute: CalcFunction = (inputs) => {
  const revenue = readNumber(inputs.revenue);
  const cost = readNumber(inputs.cost);

  const fail = (message: string) => ({
    primary: { label: 'Прибыль', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (revenue === null || cost === null) return fail('Введите корректные числовые данные');

  if (!(revenue > 0)) return fail('Выручка должна быть больше нуля');
  if (cost < 0) return fail('Затраты не могут быть отрицательными');

  const profit = revenue - cost;
  const margin = (profit / revenue) * 100;
  const markup = cost > 0 ? (profit / cost) * 100 : null;
  if (![profit, margin].every(value => validOutput(value)) || (markup !== null && !validOutput(markup)) || (profit !== 0 && (margin === 0 || markup === 0))) return fail('Результат вне допустимого диапазона');
  const money = displayMoney;
  const pct = (value: number) => `${displayNumber(value, 2)}%`;

  return {
    primary: { label: 'Прибыль', value: money(profit) },
    secondary: [
      { label: 'Маржа', value: pct(margin), accent: profit >= 0 ? 'green' : 'red' },
      ...(cost > 0 ? [{ label: 'Наценка', value: pct(markup!) }] : []),
      { label: 'Выручка', value: money(revenue) },
      { label: 'Затраты', value: money(cost) },
    ],
  };
};
