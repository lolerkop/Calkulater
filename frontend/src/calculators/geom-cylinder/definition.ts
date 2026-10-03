import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomCylinderCopyEn } from './copy.en';
import { geomCylinderCopyUk } from './copy.uk';
import { geomCylinderCopyDe } from './copy.de';
import { geomCylinderCopyEs } from './copy.es';
import { geomCylinderReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-cylinder",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomCylinderCopyEn, uk: geomCylinderCopyUk, de: geomCylinderCopyDe, es: geomCylinderCopyEs },
  referenceCases: geomCylinderReferenceCases,
  publishedExample: { inputs: { unit: 'm', r: 3, h: 10 }, expected: ["282,74 м³"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-cylinder",
    name: "Калькулятор цилиндра",
    slug: "cylinder",
    fullPath: "/geometry/cylinder/",
    category: "geometry",
    icon: "cylinder",
    popularity: 45,
    isNew: false,
    seoTitle: "Калькулятор цилиндра — объём и площадь поверхности",
    h1: "Калькулятор цилиндра",
    keywords: ["калькулятор цилиндра", "объём цилиндра", "площадь поверхности цилиндра", "объём бочки"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'r', label: 'Радиус основания', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'h', label: 'Высота', type: 'number', unit: 'см', defaultValue: 10, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "volume": "Объём",
      "lateral": "Боковая поверхность",
      "total": "Полная поверхность",
      "base": "Площадь основания",
    },
    relatedCalculatorIds: ["geom-sphere", "geom-cone", "geom-circle"],
  },
};
