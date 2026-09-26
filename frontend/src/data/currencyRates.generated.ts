// Generated from official central-bank reference rates.
// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.
// A currency falls back to Exchange Rate API only when its own source is unavailable.
export const generatedRatesToUSD = {
  USD: 1,
  EUR: 0.8769622,
  GBP: 0.75458213,
  CHF: 0.8282908,
  PLN: 3.83390336,
  RON: 4.62729106,
  TRY: 48.93229852,
  UAH: 44.8414,
  MDL: 17.678931,
} as const;

export const generatedRateProvenance = {
  EUR: { provider: 'ecb', date: '2026-09-25', fallback: false },
  GBP: { provider: 'ecb', date: '2026-09-25', fallback: false },
  CHF: { provider: 'ecb', date: '2026-09-25', fallback: false },
  PLN: { provider: 'ecb', date: '2026-09-25', fallback: false },
  RON: { provider: 'ecb', date: '2026-09-25', fallback: false },
  TRY: { provider: 'ecb', date: '2026-09-25', fallback: false },
  UAH: { provider: 'nbu', date: '2026-09-28', fallback: false },
  MDL: { provider: 'erapi', date: '2026-09-26', fallback: true },
} as const;

export const generatedRateSources = {
  ecb: { label: "European Central Bank", url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', date: '2026-09-25', fallback: false },
  erapi: { label: "Exchange Rate API", url: 'https://www.exchangerate-api.com', date: '2026-09-26', fallback: true },
  nbu: { label: "National Bank of Ukraine", url: 'https://bank.gov.ua/ua/markets/exchangerates', date: '2026-09-28', fallback: false },
} as const;

export const generatedRatesDate = '2026-09-25';
