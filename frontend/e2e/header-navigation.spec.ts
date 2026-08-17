import { expect, test } from '@playwright/test';

// Полоса разделов в шапке прокручивается, когда её пункты не помещаются.
// Прокрутка в CSS дотягивается только до того, что вышло за КОНЕЦ полосы:
// scrollLeft не бывает отрицательным. Поэтому выравнивание вправо
// (justify-content: flex-end) вместе с overflow-x отправляло лишние пункты за
// начало, откуда их нельзя было ни увидеть, ни домотать: на 768 первый пункт
// «Все калькуляторы» стоял на x = -149 и был недоступен вообще.
//
// Тесты ниже проверяют не конкретные отступы, а само это свойство: ни один
// пункт не уходит за начало полосы, до каждого доходит прокрутка, ничто ни на
// что не налезает. Так они переживут смену размеров и переводов и не потребуют
// сверки картинок.

// Ширины вокруг точки перелома md (768) и вокруг тех, где раньше ломалось.
const WIDTHS = [320, 375, 767, 768, 800, 900, 1022, 1023, 1024, 1440];

// Русская полоса самая длинная, украинская самая короткая: берём обе, чтобы
// проверить и переполненное, и свободное состояние.
const ROUTES = [
  { path: '/ru/', name: 'RU главная' },
  { path: '/en/', name: 'EN главная' },
  { path: '/uk/', name: 'UK главная' },
  { path: '/ru/finance/', name: 'RU раздел' },
  { path: '/ru/date-time/working-days-calculator/', name: 'RU калькулятор' },
];

type NavGeometry = {
  mode: 'desktop' | 'mobile';
  itemsPastStart: number;
  firstItemOffset: number;
  reachableFromStart: boolean;
  overlaps: number;
  documentOverflow: number;
  visibleLinks: number;
  languageLinks: number;
};

const readNavGeometry = `(() => {
  const shown = (el) => !!(el && el.getClientRects().length);
  const desktop = document.querySelector('[data-testid="header-nav"]');
  const mobile = document.querySelector('[data-testid="header-nav-mobile"]');
  const nav = shown(desktop) ? desktop : mobile;
  const navBox = nav.getBoundingClientRect();
  const items = [...nav.children];

  // Домотать до самого начала: если пункт остаётся левее полосы и здесь,
  // значит он лежит за пределами области, куда достаёт прокрутка.
  const before = nav.scrollLeft;
  nav.scrollLeft = -1e6;
  const atStart = nav.getBoundingClientRect();
  const worst = Math.min(...items.map((item) => item.getBoundingClientRect().left - atStart.left));
  nav.scrollLeft = before;

  const languageSwitcher = [...document.querySelectorAll('[data-language-switcher]')].find(shown);
  // На узких ширинах переключатель языка лежит внутри самой полосы, поэтому
  // его собственные ссылки из перечня разделов надо убрать: иначе они «налезут»
  // сами на себя.
  const navLinks = [...nav.querySelectorAll('a')].filter((link) => !link.closest('[data-language-switcher]'));
  // Сравнивать надо видимые части: у полосы overflow-x, и хвост пункта за её
  // краем обрезан, хотя getBoundingClientRect по-прежнему считает его целиком.
  const languageBox = languageSwitcher ? languageSwitcher.getBoundingClientRect() : null;
  const overlaps = languageBox
    ? navLinks.filter((link) => {
        const box = link.getBoundingClientRect();
        const left = Math.max(box.left, navBox.left);
        const right = Math.min(box.right, navBox.right);
        return right > left && left < languageBox.right - 0.5 && right > languageBox.left + 0.5
          && box.top < languageBox.bottom - 0.5 && box.bottom > languageBox.top + 0.5;
      }).length
    : 0;

  return {
    mode: nav === desktop ? 'desktop' : 'mobile',
    itemsPastStart: items.filter((item) => item.getBoundingClientRect().left < navBox.left - 0.5).length,
    firstItemOffset: Math.round(navLinks[0].getBoundingClientRect().left - navBox.left),
    reachableFromStart: worst >= -0.5,
    overlaps,
    documentOverflow: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
    visibleLinks: navLinks.filter((link) => link.getClientRects().length).length,
    languageLinks: languageSwitcher ? languageSwitcher.querySelectorAll('a').length : 0,
  };
})()`;

for (const width of WIDTHS) {
  test(`навигация шапки помещается и прокручивается на ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });

    for (const route of ROUTES) {
      await page.goto(route.path);
      const geometry: NavGeometry = await page.evaluate(readNavGeometry);
      const where = `${route.name} @ ${width}px`;

      // Главное: ничего не уехало за начало полосы, куда прокрутка не достаёт.
      expect(geometry.itemsPastStart, `${where}: пункты за началом полосы`).toBe(0);
      expect(geometry.firstItemOffset, `${where}: первый пункт левее полосы`).toBeGreaterThanOrEqual(0);
      expect(geometry.reachableFromStart, `${where}: до начала полосы не домотать`).toBe(true);

      expect(geometry.overlaps, `${where}: пункты налезают на переключатель языка`).toBe(0);
      expect(geometry.documentOverflow, `${where}: горизонтальный перелив документа`).toBe(0);

      // Все разделы и все языки на месте: правка не должна ничего прятать.
      expect(geometry.visibleLinks, `${where}: пропали пункты навигации`).toBeGreaterThanOrEqual(6);
      expect(geometry.languageLinks, `${where}: пропали языки`).toBe(3);
    }
  });
}

test('каждый раздел доступен с клавиатуры и открывается', async ({ page }) => {
  await page.setViewportSize({ width: 768, height: 900 });
  await page.goto('/ru/');

  const links = page.getByTestId('header-nav').getByRole('link');
  const total = await links.count();
  expect(total).toBeGreaterThanOrEqual(6);

  for (let index = 0; index < total; index += 1) {
    const link = links.nth(index);
    await link.focus();
    // Браузер доматывает полосу до сфокусированного пункта по правилу
    // «nearest»: уже пересекающийся с видимой частью он не двигает, поэтому
    // хвост длинного пункта может остаться обрезанным справа. Это общее
    // свойство любой горизонтальной полосы, и оно одинаково до и после правки.
    // Проверяем то, чего не было раньше: пункт не уходит за НАЧАЛО полосы,
    // куда прокрутка не достаёт, и остаётся видимым настолько, чтобы понимать,
    // где стоит фокус.
    const placement = await link.evaluate(async (element) => {
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
      const box = element.getBoundingClientRect();
      const nav = element.closest('[data-testid="header-nav"]')!.getBoundingClientRect();
      return {
        text: element.textContent?.trim() ?? '',
        fromStart: box.left - nav.left,
        visibleWidth: Math.min(box.right, nav.right) - Math.max(box.left, nav.left),
      };
    });
    expect(placement.fromStart, `«${placement.text}» уходит за начало полосы при фокусе`).toBeGreaterThanOrEqual(-0.5);
    expect(placement.visibleWidth, `«${placement.text}» при фокусе почти не видно`).toBeGreaterThan(24);
  }

  const href = await links.first().getAttribute('href');
  await links.first().click();
  await expect(page).toHaveURL(new RegExp(`${href}$`));
});

test('полоса подсказывает прокрутку затенением у края', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/ru/');

  const nav = page.getByTestId('header-nav-mobile');
  const state = await nav.evaluate((element) => {
    const style = getComputedStyle(element);
    return {
      scrollable: element.scrollWidth > element.clientWidth,
      layers: (style.backgroundImage.match(/gradient/g) ?? []).length,
      // Подложка привязана к содержимому, тень — к полосе: только такая пара
      // гасит подсказку на том конце, где пунктов уже не осталось.
      attachment: style.backgroundAttachment.replace(/\s+/g, ''),
    };
  });

  expect(state.scrollable, 'на 375px полоса обязана прокручиваться').toBe(true);
  expect(state.layers, 'нет слоёв подсказки о прокрутке').toBe(4);
  expect(state.attachment).toBe('local,local,scroll,scroll');
});
