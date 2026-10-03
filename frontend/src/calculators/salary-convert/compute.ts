import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { number as toNumber, validOutput } from '../../lib/platform/scalarInputDisplay';
import { choice } from '../../lib/platform/financeWave14Input';

// Перевод зарплаты между периодами через один общий знаменатель — час.
//
//   часов в дне 8 · в неделе 40 · в месяце 168 · в году 2 016
//
// Это фиксированная модель сравнения, не общий календарь или норма договора.
// Месяц 168 и год 2016 дают 12 модельных месяцев/50,4 недели в году.
// Налоговая база и валютная единица введённой суммы сохраняются.
const HOURS: Record<string, number> = { hour: 1, day: 8, week: 40, month: 168, year: 2016 };

export const compute: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const from = choice(inputs.fromPeriod, ['hour', 'day', 'week', 'month', 'year'], 'month');
  const to = choice(inputs.toPeriod, ['hour', 'day', 'week', 'month', 'year'], 'year');

  const fail = (message: string) => ({
    primary: { label: 'Зарплата за выбранный период', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (amount === null) return fail('Введите корректные числовые данные');
  if (!(amount > 0)) return fail('Сумма должна быть больше нуля');
  if (from === null || to === null) return fail('Выберите период из списка');

  const convert = (period: string) => amount * (HOURS[period] / HOURS[from]);
  const hourly = convert('hour');
  const daily = convert('day');
  const monthly = convert('month');
  const yearly = convert('year');
  const target = convert(to);
  if (![hourly, daily, monthly, yearly, target].every(v => validOutput(v, true))) return fail('Результат вне допустимого диапазона');
  const money = (value: number) => `${fmtNumber(value, 2)} ₽`;

  return {
    primary: { label: 'Зарплата за выбранный период', value: money(target) },
    secondary: [
      { label: 'В час', value: money(hourly) },
      { label: 'В день', value: money(daily) },
      { label: 'В месяц', value: money(monthly) },
      { label: 'В год', value: money(yearly) },
    ],
  };
};
