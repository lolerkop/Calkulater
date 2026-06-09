import { describe, expect, it } from 'vitest';
import { GET } from '../src/pages/opensearch.xml';
import { SITE } from '../src/config/site';

describe('OpenSearch description', () => {
  it('exposes browser-discoverable search against the Russian catalog query parameter', async () => {
    const response = await GET({} as Parameters<typeof GET>[0]);
    const body = await response.text();

    expect(response.headers.get('Content-Type')).toContain('application/opensearchdescription+xml');
    expect(body).toContain('<OpenSearchDescription');
    expect(body).toContain(`<ShortName>${SITE.name}</ShortName>`);
    expect(body).toContain('<InputEncoding>UTF-8</InputEncoding>');
    expect(body).toContain('template="http://localhost:3000/ru/calculators/?q={searchTerms}"');
    expect(body).toContain('/favicon.svg');
  });
});
