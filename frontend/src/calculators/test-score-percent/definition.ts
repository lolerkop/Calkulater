import { validate } from './validate';
import { contractContent } from './contractContent';
// Процент за тест. Первая категория education.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { testScorePercentCopyEn } from './copy.en';
import { testScorePercentCopyUk } from './copy.uk';
import { testScorePercentCopyDe } from './copy.de';
import { testScorePercentCopyEs } from './copy.es';
import { testScorePercentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'test-score-percent',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: testScorePercentCopyEn, uk: testScorePercentCopyUk, de: testScorePercentCopyDe, es: testScorePercentCopyEs },
  referenceCases: testScorePercentReferenceCases,
  publishedExample: { inputs: { correct: 18, total: 20 }, expected: ['90,00%'] },
  presentation: {
  id: 'test-score-percent',
  name: 'Калькулятор процента за тест',
  slug: 'test-score-percent',
  fullPath: '/education/test-score-percent/',
  category: 'education',
  icon: 'graduation-cap',
  popularity: 40,
  isNew: false,
  shortDescription: 'Переводит правильные ответы в процент и сверяет с проходным баллом.',
  seoTitle: 'Калькулятор процента за тест — правильные ответы в проценты',
  seoDescription:
      'Переведите правильные ответы в процент за тест, посмотрите число ошибок и проверьте, взят ли проходной балл.',
  h1: 'Калькулятор процента за тест',
  keywords: ['процент за тест', 'калькулятор баллов', 'правильные ответы в процентах'],
  fields: [
      { name: 'correct', label: 'Правильных ответов', type: 'number', defaultValue: 18, min: 0, step: 1 },
      { name: 'total', label: 'Всего вопросов', type: 'number', defaultValue: 20, min: 1, step: 1 },
      { name: 'passMark', label: 'Проходной балл, %', type: 'number', defaultValue: 0, min: 0, max: 100, step: 1, optional: true },
    ],
  resultLabels: { result: 'Результат', correct: 'Правильных', wrong: 'Ошибок', pass: 'Проходной балл' },
  relatedCalculatorIds: ['reading-speed', 'percent-calculator', 'proportion'],
  ...contractContent.ru
},
};
