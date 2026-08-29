import { expect, test } from '@playwright/test';
import { locales } from '../src/lib/i18n';

test('full-parity language switcher links resolve to equivalent pages', async ({ page, request }) => {
  await page.goto('/ru/currency/currency-converter/');

  const switcher = page.locator('[data-language-switcher]');
  const links = switcher.locator('a');
  // По ссылке на каждую локаль, включая текущую. Число выводится из состава
  // сборки: с появлением немецкого выписанная буквами тройка устарела бы, а
  // утверждение стало бы слабее — теперь оно требует полного набора.
  await expect(links).toHaveCount(locales.length);
  await expect(switcher).toContainText('UA');
  await expect(switcher).not.toContainText('UK');
  await expect(switcher).toContainText('DE');

  const hrefs = await links.evaluateAll((elements) => elements.map((element) => (element as HTMLAnchorElement).href));
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), href).toBeLessThan(400);
  }

  const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((elements) =>
    elements.map((element) => element.getAttribute('hreflang')),
  );
  expect(hreflangs).toEqual([...locales, 'x-default']);
});

test('немецкая страница полного паритета доступна и связана взаимно', async ({ page }) => {
  // Немецкая локаль выпускается этой фазой целиком, поэтому у калькулятора
  // полного паритета есть немецкая страница, а её переключатель ведёт обратно.
  await page.goto('/de/waehrungen/waehrungsrechner/');
  await expect(page.locator('html')).toHaveAttribute('lang', 'de');

  const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((elements) =>
    elements.map((element) => element.getAttribute('hreflang')),
  );
  expect(hreflangs).toEqual([...locales, 'x-default']);

  const switcher = page.locator('[data-language-switcher]');
  await expect(switcher.locator('a')).toHaveCount(locales.length);
  const back = switcher.locator('a[href^="/ru/"]');
  await expect(back).toHaveAttribute('href', '/ru/currency/currency-converter/');

  // Кириллицы в видимом тексте немецкой страницы не бывает, включая
  // результат, который дорисовывает остров после гидратации.
  await expect(page.getByTestId('calc-result')).toBeVisible();
  const text = await page.locator('main').innerText();
  expect(text.match(/[А-Яа-яЁё]+/g) ?? []).toEqual([]);
});

test('RU-only calculator does not link or hreflang to false translations', async ({ page, request }) => {
  await page.goto('/ru/finance/income-tax-calculator/');

  const switcher = page.locator('[data-language-switcher]');
  await expect(switcher.locator('a')).toHaveCount(1);
  // По одной отключённой ссылке на каждую локаль, кроме текущей: калькулятор
  // русскоязычный по существу и в остальных локалях не существует.
  // Отключены все локали, кроме текущей: калькулятор русскоязычный по существу.
  // Немецкий среди них — он тоже не предлагает ложного перевода.
  await expect(switcher.locator('[aria-disabled="true"]')).toHaveCount(locales.length - 1);
  await expect(page.getByTestId('locale-specific-notice')).toBeVisible();

  const href = await switcher.locator('a').getAttribute('href');
  const response = await request.get(href!);
  expect(response.status()).toBeLessThan(400);

  const hreflangs = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((elements) =>
    elements.map((element) => element.getAttribute('hreflang')),
  );
  expect(hreflangs).toEqual(['ru']);
});
