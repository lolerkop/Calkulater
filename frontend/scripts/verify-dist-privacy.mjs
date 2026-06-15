import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');
const issues = [];
const sectionIds = [
  'operator', 'data', 'local', 'share-links', 'storage', 'analytics', 'processors',
  'logs', 'retention', 'rights', 'contact', 'updated', 'changes',
];

for (const locale of ['ru', 'en', 'uk']) {
  const file = path.join(root, locale, 'privacy', 'index.html');
  if (!fs.existsSync(file)) {
    issues.push(`${locale}/privacy/: missing page`);
    continue;
  }
  const html = fs.readFileSync(file, 'utf8');
  for (const id of sectionIds) {
    if (!html.includes(`data-testid="privacy-section-${id}"`)) {
      issues.push(`${locale}/privacy/: missing ${id} section`);
    }
  }
  if (!html.includes('2026-06-15')) issues.push(`${locale}/privacy/: missing update date`);
}

const htmlFiles = [];
function collect(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) collect(fullPath);
    else if (entry.name.endsWith('.html')) htmlFiles.push(fullPath);
  }
}
collect(root);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  if (/(?:src|href)="http:\/\//i.test(html)) {
    issues.push(`${path.relative(root, file)}: mixed-content resource URL`);
  }
}

if (issues.length) {
  console.error('Privacy compliance issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('Verified privacy sections, update dates, and mixed-content resource URLs.');
