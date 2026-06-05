// Утилиты для генерации JSON-LD разметки schema.org
import { SITE } from '../config/site';
import type { FaqItem } from './types';

type Json = Record<string, unknown>;

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
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.fullName,
    url: SITE.url,
    inLanguage: 'ru-RU',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/?q={search_term_string}`,
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
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
  };
}

/**
 * Описание калькулятора как WebApplication.
 */
export function webApplicationJsonLd(params: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: params.name,
    description: params.description,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any',
    inLanguage: 'ru-RU',
    url: absUrl(params.path),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
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
}): Json {
  const steps = (params.steps || []).filter((s) => s && s.trim().length > 0);
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `Как пользоваться: ${params.name}`,
    description: params.description,
    inLanguage: 'ru-RU',
    url: absUrl(params.path),
    totalTime: 'PT1M',
    step: steps.map((text, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: `Шаг ${i + 1}`,
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
}): Json {
  const published = params.datePublished ?? '2025-01-01';
  const modified = params.dateModified ?? new Date().toISOString().slice(0, 10);
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.headline,
    description: params.description,
    inLanguage: 'ru-RU',
    mainEntityOfPage: { '@type': 'WebPage', '@id': absUrl(params.path) },
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    datePublished: published,
    dateModified: modified,
    ...(params.body ? { articleBody: params.body } : {}),
  };
}
