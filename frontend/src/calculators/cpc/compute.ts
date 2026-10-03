import type { CalcFunction } from '../../lib/types';
import { integer, money, number, optionalInteger, text, validOutput } from './numeric';

// Observed spend and actual whole clicks; zero/blank impressions mean unknown.
export const compute: CalcFunction = (inputs) => {
  const cost = number(inputs.cost), clicks = integer(inputs.clicks), impressions = optionalInteger(inputs.impressions);
  const fail = (message: string) => ({ primary: { label: 'Цена клика (CPC)', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (cost === null || impressions === null) return fail('Введите корректные числовые данные');
  if (!(cost > 0)) return fail('Бюджет должен быть больше нуля');
  if (clicks === null || !Number.isSafeInteger(clicks) || !Number.isSafeInteger(impressions)) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(clicks > 0)) return fail('Число кликов должно быть больше нуля');
  if (impressions < 0) return fail('Количество не может быть отрицательным');
  if (impressions > 0 && clicks > impressions) return fail('Кликов не может быть больше, чем показов');
  const cpc = cost / clicks, cpm = impressions > 0 ? cost / (impressions / 1000) : 0, ctr = impressions > 0 ? (clicks / impressions) * 100 : 0;
  if (!validOutput(cpc, true) || (impressions > 0 && (!validOutput(cpm, true) || !validOutput(ctr, true)))) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'Цена клика (CPC)', value: money(cpc) }, secondary: [
    { label: 'Кликов', value: text(clicks, 0) }, { label: 'Бюджет', value: money(cost) },
    ...(impressions > 0 ? [{ label: 'CPM', value: money(cpm) }, { label: 'Кликабельность', value: `${text(ctr)}%` }] : []),
  ] };
};
