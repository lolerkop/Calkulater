import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
// Сектор круга: площадь, дуга и хорда.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomSectorCopyEn } from './copy.en';
import { geomSectorCopyUk } from './copy.uk';
import { geomSectorCopyDe } from './copy.de';
import { geomSectorCopyEs } from './copy.es';
import { geomSectorReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-sector',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomSectorCopyEn, uk: geomSectorCopyUk, de: geomSectorCopyDe, es: geomSectorCopyEs },
  referenceCases: geomSectorReferenceCases,
  publishedExample: { inputs: { unit: 'cm', radius: 5, angle: 60 }, expected: ['13,09 см²'] },
  presentation: {
    ...contractContent.ru,
    id: 'geom-sector',
    name: 'Калькулятор сектора круга',
    slug: 'sector',
    fullPath: '/geometry/sector/',
    category: 'geometry',
    icon: 'shapes',
    popularity: 45,
    isNew: false,
    seoTitle: 'Калькулятор сектора круга — площадь, дуга, хорда',
    h1: 'Калькулятор сектора круга',
    keywords: ['сектор круга', 'площадь сектора', 'длина дуги', 'хорда окружности'],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'radius', label: 'Радиус', type: 'number', unit: 'см', defaultValue: 5, min: 0, step: 0.1 },
      { name: 'angle', label: 'Центральный угол', type: 'number', unit: '°', defaultValue: 60, min: 0, max: 360, step: 1 },
    ],
    resultLabels: {
      area: 'Площадь сектора', arc: 'Длина дуги', chord: 'Хорда',
      perimeter: 'Периметр сектора', share: 'Доля круга',
    },
    relatedCalculatorIds: ['geom-circle', 'geom-regular-polygon', 'geom-triangle'],
  },
};
