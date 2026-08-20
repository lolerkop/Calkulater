import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// ARPU и ARPPU. Разница между ними — знаменатель, и именно он всё решает.
//
// ARPU делит выручку на ВСЕХ пользователей, ARPPU — только на платящих.
// Первая величина падает вместе с ростом бесплатной аудитории, вторая нет,
// поэтому судить по одной без другой нельзя: растущий ARPPU при падающем ARPU
// означает, что платят всё меньше людей, но каждый — всё больше.
//
// При нуле платящих ARPPU не определён, и строка не выводится: делить выручку
// не на кого, а бесконечность на экране хуже отсутствия строки.

export const compute: CalcFunction = (inputs) => {
  const revenue = toNumber(inputs.revenue);
  const users = toNumber(inputs.users);
  const paying = toNumber(inputs.payingUsers);
  const fail = (message: string) => ({
    primary: { label: 'ARPU', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(revenue > 0)) return fail('Выручка должна быть больше нуля');
  if (!(users > 0)) return fail('Число пользователей должно быть больше нуля');
  if (paying < 0) return fail('Число платящих не может быть отрицательным');
  if (paying > users) return fail('Платящих не может быть больше, чем пользователей');

  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'ARPU', value: money(revenue / users) },
    secondary: [
      ...(paying > 0 ? [{ label: 'ARPPU', value: money(revenue / paying) }] : []),
      { label: 'Доля платящих', value: `${fmtNumber((paying / users) * 100, 2)}%` },
      { label: 'Выручка', value: money(revenue) },
      { label: 'Пользователей', value: fmtNumber(users, 0) },
      { label: 'Платящих', value: fmtNumber(paying, 0) },
    ],
  };
};
