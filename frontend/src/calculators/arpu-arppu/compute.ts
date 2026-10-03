import type { CalcFunction } from '../../lib/types';
import { integer, money, number, text, validOutput } from './numeric';

// This form deliberately shares a revenue numerator. The payer-share identity
// does not hold for dashboard metrics with different revenue definitions.
export const compute: CalcFunction = (inputs) => {
  const revenue = number(inputs.revenue), users = integer(inputs.users), paying = integer(inputs.payingUsers);
  const fail = (message: string) => ({ primary: { label: 'ARPU', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (revenue === null) return fail('Введите корректные числовые данные');
  if (!(revenue > 0)) return fail('Выручка должна быть больше нуля');
  if (users === null || paying === null || !Number.isSafeInteger(users) || !Number.isSafeInteger(paying)) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(users > 0)) return fail('Число пользователей должно быть больше нуля');
  if (paying < 0) return fail('Число платящих не может быть отрицательным');
  if (paying > users) return fail('Платящих не может быть больше, чем пользователей');
  const arpu = revenue / users, arppu = paying > 0 ? revenue / paying : null, share = paying / users * 100;
  if (!validOutput(arpu, true) || (arppu !== null && !validOutput(arppu, true)) || !validOutput(share, paying > 0)) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'ARPU', value: money(arpu) }, secondary: [ ...(arppu !== null ? [{ label: 'ARPPU', value: money(arppu) }] : []), { label: 'Доля платящих', value: `${text(share)}%` }, { label: 'Выручка', value: money(revenue) }, { label: 'Пользователей', value: text(users, 0) }, { label: 'Платящих', value: text(paying, 0) } ] };
};
