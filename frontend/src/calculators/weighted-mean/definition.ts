import { mathWave8ContractContent } from './contractContent';
// Средневзвешенное значение по парам «значение вес».

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { weightedMeanCopyEn } from './copy.en';
import { weightedMeanCopyUk } from './copy.uk';
import { weightedMeanCopyDe } from './copy.de';
import { weightedMeanCopyEs } from './copy.es';
import { weightedMeanReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'weighted-mean',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: weightedMeanCopyEn, uk: weightedMeanCopyUk, de: weightedMeanCopyDe, es: weightedMeanCopyEs },
  referenceCases: weightedMeanReferenceCases,
  publishedExample: { inputs: { pairs: '5 2\n4 3\n3 1' }, expected: ['4,1667'] },
  presentation: {
    id: 'weighted-mean',
    name: 'Калькулятор средневзвешенного значения',
    slug: 'weighted-average',
    fullPath: '/math/weighted-average/',
    category: 'math',
    icon: 'chart',
    popularity: 50,
    isNew: false,
    shortDescription: 'Среднее с учётом веса каждого значения: оценок, долей, объёмов.',
    seoTitle: 'Калькулятор средневзвешенного значения',
    seoDescription: 'Рассчитайте средневзвешенное значение по парам «значение вес»: оценки с кредитами, цены с объёмами, баллы с часами.',
    h1: 'Калькулятор средневзвешенного значения',
    keywords: ['средневзвешенное значение', 'взвешенное среднее', 'калькулятор среднего с весами'],
    fields: [
      {
        // Подпись несёт грамматику: help у поля не локализуется.
        name: 'pairs',
        label: 'Пары «значение вес» — по одной в строке',
        type: 'textarea',
        defaultValue: '5 2\n4 3\n3 1',
      },
    ],
    resultLabels: {
      weighted: 'Взвешенное среднее',
      weightSum: 'Сумма весов',
      productSum: 'Сумма произведений',
      pairs: 'Количество пар',
    },
    relatedCalculatorIds: ['stats-descriptive', 'z-score', 'proportion'],
    ...mathWave8ContractContent.ru,
  },
};
