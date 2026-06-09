import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { SITE } from '../src/config/site';

describe('site web manifest', () => {
  it('contains install metadata for browsers and mobile devices', () => {
    const manifestPath = fileURLToPath(new URL('../public/site.webmanifest', import.meta.url));
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

    expect(manifest.name).toBe(SITE.fullName);
    expect(manifest.short_name).toBe(SITE.name);
    expect(manifest.description).toBe(SITE.description);
    expect(manifest.start_url).toBe('/');
    expect(manifest.scope).toBe('/');
    expect(manifest.theme_color).toBe('#E63946');
    expect(manifest.shortcuts).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Все калькуляторы',
          url: '/calculators/',
        }),
        expect.objectContaining({
          name: 'Финансовые калькуляторы',
          url: '/finance/',
        }),
        expect.objectContaining({
          name: 'Калькуляторы ремонта',
          url: '/building/',
        }),
        expect.objectContaining({
          name: 'Спортивные калькуляторы',
          url: '/sport/',
        }),
      ]),
    );
    for (const shortcut of manifest.shortcuts) {
      expect(shortcut.icons).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
          }),
        ]),
      );
    }
    expect(manifest.icons).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          src: '/favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
        }),
      ]),
    );
  });
});
