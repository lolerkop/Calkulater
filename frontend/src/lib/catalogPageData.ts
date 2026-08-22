// Данные страницы подборки: единый источник для первой страницы и остальных.
//
// Порядок задаётся ОДИН раз для всей подборки и режется по страницам. Сортировать
// внутри страницы отдельно нельзя: страницы обязаны быть разбиением одной
// последовательности, иначе один калькулятор попал бы на две страницы, а другой
// не попал бы никуда.
import { getCalculators, getCategories, type Locale } from './i18n';
import { breadcrumbsJsonLd, collectionPageJsonLd, itemListJsonLd } from './seo';
import { catalogPageOffset, catalogPagePath, catalogPageSlice } from './catalogPagination';
import type { CalculatorDef, CategoryId } from './types';

export type CatalogRow = Pick<
  CalculatorDef,
  'id' | 'name' | 'shortDescription' | 'fullPath' | 'category' | 'popularity' | 'isNew'
> & { categoryName?: string };

/** Глобальный порядок подборки: популярность, затем имя. Тот же, что был. */
export function catalogRows(locale: Locale): CatalogRow[] {
  const categories = getCategories(locale);
  const byId = new Map(categories.map((category) => [category.id, category.name]));
  return getCalculators(locale)
    .map((calculator) => ({
      id: calculator.id,
      name: calculator.name,
      shortDescription: calculator.shortDescription,
      fullPath: calculator.fullPath,
      category: calculator.category,
      categoryName: byId.get(calculator.category),
      popularity: calculator.popularity,
      isNew: calculator.isNew,
    }))
    .sort((a, b) => b.popularity - a.popularity || a.name.localeCompare(b.name, locale));
}

/**
 * Глобальные счётчики подборки для острова.
 *
 * Считает сервер: остров видит только срез страницы, а подписи фильтров обязаны
 * называть числа по ВСЕМУ каталогу. Стоимость O(категорий) — шестнадцать чисел,
 * — а не O(численности), поэтому props не растут вместе с ассортиментом.
 */
export function catalogCounts(rows: CatalogRow[]): {
  total: number;
  fresh: number;
  popular: number;
  byCategory: Record<string, number>;
} {
  const byCategory: Record<string, number> = {};
  let fresh = 0;
  let popular = 0;
  for (const row of rows) {
    byCategory[row.category] = (byCategory[row.category] ?? 0) + 1;
    if (row.isNew) fresh += 1;
    if (row.popularity >= 80) popular += 1;
  }
  return { total: rows.length, fresh, popular, byCategory };
}

export function catalogCategoryRows(locale: Locale): { id: CategoryId; name: string; slug: string }[] {
  return getCategories(locale).map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
  }));
}

const PAGE_WORD: Partial<Record<Locale, string>> = { ru: 'Страница', en: 'Page', uk: 'Сторінка' };
export const pageWordFor = (locale: Locale): string => PAGE_WORD[locale] ?? 'Page';

/**
 * Сколько калькуляторов перечисляет ItemList. Величина постоянная и не растёт
 * ни вместе с подборкой, ни вместе с размером страницы.
 */
export const CATALOG_ITEM_LIST_SIZE = 24;

export function catalogJsonLd(input: {
  locale: Locale;
  page: number;
  pageCount: number;
  catalogPath: string;
  rows: CatalogRow[];
  homeLabel: string;
  homePath: string;
  title: string;
  description: string;
  catalogLabel: string;
}) {
  const { locale, page, pageCount, catalogPath, rows, homeLabel, homePath, title, description, catalogLabel } = input;
  const pagePath = catalogPagePath(catalogPath, page);
  const slice = catalogPageSlice(rows, page);
  const items = slice.map((row) => ({
    name: row.name,
    description: row.shortDescription,
    path: row.fullPath,
  }));
  const pageWord = pageWordFor(locale);
  const pageTitle = page === 1 ? title : `${title} — ${pageWord} ${page}`;

  return [
    collectionPageJsonLd({
      name: pageTitle,
      description: page === 1 ? description : `${description} ${pageWord} ${page}/${pageCount}.`,
      path: pagePath,
      items,
      locale,
    }),
    itemListJsonLd({
      name: pageTitle,
      path: pagePath,
      // Перечисляется ВЕРХ страницы, а не вся подборка. Разметка обязана быть
      // достоверным представлением страницы и не смеет объявлять того, чего
      // читатель не видит; объявить меньше показанного можно, и это тот случай.
      // Позиции ГЛОБАЛЬНЫЕ: страницы — срезы одной упорядоченной подборки, и
      // первый элемент второй страницы стоит на своём настоящем месте.
      items: items.slice(0, CATALOG_ITEM_LIST_SIZE),
      startPosition: catalogPageOffset(page) + 1,
    }),
    breadcrumbsJsonLd(
      page === 1
        ? [{ label: homeLabel, href: homePath }, { label: catalogLabel, href: catalogPath }]
        : [
            { label: homeLabel, href: homePath },
            { label: catalogLabel, href: catalogPath },
            { label: `${pageWord} ${page}`, href: pagePath },
          ],
    ),
  ];
}
