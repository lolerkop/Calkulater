import fs from 'node:fs';
import path from 'node:path';
import { distLocales } from './lib/locales.mjs';

const root = path.resolve('dist');
const issues = [];
const russianMarkers = [
  'Частые вопросы',
  'Доллар США',
  'Молдавский лей',
  'Румынский лей',
  'Польский злотый',
  'Фунт стерлингов',
  'Швейцарский франк',
  'Турецкая лира',
  'Калькуляторы',
  'официальный справочный',
  'Дата обновления',
  'Источник',
];

// Английские фразы тех запасных путей, которые у испанской страницы реально
// есть: контакты берут `contactDetails[locale] ?? contactDetails.en`, раздел —
// английский хвост тернарной цепочки, приватность и блок источников уходят в
// язык `en`, если испанского нет в выборе. Появление любой из них на испанской
// странице значит, что испанская запись потерялась.
//
// Строка подвала «Report a calculator error» и английский текст источника сюда
// сознательно не входят: это известный долг, общий с немецким, и сейчас он
// одинаково стоит на всех испанских и немецких страницах.
const englishFallbackMarkers = [
  'How to contact us',
  'Open a support request',
  'The support channel is public',
  'Choose a calculator in this section',
  'Start with a popular calculator or browse the full list',
  'Cookies and browser storage',
  'Entered values are processed by JavaScript in your browser',
  'Sources and review status',
  'Data or methodology source',
];

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function visibleText(html) {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style\b[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|mdash|ndash|laquo|raquo|quot|amp);/g, ' ')
    .replace(/\s+/g, ' ');
}

function jsonLdItems(html, file) {
  const items = [];
  for (const [index, match] of [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].entries()) {
    try {
      items.push(JSON.parse(match[1]));
    } catch (error) {
      issues.push(`${file}: invalid JSON-LD #${index + 1}: ${error.message}`);
    }
  }
  return items;
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

for (const locale of distLocales(root).filter((item) => item !== 'ru')) {
  const localeRoot = path.join(root, locale);
  for (const filePath of walk(localeRoot).filter((file) => file.endsWith('.html'))) {
    const file = path.relative(root, filePath).replaceAll(path.sep, '/');
    const html = fs.readFileSync(filePath, 'utf8');
    const text = visibleText(html);
    const json = JSON.stringify(jsonLdItems(html, file));

    if (locale === 'en') {
      const normalized = text.replaceAll('Русский', '').replaceAll('Українська', '');
      if (/[\u0400-\u04ff]/u.test(normalized)) {
        issues.push(`${file}: visible English content contains Cyrillic text`);
      }
      if (/[\u0400-\u04ff]/u.test(json)) {
        issues.push(`${file}: English JSON-LD contains Cyrillic text`);
      }
    }

    if (locale === 'de') {
      // Немецкая страница не содержит кириллицы вовсе: ни в видимом тексте, ни
      // в разметке для поисковых систем. Исключение — переключатель языка, где
      // родные названия локалей написаны своими алфавитами.
      const normalized = text.replaceAll('Русский', '').replaceAll('Українська', '');
      if (/[\u0400-\u04ff]/u.test(normalized)) {
        issues.push(`${file}: visible German content contains Cyrillic text`);
      }
      if (/[\u0400-\u04ff]/u.test(json)) {
        issues.push(`${file}: German JSON-LD contains Cyrillic text`);
      }
    }

    if (locale === 'es') {
      // Испанская страница, как и немецкая, кириллицы не содержит вовсе —
      // кроме родных названий локалей в переключателе языка.
      const normalized = text.replaceAll('Русский', '').replaceAll('Українська', '');
      if (/[\u0400-\u04ff]/u.test(normalized)) {
        issues.push(`${file}: visible Spanish content contains Cyrillic text`);
      }
      if (/[\u0400-\u04ff]/u.test(json)) {
        issues.push(`${file}: Spanish JSON-LD contains Cyrillic text`);
      }
      for (const marker of englishFallbackMarkers) {
        if (text.includes(marker)) issues.push(`${file}: Spanish content contains English fallback "${marker}"`);
        if (json.includes(marker)) issues.push(`${file}: Spanish JSON-LD contains English fallback "${marker}"`);
      }
    }

    if (locale === 'uk') {
      for (const marker of russianMarkers) {
        if (text.includes(marker)) issues.push(`${file}: Ukrainian content contains Russian marker "${marker}"`);
        if (json.includes(marker)) issues.push(`${file}: Ukrainian JSON-LD contains Russian marker "${marker}"`);
      }
    }

    if (/rates are demo|demo exchange rate|verify live rates/i.test(text)) {
      issues.push(`${file}: outdated demo/live currency copy found`);
    }
    if (/курси є демонстраційними|демонстраційні курси/i.test(text)) {
      issues.push(`${file}: outdated Ukrainian demo currency copy found`);
    }
  }
}

if (issues.length) {
  console.error('Locale isolation issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('Verified EN/UK/DE/ES HTML and JSON-LD: no forbidden language mixing.');
