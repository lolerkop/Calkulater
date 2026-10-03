import { contractContent } from './contractContent';
// Маржинальный доход. Первый калькулятор категории «Бизнес и маркетинг».

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contributionMarginCopyEn } from './copy.en';
import { contributionMarginCopyUk } from './copy.uk';
import { contributionMarginCopyDe } from './copy.de';
import { contributionMarginCopyEs } from './copy.es';
import { contributionMarginReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'contribution-margin',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: contributionMarginCopyEn, uk: contributionMarginCopyUk, de: contributionMarginCopyDe, es: contributionMarginCopyEs },
  referenceCases: contributionMarginReferenceCases,
  publishedExample: { inputs: { price: 500, variable: 300 }, expected: ['200 ₽', '40,00 %'] },
  presentation: {
    id: 'contribution-margin',
    name: 'Калькулятор маржинального дохода',
    slug: 'contribution-margin',
    fullPath: '/business/contribution-margin/',
    category: 'business',
    icon: 'trending-up',
    popularity: 44,
    isNew: false,
    shortDescription: 'Сколько остаётся от цены после переменных затрат.',
    seoTitle: 'Калькулятор маржинального дохода — маржа на единицу и её доля',
    seoDescription:
      'Расчёт маржинального дохода на единицу, его доли в цене и маржи на заданный объём.',
    h1: 'Калькулятор маржинального дохода',
    keywords: ['маржинальный доход', 'маржа на единицу', 'юнит-экономика'],
    fields: [
      { name: 'price', label: 'Цена за единицу', type: 'number', defaultValue: 500, min: 0 },
      { name: 'variable', label: 'Переменные затраты на единицу', type: 'number', defaultValue: 300, min: 0 },
      { name: 'volume', label: 'Объём, единиц', type: 'number', defaultValue: 0, min: 0, optional: true },
    ],
    resultLabels: { margin: 'Маржинальный доход', ratio: 'Доля в цене' },
    relatedCalculatorIds: ['cac', 'break-even-calculator', 'margin-calculator'],
    ...contractContent.ru,
  },
};
