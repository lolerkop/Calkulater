import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomPrismCopyEn } from './copy.en';
import { geomPrismCopyUk } from './copy.uk';
import { geomPrismCopyDe } from './copy.de';
import { geomPrismCopyEs } from './copy.es';
import { geomPrismReferenceCases } from './referenceCases';

const UNITS = [
  { value: 'mm', label: 'миллиметры' },
  { value: 'cm', label: 'сантиметры' },
  { value: 'm', label: 'метры' },
];

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-prism',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: geomPrismCopyEn, uk: geomPrismCopyUk, de: geomPrismCopyDe, es: geomPrismCopyEs },
  referenceCases: geomPrismReferenceCases,
  publishedExample: {
    inputs: { unit: 'cm', sides: 6, side: 4, height: 10 },
    expected: ['415,69 см³'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'geom-prism',
    name: 'Калькулятор призмы',
    slug: 'geom-prism',
    fullPath: '/geometry/geom-prism/',
    category: 'geometry',
    icon: 'cuboid',
    popularity: 22,
    isNew: false,
    seoTitle: 'Калькулятор призмы: объём и площадь поверхности',
    h1: 'Калькулятор призмы',
    keywords: ['калькулятор призмы', 'объём призмы', 'площадь поверхности призмы', 'правильная призма'],
    fields: [
      { name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm', options: UNITS },
      { name: 'sides', label: 'Сторон основания', type: 'number', unit: '1', defaultValue: 6, min: 3, max: 100, step: 1 },
      { name: 'side', label: 'Сторона основания', type: 'number', unit: 'см', defaultValue: 4, min: 0, step: 0.5 },
      { name: 'height', label: 'Высота призмы', type: 'number', unit: 'см', defaultValue: 10, min: 0, step: 0.5 },
    ],
    resultLabels: {
      volume: 'Объём',
      base: 'Площадь основания',
      lateral: 'Боковая поверхность',
      total: 'Полная поверхность',
      perimeter: 'Периметр основания',
    },
    relatedCalculatorIds: ['geom-cuboid', 'geom-regular-polygon', 'geom-cylinder'],
  },
};
