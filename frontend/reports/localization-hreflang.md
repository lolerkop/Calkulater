# Localization, Parity and Hreflang

## Baseline

- Branch: `codex/localization-hreflang`.
- Baseline tests: 330 passed.
- Public calculator counts: RU 22, EN 19, UK 19.
- Full inventory: `reports/localization-parity.csv`.

## Parity Model

- 19 calculators are `full-parity` and use RU, EN, UK and x-default alternates.
- `deposit-calculator`, `income-tax-calculator` and `vat-calculator` are `ru-only`.
- RU-only calculators emit only their Russian hreflang self-reference. They do not emit EN, UK or x-default calculator alternates.
- The language switcher keeps RU active and shows unavailable EN/UA states with an explanation instead of linking to a homepage or 404.

## Ukrainian UI

- The user-facing short label changed from `UK` to `UA`.
- Technical values remain `hreflang="uk"`, `lang="uk"` and locale code `uk-UA`.
- Rewritten Ukrainian pages: BMI, percentage calculator, general currency converter, USD/EUR, EUR/MDL and USD/MDL.
- Ukrainian category descriptions were corrected for natural terminology and currency-source transparency.

## Currency Transparency

- EN and UK pages identify the Bank of Russia as the source.
- They state that rates are build-time official reference rates, not live commercial buy/sell rates.
- Stale or failed build-time updates are shown in the current page language.

## Human Review

- Financial, construction and fitness calculators outside the priority list still use compact localized templates and should receive native-editor review before expanding those locales.
- Russian tax and deposit calculators should remain locale-specific until equivalent local legal and financial models are implemented.

## QA

- Unit and integration tests: 339 passed across 38 files.
- Production build: 92 pages generated; 91 indexable routes verified in the sitemap.
- Full validation: links, SEO, hreflang reciprocity, sitemap, accessibility, production hygiene and performance budgets passed.
- Browser tests: 14 passed, including equivalent locale links, RU-only disabled states and no false-translation 404 targets.
- Manual browser review confirmed RU/EN/UA switcher links, RU-only self hreflang, the locale-specific notice, Ukrainian BMI copy and currency-source disclosure.
- The build-time currency refresh could not reach the source, so the last committed rates remain active and the localized failure warning is shown.
