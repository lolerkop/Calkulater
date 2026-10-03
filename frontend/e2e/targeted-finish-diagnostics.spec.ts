import { test, expect } from '@playwright/test';
import { execFileSync } from 'node:child_process';
import { fixture, hydrated, checkDocument, checkResult, documentSnapshot, checkFields } from './helpers/calculatorRouteSmoke';

const routes = [
  '/ru/math/kvartili/', '/ru/building/rafters/',
  '/ru/finance/credit-calculator/', '/en/finance/loan-calculator/',
  '/uk/fitness/kalkulyator-bmi/', '/de/heimwerken/farbrechner/',
  '/es/finanzas/calculadora-descuento/', '/ru/geometry/parallelogram/',
  '/ru/converters/convert-illuminance/', '/en/converters/length-converter/',
  '/ru/computers/text-word-char-count/', '/ru/math/divisors/',
];
function resources() {
  const rows = execFileSync('ps', ['-axo', 'pid,ppid,rss,pcpu'], { encoding: 'utf8' })
    .trim().split('\n').slice(1).map(line => line.trim().split(/\s+/).map(Number));
  const descendants = new Set([process.ppid]);
  for (let pass = 0; pass < 8; pass++) {
    for (const [pid, ppid] of rows) if (descendants.has(ppid)) descendants.add(pid);
  }
  const own = rows.filter(([pid]) => descendants.has(pid));
  return { rootPid: process.ppid, processCount: own.length,
    rssKiB: own.reduce((sum, row) => sum + row[2], 0),
    pcpu: own.reduce((sum, row) => sum + row[3], 0),
    workerRSSBytes: process.memoryUsage().rss };
}
for (const route of routes) {
  test(`timings ${route}`, async ({ page, request }, info) => {
    const row = fixture.rows.find(row => row.route === route)!;
    const timing: Record<string, number> = {};
    const errors: string[] = [], consoleErrors: string[] = [], networkErrors: string[] = [];
    const before = resources();
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    page.on('requestfailed', request => networkErrors.push(`${request.url()}: ${request.failure()?.errorText}`));
    let phase = 'http', status = 'FAIL', failure: string | undefined;
    const measure = async (name: string, operation: () => Promise<unknown>) => {
      phase = name;
      const start = performance.now();
      try { return await operation(); } finally { timing[name] = performance.now() - start; }
    };
    try {
      await page.setViewportSize({ width: 390, height: 950 });
      await measure('http', async () => {
        const response = await request.get(route + '?' + row.scenario.query, { timeout: 25_000 });
        expect(response.status()).toBe(200); await response.body();
      });
      await measure('navigation', async () => {
        const response = await page.goto(route + '?' + row.scenario.query, { waitUntil: 'domcontentloaded', timeout: 25_000 });
        expect(response?.status()).toBe(200);
      });
      await measure('hydration', () => hydrated(page, row));
      await measure('assertions', () => checkDocument(page, row));
      await measure('reload', () => page.reload({ waitUntil: 'domcontentloaded', timeout: 25_000 }));
      await measure('reloadHydration', () => hydrated(page, row));
      await measure('reloadAssertions', async () => {
        checkResult((await documentSnapshot(page)).result, row); await checkFields(page, row);
      });
      expect(errors).toEqual([]); expect(consoleErrors).toEqual([]); expect(networkErrors).toEqual([]);
      status = 'PASS';
    } catch (error) {
      failure = error instanceof Error ? error.message : String(error); throw error;
    } finally {
      await info.attach('route-diagnostic', { body: JSON.stringify({ route, query: row.scenario.query, status, phase, failure,
        timing, before, after: resources(), pageErrors: errors, consoleErrors, networkErrors }, null, 2), contentType: 'application/json' });
    }
  });
}
