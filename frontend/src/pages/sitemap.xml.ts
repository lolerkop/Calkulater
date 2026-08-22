import type { APIRoute } from 'astro';
import { SITE } from '../config/site';
import { catalogPageCount, catalogPagePath } from '../lib/catalogPagination';
import {
  getAlternatesForCalculator,
  getAlternatesForCategory,
  getAlternatesForPage,
  getCalculators,
  getCategories,
  localeCatalog,
  locales,
  type AlternateLink,
  type Locale,
} from '../lib/i18n';

export const prerender = true;

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function abs(path: string): string {
  return new URL(path, SITE.url).toString();
}

function alternateXml(alternates: AlternateLink[]): string[] {
  return alternates.map((item) => {
    const hreflang = item.locale === 'x-default' ? 'x-default' : item.locale;
    return `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${escapeXml(abs(item.href))}" />`;
  });
}

function urlXml(path: string, alternates: AlternateLink[]): string[] {
  return [
    '  <url>',
    `    <loc>${escapeXml(abs(path))}</loc>`,
    ...alternateXml(alternates),
    '  </url>',
  ];
}

function localePathMap(suffix = '/'): Partial<Record<Locale, string>> {
  return Object.fromEntries(locales.map((locale) => [locale, `/${locale}${suffix}`]));
}

export const GET: APIRoute = () => {
  const entries: string[][] = [];
  const homeAlternates = getAlternatesForPage(localePathMap('/'));

  entries.push(urlXml('/', homeAlternates));

  for (const locale of locales) {
    entries.push(urlXml(`/${locale}/`, homeAlternates));
    entries.push(urlXml(localeCatalog(locale), getAlternatesForPage(localePathMap('/calculators/'))));

    // Страницы подборки со второй и далее.
    //
    // Они включены сознательно. Каждая — самостоятельный индексируемый адрес с
    // собственным каноническим адресом и собственным набором калькуляторов, а
    // действующий контракт сайта прост: индексируемое обязано быть в карте
    // сайта, и проверка покрытия его же и требует. Исключить их значило бы
    // завести исключение из общего правила ради экономии трёх строк.
    //
    // Соответствие между локалями держится по НОМЕРУ страницы; если у локали
    // столько страниц нет, ссылка на неё не выводится, иначе hreflang указывал
    // бы на 404.
    const pageCount = catalogPageCount(getCalculators(locale).length);
    for (let page = 2; page <= pageCount; page += 1) {
      const alternates = getAlternatesForPage(Object.fromEntries(
        locales
          .filter((item) => catalogPageCount(getCalculators(item).length) >= page)
          .map((item) => [item, catalogPagePath(localeCatalog(item), page)]),
      ));
      entries.push(urlXml(catalogPagePath(localeCatalog(locale), page), alternates));
    }
    entries.push(urlXml(`/${locale}/about/`, getAlternatesForPage(localePathMap('/about/'))));
    entries.push(urlXml(`/${locale}/contacts/`, getAlternatesForPage(localePathMap('/contacts/'))));
    entries.push(urlXml(`/${locale}/privacy/`, getAlternatesForPage(localePathMap('/privacy/'))));

    for (const category of getCategories(locale as Locale)) {
      entries.push(urlXml(`/${locale}/${category.slug}/`, getAlternatesForCategory(category.id)));
    }

    for (const calculator of getCalculators(locale as Locale)) {
      entries.push(urlXml(calculator.fullPath, getAlternatesForCalculator(calculator.id)));
    }
  }

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...entries.flat(),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
