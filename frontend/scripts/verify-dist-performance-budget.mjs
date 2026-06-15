import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const root = path.resolve('dist');
const issues = [];

const budgets = {
  jsChunkGzip: 70 * 1024,
  jsTotalGzip: 105 * 1024,
  cssTotalGzip: 40 * 1024,
  fontFileGzip: 28 * 1024,
  fontTotalGzip: 125 * 1024,
  imageTotalGzip: 250 * 1024,
  htmlFileGzip: 18 * 1024,
  htmlTotalBaseGzip: 320 * 1024,
  htmlAverageGzip: 9.5 * 1024,
};

function listFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...listFiles(fullPath));
    if (entry.isFile()) files.push(fullPath);
  }
  return files;
}

function gzipSize(filePath) {
  return zlib.gzipSync(fs.readFileSync(filePath)).length;
}

function kib(bytes) {
  return `${(bytes / 1024).toFixed(1)} KiB`;
}

if (!fs.existsSync(root)) {
  console.error('dist directory not found. Run astro build first.');
  process.exit(1);
}

const files = listFiles(root);
const jsFiles = files.filter((file) => file.endsWith('.js'));
const cssFiles = files.filter((file) => file.endsWith('.css'));
const htmlFiles = files.filter((file) => file.endsWith('.html'));
const fontFiles = files.filter((file) => file.endsWith('.woff2'));
const imageFiles = files.filter((file) => /\.(?:avif|gif|jpe?g|png|svg|webp)$/i.test(file));

let jsTotalGzip = 0;
for (const filePath of jsFiles) {
  const size = gzipSize(filePath);
  jsTotalGzip += size;
  if (size > budgets.jsChunkGzip) {
    issues.push(`${path.relative(root, filePath)}: JS chunk gzip ${kib(size)} exceeds ${kib(budgets.jsChunkGzip)}`);
  }
}

let cssTotalGzip = 0;
for (const filePath of cssFiles) {
  cssTotalGzip += gzipSize(filePath);
}

let htmlTotalGzip = 0;
for (const filePath of htmlFiles) {
  const size = gzipSize(filePath);
  htmlTotalGzip += size;
  if (size > budgets.htmlFileGzip) {
    issues.push(`${path.relative(root, filePath)}: HTML gzip ${kib(size)} exceeds ${kib(budgets.htmlFileGzip)}`);
  }
}

if (jsTotalGzip > budgets.jsTotalGzip) {
  issues.push(`total JS gzip ${kib(jsTotalGzip)} exceeds ${kib(budgets.jsTotalGzip)}`);
}

if (cssTotalGzip > budgets.cssTotalGzip) {
  issues.push(`total CSS gzip ${kib(cssTotalGzip)} exceeds ${kib(budgets.cssTotalGzip)}`);
}

let fontTotalGzip = 0;
for (const filePath of fontFiles) {
  const size = gzipSize(filePath);
  fontTotalGzip += size;
  if (size > budgets.fontFileGzip) {
    issues.push(`${path.relative(root, filePath)}: font gzip ${kib(size)} exceeds ${kib(budgets.fontFileGzip)}`);
  }
}
if (fontTotalGzip > budgets.fontTotalGzip) {
  issues.push(`total font gzip ${kib(fontTotalGzip)} exceeds ${kib(budgets.fontTotalGzip)}`);
}

const imageTotalGzip = imageFiles.reduce((total, filePath) => total + gzipSize(filePath), 0);
if (imageTotalGzip > budgets.imageTotalGzip) {
  issues.push(`total image gzip ${kib(imageTotalGzip)} exceeds ${kib(budgets.imageTotalGzip)}`);
}

const htmlTotalBudget = Math.max(budgets.htmlTotalBaseGzip, htmlFiles.length * budgets.htmlAverageGzip);
if (htmlTotalGzip > htmlTotalBudget) {
  issues.push(`total HTML gzip ${kib(htmlTotalGzip)} exceeds ${kib(htmlTotalBudget)}`);
}

if (issues.length > 0) {
  console.error('Performance budget issues found in dist:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log(
  `Verified performance budgets: JS ${kib(jsTotalGzip)}, CSS ${kib(cssTotalGzip)}, fonts ${kib(fontTotalGzip)}, images ${kib(imageTotalGzip)}, HTML ${kib(htmlTotalGzip)} gzip.`,
);
