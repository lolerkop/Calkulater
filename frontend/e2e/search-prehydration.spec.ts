import { expect, test, type Page } from '@playwright/test';

// Ввод в поиск до гидратации.
//
// SearchBox монтируется через client:idle. Поле отрисовано на сервере, поэтому
// посетитель может начать печатать в него раньше, чем подключится React. Тогда
// значение живёт только в DOM: React про него не знает, hasQuery остаётся false,
// кнопка очистки и результаты не появляются, и поиск оживает лишь после
// следующего изменения поля.
//
// Тесты держат гидратацию за поводок: чанк острова задерживается через
// page.route, ввод делается гарантированно до его загрузки, и только потом чанк
// отпускается. Никакой опоры на удачное совпадение по времени.

const ХОЛСТ: Array<[string, string, string, string]> = [
  ['/ru/', 'RU', 'кредит', 'кредит'],
  ['/en/', 'EN', 'loan', 'loan'],
  ['/uk/', 'UK', 'кредит', 'кредит'],
  ['/ru/no-such-page/', '404', 'кредит', 'кредит'],
];

/** Держит чанк SearchBox до вызова отпустить(). */
async function задержатьГидратацию(page: Page) {
  let отпущено = false;
  await page.route('**/_astro/SearchBox.*.js', async (route) => {
    while (!отпущено) await new Promise((r) => setTimeout(r, 30));
    await route.continue();
  });
  return () => { отпущено = true; };
}

const гидрирован = () => {
  const box = document.querySelector('[data-testid="search-box"]');
  const island = box && box.closest('astro-island');
  return !!island && !island.hasAttribute('ssr');
};

async function дождатьсяГидратации(page: Page) {
  await page.waitForFunction(гидрирован, undefined, { timeout: 25000 });
}

const состояние = (page: Page) => page.evaluate(() => {
  const input = document.querySelector('[data-testid="search-input"]') as HTMLInputElement;
  const style = getComputedStyle(input);
  return {
    domValue: input.value,
    clear: document.querySelectorAll('[data-testid="search-clear"]').length,
    results: document.querySelectorAll('[data-testid^="search-result-"]').length,
    empty: !!document.querySelector('[data-testid="search-empty"]'),
    listOpen: !!document.querySelector('[data-testid="search-results"]'),
    padR: style.paddingRight,
    padL: style.paddingLeft,
    focus: document.activeElement ? (document.activeElement.getAttribute('data-testid') ?? document.activeElement.tagName) : null,
    selStart: input.selectionStart,
    url: new URL(window.location.href).search,
  };
});

test.describe('поиск сохраняет ввод, сделанный до гидратации', () => {
  for (const [route, loc, запрос] of ХОЛСТ) {
    test(`${loc}: обычный запрос переживает гидратацию`, async ({ page }) => {
      const отпустить = await задержатьГидратацию(page);
      await page.goto(route, { waitUntil: 'commit' });
      const input = page.getByTestId('search-input');
      await input.waitFor({ timeout: 20000 });

      // До гидратации кнопки очистки быть не может: React ещё не подключён.
      expect(await page.getByTestId('search-clear').count(), 'до гидратации').toBe(0);
      await input.fill(запрос);
      // Значение реально попало в DOM — это и есть предпосылка гонки.
      expect(await input.inputValue(), 'DOM до гидратации').toBe(запрос);

      отпустить();
      await дождатьсяГидратации(page);
      const s = await состояние(page);

      // Главное: React стал владельцем именно того значения, что набрал посетитель.
      expect(s.domValue, `${loc}: значение после гидратации`).toBe(запрос);
      expect(s.clear, `${loc}: кнопка очистки должна появиться`).toBe(1);
      expect(s.listOpen, `${loc}: список результатов должен открыться`).toBe(true);
      expect(s.results, `${loc}: должны быть найденные калькуляторы`).toBeGreaterThan(0);
      // Геометрия из 970322a сохраняется.
      expect(s.padL).toBe('44px');
      expect(s.padR, `${loc}: правый отступ под кнопку`).toBe('56px');
    });
  }

  test('запрос без совпадений тоже восстанавливается', async ({ page }) => {
    const запрос = 'ъъъ такого калькулятора точно нет в каталоге zzzqqq';
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.fill(запрос);
    отпустить();
    await дождатьсяГидратации(page);
    const s = await состояние(page);
    expect(s.domValue).toBe(запрос);
    expect(s.clear, 'кнопка очистки').toBe(1);
    expect(s.empty, 'состояние «ничего не найдено»').toBe(true);
    expect(s.results).toBe(0);
  });

  test('стёртый до гидратации запрос остаётся пустым', async ({ page }) => {
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.fill('кредит');
    await input.fill('');
    expect(await input.inputValue()).toBe('');
    отпустить();
    await дождатьсяГидратации(page);
    const s = await состояние(page);
    // Возрождать удалённый запрос только потому, что поле когда-то трогали, нельзя.
    expect(s.domValue, 'значение').toBe('');
    expect(s.clear, 'кнопки очистки быть не должно').toBe(0);
    expect(s.listOpen, 'списка быть не должно').toBe(false);
    expect(s.padR, 'правый отступ вернулся к обычному').toBe('14px');
    expect(s.url, 'в адресе не должно появиться q').not.toContain('q=');
  });

  test('нетронутое поле остаётся пустым', async ({ page }) => {
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    await page.getByTestId('search-input').waitFor({ timeout: 20000 });
    отпустить();
    await дождатьсяГидратации(page);
    const s = await состояние(page);
    expect(s.domValue).toBe('');
    expect(s.clear).toBe(0);
    expect(s.padR).toBe('14px');
  });

  test('набор продолжается через гидратацию без потерь', async ({ page }) => {
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/en/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.click();
    await page.keyboard.type('loa');
    expect(await input.inputValue()).toBe('loa');

    отпустить();
    await дождатьсяГидратации(page);
    // Дописываем последнюю букву уже после гидратации.
    await page.keyboard.type('n');
    await expect(input).toHaveValue('loan');
    const s = await состояние(page);
    expect(s.domValue, 'ни одна буква не потерялась и не удвоилась').toBe('loan');
    expect(s.clear).toBe(1);
    expect(s.results).toBeGreaterThan(0);
  });

  test('длинный запрос переживает гидратацию и прокручивается', async ({ page }) => {
    const длинный = 'калькулятор сложного процента с ежемесячной капитализацией и регулярным пополнением вклада на длительный срок';
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.fill(длинный);
    отпустить();
    await дождатьсяГидратации(page);
    const s = await состояние(page);
    expect(s.domValue).toBe(длинный);
    expect(s.clear).toBe(1);
    const прокрутка = await input.evaluate((el: HTMLInputElement) => ({ sw: el.scrollWidth, cw: el.clientWidth }));
    expect(прокрутка.sw, 'текст прокручивается внутри поля').toBeGreaterThan(прокрутка.cw);
    expect(await page.evaluate(() => Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth)))
      .toBe(0);
  });

  test('фокус и каретка остаются на месте', async ({ page }) => {
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.click();
    await page.keyboard.type('кредит');
    const до = await состояние(page);
    expect(до.focus, 'до гидратации фокус в поле').toBe('search-input');

    отпустить();
    await дождатьсяГидратации(page);
    const после = await состояние(page);
    expect(после.focus, 'фокус не должен уехать на BODY').toBe('search-input');
    expect(после.selStart, 'каретка остаётся в конце набранного').toBe('кредит'.length);
  });

  test('Escape после восстановленного запроса чистит поиск', async ({ page }) => {
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.click();
    await page.keyboard.type('кредит');
    отпустить();
    await дождатьсяГидратации(page);
    await expect(page.getByTestId('search-clear')).toBeVisible();

    await input.press('Escape');
    await expect(input).toHaveValue('');
    const s = await состояние(page);
    expect(s.clear, 'кнопка очистки исчезла').toBe(0);
    expect(s.listOpen, 'список закрылся').toBe(false);
    expect(s.padR, 'правый отступ вернулся').toBe('14px');
  });

  test('навигация по результатам работает после восстановления', async ({ page }) => {
    const отпустить = await задержатьГидратацию(page);
    await page.goto('/ru/', { waitUntil: 'commit' });
    const input = page.getByTestId('search-input');
    await input.waitFor({ timeout: 20000 });
    await input.click();
    await page.keyboard.type('кредит');
    отпустить();
    await дождатьсяГидратации(page);
    await expect(page.getByTestId('search-result-0')).toBeVisible();

    await input.press('ArrowDown');
    const активный = await page.evaluate(() => document.activeElement?.getAttribute('data-testid') ?? null);
    expect(активный, 'ArrowDown уводит на первый результат').toBe('search-result-0');
  });
});
