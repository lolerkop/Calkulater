import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

export const calcDeposit: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const months = Math.round(toNumber(inputs.months));
  const rate = toNumber(inputs.rate);
  const hasCap = toStr(inputs.capitalization, 'yes') === 'yes';
  const capPeriod = toStr(inputs.capPeriod, 'month');
  const topUp = toNumber(inputs.topUp);

  if (months <= 0 || amount < 0 || rate < 0) {
    return {
      primary: { label: 'Итоговая сумма', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные значения', accent: 'red' }],
    };
  }

  const monthlyRate = rate / 100 / 12;
  let balance = amount;
  let totalTopUps = 0;
  let interestAccrued = 0;

  // Период капитализации в месяцах
  const capInterval = !hasCap ? Infinity : capPeriod === 'year' ? 12 : capPeriod === 'quarter' ? 3 : 1;
  let interestPool = 0;

  for (let m = 1; m <= months; m++) {
    // Пополнение в начале месяца
    if (topUp > 0) {
      balance += topUp;
      totalTopUps += topUp;
    }
    // Начисление процентов за месяц
    const monthInterest = balance * monthlyRate;
    interestAccrued += monthInterest;
    interestPool += monthInterest;

    // Капитализация
    if (hasCap && m % capInterval === 0) {
      balance += interestPool;
      interestPool = 0;
    }
  }

  // Если капитализации нет — все начисленные проценты прибавляются в конце
  const finalAmount = hasCap ? balance + interestPool : balance + interestAccrued;
  const profit = finalAmount - amount - totalTopUps;

  return {
    primary: { label: 'Итоговая сумма', value: fmtMoney(finalAmount) },
    secondary: [
      { label: 'Начисленные проценты', value: fmtMoney(profit), accent: 'green' },
      { label: 'Сумма пополнений', value: fmtMoney(totalTopUps) },
      { label: 'Срок', value: `${months} мес.` },
    ],
  };
};
