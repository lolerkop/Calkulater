// Структурированные данные не должны расти вместе с каталогом там, где страница
// каталог не выводит.
//
// Google требует, чтобы разметка была достоверным представлением содержимого
// страницы, и прямо запрещает размечать то, чего читатель не видит. Главная
// показывает около десяти карточек, а объявляла ItemList и CollectionPage.hasPart
// на все сорок восемь калькуляторов — обе структуры росли вместе с каталогом на
// странице, которая его не выводит. Проверка удерживает восстановленное
// соответствие: сколько калькуляторов страница показывает, столько и объявляет.
//
// Живёт скриптом, а не тестом Vitest: проверять нужно готовую сборку, а Vitest
// в конвейере идёт до неё.

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { CATEGORY_ITEM_LIST_MAX } from './category-membership-scale.mjs';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const LOCALES = ['ru', 'en', 'uk', 'de'];

function jsonLdBlocks(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)]
    .map((match) => { try { return JSON.parse(match[1]); } catch { return null; } })
    .filter(Boolean);
}

// Карточка опознаётся по ссылке на калькулятор: признак не зависит от того,
// каким рендерером она отрисована.
function calculatorLinks(html, locale) {
  return new Set([...html.matchAll(new RegExp(`href="(/${locale}/[a-z0-9-]+/[a-z0-9-]+/)"`, 'g'))].map((m) => m[1]));
}

const issues = [];

for (const locale of LOCALES) {
  const pages = {
    'главная': join(DIST, locale, 'index.html'),
    'каталог': join(DIST, locale, 'calculators', 'index.html'),
  };
  for (const [label, file] of Object.entries(pages)) {
    if (!existsSync(file)) { issues.push(`${locale}/${label}: страница не собрана`); continue; }
    const html = readFileSync(file, 'utf8');
    const shown = calculatorLinks(html, locale).size;
    const blocks = jsonLdBlocks(html);

    const list = blocks.find((block) => block['@type'] === 'ItemList');
    if (!list) {
      issues.push(`${locale}/${label}: нет ItemList`);
    } else if (list.itemListElement.length > shown) {
      issues.push(
        `${locale}/${label}: ItemList объявляет ${list.itemListElement.length} калькуляторов, `
        + `а страница показывает ${shown} — разметка описывает то, чего читатель не видит`,
      );
    }

    const collection = blocks.find((block) => block['@type'] === 'CollectionPage');
    if (collection) {
      if (collection.hasPart) {
        issues.push(`${locale}/${label}: CollectionPage.hasPart перечисляет элементы второй раз — их уже перечисляет ItemList`);
      }
      if (!/#itemlist$/.test(collection.mainEntity?.['@id'] ?? '')) {
        issues.push(`${locale}/${label}: CollectionPage не ссылается на ItemList через mainEntity`);
      }
    }
  }
}

// Страницы разделов. У них та же болезнь и то же правило: объявлять БОЛЬШЕ
// показанного нельзя. Обратного правила нет — объявить меньше можно, и раздел
// этим пользуется: карточек он выводит все, а перечисляет верх подборки.
// Полный перечень повторял имя, адрес и описание каждого члена вторым
// экземпляром и рос вместе с сайтом — на подлинных текстах около 87 B gzip на
// члена в развёрнутой записи и около 25 в плоской.
let categoryPages = 0;

for (const locale of LOCALES) {
  const localeDir = join(DIST, locale);
  if (!existsSync(localeDir)) continue;
  for (const slug of readdirSync(localeDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name !== 'calculators')
    .map((entry) => entry.name)) {
    const file = join(localeDir, slug, 'index.html');
    if (!existsSync(file)) continue;
    const html = readFileSync(file, 'utf8');
    const blocks = jsonLdBlocks(html);
    const list = blocks.find((block) => block['@type'] === 'ItemList');
    // Раздел от статической страницы отличает наличие ItemList.
    if (!list) continue;
    categoryPages += 1;

    const shown = calculatorLinks(html, locale).size;
    const declared = list.itemListElement.length;
    if (declared > shown) {
      issues.push(
        `${locale}/${slug}: ItemList объявляет ${declared} калькуляторов, `
        + `а страница показывает ${shown} — разметка описывает то, чего читатель не видит`,
      );
    }
    if (declared > CATEGORY_ITEM_LIST_MAX) {
      issues.push(
        `${locale}/${slug}: ItemList перечисляет ${declared} калькуляторов при пределе `
        + `${CATEGORY_ITEM_LIST_MAX} — разметка снова растёт вместе с разделом`,
      );
    }
    if (list.numberOfItems !== declared) {
      issues.push(
        `${locale}/${slug}: ItemList заявляет numberOfItems ${list.numberOfItems} при `
        + `${declared} записях — счётчик разошёлся с самим списком`,
      );
    }
    // Раздел обязан вывести ВСЕХ своих членов настоящими ссылками. Ограничение
    // касается только перечня в разметке; ссылки урезать нельзя.
    if (shown === 0) {
      issues.push(`${locale}/${slug}: раздел объявляет ItemList, но не выводит ни одной ссылки на калькулятор`);
    }
  }
}
if (categoryPages === 0) {
  issues.push('разделы: не найдено ни одной страницы раздела — проверка стала бы пустой');
}

if (issues.length > 0) {
  console.error('Структурированные данные растут вместе с каталогом или разделом:\n');
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}
console.log(`Verified structured data scale: ${LOCALES.length} locales, ${categoryPages} category pages, home and sections declare only what they render.`);
