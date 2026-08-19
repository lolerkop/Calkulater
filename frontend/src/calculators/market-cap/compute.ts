import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Рыночная капитализация: число акций в обращении × цена одной акции.
//
// Это НЕ стоимость бизнеса: долг и денежные средства сюда не входят, и
// разводнение будущими акциями тоже не учитывается. Котировки не загружаются —
// расчёт детерминирован и опирается только на введённые значения.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'cap');
  const shares = toNumber(inputs.shares);
  const fail = (message: string) => ({
    primary: { label: 'Капитализация', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (!(shares > 0)) return fail('Число акций должно быть больше нуля');

  let price = 0;
  let cap = 0;
  if (mode === 'cap') {
    price = toNumber(inputs.price);
    if (!(price > 0)) return fail('Цена акции должна быть больше нуля');
    cap = shares * price;
  } else {
    cap = toNumber(inputs.cap);
    if (!(cap > 0)) return fail('Капитализация должна быть больше нуля');
    price = cap / shares;
  }

  return {
    primary: {
      label: mode === 'cap' ? 'Капитализация' : 'Цена одной акции',
      value: mode === 'cap' ? money(cap) : money(price),
    },
    secondary: [
      { label: 'Капитализация', value: money(cap) },
      { label: 'Цена одной акции', value: money(price) },
      { label: 'Акций в обращении', value: `${fmtNumber(shares, 0)} шт` },
    ],
  };
};
