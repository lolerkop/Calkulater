#!/usr/bin/env node
// Ворота плотности бейджей каталога.
//
// Бейдж должен оставаться редким сигналом. До этой правки «Новый» стоял
// на 358 калькуляторах из 376 — то есть означал не новизну, а факт
// существования. Ворота ловят возврат к этому состоянию.
//
// Пределы выбраны по факту после исправления, с запасом:
// на момент установки было 10 «Новый» и 11 «Популярный» из 376 карточек,
// то есть 5.6 % каталога. Пределы 15 и 15 при доле не выше 8 % оставляют
// место для роста, но не позволяют пометить целую волну.

import { readFileSync, existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const DIST = path.resolve('dist');
const MAX_NEW = 15;
const MAX_POPULAR = 15;
const MAX_SHARE = 0.08;

// Подписи бейджей должны существовать во всех трёх локалях: пустая подпись
// означала бы пустой кружок на карточке.
const EXPECTED_LABELS = {
  ru: { new: 'Новый', popular: 'Популярный' },
  en: { new: 'New', popular: 'Popular' },
  uk: { new: 'Новий', popular: 'Популярний' },
};

const problems = [];
const report = (kind, detail) => problems.push(`${kind}: ${detail}`);

async function catalogPages(locale) {
  const root = path.join(DIST, locale, 'calculators');
  if (!existsSync(root)) return [];
  const files = [path.join(root, 'index.html')];
  const pageDir = path.join(root, 'page');
  if (existsSync(pageDir)) {
    for (const entry of await readdir(pageDir, { withFileTypes: true })) {
      if (!entry.isDirectory()) continue;
      const file = path.join(pageDir, entry.name, 'index.html');
      if (existsSync(file)) files.push(file);
    }
  }
  return files.filter((file) => existsSync(file));
}

const итог = {};

for (const locale of ['ru', 'en', 'uk']) {
  let cards = 0;
  let fresh = 0;
  let popular = 0;
  const labels = { new: new Set(), popular: new Set() };

  for (const file of await catalogPages(locale)) {
    const html = readFileSync(file, 'utf8');
    cards += (html.match(/data-catalog-card/g) ?? []).length;
    for (const m of html.matchAll(/<span class="catalog-badge-new">\s*([^<]*?)\s*<\/span>/g)) {
      fresh += 1;
      labels.new.add(m[1]);
    }
    for (const m of html.matchAll(/<span class="catalog-badge-popular">\s*([^<]*?)\s*<\/span>/g)) {
      popular += 1;
      labels.popular.add(m[1]);
    }

    // На одной карточке не должно быть двух бейджей сразу: «Популярный»
    // имеет приоритет, и разметка обязана это соблюдать.
    for (const card of html.split('data-catalog-card').slice(1)) {
      const head = card.slice(0, 400);
      if (head.includes('catalog-badge-new') && head.includes('catalog-badge-popular')) {
        report('два бейджа на одной карточке', `${locale} :: ${file.replace(`${DIST}/`, '')}`);
      }
    }
  }

  if (cards === 0) {
    report('не найдено карточек каталога', locale);
    continue;
  }

  итог[locale] = { cards, fresh, popular };

  if (fresh > MAX_NEW) report('слишком много бейджей «Новый»', `${locale} :: ${fresh} при пределе ${MAX_NEW}`);
  if (popular > MAX_POPULAR) report('слишком много бейджей «Популярный»', `${locale} :: ${popular} при пределе ${MAX_POPULAR}`);

  const share = (fresh + popular) / cards;
  if (share > MAX_SHARE) {
    report('доля карточек с бейджем слишком велика', `${locale} :: ${(share * 100).toFixed(1)} % при пределе ${(MAX_SHARE * 100).toFixed(0)} %`);
  }

  const expected = EXPECTED_LABELS[locale];
  for (const kind of ['new', 'popular']) {
    const seen = [...labels[kind]];
    if (seen.length === 0) continue;
    if (seen.length > 1) report('разные подписи одного бейджа', `${locale}/${kind} :: ${seen.join(' | ')}`);
    for (const label of seen) {
      if (!label) report('пустая подпись бейджа', `${locale}/${kind}`);
      else if (label !== expected[kind]) report('неизвестная подпись бейджа', `${locale}/${kind} :: «${label}» вместо «${expected[kind]}»`);
    }
  }
}

// Локализация обязана существовать во всех трёх локалях.
for (const locale of ['ru', 'en', 'uk']) {
  if (!итог[locale]) report('локаль каталога отсутствует', locale);
}

if (problems.length > 0) {
  console.error('Нарушения плотности бейджей:');
  for (const line of problems.slice(0, 30)) console.error(`- ${line}`);
  process.exit(1);
}

const строки = Object.entries(итог)
  .map(([locale, v]) => `${locale} ${v.fresh}/${v.popular} из ${v.cards}`)
  .join(', ');
console.log(
  `Плотность бейджей подтверждена: ${строки} — ` +
  `«Новый» не выше ${MAX_NEW}, «Популярный» не выше ${MAX_POPULAR}, ` +
  `доля с бейджем не выше ${MAX_SHARE * 100} %, двух бейджей на карточке нет, подписи локализованы.`,
);
