import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('dist');

function listHtmlFiles(directory) {
  const files = [];
  const entries = fs.readdirSync(directory, { withFileTypes: true })
    .sort((a, b) => a.name.localeCompare(b.name));

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...listHtmlFiles(fullPath));
    if (entry.isFile() && entry.name.endsWith('.html')) files.push(fullPath);
  }

  return files;
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run the production build first.');
  process.exit(1);
}

const files = listHtmlFiles(root);
if (files.length === 0) {
  console.error('No HTML files found in dist. Run the production build first.');
  process.exit(1);
}

const issues = [];

for (const filePath of files) {
  const contents = fs.readFileSync(filePath);
  const offsets = [];

  for (let offset = 0; offset < contents.length; offset += 1) {
    if (contents[offset] === 0x00) offsets.push(offset);
  }

  if (offsets.length > 0) {
    issues.push({
      file: path.relative(root, filePath).replaceAll(path.sep, '/'),
      offsets,
    });
  }
}

if (issues.length > 0) {
  const nulCount = issues.reduce((total, issue) => total + issue.offsets.length, 0);
  console.error(`Found ${nulCount} NUL byte(s) in ${issues.length} HTML file(s):`);
  for (const issue of issues) {
    console.error(`- ${issue.file}: byte offset(s) ${issue.offsets.join(', ')}`);
  }
  process.exit(1);
}

console.log(`Verified ${files.length} HTML files: 0 NUL bytes found.`);
