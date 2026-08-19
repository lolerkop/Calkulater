import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber, toStr } from '../../lib/format';

// CPM: стоимость тысячи показов.
//
// Знаменатель — показы, делённые на тысячу, и именно он отличает CPM от
// соседних метрик: у CPC внизу клики, у CPA — действия. Формулы выглядят
// одинаково, поэтому знаменатель назван прямо в подписи результата.
const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

export const compute: CalcFunction = (inputs) => {
  const mode = toStr(inputs.mode, 'cpm');
  const cost = toNumber(inputs.cost);
  const impressions = Math.round(toNumber(inputs.impressions));
  const cpm = toNumber(inputs.cpm);

  const fail = (message: string) => ({
    primary: { label: 'CPM', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (cost < 0) return fail('Бюджет не может быть отрицательным');

  if (mode === 'impressions') {
    if (!(cpm > 0)) return fail('CPM должен быть больше нуля');
    const shows = (cost / cpm) * 1000;
    return {
      primary: { label: 'Показы', value: fmtInt(shows) },
      secondary: [
        { label: 'CPM', value: money(cpm) },
        { label: 'Бюджет', value: money(cost) },
        { label: 'Стоимость показа', value: `${fmtNumber(cpm / 1000, 4)} ₽` },
      ],
    };
  }

  if (mode === 'cost') {
    if (!(impressions >= 1)) return fail('Показов должно быть не меньше одного');
    if (!(cpm > 0)) return fail('CPM должен быть больше нуля');
    const budget = (cpm * impressions) / 1000;
    return {
      primary: { label: 'Бюджет', value: money(budget) },
      secondary: [
        { label: 'CPM', value: money(cpm) },
        { label: 'Показы', value: fmtInt(impressions) },
        { label: 'Стоимость показа', value: `${fmtNumber(cpm / 1000, 4)} ₽` },
      ],
    };
  }

  if (!(impressions >= 1)) return fail('Показов должно быть не меньше одного');
  const value = (cost / impressions) * 1000;

  return {
    primary: { label: 'CPM', value: money(value) },
    secondary: [
      { label: 'Бюджет', value: money(cost) },
      { label: 'Показы', value: fmtInt(impressions) },
      { label: 'Стоимость показа', value: `${fmtNumber(value / 1000, 4)} ₽` },
    ],
  };
};
