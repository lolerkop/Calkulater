import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const issues = [];

const forbiddenFragments = [
  'undefined',
  'NaN',
  'Infinity',
  '[object Object]',
  'href=""',
  "href=''",
  'src=""',
  "src=''",
];

function listHtmlFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listHtmlFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }
  return files;
}

function lineForIndex(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

const files = listHtmlFiles(root);

for (const filePath of files) {
  const file = path.relative(root, filePath).replaceAll(path.sep, '/');
  const html = fs.readFileSync(filePath, 'utf8');

  for (const fragment of forbiddenFragments) {
    const index = html.indexOf(fragment);
    if (index >= 0) {
      issues.push(`${file}:${lineForIndex(html, index)}: found "${fragment}"`);
    }
  }
}

if (issues.length > 0) {
  console.error('Content sanity issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Verified ${files.length} HTML files: no obvious render artifacts.`);
