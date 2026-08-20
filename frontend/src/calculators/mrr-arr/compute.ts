import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Регулярная выручка подписки.
//
// ARR здесь — это MRR×12, то есть текущий темп в годовом выражении, а НЕ
// прогноз выручки за год. Разница существенна: при растущей базе фактический
// год окажется больше, при падающей меньше, и подставлять ARR в план как
// ожидаемые деньги нельзя.
//
// Рост — редактируемое допущение, а не предсказание, поэтому показан всего один
// месяц вперёд. Возводить процент в двенадцатую степень и выдавать результат за
// годовую выручку значило бы продать посетителю уверенность, которой нет.

export const compute: CalcFunction = (inputs) => {
  const subscribers = toNumber(inputs.subscribers);
  const arpu = toNumber(inputs.arpuMonth);
  const growth = toNumber(inputs.growthPct) / 100;
  const fail = (message: string) => ({
    primary: { label: 'MRR', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(subscribers > 0)) return fail('Число подписчиков должно быть больше нуля');
  if (!(arpu > 0)) return fail('Средний доход с подписчика должен быть больше нуля');
  if (1 + growth < 0) return fail('Падение выручки не может превышать ста процентов');

  const mrr = subscribers * arpu;
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'MRR', value: money(mrr) },
    secondary: [
      { label: 'ARR', value: money(mrr * 12) },
      { label: 'MRR через месяц', value: money(mrr * (1 + growth)) },
      { label: 'Прирост за месяц', value: money(mrr * growth) },
      { label: 'Подписчиков', value: fmtNumber(subscribers, 0) },
    ],
  };
};
