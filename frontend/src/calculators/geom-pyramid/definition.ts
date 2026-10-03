import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomPyramidCopyEn } from './copy.en';
import { geomPyramidCopyUk } from './copy.uk';
import { geomPyramidCopyDe } from './copy.de';
import { geomPyramidCopyEs } from './copy.es';
import { geomPyramidReferenceCases } from './referenceCases';

const UNITS = [
  { value: 'mm', label: 'миллиметры' },
  { value: 'cm', label: 'сантиметры' },
  { value: 'm', label: 'метры' },
];

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-pyramid',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: geomPyramidCopyEn, uk: geomPyramidCopyUk, de: geomPyramidCopyDe, es: geomPyramidCopyEs },
  referenceCases: geomPyramidReferenceCases,
  publishedExample: {
    inputs: { unit: 'cm', sides: 4, side: 6, height: 9 },
    expected: ['108 см³'],
  },
  presentation: {
    ...contractContent.ru,
    id: 'geom-pyramid',
    name: 'Калькулятор пирамиды',
    slug: 'geom-pyramid',
    fullPath: '/geometry/geom-pyramid/',
    category: 'geometry',
    icon: 'triangle',
    popularity: 22,
    isNew: false,
    seoTitle: 'Калькулятор пирамиды: объём и площадь поверхности',
    h1: 'Калькулятор пирамиды',
    keywords: ['калькулятор пирамиды', 'объём пирамиды', 'апофема', 'площадь поверхности пирамиды'],
    fields: [
      { name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm', options: UNITS },
      { name: 'sides', label: 'Сторон основания', type: 'number', unit: '1', defaultValue: 4, min: 3, max: 100, step: 1 },
      { name: 'side', label: 'Сторона основания', type: 'number', unit: 'см', defaultValue: 6, min: 0, step: 0.5 },
      { name: 'height', label: 'Высота пирамиды', type: 'number', unit: 'см', defaultValue: 9, min: 0, step: 0.5 },
    ],
    resultLabels: {
      volume: 'Объём',
      base: 'Площадь основания',
      slant: 'Апофема',
      lateral: 'Боковая поверхность',
      total: 'Полная поверхность',
    },
    relatedCalculatorIds: ['geom-cone', 'geom-prism', 'geom-regular-polygon'],
  },
};
