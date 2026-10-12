import fs from 'node:fs';
import path from 'node:path';
import { CONTENT_SECURITY_POLICY, INLINE_SCRIPT_HASHES } from '../lib/security/csp.generated.mjs';
import { buildContentSecurityPolicy } from '../lib/security/content-security-policy.mjs';
import { collectHtmlFiles, inlineScriptHashes, scriptElements, generatedCspModule } from './lib/csp-build.mjs';

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
    'Strict-Transport-Security: max-age=31536000',
    'Referrer-Policy: strict-origin-when-cross-origin',
    'X-Frame-Options: SAMEORIGIN',
    'Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()',
    "Content-Security-Policy: default-src 'self';",
    "object-src 'none'",
    "https://www.googletagmanager.com",
    "https://mc.yandex.ru",
    'Cache-Control: public, max-age=0, must-revalidate',
    '/_astro/*',
    'Cache-Control: public, max-age=31536000, immutable',
    '/fonts/*',
    '/opensearch.xml',
    'Content-Type: application/opensearchdescription+xml; charset=utf-8',
    '/site.webmanifest',
    'Content-Type: application/manifest+json; charset=utf-8',
  ];

  for (const line of requiredHeaderLines) {
    if (!headers.includes(line)) issues.push(`_headers: missing "${line}"`);
  }
  const policyLines = headers.split(/\r?\n/).filter((line) => /^\s*Content-Security-Policy:/i.test(line));
  if (policyLines.length !== 1) issues.push('_headers: expected one generated enforcing CSP');
  if (policyLines[0]?.trim() !== `Content-Security-Policy: ${CONTENT_SECURITY_POLICY}`) {
    issues.push('_headers: enforcing policy differs from the Pages Functions policy');
  }
  if (/^\s*Content-Security-Policy-Report-Only:/im.test(headers)) {
    issues.push('_headers: obsolete Report-Only policy must not accompany the enforced policy');
  }
  for (const line of headers.split(/\r?\n/)) {
    if (line.length > 2000) issues.push('_headers: line exceeds Cloudflare Pages 2,000-character limit');
  }
  if (/Strict-Transport-Security:.*(?:includeSubDomains|preload)/i.test(headers)) {
    issues.push('_headers: HSTS subdomain or preload rollout requires separate domain verification');
  }
  if (/fonts\.(?:googleapis|gstatic)\.com/.test(headers)) {
    issues.push('_headers: Google Fonts CSP domains remain after fonts were self-hosted');
  }
}

const observedHashes = new Set();
const scriptPolicy = CONTENT_SECURITY_POLICY.split('; ').find((directive) => directive.startsWith('script-src ')) || '';
if (/(?:'unsafe-inline'|'unsafe-eval'|\bdata:|\bblob:)/.test(scriptPolicy)) {
  issues.push('CSP: scripts must use build-generated hashes rather than unsafe inline/eval permissions');
}
for (const file of collectHtmlFiles(root)) {
  const html = fs.readFileSync(file, 'utf8');
  for (const hash of inlineScriptHashes(html)) observedHashes.add(hash);
  for (const script of scriptElements(html)) {
    const src = script.attributes.src;
    if (script.executable && src && !src.startsWith('/') && !/^https:\/\/(?:www\.googletagmanager\.com|mc\.yandex\.(?:ru|com)|yastatic\.net|static\.cloudflareinsights\.com)(?:\/|$)/.test(src)) {
      issues.push(`${path.relative(root, file)}: script URL is outside the enforced policy: ${src}`);
    }
  }
  if (/\son[a-z]+\s*=|\b(?:href|src)\s*=\s*["']?javascript:/i.test(html)) {
    issues.push(`${path.relative(root, file)}: inline event handler or javascript: URL is blocked by CSP`);
  }
}
const hashes = [...observedHashes].sort();
if (JSON.stringify(hashes) !== JSON.stringify(INLINE_SCRIPT_HASHES)) {
  issues.push('CSP: generated script hashes do not match the complete HTML artifact');
}
if (buildContentSecurityPolicy(hashes) !== CONTENT_SECURITY_POLICY) {
  issues.push('CSP: generated policy has drifted from its source definition');
}
if (fs.readFileSync(path.resolve('lib/security/csp.generated.mjs'), 'utf8') !== generatedCspModule(hashes)) {
  issues.push('CSP: generated module differs from the deterministic build output');
}

const robots = readDist('robots.txt');
if (robots) {
  for (const line of ['User-agent: *', 'Allow: /']) {
    if (!robots.includes(line)) issues.push(`robots.txt: missing "${line}"`);
  }
  if (!/Sitemap:\s+https?:\/\/[^\s]+\/sitemap\.xml/.test(robots)) {
    issues.push('robots.txt: missing absolute sitemap.xml URL');
  }
  if (!robots.includes('Sitemap: https://calcuway.com/sitemap.xml')) {
    issues.push('robots.txt: sitemap must use the canonical host');
  }
}

const adsTxt = readDist('ads.txt');
if (fs.existsSync(path.join(root, 'ads.txt')) && adsTxt !== 'google.com, pub-2945932737640221, DIRECT, f08c47fec0942fa0\n') {
  issues.push('ads.txt: expected exactly the authorized AdSense publisher entry');
}

const sitemap = readDist('sitemap.xml');
if (sitemap) {
  for (const fragment of ['<urlset', 'xmlns:xhtml=', 'hreflang="ru"', 'hreflang="en"', 'hreflang="x-default"', '/ru/', '/en/']) {
    if (!sitemap.includes(fragment)) issues.push(`sitemap.xml: missing "${fragment}"`);
  }
  if (sitemap.includes('/en/finance/vat-calculator/') || sitemap.includes('/en/finance/income-tax-calculator/')) {
    issues.push('sitemap.xml: contains EN URL for RU-only tax calculator');
  }
  if (sitemap.includes('www.calcuway.com') || /<(?:loc|xhtml:link)[^>]*(?:href=")?[^<>"]*\?/.test(sitemap) || sitemap.includes('<lastmod>')) {
    issues.push('sitemap.xml: contains non-canonical, query, or synthetic lastmod data');
  }
}

const redirects = readDist('_redirects');
if (redirects) {
  for (const fragment of ['/calculators/ /ru/calculators/ 301', '/finance/* /ru/finance/:splat 301']) {
    if (!redirects.includes(fragment)) issues.push(`_redirects: missing "${fragment}"`);
  }
  if (redirects.includes('301!')) issues.push('_redirects: contains Netlify-only 301! syntax');
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
  if (parsed.theme_color !== '#5F4EE8') issues.push('site.webmanifest: unexpected theme_color');
}

if (issues.length > 0) {
  console.error('Hosting file issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Verified dist hosting files, enforced CSP, and ${hashes.length} script hashes across the complete HTML artifact.`);
