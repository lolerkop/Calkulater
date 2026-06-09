export const SITE = {
  url: import.meta.env.PUBLIC_SITE_URL || 'http://localhost:3000',
  name: 'Калькуляторы',
  fullName: 'Калькуляторы — онлайн-калькуляторы для повседневных расчетов',
  description:
    'Онлайн-калькуляторы для финансов, валют, спорта, ремонта и работы с датами. Простые инструменты без регистрации.',
  email: import.meta.env.PUBLIC_CONTACT_EMAIL || '',
  ogImage: '/og-default.png',
  locale: 'ru_RU',
  gaId: import.meta.env.PUBLIC_GA_ID || '',
  ymId: import.meta.env.PUBLIC_YM_ID || '',
};
