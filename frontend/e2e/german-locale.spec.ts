import { expect, test, type Page } from '@playwright/test';
import { getCalculators, getCategories } from '../src/lib/i18n';

// Немецкая локаль в браузере.
//
// Статические ворота видят только собранный HTML, а результат калькулятора
// дорисовывает остров после гидратации: подписи и значения там переводятся
// другим путём и в dist не попадают вовсе. Именно там и жили русские подписи,
// которые ни одни ворота артефакта поймать не могли. Поэтому проверка
// открывает каждую немецкую страницу, перебирает все переключатели и списки
// и требует, чтобы в видимом тексте не осталось кириллицы.

const german = getCalculators('de');
const CYRILLIC = /[А-Яа-яЁё]+/g;
const JUNK = /NaN|Infinity|undefined|\[object Object\]/;

async function expectGermanText(page: Page, where: string): Promise<void> {
  const text = await page.locator('main').innerText();
  expect([...new Set(text.match(CYRILLIC) ?? [])], where).toEqual([]);
}

test.describe.configure({ mode: 'parallel' });

test('немецкий каталог не выродился', () => {
  expect(german.length).toBeGreaterThan(300);
  expect(new Set(german.map((c) => c.category)).size).toBe(getCategories('de').length);
});

for (const calculator of german) {
  test(`немецкая страница ${calculator.id} остаётся немецкой во всех режимах`, async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(String(error)));

    await page.goto(calculator.fullPath!);
    await expect(page.locator('html')).toHaveAttribute('lang', 'de');
    const result = page.getByTestId('calc-result');
    await expect(result).toBeVisible({ timeout: 15000 });

    const check = async (step: string) => {
      await expectGermanText(page, `${calculator.id} :: ${step}`);
      expect(await result.innerText(), `${calculator.id} :: ${step}`).not.toMatch(JUNK);
    };
    await check('значения по умолчанию');

    let touched = 0;
    let absent = 0;
    let locked = 0;
    for (const field of calculator.fields) {
      for (const option of field.options ?? []) {
        const button = page.getByTestId(`field-${field.name}-opt-${String(option.value)}`);
        const select = page.locator(`select[data-testid="field-${field.name}"]`);
        const control = (await button.count()) ? button.first()
          : (await select.count()) ? select.first()
          : null;
        if (!control) {
          // Поле, скрытое условием showIf, в этой ветке не отрисовано вовсе.
          expect(field.showIf, `${calculator.id}.${field.name}: элемента нет без showIf`).toBeTruthy();
          absent += 1;
          continue;
        }
        if (await control.isDisabled()) {
          // Выделенная страница валютной пары фиксирует валюты: списки есть,
          // но выключены, и это часть замысла, а не поломка.
          locked += 1;
          continue;
        }
        if (await button.count()) await control.click();
        else await control.selectOption(String(option.value));
        touched += 1;
        await check(`${field.name}=${String(option.value)}`);
      }
    }
    // Каждый вариант учтён: нажат, скрыт условием или намеренно выключен.
    // Молчаливая пропажа означала бы, что селекторы разошлись с разметкой и
    // перебор режимов ничего не проверял.
    const variants = calculator.fields.reduce((sum, f) => sum + (f.options?.length ?? 0), 0);
    expect(touched + absent + locked, `${calculator.id}: варианты учтены`).toBe(variants);

    expect(errors, `${calculator.id}: ошибки страницы`).toEqual([]);
  });
}

// Ширины экрана. Немецкие слова длиннее русских и английских, и первое, что
// ломается от длинного слова, — горизонтальная прокрутка страницы.
for (const width of [320, 360, 375, 390, 414, 430, 768, 1024, 1280, 1440]) {
  test(`немецкая страница не уезжает вбок при ширине ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of [
      '/de/',
      '/de/calculators/',
      '/de/finanzen/kreditrechner/',
      '/de/heimwerken/ziegelrechner/',
      '/de/fitness/koerperfett-rechner/',
    ]) {
      await page.goto(route);
      const overflow = await page.evaluate(() =>
        document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, `${route} @ ${width}`).toBeLessThanOrEqual(1);
      await expectGermanText(page, `${route} @ ${width}`);
    }
  });
}

test('немецкая форма проходится с клавиатуры и считает без мыши', async ({ page }) => {
  await page.goto('/de/finanzen/kreditrechner/');
  const result = page.getByTestId('calc-result');
  await expect(result).toBeVisible();

  const amount = page.getByTestId('field-amount');
  await amount.focus();
  await expect(amount).toBeFocused();
  await amount.press('ControlOrMeta+a');
  await amount.pressSequentially('250000');
  await expect(result).toContainText('€');
  await expectGermanText(page, 'после ввода с клавиатуры');

  // Табуляция доходит до кнопок формы, и у каждой остановки есть доступное имя.
  const names: string[] = [];
  for (let i = 0; i < 14; i += 1) {
    await page.keyboard.press('Tab');
    const stop = await page.evaluate(() => {
      const el = document.activeElement as HTMLElement | null;
      if (!el || el === document.body) return null;
      const labelled = el.id ? document.querySelector(`label[for="${el.id}"]`) : null;
      const name = el.getAttribute('aria-label')
        ?? labelled?.textContent
        ?? el.getAttribute('data-testid')
        ?? el.innerText
        ?? '';
      return name.trim().slice(0, 40);
    });
    if (stop !== null) names.push(stop);
  }
  expect(names.length).toBeGreaterThan(5);
  expect(names.every((name) => name.length > 0)).toBe(true);
  expect(names.join(' ')).not.toMatch(CYRILLIC);
});
