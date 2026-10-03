import type { CalcFunction } from '../../lib/types';
import { fmtNumber } from '../../lib/format';
import { formatStatistic } from '../../lib/platform/measurement';
import { money, number, optionalNumber, text } from '../../lib/platform/scalarInputDisplay';
import { divideRate, logAdd, logExpm1, log1pExp, savingsBalance, wholeMonthsFromYears } from '../../lib/platform/financeMath';

// Constant nominal monthly rate and contributions at month-end. Solve the
// geometric series analytically; whole contribution months are checked against
// both the target and the immediately preceding month, without a century cap.
export const compute: CalcFunction = (inputs) => {
  const mode = inputs.mode === undefined ? 'payment' : inputs.mode;
  const goal = number(inputs.goal), initial = optionalNumber(inputs.initial), rate = number(inputs.rate);
  const fail = (message: string) => ({ primary: { label: mode === 'term' ? 'Срок' : 'Взнос в месяц', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }] });
  if (mode !== 'payment' && mode !== 'term') return fail('Неизвестный режим расчёта');
  if (goal === null || initial === null || rate === null) return fail('Введите корректные числовые данные');
  if (!(goal > 0)) return fail('Цель должна быть больше нуля');
  if (initial < 0) return fail('Начальная сумма не может быть отрицательной');
  if (rate < 0 || rate > 100) return fail('Ставка должна быть от 0 до 100 % годовых');
  const i = divideRate(rate, 1200);
  if (i === null) return fail('Результат вне допустимого диапазона');
  if (mode === 'term') {
    const monthly = number(inputs.monthly);
    if (monthly === null) return fail('Введите корректные числовые данные');
    if (!(monthly > 0)) return fail('Ежемесячный взнос должен быть больше нуля');
    const delta = Math.max(0, goal - initial);
    const logFraction = i === 0 || delta === 0 ? 0 : Math.log(i) + Math.log(delta) - logAdd(Math.log(monthly), initial > 0 ? Math.log(i) + Math.log(initial) : -Infinity);
    const fractionalMonths = delta === 0 ? 0 : i === 0 ? delta / monthly : log1pExp(logFraction) / Math.log1p(i);
    let months = Math.ceil(fractionalMonths);
    if (!Number.isSafeInteger(months) || months < 0 || (delta > 0 && months === 0)) return fail('Результат вне допустимого диапазона');
    // Check at most two neighbouring whole months rather than stepping through
    // the entire duration. An unresolved precision boundary is an explicit error.
    let result = savingsBalance(initial, monthly, i, months);
    const previous = months > 0 ? savingsBalance(initial, monthly, i, months - 1) : null;
    if (previous && previous.balance >= goal) { months -= 1; result = previous; }
    else if (result.balance < goal) { months += 1; result = savingsBalance(initial, monthly, i, months); }
    if (!Number.isSafeInteger(months) || ![result.balance, result.contributions, result.interest].every(Number.isFinite) || result.balance < goal || result.interest < 0 || (months > 0 && savingsBalance(initial, monthly, i, months - 1).balance >= goal)) return fail('Результат вне допустимого диапазона');
    return { primary: { label: 'Срок', value: `${text(months, 0)} мес` }, secondary: [
      { label: 'В годах', value: formatStatistic(months / 12, fmtNumber) }, { label: 'Итоговая сумма', value: money(result.balance) },
      { label: 'Всего взносов', value: money(result.contributions) }, { label: 'Начислено процентов', value: money(result.interest) }, { label: 'Цель', value: money(goal) },
    ] };
  }
  const years = number(inputs.years);
  if (years === null) return fail('Введите корректные числовые данные');
  const months = wholeMonthsFromYears(years);
  if (months === null) return fail('Срок должен быть не меньше месяца');
  const grown = savingsBalance(initial, 0, i, months);
  if (![grown.balance, grown.interest].every(Number.isFinite)) return fail('Результат вне допустимого диапазона');
  const remaining = Math.max(0, goal - grown.balance);
  const payment = remaining === 0 ? 0 : i === 0 ? remaining / months : Math.exp(Math.log(remaining) + Math.log(i) - logExpm1(months * Math.log1p(i)));
  const result = savingsBalance(initial, payment, i, months);
  if (![payment, result.balance, result.contributions, result.interest].every(Number.isFinite) || (remaining > 0 && payment <= 0) || result.interest < 0) return fail('Результат вне допустимого диапазона');
  return { primary: { label: 'Взнос в месяц', value: money(payment) }, secondary: [
    { label: 'Месяцев', value: text(months, 0) }, { label: 'Всего взносов', value: money(result.contributions) },
    { label: 'Начислено процентов', value: money(result.interest) }, { label: 'Итоговая сумма', value: money(remaining > 0 ? goal : result.balance) }, { label: 'Цель', value: money(goal) },
  ] };
};
