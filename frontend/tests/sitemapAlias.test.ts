import { describe, expect, it } from 'vitest';
import { GET } from '../src/pages/sitemap.xml';

describe('i18n sitemap endpoint', () => {
  it('exposes localized URLs with hreflang alternates', async () => {
    const response = await GET({} as Parameters<typeof GET>[0]);
    const body = await response.text();

    expect(response.headers.get('Content-Type')).toContain('application/xml');
    expect(body).toContain('<urlset');
    expect(body).toContain('xmlns:xhtml="http://www.w3.org/1999/xhtml"');
    expect(body).toContain('<loc>http://localhost:3000/ru/</loc>');
    expect(body).toContain('<loc>http://localhost:3000/en/</loc>');
    expect(body).toContain('<loc>http://localhost:3000/uk/</loc>');
    expect(body).toContain('hreflang="ru"');
    expect(body).toContain('hreflang="en"');
    expect(body).toContain('hreflang="uk"');
    expect(body).toContain('hreflang="x-default"');
    expect(body).toContain('/en/finance/loan-calculator/');
    expect(body).toContain('/uk/finansy/kalkulyator-kredytu/');
    expect(body).toContain('/ru/finance/vat-calculator/');
    for (const hiddenLocale of ['es', 'de', 'fr', 'pt', 'it', 'pl', 'nl', 'ro', 'id', 'tr', 'vi', 'cs', 'sk', 'hu']) {
      expect(body).not.toContain(`<loc>http://localhost:3000/${hiddenLocale}/</loc>`);
      expect(body).not.toContain(`hreflang="${hiddenLocale}"`);
    }
    expect(body).not.toContain('/en/finance/vat-calculator/');
    expect(body).not.toContain('/uk/finansy/vat-calculator/');
    expect(body).not.toContain('/en/finance/income-tax-calculator/');
    expect(body).not.toContain('/uk/finansy/income-tax-calculator/');
  });
});
