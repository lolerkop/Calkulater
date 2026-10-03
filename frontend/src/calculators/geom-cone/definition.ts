import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomConeCopyEn } from './copy.en';
import { geomConeCopyUk } from './copy.uk';
import { geomConeCopyDe } from './copy.de';
import { geomConeCopyEs } from './copy.es';
import { geomConeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-cone",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomConeCopyEn, uk: geomConeCopyUk, de: geomConeCopyDe, es: geomConeCopyEs },
  referenceCases: geomConeReferenceCases,
  publishedExample: { inputs: { unit: 'm', r: 3, h: 4 }, expected: ["37,699 м³"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-cone",
    name: "Калькулятор конуса",
    slug: "cone",
    fullPath: "/geometry/cone/",
    category: "geometry",
    icon: "cone",
    popularity: 42,
    isNew: false,
    seoTitle: "Калькулятор конуса — объём, образующая, поверхность",
    h1: "Калькулятор конуса",
    keywords: ["калькулятор конуса", "объём конуса", "образующая конуса", "площадь поверхности конуса"],
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
      { name: 'h', label: 'Высота', type: 'number', unit: 'см', defaultValue: 4, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "volume": "Объём",
      "slant": "Образующая",
      "lateral": "Боковая поверхность",
      "total": "Полная поверхность",
    },
    relatedCalculatorIds: ["geom-cylinder", "geom-sphere", "geom-circle"],
  },
};
