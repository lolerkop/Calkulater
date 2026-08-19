// Сочетания и размещения: два режима на флаг повторений — четыре формулы.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { combinatoricsCopyEn } from './copy.en';
import { combinatoricsCopyUk } from './copy.uk';
import { combinatoricsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'combinatorics',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: combinatoricsCopyEn, uk: combinatoricsCopyUk },
  referenceCases: combinatoricsReferenceCases,
  publishedExample: { inputs: { mode: 'combinations', n: 10, k: 3 }, expected: ['120'] },
  presentation: {
    id: 'combinatorics',
    name: 'Калькулятор сочетаний и размещений',
    slug: 'combinatorics',
    fullPath: '/math/combinatorics/',
    category: 'math',
    icon: 'calculator',
    popularity: 34,
    isNew: true,
    shortDescription: 'Сочетания и размещения, с повторениями и без.',
    longDescription:
      'Считает, сколькими способами можно сделать выборку из множества, во всех четырёх вариантах: важен порядок или нет, разрешены повторения или нет. Арифметика точная целочисленная — количество вариантов растёт достаточно быстро, чтобы обычная точность браузера незаметно потеряла младшие разряды задолго до того, как ответ перестанет быть осмысленным.',
    seoTitle: 'Калькулятор сочетаний и размещений — nCr и nPr',
    seoDescription:
      'Рассчитайте сочетания и размещения с повторениями или без, с точным целочисленным результатом.',
    h1: 'Калькулятор сочетаний и размещений',
    keywords: ['калькулятор сочетаний', 'размещения', 'nCr nPr'],
    fields: [
      {
        name: 'mode', label: 'Что считаем', type: 'select', defaultValue: 'combinations',
        options: [
          { value: 'combinations', label: 'сочетания' },
          { value: 'permutations', label: 'размещения' },
        ],
      },
      {
        name: 'repetition', label: 'Разрешить повторения', type: 'toggle', defaultValue: 'no',
        options: [{ value: 'no', label: 'Нет' }, { value: 'yes', label: 'Да' }],
      },
      { name: 'n', label: 'Размер множества n', type: 'number', defaultValue: 10, min: 0, max: 1000, step: 1 },
      { name: 'k', label: 'Размер выборки k', type: 'number', defaultValue: 3, min: 0, max: 1000, step: 1 },
    ],
    resultLabels: { result: 'Количество вариантов', formula: 'Формула', order: 'Порядок важен', repetition: 'Повторения разрешены' },
    howToUse: ['Выберите сочетания или размещения.', 'Укажите, разрешены ли повторения.', 'Введите размер множества и размер выборки.'],
    howItWorks:
      'Сочетания считаются как C(n, k), размещения — как P(n, k); с повторениями они превращаются в C(n + k − 1, k) и n в степени k.',
    example: 'Выбор 5 карт из 52 даёт C(52, 5) = 2 598 960 возможных рук.',
    faq: [
      { q: 'Чем сочетания отличаются от размещений?', a: 'Порядком. Сочетания считают AB и BA одной и той же выборкой, размещения — двумя разными.' },
      { q: 'Когда выборка может превышать множество?', a: 'Только при разрешённых повторениях. Взять 5 предметов из 3 видов осмысленно, если каждый вид можно брать не по одному разу.' },
      { q: 'Почему результат считается в точных целых?', a: 'Количество вариантов быстро выходит за безопасный диапазон обычных чисел. Уже C(60, 30) его превышает, и округление там незаметно испортило бы ответ.' },
      { q: 'Зачем верхний предел?', a: 'Выше тысячи результат содержит сотни разрядов и перестаёт читаться. Ограничение про пользу, а не про арифметику.' },
    ],
    relatedCalculatorIds: ['linear-equation', 'prime-factorization', 'proportion'],
  },
};
