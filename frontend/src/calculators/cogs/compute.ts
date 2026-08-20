import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Себестоимость проданных товаров по движению запасов.
//
//   доступно к продаже = запас на начало + закупки
//   COGS               = доступно к продаже − запас на конец
//
// Формула отвечает на вопрос «сколько товара ушло», а не «сколько мы потратили»:
// закупленное, но не проданное, лежит на складе и в себестоимость периода не
// входит. Именно поэтому остаток вычитается, а не складывается.
//
// Остаток больше доступного — не «нулевая себестоимость», а противоречие в
// данных: продать меньше нуля нельзя, и такой ввод означает ошибку в одном из
// трёх чисел. Показать ноль здесь значило бы спрятать эту ошибку.
export const compute: CalcFunction = (inputs) => {
  const beginInventory = toNumber(inputs.beginInventory);
  const purchases = toNumber(inputs.purchases);
  const endInventory = toNumber(inputs.endInventory);

  const fail = (message: string) => ({
    primary: { label: 'Себестоимость проданных товаров', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (beginInventory < 0) return fail('Запас на начало не может быть отрицательным');
  if (purchases < 0) return fail('Закупки не могут быть отрицательными');
  if (endInventory < 0) return fail('Запас на конец не может быть отрицательным');

  const available = beginInventory + purchases;
  const cogs = available - endInventory;
  if (cogs < 0) return fail('Запас на конец больше, чем было доступно к продаже');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

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
