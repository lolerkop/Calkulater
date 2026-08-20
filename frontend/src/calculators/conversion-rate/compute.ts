import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Конверсия и цена конверсии.
//
// Отгруженный ctr делит клики на ПОКАЗЫ — это верхняя часть воронки. Здесь
// нижняя: целевые действия делятся на визиты, и знаменатель другой.
//
// При нуле конверсий не выводятся ни цена конверсии, ни число визитов на одну
// конверсию: обе величины требуют деления на нуль. Нулевая конверсия при этом
// законна и показывается как 0 % — это осмысленный ответ, в отличие от
// бесконечной цены.

export const compute: CalcFunction = (inputs) => {
  const visitors = toNumber(inputs.visitors);
  const conversions = toNumber(inputs.conversions);
  const cost = toNumber(inputs.cost);
  const fail = (message: string) => ({
    primary: { label: 'Конверсия', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(visitors > 0)) return fail('Число визитов должно быть больше нуля');
  if (conversions < 0) return fail('Число конверсий не может быть отрицательным');
  if (conversions > visitors) return fail('Конверсий не может быть больше, чем визитов');
  if (cost < 0) return fail('Бюджет не может быть отрицательным');

  return {
    primary: { label: 'Конверсия', value: `${fmtNumber((conversions / visitors) * 100, 2)}%` },
    secondary: [
      { label: 'Конверсий', value: fmtNumber(conversions, 0) },
      { label: 'Визитов', value: fmtNumber(visitors, 0) },
      ...(conversions > 0 && cost > 0
        ? [{ label: 'Цена конверсии', value: `${fmtNumber(cost / conversions, 2)} ₽` }]
        : []),
      ...(conversions > 0
        ? [{ label: 'Визитов на одну конверсию', value: formatMeasure(visitors / conversions, fmtNumber) }]
        : []),
    ],
  };
};
