import { expect, test, type Page } from '@playwright/test';

// Горизонтальная прокрутка таблицы результата.
//
// Таблица шире панели на узких экранах, а на сенсорных экранах полосы прокрутки
// нет вовсе, поэтому продолжение таблицы ничем не выдавало себя. Подсказку даёт
// .nav-scroll: тень у края стоит на месте (scroll), а поверх неё лежит подложка
// цвета поверхности, прикреплённая к содержимому (local). Домотав до конца,
// посетитель приводит подложку к тому же краю и тень гаснет.
//
// Механизм держится на одном условии: цвет подложки обязан совпадать с
// фактической поверхностью. Разойдутся — по краю пойдёт видимая полоса, и она
// будет обещать продолжение даже там, где таблица помещается целиком. Именно
// поэтому подложка вынесена в --nav-veil, а панель результата переопределяет её
// на --surface-soft. Тесты ниже проверяют это совпадение по фактическому
// композиту цвета, а не по имени переменной.

/** Обёртка таблицы — прямой родитель <table> внутри панели результата. */
const ОБЁРТКА = '[data-testid="calc-result-wrap"] table';

const ЗАМЕР = `(() => {
  const table = document.querySelector('[data-testid="calc-result-wrap"] table');
  if (!table) return null;
  const wrap = table.parentElement;
  const cs = getComputedStyle(wrap);

  // Во что подложка разрешается на самом деле: пробник с этим же цветом внутри
  // обёртки, чтобы каскад переменной сработал ровно как в бою.
  const probe = document.createElement('div');
  probe.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;background-color:var(--nav-veil)';
  wrap.appendChild(probe);
  const veil = getComputedStyle(probe).backgroundColor;
  probe.remove();

  // Фактическая поверхность под обёрткой: композит фонов предков поверх белого.
  const слои = [];
  for (let n = wrap.parentElement; n; n = n.parentElement) слои.push(getComputedStyle(n).backgroundColor);
  let r = 255, g = 255, b = 255;
  for (let i = слои.length - 1; i >= 0; i -= 1) {
    const m = String(слои[i]).match(/rgba?\\(([^)]+)\\)/);
    if (!m) continue;
    const p = m[1].split(',').map(parseFloat);
    const a = p.length > 3 ? p[3] : 1;
    if (!a) continue;
    r = p[0] * a + r * (1 - a); g = p[1] * a + g * (1 - a); b = p[2] * a + b * (1 - a);
  }

  const th = [...table.querySelectorAll('thead th')];
  const wb = wrap.getBoundingClientRect();
  const край = (el) => {
    const cr = el.getBoundingClientRect();
    return { left: Math.round(cr.left - wb.left), right: Math.round(cr.right - wb.left) };
  };
  const непрозрачных = [...table.querySelectorAll('thead,tbody,tr,th,td')].filter((c) => {
    const m = String(getComputedStyle(c).backgroundColor).match(/rgba?\\(([^)]+)\\)/);
    if (!m) return false;
    const p = m[1].split(',');
    return p.length < 4 || parseFloat(p[3]) > 0;
  }).length;

  return {
    скрыто: wrap.scrollWidth - wrap.clientWidth,
    прокручено: Math.round(wrap.scrollLeft),
    предел: wrap.scrollWidth - wrap.clientWidth,
    ширинаОкна: wrap.clientWidth,
    overflowX: cs.overflowX,
    слоёв: (String(cs.backgroundImage).match(/gradient/g) || []).length,
    прикрепление: cs.backgroundAttachment,
    подложка: (veil.match(/\\d+/g) || []).slice(0, 3).map(Number).join(','),
    поверхность: [r, g, b].map(Math.round).join(','),
    столбцов: th.length,
    первый: th.length ? край(th[0]) : null,
    последний: th.length ? край(th[th.length - 1]) : null,
    непрозрачных,
    переливДокумента: Math.max(0, document.documentElement.scrollWidth - document.documentElement.clientWidth),
  };
})()`;

async function замер(page: Page) {
  await page.waitForSelector('[data-testid="calc-result-primary"]', { timeout: 25000 });
  await page.locator(ОБЁРТКА).waitFor();
  return page.evaluate(ЗАМЕР) as Promise<any>;
}

async function домотать(page: Page, куда: 'начало' | 'конец') {
  await page.evaluate(`(() => { const w = document.querySelector('${ОБЁРТКА}').parentElement;
    w.scrollLeft = ${куда === 'конец' ? 'w.scrollWidth' : '0'}; })()`);
  await page.waitForTimeout(150);
}

// Ширины подобраны по фактическим замерам: переполнение не монотонно по ширине
// окна, потому что на широких экранах панель результата уезжает в колонку.
const ХОЛСТ: Array<[string, string, number, 'переполнение' | 'вмещается']> = [
  ['/ru/finance/credit-calculator/', 'кредит', 375, 'переполнение'],
  ['/ru/finance/credit-calculator/', 'кредит', 768, 'вмещается'],
  ['/ru/finance/credit-calculator/', 'кредит', 1024, 'переполнение'],
  ['/ru/finance/mortgage-calculator/', 'ипотека', 375, 'переполнение'],
  ['/ru/finance/compound-interest/', 'сложный процент', 320, 'переполнение'],
  ['/ru/finance/deposit-calculator/', 'вклад', 320, 'переполнение'],
  ['/ru/sport/running-pace-calculator/', 'темп бега', 375, 'вмещается'],
  ['/en/finance/loan-calculator/', 'EN loan', 375, 'переполнение'],
  ['/uk/finansy/kalkulyator-kredytu/', 'UK кредит', 375, 'переполнение'],
];

test.describe('таблица результата подсказывает, что прокручивается', () => {
  for (const [route, имя, ширина, ожидание] of ХОЛСТ) {
    test(`${имя} @ ${ширина}: подложка совпадает с поверхностью, ${ожидание}`, async ({ page }) => {
      await page.setViewportSize({ width: ширина, height: 900 });
      await page.goto(route);
      const z = await замер(page);

      // Сердце механизма: разойдись эти два цвета — и по краю пойдёт полоса.
      expect(z.подложка, `${имя}@${ширина}: цвет подложки`).toBe(z.поверхность);
      expect(z.слоёв, 'четыре слоя: две подложки и две тени').toBe(4);
      expect(z.прикрепление).toBe('local, local, scroll, scroll');
      expect(z.overflowX).toBe('auto');

      // Ячейки обязаны оставаться прозрачными: подсказка живёт в фоне обёртки и
      // непрозрачная ячейка попросту закрыла бы её собой.
      expect(z.непрозрачных, 'непрозрачных ячеек').toBe(0);

      // Прокручивается таблица, а не страница.
      expect(z.переливДокумента, 'горизонтальный перелив документа').toBe(0);

      if (ожидание === 'переполнение') {
        expect(z.скрыто, 'за краем должно оставаться содержимое').toBeGreaterThan(0);
      } else {
        expect(z.скрыто, 'таблица помещается целиком').toBe(0);
      }
    });
  }

  test('в начале виден первый столбец, в конце достижим последний', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/ru/finance/credit-calculator/');
    const начало = await замер(page);
    expect(начало.скрыто).toBeGreaterThan(0);
    expect(начало.прокручено, 'таблица открывается с начала').toBe(0);
    expect(начало.первый.left, 'первый столбец не срезан слева').toBeGreaterThanOrEqual(0);
    expect(начало.первый.right, 'первый столбец виден целиком').toBeLessThanOrEqual(начало.ширинаОкна);

    await домотать(page, 'конец');
    const конец = await замер(page);
    expect(конец.прокручено, 'домотали до упора').toBe(конец.предел);
    expect(конец.последний.right, 'последний столбец достижим целиком')
      .toBeLessThanOrEqual(конец.ширинаОкна);
    expect(конец.последний.left, 'последний столбец не срезан слева').toBeGreaterThanOrEqual(0);
    expect(конец.переливДокумента).toBe(0);
  });

  test('смена ширины переключает состояние без перезагрузки', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/ru/finance/credit-calculator/');
    await page.evaluate('window.__живой = true');

    expect((await замер(page)).скрыто, '375: не помещается').toBeGreaterThan(0);
    await page.setViewportSize({ width: 768, height: 900 });
    await page.waitForTimeout(400);
    expect((await замер(page)).скрыто, '768: помещается').toBe(0);
    await page.setViewportSize({ width: 1024, height: 900 });
    await page.waitForTimeout(400);
    const широко = await замер(page);
    // На широком экране панель уезжает в колонку и таблица снова не помещается.
    expect(широко.скрыто, '1024: снова не помещается').toBeGreaterThan(0);
    expect(широко.подложка, 'подложка держится и после ресайза').toBe(широко.поверхность);
    expect(await page.evaluate('window.__живой'), 'страница не перезагружалась').toBe(true);
  });

  test('очень длинные значения не выносят страницу вбок', async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto('/ru/finance/credit-calculator/');
    await замер(page);
    await page.getByTestId('field-amount').fill('999999999999');
    await page.getByTestId('field-term').fill('50');
    await page.getByTestId('field-rate').fill('99,9');
    await page.waitForTimeout(700);

    await домотать(page, 'конец');
    const z = await замер(page);
    expect(z.скрыто, 'таблица стала заметно шире окна').toBeGreaterThan(100);
    expect(z.последний.right, 'последний столбец всё равно достижим').toBeLessThanOrEqual(z.ширинаОкна);
    expect(z.переливДокумента, 'страница вбок не поехала').toBe(0);
    expect(z.подложка).toBe(z.поверхность);
    const первая = await page.locator(`${ОБЁРТКА} tbody td`).first().innerText();
    expect(первая).not.toMatch(/NaN|Infinity|undefined/);
  });

  test('шапка сохраняет прежний цвет подложки', async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/ru/');
    const h = await page.evaluate(`(() => {
      const n = document.querySelector('[data-testid="header-nav"]');
      const cs = getComputedStyle(n);
      const probe = document.createElement('div');
      probe.style.cssText = 'position:absolute;left:-9999px;width:1px;height:1px;background-color:var(--nav-veil)';
      n.appendChild(probe); const veil = getComputedStyle(probe).backgroundColor; probe.remove();
      const корень = getComputedStyle(document.documentElement);
      return { navVeil: cs.getPropertyValue('--nav-veil').trim(),
        headerVeil: корень.getPropertyValue('--header-veil').trim(),
        подложка: (veil.match(/\\d+/g) || []).slice(0, 3).map(Number).join(','),
        слоёв: (String(cs.backgroundImage).match(/gradient/g) || []).length }; })()`) as any;
    // Переменная введена ради панели результата, но у шапки её значение по
    // умолчанию обязано остаться прежним, иначе это уже правка шапки.
    expect(h.navVeil).toBe(h.headerVeil);
    expect(h.подложка, '#FEFEFF').toBe('254,254,255');
    expect(h.слоёв).toBe(4);
  });

  test('якорная навигация калькулятора остаётся без этой подсказки', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 900 });
    await page.goto('/ru/finance/credit-calculator/');
    const n = page.getByTestId('calculator-anchor-nav');
    await n.waitFor();
    const a = await n.evaluate((el) => {
      const cs = getComputedStyle(el);
      const секция = el.closest('[data-testid="calculator-support"]')!;
      return { класс: el.classList.contains('nav-scroll'),
        слоёв: (String(cs.backgroundImage).match(/gradient/g) || []).length,
        overflowX: cs.overflowX,
        скрыто: el.scrollWidth - el.clientWidth,
        фонСекции: getComputedStyle(секция).backgroundColor };
    });
    // Секция стоит на полупрозрачном фоне, а подложка .nav-scroll непрозрачна:
    // совпасть с такой поверхностью она не может и даёт светлую полосу даже
    // тогда, когда прокручивать нечего. Полоса прокрутки здесь родная, а
    // отдельная подсказка для полупрозрачной поверхности ждёт своего решения.
    expect(a.фонСекции, 'фон секции полупрозрачен').toMatch(/rgba\([^)]+,\s*0?\.\d+\)/);
    expect(a.класс, 'класс подсказки сюда не ставится').toBe(false);
    expect(a.слоёв, 'фоновых градиентов быть не должно').toBe(0);
    // При этом сама прокрутка никуда не делась.
    expect(a.overflowX).toBe('auto');
    expect(a.скрыто).toBeGreaterThan(0);
  });
});
