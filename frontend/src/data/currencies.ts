import {
  generatedRatesDate,
  generatedRatesSource,
  generatedRatesToUSD,
} from './currencyRates.generated';

export type CurrencyCode =
  | 'USD'
  | 'EUR'
  | 'MDL'
  | 'RON'
  | 'UAH'
  | 'PLN'
  | 'GBP'
  | 'CHF'
  | 'TRY';

export const currencies: { code: CurrencyCode; name: string; symbol: string }[] = [
  { code: 'USD', name: 'Доллар США', symbol: '$' },
  { code: 'EUR', name: 'Евро', symbol: '€' },
  { code: 'MDL', name: 'Молдавский лей', symbol: 'L' },
  { code: 'RON', name: 'Румынский лей', symbol: 'lei' },
  { code: 'UAH', name: 'Гривна', symbol: '₴' },
  { code: 'PLN', name: 'Польский злотый', symbol: 'zł' },
  { code: 'GBP', name: 'Фунт стерлингов', symbol: '£' },
  { code: 'CHF', name: 'Швейцарский франк', symbol: 'CHF' },
  { code: 'TRY', name: 'Турецкая лира', symbol: '₺' },
];

// Курсы к USD: сколько единиц валюты дают за 1 USD
export const ratesToUSD: Record<CurrencyCode, number> = generatedRatesToUSD;

export const lastUpdated = generatedRatesDate;
export const ratesSource = generatedRatesSource;
export const ratesNotice =
  'Официальные справочные курсы Банка России на указанную дату. Банки и обменные пункты могут использовать другие курсы и комиссии.';

export const currencyByCode = Object.fromEntries(
  currencies.map((c) => [c.code, c]),
) as Record<CurrencyCode, { code: CurrencyCode; name: string; symbol: string }>;
