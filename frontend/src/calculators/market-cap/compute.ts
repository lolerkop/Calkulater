import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, integer, validOutput } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave14Input';

// Рыночная капитализация: число акций в обращении × цена одной акции.
//
// Это НЕ стоимость бизнеса: долг и денежные средства сюда не входят, и
// разводнение будущими акциями тоже не учитывается. Котировки не загружаются —
// расчёт детерминирован и опирается только на введённые значения.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const mode = choice(inputs.mode, ['cap', 'price'], 'cap');
  const shares = integer(inputs.shares);
  const fail = (message: string) => ({
    primary: { label: 'Капитализация', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });
  if (mode === null) return fail('Неизвестный режим расчёта');
  if (shares === null) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(shares > 0)) return fail('Число акций должно быть больше нуля');

  let price = 0;
  let cap = 0;
  if (mode === 'cap') {
    const entered = toNumber(inputs.price);
    if (entered === null) return fail('Введите корректные числовые данные');
    price = entered;
    if (!(price > 0)) return fail('Цена акции должна быть больше нуля');
    cap = shares * price;
  } else {
    const entered = toNumber(inputs.cap);
    if (entered === null) return fail('Введите корректные числовые данные');
    cap = entered;
    if (!(cap > 0)) return fail('Капитализация должна быть больше нуля');
    price = cap / shares;
  }

  if (!validOutput(price, true) || !validOutput(cap, true)) return fail('Результат вне допустимого диапазона');

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
