import type { CalcFunction } from '../../lib/types';
import { integer, money, optionalNumber, text, validOutput } from './numeric';

// Event counts are not silently rounded. A ratio above 100% is retained with a
// data-alignment warning, preserving the existing report-checking use case.
export const compute: CalcFunction = (inputs) => {
  const clicks = integer(inputs.clicks), impressions = integer(inputs.impressions), cost = optionalNumber(inputs.cost);
  const fail = (message: string) => ({ primary: { label: 'CTR', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (clicks === null || impressions === null || !Number.isSafeInteger(clicks) || !Number.isSafeInteger(impressions)) return fail('Количество должно быть целым в допустимом диапазоне');
  if (impressions < 1) return fail('Показов должно быть не меньше одного');
  if (clicks < 0) return fail('Кликов не может быть меньше нуля');
  if (cost === null) return fail('Введите корректные числовые данные');
  if (cost < 0) return fail('Расходы не могут быть отрицательными');
  const ctr = (clicks / impressions) * 100, perClick = clicks > 0 ? impressions / clicks : 0;
  const cpc = cost > 0 && clicks > 0 ? cost / clicks : 0, cpm = cost > 0 ? cost / (impressions / 1000) : 0;
  if (!validOutput(ctr, clicks > 0) || !validOutput(perClick, clicks > 0) || (cost > 0 && (!validOutput(cpm, true) || (clicks > 0 && !validOutput(cpc, true))))) return fail('Результат вне допустимого диапазона');
  const secondary: { label: string; value: string; accent?: 'red' }[] = [
    { label: 'Кликов на показы', value: `${text(clicks, 0)} на ${text(impressions, 0)}` },
    { label: 'Показов на один клик', value: clicks > 0 ? text(perClick, 1) : '—' },
  ];
  if (cost > 0) secondary.push({ label: 'Цена клика', value: clicks > 0 ? money(cpc) : '—' }, { label: 'Цена тысячи показов', value: money(cpm) });
  if (clicks > impressions) secondary.push({ label: 'Проверьте данные', value: 'Кликов больше, чем показов — вероятно, цифры взяты за разные периоды', accent: 'red' });
  return { primary: { label: 'CTR', value: `${text(ctr, ctr > 0 && ctr < 0.01 ? 4 : 2)}%` }, secondary };
};
