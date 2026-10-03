import { mathWave8ContractContent } from './contractContent';
// Z-оценка: отклонение значения от среднего в стандартных отклонениях.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { zScoreCopyEn } from './copy.en';
import { zScoreCopyUk } from './copy.uk';
import { zScoreCopyDe } from './copy.de';
import { zScoreCopyEs } from './copy.es';
import { zScoreReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'z-score',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: zScoreCopyEn, uk: zScoreCopyUk, de: zScoreCopyDe, es: zScoreCopyEs },
  referenceCases: zScoreReferenceCases,
  publishedExample: { inputs: { x: 80, mean: 75, sd: 8 }, expected: ['0,625'] },
  presentation: {
    id: 'z-score',
    name: 'Калькулятор Z-оценки',
    slug: 'z-score',
    fullPath: '/math/z-score/',
    category: 'math',
    icon: 'chart',
    popularity: 44,
    isNew: false,
    shortDescription: 'На сколько стандартных отклонений значение отстоит от среднего.',
    seoTitle: 'Калькулятор Z-оценки — стандартизованное значение',
    seoDescription: 'Рассчитайте Z-оценку значения по среднему и стандартному отклонению: z = (x − μ) / σ.',
    h1: 'Калькулятор Z-оценки',
    keywords: ['z-оценка', 'калькулятор z-score', 'стандартизованное значение', 'сигма от среднего'],
    fields: [
      { name: 'x', label: 'Значение', type: 'number', unit: 'ед. данных', defaultValue: 80, step: 0.1, signed: true },
      { name: 'mean', label: 'Среднее', type: 'number', unit: 'ед. данных', defaultValue: 75, step: 0.1, signed: true },
      { name: 'sd', label: 'Стандартное отклонение', type: 'number', unit: 'ед. данных', defaultValue: 8, min: 0, step: 0.1 },
    ],
    resultLabels: { z: 'Z-оценка', deviation: 'Отклонение', position: 'Положение' },
    relatedCalculatorIds: ['stats-descriptive', 'weighted-mean', 'probability-basic'],
    ...mathWave8ContractContent.ru,
  },
};
