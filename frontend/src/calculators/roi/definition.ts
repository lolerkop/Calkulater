// ROI. Необязательное поле дополнительных затрат, знаковый результат.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { roiCopyEn } from './copy.en';
import { roiCopyUk } from './copy.uk';
import { roiReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'roi',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roiCopyEn, uk: roiCopyUk },
  referenceCases: roiReferenceCases,
  publishedExample: { inputs: { received: 130000, invested: 100000 }, expected: ['30,00 %'] },
  presentation: {
    id: 'roi',
    name: 'ROI-калькулятор',
    slug: 'roi',
    fullPath: '/finance/roi/',
    category: 'finance',
    icon: 'percent',
    popularity: 51,
    isNew: true,
    shortDescription: 'Возврат на вложения с правильным учётом дополнительных затрат.',
    longDescription:
      'Возврат на вложения сравнивает прибыль со всем, во что вложение обошлось. Дополнительные затраты входят и в числитель, и в знаменатель, потому что они такая же часть вложений, как основная сумма, — учитывать их только против прибыли значит приукрасить результат.',
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
    howToUse: ['Введите полученную сумму.', 'Введите вложенную сумму.', 'При необходимости добавьте дополнительные затраты.'],
    howItWorks: 'ROI = (получено − вложено − дополнительные) ÷ (вложено + дополнительные) × 100.',
    example: 'Получив 130 000 при вложении 100 000, вы получаете доходность 30 %.',
    faq: [
      { q: 'Почему дополнительные затраты учитываются дважды?', a: 'Они уменьшают прибыль и увеличивают вложенное. Учитывать их только против прибыли значит завысить доходность.' },
      { q: 'Чем это отличается от ROI рекламы?', a: 'Формула та же; отличается то, что считается вложением. В рекламной версии это расходы и выручка кампании.' },
      { q: 'Учитывает ли ROI время?', a: 'Нет. Тридцать процентов за год и за пять лет здесь выглядят одинаково — для годовых величин используйте сложный процент.' },
      { q: 'Что означает отрицательный ROI?', a: 'Вернулось меньше вложенного. Калькулятор показывает это, а не обрезает до нуля.' },
    ],
    relatedCalculatorIds: ['simple-interest', 'compound-interest', 'dti'],
    disclaimer: FIN_DISCLAIMER,
  },
};
