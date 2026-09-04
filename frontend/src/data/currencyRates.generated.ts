// Generated from official central-bank reference rates.
// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.
// A currency falls back to Exchange Rate API only when its own source is unavailable.
export const generatedRatesToUSD = {
  USD: 1,
  EUR: 0.86095566,
  GBP: 0.74089539,
  CHF: 0.80843737,
  PLN: 3.72492467,
  RON: 4.52294447,
  TRY: 48.31485149,
  UAH: 44.7273,
  MDL: 17.2682,
} as const;

export const generatedRateProvenance = {
  EUR: { provider: 'ecb', date: '2026-09-03', fallback: false },
  GBP: { provider: 'ecb', date: '2026-09-03', fallback: false },
  CHF: { provider: 'ecb', date: '2026-09-03', fallback: false },
  PLN: { provider: 'ecb', date: '2026-09-03', fallback: false },
  RON: { provider: 'ecb', date: '2026-09-03', fallback: false },
  TRY: { provider: 'ecb', date: '2026-09-03', fallback: false },
  UAH: { provider: 'nbu', date: '2026-09-04', fallback: false },
  MDL: { provider: 'bnm', date: '2026-09-04', fallback: false },
} as const;

export const generatedRateSources = {
  bnm: { label: "National Bank of Moldova", url: 'https://www.bnm.md/en/official_exchange_rates', date: '2026-09-04', fallback: false },
  ecb: { label: "European Central Bank", url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', date: '2026-09-03', fallback: false },
  nbu: { label: "National Bank of Ukraine", url: 'https://bank.gov.ua/ua/markets/exchangerates', date: '2026-09-04', fallback: false },
} as const;

export const generatedRatesDate = '2026-09-03';
