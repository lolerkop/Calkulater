import type { CalcFunction } from '../../lib/types';
import { number as readNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { displayMoney } from '../../lib/platform/financeDisplay';
import { fmtNumber } from '../../lib/format';
import { formatMeasure, formatStatistic } from '../../lib/platform/measurement';

export const compute: CalcFunction = (inputs) => {
  const budget = readNumber(inputs.budget);
  const cpc = readNumber(inputs.cpc);
  const crPct = readNumber(inputs.crPct);
  const aov = readNumber(inputs.aov);

  const fail = (message: string) => ({
    primary: { label: 'Ожидаемая выручка', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (budget === null || cpc === null || crPct === null || aov === null) return fail('Введите корректные числовые данные');

  if (!(budget > 0)) return fail('Бюджет должен быть больше нуля');
  if (!(cpc > 0)) return fail('Цена клика должна быть больше нуля');
  if (!(crPct >= 0 && crPct <= 100)) return fail('Конверсия должна быть от нуля до ста процентов');
  if (!(aov > 0)) return fail('Средний чек должен быть больше нуля');

  const clicks = budget / cpc;
  const orders = clicks * (crPct / 100);
  const revenue = orders * aov;
  const roas = revenue / budget;
  const cpo = crPct > 0 ? cpc / (crPct / 100) : null;
  if (![clicks, orders, revenue, roas].every(value => validOutput(value)) || (crPct > 0 && (!(orders > 0) || !(revenue > 0) || !(roas > 0) || !validOutput(cpo!, true)))) return fail('Результат вне допустимого диапазона');
  const money = displayMoney;

  return {
    primary: { label: 'Ожидаемая выручка', value: money(revenue) },
    secondary: [
      { label: 'Кликов', value: formatMeasure(clicks, fmtNumber) },
      { label: 'Заказов', value: formatMeasure(orders, fmtNumber) },
      { label: 'ROAS', value: formatStatistic(roas, fmtNumber) },
      ...(cpo !== null ? [{ label: 'Цена заказа', value: money(cpo) }] : []),
    ],
  };
};
