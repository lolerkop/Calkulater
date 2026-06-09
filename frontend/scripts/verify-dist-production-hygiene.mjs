import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const issues = [];

function listHtmlFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listHtmlFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

const files = listHtmlFiles(root);
const allowAds = process.env.PUBLIC_SHOW_AD_PLACEHOLDERS === 'true';
const isValidGaId = (value) => /^G-[A-Z0-9]{6,}$/i.test(value) && !/^G-X+$/i.test(value);
const isValidYmId = (value) => /^\d{5,12}$/.test(value) && value !== '12345678' && !/^0+$/.test(value);
const allowGa = isValidGaId(process.env.PUBLIC_GA_ID ?? '');
const allowYm = isValidYmId(process.env.PUBLIC_YM_ID ?? '');

for (const filePath of files) {
  const file = path.relative(root, filePath).replaceAll(path.sep, '/');
  const html = fs.readFileSync(filePath, 'utf8');

  if (!allowAds && html.includes('data-ad-slot=')) {
    issues.push(`${file}: ad placeholder rendered while PUBLIC_SHOW_AD_PLACEHOLDERS is not true`);
  }

  if (!allowGa && html.includes('googletagmanager.com/gtag/js')) {
    issues.push(`${file}: Google Analytics rendered without PUBLIC_GA_ID`);
  }

  if (!allowYm && html.includes('mc.yandex.ru/metrika/tag.js')) {
    issues.push(`${file}: Yandex Metrica rendered without PUBLIC_YM_ID`);
  }

  if (html.includes('G-XXXXXXXXXX') || html.includes('G-XXXXXXX')) {
    issues.push(`${file}: placeholder Google Analytics ID leaked into built HTML`);
  }

  if (html.includes('12345678') && html.includes('mc.yandex.ru')) {
    issues.push(`${file}: placeholder Yandex Metrica ID leaked into built HTML`);
  }

  if (html.includes('hello@example.com')) {
    issues.push(`${file}: placeholder contact email leaked into built HTML`);
  }

  if (html.includes('https://example.com')) {
    issues.push(`${file}: placeholder example.com URL leaked into built HTML`);
  }
}

if (issues.length > 0) {
  console.error('Production hygiene issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Verified ${files.length} HTML files: production hygiene checks passed.`);
