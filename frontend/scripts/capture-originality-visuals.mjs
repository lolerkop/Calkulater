import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = process.env.ORIGINALITY_VISUAL_BASE_URL || 'http://127.0.0.1:4325';
const output = path.resolve(process.env.ORIGINALITY_VISUAL_OUTPUT_DIR || 'reports/originality-visual-wave-1');
fs.mkdirSync(output, { recursive: true });
const cases = process.env.ORIGINALITY_VISUAL_CASES_PATH
  ? JSON.parse(fs.readFileSync(process.env.ORIGINALITY_VISUAL_CASES_PATH, 'utf8'))
  : [
  ['ru-compound', '/ru/finance/compound-interest/?principal=1000&rate=12&years=1&compounding=year&topUp=100&frequency=month', true],
  ['en-bmi', '/en/fitness/bmi-calculator/?height=180&weight=80', true],
  ['de-kinetic', '/de/physik/kinetische-energie-rechner/', true],
  ['es-loan', '/es/finanzas/calculadora-prestamo/?amount=120000&rate=0&term=12&termUnit=months&oneTimeFee=2500', true],
  ['uk-privacy', '/uk/privacy/', false],
  ['de-contacts', '/de/contacts/', false],
  ['ru-home', '/ru/', false],
  ['en-category', '/en/physics/', false],
];
const browser = await chromium.launch();
const fixturesOnly = process.env.ORIGINALITY_VISUAL_FIXTURES_ONLY === '1';
const observations = fixturesOnly
  ? JSON.parse(fs.readFileSync(path.join(output, 'manifest.json'), 'utf8')).observations.filter((row) => !row.fixture)
  : [];
try {
  for (const [slug, route, calculator] of fixturesOnly ? [] : cases) {
    for (const [layout, width] of [['mobile', 390], ['desktop', 1365]]) {
      const context = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.route('**/*', (request) => new URL(request.request().url()).origin === new URL(base).origin ? request.continue() : request.abort());
      const response = await page.goto(base + route);
      if (response?.status() !== 200) throw new Error(`${route}: ${response?.status()}`);
      if (calculator) await page.getByTestId('calc-result').waitFor();
      await page.evaluate(() => document.fonts.ready);
      const fullPath = path.join(output, `${slug}-${layout}.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      const overflow = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const captures = [fullPath];
      if (calculator) {
        for (const region of ['calc-form', 'calc-result-wrap', 'calculator-details', 'calculator-fields']) {
          const locator = page.getByTestId(region);
          if (await locator.count()) {
            const regionPath = path.join(output, `${slug}-${layout}-${region}.png`);
            // Keep sticky navigation out of cropped regions; full-page capture and axe
            // above still inspect the real unmodified page.
            await locator.screenshot({ path: regionPath, style: '[data-testid="site-header"] { visibility: hidden !important; }' });
            captures.push(regionPath);
          }
        }
      }
      observations.push({ slug, route, layout, overflow, axeViolations: axe.violations.map(({ id, impact, nodes }) => ({ id, impact, selectors: nodes.flatMap((node) => node.target) })), captures });
      await context.close();
    }
  }

  // Render the real configured consent component without loading external SDKs.
  const source = fs.readFileSync('src/components/Analytics.astro', 'utf8');
  const languageStatement = source.match(/const language = [^;]+;/)[0];
  const copyExpression = source.match(/const copy = ([\s\S]*?)\[language\];/)[1];
  const start = source.indexOf('    <section\n      id="analytics-consent"');
  const end = source.indexOf('    <script is:inline define:vars=');
  const styles = await (await fetch(base + '/en/privacy/')).text();
  const styleTags = (styles.match(/<link[^>]+rel="stylesheet"[^>]*>/g) || []).join('');
  for (const locale of ['ru', 'en', 'uk', 'de', 'es']) {
    const copy = vm.runInNewContext(`const locale = ${JSON.stringify(locale)}; ${languageStatement} (${copyExpression})[language]`);
    const markup = source.slice(start, end).replace(/\{copy\.(\w+)\}/g, (_, key) => copy[key]).replace('href={`/${locale}/privacy/#analytics`}', `href="/${locale}/privacy/#analytics"`).replace('      hidden', '');
    const context = await browser.newContext({ viewport: { width: 390, height: 844 } });
    const page = await context.newPage();
    await page.route('**/*', async (request) => {
      if (request.request().isNavigationRequest()) await request.fulfill({ contentType: 'text/html; charset=utf-8', body: `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Consent visual fixture</title>${styleTags}</head><body><main class="p-5"><h1>Calcuway</h1>${markup}</main></body></html>` });
      else if (new URL(request.request().url()).origin === new URL(base).origin) await request.continue();
      else await request.abort();
    });
    await page.goto(base + `/${locale}/privacy/`);
    await page.evaluate(() => document.fonts.ready);
    const capture = path.join(output, `consent-${locale}-mobile.png`);
    await page.screenshot({ path: capture });
    const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    observations.push({ slug: `consent-${locale}`, layout: 'mobile', fixture: 'Real component DOM/copy and built CSS; no external SDK or account', axeViolations: axe.violations.map(({ id, impact }) => ({ id, impact })), captures: [capture] });
    await context.close();
  }
} finally { await browser.close(); }
fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify({ capturedAt: new Date().toISOString(), base, scope: `${observations.filter((row) => !row.fixture).length} actual page/layout samples and ${observations.filter((row) => row.fixture).length} configured consent fixtures; separate from all-route smoke and human review`, visualReview: 'PENDING_AI_VISUAL_INSPECTION', humanReview: 'NEEDS_HUMAN_REVIEW', observations }, null, 2) + '\n');
console.log(JSON.stringify({ samples: observations.length, axeViolations: observations.reduce((sum, row) => sum + row.axeViolations.length, 0), output }));
