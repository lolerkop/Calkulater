import type { CalcFunction } from '../../lib/types';
import { money, number, optionalNumber, text } from '../../lib/platform/scalarInputDisplay';
import { divideRate, accumulationExtra, annuityPayment, logExpm1, scheduledLoanInterest, wholeMonthsFromYears } from '../../lib/platform/financeMath';

// The scheduled payment stays fixed. A constant extra payment is applied after
// interest at month-end; the last instalment pays only the remaining debt.
// The recurrence B(k)=A−(M−Ai)((1+i)^k−1)/i has an analytic payoff time.
export const compute: CalcFunction = (inputs) => {
  const amount = number(inputs.amount), rate = number(inputs.rate), years = number(inputs.years), extra = optionalNumber(inputs.extra);
  const fail = (message: string) => ({ primary: { label: 'Экономия на процентах', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (amount === null || rate === null || years === null || extra === null) return fail('Введите корректные числовые данные');
  if (!(amount > 0)) return fail('Сумма кредита должна быть больше нуля');
  if (rate < 0) return fail('Ставка не может быть отрицательной');
  if (!(years > 0)) return fail('Срок должен быть больше нуля');
  if (extra < 0) return fail('Доплата не может быть отрицательной');
  const scheduled = wholeMonthsFromYears(years);
  if (scheduled === null) return fail('Срок должен быть не меньше месяца');
  const i = divideRate(rate, 1200);
  if (i === null) return fail('Результат вне допустимого диапазона');
  const payment = annuityPayment(amount, i, scheduled), full = payment + extra, firstInterest = amount * i;
  if (![payment, full, firstInterest, payment * scheduled].every(Number.isFinite) || payment <= 0 || (rate > 0 && (i === 0 || firstInterest === 0)) || (extra > 0 && full === payment)) return fail('Результат вне допустимого диапазона');
  const firstPrincipal = full - firstInterest;
  if (!(firstPrincipal > 0)) return fail('Платёж с доплатой не покрывает проценты — долг не уменьшается');
  let months = scheduled, paid = payment * scheduled;
  if (extra > 0) {
    const payoff = i === 0 ? amount / full : (Number.isFinite(firstInterest / firstPrincipal) ? Math.log1p(firstInterest / firstPrincipal) : Math.log(full) - Math.log(firstPrincipal)) / Math.log1p(i);
    months = Math.min(scheduled, Math.max(1, Math.ceil(payoff)));
    if (!Number.isSafeInteger(months)) return fail('Результат вне допустимого диапазона');
    const before = (count: number) => count === 0 ? amount : i === 0 ? amount - full * count : amount - Math.exp(Math.log(firstPrincipal) + logExpm1(count * Math.log1p(i)) - Math.log(i));
    let balance = before(months - 1);
    if (balance <= 0 && months > 1) { months -= 1; balance = before(months - 1); }
    let last = balance + balance * i;
    if (last > full && months < scheduled) { months += 1; balance = before(months - 1); last = balance + balance * i; }
    if (![balance, last].every(Number.isFinite) || balance <= 0 || last <= 0 || last > full * (1 + 16 * Number.EPSILON)) return fail('Результат вне допустимого диапазона');
    paid = full * (months - 1) + last;
  }
  const extraAccumulation = accumulationExtra(i, months);
  const reduction = Number.isFinite(extraAccumulation) ? firstPrincipal * extraAccumulation : Math.exp(Math.log(firstPrincipal) + logExpm1(months * Math.log1p(i)) - Math.log(i));
  const actualInterest = i === 0 ? 0 : firstInterest * months - reduction;
  const saved = extra === 0 || i === 0 ? 0 : scheduledLoanInterest(amount, i, scheduled) - actualInterest;
  if (![paid, saved].every(Number.isFinite) || saved < 0) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'Экономия на процентах', value: money(saved) }, secondary: [
    { label: 'Платёж по графику', value: money(payment) }, { label: 'Платежей вместо графика', value: text(months, 0), accent: months < scheduled ? 'green' as const : undefined },
    { label: 'Платежей по графику', value: text(scheduled, 0) }, { label: 'Всего выплат', value: money(paid) },
  ] };
};
