import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';
import { creditAnnuityPayment } from './credit';

export const calcMortgage: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const down = toNumber(inputs.downPayment);
  const years = Math.round(toNumber(inputs.years));
  const rate = toNumber(inputs.rate);
  const type = toStr(inputs.type, 'annuity');

  const loanAmount = price - down;
  const months = years * 12;

  if (loanAmount <= 0 || months <= 0 || rate < 0) {
    return {
      primary: { label: 'Ежемесячный платеж', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Сумма кредита должна быть положительной', accent: 'red' }],
    };
  }

  const r = rate / 100 / 12;
  let monthly = 0;
  let total = 0;

  if (type === 'annuity') {
    monthly = creditAnnuityPayment(loanAmount, months, rate);
    total = monthly * months;
  } else {
    const principalPart = loanAmount / months;
    let remaining = loanAmount;
    total = 0;
    for (let i = 0; i < months; i++) {
      const interest = remaining * r;
      total += principalPart + interest;
      remaining -= principalPart;
    }
    monthly = principalPart + loanAmount * r;
  }

  const overpay = total - loanAmount;
  const totalCost = total + down;

  return {
    primary: { label: 'Ежемесячный платеж', value: fmtMoney(monthly) },
    secondary: [
      { label: 'Сумма кредита', value: fmtMoney(loanAmount) },
      { label: 'Переплата', value: fmtMoney(overpay), accent: 'red' },
      { label: 'Общая стоимость с взносом', value: fmtMoney(totalCost) },
      { label: 'Срок', value: `${years} лет` },
    ],
    note: type === 'differentiated'
      ? 'Показан размер первого (наибольшего) платежа.'
      : undefined,
  };
};
