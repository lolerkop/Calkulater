import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

export const calcCredit: CalcFunction = (inputs) => {
  if ([inputs.amount, inputs.term, inputs.rate, inputs.extraPayment, inputs.oneTimeFee].some((value) => typeof value === 'boolean')) {
    return errorResult();
  }
  const amount = toNumber(inputs.amount, NaN);
  const term = toNumber(inputs.term, NaN);
  const termUnit = toStr(inputs.termUnit, 'years');
  const rate = toNumber(inputs.rate, NaN);
  const type = toStr(inputs.type, 'annuity');
  const extraPayment = toNumber(inputs.extraPayment ?? 0, NaN);
  const oneTimeFee = toNumber(inputs.oneTimeFee ?? 0, NaN);

  const months = termUnit === 'months' ? term : term * 12;
  const r = rate / 100 / 12;

  let monthly = 0;
  let total = 0;
  let actualMonths = months;
  let lastActualPayment = 0;
  const schedule: string[][] = [];

  if (![amount, term, rate, extraPayment, oneTimeFee].every(Number.isFinite)
    || amount <= 0 || rate < 0 || extraPayment < 0 || oneTimeFee < 0) {
    return errorResult();
  }
  if (!['years', 'months'].includes(termUnit) || !['annuity', 'differentiated'].includes(type)) {
    return errorResult('Выберите допустимый режим расчёта.');
  }
  if (!Number.isInteger(months) || months < 1 || months > 1200) {
    return errorResult('Срок должен составлять от 1 до 1200 целых месяцев.');
  }

  if (type === 'annuity') {
    monthly = creditAnnuityPayment(amount, months, rate);
    total = 0;
    let remaining = amount;
    for (let i = 1; i <= months; i++) {
      const interest = remaining * r;
      const due = remaining + interest;
      const payment = i === months ? due : Math.min(monthly + extraPayment, due);
      const principal = payment - interest;
      if (principal <= 0 && remaining > 0) return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
      lastActualPayment = payment;
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
    // Дифференцированный
    const principalPart = amount / months;
    let remaining = amount;
    total = 0;
    for (let i = 0; i < months; i++) {
      const interest = remaining * r;
      const principal = i === months - 1 ? remaining : Math.min(principalPart + extraPayment, remaining);
      const payment = principal + interest;
      lastActualPayment = payment;
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
    // Для отображения возьмём первый платёж
    monthly = principalPart + amount * r;
  }

  const paymentTotal = total;
  const interestTotal = Math.max(0, paymentTotal - amount);
  total += oneTimeFee;
  const overpay = interestTotal + oneTimeFee;
  if (![total, overpay, monthly + extraPayment].every(Number.isFinite)) return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');

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

function errorResult(message = 'Введите положительные значения'): CalcResult {
  return {
    primary: { label: 'Ежемесячный платеж', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' }],
  };
}

// Nominal annual rate divided into 12 equal monthly periods. The equivalent
// discount-factor form avoids subtracting nearly equal powers near a zero rate
// and avoids overflow of (1 + r)^months for long, high-rate scenarios.
export function creditAnnuityPayment(amount: number, months: number, annualRate: number): number {
  const r = annualRate / 100 / 12;
  if (r === 0) return amount / months;
  return amount * r / -Math.expm1(-months * Math.log1p(r));
}
