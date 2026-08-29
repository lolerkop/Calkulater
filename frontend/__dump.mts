import { getCalculators, getCalculatorById } from './src/lib/i18n';

const cat = process.argv[2];
const de = new Set(getCalculators('de').map((c) => c.id));
const list = getCalculators('en').filter((c) => c.category === cat && !de.has(c.id));

for (const c of list) {
  console.log(`### ${c.id}  |  EN slug: ${c.slug}`);
  console.log(`name: ${c.name}`);
  console.log(`short: ${c.shortDescription}`);
  console.log(`title: ${c.seoTitle}`);
  console.log(`desc: ${c.seoDescription}`);
  console.log(`kw: ${(c.keywords ?? []).join(' | ')}`);
  let loc: any = null;
  try { loc = (await import(`./src/calculators/${c.id}/localization.ts`)).localization?.en; } catch { /* legacy */ }
  if (loc) {
    for (const n of ['fields', 'options', 'results', 'values']) {
      const v = loc[n]; if (v && Object.keys(v).length) console.log(`${n}: ${JSON.stringify(v)}`);
    }
  } else {
    console.log('loc: (legacy — блока локализации нет)');
  }
  console.log('');
}
console.error(`  ${cat}: ${list.length}`);
