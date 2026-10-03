// Доставка на единицу товара. Необязательное поле упаковки.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { shippingPerUnitCopyEn } from './copy.en';
import { shippingPerUnitCopyUk } from './copy.uk';
import { shippingPerUnitCopyDe } from './copy.de';
import { shippingPerUnitCopyEs } from './copy.es';
import { shippingPerUnitReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'shipping-per-unit',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: shippingPerUnitCopyEn, uk: shippingPerUnitCopyUk, de: shippingPerUnitCopyDe, es: shippingPerUnitCopyEs },
  referenceCases: shippingPerUnitReferenceCases,
  publishedExample: { inputs: { shipping: 5000, units: 100, packaging: 1000 }, expected: ['60 ₽', '6 000 ₽'] },
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
    relatedCalculatorIds: ['contribution-margin', 'aov', 'return-rate'],
    ...contractContent.ru,
  },
};
