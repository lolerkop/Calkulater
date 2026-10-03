// Средний чек. Простой скаляр с целочисленным делителем.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { aovCopyEn } from './copy.en';
import { aovCopyUk } from './copy.uk';
import { aovCopyDe } from './copy.de';
import { aovCopyEs } from './copy.es';
import { aovReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'aov',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: aovCopyEn, uk: aovCopyUk, de: aovCopyDe, es: aovCopyEs },
  referenceCases: aovReferenceCases,
  publishedExample: { inputs: { revenue: 250000, orders: 200 }, expected: ['1 250 ₽'] },
  presentation: {
    id: 'aov',
    name: 'Калькулятор среднего чека',
    slug: 'aov',
    fullPath: '/business/aov/',
    category: 'business',
    icon: 'trending-up',
    popularity: 42,
    isNew: false,
    shortDescription: 'Выручка, делённая на число заказов.',
    seoTitle: 'Калькулятор среднего чека — AOV из выручки и заказов',
    seoDescription:
      'Расчёт среднего чека: выручка за период, делённая на число заказов того же периода.',
    h1: 'Калькулятор среднего чека',
    keywords: ['средний чек', 'AOV', 'средняя корзина'],
    fields: [
      { name: 'revenue', label: 'Выручка за период', type: 'number', defaultValue: 250000, min: 0 },
      { name: 'orders', label: 'Число заказов', type: 'number', defaultValue: 200, min: 0, step: 1 },
    ],
    resultLabels: { aov: 'Средний чек' },
    relatedCalculatorIds: ['contribution-margin', 'cac', 'return-rate'],
    ...contractContent.ru,
  },
};
