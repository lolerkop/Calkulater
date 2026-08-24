import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';
import {
  ratesToUSD,
  currencyByCode,
  lastUpdated,
  ratesNotice,
  ratesStatus,
  ratesUpdateAttemptedAt,
  ratesUpdateFailed,
  ratesAreStale,
  sourcesForCurrencies,
  type CurrencyCode,
} from '../../data/currencies';

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

  // Атрибуция строится по фактически участвующим валютам, а не по одному
  // источнику на весь сайт: у USD → UAH это Национальный банк Украины,
  // у EUR → MDL это ЕЦБ и Национальный банк Молдовы.
  const sources = sourcesForCurrencies([from, to]);

  const secondary: CalcResult['secondary'] = [
    { label: 'Курс', value: `1 ${from} = ${fmtNumber(rate, 4)} ${to}` },
    { label: 'Из', value: `${fmtNumber(amount, 2)} ${fromMeta.symbol} (${fromMeta.name})` },
    { label: 'В', value: `${toMeta.name}` },
    { label: 'Тип курса', value: 'официальный справочный' },
    { label: 'Дата курса', value: lastUpdated },
    { label: 'Статус обновления', value: ratesStatus, accent: ratesUpdateFailed || ratesAreStale ? 'red' : 'neutral' },
    { label: 'Последняя попытка обновления', value: ratesUpdateAttemptedAt },
  ];

  for (const source of sources) {
    secondary.push({
      label: 'Источник',
      value: source.name,
      href: source.url,
      accent: source.fallback ? 'red' : 'neutral',
    });
  }

  if (sources.some((source) => source.fallback)) {
    secondary.push({
      label: 'Резервный источник',
      value: 'Основной источник был недоступен, курс получен из резервного.',
      accent: 'red',
    });
  }

  return {
    primary: {
      label: 'Результат',
      value: `${fmtNumber(result, 2)} ${toMeta.symbol}`,
    },
    secondary,
    note: ratesNotice,
  };
};
