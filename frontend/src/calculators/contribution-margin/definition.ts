// Маржинальный доход. Первый калькулятор категории «Бизнес и маркетинг».

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { contributionMarginCopyEn } from './copy.en';
import { contributionMarginCopyUk } from './copy.uk';
import { contributionMarginCopyDe } from './copy.de';
import { contributionMarginReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'contribution-margin',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: contributionMarginCopyEn, uk: contributionMarginCopyUk, de: contributionMarginCopyDe },
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
    longDescription:
      'Маржинальный доход — это часть цены, которая переживает переменные затраты и идёт на покрытие постоянных расходов и прибыль. Доля в цене важнее абсолютной суммы: она позволяет сравнивать товары с совершенно разными ценниками.',
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
    howToUse: ['Введите цену за единицу.', 'Введите переменные затраты на единицу.', 'При необходимости добавьте объём, чтобы увидеть сумму.'],
    howItWorks:
      'Маржинальный доход = цена − переменные затраты. Доля в цене — эта разница, делённая на цену.',
    example: 'Цена 500 при переменных затратах 300 оставляет маржу 200, то есть 40 % от цены.',
    faq: [
      { q: 'Какие затраты считать переменными?', a: 'Те, что растут с каждой дополнительной единицей: материалы, сдельная оплата, упаковка, эквайринг. Аренда и оклады постоянны и сюда не входят.' },
      { q: 'Почему доля полезнее суммы?', a: 'Она не зависит от уровня цены, поэтому товары с очень разной стоимостью становятся сравнимыми.' },
      { q: 'Что значит отрицательная маржа?', a: 'Каждая проданная единица увеличивает убыток. Калькулятор показывает это прямо, а не отклоняет ввод.' },
      { q: 'Это то же самое, что валовая прибыль?', a: 'Нет. Валовая прибыль вычитает полную себестоимость, маржинальный доход — только переменную часть.' },
    ],
    relatedCalculatorIds: ['cac', 'break-even-calculator', 'margin-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
