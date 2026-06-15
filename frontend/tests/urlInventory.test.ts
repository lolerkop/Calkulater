import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { GET } from '../src/pages/sitemap.xml';
import { currencyPairIds, urlInventory } from '../src/data/urlInventory';
import { getCalculatorById, locales } from '../src/lib/i18n';

const ruOnlyCalculatorIds = ['deposit-calculator', 'income-tax-calculator', 'vat-calculator'];

describe('SEO URL inventory', () => {
  it('keeps every indexable URL self-canonical and query-free', () => {
    expect(urlInventory).toHaveLength(117);
    const indexable = urlInventory.filter((entry) => entry.indexableExpected);
    expect(new Set(indexable.map((entry) => entry.url)).size).toBe(indexable.length);

    for (const entry of indexable) {
      expect(entry.url).toBe(entry.canonicalExpected);
      expect(entry.url).not.toContain('?');
    }
  });

  it('matches the indexable inventory to sitemap canonical URLs', async () => {
    const response = await GET({} as Parameters<typeof GET>[0]);
    const sitemap = await response.text();
    const sitemapPaths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map((match) => new URL(match[1]).pathname)
      .sort();
    const inventoryPaths = urlInventory
      .filter((entry) => entry.indexableExpected)
      .map((entry) => entry.url)
      .sort();

    expect(inventoryPaths).toEqual(sitemapPaths);
  });

  it('keeps the exported CSV synchronized', () => {
    const csv = readFileSync(new URL('../reports/url-inventory.csv', import.meta.url), 'utf8');
    expect(csv.trim().split(/\r?\n/)).toHaveLength(urlInventory.length + 1);
    expect(csv).toContain('url,locale,page_type,indexable_expected,canonical_expected,hreflang_cluster,source_file');
  });

  it('canonicalizes catalog facets to the clean catalog URL', () => {
    const facets = urlInventory.filter((entry) => entry.pageType === 'facet');
    expect(facets).toHaveLength(12);
    for (const entry of facets) {
      expect(entry.indexableExpected).toBe(false);
      expect(entry.canonicalExpected).not.toContain('?');
    }
  });

  it('records every legacy redirect source as non-indexable', () => {
    const redirects = urlInventory.filter((entry) => entry.pageType === 'redirect');
    expect(redirects).toHaveLength(9);
    expect(redirects.every((entry) => !entry.indexableExpected)).toBe(true);
  });

  it('keeps dedicated currency pairs indexable with self-canonical URLs', () => {
    for (const id of currencyPairIds) {
      const pairPages = urlInventory.filter((entry) => entry.hreflangCluster === `calculator:${id}`);
      expect(pairPages).toHaveLength(3);
      expect(pairPages.every((entry) => entry.indexableExpected && entry.url === entry.canonicalExpected)).toBe(true);
    }
  });

  it('keeps RU-only calculators in single-page hreflang clusters', () => {
    for (const id of ruOnlyCalculatorIds) {
      const pages = urlInventory.filter((entry) => entry.hreflangCluster === `calculator:${id}:ru-only`);
      expect(pages).toHaveLength(1);
      expect(pages[0].locale).toBe('ru');
      expect(pages[0].indexableExpected).toBe(true);
    }
  });

  it('keeps currency pair intent and content distinct in every locale', () => {
    for (const locale of locales) {
      const generic = getCalculatorById('currency-converter', locale)!;
      const pairs = currencyPairIds.map((id) => getCalculatorById(id, locale)!);

      expect(new Set(pairs.map((pair) => pair.seoTitle)).size).toBe(pairs.length);
      expect(new Set(pairs.map((pair) => pair.h1)).size).toBe(pairs.length);
      for (const pair of pairs) {
        expect(pair.longDescription).not.toBe(generic.longDescription);
        expect(pair.fields.find((field) => field.name === 'from')?.readOnly).toBe(true);
        expect(pair.fields.find((field) => field.name === 'to')?.readOnly).toBe(true);
      }
    }
  });
});
