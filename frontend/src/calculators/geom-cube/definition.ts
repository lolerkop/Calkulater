import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomCubeCopyEn } from './copy.en';
import { geomCubeCopyUk } from './copy.uk';
import { geomCubeCopyDe } from './copy.de';
import { geomCubeCopyEs } from './copy.es';
import { geomCubeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-cube",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomCubeCopyEn, uk: geomCubeCopyUk, de: geomCubeCopyDe, es: geomCubeCopyEs },
  referenceCases: geomCubeReferenceCases,
  publishedExample: { inputs: { unit: 'cm', mode: 'side', side: 3 }, expected: ["27 см³"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-cube",
    name: "Калькулятор куба",
    slug: "geom-cube",
    fullPath: "/geometry/geom-cube/",
    category: "geometry",
    icon: "cuboid",
    popularity: 26,
    isNew: false,
    seoTitle: "Калькулятор куба: объём, площадь и диагональ",
    h1: "Калькулятор куба",
    keywords: ["калькулятор куба", "объём куба", "площадь поверхности куба", "диагональ куба"],
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
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'side',
        options: [
          { value: 'side', label: 'ребро' },
          { value: 'volume', label: 'объём' },
          { value: 'area', label: 'площадь поверхности' },
        ],
      },
      { name: 'side', label: 'Ребро', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'side' } },
      { name: 'volume', label: 'Объём', type: 'number', unit: 'см³', defaultValue: 64, min: 0, step: 1, showIf: { field: 'mode', equals: 'volume' } },
      { name: 'area', label: 'Площадь поверхности', type: 'number', unit: 'см²', defaultValue: 96, min: 0, step: 1, showIf: { field: 'mode', equals: 'area' } },
    ],
    resultLabels: {
      "volume": "Объём",
      "side": "Ребро",
      "area": "Площадь поверхности",
      "diagonal": "Диагональ куба",
      "faceDiagonal": "Диагональ грани",
      "edges": "Сумма рёбер",
    },
    relatedCalculatorIds: ["geom-cuboid", "geom-square", "geom-sphere"],
  },
};
