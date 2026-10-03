import type { CalcFunction } from '../../lib/types';
import { fmtInt } from '../../lib/format';
import { integer, money, number, text, validOutput } from './numeric';

// Only the two known inputs of the selected mode are read. Inverse delivery is
// a constant-rate estimate, rounded to the nearest whole impression for display.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'cpm' : inputs.mode;
  const fail = (message: string) => ({ primary: { label: 'CPM', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'cpm' && mode !== 'cost' && mode !== 'impressions') return fail('Неизвестный режим расчёта');
  const cost = mode !== 'cost' ? number(inputs.cost) : 0;
  const cpm = mode !== 'cpm' ? number(inputs.cpm) : 0;
  const impressions = mode !== 'impressions' ? integer(inputs.impressions) : 1;
  if (cost === null || cpm === null) return fail('Введите корректные числовые данные');
  if (cost < 0) return fail('Бюджет не может быть отрицательным');
  if (mode !== 'cpm' && !(cpm > 0)) return fail('CPM должен быть больше нуля');
  if (impressions === null || !Number.isSafeInteger(impressions)) return fail('Количество должно быть целым в допустимом диапазоне');
  if (impressions < 1) return fail('Показов должно быть не меньше одного');
  if (mode === 'impressions') {
    const shows = (cost / cpm) * 1000, perImpression = cpm / 1000;
    if (!validOutput(shows, cost > 0) || shows > Number.MAX_SAFE_INTEGER || !validOutput(perImpression, true)) return fail('Результат вне допустимого диапазона');
    return { primary: { label: 'Показы', value: fmtInt(shows) }, secondary: [{ label: 'CPM', value: money(cpm) }, { label: 'Бюджет', value: money(cost) }, { label: 'Стоимость показа', value: `${text(perImpression, 4)} ₽` }] };
  }
  const budget = mode === 'cost' ? cpm * (impressions / 1000) : cost;
  const value = mode === 'cpm' ? cost / (impressions / 1000) : cpm;
  const perImpression = value / 1000;
  if (!validOutput(budget, mode === 'cost') || !validOutput(value, budget > 0) || !validOutput(perImpression, budget > 0)) return fail('Результат вне допустимого диапазона');
  return { primary: { label: mode === 'cost' ? 'Бюджет' : 'CPM', value: money(mode === 'cost' ? budget : value) }, secondary: [
    { label: mode === 'cost' ? 'CPM' : 'Бюджет', value: money(mode === 'cost' ? cpm : cost) },
    { label: 'Показы', value: fmtInt(impressions) }, { label: 'Стоимость показа', value: `${text(perImpression, 4)} ₽` },
  ] };
};
