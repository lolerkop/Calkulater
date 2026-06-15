# Mobile UX и accessibility

## Baseline

- Ветка: `codex/mobile-ux-accessibility`.
- До изменений: 339 тестов и 92 страницы проходили.
- На 320 px форма НДФЛ начиналась на 1126 px, первый input — на 1308 px.
- На 390 px до формы в первом экране находились длинное описание, locale notice и meta cards.

## Исправления

- Hero сокращён до breadcrumbs, H1 и короткого описания.
- Форма и результат перенесены перед SEO-текстом, meta cards и anchor navigation.
- Служебный и SEO-контент сохранён ниже calculator block.
- Numeric inputs используют `inputmode="decimal"`, helper/error связаны через `aria-describedby`.
- Ошибки полей получили `role="alert"`; общий result container — `aria-live="polite"`.
- Excluded dates заменены на native date picker, кнопку добавления и удаляемые chips; старые query-параметры поддерживаются.
- Checkbox, anchor links, breadcrumbs и footer links приведены к minimum target 24 px; основные mobile controls — 44 px.
- Focus indicator усилен непрозрачной контрастной обводкой.
- Desktop/mobile navigation остаются двумя layout-вариантами, но скрытый вариант имеет `display: none` и не попадает в accessibility tree или tab order.

## Mobile результат

- 320 px: форма начинается на 418 px, первый input заканчивается на 650 px.
- 390 px: форма начинается на 392 px, первый input заканчивается на 596 px.
- На всех семи приоритетных calculator pages первый control виден в viewport 320x740; худший случай — tile calculator, нижняя граница 728 px.
- Горизонтального overflow на приоритетных страницах нет.

## Проверки

- Unit/integration: 339 passed, 38 files.
- Production build: 92 pages.
- Playwright: 24 passed.
- Viewports: 320x740, 375x812, 390x844, 414x896.
- Проверены skip link, logical tab order, отсутствие keyboard trap, keyboard FAQ, responsive navigation, target sizes, ключевой contrast baseline, aria-live, aria-describedby и excluded-date chips.
- Build accessibility validator проверяет, что форма идёт раньше metadata и result container имеет `aria-live="polite"`.
- На этапе 6 Axe ещё не был подключён. В финальном QA добавлен `@axe-core/playwright`: пять приоритетных страниц проходят WCAG A/AA без нарушений; отдельно проверяются focus indicator и label/input association.

## Оставшиеся риски

- Нужна ручная проверка NVDA/VoiceOver для качества и краткости live announcements.
- Автотест contrast покрывает основные calculator controls и тексты, но не каждую комбинацию браузерного high-contrast режима.
- Поведение native date picker зависит от ОС и браузера; текстовый fallback остаётся ответственностью браузера.

## Снимки

- `reports/mobile-before-320.png`
- `reports/mobile-after-320.png`
- `reports/mobile-before-390.png`
- `reports/mobile-after-390.png`
