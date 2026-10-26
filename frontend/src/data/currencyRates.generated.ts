// Generated from official central-bank reference rates.
// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.
// A currency falls back to Exchange Rate API only when its own source is unavailable.
export const generatedRatesToUSD = {
  USD: 1,
  EUR: 0.89341553,
  GBP: 0.74803895,
  CHF: 0.82435451,
  PLN: 3.92611454,
  RON: 4.77905834,
  TRY: 49.73778254,
  UAH: 45.2021,
  MDL: 18.0638,
} as const;

export const generatedRateProvenance = {
  EUR: { provider: 'ecb', date: '2026-10-23', fallback: false },
  GBP: { provider: 'ecb', date: '2026-10-23', fallback: false },
  CHF: { provider: 'ecb', date: '2026-10-23', fallback: false },
  PLN: { provider: 'ecb', date: '2026-10-23', fallback: false },
  RON: { provider: 'ecb', date: '2026-10-23', fallback: false },
  TRY: { provider: 'ecb', date: '2026-10-23', fallback: false },
  UAH: { provider: 'nbu', date: '2026-10-26', fallback: false },
  MDL: { provider: 'bnm', date: '2026-10-26', fallback: false },
} as const;

export const generatedRateSources = {
  bnm: { label: "National Bank of Moldova", url: 'https://www.bnm.md/en/content/official-exchange-rates', date: '2026-10-26', fallback: false },
  ecb: { label: "European Central Bank", url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', date: '2026-10-23', fallback: false },
  nbu: { label: "National Bank of Ukraine", url: 'https://bank.gov.ua/ua/markets/exchangerates', date: '2026-10-26', fallback: false },
} as const;

export const generatedRatesDate = '2026-10-23';
