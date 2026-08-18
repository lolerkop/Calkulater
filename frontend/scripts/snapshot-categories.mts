// Снимок разрешённых данных категорий по всем локалям. Сравнивается до и после
// миграции владения: TypeScript компилируется и при потерянном переводе.
import { writeFileSync } from 'node:fs';
import { allLocales, getCategories, getCategoryById, type Locale } from '../src/lib/i18n';
import { categoryAliases } from '../src/lib/search';

const out: Record<string, unknown> = {};
out.__order = getCategories('ru').map((c) => c.id);
for (const locale of allLocales as readonly Locale[]) {
  const cats = getCategories(locale);
  out[locale] = cats.map((c) => ({
    id: c.id, slug: c.slug, name: c.name, icon: c.icon,
    description: c.description, longDescription: c.longDescription,
    seoTitle: c.seoTitle, seoDescription: c.seoDescription, h1: c.h1,
    faq: c.faq, alias: (categoryAliases as Record<string, string>)[c.id],
  }));
}
writeFileSync(process.env.SNAP_OUT!, JSON.stringify(out, null, 1));
console.log(`снимок: ${(out.__order as string[]).length} категорий × ${(allLocales as readonly string[]).length} локалей`);
