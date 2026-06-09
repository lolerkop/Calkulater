import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const issues = [];

function readDist(relativePath) {
  const filePath = path.join(root, relativePath);
  if (!fs.existsSync(filePath)) {
    issues.push(`${relativePath}: missing from dist`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf8');
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

const headers = readDist('_headers');
if (headers) {
  const requiredHeaderLines = [
    'X-Content-Type-Options: nosniff',
    'Referrer-Policy: strict-origin-when-cross-origin',
    'X-Frame-Options: SAMEORIGIN',
    'Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()',
    '/opensearch.xml',
    'Content-Type: application/opensearchdescription+xml; charset=utf-8',
    '/site.webmanifest',
    'Content-Type: application/manifest+json; charset=utf-8',
  ];

  for (const line of requiredHeaderLines) {
    if (!headers.includes(line)) issues.push(`_headers: missing "${line}"`);
  }
}

const robots = readDist('robots.txt');
if (robots) {
  for (const line of ['User-agent: *', 'Allow: /']) {
    if (!robots.includes(line)) issues.push(`robots.txt: missing "${line}"`);
  }
  if (!/Sitemap:\s+https?:\/\/[^\s]+\/sitemap\.xml/.test(robots)) {
    issues.push('robots.txt: missing absolute sitemap.xml URL');
  }
}

const sitemap = readDist('sitemap.xml');
if (sitemap) {
  for (const fragment of ['<urlset', 'xmlns:xhtml=', 'hreflang="ru"', 'hreflang="en"', 'hreflang="x-default"', '/ru/', '/en/']) {
    if (!sitemap.includes(fragment)) issues.push(`sitemap.xml: missing "${fragment}"`);
  }
  if (sitemap.includes('/en/finance/vat-calculator/') || sitemap.includes('/en/finance/income-tax-calculator/')) {
    issues.push('sitemap.xml: contains EN URL for RU-only tax calculator');
  }
}

const redirects = readDist('_redirects');
if (redirects) {
  for (const fragment of ['/calculators/ /ru/calculators/ 301!', '/finance/* /ru/finance/:splat 301!']) {
    if (!redirects.includes(fragment)) issues.push(`_redirects: missing "${fragment}"`);
  }
}

const opensearch = readDist('opensearch.xml');
if (opensearch) {
  for (const fragment of ['<OpenSearchDescription', '<ShortName>', '<InputEncoding>UTF-8</InputEncoding>', 'type="text/html"', '?q={searchTerms}', '/favicon.svg']) {
    if (!opensearch.includes(fragment)) issues.push(`opensearch.xml: missing "${fragment}"`);
  }
}

const manifest = readDist('site.webmanifest');
if (manifest) {
  const parsed = JSON.parse(manifest);
  if (parsed.start_url !== '/') issues.push('site.webmanifest: start_url must be /');
  if (parsed.scope !== '/') issues.push('site.webmanifest: scope must be /');
  if (parsed.theme_color !== '#E63946') issues.push('site.webmanifest: unexpected theme_color');
}

if (issues.length > 0) {
  console.error('Hosting file issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('Verified dist hosting files: headers, robots, sitemap, OpenSearch, and manifest look valid.');
