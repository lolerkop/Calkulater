import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Рассрочка: равные платежи по цене с наценкой, без начисления процентов
// на остаток. Это не заём: наценка задаётся один раз от суммы рассрочки,
// поэтому досрочное погашение её не уменьшает и график остаётся линейным.
//
// Снос округления, как и в аннуитете, забирает последний платёж — иначе сумма
// одинаковых платежей разошлась бы с итогом на копейки.

const money = (value: number): string => `${fmtNumber(value, 2)} ₽`;
const round2 = (value: number): number => Number(value.toFixed(2));

export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const down = toNumber(inputs.down);
  const months = Math.trunc(toNumber(inputs.months));
  const markup = toNumber(inputs.markup);
  const fail = (message: string) => ({
    primary: { label: 'Ежемесячный платёж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(price > 0)) return fail('Цена должна быть больше нуля');
  if (down < 0) return fail('Первоначальный взнос не может быть отрицательным');
  if (down >= price) return fail('Взнос должен быть меньше цены');
  if (!(months >= 1)) return fail('Срок должен быть хотя бы один месяц');
  if (months > 60) return fail('Срок не может превышать 60 месяцев');
  if (markup < 0) return fail('Наценка не может быть отрицательной');

  const financed = round2(price - down);
  const total = round2(financed * (1 + markup / 100));
  const payment = round2(total / months);
  const last = round2(total - payment * (months - 1));

  const rows: string[][] = [];
  let left = total;
  for (let month = 1; month <= months; month += 1) {
    const due = month === months ? last : payment;
    left = round2(left - due);
    rows.push([String(month), money(due), money(left)]);
  }

  return {
    primary: { label: 'Ежемесячный платёж', value: money(payment) },
    secondary: [
      { label: 'Сумма рассрочки', value: money(financed) },
      { label: 'Всего к выплате', value: money(total) },
      { label: 'Переплата', value: money(round2(total - financed)) },
      { label: 'Последний платёж', value: money(last) },
    ],
    table: {
      title: 'График платежей',
      columns: ['Месяц', 'Платёж', 'Остаток'],
      rows,
    },
  };
};
