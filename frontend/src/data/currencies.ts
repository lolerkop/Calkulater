// Демонстрационные курсы валют. Базовая валюта — USD.
// Значения зафиксированы для целей MVP и не отражают реальные рыночные курсы.

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
export const ratesToUSD: Record<CurrencyCode, number> = {
  USD: 1,
  EUR: 0.92,
  MDL: 17.85,
  RON: 4.58,
  UAH: 41.20,
  PLN: 4.05,
  GBP: 0.79,
  CHF: 0.88,
  TRY: 34.10,
};

export const lastUpdated = '2026-02-01';

export const currencyByCode = Object.fromEntries(
  currencies.map((c) => [c.code, c]),
) as Record<CurrencyCode, { code: CurrencyCode; name: string; symbol: string }>;
