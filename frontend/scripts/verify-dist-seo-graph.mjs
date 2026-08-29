// Контракт индексирования и графа обхода.
//
// verify-dist-seo.mjs уже проверяет метаданные ОДНОЙ страницы: title,
// description, canonical, Open Graph, один заголовок первого уровня, набор
// типов JSON-LD. Здесь проверяется то, что видно только на всём артефакте
// целиком и чего не видно на отдельной странице:
//
//   1. цели hreflang существуют и объявляют обратную ссылку;
//   2. карта сайта и индексируемость совпадают в обе стороны;
//   3. у каждой индексируемой страницы есть входящая внутренняя ссылка;
//   4. каждая индексируемая страница достижима обходом HTML-ссылок от
//      локализованной главной — карта сайта не единственный путь;
//   5. вопросы схемы FAQPage присутствуют в видимом тексте;
//   6. элементы ItemList ведут на существующие страницы, позиции по возрастанию;
//   7. на переведённых SEO-поверхностях нет утечки чужого языка;
//   8. в метаданных нет мусорных значений.
//
// Инварианты объективны: ни один из них не про «правильную длину» или
// «достаточное количество слов» — субъективные пороги здесь намеренно не живут.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const CANONICAL_HOST = 'https://calcuway.com';
const LOCALES = ['ru', 'en', 'uk', 'de'];

if (!existsSync(root) || !statSync(root).isDirectory()) {
  console.error('dist directory is missing. Run astro build before verify-dist-seo-graph.');
  process.exit(1);
}

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

function routeOf(filePath) {
  const rel = path.relative(root, filePath).replaceAll(path.sep, '/');
  if (rel === 'index.html') return '/';
  if (rel.endsWith('/index.html')) return `/${rel.slice(0, -'index.html'.length)}`;
  return null;
}

function stripTags(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

const files = walk(root).filter((f) => f.endsWith('index.html'));
const pages = new Map();

for (const file of files) {
  const route = routeOf(file);
  if (!route) continue;
  const html = readFileSync(file, 'utf8');

  const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1]?.trim() ?? '';
  const description = /<meta[^>]+name="description"[^>]+content="([^"]*)"/.exec(html)?.[1]?.trim() ?? '';
  const robots = /<meta[^>]+name="robots"[^>]+content="([^"]*)"/.exec(html)?.[1] ?? '';
  const canonical = /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/.exec(html)?.[1] ?? '';

  const alternates = [];
  for (const m of html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]+)"[^>]+href="([^"]+)"/g)) {
    alternates.push({ lang: m[1], href: m[2] });
  }

  const links = new Set();
  for (const m of html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)"/g)) {
    const href = m[1];
    if (href.startsWith('/_astro/') || /\.[a-z0-9]{2,5}$/i.test(href)) continue;
    links.add(href.endsWith('/') ? href : `${href}/`);
  }

  const jsonLd = [];
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
    jsonLd.push(m[1]);
  }

  const segments = route.split('/').filter(Boolean);
  pages.set(route, {
    route,
    locale: LOCALES.includes(segments[0]) ? segments[0] : '',
    title,
    description,
    robots,
    canonical,
    alternates,
    links,
    jsonLd,
    visible: stripTags(html),
  });
}

const issues = [];
const indexable = [...pages.values()].filter((p) => !p.robots.toLowerCase().includes('noindex'));
const routes = new Set(pages.keys());

// ---------- 1. hreflang: существование целей и взаимность ----------
// Корень «/» — объявленный x-default и страница выбора языка: локализованные
// страницы ссылаются на него как на x-default, а не как на языковую версию,
// поэтому обратная ссылка вида en -> / там не ожидается.
const xDefaultTargets = new Set();
for (const page of pages.values()) {
  for (const alt of page.alternates) {
    if (alt.lang === 'x-default' && alt.href.startsWith(CANONICAL_HOST)) {
      xDefaultTargets.add(alt.href.slice(CANONICAL_HOST.length));
    }
  }
}

const cluster = new Map();
for (const page of pages.values()) {
  const declared = new Set();
  for (const alt of page.alternates) {
    if (!alt.href.startsWith(CANONICAL_HOST)) {
      issues.push(`${page.route}: hreflang "${alt.lang}" ведёт за пределы канонического хоста — ${alt.href}`);
      continue;
    }
    const target = alt.href.slice(CANONICAL_HOST.length);
    if (!routes.has(target)) {
      issues.push(`${page.route}: hreflang "${alt.lang}" ведёт на несуществующий маршрут ${target}`);
      continue;
    }
    if (alt.lang !== 'x-default') declared.add(target);
  }
  cluster.set(page.route, declared);
}
for (const [route, targets] of cluster) {
  if (xDefaultTargets.has(route)) continue;
  for (const target of targets) {
    if (target === route) continue;
    if (!cluster.get(target)?.has(route)) {
      issues.push(`${route}: hreflang не взаимен — ${target} не ссылается обратно`);
    }
  }
}

// ---------- 2. карта сайта и индексируемость ----------
const sitemapPath = path.join(root, 'sitemap.xml');
const sitemap = readFileSync(sitemapPath, 'utf8');
const sitemapRoutes = new Set(
  [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(CANONICAL_HOST, '')),
);
for (const page of indexable) {
  if (!sitemapRoutes.has(page.route)) {
    issues.push(`${page.route}: индексируемая страница отсутствует в карте сайта`);
  }
}
for (const route of sitemapRoutes) {
  const page = pages.get(route);
  if (!page) {
    issues.push(`карта сайта: ${route} отсутствует в собранном артефакте`);
    continue;
  }
  if (page.robots.toLowerCase().includes('noindex')) {
    issues.push(`карта сайта: ${route} помечена noindex`);
  }
  if (/\/page\/1\/$/.test(route)) {
    issues.push(`карта сайта: ${route} — псевдоним первой страницы`);
  }
}

// ---------- 3. сироты ----------
const incoming = new Map();
for (const page of pages.values()) {
  for (const target of page.links) {
    if (!routes.has(target) || target === page.route) continue;
    incoming.set(target, (incoming.get(target) ?? 0) + 1);
  }
}
for (const page of indexable) {
  // Корень домена сканеры запрашивают всегда, входящая ссылка ему не нужна.
  if (page.route === '/') continue;
  if (!incoming.get(page.route)) {
    issues.push(`${page.route}: индексируемая страница без единой входящей внутренней ссылки`);
  }
}

// ---------- 4. достижимость обходом HTML ----------
const starts = ['/', ...LOCALES.map((l) => `/${l}/`)].filter((r) => routes.has(r));
const seen = new Set(starts);
const queue = [...starts];
while (queue.length) {
  const node = queue.shift();
  for (const target of pages.get(node)?.links ?? []) {
    if (routes.has(target) && !seen.has(target)) {
      seen.add(target);
      queue.push(target);
    }
  }
}
for (const page of indexable) {
  if (!seen.has(page.route)) {
    issues.push(`${page.route}: индексируемая страница недостижима обходом HTML-ссылок`);
  }
}

// ---------- 5-6. структурированные данные ----------
for (const page of pages.values()) {
  for (const raw of page.jsonLd) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch (error) {
      issues.push(`${page.route}: JSON-LD не разбирается — ${error.message}`);
      continue;
    }
    for (const node of Array.isArray(parsed) ? parsed : [parsed]) {
      if (JSON.stringify(node).includes('pages.dev')) {
        issues.push(`${page.route}: адрес pages.dev в структурированных данных`);
      }
      if (node['@type'] === 'FAQPage') {
        for (const entry of node.mainEntity ?? []) {
          const question = (entry.name ?? '').trim();
          if (!question) {
            issues.push(`${page.route}: FAQPage содержит пустой вопрос`);
            continue;
          }
          if (!page.visible.includes(question)) {
            issues.push(`${page.route}: вопрос FAQPage отсутствует в видимом тексте — «${question.slice(0, 60)}»`);
          }
          if (!(entry.acceptedAnswer?.text ?? '').trim()) {
            issues.push(`${page.route}: FAQPage содержит пустой ответ на «${question.slice(0, 40)}»`);
          }
        }
      }
      if (node['@type'] === 'ItemList') {
        const elements = node.itemListElement ?? [];
        const positions = elements.map((e) => e.position);
        if (positions.some((p, i) => i > 0 && p <= positions[i - 1])) {
          issues.push(`${page.route}: позиции ItemList не возрастают`);
        }
        for (const element of elements) {
          const url = element.url ?? element.item?.['@id'] ?? element.item?.url;
          if (!url) continue;
          if (!url.startsWith(CANONICAL_HOST)) {
            issues.push(`${page.route}: элемент ItemList ведёт за пределы канонического хоста — ${url}`);
            continue;
          }
          if (!routes.has(url.slice(CANONICAL_HOST.length).split('#')[0])) {
            issues.push(`${page.route}: элемент ItemList ведёт на несуществующий маршрут ${url}`);
          }
        }
      }
    }
  }
}

// ---------- 7-8. язык и мусор в метаданных ----------
const CYRILLIC = /[Ѐ-ӿ]/;
const RUSSIAN_ONLY = /[ыъэё]/i;
const GARBAGE = /undefined|\[object Object\]|\bNaN\b|\{\{/;
for (const page of pages.values()) {
  const surfaces = [
    ['title', page.title],
    ['meta description', page.description],
  ];
  for (const [name, value] of surfaces) {
    if (GARBAGE.test(value)) {
      issues.push(`${page.route}: мусорное значение в ${name} — «${value.slice(0, 60)}»`);
    }
    if (page.locale === 'en' && CYRILLIC.test(value)) {
      issues.push(`${page.route}: кириллица в ${name} английской страницы — «${value.slice(0, 60)}»`);
    }
    if (page.locale === 'uk' && RUSSIAN_ONLY.test(value)) {
      issues.push(`${page.route}: русские буквы ыъэё в ${name} украинской страницы — «${value.slice(0, 60)}»`);
    }
    if (page.locale === 'de' && CYRILLIC.test(value)) {
      issues.push(`${page.route}: кириллица в ${name} немецкой страницы — «${value.slice(0, 60)}»`);
    }
  }
}

if (issues.length > 0) {
  console.error('Нарушения контракта индексирования и графа обхода:');
  for (const issue of issues.slice(0, 40)) console.error(`- ${issue}`);
  if (issues.length > 40) console.error(`… и ещё ${issues.length - 40}`);
  process.exit(1);
}

console.log(
  `Контракт индексирования подтверждён: ${pages.size} страниц, ${indexable.length} индексируемых, ` +
    `${sitemapRoutes.size} адресов карты сайта, все достижимы обходом HTML, hreflang взаимен, ` +
    'FAQPage соответствует видимому тексту.',
);
