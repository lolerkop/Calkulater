// Дивидендная доходность. Процентный вывод, никаких внешних котировок.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { dividendYieldCopyEn } from './copy.en';
import { dividendYieldCopyUk } from './copy.uk';
import { dividendYieldCopyDe } from './copy.de';
import { dividendYieldCopyEs } from './copy.es';
import { dividendYieldReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'dividend-yield',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dividendYieldCopyEn, uk: dividendYieldCopyUk, de: dividendYieldCopyDe, es: dividendYieldCopyEs },
  referenceCases: dividendYieldReferenceCases,
  publishedExample: { inputs: { dividend: 12, price: 200, shares: 2.5 }, expected: ['6,00 %', '30 ₽', '500 ₽'] },
  presentation: {
    id: 'dividend-yield',
    name: 'Калькулятор дивидендной доходности',
    slug: 'dividend-yield',
    fullPath: '/finance/dividend-yield/',
    category: 'finance',
    icon: 'percent',
    popularity: 46,
    isNew: false,
    shortDescription: "Годовой дивиденд как доля указанной цены акции.",
    seoTitle: 'Калькулятор дивидендной доходности — доходность в процентах',
    seoDescription:
      'Расчёт дивидендной доходности по годовому дивиденду на акцию и цене акции, вместе с доходом на пакет.',
    h1: 'Калькулятор дивидендной доходности',
    keywords: ['дивидендная доходность', 'калькулятор дивидендов', 'доходность акций'],
    fields: [
      { name: 'dividend', label: 'Дивиденд на акцию за год', type: 'number', defaultValue: 12, min: 0 },
      { name: 'price', label: 'Цена акции', type: 'number', defaultValue: 200, min: 0 },
      { name: 'shares', label: 'Число акций', type: 'number', defaultValue: 0, min: 0, step: 1, optional: true },
    ],
    resultLabels: { yield: 'Дивидендная доходность' },
    relatedCalculatorIds: ['roi', 'simple-interest', 'compound-interest'],
    ...contractContent.ru,
  },
};
