import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { urlInventory } from '../src/data/urlInventory';

const reportDirectory = fileURLToPath(new URL('../reports/', import.meta.url));
const reportPath = fileURLToPath(new URL('../reports/url-inventory.csv', import.meta.url));
const columns = [
  'url',
  'locale',
  'page_type',
  'indexable_expected',
  'canonical_expected',
  'hreflang_cluster',
  'source_file',
];

function csv(value: string | boolean): string {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const rows = urlInventory.map((entry) => [
  entry.url,
  entry.locale,
  entry.pageType,
  entry.indexableExpected,
  entry.canonicalExpected,
  entry.hreflangCluster,
  entry.sourceFile,
]);

mkdirSync(reportDirectory, { recursive: true });
writeFileSync(reportPath, `${[columns, ...rows].map((row) => row.map(csv).join(',')).join('\n')}\n`);
