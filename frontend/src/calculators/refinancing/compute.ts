import type { CalcFunction } from '../../lib/types';
import { integer, money, number, optionalNumber } from '../../lib/platform/scalarInputDisplay';
import { annuityPayment, divideRate, scheduledLoanInterest } from '../../lib/platform/financeMath';

// Constant annuities on the same outstanding balance. Switching costs are
// paid separately at the start, not financed. Compare nominal remaining sums;
// this is neither a discounted valuation nor a full-cost APR disclosure.

export const compute: CalcFunction = (inputs) => {
  const balance = number(inputs.balance);
  const oldRate = number(inputs.oldRate);
  const oldMonths = integer(inputs.oldMonths);
  const newRate = number(inputs.newRate);
  const newMonths = integer(inputs.newMonths);
  const fee = optionalNumber(inputs.fee);
  const fail = (message: string) => ({
    primary: { label: 'Выгода от рефинансирования', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (balance === null || oldRate === null || newRate === null || fee === null) return fail('Введите корректные числовые данные');
  if (oldMonths === null || newMonths === null) return fail('Количество должно быть целым в допустимом диапазоне');
  if (!(balance > 0)) return fail('Остаток долга должен быть больше нуля');
  if (!(oldMonths >= 1) || !(newMonths >= 1)) return fail('Срок должен быть не меньше месяца');
  if (oldRate < 0 || oldRate > 100 || newRate < 0 || newRate > 100) return fail('Ставка должна быть от 0 до 100 % годовых');
  if (fee < 0) return fail('Расходы на сделку не могут быть отрицательными');

  const oldI = divideRate(oldRate, 1200), newI = divideRate(newRate, 1200);
  if (oldI === null || newI === null) return fail('Результат вне допустимого диапазона');
  const oldPayment = annuityPayment(balance, oldI, oldMonths);
  const newPayment = annuityPayment(balance, newI, newMonths);
  const oldInterest = scheduledLoanInterest(balance, oldI, oldMonths);
  const newInterest = scheduledLoanInterest(balance, newI, newMonths);
  const oldTotal = balance + oldInterest;
  const newTotal = balance + newInterest + fee;
  const saved = oldInterest - newInterest - fee;
  const paymentDifference = oldMonths === newMonths ? (oldInterest - newInterest) / oldMonths : balance * ((newMonths - oldMonths) / (oldMonths * newMonths)) + (oldInterest / oldMonths - newInterest / newMonths);

  if (![oldPayment, newPayment, oldTotal, newTotal, saved, paymentDifference].every(Number.isFinite) || oldPayment <= 0 || newPayment <= 0 || (oldRate > 0 && oldInterest <= 0) || (newRate > 0 && newInterest <= 0) || (oldRate > 0 && oldPayment <= balance * (oldI)) || (newRate > 0 && newPayment <= balance * (newI))) return fail('Результат вне допустимого диапазона');

  return {
    primary: { label: 'Выгода от рефинансирования', value: money(saved) },
    secondary: [
      { label: 'Платёж сейчас', value: money(oldPayment) },
      { label: 'Платёж после', value: money(newPayment) },
      { label: 'Итого сейчас', value: money(oldTotal) },
      { label: 'Итого после', value: money(newTotal) },
      { label: 'Разница в платеже', value: money(paymentDifference) },
      { label: 'Расходы на сделку', value: money(fee) },
    ],
  };
};
