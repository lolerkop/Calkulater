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
});
