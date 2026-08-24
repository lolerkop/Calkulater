import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// Набор маршрутов расширен по классам страниц. Пять исходных не покрывали
// подборку и страницы с таблицей результата, и там жили два нарушения уровня
// serious, приехавшие в Production задолго до этой проверки: слишком слабый
// контраст счётчика в фишке раздела (белый при прозрачности 70 % на акцентном
// фоне — 3,65:1 при норме 4,5:1) и прокручиваемая таблица без собственной
// остановки табуляции.
for (const route of [
  '/ru/',
  '/ru/contacts/',
  '/ru/privacy/',
  '/ru/finance/income-tax-calculator/',
  '/uk/fitness/kalkulyator-bmi/',
  '/ru/calculators/',
  // Подборка в остальных локалях: подписи бейджей и поля поиска там свои,
  // а контраст и доступные имена обязаны выполняться во всех трёх.
  '/en/calculators/',
  '/uk/calculators/',
  '/ru/calculators/page/2/',
  '/ru/calculators/page/3/',
  '/ru/finance/',
  '/ru/finance/credit-calculator/',
  '/ru/physics/density/',
  '/ru/chemistry/molar-mass/',
  '/ru/household/bakers-percentage/',
  '/ru/finance/annuity/',
  '/ru/converters/chislo-propisyu/',
  '/en/physics/newtons-second-law-calculator/',
  '/ru/takoy-stranicy-net-24f/',
]) {
  test(`axe has no WCAG A/AA violations on ${route}`, async ({ page }) => {
    const response = await page.goto(route);
    // Адрес в списке был '/en/physics/newton-force/' — английского такого
    // маршрута нет, слаг локализован как newtons-second-law-calculator, и
    // проверка молча разбирала страницу 404 вместо страницы калькулятора.
    // Теперь список не может тихо выродиться: всё, кроме намеренной 404,
    // обязано отвечать 200.
    const ожидаемый = route.includes('takoy-stranicy-net') ? 404 : 200;
    expect(response?.status(), `${route}: код ответа`).toBe(ожидаемый);
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
