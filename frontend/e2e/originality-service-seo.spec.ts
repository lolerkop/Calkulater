import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', (route) => {
    const hostname = new URL(route.request().url()).hostname;
    return hostname === '127.0.0.1' || hostname === 'localhost' ? route.continue() : route.abort();
  });
});

const physicsPaths = {
  ru: '/ru/physics/kinetic-energy/',
  en: '/en/physics/kinetic-energy-calculator/',
  uk: '/uk/fizyka/kinetychna-enerhiya/',
  de: '/de/physik/kinetische-energie-rechner/',
  es: '/es/fisica/energia-cinetica/',
};

for (const [locale, path] of Object.entries(physicsPaths)) {
  test(`${locale}: structured instruction links reach the matching visible steps`, async ({ page }) => {
    await page.goto(path);
    const data = await page.locator('script[type="application/ld+json"]').evaluateAll((scripts) =>
      scripts.map((script) => JSON.parse(script.textContent || '{}')).find((item) => item['@type'] === 'HowTo'),
    );
    expect(data).toBeTruthy();
    expect(data).not.toHaveProperty('totalTime');
    expect(data.step.length).toBeGreaterThan(0);
    for (const step of data.step) {
      const fragment = new URL(step.url).hash;
      const target = page.locator(fragment);
      await expect(target).toHaveCount(1);
      await expect(target).toBeVisible();
      await expect(target).toContainText(step.text);
    }
  });
}

test('German contact page uses German for either configured privacy-contact state', async ({ page }) => {
  await page.goto('/de/contacts/');
  const configured = page.getByTestId('privacy-contact-channel');
  if (await configured.count()) {
    await expect(configured).toHaveText('Bei Datenschutzfragen schreiben');
  } else {
    await expect(page.getByTestId('privacy-contact-unavailable')).toContainText('Datenschutzanfragen');
  }
  await expect(page.getByTestId('page-main')).not.toContainText('A private privacy email is not configured yet.');
});

const contactLocales = {
  ru: { channel: 'Как связаться', topics: 'С чем можно обратиться', action: 'Открыть обращение', subjectTitles: ['Ошибки в расчётах', 'Вопросы по данным', 'Конфиденциальность', 'Сотрудничество'], report: 'Сообщить об ошибке в калькуляторе' },
  en: { channel: 'How to contact us', topics: 'What you can contact us about', action: 'Open a support request', subjectTitles: ['Calculation errors', 'Data questions', 'Privacy', 'Cooperation'], report: 'Report a calculator error' },
  uk: { channel: 'Як зв’язатися', topics: 'З чим можна звернутися', action: 'Відкрити звернення', subjectTitles: ['Помилки в розрахунках', 'Питання щодо даних', 'Конфіденційність', 'Співпраця'], report: 'Повідомити про помилку в калькуляторі' },
  de: { channel: 'Kontakt aufnehmen', topics: 'Wobei wir helfen können', action: 'Supportanfrage öffnen', subjectTitles: ['Rechenfehler', 'Fragen zu den Daten', 'Datenschutz', 'Zusammenarbeit'], report: 'Fehler im Rechner melden' },
  es: { channel: 'Cómo contactar', topics: 'Sobre qué puedes escribirnos', action: 'Abrir una solicitud de soporte', subjectTitles: ['Errores de cálculo', 'Dudas sobre los datos', 'Privacidad', 'Colaboración'], report: 'Informar de un error en la calculadora' },
};

for (const [locale, expected] of Object.entries(contactLocales)) {
  test(`${locale}: contact details and error-report link use the page language`, async ({ page }) => {
    await page.goto(`/${locale}/contacts/`);
    await expect(page.getByRole('heading', { level: 2, name: expected.channel, exact: true })).toBeVisible();
    await expect(page.getByRole('heading', { level: 2, name: expected.topics, exact: true })).toBeVisible();
    await expect(page.getByTestId('contact-topics').locator('h3')).toHaveText(expected.subjectTitles);
    const channel = page.getByTestId('contact-channel');
    const href = await channel.getAttribute('href');
    if (href?.startsWith('mailto:')) {
      await expect(channel).toHaveText(href.slice('mailto:'.length));
    } else {
      await expect(channel).toHaveText(expected.action);
    }
    await expect(page.getByTestId('site-footer').locator(`a[href="/${locale}/contacts/#calculation-errors"]`)).toHaveText(expected.report);
    if (locale === 'de') {
      await expect(page.getByTestId('page-main')).not.toContainText('How to contact us');
      await expect(page.getByTestId('page-main')).not.toContainText('What you can contact us about');
      await expect(page.getByTestId('page-main')).not.toContainText('Calculation errors');
      await expect(page.getByTestId('page-main')).not.toContainText('Open a support request');
    }
  });
}
