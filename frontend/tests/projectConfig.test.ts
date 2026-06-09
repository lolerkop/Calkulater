import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { calculators } from '../src/data/calculators';

function readProjectFile(relativePath: string): string {
  const filePath = fileURLToPath(new URL(`../../${relativePath}`, import.meta.url));
  return readFileSync(filePath, 'utf8');
}

describe('project configuration', () => {
  it('keeps a safe frontend env example tracked', () => {
    const envExample = readProjectFile('frontend/.env.example');
    const rootGitignore = readProjectFile('.gitignore');
    const frontendGitignore = readProjectFile('frontend/.gitignore');

    expect(envExample).toContain('PUBLIC_SITE_URL=');
    expect(envExample).toContain('PUBLIC_CONTACT_EMAIL=');
    expect(envExample).toContain('PUBLIC_GA_ID=');
    expect(envExample).toContain('PUBLIC_YM_ID=');
    expect(envExample).toContain('PUBLIC_SHOW_AD_PLACEHOLDERS=');
    expect(envExample).not.toMatch(/G-[A-Z0-9]{6,}/);
    expect(envExample).not.toMatch(/https:\/\/[^ \n]*\.[a-z]{2,}/i);
    expect(rootGitignore).toContain('!.env.example');
    expect(rootGitignore).toContain('!**/.env.example');
    expect(frontendGitignore).toContain('!.env.example');
  });

  it('has a single command for local quality checks', () => {
    const packageJson = JSON.parse(readProjectFile('frontend/package.json'));

    expect(packageJson.scripts.test).toBe('vitest run');
    expect(packageJson.scripts.build).toBe('astro build');
    expect(packageJson.scripts['dev:local']).toContain('--port 4321');
    expect(packageJson.scripts['preview:local']).toContain('--port 4322');
    expect(packageJson.scripts.check).toContain('vitest run');
    expect(packageJson.scripts.check).toContain('astro build');
    expect(packageJson.scripts.check).toContain('verify-public-assets');
    expect(packageJson.scripts.check).toContain('verify-text-encoding');
    expect(packageJson.scripts.check).toContain('verify-dist-content-sanity');
    expect(packageJson.scripts.check).toContain('verify-dist-links');
    expect(packageJson.scripts.check).toContain('verify-dist-seo');
    expect(packageJson.scripts.check).toContain('verify-dist-sitemap');
    expect(packageJson.scripts.check).toContain('verify-dist-hosting-files');
    expect(packageJson.scripts.check).toContain('verify-dist-a11y');
    expect(packageJson.scripts.check).toContain('verify-dist-production-hygiene');
    expect(packageJson.scripts.check).toContain('verify-dist-performance-budget');
  });

  it('keeps extension endpoints usable in local dev without slash redirects', () => {
    const astroConfig = readProjectFile('frontend/astro.config.mjs');

    expect(astroConfig).toContain("trailingSlash: 'ignore'");
    expect(astroConfig).toContain("format: 'directory'");
  });

  it('ships static hosting headers without locking future analytics or ads', () => {
    const headers = readProjectFile('frontend/public/_headers');

    expect(headers).toContain('X-Content-Type-Options: nosniff');
    expect(headers).toContain('Referrer-Policy: strict-origin-when-cross-origin');
    expect(headers).toContain('X-Frame-Options: SAMEORIGIN');
    expect(headers).toContain('Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()');
    expect(headers).toContain('/opensearch.xml');
    expect(headers).toContain('application/opensearchdescription+xml; charset=utf-8');
    expect(headers).toContain('/site.webmanifest');
    expect(headers).toContain('application/manifest+json; charset=utf-8');
    expect(headers).not.toContain('Content-Security-Policy');
  });

  it('announces the standard i18n sitemap URL in robots.txt', () => {
    const robots = readProjectFile('frontend/src/pages/robots.txt.ts');

    expect(robots).toContain('/sitemap.xml');
    expect(robots).not.toContain('/sitemap-index.xml');
  });

  it('guards built pages from duplicated SEO metadata', () => {
    const verifier = readProjectFile('frontend/scripts/verify-dist-seo.mjs');

    expect(verifier).toContain('const seenTitles = new Map()');
    expect(verifier).toContain('const seenDescriptions = new Map()');
    expect(verifier).toContain('const seenCanonicals = new Map()');
    expect(verifier).toContain('duplicate ${label}');
    expect(verifier).toContain("rememberUnique(seenTitles, title.trim(), file, 'title')");
    expect(verifier).toContain("rememberUnique(seenDescriptions, description.trim(), file, 'meta description')");
    expect(verifier).toContain("rememberUnique(seenCanonicals, canonical, file, 'canonical')");
  });

  it('keeps production hygiene checks strict about demo analytics IDs', () => {
    const verifier = readProjectFile('frontend/scripts/verify-dist-production-hygiene.mjs');

    expect(verifier).toContain('const isValidGaId');
    expect(verifier).toContain('const isValidYmId');
    expect(verifier).toContain("!/^G-X+$/i.test(value)");
    expect(verifier).toContain("value !== '12345678'");
    expect(verifier).toContain('placeholder Google Analytics ID leaked into built HTML');
    expect(verifier).toContain('placeholder Yandex Metrica ID leaked into built HTML');
  });

  it('documents the static deployment shape and remaining production setup', () => {
    const readme = readProjectFile('README.md');

    expect(readme).toContain(`${calculators.length} онлайн-калькуляторами`);
    expect(readme).toContain('npm run check');
    expect(readme).toContain('проверку битой кириллицы');
    expect(readme).toContain('VPS для текущей версии не нужен');
    expect(readme).toContain('PUBLIC_SITE_URL');
    expect(readme).toContain('PUBLIC_CONTACT_EMAIL');
    expect(readme).toContain('G-XXXXXXXXXX');
    expect(readme).toContain('12345678');
    expect(readme).toContain('Перед публикацией');
  });
});
