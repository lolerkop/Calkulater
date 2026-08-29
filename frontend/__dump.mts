import { existsSync } from 'node:fs';
import { getCalculators } from './src/lib/i18n';
const cats = process.argv[2].split(',');
const de = new Set(getCalculators('de').map((c) => c.id));
const list = getCalculators('en').filter((c) => cats.includes(c.category) && !de.has(c.id)
  && (process.argv[3] === 'legacy' ? !existsSync(`src/calculators/${c.id}/definition.ts`)
                                   : existsSync(`src/calculators/${c.id}/definition.ts`)));
for (const c of list) {
  console.log(`### ${c.id} [${c.category}] EN slug: ${c.slug}`);
  console.log(`name: ${c.name}\nshort: ${c.shortDescription}\ntitle: ${c.seoTitle}\ndesc: ${c.seoDescription}\nkw: ${(c.keywords ?? []).join(' | ')}`);
  console.log(`long: ${c.longDescription}`);
  console.log(`how: ${(c.howToUse ?? []).join(' ~ ')}`);
  console.log(`works: ${c.howItWorks}`);
  console.log(`example: ${c.example}`);
  console.log(`faq: ${(c.faq ?? []).map((f) => `${f.q} >> ${f.a}`).join(' ~ ')}`);
  try {
    const en = (await import(`./src/calculators/${c.id}/localization.ts`)).localization?.en;
    if (en) for (const n of ['fields','options','results','values']) if (en[n] && Object.keys(en[n]).length) console.log(`${n}: ${JSON.stringify(en[n])}`);
  } catch { /* legacy */ }
  console.log('');
}
console.error(`  выгружено: ${list.length}`);
