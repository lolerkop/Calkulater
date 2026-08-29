import { expect, test } from '@playwright/test';
import { getCalculatorById } from '../src/lib/i18n';

// Ненулевое значение, выглядящее нулём.
//
// Четыре случая найдены аудитом Production и воспроизведены на бою: закон Ома
// печатал 0,001 Ом как «0,00 Ом», стоимость привлечения 0,01 — как «0», объём
// комнаты 0,001 м³ — как «0,00 м³», а средний чек 0,50 ₽ — как «1 ₽», то есть
// ВДВОЕ больше настоящего. Первые три стирали величину, четвёртый её искажал.
//
// Проверка идёт через браузер: значение проходит весь путь — расчёт, разметку
// острова и локализацию, — потому что дефект жил именно в выводе.

const CASES = [
  { id: 'ohms-law', fill: { voltage: '0,001', current: '1' }, en: { voltage: '0.001', current: '1' },
    expect: { ru: /^0,001\s*Ом$/, en: /^0\.001\s*Ω$/ }, was: '0,00 Ом' },
  { id: 'cac', fill: { spend: '1', customers: '100' }, en: { spend: '1', customers: '100' },
    expect: { ru: /^0,01\s*₽$/, en: /^0\.01\s*\$$/ }, was: '0 ₽' },
  { id: 'aov', fill: { revenue: '1', orders: '2' }, en: { revenue: '1', orders: '2' },
    expect: { ru: /^0,50\s*₽$/, en: /^0\.50\s*\$$/ }, was: '1 ₽ — вдвое больше настоящего' },
  { id: 'room-volume', fill: { length: '0,1', width: '0,1', height: '0,1' },
    en: { length: '0.1', width: '0.1', height: '0.1' },
    expect: { ru: /^0,001\s*м³$/, en: /^0\.001\s*m³$/ }, was: '0,00 м³' },
] as const;

for (const item of CASES) {
  for (const locale of ['ru', 'en'] as const) {
    const calculator = getCalculatorById(item.id, locale);
    test(`${item.id} / ${locale}: малое значение показывается, а не округляется в «${item.was}»`, async ({ page }) => {
      test.skip(!calculator, `${item.id} не существует в локали ${locale}`);
      await page.goto(calculator!.fullPath!);
      const result = page.getByTestId('calc-result');
      await expect(result).toBeVisible();
      const values = locale === 'en' ? item.en : item.fill;
      for (const [field, value] of Object.entries(values)) {
        const input = page.getByTestId(`field-${field}`);
        await input.fill('');
        await input.pressSequentially(value);
      }
      const primary = page.getByTestId('calc-result-primary');
      await expect(primary).toHaveText(item.expect[locale]);
      await expect(primary).not.toHaveText(/^-?0[,.]0*\s*\D*$/);
    });
  }
}

test('обычные значения не обросли хвостами', async ({ page }) => {
  // Расширение точности включается только там, где иначе получился бы ноль.
  const calculator = getCalculatorById('aov', 'ru')!;
  await page.goto(calculator.fullPath!);
  await expect(page.getByTestId('calc-result')).toBeVisible();
  await page.getByTestId('field-revenue').fill('250000');
  await page.getByTestId('field-orders').fill('200');
  await expect(page.getByTestId('calc-result-primary')).toHaveText(/^1[\s  ]250\s*₽$/);
});

// Знак у малого отрицательного значения проверяется на самом форматтере, в
// tests/format.test.ts: там это утверждение точное и не зависит от того, какой
// калькулятор согласится принять отрицательный ввод. Закон Ома, например,
// отрицательное напряжение отвергает — и правильно делает.
