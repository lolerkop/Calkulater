import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Результат сделки по криптовалюте.
//
// От расчёта доходности вложения отличается двумя вещами, без которых сделку не
// посчитать: направлением и комиссиями. В шорте прибыль даёт падение цены, а не
// рост, поэтому знак разности меняется. Комиссия берётся ДВАЖДЫ — на входе и на
// выходе, — и считается от оборота каждой стороны, а не от результата: биржа
// удерживает её и с убыточной сделки тоже.
//
// Плечо влияет только на вложенное: сама прибыль от него не меняется, меняется
// её отношение к собственным средствам.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const percent = (value: number) => `${fmtNumber(value, 2)}%`;

export const compute: CalcFunction = (inputs) => {
  const direction = toStr(inputs.direction, 'long');
  const entry = toNumber(inputs.entry);
  const exit = toNumber(inputs.exit);
  const qty = toNumber(inputs.qty);
  const feePct = toNumber(inputs.feePct);
  const leverage = toNumber(inputs.leverage);

  const fail = (message: string) => ({
    primary: { label: 'Чистый результат', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(entry > 0)) return fail('Цена входа должна быть больше нуля');
  if (!(exit > 0)) return fail('Цена выхода должна быть больше нуля');
  if (!(qty > 0)) return fail('Объём должен быть больше нуля');
  if (!(leverage > 0)) return fail('Плечо должно быть больше нуля');
  if (feePct < 0) return fail('Комиссия не может быть отрицательной');

  const gross = direction === 'short' ? (entry - exit) * qty : (exit - entry) * qty;
  const fees = (entry * qty + exit * qty) * (feePct / 100);
  const net = gross - fees;
  const invested = (entry * qty) / leverage;

  return {
    primary: {
      label: 'Чистый результат',
      value: money(net),
    },
    secondary: [
      { label: 'Результат до комиссий', value: money(gross) },
      { label: 'Комиссии', value: money(fees) },
      { label: 'Вложено', value: money(invested) },
      { label: 'Доходность позиции', value: percent((net / invested) * 100), accent: (net >= 0 ? 'green' : 'red') as 'green' | 'red' },
      { label: 'Изменение цены', value: percent(((exit - entry) / entry) * 100) },
    ],
  };
};
