import type { CalcFunction } from '../../lib/types';
import { integer, money, number, text, validOutput } from './numeric';

// ARR annualizes current recurring revenue. The editable growth assumption
// projects only next month's revenue at unchanged average monthly billing.
export const compute: CalcFunction = (inputs) => {
  const subscribers = integer(inputs.subscribers), arpu = number(inputs.arpuMonth), growthPct = number(inputs.growthPct);
  const fail = (message: string) => ({ primary: { label: 'MRR', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (subscribers === null || !Number.isSafeInteger(subscribers)) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(subscribers > 0)) return fail('Число подписчиков должно быть больше нуля');
  if (arpu === null || growthPct === null) return fail('Введите корректные числовые данные');
  if (!(arpu > 0)) return fail('Средний доход с подписчика должен быть больше нуля');
  if (growthPct < -100) return fail('Падение выручки не может превышать ста процентов');
  const mrr = subscribers * arpu, arr = mrr * 12, g = growthPct / 100;
  const next = mrr * (1 + g), delta = mrr * g;
  if (!validOutput(mrr, true) || !validOutput(arr, true) || !validOutput(next, growthPct > -100) || !validOutput(delta) || (growthPct !== 0 && delta === 0)) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'MRR', value: money(mrr) }, secondary: [ { label: 'ARR', value: money(arr) }, { label: 'MRR через месяц', value: money(next) }, { label: 'Прирост за месяц', value: money(delta) }, { label: 'Подписчиков', value: text(subscribers, 0) } ] };
};
