// ROI. Необязательное поле дополнительных затрат, знаковый результат.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roiCopyEn } from './copy.en';
import { roiCopyUk } from './copy.uk';
import { roiCopyDe } from './copy.de';
import { roiCopyEs } from './copy.es';
import { roiReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'roi',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roiCopyEn, uk: roiCopyUk, de: roiCopyDe, es: roiCopyEs },
  referenceCases: roiReferenceCases,
  publishedExample: { inputs: { received: 130000, invested: 100000, extra: 5000 }, expected: ['23,81 %', '25 000 ₽', '105 000 ₽'] },
  presentation: {
    id: 'roi',
    name: 'ROI-калькулятор',
    slug: 'roi',
    fullPath: '/finance/roi/',
    category: 'finance',
    icon: 'percent',
    popularity: 51,
    isNew: false,
    shortDescription: 'Возврат на вложения с правильным учётом дополнительных затрат.',
    seoTitle: 'ROI-калькулятор — возврат на вложения в процентах',
    seoDescription:
      'Расчёт возврата на вложения по полученной и вложенной суммам, включая дополнительные затраты.',
    h1: 'ROI-калькулятор',
    keywords: ['ROI калькулятор', 'возврат на вложения', 'доходность инвестиций'],
    fields: [
      { name: 'received', label: 'Полученная сумма', type: 'number', defaultValue: 130000, min: 0 },
      { name: 'invested', label: 'Вложенная сумма', type: 'number', defaultValue: 100000, min: 0 },
      { name: 'extra', label: 'Дополнительные затраты', type: 'number', defaultValue: 0, min: 0, optional: true },
    ],
    resultLabels: { roi: 'ROI', profit: 'Прибыль' },
    relatedCalculatorIds: ['simple-interest', 'compound-interest', 'dti'],
    ...contractContent.ru,
  },
};
