import type { CalcFunction } from '../../lib/types';
import { number as readNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';

export const compute: CalcFunction = (inputs) => {
  const beginInventory = readNumber(inputs.beginInventory);
  const purchases = readNumber(inputs.purchases);
  const endInventory = readNumber(inputs.endInventory);

  const fail = (message: string) => ({
    primary: { label: 'Себестоимость проданных товаров', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (beginInventory === null || purchases === null || endInventory === null) return fail('Введите корректные числовые данные');

  if (beginInventory < 0) return fail('Запас на начало не может быть отрицательным');
  if (purchases < 0) return fail('Закупки не могут быть отрицательными');
  if (endInventory < 0) return fail('Запас на конец не может быть отрицательным');

  const available = beginInventory + purchases;
  const cogs = available - endInventory;
  if (![available, cogs].every(value => validOutput(value))) return fail('Результат вне допустимого диапазона');
  if (cogs < 0) return fail('Запас на конец больше, чем было доступно к продаже');

  const money = displayMoney;

  return {
    primary: { label: 'Себестоимость проданных товаров', value: money(cogs) },
    secondary: [
      { label: 'Доступно к продаже', value: money(available) },
      { label: 'Запас на начало', value: money(beginInventory) },
      { label: 'Закупки', value: money(purchases) },
      { label: 'Запас на конец', value: money(endInventory) },
    ],
  };
};
