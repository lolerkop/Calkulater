// Доля возвратов. Процентный вывод с перекрёстной проверкой «часть ≤ целого».

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { returnRateCopyEn } from './copy.en';
import { returnRateCopyUk } from './copy.uk';
import { returnRateCopyDe } from './copy.de';
import { returnRateCopyEs } from './copy.es';
import { returnRateReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'return-rate',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: returnRateCopyEn, uk: returnRateCopyUk, de: returnRateCopyDe, es: returnRateCopyEs },
  referenceCases: returnRateReferenceCases,
  publishedExample: { inputs: { returns: 45, orders: 900 }, expected: ['5,00 %'] },
  presentation: {
    id: 'return-rate',
    name: 'Калькулятор доли возвратов',
    slug: 'return-rate',
    fullPath: '/business/return-rate/',
    category: 'business',
    icon: 'trending-up',
    popularity: 41,
    isNew: false,
    shortDescription: 'Какая часть заказов вернулась.',
    seoTitle: 'Калькулятор доли возвратов — процент возвращённых заказов',
    seoDescription:
      "Рассчитайте долю уникальных возвращённых заказов в одной группе и её дополнение до 100%. Возвраты и знаменатель должны относиться к одним заказам.",
    h1: 'Калькулятор доли возвратов',
    keywords: ['доля возвратов', 'процент возвратов', 'возвраты в e-commerce'],
    fields: [
      { name: 'returns', label: 'Возвращено заказов', type: 'number', defaultValue: 45, min: 0, step: 1 },
      { name: 'orders', label: 'Всего заказов', type: 'number', defaultValue: 900, min: 0, step: 1 },
    ],
    resultLabels: { rate: 'Доля возвратов', kept: 'Оставлено покупателями' },
    relatedCalculatorIds: ['aov', 'contribution-margin', 'cac'],
    ...contractContent.ru,
  },
};
