import fs from 'node:fs';
import path from 'node:path';
import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const base = process.env.ORIGINALITY_VISUAL_BASE_URL || 'http://127.0.0.1:4331';
const output = path.resolve('reports/originality-visual-category-wave-2');
fs.mkdirSync(output, { recursive: true });
const cases = [
  ['ru-physics-guidance', '/ru/physics/', true],
  ['de-physics-guidance', '/de/physik/', true],
  ['de-contacts-complete', '/de/contacts/', false],
];
const browser = await chromium.launch();
const observations = [];
try {
  for (const [slug, route, guidance] of cases) {
    for (const [layout, width] of [['mobile', 390], ['desktop', 1440]]) {
      const context = await browser.newContext({ viewport: { width, height: 844 }, reducedMotion: 'reduce' });
      const page = await context.newPage();
      await page.route('**/*', (request) => new URL(request.request().url()).origin === new URL(base).origin ? request.continue() : request.abort());
      const response = await page.goto(base + route);
      if (response?.status() !== 200) throw new Error(`${route}: ${response?.status()}`);
      await page.evaluate(() => document.fonts.ready);
      const captures = [];
      const fullPath = path.join(output, `${slug}-${layout}.png`);
      await page.screenshot({ path: fullPath, fullPage: true });
      captures.push(fullPath);
      if (guidance) {
        const cardPath = path.join(output, `${slug}-${layout}-guidance.png`);
        await page.getByTestId('category-guidance').screenshot({ path: cardPath });
        captures.push(cardPath);
        await page.getByTestId('category-useful-links').scrollIntoViewIfNeeded();
        const viewportPath = path.join(output, `${slug}-${layout}-guidance-viewport.png`);
        await page.screenshot({ path: viewportPath });
        captures.push(viewportPath);
      }
      const overflow = await page.evaluate(() => ({ viewport: innerWidth, document: document.documentElement.scrollWidth }));
      const axe = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      observations.push({
        slug, route, layout, width, overflow,
        axeViolations: axe.violations.map(({ id, impact, nodes }) => ({ id, impact, selectors: nodes.flatMap((node) => node.target) })),
        captures,
      });
      await context.close();
    }
  }
} finally {
  await browser.close();
}
fs.writeFileSync(path.join(output, 'manifest.json'), JSON.stringify({
  capturedAt: new Date().toISOString(), base,
  renderingMode: process.env.ORIGINALITY_VISUAL_MODE || 'local-dev',
  scope: 'Two category locales at two widths, plus complete German contacts at both widths; external requests blocked.',
  visualReview: 'PENDING_AI_VISUAL_INSPECTION',
  humanReview: 'NEEDS_HUMAN_REVIEW',
  observations,
}, null, 2) + '\n');
console.log(JSON.stringify({ samples: observations.length, axeViolations: observations.reduce((sum, row) => sum + row.axeViolations.length, 0), output }));
