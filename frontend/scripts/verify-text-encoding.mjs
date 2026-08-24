import fs from 'node:fs';
import path from 'node:path';

const roots = ['src', 'public', 'scripts', 'tests', 'dist'];
const textExtensions = new Set([
  '.astro',
  '.css',
  '.html',
  '.js',
  '.json',
  '.md',
  '.mjs',
  '.svg',
  '.ts',
  '.tsx',
  '.txt',
  '.xml',
]);

function chars(...codes) {
  return String.fromCharCode(...codes);
}

const mojibakePatterns = [
  [chars(0x0420, 0x045f), 'common mojibake for Cyrillic Pe'],
  [chars(0x0420, 0x045c), 'common mojibake for Cyrillic Em'],
  [chars(0x0420, 0x045d), 'common mojibake for Cyrillic En'],
  [chars(0x0420, 0x045e), 'common mojibake for Cyrillic O'],
  [chars(0x0420, 0x0406), 'common mojibake sequence'],
  [chars(0x0421, 0x0453), 'common mojibake for Cyrillic u'],
  [chars(0x0432, 0x0402), 'common mojibake for quotes/dashes'],
  [chars(0x0432, 0x201d), 'common mojibake for box drawing'],
  [chars(0x0432, 0x2020), 'common mojibake for arrows'],
];

const ignoredDirs = new Set(['.astro', 'dist-dev', 'node_modules']);
const issues = [];

// Некоторые из этих последовательностей законны внутри слова, набранного
// кириллицей в верхнем регистре: украинские слова вроде «внутрішній» или
// «пріоритет», записанные капсом, содержат пару Pe + Ukrainian I.
// Настоящая искажённая кодировка так не выглядит: она даёт смешанный мусор,
// где заглавные и строчные чередуются и слов не образуется.
// Поэтому совпадение пропускается только тогда, когда оно целиком лежит внутри
// непрерывного участка кириллицы в верхнем регистре длиной не меньше трёх.
const CYRILLIC = /[\u0400-\u04ff]/;
const CYRILLIC_UPPER = /[\u0400-\u042f\u0401\u0406\u0407\u0490]/;

function insideUppercaseWord(line, at, length) {
  let start = at;
  while (start > 0 && CYRILLIC.test(line[start - 1])) start -= 1;
  let end = at + length;
  while (end < line.length && CYRILLIC.test(line[end])) end += 1;
  const word = line.slice(start, end);
  if (word.length < 3) return false;
  return [...word].every((char) => CYRILLIC_UPPER.test(char));
}

function scanFile(filePath) {
  const text = fs.readFileSync(filePath, 'utf8');
  const lines = text.split(/\r?\n/);

  lines.forEach((line, index) => {
    for (const [pattern, reason] of mojibakePatterns) {
      let at = line.indexOf(pattern);
      while (at !== -1) {
        if (!insideUppercaseWord(line, at, pattern.length)) {
          issues.push(`${filePath}:${index + 1}: found "${pattern}" (${reason})`);
          break;
        }
        at = line.indexOf(pattern, at + 1);
      }
    }
  });
}

function walk(dir) {
  if (!fs.existsSync(dir)) return;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!ignoredDirs.has(entry.name)) walk(fullPath);
      continue;
    }

    if (entry.isFile() && textExtensions.has(path.extname(entry.name))) {
      scanFile(fullPath);
    }
  }
}

for (const root of roots) walk(root);

if (issues.length > 0) {
  console.error('Possible mojibake text encoding issues found:');
  for (const issue of issues) console.error(`- ${issue}`);
  process.exit(1);
}

console.log('Verified text files: no common mojibake patterns found.');
