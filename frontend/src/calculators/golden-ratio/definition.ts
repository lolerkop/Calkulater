import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// Золотое сечение: деление отрезка и построение партнёра по φ.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { goldenRatioCopyEn } from './copy.en';
import { goldenRatioCopyUk } from './copy.uk';
import { goldenRatioCopyDe } from './copy.de';
import { goldenRatioCopyEs } from './copy.es';
import { goldenRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'golden-ratio',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: goldenRatioCopyEn, uk: goldenRatioCopyUk, de: goldenRatioCopyDe, es: goldenRatioCopyEs },
  referenceCases: goldenRatioReferenceCases,
  publishedExample: { inputs: { mode: 'split', total: 100 }, expected: ['61,8034'] },
  presentation: {
    ...contractContent.ru,
    id: 'golden-ratio',
    name: 'Калькулятор золотого сечения',
    slug: 'golden-ratio',
    fullPath: '/geometry/golden-ratio/',
    category: 'geometry',
    icon: 'shapes',
    popularity: 43,
    isNew: false,
    seoTitle: 'Калькулятор золотого сечения — деление отрезка по φ',
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
      { name: 'total', label: 'Длина отрезка', type: 'number', unit: 'ед. длины', defaultValue: 100, min: 0, step: 1, showIf: { field: 'mode', equals: 'split' } },
      { name: 'a', label: 'Известный размер', type: 'number', unit: 'ед. длины', defaultValue: 34, min: 0, step: 1, showIf: { field: 'mode', equals: 'grow' } },
    ],
    resultLabels: {
      larger: 'Большая часть', smaller: 'Меньшая часть',
      grown: 'Больший отрезок', shrunk: 'Меньший отрезок', phi: 'φ',
    },
    relatedCalculatorIds: ['geom-rectangle', 'proportion', 'aspect-ratio'],
  },
};
