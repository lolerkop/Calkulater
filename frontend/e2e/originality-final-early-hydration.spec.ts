import { expect, test, type Locator, type Page } from '@playwright/test';

// Proposal only. Force two distinct orderings without sleeps:
// (1) a native edit after the first React render, inside URL restoration;
// (2) an edit before hydration whose control value is overwritten without an event.
// The unchanged calculator-hydration/date-hydration files retain the SSR-reuse,
// no-error, ordinary query, excludedDates draft and reset coverage.
const routes = {
  ru: '/ru/physics/dlina-volny-de-broylya/',
  en: '/en/physics/de-broglie-wavelength/',
  uk: '/uk/fizyka/dovzhyna-hvyli-de-broylya/',
  de: '/de/physik/de-broglie-wellenlaenge/',
  es: '/es/fisica/longitud-de-onda-de-de-broglie/',
} as const;
const enterNumber = {
  ru: 'Введите число.', en: 'Enter a number.', uk: 'Введіть число.',
  de: 'Bitte eine Zahl eingeben.', es: 'Introduce un número.',
} as const;
type Locale = keyof typeof routes;
type ProbeWindow = Window & {
  __lateHydrationEdit?: { fired: boolean; reactOwned: boolean; before: string; requested: string };
};
async function holdHydration(page: Page): Promise<() => void> {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => { release = resolve; });
  await page.route('**/_astro/CalculatorIsland*.js', async (route) => {
    await gate;
    await route.continue();
  });
  return release;
}
async function journalStopped(page: Page) {
  expect(await page.locator('#calculator').evaluate((root) =>
    !Object.hasOwn(root, '__calcuwayInputJournal'))).toBe(true);
}
function numericPrefix(text: string, locale: Locale): number {
  const match = text.trim().replace(/[\u00a0\u202f]/g, '')
    .match(/^[+-]?\d+(?:[.,]\d+)*(?:·10\^[+-]?\d+)?/);
  if (!match) throw new Error('No numeric prefix: ' + text);
  return Number((locale === 'en' ? match[0].replaceAll(',', '') : match[0].replace(',', '.'))
    .replace('·10^', 'e'));
}
async function quantity(locator: Locator, locale: Locale, expected: number) {
  await expect(locator).toBeVisible();
  await expect.poll(async () => numericPrefix(await locator.innerText(), locale)).toBe(expected);
}
async function invalidMass(page: Page, locale: Locale) {
  await expect(page.getByTestId('field-mass27')).toHaveValue('');
  await expect(page.getByTestId('field-error-mass27')).toHaveText(enterNumber[locale]);
  await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
  await expect(page.getByTestId('calc-result')).toHaveCount(0);
  await expect(page.getByTestId('calc-result-primary')).toHaveCount(0);
}
for (const locale of Object.keys(routes) as Locale[]) {
  test(locale + ': late native blank wins over URL restore and does not replay after reset', async ({ page }) => {
    const search = '?mass27=1&velocityKmS=1';
    // .get('mass27') is the field read inside readValuesFromSearch. Header
    // SearchBox reads .get('q'), so it cannot trigger this one-shot injection.
    await page.addInitScript((expectedSearch) => {
      const Native = window.URLSearchParams;
      let injected = false;
      class ProbeSearchParams extends Native {
        get(name: string): string | null {
          const value = super.get(name);
          if (injected || name !== 'mass27' || this.toString() !== expectedSearch.slice(1)) return value;
          const input = document.getElementById('f-mass27');
          if (!(input instanceof HTMLInputElement)) return value;
          injected = true;
          (window as ProbeWindow).__lateHydrationEdit = {
            fired: true,
            reactOwned: Object.keys(input).some((key) => key.startsWith('__reactProps$')),
            before: input.value,
            requested: '',
          };
          Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!.call(input, '');
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
          return value;
        }
      }
      window.URLSearchParams = ProbeSearchParams;
    }, search);
    await page.goto(routes[locale] + search);
    await expect.poll(() => page.evaluate(() => (window as ProbeWindow).__lateHydrationEdit))
      .toMatchObject({ fired: true, reactOwned: true, requested: '' });
    await invalidMass(page, locale);
    await expect(page.getByTestId('field-velocityKmS')).toHaveValue('1');
    await journalStopped(page);
    await page.getByTestId('field-mass27').fill('1');
    // h/(1e-27 kg * 1000 m/s) = 6.62607015e-10 m; display rounds to 6.626e-10.
    await quantity(page.getByTestId('calc-result-primary'), locale, 6.626e-10);
    await page.getByTestId('calc-reset-btn').click();
    await expect(page.getByTestId('field-mass27')).toHaveValue('0.00091093837');
    await expect(page.getByTestId('field-velocityKmS')).toHaveValue('1000');
    await expect(page).not.toHaveURL(/\?/);
    // h/(9.1093837e-31 kg * 1e6 m/s) = 7.273895...e-10 m.
    await quantity(page.getByTestId('calc-result-primary'), locale, 7.274e-10);
    await journalStopped(page);
  });
}
test('en: pre-hydration blank survives an event-free control overwrite', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto(routes.en + '?mass27=1&velocityKmS=1', { waitUntil: 'commit' });
  await expect(page.getByTestId('field-mass27')).toHaveValue('0.00091093837');
  await page.getByTestId('field-mass27').fill('');
  await expect(page.getByTestId('field-mass27')).toHaveValue('');
  // Simulation of a controlled DOM write, not a claim to time a React commit:
  // no input/change event accompanies this write, so user intent stays blank.
  await page.getByTestId('field-mass27').evaluate((element) => {
    const input = element as HTMLInputElement;
    input.value = input.defaultValue;
  });
  await expect(page.getByTestId('field-mass27')).toHaveValue('0.00091093837');
  hydrate();
  await invalidMass(page, 'en');
  await expect(page.getByTestId('field-velocityKmS')).toHaveValue('1');
  await journalStopped(page);
});
test('ru: number touched then returned to SSR default still wins over query', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/building/tile-calculator/?length=7&width=6&reserve=25', { waitUntil: 'commit' });
  await expect(page.getByTestId('field-length')).toHaveValue('4');
  await page.getByTestId('field-length').fill('9');
  await page.getByTestId('field-length').fill('4');
  hydrate();
  await expect(page.getByTestId('field-length')).toHaveValue('4');
  await expect(page.getByTestId('field-width')).toHaveValue('6');
  await expect(page.getByTestId('field-reserve')).toHaveValue('25');
  // ceil(4*6*1.25 / (0.30*0.30)) = ceil(333 1/3) = 334.
  await expect(page.getByTestId('calc-result-primary')).toHaveText('334 шт.');
  await journalStopped(page);
});
test('ru: select touched then returned to SSR default wins over a different query option', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/ru/finance/vat-calculator/?amount=122&rate=20', { waitUntil: 'commit' });
  await expect(page.getByTestId('field-rate')).toHaveValue('22');
  await page.getByTestId('field-rate').selectOption('20');
  await page.getByTestId('field-rate').selectOption('22');
  hydrate();
  await expect(page.getByTestId('field-rate')).toHaveValue('22');
  await expect(page.getByTestId('field-amount')).toHaveValue('122');
  // VAT included: 122*22/(100+22)=22.
  await expect(page.getByTestId('calc-result')).toContainText('НДС 22%');
  await expect(page.getByTestId('calc-result')).toContainText('22 ₽');
  await journalStopped(page);
});
test('en: cleared seeded textarea beats nonempty query text', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/en/computers/word-and-character-counter/?text=query+words', { waitUntil: 'commit' });
  await expect(page.getByTestId('field-text')).not.toHaveValue('');
  await page.getByTestId('field-text').fill('');
  hydrate();
  await expect(page.getByTestId('field-text')).toHaveValue('');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('—');
  await expect(page.getByTestId('calc-result-row-0').locator('dd')).toHaveText('Enter some text');
  await journalStopped(page);
  await page.getByTestId('field-text').fill('one two');
  await expect(page.getByTestId('calc-result-primary')).toHaveText('2');
});
test('en: required date touched then cleared beats query and automatic date', async ({ page }) => {
  const hydrate = await holdHydration(page);
  await page.goto('/en/date-time/business-days-calculator/?startDate=2026-03-02&endDate=2026-03-06', { waitUntil: 'commit' });
  await expect(page.getByTestId('field-startDate')).toHaveValue('');
  await page.getByTestId('field-startDate').fill('2026-04-01');
  await page.getByTestId('field-startDate').fill('');
  hydrate();
  await expect(page.getByTestId('field-startDate')).toHaveValue('');
  await expect(page.getByTestId('field-endDate')).toHaveValue('2026-03-06');
  await expect(page.getByTestId('field-error-startDate')).toHaveText('Choose a valid date.');
  await expect(page.getByTestId('calc-result-invalid')).toBeVisible();
  await expect(page.getByTestId('calc-result')).toHaveCount(0);
  await journalStopped(page);
  await page.getByTestId('field-startDate').fill('2026-03-02');
  await expect(page.getByTestId('calc-result')).toBeVisible();
});
