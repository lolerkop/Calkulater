# Performance and infrastructure report

Date: 2026-06-15

## Measurement method

- Lighthouse 13.4.0, mobile form factor, 3 sequential runs per URL, median reported.
- Baseline: current public `https://www.calcuway.com` deployment.
- After: local production build served by `astro preview` through `npm run performance:ci`.
- Field p75 Core Web Vitals were unavailable. The PageSpeed Insights request returned HTTP 429 due API quota, and the project has no RUM dataset. Lighthouse TBT is reported as a lab responsiveness proxy; it is not labelled as INP.

## Before and after

| Page | Live TTFB median | Live bytes | Before perf | Before LCP | Before CLS | Before TBT | After perf | After LCP | After CLS | After TBT |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 0.187 s | 14.2 KiB HTML | 89 | 2820 ms | 0 | 0 ms | 100 | 1358 ms | 0 | 0 ms |
| `/ru/` | 0.194 s | 76.8 KiB HTML | 90 | 2935 ms | 0.001 | 0 ms | 99 | 1807 ms | 0 | 0 ms |
| RU currency converter | 0.213 s | 61.1 KiB HTML | 83 | 3334 ms | 0 | 28 ms | 100 | 1210 ms | 0 | 0 ms |
| RU income tax | 0.182 s | 64.0 KiB HTML | 84 | 3541 ms | 0.001 | 17 ms | 98 | 2108 ms | 0 | 0 ms |
| RU tile | 0.207 s | 64.7 KiB HTML | 88 | 3100 ms | 0.002 | 0 ms | 98 | 2106 ms | 0 | 0 ms |
| UK BMI | 0.200 s | 56.0 KiB HTML | 82 | 3562 ms | 0 | 27 ms | 99 | 1959 ms | 0 | 0 ms |

The after values are local lab results, so hosting TTFB is not directly comparable. The main code-level change removes the external render-blocking Google Fonts stylesheet; live verification should be repeated after deployment.

## Optimizations

- Self-hosted the existing Manrope and IBM Plex Mono Latin/Cyrillic WOFF2 subsets.
- Added locale-aware preload for the LCP text font.
- Removed Google Fonts from the critical path, CSP and privacy inventory.
- Kept calculator hydration at `client:load`; the calculator form was not lazy-loaded.
- Confirmed one calculator island per page, 80 ms recalculation debounce and no global result state. Sequential Lighthouse reports TBT at 0 ms after the change.
- Confirmed CLS at or below 0.1 during calculator load/input; measured Lighthouse median is 0 on the after build.
- Extended static budgets to JS, CSS, fonts, images and HTML.
- Added Lighthouse timing and per-page transfer budgets.

## Budgets and automation

Configuration: `performance-budget.json`.

- LCP: 2500 ms
- CLS: 0.1
- TBT lab proxy: 200 ms
- Script transfer: 170 KiB
- Stylesheet transfer: 80 KiB
- Image transfer: 250 KiB
- Total page transfer: 700 KiB

`npm run performance:ci` builds the site, starts the production preview, runs 3 mobile audits for 6 routes, writes JSON/HTML reports, calculates medians and fails on budget violations.

## Lighthouse outputs

- Live baseline summary: `reports/lighthouse/baseline/summary.md`
- Live baseline JSON/HTML: `reports/lighthouse/baseline/<page>-mobile-<1..3>.json|html`
- Local after summary: `reports/lighthouse/current/summary.md`
- Local after JSON/HTML: `reports/lighthouse/current/<page>-mobile-<1..3>.json|html`

Both directories contain 18 JSON audits, 18 HTML audits and machine-readable `summary.json`.

## Cache policy

Configured in `public/_headers`:

- HTML and non-versioned responses: `public, max-age=0, must-revalidate`.
- Hashed Astro assets under `/_astro/*`: `public, max-age=31536000, immutable`.
- Versioned fonts under `/fonts/*`: `public, max-age=31536000, immutable`.

Live check before deployment:

- HTML already returns `max-age=0, must-revalidate`.
- A hashed Astro JS asset returns only `max-age=14400, must-revalidate`; the new immutable policy is not live yet.

## Currency freshness

- Source date remains visible in calculator results and editorial blocks.
- Build runs `rates:update` and then `rates:verify`.
- Failed source fetch is allowed while saved data is at most 96 hours old and emits a warning.
- Data older than 96 hours or an invalid source date fails the build.
- Current verification used Bank of Russia data dated 2026-06-12; the 2026-06-15 fetch failed, but the saved data was still within the 96-hour gate.
- Unit tests cover recent, stale and invalid-date states.

## Remaining bottlenecks

- The public deployment must be refreshed before local fonts and immutable asset caching affect users.
- Cloudflare injects its browser insights script on the live site; it is outside this repository and contributed about 11 KiB transfer in baseline audits.
- Calculator pages still ship React plus the calculator island, about 81.7 KiB script transfer in local Lighthouse. TBT remains 0 ms, so replacing the framework is not justified by current evidence.
- First-party CSS remains render-blocking, but its measured transfer is only 8.9 KiB and all pages meet the LCP budget locally.
- INP p75 requires CrUX/PSI availability or consented real-user monitoring; no field claim is made from lab data.

## Verification

- `npm run check`: 43 test files, 357 tests, 92 generated pages.
- `npm run test:e2e`: 38 Playwright tests.
- `npm run performance:ci`: 18 Lighthouse runs, all budgets passed.
