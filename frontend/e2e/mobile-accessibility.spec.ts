import { expect, test } from '@playwright/test';
import { getCategories } from '../src/lib/i18n';

const viewports = [
  { width: 320, height: 740 },
  { width: 375, height: 812 },
  { width: 390, height: 844 },
  { width: 414, height: 896 },
];

const priorityCalculatorPaths = [
  '/ru/finance/income-tax-calculator/',
  '/ru/finance/vat-calculator/',
  '/ru/currency/currency-converter/',
  '/ru/currency/usd-to-eur/',
  '/ru/date-time/working-days-calculator/',
  '/ru/building/tile-calculator/',
  '/uk/fitness/kalkulyator-bmi/',
];

for (const viewport of viewports) {
  test(`calculator form is reachable on mobile ${viewport.width}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/ru/finance/income-tax-calculator/');

    await expect(page.getByTestId('calculator-h1')).toBeVisible();
    await expect(page.getByTestId('calc-form')).toBeVisible();
    const firstInput = await page.getByTestId('field-amount').boundingBox();
    expect(firstInput).not.toBeNull();
    expect(firstInput!.y + firstInput!.height).toBeLessThanOrEqual(viewport.height);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  });
}

test('priority calculator pages keep the first field in the initial 320px viewport', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });

  for (const path of priorityCalculatorPaths) {
    await page.goto(path);
    const firstControl = page.getByTestId('calc-form').locator('input, select, textarea').first();
    await expect(firstControl).toBeVisible();
    const box = await firstControl.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.y + box!.height, path).toBeLessThanOrEqual(740);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), path).toBe(true);
  }
});

test('form errors and results expose accessible live regions', async ({ page }) => {
  await page.goto('/ru/sport/bmi-calculator/');

  await expect(page.getByTestId('field-height')).toHaveAttribute('inputmode', 'decimal');
  await page.getByTestId('field-height').fill('0');
  await expect(page.getByTestId('field-error-height')).toHaveAttribute('role', 'alert');
  await expect(page.getByTestId('field-height')).toHaveAttribute('aria-describedby', /f-height-(help|error)/);
  await expect(page.getByTestId('calc-result-wrap')).toHaveAttribute('aria-live', 'polite');
  await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
  await expect(page.getByTestId('calc-result-empty')).toHaveCount(0);
});

test('excluded dates use a date picker and removable chips', async ({ page }) => {
  await page.goto('/ru/date-time/working-days-calculator/');

  await expect(page.getByTestId('field-excludedDates')).toHaveAttribute('type', 'date');
  await page.getByTestId('field-excludedDates').fill('2026-02-10');
  await page.getByTestId('excluded-date-add').click();
  await expect(page.getByTestId('excluded-date-chip')).toContainText('2026-02-10');
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await page.getByTestId('excluded-date-remove-2026-02-10').click();
  await expect(page.getByTestId('excluded-date-chip')).toHaveCount(0);

  await page.goto('/ru/date-time/working-days-calculator/?excludedDates=2026-02-31');
  await expect(page.getByTestId('field-error-excludedDates')).toBeVisible();
  await expect(page.getByTestId('excluded-date-chip')).toContainText('2026-02-31');
});

test('skip link, FAQ and responsive navigation work from the keyboard', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/ru/finance/percent-calculator/');

  await page.keyboard.press('Tab');
  await expect(page.getByTestId('skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('page-main')).toBeFocused();

  // Полоса разделов одна на обе раскладки. Прежде здесь проверялось, что
  // настольная копия скрыта, а мобильная показана; копий больше нет, поэтому
  // контракт сильнее: на узком экране полоса видима и несёт ВСЕ разделы.
  const nav = page.getByTestId('header-nav');
  await expect(nav).toBeVisible();
  const разделы = nav.locator('a[data-testid^="header-nav-"]');
  expect(await разделы.count(), 'разделы в полосе').toBe(getCategories('ru').length + 1);

  const summary = page.getByTestId('faq-item-0').locator('summary');
  await summary.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('faq-item-0')).toHaveAttribute('open', '');
});

test('calculator form has a logical tab order and no keyboard trap', async ({ page }) => {
  await page.goto('/ru/finance/income-tax-calculator/');

  await page.getByTestId('field-amount').focus();
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('field-period-opt-month')).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByTestId('field-period-opt-year')).toBeFocused();

  let escapedForm = false;
  for (let index = 0; index < 30; index += 1) {
    await page.keyboard.press('Tab');
    escapedForm = await page.evaluate(() => {
      const form = document.querySelector('[data-testid="calc-form"]');
      return Boolean(form && document.activeElement && !form.contains(document.activeElement));
    });
    if (escapedForm) break;
  }
  expect(escapedForm).toBe(true);
});

test('primary controls meet target-size and contrast baselines', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('/ru/finance/income-tax-calculator/');

  const audit = await page.evaluate(() => {
    const luminance = (color: string) => {
      const channels = color.match(/[\d.]+/g)?.slice(0, 3).map(Number) ?? [0, 0, 0];
      const linear = channels.map((channel) => {
        const value = channel / 255;
        return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
      });
      return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
    };
    const contrast = (foreground: string, background: string) => {
      const first = luminance(foreground);
      const second = luminance(background);
      return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05);
    };
    const visible = (element: Element) => {
      const style = getComputedStyle(element);
      const rect = element.getBoundingClientRect();
      return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    };
    const controls = Array.from(document.querySelectorAll('[data-testid="site-header"] a, [data-testid="calc-form"] input, [data-testid="calc-form"] select, [data-testid="calc-form"] textarea, [data-testid="calc-form"] button'))
      .filter(visible)
      .map((element) => {
        const rect = element.getBoundingClientRect();
        return { testId: element.getAttribute('data-testid'), width: rect.width, height: rect.height };
      });
    const textSelectors = ['[data-testid="calculator-h1"]', '[data-testid="calc-form-header"] h2', '.field-label', '[id$="-help"]'];
    const text = textSelectors.flatMap((selector) => Array.from(document.querySelectorAll(selector)))
      .filter(visible)
      .map((element) => {
        const style = getComputedStyle(element);
        let background = style.backgroundColor;
        let parent = element.parentElement;
        while (background === 'rgba(0, 0, 0, 0)' && parent) {
          background = getComputedStyle(parent).backgroundColor;
          parent = parent.parentElement;
        }
        if (background === 'rgba(0, 0, 0, 0)') background = 'rgb(255, 255, 255)';
        return { element: element.id || element.tagName.toLowerCase(), ratio: contrast(style.color, background) };
      });
    return { controls, text };
  });

  expect(audit.controls.every((control) => control.width >= 24 && control.height >= 24)).toBe(true);
  expect(audit.text.every((item) => item.ratio >= 4.5)).toBe(true);
});
