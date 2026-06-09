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

function normalizeInternalUrl(rawUrl) {
  if (
    !rawUrl ||
    rawUrl.startsWith('#') ||
    rawUrl.startsWith('data:') ||
    rawUrl.startsWith('mailto:') ||
    rawUrl.startsWith('tel:') ||
    rawUrl.startsWith('http://') ||
    rawUrl.startsWith('https://') ||
    rawUrl.startsWith('//')
  ) {
    return null;
  }

  if (!rawUrl.startsWith('/')) return null;
  return rawUrl.split('#')[0].split('?')[0];
}

function targetExists(urlPath) {
  if (urlPath === '/') return existsSync(path.join(root, 'index.html'));

  const cleanPath = urlPath.replace(/^\//, '');
  const absoluteTarget = path.join(root, cleanPath);
  const extension = path.extname(cleanPath);

  if (extension) return existsSync(absoluteTarget);

  return (
    existsSync(path.join(absoluteTarget, 'index.html')) ||
    existsSync(`${absoluteTarget}.html`)
  );
}

if (!existsSync(root) || !statSync(root).isDirectory()) {
  console.error('dist directory is missing. Run astro build before verify-dist-links.');
  process.exit(1);
}

const htmlFiles = walk(root).filter((filePath) => filePath.endsWith('.html'));
const missing = [];

for (const filePath of htmlFiles) {
  const html = readFileSync(filePath, 'utf8');
  const urls = [...html.matchAll(/\s(?:href|src)="([^"]+)"/g)]
    .map((match) => normalizeInternalUrl(match[1]))
    .filter(Boolean);

  for (const urlPath of urls) {
    if (!targetExists(urlPath)) {
      missing.push({
        file: path.relative(root, filePath).replaceAll(path.sep, '/'),
        url: urlPath,
      });
    }
  }
}

if (missing.length > 0) {
  console.error('Broken internal links found in dist:');
  for (const item of missing) {
    console.error(`- ${item.file} -> ${item.url}`);
  }
  process.exit(1);
}

console.log(`Verified ${htmlFiles.length} HTML files: no broken internal dist links.`);
