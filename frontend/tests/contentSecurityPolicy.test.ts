import { describe, expect, it, vi } from 'vitest';
import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { buildContentSecurityPolicy } from '../lib/security/content-security-policy.mjs';
import { CONTENT_SECURITY_POLICY, INLINE_SCRIPT_HASHES } from '../lib/security/csp.generated.mjs';
import { enforceHeaders, inlineScriptHashes } from '../scripts/lib/csp-build.mjs';
import { onRequest } from '../functions/_middleware.js';

describe('enforced content security policy', () => {
  it('hashes executable script bytes and leaves JSON-LD data blocks out of the allowlist', () => {
    const code = 'window.example = "unchanged";\n';
    const expected = `sha256-${createHash('sha256').update(code).digest('base64')}`;
    expect(inlineScriptHashes(`<script>${code}</script><script type="application/ld+json">{"@type":"Organization"}</script><script src="/nav-focus.js"></script>`)).toEqual([expected]);
    expect(inlineScriptHashes(`<script TYPE='module'>${code.replace(/\n/g, '\r\n')}</script>`)).toEqual([expected]);
    expect(inlineScriptHashes(`<script>${code} </script>`)).not.toEqual([expected]);
  });

  it('permits generated hydration and consent hashes without arbitrary inline code or eval', () => {
    const policy = buildContentSecurityPolicy(INLINE_SCRIPT_HASHES);
    const scripts = policy.split('; ').find((directive) => directive.startsWith('script-src '))!;
    for (const hash of INLINE_SCRIPT_HASHES) expect(scripts).toContain(`'${hash}'`);
    expect(scripts).not.toMatch(/unsafe-inline|unsafe-eval|data:|blob:/);
    expect(policy).toContain("script-src-attr 'none'");
    expect(policy).toContain("object-src 'none'");
    expect(policy).toContain("frame-ancestors 'self'");
    expect(policy).toContain('upgrade-insecure-requests');
    expect(() => buildContentSecurityPolicy(["unsafe-inline'"])).toThrow('Invalid inline script');
  });

  it('preserves the existing consent-gated analytics and Cloudflare beacon permissions', () => {
    const policy = buildContentSecurityPolicy();
    const directives = Object.fromEntries(policy.split('; ').map((entry) => {
      const [name, ...sources] = entry.split(' ');
      return [name, sources];
    }));
    expect(directives['script-src']).toEqual(expect.arrayContaining(['https://www.googletagmanager.com', 'https://mc.yandex.ru', 'https://static.cloudflareinsights.com']));
    expect(directives['connect-src']).toEqual(expect.arrayContaining(['https://*.google-analytics.com', 'https://mc.yandex.ru', 'https://mc.yandex.com', 'https://mc.yandex.md', 'https://cloudflareinsights.com']));
    expect(directives['img-src']).toEqual(expect.arrayContaining(['https://*.google-analytics.com', 'https://mc.yandex.com']));
    expect(directives['frame-src']).toContain('https://mc.yandex.md');
    // Third-party ad code is currently absent; adding it must review the policy.
    expect(policy).not.toContain('googlesyndication.com');
    expect(directives['frame-src']).not.toContain('blob:');
    expect(directives['script-src']).not.toContain('https:');
  });

  it('emits one matching static header and fails before exceeding Cloudflare line limits', () => {
    const template = readFileSync(fileURLToPath(new URL('../public/_headers', import.meta.url)), 'utf8');
    const headers = enforceHeaders(template, CONTENT_SECURITY_POLICY);
    expect(headers).toContain(`/*\n  Content-Security-Policy: ${CONTENT_SECURITY_POLICY}\n`);
    expect(headers).not.toContain('Content-Security-Policy-Report-Only:');
    expect(headers).toContain('/_astro/*');
    expect(() => enforceHeaders(template, 'x'.repeat(2000))).toThrow('2,000');
    expect(() => enforceHeaders('/*\n  Content-Security-Policy: unsafe', CONTENT_SECURITY_POLICY)).toThrow('generate CSP');
  });

  it('enforces the identical policy on Functions HTML and localized 404s without changing redirect/indexing behavior', async () => {
    for (const [host, status] of [['calcuway.com', 200], ['calcuway.com', 404], ['candidate.calcuway.pages.dev', 404]] as const) {
      const response = await onRequest({
        request: new Request(`https://${host}/uk/missing/`),
        next: vi.fn(async () => new Response('<html>page</html>', { status, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Content-Security-Policy-Report-Only': 'obsolete', 'X-Test': 'preserved' } })),
      });
      expect(response.status).toBe(status);
      expect(response.headers.get('Content-Security-Policy')).toBe(CONTENT_SECURITY_POLICY);
      expect(response.headers.get('Content-Security-Policy-Report-Only')).toBeNull();
      expect(response.headers.get('X-Test')).toBe('preserved');
      expect(response.headers.get('X-Robots-Tag')).toBe(host === 'calcuway.com' ? null : 'noindex');
      expect(await response.text()).toBe('<html>page</html>');
    }
    const response = await onRequest({ request: new Request('https://calcuway.com/_astro/runtime.js'), next: vi.fn(async () => new Response('code', { headers: { 'Content-Type': 'text/javascript' } })) });
    expect(response.headers.get('Content-Security-Policy')).toBeNull();
  });
});
