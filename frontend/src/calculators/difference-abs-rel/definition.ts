// Абсолютная и относительная разница. Отличается от процентного изменения
// знаменателем: здесь берётся модуль исходного значения.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { differenceAbsRelCopyEn } from './copy.en';
import { differenceAbsRelCopyUk } from './copy.uk';
import { differenceAbsRelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'difference-abs-rel',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: differenceAbsRelCopyEn, uk: differenceAbsRelCopyUk },
  referenceCases: differenceAbsRelReferenceCases,
  publishedExample: { inputs: { from: 100, to: 120 }, expected: ['20', '20,00 %'] },
  presentation: {
    id: 'difference-abs-rel',
    name: 'Абсолютная и относительная разница',
    slug: 'difference-abs-rel',
    fullPath: '/math/difference-abs-rel/',
    category: 'math',
    icon: 'calculator',
    popularity: 42,
    isNew: true,
    shortDescription: 'Насколько отличаются два значения — в единицах и процентах.',
    longDescription:
      'Показывает обе разницы сразу: обычную разность и её размер относительно исходного значения. Знаменателем служит модуль базы, поэтому рост от отрицательного числа читается как рост, а не как отрицательный процент.',
    seoTitle: 'Калькулятор абсолютной и относительной разницы',
    seoDescription:
      'Найдите абсолютную разницу между двумя значениями и относительную разницу в процентах, в том числе при отрицательной базе.',
    h1: 'Абсолютная и относительная разница',
    keywords: ['абсолютная разница', 'относительная разница', 'разница в процентах'],
    fields: [
      { name: 'from', label: 'Было', type: 'number', defaultValue: 100, signed: true },
      { name: 'to', label: 'Стало', type: 'number', defaultValue: 120, signed: true },
    ],
    resultLabels: { absolute: 'Абсолютная разница', relative: 'Относительная разница' },
    howToUse: ['Введите исходное значение.', 'Введите новое значение.', 'Прочитайте обе разницы.'],
    howItWorks:
      'Абсолютная = стало − было. Относительная = эта разница, делённая на модуль исходного значения, умноженная на 100.',
    example: 'Со 100 до 120 абсолютная разница равна 20, относительная — 20 %.',
    faq: [
      { q: 'Чем это отличается от процентного изменения?', a: 'Процентное изменение делит на саму базу. Здесь делитель — её модуль, поэтому рост от отрицательного числа читается как положительный.' },
      { q: 'Почему относительная разница иногда отсутствует?', a: 'Когда исходное значение равно нулю, делить не на что, и существует только абсолютная разница.' },
      { q: 'Какое значение считается базой?', a: 'Первое — то, от которого вы отталкиваетесь. Если поменять значения местами, процент изменится.' },
      { q: 'Могут ли оба значения быть отрицательными?', a: 'Да. Абсолютная разница сохраняет знак, а относительная измеряется относительно размера базы.' },
    ],
    relatedCalculatorIds: ['proportion', 'logarithm', 'percent-calculator'],
  },
};
