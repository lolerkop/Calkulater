import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Доля возвратов: какая часть заказов вернулась.
//   rate = возвраты / заказы × 100
// Возвратов не может быть больше, чем заказов: это перекрёстная проверка, а не
// придирка — такое сочетание означает, что периоды взяты разные, и любой
// полученный процент был бы правдоподобным, но неверным.
export const compute: CalcFunction = (inputs) => {
  const returns = toNumber(inputs.returns);
  const orders = toNumber(inputs.orders);

  const fail = (message: string) => ({
    primary: { label: 'Доля возвратов', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!Number.isInteger(orders) || !Number.isInteger(returns)) return fail('Заказы и возвраты считаются целыми');
  if (orders <= 0) return fail('Заказов должно быть больше нуля');
  if (returns < 0) return fail('Возвратов не может быть меньше нуля');
  if (returns > orders) return fail('Возвратов больше, чем заказов — проверьте период');

  const rate = (returns / orders) * 100;

  return {
    primary: { label: 'Доля возвратов', value: `${fmtNumber(rate, 2)} %` },
    secondary: [
      { label: 'Оставлено покупателями', value: `${fmtNumber(100 - rate, 2)} %`, accent: 'green' },
      { label: 'Возвратов', value: fmtNumber(returns, 0) },
      { label: 'Всего заказов', value: fmtNumber(orders, 0) },
    ],
  };
};
