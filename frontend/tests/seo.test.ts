import { describe, it, expect } from 'vitest';
import {
  absUrl,
  breadcrumbsJsonLd,
  faqJsonLd,
  websiteJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
} from '../src/lib/seo';

describe('seo.absUrl', () => {
  it('собирает абсолютный URL из относительного пути', () => {
    const url = absUrl('/finance/credit/');
    expect(url).toMatch(/\/finance\/credit\/$/);
    expect(url.startsWith('http')).toBe(true);
  });

  it('добавляет ведущий слэш если его нет', () => {
    const url = absUrl('foo');
    expect(url).toMatch(/\/foo$/);
  });
});

describe('seo.breadcrumbsJsonLd', () => {
  it('генерирует валидный BreadcrumbList', () => {
    const data = breadcrumbsJsonLd([
      { label: 'Главная', href: '/' },
      { label: 'Финансы', href: '/finance/' },
      { label: 'Кредит' },
    ]);
    expect(data['@type']).toBe('BreadcrumbList');
    const list = data.itemListElement as Array<Record<string, unknown>>;
    expect(list).toHaveLength(3);
    expect(list[0].position).toBe(1);
    expect(list[2]).not.toHaveProperty('item');
  });
});

describe('seo.faqJsonLd', () => {
  it('преобразует список вопросов в FAQPage', () => {
    const data = faqJsonLd([
      { q: 'Вопрос?', a: 'Ответ.' },
    ]);
    expect(data['@type']).toBe('FAQPage');
    const main = data.mainEntity as Array<Record<string, unknown>>;
    expect(main[0].name).toBe('Вопрос?');
    expect((main[0].acceptedAnswer as Record<string, unknown>).text).toBe('Ответ.');
  });
});

describe('seo.websiteJsonLd', () => {
  it('содержит SearchAction', () => {
    const data = websiteJsonLd();
    expect(data['@type']).toBe('WebSite');
    expect(data.potentialAction).toBeDefined();
  });
});

describe('seo.organizationJsonLd', () => {
  it('возвращает Organization', () => {
    const data = organizationJsonLd();
    expect(data['@type']).toBe('Organization');
  });
});

describe('seo.webApplicationJsonLd', () => {
  it('содержит описание калькулятора и нулевую цену', () => {
    const data = webApplicationJsonLd({
      name: 'Кредитный калькулятор',
      description: 'Расчет аннуитета',
      path: '/finance/credit/',
    });
    expect(data['@type']).toBe('WebApplication');
    expect(data.name).toBe('Кредитный калькулятор');
    const offers = data.offers as Record<string, unknown>;
    expect(offers.price).toBe('0');
    expect(offers.priceCurrency).toBe('RUB');
  });
});
