import type { CalcFunction, CalcResult } from '../types';
import { fmtMoney, toNumber, toStr } from '../format';

export const calcCompound: CalcFunction = (inputs) => {
  const principal = toNumber(inputs.principal);
  const rate = toNumber(inputs.rate);
  const years = Math.round(toNumber(inputs.years));
  const topUp = toNumber(inputs.topUp);
  const frequency = toStr(inputs.frequency, 'month');
  const compounding = toStr(inputs.compounding, 'month');

  if (years <= 0 || principal < 0 || rate < 0) {
    return {
      primary: { label: 'Итоговая сумма', value: '—' },
      secondary: [{ label: 'Проверьте данные', value: 'Введите положительные значения', accent: 'red' }],
    };
  }

  const months = years * 12;
  const compoundingInterval = compounding === 'year' ? 12 : compounding === 'quarter' ? 3 : 1;
  const periodsPerYear = 12 / compoundingInterval;
  const periodRate = rate / 100 / periodsPerYear;
  const topUpInterval = frequency === 'year' ? 12 : frequency === 'quarter' ? 3 : 1;

  let balance = principal;
  let invested = principal;

  for (let m = 1; m <= months; m++) {
    if (m % compoundingInterval === 0) balance *= 1 + periodRate;
    if (topUp > 0 && m % topUpInterval === 0) {
      balance += topUp;
      invested += topUp;
    }
  }

  const profit = balance - invested;

  const rows: string[][] = [];
  let yearBalance = principal;
  let yearInvested = principal;
  for (let y = 1; y <= years; y++) {
    for (let m = 1; m <= 12; m++) {
      const month = (y - 1) * 12 + m;
      if (month % compoundingInterval === 0) yearBalance *= 1 + periodRate;
      if (topUp > 0 && month % topUpInterval === 0) {
        yearBalance += topUp;
        yearInvested += topUp;
      }
    }
    rows.push([String(y), fmtMoney(yearInvested), fmtMoney(yearBalance), fmtMoney(yearBalance - yearInvested)]);
  }

  return {
    primary: { label: 'Итоговая сумма', value: fmtMoney(balance) },
    secondary: [
      { label: 'Внесённая сумма', value: fmtMoney(invested) },
      { label: 'Прибыль', value: fmtMoney(profit), accent: 'green' },
      { label: 'Срок', value: `${years} лет` },
    ],
    table: {
      title: 'Динамика по годам',
      columns: ['Год', 'Внесено', 'Капитал', 'Прибыль'],
      rows: rows.slice(0, 30),
    },
  };
};
