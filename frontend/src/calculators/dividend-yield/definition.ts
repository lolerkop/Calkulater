// Дивидендная доходность. Процентный вывод, никаких внешних котировок.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { dividendYieldCopyEn } from './copy.en';
import { dividendYieldCopyUk } from './copy.uk';
import { dividendYieldCopyDe } from './copy.de';
import { dividendYieldReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'dividend-yield',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dividendYieldCopyEn, uk: dividendYieldCopyUk, de: dividendYieldCopyDe },
  referenceCases: dividendYieldReferenceCases,
  publishedExample: { inputs: { dividend: 12, price: 200 }, expected: ['6,00 %'] },
  presentation: {
    id: 'dividend-yield',
    name: 'Калькулятор дивидендной доходности',
    slug: 'dividend-yield',
    fullPath: '/finance/dividend-yield/',
    category: 'finance',
    icon: 'percent',
    popularity: 46,
    isNew: false,
    shortDescription: 'Годовой дивиденд как доля от уплаченной цены.',
    longDescription:
      'Дивидендная доходность соотносит годовой дивиденд с ценой акции. Обе величины вводите вы: доходность к цене покупки — это не доходность к сегодняшней рыночной цене, и калькулятор не станет молча подменять одно другим.',
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
    howToUse: ['Введите годовой дивиденд на одну акцию.', 'Введите цену акции.', 'При необходимости укажите размер пакета.'],
    howItWorks: 'Доходность = годовой дивиденд на акцию ÷ цена акции × 100.',
    example: 'Дивиденд 12 при цене акции 200 даёт доходность 6 %.',
    faq: [
      { q: 'Какую цену подставлять?', a: 'Цена покупки даёт доходность к вашим затратам, текущая — доходность для нового покупателя. Это разные числа, и оба законны.' },
      { q: 'Учитывается ли налог на дивиденды?', a: 'Нет. Введите дивиденд после налога, если нужна чистая доходность.' },
      { q: 'Загружает ли калькулятор котировки?', a: 'Нет. Он работает только с введёнными вами числами и никуда не обращается.' },
      { q: 'Высокая доходность — это всегда хорошо?', a: 'Не обязательно. Доходность растёт, когда падает цена, поэтому необычно высокая цифра чаще отражает проблему, чем щедрость.' },
    ],
    relatedCalculatorIds: ['roi', 'simple-interest', 'compound-interest'],
    disclaimer: FIN_DISCLAIMER,
  },
};
