#!/usr/bin/env node
// Ворота локальной страницы «не найдено».
//
// Хостинг отдаёт БЛИЖАЙШИЙ `404.html` вверх по дереву, поэтому наличие файла
// `dist/<locale>/404.html` — единственное, что отделяет посетителя локали от
// русской страницы. Проверяется и наличие, и содержание: язык, единственный
// H1, ссылки внутрь своей локали, запрет индексации, отсутствие каноникала и
// hreflang и отсутствие адреса в карте сайта.

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const LOCALES = ['ru', 'en', 'uk', 'de'];
const problems = [];
const report = (kind, detail) => problems.push(`${kind}: ${detail}`);

const sitemap = readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');

for (const locale of LOCALES) {
  const file = path.join(DIST, locale, '404.html');
  if (!existsSync(file)) { report('нет страницы', `${locale}/404.html`); continue; }
  const html = readFileSync(file, 'utf8');

  const lang = (html.match(/<html lang="([^"]*)"/) || [, ''])[1];
  if (lang !== locale) report('чужой язык', `${locale}/404.html: lang=${lang || '—'}`);

  const headings = html.match(/<h1[^>]*>/g) ?? [];
  if (headings.length !== 1) report('заголовок', `${locale}/404.html: H1×${headings.length}`);

  if (!/content="[^"]*noindex/.test(html)) report('нет noindex', `${locale}/404.html`);
  if (/<link rel="canonical"/.test(html)) report('каноникал на 404', `${locale}/404.html`);
  if (/rel="alternate" hreflang/.test(html)) report('hreflang на 404', `${locale}/404.html`);

  // Обе кнопки ведут внутрь своей локали, а не в чужую.
  for (const [testid, expected] of [['page-404-all-link', `/${locale}/calculators/`], ['page-404-home-link', `/${locale}/`]]) {
    const anchor = new RegExp(`<a[^>]*href="([^"]*)"[^>]*data-testid="${testid}"`).exec(html)
      ?? new RegExp(`<a[^>]*data-testid="${testid}"[^>]*href="([^"]*)"`).exec(html);
    if (!anchor) report('нет кнопки', `${locale}/404.html: ${testid}`);
    else if (anchor[1] !== expected) report('кнопка ведёт не туда', `${locale}/404.html: ${testid} → ${anchor[1]}`);
  }

  if (sitemap.includes(`/${locale}/404`)) report('404 в карте сайта', locale);
  if (/pages\.dev/.test(html)) report('утечка pages.dev', `${locale}/404.html`);
  // Обычный маршрут `/<locale>/404/` существовать не должен: он отвечал бы 200.
  if (existsSync(path.join(DIST, locale, '404', 'index.html'))) {
    report('мягкое 404', `${locale}/404/ существует как обычная страница`);
  }
}

if (!existsSync(path.join(DIST, '404.html'))) report('нет корневой страницы', '404.html');

if (problems.length > 0) {
  console.error('Нарушения контракта страницы «не найдено»:');
  for (const line of problems) console.error(`- ${line}`);
  process.exit(1);
}
console.log(`Страницы «не найдено» подтверждены: ${LOCALES.join(', ')} и корневая — свой язык, один H1, ссылки внутрь локали, noindex, вне карты сайта.`);
