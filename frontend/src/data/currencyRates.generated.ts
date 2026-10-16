// Generated from official central-bank reference rates.
// ECB — EUR, GBP, CHF, PLN, RON, TRY; NBU — UAH; NBM — MDL.
// A currency falls back to Exchange Rate API only when its own source is unavailable.
export const generatedRatesToUSD = {
  USD: 1,
  EUR: 0.89221984,
  GBP: 0.75490721,
  CHF: 0.83021056,
  PLN: 3.89900071,
  RON: 4.75883298,
  TRY: 49.41764811,
  UAH: 44.8871,
  MDL: 17.9239,
} as const;

export const generatedRateProvenance = {
  EUR: { provider: 'ecb', date: '2026-10-15', fallback: false },
  GBP: { provider: 'ecb', date: '2026-10-15', fallback: false },
  CHF: { provider: 'ecb', date: '2026-10-15', fallback: false },
  PLN: { provider: 'ecb', date: '2026-10-15', fallback: false },
  RON: { provider: 'ecb', date: '2026-10-15', fallback: false },
  TRY: { provider: 'ecb', date: '2026-10-15', fallback: false },
  UAH: { provider: 'nbu', date: '2026-10-16', fallback: false },
  MDL: { provider: 'bnm', date: '2026-10-16', fallback: false },
} as const;

export const generatedRateSources = {
  bnm: { label: "National Bank of Moldova", url: 'https://www.bnm.md/en/content/official-exchange-rates', date: '2026-10-16', fallback: false },
  ecb: { label: "European Central Bank", url: 'https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html', date: '2026-10-15', fallback: false },
  nbu: { label: "National Bank of Ukraine", url: 'https://bank.gov.ua/ua/markets/exchangerates', date: '2026-10-16', fallback: false },
} as const;

export const generatedRatesDate = '2026-10-15';
