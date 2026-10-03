import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// Прямоугольный параллелепипед: объём, поверхность и диагональ.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomCuboidCopyEn } from './copy.en';
import { geomCuboidCopyUk } from './copy.uk';
import { geomCuboidCopyDe } from './copy.de';
import { geomCuboidCopyEs } from './copy.es';
import { geomCuboidReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-cuboid',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomCuboidCopyEn, uk: geomCuboidCopyUk, de: geomCuboidCopyDe, es: geomCuboidCopyEs },
  referenceCases: geomCuboidReferenceCases,
  publishedExample: { inputs: { unit: 'cm', a: 3, b: 4, c: 5 }, expected: ['60 см³'] },
  presentation: {
    ...contractContent.ru,
    id: 'geom-cuboid',
    name: 'Калькулятор прямоугольного параллелепипеда',
    slug: 'cuboid',
    fullPath: '/geometry/cuboid/',
    category: 'geometry',
    icon: 'shapes',
    popularity: 46,
    isNew: false,
    seoTitle: 'Калькулятор параллелепипеда — объём, поверхность, диагональ',
    h1: 'Калькулятор прямоугольного параллелепипеда',
    keywords: ['калькулятор параллелепипеда', 'объём параллелепипеда', 'площадь поверхности', 'диагональ коробки'],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'a', label: 'Ребро a', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'b', label: 'Ребро b', type: 'number', unit: 'см', defaultValue: 4, min: 0, step: 0.1 },
      { name: 'c', label: 'Ребро c', type: 'number', unit: 'см', defaultValue: 5, min: 0, step: 0.1 },
    ],
    resultLabels: { volume: 'Объём', surface: 'Площадь поверхности', diagonal: 'Диагональ', edges: 'Сумма длин рёбер' },
    relatedCalculatorIds: ['geom-square', 'geom-rectangle', 'geom-cylinder'],
  },
};
