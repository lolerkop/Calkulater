// Проверка разделения клиентского рантайма на собранном артефакте.
//
// Тесты исходников доказывают намерение, а этот скрипт — результат: он читает
// готовый `dist` и убеждается, что страница одного калькулятора не тянет код
// расчёта другого. Именно это свойство было нарушено до Phase 3, и именно его
// проще всего вернуть случайно, добавив «удобный» общий импорт.
//
// Маркеры — фрагменты кода, а не переводимые фразы: строки перевода живут
// в общем `clientI18n` совершенно законно и ничего не говорят о том, где
// находится реализация.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const ASTRO = join(DIST, '_astro');

/** Уникальные для калькулятора фрагменты кода расчёта. */
const CODE_MARKERS = {
  'percent-calculator': 'Процент от числа',
  'paint-calculator': 'Литры краски',
  'savings-rate': 'Расходы превышают доход',
  'budget-50-30-20': 'Доход после налогов',
  commission: 'fromCommission',
  cagr: 'Среднегодовой рост',
  'week-number': 'Осталось дней до конца года',
  'time-duration': 'Переход через полночь',
  'calories-from-macros': 'Из белков',
  'room-volume': 'Объём помещения',
};

const importsOf = (name) => {
  const source = readFileSync(join(ASTRO, name), 'utf8');
  return new Set([
    ...[...source.matchAll(/from"\.\/([A-Za-z0-9_.[\]-]+\.js)"/g)].map((m) => m[1]),
    ...[...source.matchAll(/import"\.\/([A-Za-z0-9_.[\]-]+\.js)"/g)].map((m) => m[1]),
  ]);
};

const closure = (roots) => {
  const seen = new Set();
  const stack = [...roots];
  while (stack.length > 0) {
    const name = stack.pop();
    if (seen.has(name) || !existsSync(join(ASTRO, name))) continue;
    seen.add(name);
    stack.push(...importsOf(name));
  }
  return seen;
};

function calculatorPages() {
  const pages = [];
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === 'index.html') pages.push(full);
    }
  };
  walk(join(DIST, 'ru'));
  return pages;
}

if (!existsSync(ASTRO)) {
  console.error('Сборка отсутствует. Сначала выполните: npm run build');
  process.exit(1);
}

// Модули, входящие в замыкание КАЖДОЙ страницы калькулятора, — это общая
// инфраструктура: остров, clientI18n, рантайм Astro. Их содержимое ничего не
// говорит о разделении, а строки перевода внутри них законны. Всё остальное
// в замыкании страницы обязано принадлежать её собственному калькулятору.
//
// Именно этот шаг был пропущен в первой версии проверки: при совместном
// использовании Rollup выносит модуль в отдельный чанк с произвольным именем,
// и фильтр по имени `island.*` его не видел.

const pages = calculatorPages()
  .map((path) => {
    const html = readFileSync(path, 'utf8');
    const roots = [...new Set([...html.matchAll(/\/_astro\/([A-Za-z0-9_.[\]-]+\.js)/g)].map((m) => m[1]))];
    return { path, roots, modules: roots.length > 0 ? closure(roots) : new Set() };
  })
  .filter((page) => [...page.modules].some((name) => name.startsWith('island.')));

if (pages.length === 0) {
  console.error('Не найдено ни одной страницы с точкой входа калькулятора.');
  process.exit(1);
}

const shared = [...pages[0].modules].filter((name) => pages.every((page) => page.modules.has(name)));
const sharedSet = new Set(shared);

const violations = [];
for (const page of pages) {
  const owner = Object.keys(CODE_MARKERS).find((id) => page.path.includes(`/${id}/`));
  if (!owner) continue;
  for (const name of page.modules) {
    if (sharedSet.has(name)) continue;
    const source = readFileSync(join(ASTRO, name), 'utf8');
    for (const [id, marker] of Object.entries(CODE_MARKERS)) {
      if (id === owner) continue;
      if (source.includes(marker)) {
        violations.push(`${page.path.replace(DIST, '')}: модуль ${name} содержит реализацию ${id}`);
      }
    }
  }
}

const checked = pages.length;

if (violations.length > 0) {
  console.error('Разделение рантайма нарушено: страница тянет чужие реализации.\n');
  for (const line of violations) console.error(`  ${line}`);
  console.error('\nКалькулятор должен приносить расчёт своей точкой входа.');
  process.exit(1);
}

console.log(
  `Разделение рантайма подтверждено: ${checked} страниц калькуляторов, `
  + `общих модулей ${shared.length}, чужих реализаций 0.`,
);
