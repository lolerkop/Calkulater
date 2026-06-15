import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

for (const route of [
  '/ru/',
  '/ru/contacts/',
  '/ru/privacy/',
  '/ru/finance/income-tax-calculator/',
  '/uk/fitness/kalkulyator-bmi/',
]) {
  test(`axe has no WCAG A/AA violations on ${route}`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa']).analyze();
    const violations = results.violations.map((violation) => ({
      id: violation.id,
      targets: violation.nodes.map((node) => node.target.join(' ')),
    }));
    expect(violations).toEqual([]);
  });
}

test('focus indicator is visible and every calculator control has a label', async ({ page }) => {
  await page.goto('/ru/finance/income-tax-calculator/');
  const controls = page.getByTestId('calc-form').locator('input, select, textarea');
  const count = await controls.count();

  for (let index = 0; index < count; index += 1) {
    const control = controls.nth(index);
    const id = await control.getAttribute('id');
    expect(id).toBeTruthy();
    await expect(page.locator(`label[for="${id}"]`)).toHaveCount(1);
  }

  await controls.first().focus();
  const focusStyle = await controls.first().evaluate((element) => {
    const style = getComputedStyle(element);
    return { outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth, boxShadow: style.boxShadow };
  });
  expect(
    focusStyle.outlineStyle !== 'none'
    || focusStyle.outlineWidth !== '0px'
    || focusStyle.boxShadow !== 'none',
  ).toBe(true);
});
