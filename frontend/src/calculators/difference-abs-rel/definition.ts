// Абсолютная и относительная разница. Отличается от процентного изменения
// знаменателем: здесь берётся модуль исходного значения.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { differenceAbsRelCopyEn } from './copy.en';
import { differenceAbsRelCopyUk } from './copy.uk';
import { differenceAbsRelCopyDe } from './copy.de';
import { differenceAbsRelCopyEs } from './copy.es';
import { differenceAbsRelReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'difference-abs-rel',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: differenceAbsRelCopyEn, uk: differenceAbsRelCopyUk, de: differenceAbsRelCopyDe, es: differenceAbsRelCopyEs },
  referenceCases: differenceAbsRelReferenceCases,
  publishedExample: { inputs: { from: 120, to: 150 }, expected: ['30', '25,00 %'] },
  presentation: {
    id: 'difference-abs-rel',
    name: 'Абсолютная и относительная разница',
    slug: 'difference-abs-rel',
    fullPath: '/math/difference-abs-rel/',
    category: 'math',
    icon: 'calculator',
    popularity: 42,
    isNew: false,
    shortDescription: 'Насколько отличаются два значения — в единицах и процентах.',
    seoTitle: 'Калькулятор абсолютной и относительной разницы',
    seoDescription:
      "Найдите разницу двух значений со знаком и относительную разницу к модулю исходной базы. Отрицательная база допустима; при нуле относительный процент не определён.",
    h1: 'Абсолютная и относительная разница',
    keywords: ['абсолютная разница', 'относительная разница', 'разница в процентах'],
    fields: [
      { name: 'from', label: 'Было', type: 'number', defaultValue: 100, signed: true },
      { name: 'to', label: 'Стало', type: 'number', defaultValue: 120, signed: true },
    ],
    resultLabels: { absolute: 'Абсолютная разница', relative: 'Относительная разница' },
    relatedCalculatorIds: ['proportion', 'logarithm', 'percent-calculator'],
    ...contractContent.ru,
  },
};
