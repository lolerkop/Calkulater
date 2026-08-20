import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Прибыль, маржа и наценка — три числа, которые постоянно путают между собой.
//
//   прибыль = выручка − затраты
//   маржа   = прибыль / ВЫРУЧКА  × 100
//   наценка = прибыль / ЗАТРАТЫ  × 100
//
// Знаменатель и есть вся разница. Наценка в 100 % — это маржа 50 %, и оба числа
// описывают одну и ту же сделку. Договориться «работаем с сорока процентами»,
// не назвав знаменатель, — обычный способ разойтись в цене в полтора раза.
//
// При нулевых затратах наценка не определена: делить прибыль не на что.
// Строка не выводится вовсе — бесконечность на экране хуже отсутствия строки.
export const compute: CalcFunction = (inputs) => {
  const revenue = toNumber(inputs.revenue);
  const cost = toNumber(inputs.cost);

  const fail = (message: string) => ({
    primary: { label: 'Прибыль', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(revenue > 0)) return fail('Выручка должна быть больше нуля');
  if (cost < 0) return fail('Затраты не могут быть отрицательными');

  const profit = revenue - cost;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
  const pct = (value: number) => `${fmtNumber(value, 2)}%`;

  return {
    primary: { label: 'Прибыль', value: money(profit) },
    secondary: [
      { label: 'Маржа', value: pct((profit / revenue) * 100), accent: profit >= 0 ? 'green' : 'red' },
      ...(cost > 0 ? [{ label: 'Наценка', value: pct((profit / cost) * 100) }] : []),
      { label: 'Выручка', value: money(revenue) },
      { label: 'Затраты', value: money(cost) },
    ],
  };
};
