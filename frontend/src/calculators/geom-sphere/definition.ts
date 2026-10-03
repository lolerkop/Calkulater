import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomSphereCopyEn } from './copy.en';
import { geomSphereCopyUk } from './copy.uk';
import { geomSphereCopyDe } from './copy.de';
import { geomSphereCopyEs } from './copy.es';
import { geomSphereReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-sphere",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomSphereCopyEn, uk: geomSphereCopyUk, de: geomSphereCopyDe, es: geomSphereCopyEs },
  referenceCases: geomSphereReferenceCases,
  publishedExample: { inputs: { unit: 'm', mode: 'radius', r: 3 }, expected: ["113,1 м³"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-sphere",
    name: "Калькулятор шара",
    slug: "sphere",
    fullPath: "/geometry/sphere/",
    category: "geometry",
    icon: "globe",
    popularity: 43,
    isNew: false,
    seoTitle: "Калькулятор шара — объём и площадь поверхности",
    h1: "Калькулятор шара",
    keywords: ["калькулятор шара", "объём шара", "площадь поверхности шара", "радиус по объёму"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'radius',
        options: [
          { value: 'radius', label: 'радиус' },
          { value: 'diameter', label: 'диаметр' },
          { value: 'volume', label: 'объём' },
        ],
      },
      { name: 'r', label: 'Радиус', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'radius' } },
      { name: 'd', label: 'Диаметр', type: 'number', unit: 'см', defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'diameter' } },
      { name: 'volume', label: 'Объём', type: 'number', unit: 'см³', defaultValue: 113.1, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'volume' } },
    ],
    resultLabels: {
      "volume": "Объём",
      "surface": "Площадь поверхности",
      "radius": "Радиус",
      "diameter": "Диаметр",
    },
    relatedCalculatorIds: ["geom-cylinder", "geom-cone", "geom-circle"],
  },
};
