// Процент за тест. Первая категория education.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { testScorePercentCopyEn } from './copy.en';
import { testScorePercentCopyUk } from './copy.uk';
import { testScorePercentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'test-score-percent',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: testScorePercentCopyEn, uk: testScorePercentCopyUk },
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
    isNew: true,
    shortDescription: 'Переводит правильные ответы в процент и сверяет с проходным баллом.',
    longDescription:
      'Делит правильные ответы на общее число вопросов и показывает процент, количество ошибок и их долю. Если задать проходной балл, к результату добавится вердикт. Знаменателем служат все вопросы теста, поэтому пропуск обходится так же дорого, как и неверный ответ.',
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
    howToUse: ['Введите число правильных ответов.', 'Введите общее число вопросов теста.', 'При желании задайте проходной балл для вердикта.'],
    howItWorks: 'процент = правильные ÷ всего × 100, а число ошибок — это просто разность.',
    example: '18 правильных из 20 вопросов дают 18 ÷ 20 × 100 = 90 процентов.',
    faq: [
      { q: 'Почему нет перевода в оценку?', a: 'Шкалы оценок различаются от школы к школе и от страны к стране. Без справочника такой перевод был бы выдумкой, поэтому результат остаётся процентом.' },
      { q: 'Считаются ли пропущенные вопросы?', a: 'Да. Знаменателем служит весь тест, поэтому неотвеченный вопрос стоит столько же, сколько неверный.' },
      { q: 'Что будет, если правильных больше, чем вопросов?', a: 'Такой ввод отвергается. Арифметика спокойно вернула бы 105 процентов — число, похожее на ответ, но означающее ошибку ввода.' },
      { q: 'Обязательно ли указывать проходной балл?', a: 'Нет, поле необязательное. Оставьте его пустым, и вы просто получите процент без вердикта.' },
    ],
    relatedCalculatorIds: ['reading-speed', 'percent-calculator', 'proportion'],
  },
};
