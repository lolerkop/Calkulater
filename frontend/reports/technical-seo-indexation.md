# Technical SEO report

## Baseline

- Branch: `codex/technical-seo-indexation`.
- Before Part 3: 315 unit tests passed; build generated 92 pages.
- Live check on June 14, 2026: both `calcuway.com` and `www.calcuway.com` returned `200`, so host duplication was confirmed.

## Canonical host

Canonical origin: `https://calcuway.com`.

The same origin is enforced for canonical, Open Graph URL, hreflang, sitemap, robots sitemap reference and OpenSearch. Production overrides to another origin fail the build configuration.

## Redirects

- `https://www.calcuway.com/*` -> `https://calcuway.com/*`, status `301`, path and query preserved.
- `/calculators/`, `/about/`, `/contacts/`, `/privacy/` -> matching `/ru/` routes.
- `/finance/*`, `/currency/*`, `/sport/*`, `/building/*`, `/date-time/*` -> matching `/ru/` routes.
- Host and legacy path normalization are combined into one redirect when both apply.
- The legacy `_redirects` fallback uses Cloudflare-compatible `301` syntax; the previous Netlify-only `301!` rules were rejected by Wrangler.

Cloudflare Pages root middleware owns these redirects because Pages `_redirects` rules are not applied to Function-served requests.

## URL inventory

The complete table is `reports/url-inventory.csv` with these columns:

`url | locale | page_type | indexable_expected | canonical_expected | hreflang_cluster | source_file`

It contains 117 records: 91 canonical indexable pages, 12 facet patterns, 9 legacy redirect patterns, one error route and four technical endpoints.

## Facets and currency pairs

- `/{locale}/calculators/?tag=*`, `?category=*`, `?sort=*`, `?q=*`: `X-Robots-Tag: noindex, follow`; canonical remains `/{locale}/calculators/`.
- Internal `?tag=new` linking was removed.
- `usd-to-eur`, `eur-to-mdl`, `usd-to-mdl`: indexable self-canonical pages. Their pair is fixed and title, H1, meta, explanatory copy and FAQ are pair-specific.

## Sitemap and robots

- Sitemap changed from 90 to 91 indexable URLs by adding the x-default root.
- Synthetic `lastmod` values were removed.
- Query URLs and non-canonical hosts are rejected by verification.
- `robots.txt` allows crawling and references `https://calcuway.com/sitemap.xml`.

## Hreflang map

- Home, catalog, service and category concepts: reciprocal RU, EN, UK and x-default root.
- Shared calculators: reciprocal localized URLs plus x-default root.
- RU-only `deposit-calculator`, `income-tax-calculator`, `vat-calculator`: RU plus x-default only.
- Currency pair clusters:
  - `usd-to-eur`: `/ru/currency/usd-to-eur/` -> `/en/currency/usd-to-eur/` -> `/uk/valyuty/usd-v-eur/` -> `/`.
  - `eur-to-mdl`: `/ru/currency/eur-to-mdl/` -> `/en/currency/eur-to-mdl/` -> `/uk/valyuty/eur-v-mdl/` -> `/`.
  - `usd-to-mdl`: `/ru/currency/usd-to-mdl/` -> `/en/currency/usd-to-mdl/` -> `/uk/valyuty/usd-v-mdl/` -> `/`.

The complete concept mapping is represented by `hreflang_cluster` in the inventory and checked for reciprocal return links against built HTML.

## Verification

- Full suite plus the final pair-page invariant: 325 unit tests passed; 92 HTML pages checked; 91 sitemap routes matched; canonical, hreflang, OG/Twitter and JSON-LD checks passed.
- `npm run test:e2e`: 12 Playwright tests passed.
- Cloudflare Pages local runtime: www and legacy paths return `301`; facet URLs return `X-Robots-Tag: noindex, follow`; clean catalogs do not return that header.
- Local curl: root `200`; income-tax canonical uses apex; RU-only alternates are RU and x-default; sitemap has 91 loc entries, zero query URLs and zero lastmod; robots points to the apex sitemap.
- Live curl before deployment: apex returned `200`; www still returned `200`.

## Remaining risk

The Cloudflare deployment must include the `functions` directory. Until this branch is deployed, the live `www` host remains a duplicate and live facet responses do not contain the new `X-Robots-Tag` header.

Search Console access was not available. Currency pair indexing was retained because the three published pairs now meet the unique-intent and unique-content criteria; post-deployment impressions and canonical selection should still be monitored.

## Changed files

- Host and edge behavior: `astro.config.mjs`, `src/config/site.ts`, `functions/_middleware.js`, `functions/[locale]/calculators.js`, `public/_redirects`.
- Metadata and routing: `src/components/Seo.astro`, `src/pages/index.astro`, `src/pages/[locale]/index.astro`.
- Sitemap and inventory: `src/pages/sitemap.xml.ts`, `src/data/urlInventory.ts`, `scripts/export-url-inventory.mts`, `reports/url-inventory.csv`.
- Verification: `scripts/verify-dist-seo.mjs`, `scripts/verify-dist-sitemap.mjs`, `scripts/verify-dist-hosting-files.mjs` and related SEO tests.
