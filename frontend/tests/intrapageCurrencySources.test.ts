import { afterEach, describe, expect, it } from 'vitest';
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { generatedRateSources } from '../src/data/currencyRates.generated';

const script = fileURLToPath(new URL('../scripts/verify-dist-intrapage-content.mjs', import.meta.url));
const temporaryDirectories: string[] = [];
const provider = generatedRateSources.ecb;
const label = 'European Central Bank: euro foreign exchange reference rates';
const route = '/en/currency/usd-to-eur/';

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) rmSync(directory, { recursive: true, force: true });
});

function runGate(options: {
  id?: string;
  actualLabel?: string;
  actualHref?: string;
  fixtureLabel?: string;
  fixtureHref?: string;
  duplicate?: boolean;
}) {
  const directory = mkdtempSync(join(tmpdir(), 'calcuway-intrapage-source-'));
  temporaryDirectories.push(directory);
  const fixturePath = join(directory, 'e2e/fixtures/originality-final-calculator-route-smoke.json');
  const htmlPath = join(directory, 'dist', route, 'index.html');
  mkdirSync(join(directory, 'e2e/fixtures'), { recursive: true });
  mkdirSync(join(directory, 'dist', route), { recursive: true });
  const fixture = JSON.stringify({
    expectedRouteCount: 1,
    rows: [{
      id: options.id ?? 'usd-to-eur', locale: 'en', route,
      howToUse: ['Enter an amount.'],
      body: { tips: 'Enter an amount.', howItWorks: 'Use the saved reference coefficient.' },
      editorial: {
        method: 'Use the saved reference coefficient.', limitation: 'This excludes exchange fees.',
        sources: [{ label: options.fixtureLabel ?? `${label} — 2000-01-01`, href: options.fixtureHref ?? provider.url }],
      },
    }],
  });
  writeFileSync(fixturePath, fixture);
  const actualLink = `<a href="${options.actualHref ?? provider.url}">${options.actualLabel ?? `${label} — ${provider.date}`}</a>`;
  writeFileSync(htmlPath, `<!doctype html><html><body>
    <section data-testid="calculator-how-to-use"><ol><li id="step-1">— Enter an amount.</li></ol></section>
    <section id="details" data-testid="calculator-details"><p>Use the saved reference coefficient.</p></section>
    <section data-testid="calculator-source-review"><dl><dd>This excludes exchange fees.</dd></dl>
      <a data-testid="method-section-link" href="#details">See the calculation method</a>
      ${actualLink}${options.duplicate ? actualLink : ''}
    </section>
    <script type="application/ld+json">${JSON.stringify({ '@type': 'HowTo', step: [{ text: 'Enter an amount.', url: `https://calcuway.com${route}#step-1` }] })}</script>
  </body></html>`);
  const result = spawnSync(process.execPath, [script], { cwd: directory, encoding: 'utf8' });
  expect(readFileSync(fixturePath, 'utf8')).toBe(fixture);
  return result;
}

describe('built HTML intrapage gate with refreshed currency source dates', () => {
  it('accepts the current provider date without rewriting the frozen fixture', () => {
    const result = runGate({});
    expect(result.status, result.stderr).toBe(0);
    expect(JSON.parse(result.stdout).errors).toBe(0);
  });

  it.each([
    ['stale actual date', { actualLabel: `${label} — 2000-01-01` }],
    ['changed provider name', { actualLabel: `Another Bank — ${provider.date}` }],
    ['changed provider URL', { actualHref: 'https://example.com/other-provider' }],
    ['duplicated source link', { duplicate: true }],
    ['missing current provider metadata', { fixtureHref: 'https://example.com/unknown-provider' }],
    ['malformed frozen date suffix', { fixtureLabel: `${label} — yesterday` }],
  ])('rejects %s', (_, options) => {
    const result = runGate(options);
    expect(result.status, result.stdout).toBe(1);
    expect(JSON.parse(result.stdout).errors).toBeGreaterThan(0);
  });

  it('keeps noncurrency dated labels frozen', () => {
    const oldLabel = `${label} — 2000-01-01`;
    const unchanged = runGate({ id: 'percentage-calculator', actualLabel: oldLabel });
    expect(unchanged.status, unchanged.stderr).toBe(0);
    const changed = runGate({ id: 'percentage-calculator' });
    expect(changed.status, changed.stdout).toBe(1);
  });
});
