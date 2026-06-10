import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';
import { creditAnnuityPayment } from './credit';

export const calcMortgage: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price);
  const downPaymentMode = toStr(inputs.downPaymentMode, 'amount');
  const down = downPaymentMode === 'percent'
    ? price * Math.max(0, toNumber(inputs.downPaymentPct)) / 100
    : toNumber(inputs.downPayment);
  const years = Math.round(toNumber(inputs.years));
  const rate = toNumber(inputs.rate);
  const type = toStr(inputs.type, 'annuity');
  const extraPayment = Math.max(0, toNumber(inputs.extraPayment));
  const monthlyInsurance = Math.max(0, toNumber(inputs.monthlyInsurance));

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
  let actualMonths = months;
  const schedule: string[][] = [];

  if (type === 'annuity') {
    monthly = creditAnnuityPayment(loanAmount, months, rate);
    total = 0;
    let remaining = loanAmount;
    for (let i = 1; i <= months; i++) {
      const interest = remaining * r;
      const payment = Math.min(monthly + extraPayment, remaining + interest);
      const principal = payment - interest;
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
    const principalPart = loanAmount / months;
    let remaining = loanAmount;
    total = 0;
    for (let i = 0; i < months; i++) {
      const interest = remaining * r;
      const principal = Math.min(principalPart + extraPayment, remaining);
      const payment = principal + interest;
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
    monthly = principalPart + loanAmount * r;
  }

  const overpay = total - loanAmount;
  const insuranceTotal = monthlyInsurance * actualMonths;
  const totalCost = total + down + insuranceTotal;
  const downPaymentPct = price > 0 ? (down / price) * 100 : 0;

  return {
    primary: { label: 'Ежемесячный платеж', value: fmtMoney(monthly) },
    secondary: [
      { label: 'Сумма кредита', value: fmtMoney(loanAmount) },
      { label: 'Первоначальный взнос', value: `${fmtMoney(down)} (${downPaymentPct.toFixed(1)}%)` },
      ...(extraPayment > 0 ? [{ label: 'Плановый платеж с доплатой', value: fmtMoney(monthly + extraPayment) }] : []),
      ...(monthlyInsurance > 0 ? [{ label: 'Расход в месяц со страховкой', value: fmtMoney(monthly + extraPayment + monthlyInsurance) }] : []),
      { label: 'Переплата', value: fmtMoney(overpay), accent: 'red' },
      ...(insuranceTotal > 0 ? [{ label: 'Страховка и расходы за срок', value: fmtMoney(insuranceTotal) }] : []),
      { label: 'Общая стоимость с взносом', value: fmtMoney(totalCost) },
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
      ? 'Показан размер первого (наибольшего) платежа.'
      : undefined,
  };
};
