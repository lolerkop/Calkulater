import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber, toStr } from '../../lib/format';

// Перевод зарплаты между периодами через один общий знаменатель — час.
//
//   часов в дне 8 · в неделе 40 · в месяце 168 · в году 2 016
//
// Числа приняты как рабочая норма, а не как календарь: месяц здесь равен
// 168 рабочим часам (21 день по 8), год — двенадцати таким месяцам. Именно
// поэтому «в год» ровно в двенадцать раз больше «в месяц», без сдвигов на
// длину февраля и на праздники. Считать иначе — значит получать разные
// ответы для одной и той же зарплаты в зависимости от месяца.
//
// Все четыре периода показаны одновременно: обычно человек сравнивает
// предложения, названные в РАЗНЫХ единицах, и переводить каждое по одному
// значит сравнивать по памяти.
const HOURS: Record<string, number> = { hour: 1, day: 8, week: 40, month: 168, year: 2016 };

export const compute: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const from = toStr(inputs.fromPeriod, 'month');
  const to = toStr(inputs.toPeriod, 'year');

  const fail = (message: string) => ({
    primary: { label: 'Зарплата за выбранный период', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (!HOURS[from] || !HOURS[to]) return fail('Выберите период из списка');

  const hourly = amount / HOURS[from];
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Зарплата за выбранный период', value: money(hourly * HOURS[to]) },
    secondary: [
      { label: 'В час', value: money(hourly) },
      { label: 'В день', value: money(hourly * HOURS.day) },
      { label: 'В месяц', value: money(hourly * HOURS.month) },
      { label: 'В год', value: money(hourly * HOURS.year) },
    ],
  };
};
