import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';
import { ratesToUSD, currencyByCode, lastUpdated, type CurrencyCode } from '../../data/currencies';

export function convertCurrency(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  const usd = amount / ratesToUSD[from];
  return usd * ratesToUSD[to];
}

export const calcCurrency: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount);
  const from = toStr(inputs.from, 'USD') as CurrencyCode;
  const to = toStr(inputs.to, 'EUR') as CurrencyCode;

  if (!ratesToUSD[from] || !ratesToUSD[to]) {
    return {
      primary: { label: 'Результат', value: '—' },
      secondary: [{ label: 'Ошибка', value: 'Неизвестная валюта', accent: 'red' }],
    };
  }

  const result = convertCurrency(amount, from, to);
  const rate = convertCurrency(1, from, to);

  const fromMeta = currencyByCode[from];
  const toMeta = currencyByCode[to];

  return {
    primary: {
      label: 'Результат',
      value: `${fmtNumber(result, 2)} ${toMeta.symbol}`,
    },
    secondary: [
      { label: 'Курс', value: `1 ${from} = ${fmtNumber(rate, 4)} ${to}` },
      { label: 'Из', value: `${fmtNumber(amount, 2)} ${fromMeta.symbol} (${fromMeta.name})` },
      { label: 'В', value: `${toMeta.name}` },
      { label: 'Дата обновления', value: lastUpdated },
    ],
    note: 'Курсы демонстрационные и могут отличаться от банковских.',
  };
};
