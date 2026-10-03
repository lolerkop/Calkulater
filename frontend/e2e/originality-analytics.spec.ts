import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { runInNewContext } from 'node:vm';

const source = readFileSync(fileURLToPath(new URL('../src/components/Analytics.astro', import.meta.url)), 'utf8');
const runtime = source.match(/<script is:inline define:vars=\{\{ gaId, ymId, storageKey \}\}>([\s\S]*?)<\/script>/)?.[1];
const languageStatement = source.match(/const language = [^;]+;/)?.[0];
const copyExpression = source.match(/const copy = ([\s\S]*?)\[language\];/)?.[1];
if (!runtime || !languageStatement || !copyExpression) throw new Error('Analytics component fixture could not read the production runtime and copy.');

const gaId = 'G-CALCUWAYTEST01';
const ymId = '87654321';
const storageKey = 'calcuway.analytics-consent.v1';
const fixtureOrigin = () => new URL(String(test.info().project.use.baseURL ?? 'http://127.0.0.1:4322')).origin;
type Locale = 'ru' | 'en' | 'uk' | 'de' | 'es';
type ProviderCalls = { ga: unknown[][]; ym: unknown[][] };
const labels: Record<Locale, { title: string; allow: string; reject: string; privacy: string; settings: string }> = {
  ru: { title: 'Настройки аналитики', allow: 'Разрешить', reject: 'Отклонить', privacy: 'Политика конфиденциальности', settings: 'Настройки приватности' },
  en: { title: 'Analytics settings', allow: 'Allow', reject: 'Reject', privacy: 'Privacy policy', settings: 'Privacy settings' },
  uk: { title: 'Налаштування аналітики', allow: 'Дозволити', reject: 'Відхилити', privacy: 'Політика конфіденційності', settings: 'Налаштування приватності' },
  de: { title: 'Analyseeinstellungen', allow: 'Zulassen', reject: 'Ablehnen', privacy: 'Datenschutzerklärung', settings: 'Datenschutzeinstellungen' },
  es: { title: 'Ajustes de analítica', allow: 'Permitir', reject: 'Rechazar', privacy: 'Política de privacidad', settings: 'Ajustes de privacidad' },
};
const policyNotice: Record<Locale, string> = {
  ru: 'Подробности обработки данных описаны в политике конфиденциальности.',
  en: 'Data processing details are explained in the privacy policy.',
  uk: 'Докладніше про обробку даних читайте в політиці конфіденційності.',
  de: 'Einzelheiten zur Datenverarbeitung stehen in der Datenschutzerklärung.',
  es: 'Los detalles del tratamiento de datos se explican en la política de privacidad.',
};

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
}

// The browser fixture executes the real inline runtime and real copy expressions.
// Only its configured IDs and surrounding Astro shell are replaced. Provider
// loaders are intercepted locally; no analytics or ad network is contacted.
function fixture(locale: Locale, extra = ''): string {
  const copy = runInNewContext(`const locale = ${JSON.stringify(locale)}; ${languageStatement} (${copyExpression})[language]`) as Record<string, string>;
  const start = source.indexOf('    <section\n      id="analytics-consent"');
  const end = source.indexOf('    <script is:inline define:vars=');
  if (start < 0 || end <= start) throw new Error('Analytics component DOM fixture not found');
  const body = source.slice(start, end)
    .replace(/\{copy\.(\w+)\}/g, (_match, key: string) => escapeHtml(copy[key]))
    .replace('href={`/${locale}/privacy/#analytics`}', `href="/${locale}/privacy/#analytics"`);
  return `<!doctype html><html lang="${locale}"><head><meta charset="utf-8"><title>Calcuway privacy fixture</title></head><body>${extra}${body}<script>const gaId=${JSON.stringify(gaId)}, ymId=${JSON.stringify(ymId)}, storageKey=${JSON.stringify(storageKey)};${runtime}</script></body></html>`;
}

async function prepare(page: Page, locale: Locale = 'en', options: { saved?: 'granted' | 'denied'; extra?: string; hold?: Promise<void> } = {}) {
  const requests: string[] = [];
  await page.addInitScript(({ saved, storageKey }) => {
    if (saved) localStorage.setItem(storageKey, saved);
    const calls = { ga: [] as unknown[][], ym: [] as unknown[][] };
    Object.assign(window, {
      __analyticsCalls: calls,
      gtag: (...args: unknown[]) => calls.ga.push(args),
      ym: (...args: unknown[]) => calls.ym.push(args),
    });
  }, { saved: options.saved, storageKey });
  await page.route('**/*', async (route) => {
    const url = new URL(route.request().url());
    if (url.origin === fixtureOrigin()) {
      await route.fulfill({ contentType: 'text/html; charset=utf-8', body: fixture(locale, options.extra) });
    } else if (url.hostname === 'www.googletagmanager.com' || url.hostname === 'mc.yandex.ru') {
      requests.push(route.request().url());
      if (options.hold) await options.hold;
      await route.fulfill({ contentType: 'text/javascript', body: 'window.__analyticsLoadersExecuted = (window.__analyticsLoadersExecuted || 0) + 1;' });
    } else {
      await route.abort('blockedbyclient');
      throw new Error(`Unexpected external request in analytics fixture: ${url.hostname}`);
    }
  });
  return requests;
}

async function calls(page: Page): Promise<ProviderCalls> {
  return page.evaluate(() => (window as unknown as { __analyticsCalls: ProviderCalls }).__analyticsCalls);
}

async function accept(page: Page) {
  await page.locator('[data-analytics-choice="granted"]').click();
}

for (const locale of ['ru', 'en', 'uk', 'de', 'es'] as const) {
  test(`configured consent UI is fully localized in ${locale} and waits for consent`, async ({ page }) => {
    const requests = await prepare(page, locale);
    await page.goto(`/${locale}/privacy/`);
    const label = labels[locale];
    await expect(page.getByRole('heading', { name: label.title })).toBeVisible();
    await expect(page.getByRole('button', { name: label.allow, exact: true })).toBeVisible();
    await expect(page.getByRole('button', { name: label.reject, exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: label.privacy, exact: true })).toHaveAttribute('href', `/${locale}/privacy/#analytics`);
    await expect(page.locator('#analytics-consent p')).toContainText(policyNotice[locale]);
    await expect(page.locator('#analytics-consent p')).not.toContainText('Cloudflare');
    expect(requests).toEqual([]);
    expect(await calls(page)).toEqual({ ga: [], ym: [] });
    await accept(page);
    await expect.poll(async () => (await calls(page)).ga.filter((item) => item[0] === 'event' && item[1] === 'page_view').length).toBe(1);
    await expect(page.getByRole('button', { name: label.settings, exact: true })).toBeVisible();
    expect(requests).toHaveLength(2);
    await expect(page.locator('[data-testid="analytics-ga-loader"]')).toHaveAttribute('referrerpolicy', 'no-referrer');
    await expect(page.locator('[data-testid="analytics-ym-loader"]')).toHaveAttribute('referrerpolicy', 'no-referrer');
  });
}

test('safe init, events, withdrawal and renewed consent never include form/query values', async ({ page }) => {
  const requests = await prepare(page);
  await page.goto('/en/privacy/', { referer: fixtureOrigin() + '/en/about/' });
  await accept(page);
  await expect.poll(async () => (await calls(page)).ym.filter((item) => item[1] === 'hit').length).toBe(1);
  const initial = await calls(page);
  const config = initial.ga.find((item) => item[0] === 'config');
  expect(config?.[2]).toMatchObject({
    send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false,
    page_location: fixtureOrigin() + '/en/privacy/', page_referrer: fixtureOrigin() + '/',
  });
  expect(initial.ym.find((item) => item[1] === 'init')?.[2]).toEqual({
    defer: true, clickmap: false, trackLinks: false, accurateTrackBounce: false,
    trackHash: false, webvisor: false, ecommerce: false, sendTitle: false,
  });
  expect(initial.ym.find((item) => item[1] === 'hit')?.slice(2)).toEqual([
    fixtureOrigin() + '/en/privacy/', { title: 'Calcuway privacy fixture', referer: fixtureOrigin() + '/' },
  ]);
  await page.evaluate(() => {
    window.dispatchEvent(new CustomEvent('calcuway:analytics', { detail: {
      name: 'contact_link_clicked',
      metadata: { locale: 'en', target_path: '/en/contacts/?weight=SECRET#SECRET', weight: 'SECRET', result: 'SECRET' },
    } }));
    window.dispatchEvent(new CustomEvent('calcuway:analytics', { detail: { name: 'unapproved_event', metadata: { value: 'SECRET' } } }));
  });
  const event = (await calls(page)).ga.find((item) => item[1] === 'contact_link_clicked');
  expect(event?.[2]).toMatchObject({ target_path: '/en/contacts/', locale: 'en', page_location: fixtureOrigin() + '/en/privacy/' });
  expect(JSON.stringify(await calls(page))).not.toContain('SECRET');
  await page.getByTestId('analytics-settings').click();
  await page.locator('[data-analytics-choice="denied"]').click();
  await expect.poll(() => page.evaluate((id) => (window as unknown as Record<string, unknown>)[`ga-disable-${id}`], gaId)).toBe(true);
  expect((await calls(page)).ym.some((item) => item[1] === 'destruct')).toBe(true);
  const afterDeny = await calls(page);
  await page.evaluate(() => window.dispatchEvent(new CustomEvent('calcuway:analytics', { detail: { name: 'contact_link_clicked', metadata: { locale: 'en' } } })));
  expect(await calls(page)).toEqual(afterDeny);
  await page.getByTestId('analytics-settings').click();
  await accept(page);
  const renewed = await calls(page);
  expect(renewed.ga.filter((item) => item[1] === 'page_view')).toHaveLength(2);
  expect(renewed.ym.filter((item) => item[1] === 'hit')).toHaveLength(2);
  expect(requests).toHaveLength(2);
  expect(JSON.stringify(renewed)).not.toContain('SECRET');
});

for (const path of [
  '/en/finance/loan/', '/en/', '/en/calculators/', '/en/404/',
  '/en/privacy/?weight=SECRET', '/en/privacy/#weight=SECRET',
]) {
  test(`saved consent fails closed on input/search/parameter URL: ${path}`, async ({ page }) => {
    const requests = await prepare(page, 'en', { saved: 'granted' });
    await page.goto(path);
    await expect(page.getByTestId('analytics-settings')).toBeVisible();
    expect(requests).toEqual([]);
    expect(await calls(page)).toEqual({ ga: [], ym: [] });
    await page.evaluate(() => {
      history.replaceState(null, '', '?weight=SECRET#SECRET');
      window.dispatchEvent(new CustomEvent('calcuway:analytics', { detail: { name: 'calculator_result_shown', metadata: { calculator_id: 'loan', locale: 'en', result: 'SECRET' } } }));
    });
    expect(requests).toEqual([]);
    expect(await calls(page)).toEqual({ ga: [], ym: [] });
  });
}

test('sensitive referrer disables loaders even on an otherwise safe page', async ({ page }) => {
  const requests = await prepare(page, 'en', { saved: 'granted' });
  await page.goto('/en/privacy/', { referer: fixtureOrigin() + '/en/finance/loan/?income=SECRET' });
  expect(await page.evaluate(() => document.referrer)).toContain('SECRET');
  expect(requests).toEqual([]);
  expect(await calls(page)).toEqual({ ga: [], ym: [] });
});

test('saved refusal keeps all optional providers disabled on a safe page', async ({ page }) => {
  const requests = await prepare(page, 'es', { saved: 'denied' });
  await page.goto('/es/privacy/');
  await expect(page.getByTestId('analytics-settings')).toHaveText(labels.es.settings);
  await expect(page.getByTestId('analytics-consent')).toBeHidden();
  expect(requests).toEqual([]);
  expect(await calls(page)).toEqual({ ga: [], ym: [] });
});

test('an input control on a static route disables providers', async ({ page }) => {
  const requests = await prepare(page, 'en', { saved: 'granted', extra: '<input aria-label="Unexpected field" value="SECRET">' });
  await page.goto('/en/privacy/');
  expect(requests).toEqual([]);
  expect(await calls(page)).toEqual({ ga: [], ym: [] });
});

test('category pages without input controls retain opt-in analytics', async ({ page }) => {
  await prepare(page, 'de', { saved: 'granted', extra: '<main data-testid="category-page-finanzen"></main>' });
  await page.goto('/de/finanzen/');
  await expect.poll(async () => (await calls(page)).ga.filter((item) => item[1] === 'page_view').length).toBe(1);
  expect((await calls(page)).ga.find((item) => item[1] === 'page_view')?.[2]).toMatchObject({ page_location: fixtureOrigin() + '/de/finanzen/' });
});

test('revoking consent during delayed loader downloads prevents initialization', async ({ page }) => {
  let release!: () => void;
  const hold = new Promise<void>((resolve) => { release = resolve; });
  const requests = await prepare(page, 'en', { hold });
  await page.goto('/en/privacy/');
  await accept(page);
  await expect.poll(() => requests.length).toBe(2);
  await page.getByTestId('analytics-settings').click();
  await page.locator('[data-analytics-choice="denied"]').click();
  release();
  await expect(page.getByTestId('analytics-ga-loader')).toBeAttached();
  await expect.poll(() => page.evaluate(() => (window as unknown as { __analyticsLoadersExecuted?: number }).__analyticsLoadersExecuted)).toBe(2);
  await page.evaluate(() => new Promise<void>((resolve) => requestAnimationFrame(() => resolve())));
  const result = await calls(page);
  expect(result.ga.some((item) => item[0] === 'config' || item[1] === 'page_view')).toBe(false);
  expect(result.ym.some((item) => item[1] === 'init' || item[1] === 'hit')).toBe(false);
});
