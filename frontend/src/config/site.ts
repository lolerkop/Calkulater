const canonicalUrl = 'https://calcuway.com';
const configuredUrl = import.meta.env.PUBLIC_SITE_URL || '';
const url = configuredUrl || canonicalUrl;
const email = import.meta.env.PUBLIC_CONTACT_EMAIL || '';
const privacyEmail = import.meta.env.PUBLIC_PRIVACY_EMAIL || email;

if (url !== canonicalUrl && !url.startsWith('http://localhost') && !url.startsWith('http://127.0.0.1')) {
  throw new Error(`PUBLIC_SITE_URL must be ${canonicalUrl} for production builds.`);
}

if (configuredUrl && !url.startsWith('http://localhost') && !url.startsWith('http://127.0.0.1') && !email) {
  throw new Error('PUBLIC_CONTACT_EMAIL is required for production builds.');
}

export const SITE = {
  url,
  name: 'Калькуляторы',
  fullName: 'Калькуляторы — онлайн-калькуляторы для повседневных расчетов',
  description:
    'Онлайн-калькуляторы для финансов, валют, спорта, ремонта и работы с датами. Простые инструменты без регистрации.',
  email,
  privacyEmail,
  legalName: import.meta.env.PUBLIC_LEGAL_NAME || '',
  jurisdiction: import.meta.env.PUBLIC_JURISDICTION || '',
  supportUrl:
    import.meta.env.PUBLIC_SUPPORT_URL ||
    'https://github.com/lolerkop/Calkulater/issues/new',
  ogImage: '/og-default.png',
  locale: 'ru_RU',
  gaId: import.meta.env.PUBLIC_GA_ID || '',
  ymId: import.meta.env.PUBLIC_YM_ID || '',
};
