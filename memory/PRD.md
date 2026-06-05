# Онлайн-калькуляторы — PRD

## Исходная задача
Создать MVP сайта онлайн-калькуляторов на русском языке.

- **Stack:** Astro + TypeScript + TailwindCSS + React Islands. Чистая SSG, без бэкенда и реальных API.
- **Категории:** Финансы, Валюты, Спорт, Стройка, Дата/Время (5).
- **Калькуляторы (фактически 18 после расширения валют):**
  Кредит, Депозит, Сложный процент, Ипотека (Финансы);
  Конвертер валют, USD↔EUR, USD↔MDL, EUR↔MDL (Валюты);
  ИМТ, Калории, Темп бега, 1ПМ (Спорт);
  Плитка, Обои, Краска, Ламинат (Стройка);
  Возраст, Рабочие дни (Дата/Время).
- **Архитектура:** ОДИН универсальный React-компонент `CalculatorIsland.tsx` для всех калькуляторов, конфигурация полей через `src/data/calculators.ts`, логика — отдельные модули в `src/lib/calculators/`.
- **SEO:** Open Graph, schema.org (WebSite/Organization/BreadcrumbList/FAQPage/WebApplication), sitemap, robots.txt, canonical, мета-теги.
- **Дизайн:** Минималистичный Swiss-style, красный акцент `#E63946`, главная — строгий функциональный тул.

## Реализовано

### Фаза 1 — Каркас и калькуляторы (готово ранее)
- Astro 4 + React Islands + Tailwind с дизайн-токенами.
- Универсальный `CalculatorIsland` (числовое, текстовое, селект, радио, дата, чекбокс).
- 18 калькуляторов с типизированной логикой в `src/lib/calculators/`.
- 5 страниц категорий, 18 страниц калькуляторов, главная с поиском.

### Фаза 2 — Unit-тесты (готово ранее, июнь 2026)
- 17 vitest файлов, **101 теста** прошли, покрывают логику всех калькуляторов и форматтеры.

### Фаза 3 — SEO + Analytics + Ads (текущая сессия, 05.06.2026)
- Создан `src/lib/seo.ts` — хелперы JSON-LD (`websiteJsonLd`, `organizationJsonLd`, `breadcrumbsJsonLd`, `faqJsonLd`, `webApplicationJsonLd`, `absUrl`).
- Рефакторинг всех страниц на использование хелперов (DRY).
- Удалена дублирующая JSON-LD разметка из `Breadcrumbs.astro`.
- Создан `Analytics.astro` — Google Analytics 4 + Яндекс.Метрика, рендерит скрипты ТОЛЬКО при наличии `PUBLIC_GA_ID` / `PUBLIC_YM_ID` в `.env`. Подключён в `Layout.astro`.
- Создан `AdPlaceholder.astro` (banner/square/inline), подключён в страницу калькулятора.
- Динамический `src/pages/robots.txt.ts` (URL из `SITE.url`).
- `env.d.ts` обновлён под типизацию `PUBLIC_*`.
- `.env.example` добавлен.
- Понижен `@astrojs/sitemap@3.2.0` (3.4 несовместим с Astro 4).
- Добавлены unit-тесты для `seo.ts`: всего **17 файлов / 101 тест**, все проходят.
- `yarn build` собирает 25 страниц + sitemap + robots.txt без ошибок.
- E2E через `testing_agent_v3_fork` (iter 1): фронт работает, аналитика при пустых ID не загружается (✅), все 18 калькуляторов рендерятся, SEO/JSON-LD валиден.

### Фаза 4 — Поделиться расчётом (05.06.2026)
- В `CalculatorIsland.tsx` добавлены хелперы: `defaultValueForField`, `parseUrlValue`, `serializeValue`, `readValuesFromUrl`, `buildQueryString`.
- На монтировании island значения восстанавливаются из `window.location.search` (только валидные для типа поля).
- При любом изменении формы URL обновляется через `history.replaceState` без перезагрузки.
- Поля со значением по умолчанию или пустые **не попадают** в query — URL остаётся чистым.
- Кнопка `data-testid="calc-share-btn"` копирует ссылку через `navigator.clipboard` + фолбэк `document.execCommand('copy')`. Показывает состояние «Ссылка скопирована» ~1.8s.
- Кнопка «Сбросить» теперь также очищает query-строку.
- Canonical (`Seo.astro` line 22) уже использовал `Astro.url.pathname` без `search` — query не попадает в SEO.
- E2E (`/app/test_reports/iteration_2.json`): 9/9 сценариев PASS — Credit, BMI, Tile + регрессия 3 других калькуляторов + canonical без query + mobile 375×812.
- 101 vitest тест по-прежнему проходит, lint чистый.

## Архитектура
```
/app/frontend/
├── astro.config.mjs (sitemap integration)
├── src/
│   ├── lib/
│   │   ├── seo.ts (NEW — JSON-LD хелперы)
│   │   ├── calculators/ (логика 18 калькуляторов)
│   │   ├── types.ts, runners.ts, format.ts
│   ├── data/ (calculators.ts, categories.ts)
│   ├── components/
│   │   ├── Analytics.astro (NEW)
│   │   ├── AdPlaceholder.astro (NEW)
│   │   ├── Layout.astro, Seo.astro, Header.astro, Footer.astro
│   │   ├── Breadcrumbs.astro, FaqList.astro, CalculatorCard.astro, CategoryCard.astro
│   │   └── islands/ (CalculatorIsland.tsx, SearchBox.tsx)
│   ├── pages/
│   │   ├── index.astro
│   │   ├── [category]/index.astro
│   │   ├── [category]/[calculator].astro
│   │   ├── robots.txt.ts (NEW)
│   │   ├── 404.astro
│   └── styles/global.css
├── tests/ (17 *.test.ts, 101 пройденных)
└── .env / .env.example
```

## ENV переменные
- `PUBLIC_SITE_URL` — базовый URL (используется в SEO/sitemap/robots).
- `PUBLIC_GA_ID` — Google Analytics 4 (пустой → счётчик не подключается).
- `PUBLIC_YM_ID` — Яндекс.Метрика (пустой → счётчик не подключается).

## Roadmap / Backlog (P2)
- Реальные курсы валют (через API при наличии бюджета на бэкенд).
- Тёмная тема (тогглер в шапке).
- История последних расчётов (localStorage).
- Расширение калькуляторов: налоги, лизинг, рефинансирование, инвестиции с инфляцией.
- PWA / offline-режим.
- A11y-аудит и keyboard navigation в селектах.
- Печать расчёта / экспорт в PDF.
- og:image превью со значениями расчёта (дин. генерация).

## Тестовые креды
Не требуются — сайт публичный, без авторизации.
