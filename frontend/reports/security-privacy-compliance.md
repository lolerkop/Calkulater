# Security, privacy and compliance report

Date: 2026-06-15

## Data inventory

Machine-readable inventory: `reports/privacy-analytics-inventory.csv`.

- Calculator values: browser memory only; calculations run locally.
- Shared calculations: query parameters created only by the explicit Copy link action.
- Consent: `calcuway.analytics-consent.v1` in localStorage.
- Optional analytics: Google Analytics 4 and Yandex Metrica, only after consent and only with valid configured IDs.
- External requests: hosting/CDN request logs; GitHub only after a user opens support. Fonts are self-hosted.

## Privacy changes

- RU, EN and UK policies now cover operator identity, processed data, local calculations, shared URLs, storage, analytics consent, processors, logs, retention, rights, privacy contact, update date and policy changes.
- Shared-link risks and clean-URL/reset instructions are explicit.
- Contacts distinguish a private email from the public GitHub support channel. No private email or legal identity is invented when configuration is empty.
- Analytics scripts do not load before consent. The Yandex noscript pixel and Webvisor collection were removed.
- No consent banner is rendered when both analytics IDs are absent.

## Security headers

Configured in `public/_headers`:

- `Strict-Transport-Security: max-age=31536000`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: SAMEORIGIN`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `Content-Security-Policy-Report-Only` covering first-party assets, GA4 and Yandex Metrica.

HSTS intentionally omits `includeSubDomains` and `preload` until every subdomain is verified over HTTPS.

## CSP rollout

Status: Report-Only. Enforcing CSP is not enabled.

Current policy still needs `'unsafe-inline'` for Astro inline scripts, JSON-LD and inline styles. No CSP report collection endpoint exists, so violations must first be reviewed in browser/Cloudflare diagnostics. Move to enforcing only after that review and after replacing or hashing inline code where practical.

## External domains

Browser-loaded:

- `www.googletagmanager.com` after consent and valid GA4 configuration
- `*.google-analytics.com` after consent and valid GA4 configuration
- `mc.yandex.ru` after consent and valid Metrica configuration

User-clicked or editorial links:

- `github.com`
- `www.cbr.ru`
- `www.nalog.gov.ru`
- `www.who.int`

The Bank of Russia rate fetch is a build-time request, not a calculator-page browser request.

## High-stakes calculators

Income tax, VAT, BMI and currency pages were audited. They already expose calculation limitations, relevant source links and review/rate dates, so no content change was required in this stage.

## Live curl results

Checked on 2026-06-15:

- `https://calcuway.com/`: `200 OK`; existing `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` and `Permissions-Policy` present.
- `https://calcuway.com/ru/privacy/`: `200 OK`; same existing header set.
- `https://www.calcuway.com/`: `200 OK`; it currently does not redirect to the canonical non-www host.
- Live responses do not yet contain HSTS or CSP Report-Only. Deployment of this branch is required before those headers appear publicly.

## Verification

- `npm run check`: 39 test files, 342 tests, 92 built pages and all dist validators passed.
- Playwright: all 26 E2E tests passed, including 2 privacy-specific tests.
- Consent build with temporary GA4/Metrica IDs: banner rendered and no external analytics script tag existed before consent.
- Mixed-content resource scan: passed.

## Unresolved operator decisions

- Legal operator name: configure `PUBLIC_LEGAL_NAME`.
- Operator jurisdiction: configure `PUBLIC_JURISDICTION`.
- Private privacy mailbox: configure `PUBLIC_PRIVACY_EMAIL`.
- Hosting/CDN provider and log-retention period are not documented in the repository.
- A CSP reporting endpoint is not configured.
- HSTS subdomain coverage and preload eligibility are not verified.
