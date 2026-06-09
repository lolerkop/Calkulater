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

function attrValue(tag, attr) {
  return tag.match(new RegExp(`\\s${attr}="([^"]*)"`, 'i'))?.[1] ?? '';
}

function stripTags(value) {
  return value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
}

function stripNonContent(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '');
}

function hasAccessibleName(tag, inner = '') {
  return Boolean(
    attrValue(tag, 'aria-label').trim() ||
      attrValue(tag, 'aria-labelledby').trim() ||
      attrValue(tag, 'title').trim() ||
      stripTags(inner),
  );
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

const files = listHtmlFiles(root);

for (const filePath of files) {
  const file = path.relative(root, filePath).replaceAll(path.sep, '/');
  const html = stripNonContent(fs.readFileSync(filePath, 'utf8'));

  if (!/<main[\s>]/i.test(html)) {
    issues.push(`${file}: missing main landmark`);
  }

  const ids = [...html.matchAll(/\sid="([^"]+)"/gi)].map((match) => match[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) issues.push(`${file}: duplicate id "${id}"`);
    seen.add(id);
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const tag = match[0];
    if (!/\salt=/i.test(tag)) issues.push(`${file}: image without alt attribute`);
  }

  for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
    const tag = `<button${match[1]}>`;
    if (!hasAccessibleName(tag, match[2])) {
      issues.push(`${file}: button without accessible name`);
    }
  }

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const tag = `<a${match[1]}>`;
    if (!hasAccessibleName(tag, match[2])) {
      issues.push(`${file}: link without accessible name`);
    }
  }

  for (const match of html.matchAll(/<(input|select|textarea)\b[^>]*>/gi)) {
    const tag = match[0];
    const type = attrValue(tag, 'type').toLowerCase();
    if (type === 'hidden') continue;

    const id = attrValue(tag, 'id');
    const labelledBy = attrValue(tag, 'aria-labelledby');
    const ariaLabel = attrValue(tag, 'aria-label');
    const hasLabel = id ? new RegExp(`<label\\b[^>]*\\sfor="${id}"`, 'i').test(html) : false;

    if (!hasLabel && !labelledBy && !ariaLabel) {
      issues.push(`${file}: form control without label`);
    }
  }
}

if (issues.length > 0) {
  console.error('Accessibility issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(`Verified ${files.length} HTML files: basic accessibility checks passed.`);
