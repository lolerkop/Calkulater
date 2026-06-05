import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, fmtNumber, toNumber, toStr } from '../format';

export const calcCredit: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const term = toNumber(inputs.term);
  const termUnit = toStr(inputs.termUnit, 'years');
  const rate = toNumber(inputs.rate);
  const type = toStr(inputs.type, 'annuity');

  const months = termUnit === 'months' ? Math.round(term) : Math.round(term * 12);
  const r = rate / 100 / 12;

  let monthly = 0;
  let total = 0;

  if (months <= 0 || amount <= 0 || rate < 0) {
    return errorResult();
  }

  if (type === 'annuity') {
    monthly = r === 0
      ? amount / months
      : (amount * r * Math.pow(1 + r, months)) / (Math.pow(1 + r, months) - 1);
    total = monthly * months;
  } else {
    // Дифференцированный
    const principalPart = amount / months;
    let remaining = amount;
    total = 0;
    for (let i = 0; i < months; i++) {
      const interest = remaining * r;
      const payment = principalPart + interest;
      total += payment;
      remaining -= principalPart;
    }
    // Для отображения возьмём первый платёж
    monthly = principalPart + amount * r;
  }

  const overpay = total - amount;

  const result: CalcResult = {
    primary: { label: 'Ежемесячный платеж', value: fmtMoney(monthly) },
    secondary: [
      { label: 'Общая сумма выплат', value: fmtMoney(total) },
      { label: 'Переплата', value: fmtMoney(overpay), accent: 'red' },
      { label: 'Сумма процентов', value: fmtMoney(overpay) },
      { label: 'Срок', value: `${months} мес.` },
    ],
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
