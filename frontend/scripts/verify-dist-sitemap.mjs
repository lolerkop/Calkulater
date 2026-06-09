import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const sitemapPath = path.join(root, 'sitemap.xml');

function walk(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function routeFromHtml(filePath) {
  const relativePath = path.relative(root, filePath).replaceAll(path.sep, '/');
  if (relativePath === '404.html') return null;
  if (relativePath === 'index.html') return null;
  if (relativePath.endsWith('/index.html')) {
    return `/${relativePath.slice(0, -'index.html'.length)}`;
  }
  if (relativePath.endsWith('.html')) {
    return `/${relativePath.slice(0, -'.html'.length)}/`;
  }
  return null;
}

if (!existsSync(root) || !statSync(root).isDirectory()) {
  console.error('dist directory is missing. Run astro build before verify-dist-sitemap.');
  process.exit(1);
}

if (!existsSync(sitemapPath)) {
  console.error('dist/sitemap.xml is missing. Check the custom i18n sitemap endpoint.');
  process.exit(1);
}

const htmlRoutes = walk(root)
  .filter((filePath) => filePath.endsWith('.html'))
  .map(routeFromHtml)
  .filter(Boolean)
  .sort();

const sitemap = readFileSync(sitemapPath, 'utf8');
const sitemapRoutes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .sort();

const missing = htmlRoutes.filter((route) => !sitemapRoutes.includes(route));
const extra = sitemapRoutes.filter((route) => !htmlRoutes.includes(route));

if (missing.length > 0 || extra.length > 0) {
  console.error('Sitemap coverage mismatch found in dist:');
  for (const route of missing) {
    console.error(`- missing from sitemap: ${route}`);
  }
  for (const route of extra) {
    console.error(`- extra in sitemap: ${route}`);
  }
  process.exit(1);
}

console.log(`Verified sitemap coverage: ${htmlRoutes.length} indexable HTML routes.`);
