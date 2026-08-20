import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Цепочка удержаний маркетплейса.
//
// Отдельный калькулятор нужен потому, что удержаний несколько и они берутся с
// РАЗНЫХ баз: комиссия и эквайринг — доли цены, логистика и хранение — рубли за
// отправление. Общий «калькулятор комиссии» такую цепочку не считает: он знает
// одну ставку, и посчитать ею четыре удержания можно только четырьмя заходами,
// каждый раз перенося промежуточный результат руками.
//
// Проценты берутся от цены товара, а не от остатка после предыдущего удержания:
// площадки считают именно так, и последовательное удержание занизило бы сумму.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const commissionPct = toNumber(inputs.commissionPct);
  const acquiringPct = toNumber(inputs.acquiringPct);
  const logistics = toNumber(inputs.logistics);
  const storage = toNumber(inputs.storage);
  const cost = toNumber(inputs.cost);

  const fail = (message: string) => ({
    primary: { label: 'Выплата продавцу', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(price > 0)) return fail('Цена товара должна быть больше нуля');
  if (commissionPct < 0 || acquiringPct < 0) return fail('Ставка удержания не может быть отрицательной');
  if (logistics < 0 || storage < 0 || cost < 0) return fail('Сумма не может быть отрицательной');

  const commission = (price * commissionPct) / 100;
  const acquiring = (price * acquiringPct) / 100;
  const fees = commission + acquiring + logistics + storage;
  const payout = price - fees;
  const profit = payout - cost;

  const secondary = [
    { label: 'Комиссия площадки', value: money(commission) },
    { label: 'Эквайринг', value: money(acquiring) },
    { label: 'Логистика', value: money(logistics) },
    ...(storage > 0 ? [{ label: 'Хранение', value: money(storage) }] : []),
    { label: 'Удержано всего', value: money(fees) },
    { label: 'Доля удержаний', value: percent((fees / price) * 100) },
    { label: 'Прибыль', value: money(profit), accent: (profit >= 0 ? 'green' : 'red') as 'green' | 'red' },
    { label: 'Рентабельность к цене', value: percent((profit / price) * 100) },
  ];

  return { primary: { label: 'Выплата продавцу', value: money(payout) }, secondary };
};
