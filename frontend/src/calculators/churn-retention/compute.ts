import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';
import { formatMeasure } from '../../lib/platform/measurement';

// Отток и удержание за период.
//
// Отток считается от числа клиентов НА НАЧАЛО периода, а не на конец и не от
// среднего: пришедшие внутри периода в знаменатель не входят, иначе приток
// маскировал бы потери и отток выглядел бы тем меньше, чем активнее набор.
//
// Средний срок жизни 100/отток — это следствие постоянной доли ухода: при
// оттоке 5 % за период клиент в среднем остаётся 20 периодов. При нулевом
// оттоке срок бесконечен, и строка не выводится: показать бесконечность
// значило бы пообещать вечного клиента.

export const compute: CalcFunction = (inputs) => {
  const start = toNumber(inputs.startCustomers);
  const lost = toNumber(inputs.lost);
  const gained = toNumber(inputs.gained);
  const fail = (message: string) => ({
    primary: { label: 'Отток', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(start > 0)) return fail('Клиентов на начало должно быть больше нуля');
  if (lost < 0 || gained < 0) return fail('Числа клиентов не могут быть отрицательными');
  if (lost > start) return fail('Ушло не может быть больше, чем было на начало');

  const churn = (lost / start) * 100;
  const pct = (value: number) => `${fmtNumber(value, 2)}%`;

  return {
    primary: { label: 'Отток', value: pct(churn) },
    secondary: [
      { label: 'Удержание', value: pct(100 - churn) },
      { label: 'Клиентов на конец', value: fmtNumber(start - lost + gained, 0) },
      { label: 'Чистый прирост', value: pct(((gained - lost) / start) * 100) },
      ...(churn > 0
        ? [{ label: 'Средний срок жизни, периодов', value: formatMeasure(100 / churn, fmtNumber) }]
        : []),
    ],
  };
};
