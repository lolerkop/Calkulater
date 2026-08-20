import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

// Рекламная воронка: во что превращается бюджет.
//
//   клики   = бюджет / цена клика
//   заказы  = клики × конверсия / 100
//   выручка = заказы × средний чек
//   ROAS    = выручка / бюджет
//
// В отличие от ROAS, который оценивает УЖЕ потраченное, здесь бюджет
// разворачивается вперёд: сколько кликов он купит, во сколько заказов они
// превратятся и какую выручку принесут. Каждое звено умножается на следующее,
// поэтому ошибка в конверсии бьёт по итогу ровно так же сильно, как ошибка
// в цене клика, — а оценивают конверсию обычно куда небрежнее.
//
// Цена заказа показана рядом потому, что сравнивать её со средним чеком —
// самая быстрая проверка того, окупается ли затея вообще.
export const compute: CalcFunction = (inputs) => {
  const budget = toNumber(inputs.budget);
  const cpc = toNumber(inputs.cpc);
  const crPct = toNumber(inputs.crPct);
  const aov = toNumber(inputs.aov);

  const fail = (message: string) => ({
    primary: { label: 'Ожидаемая выручка', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(budget > 0)) return fail('Бюджет должен быть больше нуля');
  if (!(cpc > 0)) return fail('Цена клика должна быть больше нуля');
  if (!(crPct > 0 && crPct <= 100)) return fail('Конверсия должна быть больше нуля и не больше ста процентов');
  if (!(aov > 0)) return fail('Средний чек должен быть больше нуля');

  const clicks = budget / cpc;
  const orders = (clicks * crPct) / 100;
  const revenue = orders * aov;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Ожидаемая выручка', value: money(revenue) },
    secondary: [
      { label: 'Кликов', value: formatMeasure(clicks, fmtNumber) },
      { label: 'Заказов', value: formatMeasure(orders, fmtNumber) },
      { label: 'ROAS', value: formatStatistic(revenue / budget, fmtNumber), accent: revenue >= budget ? 'green' : 'red' },
      { label: 'Цена заказа', value: money(budget / orders) },
    ],
  };
};
