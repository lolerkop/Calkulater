// Утилиты для генерации JSON-LD разметки schema.org
import { SITE } from '../config/site';
import { localeMeta, type Locale } from './i18n';
import type { FaqItem } from './types';

type Json = Record<string, unknown>;
type ListItem = {
  name: string;
  description?: string;
  path: string;
};

const structuredDataCopy: Record<Locale, {
  howToUse: (name: string) => string;
  step: (index: number) => string;
}> = {
  ru: {
    howToUse: (name) => `Как пользоваться: ${name}`,
    step: (index) => `Шаг ${index}`,
  },
  en: {
    howToUse: (name) => `How to use: ${name}`,
    step: (index) => `Step ${index}`,
  },
  es: {
    howToUse: (name) => `Cómo usar: ${name}`,
    step: (index) => `Paso ${index}`,
  },
  de: {
    howToUse: (name) => `So nutzt du: ${name}`,
    step: (index) => `Schritt ${index}`,
  },
  fr: {
    howToUse: (name) => `Comment utiliser : ${name}`,
    step: (index) => `Étape ${index}`,
  },
  pt: {
    howToUse: (name) => `Como usar: ${name}`,
    step: (index) => `Passo ${index}`,
  },
  it: {
    howToUse: (name) => `Come usare: ${name}`,
    step: (index) => `Passaggio ${index}`,
  },
  pl: {
    howToUse: (name) => `Jak używać: ${name}`,
    step: (index) => `Krok ${index}`,
  },
  nl: {
    howToUse: (name) => `Zo gebruik je: ${name}`,
    step: (index) => `Stap ${index}`,
  },
  ro: {
    howToUse: (name) => `Cum se folosește: ${name}`,
    step: (index) => `Pasul ${index}`,
  },
  id: {
    howToUse: (name) => `Cara menggunakan: ${name}`,
    step: (index) => `Langkah ${index}`,
  },
  tr: {
    howToUse: (name) => `Nasıl kullanılır: ${name}`,
    step: (index) => `Adım ${index}`,
  },
  vi: {
    howToUse: (name) => `Cách sử dụng: ${name}`,
    step: (index) => `Bước ${index}`,
  },
  cs: {
    howToUse: (name) => `Jak používat: ${name}`,
    step: (index) => `Krok ${index}`,
  },
  uk: {
    howToUse: (name) => `Як користуватися: ${name}`,
    step: (index) => `Крок ${index}`,
  },
  sk: {
    howToUse: (name) => `Ako používať: ${name}`,
    step: (index) => `Krok ${index}`,
  },
  hu: {
    howToUse: (name) => `Használat: ${name}`,
    step: (index) => `${index}. lépés`,
  },
};

/**
 * Преобразует относительный путь в абсолютный URL сайта.
 */
export function absUrl(path = '/'): string {
  const base = SITE.url.replace(/\/$/, '');
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/**
 * Хлебные крошки в формате BreadcrumbList.
 */
export function breadcrumbsJsonLd(
  items: { label: string; href?: string }[],
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absUrl(item.href) } : {}),
    })),
  };
}

/**
 * Список вопросов и ответов в формате FAQPage.
 */
export function faqJsonLd(items: FaqItem[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

/**
 * Главная страница сайта в формате WebSite + поиск.
 */
export function websiteJsonLd(): Json {
  return websiteJsonLdForLocale('ru');
}

export function websiteJsonLdForLocale(locale: Locale): Json {
  const meta = localeMeta[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${absUrl(`/${locale}/`)}#website`,
    name: meta.fullName,
    url: absUrl(`/${locale}/`),
    inLanguage: meta.localeCode,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${absUrl(`/${locale}/calculators/`)}?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Организация-владелец сайта.
 */
export function organizationJsonLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${absUrl('/')}#organization`,
    name: SITE.name,
    url: absUrl('/'),
    ...(SITE.email ? { email: SITE.email } : {}),
  };
}

export function webPageJsonLd(params: {
  name: string;
  description: string;
  path: string;
  type?: 'WebPage' | 'AboutPage' | 'ContactPage';
  locale?: Locale;
}): Json {
  const type = params.type ?? 'WebPage';
  const locale = params.locale ?? 'ru';
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absUrl(params.path)}#webpage`,
    name: params.name,
    description: params.description,
    url: absUrl(params.path),
    inLanguage: localeMeta[locale].localeCode,
    isPartOf: { '@id': `${absUrl(`/${locale}/`)}#website` },
    publisher: { '@id': `${absUrl('/')}#organization` },
  };
}

export function itemListJsonLd(params: {
  name: string;
  path: string;
  items: ListItem[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${absUrl(params.path)}#itemlist`,
    name: params.name,
    url: absUrl(params.path),
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: absUrl(item.path),
      item: {
        '@type': 'WebApplication',
        name: item.name,
        ...(item.description ? { description: item.description } : {}),
        url: absUrl(item.path),
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Any',
      },
    })),
  };
}

export function collectionPageJsonLd(params: {
  name: string;
  description: string;
  path: string;
  items: ListItem[];
  locale?: Locale;
}): Json {
  const locale = params.locale ?? 'ru';
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${absUrl(params.path)}#collection`,
    name: params.name,
    description: params.description,
    url: absUrl(params.path),
    inLanguage: localeMeta[locale].localeCode,
    isPartOf: { '@id': `${absUrl(`/${locale}/`)}#website` },
    mainEntity: {
      '@id': `${absUrl(params.path)}#itemlist`,
    },
    hasPart: params.items.map((item) => ({
      '@type': 'WebPage',
      name: item.name,
      ...(item.description ? { description: item.description } : {}),
      url: absUrl(item.path),
    })),
  };
}

/**
 * Описание калькулятора как WebApplication.
 */
export function webApplicationJsonLd(params: {
  name: string;
  description: string;
  path: string;
  locale?: Locale;
}): Json {
  const locale = params.locale ?? 'ru';
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${absUrl(params.path)}#app`,
    name: params.name,
    description: params.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    inLanguage: localeMeta[locale].localeCode,
    url: absUrl(params.path),
    isAccessibleForFree: true,
    browserRequirements: 'Requires JavaScript for interactive calculation',
    publisher: { '@id': `${absUrl('/')}#organization` },
    offers: { '@type': 'Offer', price: '0', priceCurrency: localeMeta[locale].defaultCurrency },
  };
}

/**
 * Пошаговая инструкция «Как пользоваться» в формате HowTo.
 * Используется на страницах калькуляторов вместе с FAQ и WebApplication.
 */
export function howToJsonLd(params: {
  name: string;
  description: string;
  path: string;
  steps: string[];
  locale?: Locale;
}): Json {
  const steps = (params.steps || []).filter((s) => s && s.trim().length > 0);
  const locale = params.locale ?? 'ru';
  const copy = structuredDataCopy[locale];
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.howToUse(params.name),
    description: params.description,
    inLanguage: localeMeta[locale].localeCode,
    url: absUrl(params.path),
    totalTime: 'PT1M',
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: copy.step(i + 1),
      text,
      url: `${absUrl(params.path)}#step-${i + 1}`,
    })),
  };
}

/**
 * Описание страницы калькулятора как самостоятельной статьи.
 * Помогает поисковикам индексировать пояснительный контент (описание, как считается, пример).
 */
export function articleJsonLd(params: {
  headline: string;
  description: string;
  path: string;
  body?: string;
  datePublished?: string;
  dateModified?: string;
  locale?: Locale;
}): Json {
  const published = params.datePublished ?? '2025-01-01';
  const modified = params.dateModified ?? new Date().toISOString().slice(0, 10);
  const locale = params.locale ?? 'ru';
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    inLanguage: localeMeta[locale].localeCode,
    mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(params.path) },
    author: { '@type': 'Organization', name: SITE.name, url: absUrl('/') },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: absUrl('/'),
    },
    datePublished: published,
    dateModified: modified,
    ...(params.body ? { articleBody: params.body } : {}),
  };
}
