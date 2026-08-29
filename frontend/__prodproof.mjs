import { chromium } from '@playwright/test';
const BASE = process.argv[2] ?? 'https://calcuway.com';
const CASES = [
  { tag: 'A', id: 'ohms-law', paths: { ru: '/ru/electronics/ohms-law/', en: '/en/electronics/ohms-law-calculator/' },
    fill: { voltage: '0.001', current: '1' }, expect: '0,001 Ом / 0.001 Ω' },
  { tag: 'B', id: 'cac', paths: { ru: '/ru/business/cac/', en: '/en/business/customer-acquisition-cost/' },
    fill: { spend: '1', customers: '100' }, expect: '0,01' },
  { tag: 'C', id: 'aov', paths: { ru: '/ru/business/aov/', en: '/en/business/average-order-value/' },
    fill: { revenue: '1', orders: '2' }, expect: '0,50' },
  { tag: 'D', id: 'room-volume', paths: { ru: '/ru/building/room-volume/', en: '/en/home-improvement/room-volume-calculator/' },
    fill: { length: '0.1', width: '0.1', height: '0.1' }, expect: '0,001 м³' },
];
const browser = await chromium.launch();
for (const c of CASES) {
  for (const [loc, p] of Object.entries(c.paths)) {
    const page = await browser.newPage();
    const res = await page.goto(BASE + p, { waitUntil: 'domcontentloaded' });
    if (res.status() !== 200) { console.log(`  ${c.tag} ${loc}: HTTP ${res.status()}`); await page.close(); continue; }
    await page.getByTestId('calc-result').waitFor({ state: 'visible', timeout: 15000 });
    for (const [f, v] of Object.entries(c.fill)) {
      const el = page.getByTestId(`field-${f}`);
      if (await el.count()) { await el.fill(''); await el.type(loc === 'en' ? v : v.replace('.', ',')); }
    }
    await page.waitForTimeout(500);
    const dom = await page.evaluate(() => {
      const r = document.querySelector('[data-testid="calc-result-primary"]');
      return r ? r.innerText.replace(/\n+/g, ' | ').trim() : '(нет)';
    });
    console.log(`  ${c.tag} ${c.id} ${loc}: DOM «${dom}»   ожидание ${c.expect}`);
    await page.close();
  }
}
await browser.close();
