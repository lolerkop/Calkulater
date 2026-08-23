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
    expect(packageJson.scripts.typecheck).toBe('tsc --noEmit');
    expect(packageJson.scripts.build).toBe('astro build');
    expect(packageJson.scripts['dev:local']).toContain('--port 4321');
    expect(packageJson.scripts['preview:local']).toContain('--port 4322');
    expect(packageJson.scripts.check).toContain('vitest run');
    expect(packageJson.scripts.check).toContain('npm run typecheck');
    expect(packageJson.scripts.check).toContain('npm run build');
    expect(packageJson.scripts.prebuild).toContain('rates:verify');
    expect(packageJson.scripts['performance:ci']).toContain('run-performance-ci');
    expect(packageJson.scripts.check).toContain('verify-public-assets');
    expect(packageJson.scripts.check).toContain('verify-text-encoding');
    expect(packageJson.scripts.check).toContain('verify-dist-content-sanity');
    expect(packageJson.scripts.check).toContain('verify-dist-links');
    expect(packageJson.scripts.check).toContain('verify-dist-seo');
    expect(packageJson.scripts.check).toContain('verify-dist-sitemap');
    expect(packageJson.scripts.check).toContain('verify-dist-hosting-files');
    expect(packageJson.scripts.check).toContain('verify-dist-privacy');
    expect(packageJson.scripts.check).toContain('verify-dist-a11y');
    expect(packageJson.scripts.check).toContain('verify-dist-production-hygiene');
    expect(packageJson.scripts.check).toContain('verify-dist-performance-budget');
  });

  it('keeps live currency updates out of the build and check lifecycle', () => {
    const packageJson = JSON.parse(readProjectFile('frontend/package.json'));

    expect(packageJson.scripts['rates:update']).toBe('node scripts/update-currency-rates.mjs');
    expect(packageJson.scripts.prebuild).toBe('npm run rates:verify');
    expect(packageJson.scripts.build).not.toContain('rates:update');
    expect(packageJson.scripts.check).not.toContain('rates:update');
  });

  it('commits a successful scheduled currency check even when rates are unchanged', () => {
    const workflow = readProjectFile('.github/workflows/currency-rates.yml');

    expect(workflow).toContain("cron: '17 5 * * *'");
    expect(workflow).toContain('npm run rates:update');
    expect(workflow).toContain('npm run rates:verify');
    expect(workflow).toContain('src/data/currencyRates.generated.ts');
    expect(workflow).toContain('src/data/currencyRatesStatus.generated.ts');
    expect(workflow).toContain('artifacts_changed=true');
    expect(workflow).toContain("if: steps.changes.outputs.artifacts_changed == 'true'");
    expect(workflow).toContain('the successful check status will be committed');
    expect(workflow).not.toContain('git push --force');
  });

  it('matches the currency guard allowlist against repository-root relative paths', () => {
    const workflow = readProjectFile('.github/workflows/currency-rates.yml');
    const allowLine = workflow
      .split(/\r?\n/)
      .find((line) => line.trim().startsWith('frontend/src/data/currencyRates.generated.ts'));

    expect(workflow).toContain('git status --porcelain --untracked-files=all');
    expect(allowLine).toBeDefined();

    const allowed = allowLine!.trim().replace(/\)$/, '').split('|');
    const guardAccepts = (path: string) => allowed.includes(path);

    // `git status --porcelain` reports paths from the repository root even though the
    // job runs in `frontend`, so the guard has to allow the prefixed paths.
    expect(guardAccepts('frontend/src/data/currencyRates.generated.ts')).toBe(true);
    expect(guardAccepts('frontend/src/data/currencyRatesStatus.generated.ts')).toBe(true);
    expect(guardAccepts('src/data/currencyRatesStatus.generated.ts')).toBe(false);
    expect(guardAccepts('frontend/package.json')).toBe(false);
    expect(allowed).toHaveLength(2);
    expect(allowed.some((pattern) => pattern.includes('*'))).toBe(false);
    expect(workflow).toContain('Unexpected files changed; refusing to commit:');
  });

  it('watches production on a schedule without touching the release pipeline', () => {
    const workflow = readProjectFile('.github/workflows/production-monitor.yml');
    const triggers = workflow.slice(workflow.indexOf('\non:'), workflow.indexOf('\npermissions:'));

    // Scheduled and manual only: an edge-side change arrives without a commit,
    // so a push-triggered job would never see it - and this must not gate a release.
    expect(triggers).toContain('schedule:');
    expect(triggers).toContain('workflow_dispatch:');
    expect(triggers).not.toContain('push:');
    expect(triggers).not.toContain('pull_request:');

    // Daily, on an off-peak minute rather than the top of the hour.
    const cron = triggers.match(/cron: '(\d+) (\d+) \* \* \*'/);
    expect(cron).not.toBeNull();
    expect(Number(cron![1])).toBeGreaterThan(0);

    // Observation only: no write access, no commits, no pushes.
    expect(workflow).toContain('permissions:\n  contents: read');
    expect(workflow).not.toContain('contents: write');
    expect(workflow).not.toMatch(/git (push|commit)/);

    // It runs the production verifier and nothing heavier.
    expect(workflow).toContain('npm run verify:production-external-hosts');
    expect(workflow).not.toContain('release:check');
    expect(workflow).not.toContain('npm run build');
    expect(workflow).toMatch(/timeout-minutes: \d+/);
    expect(workflow).toContain('group: production-monitor');

    // The release pipeline must not depend on this monitor.
    const quality = readProjectFile('.github/workflows/quality.yml');
    expect(quality).not.toContain('production-monitor');
    expect(quality).not.toContain('verify:production-external-hosts');
  });

  it('pins one Node version across every workflow and declares the floor in package.json', () => {
    const workflows = ['quality', 'currency-rates', 'production-monitor'].map((name) => ({
      name,
      yaml: readProjectFile(`.github/workflows/${name}.yml`),
    }));

    const versions = workflows.map(({ name, yaml }) => {
      const declared = [...yaml.matchAll(/node-version:\s*(\S+)/g)].map((match) => match[1]);
      expect(declared, `${name}.yml declares exactly one node-version`).toHaveLength(1);
      return declared[0];
    });

    // One runtime everywhere: a split would mean some job silently tests on a
    // version nobody else runs.
    expect(new Set(versions).size).toBe(1);
    expect(versions[0]).toBe('22.23.2');
    for (const version of versions) expect(version.startsWith('20')).toBe(false);

    // package.json states the real floor - lighthouse needs >=22.19, which is the
    // highest minimum in the tree - and the pinned runtime has to satisfy it.
    const { engines } = JSON.parse(readProjectFile('frontend/package.json'));
    expect(engines.node).toBe('>=22.19');

    const [major, minor] = versions[0].split('.').map(Number);
    const [floorMajor, floorMinor] = engines.node.replace('>=', '').split('.').map(Number);
    expect(major > floorMajor || (major === floorMajor && minor >= floorMinor)).toBe(true);
  });

  it('keeps extension endpoints usable in local dev without slash redirects', () => {
    const astroConfig = readProjectFile('frontend/astro.config.mjs');

    expect(astroConfig).toContain("trailingSlash: 'ignore'");
    expect(astroConfig).toContain("format: 'directory'");
  });

  it('ships static hosting headers without locking future analytics or ads', () => {
    const headers = readProjectFile('frontend/public/_headers');

    expect(headers).toContain('X-Content-Type-Options: nosniff');
    expect(headers).toContain('Strict-Transport-Security: max-age=31536000');
    expect(headers).toContain('Referrer-Policy: strict-origin-when-cross-origin');
    expect(headers).toContain('X-Frame-Options: SAMEORIGIN');
    expect(headers).toContain('Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()');
    expect(headers).toContain('/opensearch.xml');
    expect(headers).toContain('application/opensearchdescription+xml; charset=utf-8');
    expect(headers).toContain('/site.webmanifest');
    expect(headers).toContain('application/manifest+json; charset=utf-8');
    expect(headers).toContain('Content-Security-Policy-Report-Only');
    expect(headers).toContain('Cache-Control: public, max-age=0, must-revalidate');
    expect(headers).toContain('/_astro/*');
    expect(headers).toContain('/fonts/*');
    expect(headers).toContain('Cache-Control: public, max-age=31536000, immutable');
    expect(headers).not.toMatch(/fonts\.(?:googleapis|gstatic)\.com/);
    expect(headers).not.toMatch(/^\s*Content-Security-Policy:/m);
    expect(headers).not.toMatch(/Strict-Transport-Security:.*(?:includeSubDomains|preload)/i);
  });

  it('keeps reproducible Lighthouse budgets and reports', () => {
    const packageJson = JSON.parse(readProjectFile('frontend/package.json'));
    const budget = JSON.parse(readProjectFile('frontend/performance-budget.json'));
    const runner = readProjectFile('frontend/scripts/run-lighthouse.mjs');

    expect(packageJson.devDependencies.lighthouse).toBe('13.4.1');
    expect(budget.runs).toBe(3);
    // Целей семь: к шести исходным добавлена страница с таблицей результата и
    // сноской об усечении — профиль, которого в наборе не было. Закрепляется не
    // только число, но и состав: подмена цели без изменения их количества
    // раньше прошла бы незамеченной.
    expect(budget.targets).toHaveLength(7);
    expect(budget.targets.map((target: { slug: string }) => target.slug)).toEqual([
      'root',
      'ru-home',
      'currency',
      'income-tax',
      'tile',
      'table-note',
      'uk-bmi',
    ]);
    expect(budget.budgets.largestContentfulPaintMs).toBe(2500);
    expect(budget.budgets.cumulativeLayoutShift).toBe(0.1);
    expect(runner).toContain("ReportGenerator.generateReport(report, 'html')");
    expect(runner).toContain('budgetIssues(summary, config.budgets)');
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

    // Число сверяется по основе слова, а не по одной падежной форме: «с 71
    // онлайн-калькулятором» и «с 76 онлайн-калькуляторами» оба грамматичны, и
    // жёсткая форма заставляла бы писать README неправильно ради теста.
    expect(readme).toContain(`${calculators.length} онлайн-калькулятор`);
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
