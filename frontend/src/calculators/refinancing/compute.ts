import type { CalcFunction } from '../../lib/types';
import { fmtNumber, toNumber } from '../../lib/format';

// Сравнение действующего кредита с новым.
//
// Оба платежа считаются одной и той же формулой аннуитета, поэтому сравнение
// честное: разница берётся из ставок и сроков, а не из разных способов счёта.
// Расходы на сделку прибавляются к НОВОМУ итогу — иначе выгода получалась бы
// нарисованной: оценка, страховка и госпошлина платятся именно при переходе.
//
// Отрицательная выгода не прячется: удлинение срока при меньшей ставке часто
// даёт меньший платёж и БОЛЬШУЮ переплату, и это надо видеть.

const money = (value: number) => `${fmtNumber(value, 2)} ₽`;
const annuity = (principal: number, monthly: number, months: number) =>
  (monthly === 0 ? principal / months : (principal * monthly * (1 + monthly) ** months) / ((1 + monthly) ** months - 1));

export const compute: CalcFunction = (inputs) => {
  const balance = toNumber(inputs.balance);
  const oldRate = toNumber(inputs.oldRate);
  const oldMonths = toNumber(inputs.oldMonths);
  const newRate = toNumber(inputs.newRate);
  const newMonths = toNumber(inputs.newMonths);
  const fee = toNumber(inputs.fee);
  const fail = (message: string) => ({
    primary: { label: 'Выгода от рефинансирования', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' as const }],
  });

  if (!(balance > 0)) return fail('Остаток долга должен быть больше нуля');
  if (!(oldMonths >= 1) || !(newMonths >= 1)) return fail('Срок должен быть не меньше месяца');
  if (oldRate < 0 || oldRate > 100 || newRate < 0 || newRate > 100) return fail('Ставка должна быть от 0 до 100 % годовых');
  if (fee < 0) return fail('Расходы на сделку не могут быть отрицательными');

  const oldPayment = annuity(balance, oldRate / 1200, oldMonths);
  const newPayment = annuity(balance, newRate / 1200, newMonths);
  const oldTotal = oldPayment * oldMonths;
  const newTotal = newPayment * newMonths + fee;

  return {
    primary: { label: 'Выгода от рефинансирования', value: money(oldTotal - newTotal) },
    secondary: [
      { label: 'Платёж сейчас', value: money(oldPayment) },
      { label: 'Платёж после', value: money(newPayment) },
      { label: 'Итого сейчас', value: money(oldTotal) },
      { label: 'Итого после', value: money(newTotal) },
      { label: 'Разница в платеже', value: money(oldPayment - newPayment) },
      { label: 'Расходы на сделку', value: money(fee) },
    ],
  };
};
