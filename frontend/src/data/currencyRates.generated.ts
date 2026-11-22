// Generated from official central-bank reference rates.
// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.
// A currency falls back to Exchange Rate API only when its own source is unavailable.
export const generatedRatesToUSD = {
  USD: 1,
  EUR: 0.90991811,
  GBP: 0.76191993,
  CHF: 0.83921747,
  PLN: 4.0566879,
  RON: 4.86742493,
  TRY: 50.57215651,
  UAH: 45.0532,
  MDL: 18.307,
} as const;

export const generatedRateProvenance = {
  EUR: { provider: 'ecb', date: '2026-11-20', fallback: false },
  GBP: { provider: 'ecb', date: '2026-11-20', fallback: false },
  CHF: { provider: 'ecb', date: '2026-11-20', fallback: false },
  PLN: { provider: 'ecb', date: '2026-11-20', fallback: false },
  RON: { provider: 'ecb', date: '2026-11-20', fallback: false },
  TRY: { provider: 'ecb', date: '2026-11-20', fallback: false },
  UAH: { provider: 'nbu', date: '2026-11-22', fallback: false },
  MDL: { provider: 'bnm', date: '2026-11-22', fallback: false },
} as const;

export const generatedRateSources = {
  bnm: { label: "National Bank of Moldova", url: 'https://www.bnm.md/en/content/official-exchange-rates', date: '2026-11-22', fallback: false },
  ecb: { label: "European Central Bank", url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', date: '2026-11-20', fallback: false },
  nbu: { label: "National Bank of Ukraine", url: 'https://bank.gov.ua/ua/markets/exchangerates', date: '2026-11-22', fallback: false },
} as const;

export const generatedRatesDate = '2026-11-20';
