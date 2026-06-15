import { describe, expect, it, vi } from 'vitest';
import { onRequest as redirectWww } from '../functions/_middleware.js';
import { onRequest as protectCatalogFacets } from '../functions/[locale]/calculators.js';

describe('edge SEO policies', () => {
  it('redirects www to the apex host while preserving path and query', async () => {
    const response = await redirectWww({
      request: new Request('https://www.calcuway.com/ru/calculators/?tag=new'),
      next: vi.fn(),
    });

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toBe('https://calcuway.com/ru/calculators/?tag=new');
  });

  it('keeps legacy path redirects working through the root middleware', async () => {
    const response = await redirectWww({
      request: new Request('https://www.calcuway.com/finance/credit-calculator/?amount=100'),
      next: vi.fn(),
    });

    expect(response.status).toBe(301);
    expect(response.headers.get('location')).toBe(
      'https://calcuway.com/ru/finance/credit-calculator/?amount=100',
    );
  });

  it('adds noindex, follow only to catalog facet URLs', async () => {
    const next = vi.fn(async () => new Response('catalog'));
    for (const param of ['tag', 'category', 'sort', 'q']) {
      const faceted = await protectCatalogFacets({
        request: new Request(`https://calcuway.com/ru/calculators/?${param}=value`),
        next,
      });
      expect(faceted.headers.get('X-Robots-Tag')).toBe('noindex, follow');
    }
    const clean = await protectCatalogFacets({
      request: new Request('https://calcuway.com/ru/calculators/'),
      next,
    });

    expect(clean.headers.get('X-Robots-Tag')).toBeNull();
    expect(next).toHaveBeenCalledTimes(5);
  });
});
