import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function attrValue(tag, attr) {
  const match = tag.match(new RegExp(`${attr}="([^"]*)"`, 'i'));
  return match?.[1] ?? '';
}

function textLength(value) {
  return value.replace(/\s+/g, ' ').trim().length;
}

function metaContent(html, key, value) {
  const metaTags = [...html.matchAll(/<meta\s+[^>]*>/gi)].map((match) => match[0]);
  const tag = metaTags.find((item) => attrValue(item, key) === value);
  return tag ? attrValue(tag, 'content') : '';
}

function isAbsoluteHttpUrl(value) {
  return value.startsWith('http://') || value.startsWith('https://');
}

function distAssetExistsFromUrl(value) {
  if (!isAbsoluteHttpUrl(value)) return false;
  const url = new URL(value);
  const relativePath = url.pathname.replace(/^\//, '');
  return Boolean(relativePath) && existsSync(path.join(root, relativePath));
}

function routeFromHtmlFile(filePath) {
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, '/');
  if (relativePath === 'index.html') return '/';
  if (relativePath === '404.html') return '/404.html';
  if (relativePath.endsWith('/index.html')) {
    return `/${relativePath.slice(0, -'index.html'.length)}`;
  }
  if (relativePath.endsWith('.html')) {
    return `/${relativePath.slice(0, -'.html'.length)}/`;
  }
  return null;
}

function jsonLdTypes(items) {
  return items
    .map((item) => item?.['@type'])
    .flat()
    .filter(Boolean);
}

function requireJsonLdTypes(file, types, expectedTypes, issues) {
  for (const expectedType of expectedTypes) {
    if (!types.includes(expectedType)) {
      issues.push(`${file}: missing ${expectedType} JSON-LD`);
    }
  }
}

if (!existsSync(root) || !statSync(root).isDirectory()) {
  console.error('dist directory is missing. Run astro build before verify-dist-seo.');
  process.exit(1);
}

const htmlFiles = walk(root).filter((filePath) => filePath.endsWith('.html'));
const issues = [];
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();
const localeCodes = {
  ru: 'ru-RU',
  en: 'en-US',
  es: 'es-ES',
  de: 'de-DE',
  fr: 'fr-FR',
  pt: 'pt-PT',
  it: 'it-IT',
  pl: 'pl-PL',
  nl: 'nl-NL',
  ro: 'ro-RO',
  id: 'id-ID',
  tr: 'tr-TR',
  vi: 'vi-VN',
  cs: 'cs-CZ',
  uk: 'uk-UA',
  sk: 'sk-SK',
  hu: 'hu-HU',
};

function localeFromRoute(route) {
  const firstSegment = route?.split('/').filter(Boolean)[0];
  return firstSegment && localeCodes[firstSegment] ? firstSegment : null;
}

function rememberUnique(map, value, file, label) {
  if (!value) return;
  const previousFile = map.get(value);
  if (previousFile) {
    issues.push(`${file}: duplicate ${label} also used by ${previousFile}`);
    return;
  }
  map.set(value, file);
}

for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, 'utf8');
  const file = path.relative(root, filePath).replaceAll(path.sep, '/');
  const expectedRoute = routeFromHtmlFile(filePath);

  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? '';
  const pageLocale = localeFromRoute(expectedRoute);
  const htmlLang = html.match(/<html\s+[^>]*lang="([^"]+)"/i)?.[1] ?? '';

  if (pageLocale && htmlLang !== pageLocale) {
    issues.push(`${file}: html lang "${htmlLang}" does not match route locale "${pageLocale}"`);
  }

  if (textLength(title) < 10) {
    issues.push(`${file}: missing or too short <title>`);
  }
  if (textLength(title) > 110) {
    issues.push(`${file}: too long <title>`);
  }
  rememberUnique(seenTitles, title.trim(), file, 'title');

  const description = metaContent(html, 'name', 'description');
  if (textLength(description) < 50) {
    issues.push(`${file}: missing or too short meta description`);
  }
  if (textLength(description) > 220) {
    issues.push(`${file}: too long meta description`);
  }
  rememberUnique(seenDescriptions, description.trim(), file, 'meta description');

  const robots = metaContent(html, 'name', 'robots');
  if (!robots) {
    issues.push(`${file}: missing robots meta`);
  }

  const isNoIndex = robots.includes('noindex');
  const canonicalTag = html.match(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i)?.[0];
  const canonical = canonicalTag ? attrValue(canonicalTag, 'href') : '';
  if (!isNoIndex && !canonical) {
    issues.push(`${file}: missing canonical link`);
  }
  if (canonical && !canonical.startsWith('http://') && !canonical.startsWith('https://')) {
    issues.push(`${file}: canonical is not absolute`);
  }
  if (!isNoIndex && canonical && expectedRoute && new URL(canonical).pathname !== expectedRoute) {
    issues.push(`${file}: canonical path does not match route`);
  }
  if (!isNoIndex) {
    rememberUnique(seenCanonicals, canonical, file, 'canonical');
  }

  const ogTitle = metaContent(html, 'property', 'og:title');
  const ogDescription = metaContent(html, 'property', 'og:description');
  const ogUrl = metaContent(html, 'property', 'og:url');
  const ogImage = metaContent(html, 'property', 'og:image');
  const twitterCard = metaContent(html, 'name', 'twitter:card');
  const twitterImage = metaContent(html, 'name', 'twitter:image');

  if (!ogTitle || !ogDescription || !ogUrl || !ogImage) {
    issues.push(`${file}: incomplete Open Graph metadata`);
  }
  if (ogUrl && !isAbsoluteHttpUrl(ogUrl)) {
    issues.push(`${file}: og:url is not absolute`);
  }
  if (!isNoIndex && ogUrl && expectedRoute && new URL(ogUrl).pathname !== expectedRoute) {
    issues.push(`${file}: og:url path does not match route`);
  }
  if (!isNoIndex && canonical && ogUrl && canonical !== ogUrl) {
    issues.push(`${file}: canonical and og:url differ`);
  }
  if (ogImage && !distAssetExistsFromUrl(ogImage)) {
    issues.push(`${file}: og:image asset is missing from dist`);
  }
  if (twitterCard !== 'summary_large_image') {
    issues.push(`${file}: unexpected or missing twitter:card`);
  }
  if (twitterImage && !distAssetExistsFromUrl(twitterImage)) {
    issues.push(`${file}: twitter:image asset is missing from dist`);
  }

  const h1Count = (html.match(/<h1[\s>]/gi) ?? []).length;
  if (h1Count !== 1) {
    issues.push(`${file}: expected exactly one h1, got ${h1Count}`);
  }

  const jsonLdScripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  const jsonLdItems = [];
  for (const [index, match] of jsonLdScripts.entries()) {
    try {
      jsonLdItems.push(JSON.parse(match[1]));
    } catch (error) {
      issues.push(`${file}: invalid JSON-LD script #${index + 1}: ${error.message}`);
    }
  }

  const types = jsonLdTypes(jsonLdItems);
  const expectedLocaleCode = pageLocale ? localeCodes[pageLocale] : null;
  if (expectedLocaleCode) {
    for (const [index, item] of jsonLdItems.entries()) {
      if (item?.inLanguage && item.inLanguage !== expectedLocaleCode) {
        issues.push(`${file}: JSON-LD #${index + 1} inLanguage "${item.inLanguage}" does not match "${expectedLocaleCode}"`);
      }
      if (pageLocale !== 'en' && item?.['@type'] === 'HowTo') {
        if (typeof item.name === 'string' && item.name.startsWith('How to use:')) {
          issues.push(`${file}: non-English HowTo name is still in English`);
        }
        for (const step of item.step ?? []) {
          if (typeof step?.name === 'string' && /^Step \d+/.test(step.name)) {
            issues.push(`${file}: non-English HowTo step is still in English`);
          }
        }
      }
      if (item?.['@type'] === 'WebSite') {
        const target = item.potentialAction?.target ?? '';
        if (typeof target === 'string' && !target.includes(`/${pageLocale}/calculators/?q=`)) {
          issues.push(`${file}: SearchAction target does not use locale catalog`);
        }
      }
    }
  }

  if (!isNoIndex && types.length === 0) {
    issues.push(`${file}: missing JSON-LD`);
  }
  if (html.includes('data-testid="calculator-island-wrap"')) {
    requireJsonLdTypes(
      file,
      types,
      ['WebPage', 'WebApplication', 'FAQPage', 'BreadcrumbList', 'HowTo', 'Article'],
      issues,
    );
  } else if (html.includes('data-testid="category-page"')) {
    requireJsonLdTypes(file, types, ['CollectionPage', 'ItemList', 'FAQPage', 'BreadcrumbList'], issues);
  } else if (file === 'ru/index.html' || file === 'en/index.html') {
    requireJsonLdTypes(file, types, ['WebSite', 'Organization', 'CollectionPage', 'ItemList'], issues);
  } else if (file === 'index.html') {
    requireJsonLdTypes(file, types, ['Organization', 'WebPage'], issues);
  } else if (html.includes('data-testid="breadcrumbs"')) {
    requireJsonLdTypes(file, types, ['BreadcrumbList'], issues);
  }
}

if (issues.length > 0) {
  console.error('SEO issues found in dist:');
  for (const issue of issues) {
    console.error(`- ${issue}`);
  }
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files: SEO metadata looks valid.`);
