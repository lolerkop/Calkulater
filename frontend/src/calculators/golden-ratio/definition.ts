// Золотое сечение: деление отрезка и построение партнёра по φ.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { goldenRatioCopyEn } from './copy.en';
import { goldenRatioCopyUk } from './copy.uk';
import { goldenRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'golden-ratio',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: goldenRatioCopyEn, uk: goldenRatioCopyUk },
  referenceCases: goldenRatioReferenceCases,
  publishedExample: { inputs: { mode: 'split', total: 100 }, expected: ['61,8034'] },
  presentation: {
    id: 'golden-ratio',
    name: 'Калькулятор золотого сечения',
    slug: 'golden-ratio',
    fullPath: '/geometry/golden-ratio/',
    category: 'geometry',
    icon: 'shapes',
    popularity: 43,
    isNew: false,
    shortDescription: 'Деление отрезка в отношении φ и подбор второго размера по нему.',
    longDescription:
      'Делит отрезок в золотом отношении и подбирает партнёра к заданному размеру. φ = (1 + √5)/2 считается из корня в полной точности и округляется только при выводе: записать 1,618 источником истины значило бы потерять точность ровно там, где её и хотят. Пригодится в вёрстке и типографике, где по φ подбирают ширину колонки к полосе или размер заголовка к основному тексту.',
    seoTitle: 'Калькулятор золотого сечения — деление отрезка по φ',
    seoDescription: 'Разделите отрезок в золотом отношении или подберите второй размер по φ = (1 + √5)/2.',
    h1: 'Калькулятор золотого сечения',
    keywords: ['золотое сечение', 'калькулятор φ', 'божественная пропорция', 'деление отрезка'],
    fields: [
      {
        name: 'mode', label: 'Что нужно', type: 'select', defaultValue: 'split',
        options: [
          { value: 'split', label: 'разделить отрезок' },
          { value: 'grow', label: 'подобрать партнёра' },
        ],
      },
      { name: 'total', label: 'Длина отрезка', type: 'number', defaultValue: 100, min: 0, step: 1, showIf: { field: 'mode', equals: 'split' } },
      { name: 'a', label: 'Известный размер', type: 'number', defaultValue: 34, min: 0, step: 1, showIf: { field: 'mode', equals: 'grow' } },
    ],
    resultLabels: {
      larger: 'Большая часть', smaller: 'Меньшая часть',
      grown: 'Больший отрезок', shrunk: 'Меньший отрезок', phi: 'φ',
    },
    howToUse: ['Выберите, делить отрезок или подбирать партнёра.', 'Введите известную длину.', 'Прочитайте обе части или оба размера.'],
    howItWorks:
      'φ = (1 + √5)/2 ≈ 1,618034. Отрезок делится так, что целое относится к большей части, как большая к меньшей: большая часть равна длине, делённой на φ. В режиме подбора известный размер умножается и делится на φ, давая обоих соседей по ряду.',
    example: 'Отрезок 100 делится на 61,8034 и 38,1966 — их отношение равно отношению целого к большей части.',
    faq: [
      { q: 'Почему φ не задано просто числом 1,618?', a: 'Потому что φ иррационально. Оно вычисляется из корня в полной точности и округляется только при выводе — иначе отношение частей переставало бы быть точным уже во втором делении.' },
      { q: 'Как проверить, что деление верное?', a: 'Разделите целое на большую часть и большую на меньшую: оба отношения дадут одно и то же число φ. В этом и состоит определение.' },
      { q: 'Где золотое сечение применяют на практике?', a: 'В вёрстке и типографике — подобрать ширину колонки к полосе, размер заголовка к тексту, пропорции карточки. Это приём композиции, а не закон природы.' },
      { q: 'Связано ли это с числами Фибоначчи?', a: 'Да: отношение соседних чисел Фибоначчи стремится к φ. Поэтому 34 и 55 — почти золотая пара, что видно в режиме подбора.' },
    ],
    relatedCalculatorIds: ['geom-rectangle', 'proportion', 'aspect-ratio'],
  },
};
