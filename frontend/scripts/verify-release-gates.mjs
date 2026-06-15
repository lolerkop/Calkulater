import fs from 'node:fs';
import path from 'node:path';

const expectedRoutes = [
  '/',
  '/ru/',
  '/en/',
  '/uk/',
  '/ru/contacts/',
  '/ru/privacy/',
  '/ru/finance/',
  '/ru/currency/',
  '/ru/finance/percent-calculator/',
  '/ru/finance/income-tax-calculator/',
  '/ru/finance/vat-calculator/',
  '/ru/currency/currency-converter/',
  '/ru/currency/usd-to-eur/',
  '/ru/date-time/age-calculator/',
  '/ru/date-time/working-days-calculator/',
  '/ru/building/tile-calculator/',
  '/ru/building/wallpaper-calculator/',
  '/uk/fitness/kalkulyator-bmi/',
];

const issues = [];
const matrixPath = path.resolve('reports/qa-matrix.csv');
const matrix = fs.readFileSync(matrixPath, 'utf8').trim().split(/\r?\n/);
const expectedHeader = 'page,route,locale,calculator_type,SEO,UX,logic,a11y,performance,privacy,status';
if (matrix[0] !== expectedHeader) issues.push('QA matrix header does not match the release schema.');

const rows = matrix.slice(1).map((line) => line.split(','));
const routes = new Map(rows.map((row) => [row[1], row]));
for (const route of expectedRoutes) {
  const row = routes.get(route);
  if (!row) {
    issues.push(`QA matrix is missing ${route}`);
    continue;
  }
  if (row.at(-1) !== 'pass') issues.push(`QA matrix status is not pass for ${route}`);

  const relative = route === '/' ? 'index.html' : `${route.slice(1)}index.html`;
  const file = path.join('dist', relative);
  if (!fs.existsSync(file)) {
    issues.push(`Required route has no built HTML: ${route}`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  if ((html.match(/<h1[\s>]/gi) ?? []).length !== 1) issues.push(`${route}: expected one H1`);
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i)?.[1];
  if (!canonical || new URL(canonical).search) issues.push(`${route}: missing or dirty canonical`);
  if (!/<title>\s*\S[\s\S]*?<\/title>/i.test(html)) issues.push(`${route}: missing title`);
  if (!/<meta\s+name="description"\s+content="\S[^"]*"/i.test(html)) issues.push(`${route}: missing description`);
  if (/\b(?:NaN|Infinity|undefined)\b/.test(html)) issues.push(`${route}: non-finite value leaked into HTML`);
}

for (const route of ['/ru/contacts/', '/ru/privacy/']) {
  const file = path.join('dist', route.slice(1), 'index.html');
  const html = fs.readFileSync(file, 'utf8');
  if (/lorem ipsum|todo:|example\.com|перед публичным запуском/i.test(html)) {
    issues.push(`${route}: launch placeholder found`);
  }
}

const headers = fs.readFileSync('public/_headers', 'utf8');
for (const header of [
  'Content-Security-Policy-Report-Only',
  'Referrer-Policy',
  'X-Content-Type-Options',
  'Permissions-Policy',
  'Strict-Transport-Security',
]) {
  if (!headers.includes(header)) issues.push(`Security header is missing: ${header}`);
}

const performance = JSON.parse(fs.readFileSync('reports/lighthouse/current/summary.json', 'utf8'));
for (const slug of ['ru-home', 'income-tax', 'tile']) {
  const result = performance.find((entry) => entry.slug === slug);
  if (!result || result.runs < 3) issues.push(`Performance summary is missing 3 runs for ${slug}`);
  if (result && (result.lcpMs > 2500 || result.cls > 0.1 || result.tbtMs > 200)) {
    issues.push(`Performance budget failed for ${slug}`);
  }
}

if (issues.length > 0) {
  console.error('Release gate issues found:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Verified final release gates for ${expectedRoutes.length} required routes.`);
