import { expect, test } from '@playwright/test';

const homePaths = ['/ru/', '/en/', '/uk/', '/de/', '/es/'];
const recentHeadings: Record<string, { newItems: string; otherItems: string }> = {
  ru: { newItems: 'Новые калькуляторы', otherItems: 'Другие калькуляторы' },
  en: { newItems: 'New calculators', otherItems: 'Other calculators' },
  uk: { newItems: 'Нові калькулятори', otherItems: 'Інші калькулятори' },
  de: { newItems: 'Neue Rechner', otherItems: 'Weitere Rechner' },
  es: { newItems: 'Calculadoras nuevas', otherItems: 'Otras calculadoras' },
};

test.beforeEach(async ({ page }) => {
  await page.route('**/*', (route) => {
    const hostname = new URL(route.request().url()).hostname;
    return hostname === '127.0.0.1' || hostname === 'localhost' ? route.continue() : route.abort();
  });
});

for (const home of homePaths) {
  test(`${home}: every public category shows subject guidance with working choices`, async ({ page }) => {
    test.setTimeout(90_000);
    await page.goto(home);
    const categoryPaths = await page.getByTestId('home-category-stats').locator('a').evaluateAll((links) =>
      links.map((link) => new URL((link as HTMLAnchorElement).href).pathname),
    );
    expect(categoryPaths).toHaveLength(16);
    const locale = home.split('/')[1];
    for (const path of categoryPaths) {
      await page.goto(path);
      await expect(page.getByTestId('category-guidance')).toBeVisible();
      await expect(page.getByTestId('category-guidance-checklist')).toBeVisible();
      await expect(page.getByTestId('category-guidance-mistake')).toBeVisible();
      const newCount = Number(await page.getByTestId('category-hero-stats').locator(':scope > div').nth(2).locator('div').first().innerText());
      const expectedHeading = newCount > 0 ? recentHeadings[locale].newItems : recentHeadings[locale].otherItems;
      await expect(page.getByTestId('category-recent-heading')).toHaveText(expectedHeading);
      const choices = page.getByTestId('category-guidance-choices').locator('a');
      await expect(choices).toHaveCount(2);
      const urls = await choices.evaluateAll((links) => links.map((link) => (link as HTMLAnchorElement).href));
      for (const url of urls) {
        const response = await page.request.get(url);
        expect(response.status(), `${path} -> ${url}`).toBe(200);
      }
    }
  });
}
