import { chromium } from '@playwright/test';
const BASE = process.argv[2] ?? 'https://calcuway.com';
// Обе подписи условные: появляются только при непустом значении своего поля.
const CASES = [
  { id: 'currency-exchange-fee', locales: {
      ru: '/ru/currency/currency-exchange-fee/', en: '/en/currency/currency-exchange-cost-calculator/',
      uk: '/uk/valyuty/vartist-obminu-valyuty/', de: '/de/waehrungen/wechselkosten-rechner/' },
    fill: { feeFixed: '1000' } },
  { id: 'real-return', locales: {
      ru: '/ru/finance/real-return/', en: '/en/finance/real-return-calculator/',
      uk: '/uk/finansy/realna-dokhidnist/', de: '/de/finanzen/reale-rendite-rechner/' },
    fill: { years: '3', amount: '100000' } },
];
const browser = await chromium.launch();
for (const c of CASES) {
  for (const [loc, path] of Object.entries(c.locales)) {
    const page = await browser.newPage();
    const res = await page.goto(BASE + path, { waitUntil: 'domcontentloaded' }).catch(() => null);
    if (!res || res.status() !== 200) { console.log(`  ${c.id} ${loc}: HTTP ${res?.status() ?? 'ошибка'} ${path}`); await page.close(); continue; }
    await page.getByTestId('calc-result').waitFor({ state: 'visible', timeout: 15000 }).catch(() => {});
    for (const [f, v] of Object.entries(c.fill)) {
      const el = page.getByTestId(`field-${f}`);
      if (await el.count()) { await el.fill(''); await el.type(v); }
    }
    await page.waitForTimeout(400);
    const labels = await page.evaluate(() => [...document.querySelectorAll('[data-testid="calc-result"] dt')].map((e) => e.textContent.trim()));
    const cyr = labels.filter((l) => /[А-Яа-яЁё]/.test(l));
    console.log(`  ${c.id} ${loc}: подписей ${labels.length}, кириллических ${cyr.length}${cyr.length ? ' :: ' + cyr.join(' | ') : ''}`);
    await page.close();
  }
}
await browser.close();
