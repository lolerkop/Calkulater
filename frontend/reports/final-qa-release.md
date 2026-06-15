# Финальный отчёт Calcuway

Дата: 2026-06-15  
Ветка: `codex/final-qa-release`

## Изменённые файлы

- UI и страницы: `src/components`, `src/pages`, `src/styles/global.css`.
- Расчёты и данные: `src/lib`, `src/data`.
- SEO, edge и hosting: `astro.config.mjs`, `functions`, `public/_headers`, `public/_redirects`.
- QA: `tests`, `e2e`, `scripts/verify-*`, `playwright.config.ts`, `performance-budget.json`.
- CI: `.github/workflows/quality.yml`.
- Отчёты: `reports/*.md`, inventories, QA matrix и Lighthouse JSON/HTML.

## Закрытые проблемы по частям

- Часть 1: контакты и trust-layer готовы; slug leakage, неверные field counters и конфликт auto-calc устранены; sensitive Copy link предупреждает пользователя.
- Часть 2: published examples сведены в реестр и покрыты тестами; исправлены плитка, НДС, НДФЛ, pair pages, localized number parsing и inline validation.
- Часть 3: canonical host — `https://calcuway.com`; edge redirect, facets noindex, честные hreflang-кластеры, sitemap, robots, OG/Twitter и JSON-LD проверяются автоматически.
- Часть 4: приоритетный и fallback-контент переписан; формулы, релевантные FAQ, source/review blocks и quality inventory добавлены.
- Часть 5: parity inventory готов; RU-only страницы не получают ложные переводы; переключатели не ведут на 404; UI использует `UA`, технический locale остаётся `uk`.
- Часть 6: форма поднята в mobile layout; inputmode, helper/error, aria-live, keyboard flow, touch targets, focus и contrast проверены. Axe WCAG A/AA проходит.
- Часть 7: privacy/contact flow, consent, inventory, Report-Only CSP, security headers, mixed-content scan, share-link privacy и high-stakes disclaimers готовы.
- Часть 8: baseline сохранён; локальные шрифты и cache policy внедрены; performance budgets и freshness gate работают.
- Часть 9: QA matrix, parser tests, final smoke, axe, release gates, GitHub CI, privacy-safe event taxonomy и rollback plan добавлены.

## QA matrix

`reports/qa-matrix.csv` содержит все 18 обязательных маршрутов. `scripts/verify-release-gates.mjs` проверяет состав матрицы, built routes, H1, canonical, title, description, launch placeholders, non-finite values, security headers и ключевые performance budgets.

## Тесты

- Unit/integration: `357/357`, 43 файла.
- Published examples: `83/83`.
- E2E: `38/38`.
- Build: 92 страницы; 91 indexable URL в sitemap.
- Lighthouse: 18/18 прогонов; все бюджеты пройдены.
- Отдельного lint-скрипта нет; TypeScript/Astro build и статические validators входят в `npm run check`.

## SEO

- Все 92 HTML-файла имеют один H1, title, description и согласованный canonical.
- Sitemap не содержит query URL и соответствует 91 indexable route.
- Hreflang targets существуют и имеют reciprocal return links.
- Facet/search query pages получают noindex на Cloudflare middleware; canonical остаётся чистым.

## Accessibility

- Axe: `/ru/`, contacts, privacy, НДФЛ и украинский BMI проходят WCAG A/AA.
- Проверены keyboard navigation, skip link, отсутствие trap, visible focus, aria-live, aria-describedby и label/input association.
- Исправлены некорректный `aria-expanded` у поиска и контраст accent/secondary labels.

## Performance

| Route | Performance | LCP | CLS | TBT |
|---|---:|---:|---:|---:|
| `/` | 100 | 1358 ms | 0 | 0 ms |
| `/ru/` | 99 | 1807 ms | 0 | 0 ms |
| Currency | 100 | 1210 ms | 0 | 0 ms |
| NDFL | 98 | 2108 ms | 0 | 0 ms |
| Tile | 98 | 2106 ms | 0 | 0 ms |
| UK BMI | 99 | 1959 ms | 0 | 0 ms |

Полные результаты: `reports/lighthouse/current/`. Field INP недоступен без CrUX/RUM; TBT используется только как lab proxy.

## Monitoring

- Добавлена event taxonomy из 10 событий calculator/language/related/contact.
- События отправляются только после consent и только при настроенном GA4/Metrica ID.
- Разрешённые metadata: calculator ID, locale, target locale и target path. Введённые значения и результаты не отправляются.
- Search Console доступа нет; coverage, sitemap, CWV и URL Inspection нужно проверить после деплоя.
- Sentry/LogRocket не подключались: нет согласованного privacy/processors решения.

## Security/privacy

- CSP остаётся `Report-Only`; HSTS включён без `includeSubDomains/preload` до проверки всех поддоменов.
- Analytics отсутствует при пустых ID и не загружается до consent при настроенных ID.
- `npm audit --omit=dev` показывает 4 advisory chains в Astro 4/Vite/esbuild. Production — статическая выдача без Astro server islands и image endpoint; major-upgrade до Astro 6 требует отдельной совместимой миграции.

## Release gates

Релиз блокируется командами `npm run release:check` и GitHub Actions при падении unit/examples, build, sitemap/SEO/privacy/a11y validators, Playwright, Lighthouse budgets или final release gate.

## Риски перед релизом

- После Cloudflare deployment проверить apex/www redirect, security/cache headers и facet `X-Robots-Tag` на live URL.
- Настроить `PUBLIC_LEGAL_NAME`, `PUBLIC_JURISDICTION` и `PUBLIC_PRIVACY_EMAIL`, когда владелец предоставит юридические данные.
- Проверить Search Console после переобхода sitemap.
- Запланировать отдельное обновление Astro major после релиза.

## Rollback plan

1. В Cloudflare Pages выбрать предыдущий успешный deployment или сделать `git revert` релизного коммита в `main`.
2. Analytics отключается удалением `PUBLIC_GA_MEASUREMENT_ID` и `PUBLIC_YANDEX_METRICA_ID`; без ID consent UI и loaders не рендерятся.
3. CSP отключается независимо удалением `Content-Security-Policy-Report-Only` из `public/_headers`; остальные security headers сохраняются.
4. Sitemap/canonical восстанавливаются из предыдущего коммита для `src/config/site.ts`, `src/pages/sitemap.xml.ts`, `src/components/Seo.astro` и `functions/_middleware.js`.
5. Share-link codec откатывается независимо через `src/lib/shareLink.ts` и соответствующие imports в `CalculatorIsland.tsx`; старые query links дополнительно защищены E2E-тестом.
6. Fonts/cache, privacy/analytics, calculator logic и content/localization можно откатывать отдельными группами файлов, затем обязательно запускать `npm run release:check`.
