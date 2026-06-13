import fs from 'node:fs';
import path from 'node:path';

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

for (const locale of ['en', 'uk']) {
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

console.log('Verified EN/UK HTML and JSON-LD: no forbidden language mixing.');
