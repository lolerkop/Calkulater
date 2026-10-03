import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';

const dist = resolve('dist');
const files = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? files(join(dir, entry.name)) : entry.name.endsWith('.html') ? [join(dir, entry.name)] : []);
const decode = (text) => text.replace(/&#(?:x([0-9a-f]+)|(\d+));/gi, (_, hex, decimal) => String.fromCodePoint(parseInt(hex ?? decimal, hex ? 16 : 10)))
  .replace(/&(amp|quot|apos|lt|gt|nbsp);/g, (_, key) => ({ amp: '&', quot: '"', apos: "'", lt: '<', gt: '>', nbsp: ' ' })[key]);
const plain = (text) => decode(text.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').replace(/^—\s*/, '').trim();
const issues = [];
let pages = 0;
let steps = 0;
for (const file of files(dist)) {
  const html = readFileSync(file, 'utf8');
  const path = relative(dist, file).replace(/index\.html$/, '').replaceAll('\\', '/');
  const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const instructions = blocks.filter((block) => block['@type'] === 'HowTo');
  if (blocks.some((block) => block['@type'] === 'Article') && instructions.length !== 1) issues.push(`${path}: expected one instruction block for calculator article, found ${instructions.length}`);
  for (const howTo of instructions) {
    pages++;
    if (!Array.isArray(howTo.step) || !howTo.step.length) issues.push(`${path}: no instruction steps`);
    for (const step of howTo.step ?? []) {
      steps++;
      const url = new URL(step.url);
      const id = url.hash.slice(1);
      if (url.pathname !== `/${path}`) issues.push(`${path}: step URL points to another page: ${step.url}`);
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const matches = [...html.matchAll(new RegExp(`<li\\b[^>]*id="${escaped}"[^>]*>([\\s\\S]*?)<\\/li>`, 'g'))];
      if (matches.length !== 1) issues.push(`${path}: expected one visible li#${id}, found ${matches.length}`);
      else if (plain(matches[0][1]) !== decode(step.text).replace(/\s+/g, ' ').trim()) issues.push(`${path}#${id}: instruction text differs from JSON-LD`);
    }
    if (Object.hasOwn(howTo, 'totalTime')) issues.push(`${path}: unsupported instruction duration`);
  }
}
if (pages === 0 || steps === 0) issues.push('No calculator instruction data found');
writeFileSync('reports/originality-instruction-anchors.json', JSON.stringify({ schema_version: 1, scope: 'All built HTML: JSON-LD instruction URL anchors and visible instruction text, not Google rich-result eligibility', calculator_pages: pages, instruction_steps: steps, issues, status: issues.length ? 'FAIL' : 'PASS' }, null, 2) + '\n');
if (issues.length) {
  console.error(issues.slice(0, 30).join('\n'));
  process.exit(1);
}
console.log(`Verified ${pages} calculator pages and ${steps} visible instruction anchors.`);
