import {
  getCalculators,
  getCategories,
  localeCatalog,
  locales,
  type Locale,
} from '../lib/i18n';
import { isRuOnlyCalculator } from './localizationParity';

export type UrlInventoryEntry = {
  url: string;
  locale: Locale | 'x-default';
  pageType: 'gateway' | 'home' | 'catalog' | 'service' | 'category' | 'calculator' | 'facet' | 'redirect' | 'error' | 'technical';
  indexableExpected: boolean;
  canonicalExpected: string;
  hreflangCluster: string;
  sourceFile: string;
};

export const currencyPairIds = ['usd-to-eur', 'eur-to-mdl', 'usd-to-mdl'] as const;
const facetParams = ['tag', 'category', 'sort', 'q'] as const;

const entries: UrlInventoryEntry[] = [
  {
    url: '/',
    locale: 'x-default',
    pageType: 'gateway',
    indexableExpected: true,
    canonicalExpected: '/',
    hreflangCluster: 'home',
    sourceFile: 'src/pages/index.astro',
  },
  {
    url: '/404.html',
    locale: 'x-default',
    pageType: 'error',
    indexableExpected: false,
    canonicalExpected: '',
    hreflangCluster: 'none',
    sourceFile: 'src/pages/404.astro',
  },
];

for (const locale of locales) {
  entries.push(
    {
      url: `/${locale}/`,
      locale,
      pageType: 'home',
      indexableExpected: true,
      canonicalExpected: `/${locale}/`,
      hreflangCluster: 'home',
      sourceFile: 'src/pages/[locale]/index.astro',
    },
    {
      url: localeCatalog(locale),
      locale,
      pageType: 'catalog',
      indexableExpected: true,
      canonicalExpected: localeCatalog(locale),
      hreflangCluster: 'catalog',
      sourceFile: 'src/pages/[locale]/calculators.astro',
    },
  );

  for (const param of facetParams) {
    entries.push({
      url: `${localeCatalog(locale)}?${param}=*`,
      locale,
      pageType: 'facet',
      indexableExpected: false,
      canonicalExpected: localeCatalog(locale),
      hreflangCluster: 'none',
      sourceFile: 'functions/[locale]/calculators.js',
    });
  }

  for (const page of ['about', 'contacts', 'privacy'] as const) {
    entries.push({
      url: `/${locale}/${page}/`,
      locale,
      pageType: 'service',
      indexableExpected: true,
      canonicalExpected: `/${locale}/${page}/`,
      hreflangCluster: page,
      sourceFile: `src/pages/[locale]/${page}.astro`,
    });
  }

  for (const category of getCategories(locale)) {
    entries.push({
      url: `/${locale}/${category.slug}/`,
      locale,
      pageType: 'category',
      indexableExpected: true,
      canonicalExpected: `/${locale}/${category.slug}/`,
      hreflangCluster: `category:${category.id}`,
      sourceFile: 'src/pages/[locale]/[category]/index.astro',
    });
  }

  for (const calculator of getCalculators(locale)) {
    entries.push({
      url: calculator.fullPath,
      locale,
      pageType: 'calculator',
      indexableExpected: true,
      canonicalExpected: calculator.fullPath,
      hreflangCluster: isRuOnlyCalculator(calculator.id)
        ? `calculator:${calculator.id}:ru-only`
        : `calculator:${calculator.id}`,
      sourceFile: 'src/pages/[locale]/[category]/[calculator].astro',
    });
  }
}

for (const [url, canonicalExpected] of [
  ['/calculators/', '/ru/calculators/'],
  ['/about/', '/ru/about/'],
  ['/contacts/', '/ru/contacts/'],
  ['/privacy/', '/ru/privacy/'],
  ['/finance/*', '/ru/finance/*'],
  ['/currency/*', '/ru/currency/*'],
  ['/sport/*', '/ru/sport/*'],
  ['/building/*', '/ru/building/*'],
  ['/date-time/*', '/ru/date-time/*'],
] as const) {
  entries.push({
    url,
    locale: 'ru',
    pageType: 'redirect',
    indexableExpected: false,
    canonicalExpected,
    hreflangCluster: 'none',
    sourceFile: 'functions/_middleware.js',
  });
}

for (const [url, sourceFile] of [
  ['/robots.txt', 'src/pages/robots.txt.ts'],
  ['/sitemap.xml', 'src/pages/sitemap.xml.ts'],
  ['/opensearch.xml', 'src/pages/opensearch.xml.ts'],
  ['/site.webmanifest', 'public/site.webmanifest'],
] as const) {
  entries.push({
    url,
    locale: 'x-default',
    pageType: 'technical',
    indexableExpected: false,
    canonicalExpected: '',
    hreflangCluster: 'none',
    sourceFile,
  });
}

export const urlInventory = entries;
