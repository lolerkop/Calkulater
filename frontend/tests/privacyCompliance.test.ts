import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

function readProjectFile(relativePath: string): string {
  return readFileSync(fileURLToPath(new URL(`../${relativePath}`, import.meta.url)), 'utf8');
}

describe('privacy compliance', () => {
  it('requires explicit consent before optional analytics loads', () => {
    const analytics = readProjectFile('src/components/Analytics.astro');

    expect(analytics).toContain("calcuway.analytics-consent.v1");
    expect(analytics).toContain("savedChoice === 'granted'");
    expect(analytics).toContain('const loadAnalytics = () =>');
    expect(analytics).toContain('analyticsConfigured &&');
    expect(analytics).toContain("window[`ga-disable-${gaId}`] = true");
    expect(analytics).toContain("window.ym(Number(ymId), 'destruct')");
    expect(analytics).not.toContain('<noscript>');
    expect(analytics).not.toContain('webvisor: true');
  });

  it('keeps a complete data inventory with stable columns', () => {
    const inventory = readProjectFile('reports/privacy-analytics-inventory.csv');
    const rows = inventory.trim().split(/\r?\n/);

    expect(rows[0]).toBe('name,type,provider,purpose,personal_data,retention,consent_required,source_file');
    expect(rows.length).toBeGreaterThanOrEqual(8);
    expect(inventory).toContain('Google Analytics 4');
    expect(inventory).toContain('Yandex Metrica');
    expect(inventory).toContain('Calculator query parameters');
    expect(inventory).toContain('HTTP request and error logs');
  });

  it('documents every required policy section', () => {
    const privacy = readProjectFile('src/pages/[locale]/privacy.astro');
    for (const id of ['operator', 'data', 'local', 'share-links', 'storage', 'analytics', 'processors', 'logs', 'retention', 'rights', 'contact', 'updated', 'changes']) {
      expect(privacy).toContain(`['${id}'`);
    }
    expect(privacy).toContain('2026-06-15');
  });

  it('documents Cloudflare Web Analytics separately from the consent-gated analytics', () => {
    const privacy = readProjectFile('src/pages/[locale]/privacy.astro');
    const publicLocales = ['ru', 'en', 'uk'] as const;

    // The policy used to claim that without GA/Metrica IDs the site has no analytics
    // at all. Cloudflare Pages injects its own beacon regardless, so that blanket
    // wording must stay retired.
    for (const retired of [
      'Если ID не заданы, баннер и аналитика отсутствуют.',
      'With no IDs, neither the banner nor analytics is rendered.',
      'Без ID банера й аналітики немає.',
    ]) {
      expect(privacy).not.toContain(retired);
    }

    const localeBlock = (locale: (typeof publicLocales)[number]) => {
      const start = privacy.indexOf(`\n  ${locale}: {`);
      const next = publicLocales[publicLocales.indexOf(locale) + 1];
      const end = next ? privacy.indexOf(`\n  ${next}: {`) : privacy.indexOf('\n}[language];');
      expect(start).toBeGreaterThan(-1);
      expect(end).toBeGreaterThan(start);
      return privacy.slice(start, end);
    };
    const sectionBody = (block: string, id: string) =>
      block.match(new RegExp(`\\['${id}', '[^']*', '([^']*)'\\]`))?.[1] ?? '';

    // Locale-specific way of saying "runs independently of those IDs and the banner".
    const independence = { ru: 'не зависит', en: 'depends neither', uk: 'не залежить' };

    for (const locale of publicLocales) {
      const block = localeBlock(locale);
      const analytics = sectionBody(block, 'analytics');
      const processors = sectionBody(block, 'processors');

      // Cloudflare Web Analytics is named and described as its own mechanism.
      expect(analytics).toContain('Cloudflare Web Analytics');
      expect(analytics).toContain('Cloudflare Pages');
      expect(analytics).toContain('Web Vitals');
      expect(analytics).toContain(independence[locale]);
      // The verified storage behaviour is stated.
      expect(analytics).toContain('cookies');
      expect(analytics).toContain('localStorage');
      expect(analytics).toContain('sessionStorage');
      // The consent-gated services keep their own, unchanged description.
      expect(analytics).toContain('Google Analytics 4');
      // Cloudflare is named as the hosting/CDN processor instead of an anonymous one.
      expect(processors).toContain('Cloudflare');
      expect(processors).not.toMatch(/Хостинг\/CDN|Hosting\/CDN/);
    }
  });
});
