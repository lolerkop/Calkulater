import { describe, expect, it } from 'vitest';

describe('about page transparency', () => {
  it('explains calculations, sources, limits and error reporting in every public locale', async () => {
    const about = (await import('../src/pages/[locale]/about.astro?raw')).default;

    expect(about).toContain('canonical={path}');
    expect(about).toContain('getAlternatesForPage');
    expect(about).toContain('data-testid="about-details"');
    expect(about).toContain('data-testid="about-contact"');
    expect(about).toContain('SITE.email ? `mailto:${SITE.email}`');
    for (const locale of ['ru', 'en', 'uk', 'de', 'es']) {
      expect(about).toMatch(new RegExp(`  ${locale}: \\{\\n    heading:`));
    }
    for (const key of ['methodTitle', 'dataTitle', 'limitsTitle', 'contactTitle']) {
      expect(about.match(new RegExp(`${key}:`, 'g'))?.length).toBe(6);
    }
  });
});
