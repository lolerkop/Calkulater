import type { CalcFunction, CalcResult } from '../types';
import { fmtNumber, toNumber, toStr } from '../format';
import {
  ratesToUSD,
  currencyByCode,
  ratesNotice,
  ratesStatus,
  ratesUpdateAttemptedAt,
  ratesUpdateFailed,
  ratesAreStale,
  sourcesForCurrencies,
  type CurrencyCode,
} from '../../data/currencies';

export function convertCurrency(amount: number, from: CurrencyCode, to: CurrencyCode): number {
  if (from === to) return amount;
  return amount * (ratesToUSD[to] / ratesToUSD[from]);
}

export const calcCurrency: CalcFunction = (inputs) => {
  const amount = toNumber(inputs.amount, Number.NaN);
  const from = toStr(inputs.from, 'USD') as CurrencyCode;
  const to = toStr(inputs.to, 'EUR') as CurrencyCode;

  if (!Object.hasOwn(ratesToUSD, from) || !Object.hasOwn(ratesToUSD, to)) {
    return {
      primary: { label: 'Результат', value: '—' },
      secondary: [{ label: 'Ошибка', value: 'Неизвестная валюта', accent: 'red' }],
    };
  }

  if (typeof inputs.amount === 'boolean' || !Number.isFinite(amount) || amount < 0) {
    return currencyError('Сумма должна быть конечным неотрицательным числом.');
  }

  const result = convertCurrency(amount, from, to);
  if (!Number.isFinite(result) || (amount > 0 && result === 0)) {
    return currencyError('Результат выходит за пределы числовой точности.');
  }
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
    { label: 'Тип курса', value: 'сохранённый справочный курс' },
    { label: 'Статус обновления', value: ratesStatus, accent: ratesUpdateFailed || ratesAreStale ? 'red' : 'neutral' },
    { label: 'Последняя попытка обновления', value: ratesUpdateAttemptedAt },
  ];

  for (const source of sources) {
    secondary.push({
      label: 'Источник',
      value: `${source.name} — ${source.date}`,
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

function currencyError(message: string): CalcResult {
  return { primary: { label: 'Результат', value: '—' }, secondary: [{ label: 'Проверьте данные', value: message, accent: 'red' }] };
}
