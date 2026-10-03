import { expect, test, type Page } from '@playwright/test';
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type Values = Record<string, string | number | boolean>;
const locales = ['ru','en','uk','de','es'] as const;
const routes: Record<Locale, Record<string, string>> = {
  "ru": {
    "credit-calculator": "/ru/finance/credit-calculator/",
    "vat-calculator": "/ru/finance/vat-calculator/",
    "age-calculator": "/ru/date-time/age-calculator/",
    "date-shift-calculator": "/ru/date-time/date-calculator/",
    "cpc": "/ru/business/cpc/",
    "installment": "/ru/finance/installment/",
    "risk-reward": "/ru/finance/risk-reward/",
    "text-word-char-count": "/ru/computers/text-word-char-count/"
  },
  "en": {
    "credit-calculator": "/en/finance/loan-calculator/",
    "age-calculator": "/en/date-time/age-calculator/",
    "date-shift-calculator": "/en/date-time/date-calculator/",
    "cpc": "/en/business/cpc-calculator/",
    "installment": "/en/finance/installment-calculator/",
    "risk-reward": "/en/finance/risk-reward-ratio-calculator/",
    "text-word-char-count": "/en/computers/word-and-character-counter/"
  },
  "uk": {
    "credit-calculator": "/uk/finansy/kalkulyator-kredytu/",
    "age-calculator": "/uk/daty/kalkulyator-viku/",
    "date-shift-calculator": "/uk/daty/kalkulyator-dat/",
    "cpc": "/uk/business/cpc/",
    "installment": "/uk/finansy/rozstrochka/",
    "risk-reward": "/uk/finansy/ryzyk-prybutok/",
    "text-word-char-count": "/uk/kompyutery/lichylnyk-sliv-i-symvoliv/"
  },
  "de": {
    "credit-calculator": "/de/finanzen/kreditrechner/",
    "age-calculator": "/de/datum-zeit/altersrechner/",
    "date-shift-calculator": "/de/datum-zeit/datumsrechner/",
    "cpc": "/de/business/klickpreis-rechner/",
    "installment": "/de/finanzen/ratenkauf-rechner/",
    "risk-reward": "/de/finanzen/chance-risiko-verhaeltnis/",
    "text-word-char-count": "/de/computer/zeichenzaehler/"
  },
  "es": {
    "credit-calculator": "/es/finanzas/calculadora-prestamo/",
    "age-calculator": "/es/fechas/calculadora-edad/",
    "date-shift-calculator": "/es/fechas/calculadora-de-fechas/",
    "cpc": "/es/negocios/calculadora-de-cpc/",
    "installment": "/es/finanzas/compra-a-plazos/",
    "risk-reward": "/es/finanzas/ratio-riesgo-beneficio/",
    "text-word-char-count": "/es/informatica/contador-de-palabras-y-caracteres/"
  }
};
const defaults: Record<string, Values> = {
  "credit-calculator": {
    "amount": 500000,
    "term": 5,
    "termUnit": "years",
    "rate": 14,
    "type": "annuity",
    "extraPayment": 0,
    "oneTimeFee": 0
  },
  "vat-calculator": {
    "amount": 12000,
    "rate": "22",
    "operation": "extract"
  },
  "age-calculator": {
    "birthDate": "1990-01-01",
    "targetDate": ""
  },
  "date-shift-calculator": {
    "shiftDirection": "forward",
    "shiftYears": 0,
    "shiftMonths": 0,
    "shiftWeeks": 0,
    "shiftDays": 90
  },
  "cpc": {
    "cost": 36000,
    "clicks": 1450,
    "impressions": 92000
  },
  "installment": {
    "price": 60000,
    "down": 10000,
    "months": 6,
    "markup": 12
  },
  "risk-reward": {
    "direction": "long",
    "entry": 250,
    "stop": 240,
    "target": 280,
    "qty": 100
  },
  "text-word-char-count": {
    "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
  }
};

// Routes/defaults are frozen public metadata. Every numerical oracle below is
// fixed algebra, never a registry/compute import. Tax cases are RU-only.
const units = { ru: '₽', en: '$', uk: '₴', de: '€', es: '€' } as const;
async function installClipboard(page: Page) {
  await page.addInitScript(() => Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText: async (text: string) => { (window as Window & { blankShare?: string }).blankShare = text; } } }));
}
function url(id: string, locale: Locale, values: Values = {}) { return `${routes[locale][id]}?${new URLSearchParams(Object.entries(values).map(([key, value]) => [key, String(value)]))}`; }
async function copy(page: Page, id: string, locale: Locale, values: Values) {
  await page.evaluate(() => { delete (window as Window & { blankShare?: string }).blankShare; });
  await page.getByTestId('calc-share-btn').click();
  if (['risk-reward','installment','credit-calculator','vat-calculator'].includes(id)) {
    await expect(page.getByTestId('calc-share-warning')).toBeVisible();
    await page.getByTestId('calc-share-confirm').click();
  } else await expect(page.getByTestId('calc-share-warning')).toHaveCount(0);
  await expect.poll(() => page.evaluate(() => (window as Window & { blankShare?: string }).blankShare ?? '')).not.toBe('');
  const raw = await page.evaluate(() => (window as Window & { blankShare?: string }).blankShare!);
  const actual = new URL(raw);
  expect(actual.origin).toBe(new URL(page.url()).origin); expect(actual.pathname).toBe(routes[locale][id]); expect(actual.hash).toBe('#calculator');
  const expected = Object.fromEntries(Object.entries(values).filter(([key, value]) => value !== defaults[id][key]).map(([key, value]) => [key, String(value)]));
  expect(Object.fromEntries(actual.searchParams)).toEqual(expected);
  return raw;
}
function number(text: string, locale: Locale) {
  const token = text.match(/[-−]?\d[\d\s\u00a0\u202f.,]*/)?.[0];
  if (!token) return NaN;
  const compact = token.replace(/[\s\u00a0\u202f]/g, '').replace('−', '-');
  return Number(locale === 'en' ? compact.replaceAll(',', '') : compact.replaceAll('.', '').replace(',', '.'));
}
async function primary(page: Page, locale: Locale, expected: number, money = false) {
  const p = page.getByTestId('calc-result-primary'); await expect(p).toBeVisible();
  await expect.poll(async () => number(await p.innerText(), locale)).toBeCloseTo(expected, 3);
  if (money) await expect(p).toContainText(units[locale]);
}
async function fieldInvalid(page: Page, field: string) {
  await expect(page.getByTestId(`field-error-${field}`)).toBeVisible();
  await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
  await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
}
async function noTechnicalLeaks(page: Page) { await expect(page.locator('main')).not.toContainText(/\b(?:NaN|Infinity|undefined)\b/); }
async function layout(page: Page) { expect(await page.evaluate(() => Math.max(document.documentElement.scrollWidth,document.body.scrollWidth)<=window.innerWidth+1)).toBe(true); }
async function restoreBlank(page: Page, link: string, field: string) {
  await page.goto(link); await expect(page.getByTestId(`field-${field}`)).toHaveValue('');
  await page.reload(); await expect(page.getByTestId(`field-${field}`)).toHaveValue('');
}
for (const locale of locales) {
  test(`${locale}: risk qty blank keeps R3,25pct and no cash rows; absent keeps100`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 }); await installClipboard(page);
    const values = { direction: 'long', entry: 250, stop: 240, target: 280, qty: '' };
    await page.goto(url('risk-reward', locale, values)); await primary(page, locale, 3);
    await expect(page.getByTestId('field-qty')).toHaveValue('');
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(3);
    await expect.poll(async () => number(await page.getByTestId('calc-result-row-2').locator('dd').innerText(),locale)).toBe(25);
    const link = await copy(page,'risk-reward',locale,values); expect(new URL(link).searchParams.get('qty')).toBe('');
    await restoreBlank(page,link,'qty'); await primary(page,locale,3);
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(3);
    await page.goto(url('risk-reward',locale,{direction:'long',entry:250,stop:240,target:280}));
    await expect(page.getByTestId('field-qty')).toHaveValue('100');
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(5);
    await expect.poll(async()=>number(await page.getByTestId('calc-result-row-2').locator('dd').innerText(),locale)).toBe(1000);
    await noTechnicalLeaks(page); await layout(page);
  });
  test(`${locale}: installment cleared down is11200; absent down remains10000`,async({page})=>{
    await page.setViewportSize({width:1365,height:900});await installClipboard(page);
    await page.goto(url('installment',locale));await primary(page,locale,9333.33,true);
    await page.getByTestId('field-down').fill('');await primary(page,locale,11200,true);
    const link=await copy(page,'installment',locale,{price:60000,down:'',months:6,markup:12});await restoreBlank(page,link,'down');await primary(page,locale,11200,true);
    await expect(page.getByTestId('calc-result').locator('table tbody tr')).toHaveCount(6);
    await page.goto(url('installment',locale));await expect(page.getByTestId('field-down')).toHaveValue('10000');await primary(page,locale,9333.33,true);await noTechnicalLeaks(page);await layout(page);
  });
  test(`${locale}: CPC blank known impressions retain5.25 and omit CTR/CPM`,async({page})=>{
    await page.setViewportSize({width:390,height:844});await installClipboard(page);
    await page.goto(url('cpc',locale,{cost:10.5,clicks:2}));await primary(page,locale,5.25,true);
    await expect(page.getByTestId('field-impressions')).toHaveValue('92000');
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(4);
    await page.getByTestId('field-impressions').fill('');await primary(page,locale,5.25,true);
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(2);
    const link=await copy(page,'cpc',locale,{cost:10.5,clicks:2,impressions:''});await restoreBlank(page,link,'impressions');await primary(page,locale,5.25,true);
    await expect(page.getByTestId('calc-result').locator('[data-testid^="calc-result-row-"]')).toHaveCount(2);await noTechnicalLeaks(page);await layout(page);
  });
  test(`${locale}: optional fee default0 keeps literalblank aftercopy and absent remains0`,async({page})=>{
    await page.setViewportSize({width:1365,height:900});await installClipboard(page);
    const values={amount:1200,term:12,termUnit:'months',rate:0,type:'annuity',extraPayment:0,oneTimeFee:''};
    await page.goto(url('credit-calculator',locale,values));await expect(page.getByTestId('field-oneTimeFee')).toHaveValue('');await primary(page,locale,100,true);
    const link=await copy(page,'credit-calculator',locale,values);expect(new URL(link).searchParams.has('oneTimeFee')).toBe(true);expect(new URL(link).searchParams.get('oneTimeFee')).toBe('');
    await restoreBlank(page,link,'oneTimeFee');await primary(page,locale,100,true);
    const absent={...values};delete(absent as Partial<typeof values>).oneTimeFee;await page.goto(url('credit-calculator',locale,absent));await expect(page.getByTestId('field-oneTimeFee')).toHaveValue('0');await primary(page,locale,100,true);await noTechnicalLeaks(page);await layout(page);
  });
  test(`${locale}: cleared seededtextarea stays0characters and currentnativeerror`,async({page})=>{
    await page.setViewportSize({width:390,height:844});await installClipboard(page);
    await page.goto(url('text-word-char-count',locale));await expect(page.getByTestId('field-text')).not.toHaveValue('');await expect(page.getByTestId('calc-result-primary')).toBeVisible();
    await page.getByTestId('field-text').fill('');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');
    const link=await copy(page,'text-word-char-count',locale,{text:''});await restoreBlank(page,link,'text');await expect(page.getByTestId('calc-result-primary')).toHaveText('—');
    expect((await page.getByTestId('field-text').inputValue()).length).toBe(0);await page.goto(url('text-word-char-count',locale));await expect(page.getByTestId('field-text')).not.toHaveValue('');await noTechnicalLeaks(page);await layout(page);
  });
  test(`${locale}: required amount blank neverrestores plausibledefault`,async({page})=>{
    await page.setViewportSize({width:1365,height:900});await installClipboard(page);
    const values={amount:'',term:12,termUnit:'months',rate:0,type:'annuity',extraPayment:0,oneTimeFee:0};
    await page.goto(url('credit-calculator',locale,values));await fieldInvalid(page,'amount');await expect(page.getByTestId('field-amount')).toHaveValue('');
    const link=await copy(page,'credit-calculator',locale,values);await restoreBlank(page,link,'amount');await fieldInvalid(page,'amount');
    await page.getByTestId('field-amount').fill('1200');await primary(page,locale,100,true);await noTechnicalLeaks(page);await layout(page);
  });
  test(`${locale}: required birthdate clear neverrestores1990seed`,async({page})=>{
    await page.setViewportSize({width:390,height:844});await installClipboard(page);
    await page.goto(url('age-calculator',locale));await expect(page.getByTestId('field-birthDate')).toHaveValue('1990-01-01');
    await page.getByTestId('field-birthDate').fill('');await fieldInvalid(page,'birthDate');
    const link=await copy(page,'age-calculator',locale,{birthDate:'',targetDate:''});await restoreBlank(page,link,'birthDate');await fieldInvalid(page,'birthDate');
    await page.getByTestId('field-birthDate').fill('1990-01-01');await expect(page.getByTestId('calc-result-primary')).toBeVisible();await noTechnicalLeaks(page);await layout(page);
  });
  test(`${locale}: requiredautomatic startdate clear neverrestores today`,async({page})=>{
    await page.setViewportSize({width:1365,height:900});await installClipboard(page);
    await page.goto(url('date-shift-calculator',locale));await expect(page.getByTestId('field-startDate')).toHaveValue(/^\d{4}-\d{2}-\d{2}$/);
    await page.getByTestId('field-startDate').fill('');await fieldInvalid(page,'startDate');
    const link=await copy(page,'date-shift-calculator',locale,{...defaults['date-shift-calculator'],startDate:''});await restoreBlank(page,link,'startDate');await fieldInvalid(page,'startDate');
    await page.goto(url('date-shift-calculator',locale));await expect(page.getByTestId('field-startDate')).toHaveValue(/^\d{4}-\d{2}-\d{2}$/);await expect(page.getByTestId('calc-result-primary')).toBeVisible();await noTechnicalLeaks(page);await layout(page);
  });
}
for(const width of[390,1365])test(`RU${width}: optionalVATdate clearedstaysblank and same22 tax`,async({page})=>{
 await page.setViewportSize({width,height:900});await installClipboard(page);
 const values={amount:122,rate:'22',operation:'extract',operationDate:''};
 await page.goto(url('vat-calculator','ru',values));await expect(page.getByTestId('field-operationDate')).toHaveValue('');await primary(page,'ru',22,true);
 await expect(page.getByTestId('field-error-operationDate')).toHaveCount(0);
 const link=await copy(page,'vat-calculator','ru',values);await restoreBlank(page,link,'operationDate');await primary(page,'ru',22,true);
 await expect(page.getByTestId('field-error-operationDate')).toHaveCount(0);
 await page.goto(url('vat-calculator','ru',{amount:122,rate:'22',operation:'extract'}));await expect(page.getByTestId('field-operationDate')).toHaveValue(/^\d{4}-\d{2}-\d{2}$/);await primary(page,'ru',22,true);await noTechnicalLeaks(page);await layout(page);
});
