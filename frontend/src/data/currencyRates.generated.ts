// Generated from official central-bank reference rates.
// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.
// A currency falls back to Exchange Rate API only when its own source is unavailable.
export const generatedRatesToUSD = {
  USD: 1,
  EUR: 0.88511241,
  GBP: 0.75564702,
  CHF: 0.83528058,
  PLN: 3.87103912,
  RON: 4.67604886,
  TRY: 49.0346079,
  UAH: 44.8333,
  MDL: 17.8007,
} as const;

export const generatedRateProvenance = {
  EUR: { provider: 'ecb', date: '2026-10-01', fallback: false },
  GBP: { provider: 'ecb', date: '2026-10-01', fallback: false },
  CHF: { provider: 'ecb', date: '2026-10-01', fallback: false },
  PLN: { provider: 'ecb', date: '2026-10-01', fallback: false },
  RON: { provider: 'ecb', date: '2026-10-01', fallback: false },
  TRY: { provider: 'ecb', date: '2026-10-01', fallback: false },
  UAH: { provider: 'nbu', date: '2026-10-02', fallback: false },
  MDL: { provider: 'bnm', date: '2026-10-02', fallback: false },
} as const;

export const generatedRateSources = {
  bnm: { label: "National Bank of Moldova", url: 'https://www.bnm.md/en/official_exchange_rates', date: '2026-10-02', fallback: false },
  ecb: { label: "European Central Bank", url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', date: '2026-10-01', fallback: false },
  nbu: { label: "National Bank of Ukraine", url: 'https://bank.gov.ua/ua/markets/exchangerates', date: '2026-10-02', fallback: false },
} as const;

export const generatedRatesDate = '2026-10-01';
