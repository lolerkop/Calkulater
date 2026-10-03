import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, integer, optionalNumber } from '../../lib/platform/scalarInputDisplay';

// Рассрочка: равные платежи по цене с наценкой, без начисления процентов
// на остаток. Наценка применяется один раз к финансируемой сумме;
// юридическая классификация и досрочное погашение здесь не определяются.
//
// Снос округления, как и в аннуитете, забирает последний платёж — иначе сумма
// одинаковых платежей разошлась бы с итогом на копейки.

const money = (value: number): string => `${fmtNumber(value, 2)} ₽`;
const round2 = (value: number): number => Number(value.toFixed(2));

export const compute: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const down = optionalNumber(inputs.down);
  const months = integer(inputs.months);
  const markup = toNumber(inputs.markup);
  const fail = (message: string) => ({
    primary: { label: 'Ежемесячный платёж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (price === null || down === null || markup === null) return fail('Введите корректные числовые данные');
  if (months === null) return fail('Количество должно быть целым в допустимом диапазоне');

  if (!(price > 0)) return fail('Цена должна быть больше нуля');
  if (down < 0) return fail('Первоначальный взнос не может быть отрицательным');
  if (down >= price) return fail('Взнос должен быть меньше цены');
  if (!(months >= 1)) return fail('Срок должен быть хотя бы один месяц');
  if (months > 60) return fail('Срок не может превышать 60 месяцев');
  if (markup < 0) return fail('Наценка не может быть отрицательной');

  const financed = round2(price - down);
  const total = round2(financed * (1 + markup / 100));
  const financedCents = Math.round(financed * 100);
  const totalCents = Math.round(total * 100);
  if (!Number.isSafeInteger(financedCents) || !Number.isSafeInteger(totalCents) || financedCents <= 0 || totalCents < financedCents) return fail('Результат вне допустимого диапазона');
  let paymentCents = Math.round(round2(total / months) * 100);
  // Keep the inherited ordinary schedule and its final rounding adjustment.
  // Tiny totals cannot fund n−1 rounded-up instalments: round those down
  // instead of creating a negative balance or a negative final payment.
  if (paymentCents * (months - 1) > totalCents) paymentCents = Math.floor(totalCents / months);
  const lastCents = totalCents - paymentCents * (months - 1);
  const payment = paymentCents / 100;
  const last = lastCents / 100;

  const rows: string[][] = [];
  let leftCents = totalCents;
  for (let month = 1; month <= months; month += 1) {
    const dueCents = month === months ? lastCents : paymentCents;
    leftCents -= dueCents;
    if (!Number.isSafeInteger(leftCents) || leftCents < 0) return fail('Результат вне допустимого диапазона');
    rows.push([String(month), money(dueCents / 100), money(leftCents / 100)]);
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
