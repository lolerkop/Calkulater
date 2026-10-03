import { readFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';
import { describe, expect, it, vi } from 'vitest';

// Keep this narrow source gate independent of the partially integrated MAIN
// registry. The actual catalog/schema functions run against fixed fixture rows.
vi.mock('../src/lib/i18n', () => ({
  getCalculators: () => [], getCategories: () => [],
  localeMeta: {
    ru: { localeCode: 'ru-RU' }, en: { localeCode: 'en-US' }, uk: { localeCode: 'uk-UA' },
    de: { localeCode: 'de-DE' }, es: { localeCode: 'es-ES' },
  },
}));
import { catalogJsonLd, pageWordFor, type CatalogRow } from '../src/lib/catalogPageData';

const body = readFileSync(new URL('../src/components/CatalogPageBody.astro', import.meta.url), 'utf8');
const paged = readFileSync(new URL('../src/pages/[locale]/calculators/page/[page].astro', import.meta.url), 'utf8');
const labelObject = body.match(/const LABELS = \((\{[\s\S]*?\n\}) as Partial/)?.[1];
const breadcrumbExpression = body.match(/items=\{([\s\S]*?)\}\n    \/>/)?.[1];
const titleExpression = paged.match(/title=\{(`[^`]+`)\}/)?.[1];
const descriptionExpression = paged.match(/description=\{(`[^`]+`)\}/)?.[1];
const copies = {
  ru: { previous: 'Назад', next: 'Вперёд', page: 'Страница', of: 'из', pagination: 'Страницы подборки', breadcrumbs: 'Хлебные крошки' },
  en: { previous: 'Previous', next: 'Next', page: 'Page', of: 'of', pagination: 'Catalog pages', breadcrumbs: 'Breadcrumbs' },
  uk: { previous: 'Назад', next: 'Далі', page: 'Сторінка', of: 'з', pagination: 'Сторінки добірки', breadcrumbs: 'Навігаційний ланцюжок' },
  de: { previous: 'Zurück', next: 'Weiter', page: 'Seite', of: 'von', pagination: 'Katalogseiten', breadcrumbs: 'Brotkrumennavigation' },
  es: { previous: 'Anterior', next: 'Siguiente', page: 'Página', of: 'de', pagination: 'Páginas del catálogo', breadcrumbs: 'Migas de pan' },
} as const;
const rows: CatalogRow[] = Array.from({ length: 305 }, (_, i) => ({
  id: `fixture-${i + 1}`, name: `Fixture ${i + 1}`, fullPath: `/fixture/${i + 1}/`,
  shortDescription: 'An independent catalog fixture', category: 'math', popularity: 0, isNew: false,
}));

describe('catalog native pagination follow-up with preserved route and slice semantics', () => {
  for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) {
    it(`${locale}: native visible pagination, aria labels and unchanged page word`, () => {
      expect(labelObject).toBeTruthy();
      const labels = runInNewContext(`(${labelObject})[locale]`, { locale });
      expect(labels).toEqual(copies[locale]);
      expect(pageWordFor(locale)).toBe(copies[locale].page);
      expect(body).toContain('label={LABELS.breadcrumbs}');
      expect(body).toContain('copy={{ label: LABELS.pagination, previous: LABELS.previous, next: LABELS.next, page: LABELS.page, of: LABELS.of }}');
    });
    for (const page of [2, 3]) {
      it(`${locale}/${page}: actual template title, description and visible breadcrumb expressions`, () => {
        expect(breadcrumbExpression).toBeTruthy();
        expect(titleExpression).toBeTruthy();
        expect(descriptionExpression).toBeTruthy();
        expect(paged).toContain('const PAGE_WORD = pageWordFor(locale);');
        const labels = runInNewContext(`(${labelObject})[locale]`, { locale });
        const copy = { catalogTitle: 'Fixture catalog', catalogDescription: 'Fixture description', home: 'Fixture home', allCalculators: 'Fixture list' };
        const context = { locale, page, pageCount: 3, catalogPath: `/${locale}/calculators/`, copy, LABELS: labels, PAGE_WORD: pageWordFor(locale) };
        expect(runInNewContext(titleExpression!, context)).toBe(`Fixture catalog — ${copies[locale].page} ${page}`);
        expect(runInNewContext(descriptionExpression!, context)).toBe(`Fixture description ${copies[locale].page} ${page}/3.`);
        expect(runInNewContext(`(${breadcrumbExpression})`, context)).toEqual([
          { label: 'Fixture home', href: `/${locale}/` },
          { label: 'Fixture list', href: `/${locale}/calculators/` },
          { label: `${copies[locale].page} ${page}` },
        ]);
      });
      it(`${locale}/${page}: actual schema names, canonical path and global list position`, () => {
        const data = catalogJsonLd({ locale, page, pageCount: 3, catalogPath: `/${locale}/calculators/`, rows,
          homeLabel: 'Fixture home', homePath: `/${locale}/`, title: 'Fixture catalog', description: 'Fixture description', catalogLabel: 'Fixture list' });
        expect(data[0]).toMatchObject({ '@type': 'CollectionPage', name: `Fixture catalog — ${copies[locale].page} ${page}`,
          description: `Fixture description ${copies[locale].page} ${page}/3.`, url: `https://calcuway.com/${locale}/calculators/page/${page}/` });
        expect(data[1]).toMatchObject({ '@type': 'ItemList', name: `Fixture catalog — ${copies[locale].page} ${page}` });
        const items = data[1].itemListElement as { position: number; name: string }[];
        expect(items[0].position).toBe(page === 2 ? 151 : 301);
        expect(items.length).toBe(page === 2 ? 24 : 5);
        expect(data[2]).toMatchObject({ '@type': 'BreadcrumbList', itemListElement: [
          { position: 1, name: 'Fixture home' }, { position: 2, name: 'Fixture list' },
          { position: 3, name: `${copies[locale].page} ${page}`, item: `https://calcuway.com/${locale}/calculators/page/${page}/` },
        ] });
      });
    }
  }
});
