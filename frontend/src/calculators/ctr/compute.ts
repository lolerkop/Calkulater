import type { CalcFunction } from '../../lib/types';
import { fmtInt, fmtNumber, toNumber } from '../../lib/format';

// CTR: кликабельность объявления.
//
// Знаменатель — показы, и это единственное, что отличает CTR от соседних
// метрик: у конверсии внизу клики, у ROAS — расход. Перепутать их легко, а
// результат будет выглядеть правдоподобно, поэтому знаменатель назван прямо
// в подписи строки.
//
// Кликов больше, чем показов, быть не может: это признак того, что цифры взяты
// из разных отчётов или за разные периоды. Расчёт всё же показывается — данные
// принадлежат посетителю, — но рядом стоит предупреждение.
const ctrDigits = (value: number) => (value > 0 && value < 0.01 ? 4 : 2);

export const compute: CalcFunction = (inputs) => {
  const clicks = Math.round(toNumber(inputs.clicks));
  const impressions = Math.round(toNumber(inputs.impressions));
  const cost = toNumber(inputs.cost);

  const fail = (message: string) => ({
    primary: { label: 'CTR', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(impressions >= 1)) return fail('Показов должно быть не меньше одного');
  if (clicks < 0) return fail('Кликов не может быть меньше нуля');

  const ctr = (clicks / impressions) * 100;

  const secondary: { label: string; value: string; accent?: 'red' }[] = [
    { label: 'Кликов на показы', value: `${fmtInt(clicks)} на ${fmtInt(impressions)}` },
    { label: 'Показов на один клик', value: clicks > 0 ? fmtNumber(impressions / clicks, 1) : '—' },
  ];

  if (cost > 0) {
    secondary.push({
      label: 'Цена клика',
      value: clicks > 0 ? `${fmtNumber(cost / clicks, 2)} ₽` : '—',
    });
    secondary.push({ label: 'Цена тысячи показов', value: `${fmtNumber((cost / impressions) * 1000, 2)} ₽` });
  }

  if (clicks > impressions) {
    secondary.push({
      label: 'Проверьте данные',
      value: 'Кликов больше, чем показов — вероятно, цифры взяты за разные периоды',
      accent: 'red' as const,
    });
  }

  return {
    primary: { label: 'CTR', value: `${fmtNumber(ctr, ctrDigits(ctr))}%` },
    secondary,
  };
};
