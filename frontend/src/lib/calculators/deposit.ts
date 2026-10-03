import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, fmtPct, toNumber, toStr } from '../format';

export const calcDeposit: CalcFunction = (inputs) => {
  if ([inputs.amount, inputs.months, inputs.rate, inputs.topUp].some((value) => typeof value === 'boolean')) {
    return errorResult();
  }
  const amount = toNumber(inputs.amount, NaN);
  const months = toNumber(inputs.months, NaN);
  const rate = toNumber(inputs.rate, NaN);
  const capitalization = toStr(inputs.capitalization, 'yes');
  const hasCap = capitalization === 'yes';
  const capPeriod = toStr(inputs.capPeriod, 'month');
  const topUp = toNumber(inputs.topUp ?? 0, NaN);
  const topUpTiming = toStr(inputs.topUpTiming, 'end');

  if (![amount, months, rate, topUp].every(Number.isFinite) || amount < 0 || rate < 0 || topUp < 0) {
    return errorResult();
  }
  if (!['yes', 'no'].includes(capitalization) || (hasCap && !['month', 'quarter', 'year'].includes(capPeriod))
    || !['beginning', 'end'].includes(topUpTiming)) {
    return errorResult('Выберите допустимый режим расчёта.');
  }
  if (!Number.isInteger(months) || months < 1 || months > 1200) {
    return errorResult('Срок должен составлять от 1 до 1200 целых месяцев.');
  }

  const monthlyRate = rate / 100 / 12;
  let balance = amount;
  let totalTopUps = 0;
  let interestAccrued = 0;

  // Период капитализации в месяцах
  const capInterval = !hasCap ? Infinity : capPeriod === 'year' ? 12 : capPeriod === 'quarter' ? 3 : 1;
  let interestPool = 0;
  const rows: string[][] = [];

  for (let m = 1; m <= months; m++) {
    // Пополнение в начале месяца
    if (topUp > 0 && topUpTiming === 'beginning') {
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
    if (topUp > 0 && topUpTiming === 'end') {
      balance += topUp;
      totalTopUps += topUp;
    }
    if (![balance, totalTopUps, interestAccrued, interestPool, balance + interestPool].every(Number.isFinite)) {
      return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
    }
    if (m <= 24 || m === months) {
      rows.push([String(m), fmtMoney(amount + totalTopUps), fmtMoney(balance + interestPool)]);
    }
  }

  // Если капитализации нет — все начисленные проценты прибавляются в конце
  const finalAmount = hasCap ? balance + interestPool : balance + interestAccrued;
  const profit = finalAmount - amount - totalTopUps;
  const periodsPerYear = capPeriod === 'year' ? 1 : capPeriod === 'quarter' ? 4 : 12;
  const effectiveRate = hasCap
    ? (Math.pow(1 + rate / 100 / periodsPerYear, periodsPerYear) - 1) * 100
    : rate;
  if (![finalAmount, profit, effectiveRate].every(Number.isFinite)) {
    return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
  }

  return {
    primary: { label: 'Итоговая сумма', value: fmtMoney(finalAmount) },
    secondary: [
      { label: 'Начисленные проценты', value: fmtMoney(profit), accent: 'green' },
      { label: 'Сумма пополнений', value: fmtMoney(totalTopUps) },
      { label: 'Срок', value: `${months} мес.` },
      { label: 'Эффективная годовая ставка', value: fmtPct(effectiveRate, 2) },
    ],
    table: {
      title: 'Динамика вклада',
      columns: ['Месяц', 'Внесено', 'Баланс'],
      rows,
      note: months > 24 ? 'Показаны первые 24 месяца и итоговый месяц.' : undefined,
    },
  };
};

function errorResult(message = 'Введите положительные значения'): CalcResult {
  return {
    primary: { label: 'Итоговая сумма', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' }],
  };
}
