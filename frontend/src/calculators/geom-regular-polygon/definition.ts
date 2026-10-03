import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomRegularPolygonCopyEn } from './copy.en';
import { geomRegularPolygonCopyUk } from './copy.uk';
import { geomRegularPolygonCopyDe } from './copy.de';
import { geomRegularPolygonCopyEs } from './copy.es';
import { geomRegularPolygonReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-regular-polygon",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: geomRegularPolygonCopyEn, uk: geomRegularPolygonCopyUk, de: geomRegularPolygonCopyDe, es: geomRegularPolygonCopyEs },
  referenceCases: geomRegularPolygonReferenceCases,
  publishedExample: { inputs: { unit: 'cm', n: 6, side: 2 }, expected: ["10,392 см²"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-regular-polygon",
    name: "Калькулятор правильного многоугольника",
    slug: "regular-polygon",
    fullPath: "/geometry/regular-polygon/",
    category: "geometry",
    icon: "hexagon",
    popularity: 41,
    isNew: false,
    seoTitle: "Калькулятор правильного многоугольника — площадь и периметр",
    h1: "Калькулятор правильного многоугольника",
    keywords: ["калькулятор правильного многоугольника", "площадь шестиугольника", "площадь пятиугольника", "апофема"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'n', label: 'Число сторон', type: 'number', unit: '1', defaultValue: 6, min: 3, max: 1000, step: 1 },
      { name: 'side', label: 'Длина стороны', type: 'number', unit: 'см', defaultValue: 2, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "area": "Площадь",
      "perimeter": "Периметр",
      "apothem": "Апофема",
      "angle": "Внутренний угол",
    },
    relatedCalculatorIds: ["geom-triangle", "geom-square", "geom-circle"],
  },
};
