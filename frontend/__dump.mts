// Компактная выгрузка исходного материала для перевода.
import { getCalculatorById } from './src/lib/i18n';
import { v2Localization } from './src/calculators/localization.generated';
for (const id of process.argv.slice(2)) {
  const en: any = getCalculatorById(id, 'en');
  if (!en) { console.log(`### ${id}: НЕТ`); continue; }
  const loc: any = (v2Localization as any).en?.[id];
  const out: any = {
    id, cat: en.category, slug: en.slug, name: en.name, h1: en.h1,
    short: en.shortDescription, seoT: en.seoTitle, seoD: en.seoDescription, kw: en.keywords,
    long: en.longDescription, works: en.howItWorks, ex: en.example, use: en.howToUse,
    fields: en.fields.map((f: any) => ({ n: f.name, t: f.type, u: f.unit, l: f.label,
      o: f.options?.map((x: any) => [x.value, x.label]) })),
    faq: en.faq?.map((f: any) => [f.q, f.a]),
    R: loc?.results ?? {}, V: loc?.values ?? {}, O: loc?.options ?? {},
  };
  console.log('@@' + JSON.stringify(out));
}
