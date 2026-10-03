import type { CalcFunction } from '../../lib/types';
import { number as readNumber, optionalNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney, displayNumber } from '../../lib/platform/financeDisplay';


const money = displayMoney;
const percent = (value: number) => `${displayNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const price = readNumber(inputs.price);
  const commissionPct = readNumber(inputs.commissionPct);
  const acquiringPct = readNumber(inputs.acquiringPct);
  const logistics = readNumber(inputs.logistics);
  const storage = optionalNumber(inputs.storage);
  const cost = readNumber(inputs.cost);

  const fail = (message: string) => ({
    primary: { label: 'Выплата продавцу', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (price === null || commissionPct === null || acquiringPct === null || logistics === null || storage === null || cost === null) return fail('Введите корректные числовые данные');

  if (!(price > 0)) return fail('Цена товара должна быть больше нуля');
  if (commissionPct < 0 || commissionPct > 100 || acquiringPct < 0 || acquiringPct > 100) return fail('Ставка удержания должна быть от нуля до ста процентов');
  if (logistics < 0 || storage < 0 || cost < 0) return fail('Сумма не может быть отрицательной');

  const commission = price * (commissionPct / 100);
  const acquiring = price * (acquiringPct / 100);
  const fees = commission + acquiring + logistics + storage;
  const payout = price - fees;
  const profit = payout - cost;

  const share = (fees / price) * 100;
  const margin = (profit / price) * 100;
  if (![commission, acquiring, fees, payout, profit, share, margin].every(value => validOutput(value)) || (commissionPct > 0 && commission === 0) || (acquiringPct > 0 && acquiring === 0)) return fail('Результат вне допустимого диапазона');

  const secondary = [
    { label: 'Комиссия площадки', value: money(commission) },
    { label: 'Эквайринг', value: money(acquiring) },
    { label: 'Логистика', value: money(logistics) },
    ...(storage > 0 ? [{ label: 'Хранение', value: money(storage) }] : []),
    { label: 'Удержано всего', value: money(fees) },
    { label: 'Доля удержаний', value: percent(share) },
    { label: 'Прибыль', value: money(profit), accent: (profit >= 0 ? 'green' : 'red') as 'green' | 'red' },
    { label: 'Рентабельность к цене', value: percent(margin) },
  ];

  return { primary: { label: 'Выплата продавцу', value: money(payout) }, secondary };
};
