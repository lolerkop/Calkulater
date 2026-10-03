import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const contact = process.env.PUBLIC_CONTACT_EMAIL || '';
const privacy = process.env.PUBLIC_PRIVACY_EMAIL || contact;
const locales = ['ru', 'en', 'uk', 'de', 'es'];
test.skip(!contact, 'This additional regression requires a build with the public production contact; fallback behavior has separate coverage.');

for (const width of [320, 1365]) for (const locale of locales) for (const kind of ['contacts', 'privacy']) {
  test(`configured-release-contact/${locale}/${kind}/${width}`, async ({ page }, info) => {
    expect(contact, 'Run the candidate with its centralized production configuration').not.toBe('');
    await page.context().route('**/*', route => new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort());
    await page.setViewportSize({ width, height: 950 });
    const response = await page.goto(`/${locale}/${kind}/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', locale);
    const mail = page.getByTestId(kind === 'contacts' ? 'contact-channel' : 'privacy-contact');
    await expect(mail).toHaveText(kind === 'contacts' ? contact : privacy);
    await expect(mail).toHaveAttribute('href', `mailto:${kind === 'contacts' ? contact : privacy}`);
    await expect(page.locator('main a[href^="mailto:"]')).toHaveCount(kind === 'contacts' ? 2 : 1);
    await expect(page.getByTestId('privacy-contact-unavailable')).toHaveCount(0);
    const boxes = await page.locator('main a[href^="mailto:"]').evaluateAll(elements => elements.map(element => {
      const b = element.getBoundingClientRect();
      return { text: element.textContent?.trim(), left: b.left, right: b.right, viewport: innerWidth };
    }));
    for (const box of boxes) {
      expect(box.left).toBeGreaterThanOrEqual(0);
      expect(box.right).toBeLessThanOrEqual(box.viewport + 1);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBeLessThanOrEqual(1);
    await mail.scrollIntoViewIfNeeded();
    const axe = await new AxeBuilder({ page }).include(kind === 'contacts' ? '[data-testid="contact-channel"]' : '[data-testid="privacy-section-contact"]')
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
    await info.attach('configured-contact', { body: JSON.stringify({ locale, kind, width, boxes, violations: axe.violations, incomplete: axe.incomplete }), contentType: 'application/json' });
    expect(axe.violations).toEqual([]);
  });
}
