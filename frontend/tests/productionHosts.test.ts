import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import {
  ALLOWED_THIRD_PARTY_HOSTS,
  FORBIDDEN_ANALYTICS_DOMAINS,
  SITE_DOMAIN,
  classifyHost,
  reviewHosts,
} from '../scripts/lib/production-hosts.mjs';

// The hostnames a real browser session currently observes on production.
const OBSERVED_PRODUCTION_HOSTS = [
  'calcuway.com',
  'static.cloudflareinsights.com',
  'cloudflareinsights.com',
];

describe('production external hosts', () => {
  it('accepts the hosts production actually contacts today', () => {
    const review = reviewHosts(OBSERVED_PRODUCTION_HOSTS);

    expect(review.ok).toBe(true);
    expect(review['first-party']).toEqual(['calcuway.com']);
    expect(review['allowed-third-party']).toEqual([
      'cloudflareinsights.com',
      'static.cloudflareinsights.com',
    ]);
    expect(review['unknown-third-party']).toEqual([]);
    expect(review['forbidden-analytics']).toEqual([]);
  });

  it('treats the site and its subdomains as first party, and look-alikes as not', () => {
    expect(classifyHost(SITE_DOMAIN)).toBe('first-party');
    expect(classifyHost(`www.${SITE_DOMAIN}`)).toBe('first-party');
    expect(classifyHost(`assets.${SITE_DOMAIN}`)).toBe('first-party');

    // A domain that merely ends with the same letters is a third party.
    expect(classifyHost('notcalcuway.com')).toBe('unknown-third-party');
    expect(classifyHost('calcuway.com.evil.example')).toBe('unknown-third-party');
  });

  it('rejects consent-gated analytics while GA and Metrica IDs are unset', () => {
    for (const hostname of [
      'googletagmanager.com',
      'www.googletagmanager.com',
      'google-analytics.com',
      'region1.google-analytics.com',
      'mc.yandex.ru',
    ]) {
      expect(classifyHost(hostname)).toBe('forbidden-analytics');
    }

    const review = reviewHosts([...OBSERVED_PRODUCTION_HOSTS, 'www.googletagmanager.com']);
    expect(review.ok).toBe(false);
    expect(review['forbidden-analytics']).toEqual(['www.googletagmanager.com']);
  });

  it('rejects any unknown third-party host', () => {
    expect(classifyHost('evil.example')).toBe('unknown-third-party');

    const review = reviewHosts([...OBSERVED_PRODUCTION_HOSTS, 'evil.example']);
    expect(review.ok).toBe(false);
    expect(review['unknown-third-party']).toEqual(['evil.example']);
  });

  it('allows the Cloudflare hosts by exact name rather than by wildcard', () => {
    for (const hostname of ALLOWED_THIRD_PARTY_HOSTS) {
      expect(classifyHost(hostname)).toBe('allowed-third-party');
      expect(hostname).not.toContain('*');
    }

    // A sibling endpoint on the same domain is not admitted implicitly.
    expect(classifyHost('other.cloudflareinsights.com')).toBe('unknown-third-party');
  });

  it('keeps the verifier out of the build and check lifecycle', () => {
    const packageJson = JSON.parse(
      readFileSync(fileURLToPath(new URL('../package.json', import.meta.url)), 'utf8'),
    );
    const { scripts } = packageJson;

    expect(scripts['verify:production-external-hosts']).toBe(
      'node scripts/verify-production-external-hosts.mjs',
    );
    // It needs the public internet, so it must never gate a local build.
    for (const lifecycle of ['prebuild', 'build', 'check', 'release:check', 'test']) {
      expect(scripts[lifecycle]).not.toContain('verify:production-external-hosts');
      expect(scripts[lifecycle]).not.toContain('verify-production-external-hosts');
    }
  });

  it('states the policy the verifier reports on', () => {
    expect(FORBIDDEN_ANALYTICS_DOMAINS).toContain('googletagmanager.com');
    expect(FORBIDDEN_ANALYTICS_DOMAINS).toContain('google-analytics.com');
    expect(FORBIDDEN_ANALYTICS_DOMAINS).toContain('mc.yandex.ru');
    expect(ALLOWED_THIRD_PARTY_HOSTS).toHaveLength(2);
  });
});
