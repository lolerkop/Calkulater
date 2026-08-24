// Доставка на единицу товара. Необязательное поле упаковки.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { shippingPerUnitCopyEn } from './copy.en';
import { shippingPerUnitCopyUk } from './copy.uk';
import { shippingPerUnitReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'shipping-per-unit',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: shippingPerUnitCopyEn, uk: shippingPerUnitCopyUk },
  referenceCases: shippingPerUnitReferenceCases,
  publishedExample: { inputs: { shipping: 1500, units: 25 }, expected: ['60 ₽'] },
  presentation: {
    id: 'shipping-per-unit',
    name: 'Калькулятор доставки на единицу товара',
    slug: 'shipping-per-unit',
    fullPath: '/business/shipping-per-unit/',
    category: 'business',
    icon: 'trending-up',
    popularity: 38,
    isNew: false,
    shortDescription: 'Сколько логистика добавляет к себестоимости одного товара.',
    longDescription:
      'Распределяет стоимость доставки, а при необходимости и упаковки, на единицы, которые она везла. Показатель относится к юнит-экономике и стоит рядом с переменными затратами, потому что растёт вместе с объёмом так же, как материалы.',
    seoTitle: 'Калькулятор доставки на единицу товара — логистика на товар',
    seoDescription:
      'Расчёт стоимости доставки на единицу по стоимости доставки, числу единиц и необязательной упаковке.',
    h1: 'Калькулятор доставки на единицу товара',
    keywords: ['доставка на единицу', 'логистика на товар', 'стоимость доставки'],
    fields: [
      { name: 'shipping', label: 'Стоимость доставки', type: 'number', defaultValue: 1500, min: 0 },
      { name: 'units', label: 'Единиц в партии', type: 'number', defaultValue: 25, min: 0, step: 1 },
      { name: 'packaging', label: 'Стоимость упаковки', type: 'number', defaultValue: 0, min: 0, optional: true },
    ],
    resultLabels: { perUnit: 'Доставка на единицу' },
    howToUse: ['Введите стоимость доставки партии.', 'Введите число единиц в партии.', 'При необходимости добавьте стоимость упаковки.'],
    howItWorks: 'На единицу = (доставка + упаковка) ÷ число единиц в партии.',
    example: 'Доставка 1500 за партию из 25 единиц обходится в 60 на единицу.',
    faq: [
      { q: 'Учитывать ли упаковку?', a: 'Учитывайте, если платите за неё отдельно на партию. Оставьте поле пустым — распределится только доставка.' },
      { q: 'Почему число единиц должно быть целым?', a: 'В партии целые товары; дробное значение означает, что партия или данные взяты неверно.' },
      { q: 'Это переменные затраты?', a: 'Да. Логистика растёт с объёмом, поэтому стоит рядом с материалами в маржинальном доходе.' },
      { q: 'А возвраты?', a: 'Обратная доставка — отдельная статья. Добавляйте её к стоимости доставки, только если нужна полностью нагруженная цифра.' },
    ],
    relatedCalculatorIds: ['contribution-margin', 'aov', 'return-rate'],
    disclaimer: FIN_DISCLAIMER,
  },
};
