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

import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname;
const DIST = join(ROOT, 'dist');
const LOCALES = ['ru', 'en', 'uk'];

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

if (issues.length > 0) {
  console.error('Структурированные данные растут вместе с каталогом:\n');
  for (const issue of issues) console.error(`  - ${issue}`);
  process.exit(1);
}
console.log(`Verified structured data scale: ${LOCALES.length} locales, home declares only what it renders.`);
