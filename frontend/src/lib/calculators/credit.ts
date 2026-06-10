import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, fmtNumber, toNumber, toStr } from '../format';

export const calcCredit: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const term = toNumber(inputs.term);
  const termUnit = toStr(inputs.termUnit, 'years');
  const rate = toNumber(inputs.rate);
  const type = toStr(inputs.type, 'annuity');
  const extraPayment = Math.max(0, toNumber(inputs.extraPayment));
  const oneTimeFee = Math.max(0, toNumber(inputs.oneTimeFee));

  const months = termUnit === 'months' ? Math.round(term) : Math.round(term * 12);
  const r = rate / 100 / 12;

  let monthly = 0;
  let total = 0;
  let actualMonths = months;
  let lastActualPayment = 0;
  const schedule: string[][] = [];

  if (months <= 0 || amount <= 0 || rate < 0) {
    return errorResult();
  }

  if (type === 'annuity') {
    monthly = r === 0
      ? amount / months
      : (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    total = 0;
    let remaining = amount;
    for (let i = 1; i <= months; i++) {
      const interest = remaining * r;
      const payment = Math.min(monthly + extraPayment, remaining + interest);
      const principal = payment - interest;
      lastActualPayment = payment;
      remaining = Math.max(0, remaining - principal);
      total += payment;
      if (i <= 12 || i === months || remaining <= 0.01) {
        schedule.push([String(i), fmtMoney(payment), fmtMoney(principal), fmtMoney(interest), fmtMoney(remaining)]);
      }
      if (remaining <= 0.01) {
        actualMonths = i;
        break;
      }
    }
  } else {
    // Дифференцированный
    const principalPart = amount / months;
    let remaining = amount;
    total = 0;
    for (let i = 0; i < months; i++) {
      const interest = remaining * r;
      const principal = Math.min(principalPart + extraPayment, remaining);
      const payment = principal + interest;
      lastActualPayment = payment;
      total += payment;
      remaining -= principal;
      if (i < 12 || i === months - 1 || remaining <= 0.01) {
        schedule.push([String(i + 1), fmtMoney(payment), fmtMoney(principal), fmtMoney(interest), fmtMoney(Math.max(0, remaining))]);
      }
      if (remaining <= 0.01) {
        actualMonths = i + 1;
        break;
      }
    }
    // Для отображения возьмём первый платёж
    monthly = principalPart + amount * r;
  }

  const paymentTotal = total;
  const interestTotal = paymentTotal - amount;
  total += oneTimeFee;
  const overpay = interestTotal + oneTimeFee;

  const result: CalcResult = {
    primary: { label: 'Ежемесячный платеж', value: fmtMoney(monthly) },
    secondary: [
      { label: 'Общая сумма выплат', value: fmtMoney(total) },
      { label: 'Переплата', value: fmtMoney(overpay), accent: 'red' },
      { label: 'Сумма процентов', value: fmtMoney(interestTotal) },
      ...(extraPayment > 0 ? [{ label: 'Плановый платеж с доплатой', value: fmtMoney(monthly + extraPayment) }] : []),
      ...(oneTimeFee > 0 ? [{ label: 'Разовая комиссия', value: fmtMoney(oneTimeFee) }] : []),
      ...(type === 'differentiated'
        ? [
            { label: 'Последний платеж', value: fmtMoney(lastActualPayment) },
            { label: 'Средний платеж', value: fmtMoney(paymentTotal / actualMonths) },
          ]
        : []),
      { label: 'Срок', value: `${actualMonths} мес.` },
      ...(actualMonths < months ? [{ label: 'Сокращение срока', value: `${months - actualMonths} мес.`, accent: 'green' as const }] : []),
    ],
    table: {
      title: 'График первых платежей',
      columns: ['Месяц', 'Платеж', 'Основной долг', 'Проценты', 'Остаток'],
      rows: schedule,
      note: actualMonths > 12 ? 'Показаны первые 12 месяцев и последний платеж.' : undefined,
    },
    note: type === 'differentiated'
      ? 'Показан размер первого (наибольшего) платежа. Далее платёж снижается.'
      : undefined,
  };

  return result;
};

function errorResult(): CalcResult {
  return {
    primary: { label: 'Ежемесячный платеж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: 'Введите положительные значения', accent: 'red' }],
  };
}

// Вспомогательная функция для тестов
export function creditAnnuityPayment(amount: number, months: number, annualRate: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return amount / months;
  return (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
}
