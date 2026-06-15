# Content and On-Page SEO

## Baseline

- Branch: `codex/content-onpage-seo`.
- Tests before changes: 325 passed.
- Build before changes: 92 pages built.
- Weak-page inventory: `reports/content-quality.csv`.
- A separate public `?tag=new` route was not found. Its equivalent is the new-calculator selection in the catalog/category UI.

## Rewritten Pages

- `/ru/date-time/age-calculator/`
- `/ru/building/tile-calculator/`
- `/ru/currency/currency-converter/`
- `/ru/currency/usd-to-eur/`
- `/uk/fitness/kalkulyator-bmi/`
- `/ru/finance/income-tax-calculator/`
- `/ru/finance/vat-calculator/`
- Calculator pages using generated fallback content now use their own description, formula, example, instructions and FAQ instead of universal generated copy.
- Category pages now show natural links to popular, new and related-category calculators instead of keyword chips.

## Removed Boilerplate

- Removed rendered variants of “поговорить с банком, тренером, подрядчиком”.
- Removed rendered universal lists combining commissions, taxes, material properties and health conditions.
- Removed category keyword tails assembled from calculator keywords.
- FAQ schema is emitted only when the same FAQ is visible on the page.

## Source Blocks

- Currency: Bank of Russia reference-rate database, rate date, non-live warning and stale-data warning.
- NDFL: Federal Tax Service progressive rates 13/15/18/20/22%, applicable tax period and limitations.
- VAT: Federal Tax Service source for the 22% standard rate from 2026, historical 20% and special-rate limitations.
- BMI: WHO formula context and limitations for adult BMI interpretation.
- Building: geometry method plus a requirement to verify pack coverage and consumption on the manufacturer label.
- Every calculator page displays method, source, review date and a page/category-specific limitation.

## Editor Review

- NDFL and VAT should be rechecked by a tax editor after legislative changes.
- BMI wording should be rechecked by a medical editor when WHO guidance changes.
- Construction consumption and pack-size examples should be rechecked against manufacturer data when product assumptions change.
- Currency freshness depends on the build-time Bank of Russia rate update; the page does not claim live commercial rates.

## Title Meta H1

- No title, meta description or H1 was changed: the priority pages already had specific localized values.
- Existing uniqueness and locale checks remain in the automated SEO suite.

## QA

- Public examples remain linked to the Part 2 `publishedExamples` tests.
- Calculator template tests cover visible source/review blocks, field units and conditional FAQ schema.
- Category tests cover removal of keyword chips and presence of natural navigation links.
- Final tests: 330 passed across 37 files.
- Final build: 92 static pages generated.
- Link, locale isolation, SEO, sitemap, hosting, accessibility, production hygiene and performance checks passed.
- The build-time currency fetch failed, so the last committed Bank of Russia reference rates remain in use and the visible freshness warning is shown.
