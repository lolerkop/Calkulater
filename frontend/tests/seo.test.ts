import { describe, it, expect } from 'vitest';
import {
  absUrl,
  breadcrumbsJsonLd,
  faqJsonLd,
  websiteJsonLd,
  organizationJsonLd,
  webApplicationJsonLd,
  howToJsonLd,
  articleJsonLd,
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

describe('seo.howToJsonLd', () => {
  it('собирает HowTo с пронумерованными шагами', () => {
    const data = howToJsonLd({
      name: 'Кредитный калькулятор',
      description: 'Расчёт ежемесячного платежа',
      path: '/finance/credit-calculator/',
      steps: ['Введите сумму', 'Укажите срок', 'Получите результат'],
    });
    expect(data['@type']).toBe('HowTo');
    expect(data.inLanguage).toBe('ru-RU');
    const steps = data.step as Array<Record<string, unknown>>;
    expect(steps).toHaveLength(3);
    expect(steps[0].position).toBe(1);
    expect(steps[0]['@type']).toBe('HowToStep');
    expect((steps[2].url as string)).toMatch(/#step-3$/);
  });

  it('игнорирует пустые шаги', () => {
    const data = howToJsonLd({
      name: 'Тест',
      description: '...',
      path: '/x/',
      steps: ['', '  ', 'Один шаг'],
    });
    const steps = data.step as Array<Record<string, unknown>>;
    expect(steps).toHaveLength(1);
    expect(steps[0].text).toBe('Один шаг');
  });
});

describe('seo.articleJsonLd', () => {
  it('формирует Article с автором-организацией', () => {
    const data = articleJsonLd({
      headline: 'Как рассчитать НДФЛ',
      description: 'Подробная инструкция',
      path: '/finance/income-tax-calculator/',
      body: 'Полный текст статьи.',
    });
    expect(data['@type']).toBe('Article');
    expect(data.headline).toBe('Как рассчитать НДФЛ');
    expect(data.articleBody).toBe('Полный текст статьи.');
    expect((data.author as Record<string, unknown>)['@type']).toBe('Organization');
    expect((data.publisher as Record<string, unknown>)['@type']).toBe('Organization');
    expect(data.datePublished).toBeDefined();
    expect(data.dateModified).toBeDefined();
  });

  it('articleBody не добавляется если не передан', () => {
    const data = articleJsonLd({
      headline: 'A',
      description: 'B',
      path: '/x/',
    });
    expect(data).not.toHaveProperty('articleBody');
  });
});
