import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, fmtPct, toNumber, toStr } from '../format';
import { creditAnnuityPayment } from './credit';

export const calcMortgage: CalcFunction = (inputs) => {
  const price = toNumber(inputs.price, NaN);
  const downPaymentMode = toStr(inputs.downPaymentMode, 'amount');
  const activeDownPayment = downPaymentMode === 'percent' ? inputs.downPaymentPct : inputs.downPayment;
  if ([inputs.price, inputs.years, inputs.rate, activeDownPayment, inputs.extraPayment, inputs.monthlyInsurance].some((value) => typeof value === 'boolean')) {
    return errorResult();
  }
  const down = downPaymentMode === 'percent'
    ? price * toNumber(inputs.downPaymentPct, NaN) / 100
    : toNumber(inputs.downPayment, NaN);
  const years = toNumber(inputs.years, NaN);
  const rate = toNumber(inputs.rate, NaN);
  const type = toStr(inputs.type, 'annuity');
  const extraPayment = toNumber(inputs.extraPayment ?? 0, NaN);
  const monthlyInsurance = toNumber(inputs.monthlyInsurance ?? 0, NaN);

  const loanAmount = price - down;
  const months = years * 12;

  if (![price, down, years, rate, extraPayment, monthlyInsurance, loanAmount].every(Number.isFinite)
    || price <= 0 || down < 0 || loanAmount <= 0 || rate < 0 || extraPayment < 0 || monthlyInsurance < 0) {
    return errorResult();
  }
  if (!['amount', 'percent'].includes(downPaymentMode) || !['annuity', 'differentiated'].includes(type)) {
    return errorResult('Выберите допустимый режим расчёта.');
  }
  if (!Number.isInteger(months) || months < 1 || months > 1200) {
    return errorResult('Срок должен составлять от 1 до 1200 целых месяцев.');
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
      const due = remaining + interest;
      const payment = i === months ? due : Math.min(monthly + extraPayment, due);
      const principal = payment - interest;
      if (principal <= 0 && remaining > 0) return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
      remaining = payment === due ? 0 : Math.max(0, remaining - principal);
      total += payment;
      if (![monthly, payment, total, remaining].every(Number.isFinite)) return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
      if (i <= 12 || i === months || remaining === 0) {
        schedule.push([String(i), fmtMoney(payment), fmtMoney(principal), fmtMoney(interest), fmtMoney(remaining)]);
      }
      if (remaining === 0) {
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
      const principal = i === months - 1 ? remaining : Math.min(principalPart + extraPayment, remaining);
      const payment = principal + interest;
      total += payment;
      remaining -= principal;
      if (![payment, total, remaining].every(Number.isFinite)) return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
      if (i < 12 || i === months - 1 || remaining === 0) {
        schedule.push([String(i + 1), fmtMoney(payment), fmtMoney(principal), fmtMoney(interest), fmtMoney(Math.max(0, remaining))]);
      }
      if (remaining === 0) {
        actualMonths = i + 1;
        break;
      }
    }
    monthly = principalPart + loanAmount * r;
  }

  const overpay = Math.max(0, total - loanAmount);
  const insuranceTotal = monthlyInsurance * actualMonths;
  const totalCost = total + down + insuranceTotal;
  const downPaymentPct = price > 0 ? (down / price) * 100 : 0;
  if (![totalCost, insuranceTotal, monthly + extraPayment + monthlyInsurance].every(Number.isFinite)) return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');

  return {
    primary: { label: 'Ежемесячный платеж', value: fmtMoney(monthly) },
    secondary: [
      { label: 'Сумма кредита', value: fmtMoney(loanAmount) },
      { label: 'Первоначальный взнос', value: `${fmtMoney(down)} (${fmtPct(downPaymentPct, 1)})` },
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

function errorResult(message = 'Введите положительные значения'): CalcResult {
  return {
    primary: { label: 'Ежемесячный платеж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' }],
  };
}
