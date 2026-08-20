import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Цена клика и, если известны показы, ещё две метрики размещения.
//
//   CPC = бюджет / клики
//   CPM = бюджет / показы × 1000
//   CTR = клики / показы × 100
//
// Показы объявлены НЕОБЯЗАТЕЛЬНЫМ полем: цену клика можно посчитать и без них,
// а вот CPM и кликабельность без показов не существуют. Пустое поле поэтому
// означает «данных нет», и зависящие от него строки просто не выводятся —
// это честнее, чем показать нули и выдать их за измерение.
export const compute: CalcFunction = (inputs) => {
  const cost = toNumber(inputs.cost);
  const clicks = toNumber(inputs.clicks);
  const impressions = toNumber(inputs.impressions);

  const fail = (message: string) => ({
    primary: { label: 'Цена клика (CPC)', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(cost > 0)) return fail('Бюджет должен быть больше нуля');
  if (!(clicks > 0)) return fail('Число кликов должно быть больше нуля');
  if (impressions > 0 && clicks > impressions) return fail('Кликов не может быть больше, чем показов');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Цена клика (CPC)', value: money(cost / clicks) },
    secondary: [
      { label: 'Кликов', value: fmtNumber(clicks, 0) },
      { label: 'Бюджет', value: money(cost) },
      ...(impressions > 0
        ? [
            { label: 'CPM', value: money((cost / impressions) * 1000) },
            { label: 'Кликабельность', value: `${fmtNumber((clicks / impressions) * 100, 2)}%` },
          ]
        : []),
    ],
  };
};
