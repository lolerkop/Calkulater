import type { CalcFunction } from '../../lib/types';
import { fmtMoney, fmtNumber, toNumber } from '../../lib/format';

// Средний чек: выручка, делённая на число заказов.
//   AOV = выручка / заказы
// Число заказов целое: половины заказа не бывает, и дробный ввод означает,
// что период или источник данных взяты неверно.
// Required fields reject coercions; a blank optional amount means zero.
function numericInput(value: unknown, optional = false): number {
  if (optional && (value === undefined || (typeof value === 'string' && value.trim() === ''))) return 0;
  if (typeof value !== 'number' && typeof value !== 'string') return NaN;
  return toNumber(value, NaN);
}

export const compute: CalcFunction = (inputs) => {
  const revenue = numericInput(inputs.revenue);
  const orders = numericInput(inputs.orders);

  const fail = (message: string) => ({
    primary: { label: 'Средний чек', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (![revenue, orders].every(Number.isFinite)) return fail('Введите конечные числовые значения.');

  if (!Number.isSafeInteger(orders)) return fail('Число заказов должно быть целым');
  if (orders <= 0) return fail('Заказов должно быть больше нуля');
  if (revenue < 0) return fail('Выручка не может быть отрицательной');

  return {
    primary: { label: 'Средний чек', value: fmtMoney(revenue / orders) },
    secondary: [
      { label: 'Выручка', value: fmtMoney(revenue) },
      { label: 'Заказов', value: fmtNumber(orders, 0) },
    ],
  };
};
