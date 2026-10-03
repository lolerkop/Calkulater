import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, fmtNumber, pluralRu, toNumber, toStr } from '../format';

export const calcCompound: CalcFunction = (inputs) => {
  if ([inputs.principal, inputs.rate, inputs.years, inputs.topUp].some((value) => typeof value === 'boolean')) {
    return errorResult();
  }
  const principal = toNumber(inputs.principal, NaN);
  const rate = toNumber(inputs.rate, NaN);
  const years = toNumber(inputs.years, NaN);
  const topUp = toNumber(inputs.topUp ?? 0, NaN);
  const frequency = toStr(inputs.frequency, 'month');
  const compounding = toStr(inputs.compounding, 'month');

  if (![principal, rate, years, topUp].every(Number.isFinite) || principal < 0 || rate < 0 || topUp < 0) {
    return errorResult();
  }
  if (!['month', 'quarter', 'year'].includes(frequency) || !['month', 'quarter', 'year'].includes(compounding)) {
    return errorResult('Выберите допустимый режим расчёта.');
  }

  const months = years * 12;
  if (!Number.isInteger(months) || months < 1 || months > 12000) {
    return errorResult('Срок должен составлять от 1 до 12000 целых месяцев.');
  }
  const compoundingInterval = compounding === 'year' ? 12 : compounding === 'quarter' ? 3 : 1;
  const monthlyRate = rate / 100 / 12;
  const topUpInterval = frequency === 'year' ? 12 : frequency === 'quarter' ? 3 : 1;

  let balance = principal;
  let invested = principal;
  let accrued = 0;
  const rows: string[][] = [];

  for (let m = 1; m <= months; m++) {
    // Accrual and capitalization are different operations. A contribution at
    // the end of month 2 must not earn a full quarter/year of interest at the
    // next capitalization. Each month is an equal 1/12-year model period.
    accrued += balance * monthlyRate;
    if (m % compoundingInterval === 0) {
      balance += accrued;
      accrued = 0;
    }
    if (topUp > 0 && m % topUpInterval === 0) {
      balance += topUp;
      invested += topUp;
    }
    const totalBalance = balance + accrued;
    if (![balance, accrued, invested, totalBalance].every(Number.isFinite)) {
      return errorResult('Расчёт выходит за пределы числовой точности. Уменьшите сумму, ставку или срок.');
    }
    if ((m % 12 === 0 && m <= 30 * 12) || m === months) {
      const year = Number.isInteger(m / 12) ? String(m / 12) : fmtNumber(m / 12, 2);
      rows.push([year, fmtMoney(invested), fmtMoney(totalBalance), fmtMoney(totalBalance - invested)]);
    }
  }
  // Accrued interest in a final partial capitalization period is paid at the
  // chosen end of the projection, as in the deposit calculator.
  const finalAmount = balance + accrued;
  const profit = finalAmount - invested;

  return {
    primary: { label: 'Итоговая сумма', value: fmtMoney(finalAmount) },
    secondary: [
      { label: 'Внесённая сумма', value: fmtMoney(invested) },
      { label: 'Прибыль', value: fmtMoney(profit), accent: 'green' },
      { label: 'Срок', value: Number.isInteger(years) ? `${years} ${pluralRu(years, ['год', 'года', 'лет'])}` : `${months} мес.` },
    ],
    table: {
      title: 'Динамика по годам',
      columns: ['Год', 'Внесено', 'Капитал', 'Прибыль'],
      rows,
      note: years > 30 ? 'Показаны первые 30 лет и итоговый период.' : undefined,
    },
  };
};

function errorResult(message = 'Введите положительные значения'): CalcResult {
  return {
    primary: { label: 'Итоговая сумма', value: '—' },
    secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' }],
  };
}
