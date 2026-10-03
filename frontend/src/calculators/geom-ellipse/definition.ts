import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomEllipseCopyEn } from './copy.en';
import { geomEllipseCopyUk } from './copy.uk';
import { geomEllipseCopyDe } from './copy.de';
import { geomEllipseCopyEs } from './copy.es';
import { geomEllipseReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-ellipse",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomEllipseCopyEn, uk: geomEllipseCopyUk, de: geomEllipseCopyDe, es: geomEllipseCopyEs },
  referenceCases: geomEllipseReferenceCases,
  publishedExample: { inputs: { unit: 'cm', a: 5, b: 3 }, expected: ["47,124 см²"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-ellipse",
    name: "Калькулятор эллипса",
    slug: "geom-ellipse",
    fullPath: "/geometry/geom-ellipse/",
    category: "geometry",
    icon: "circle",
    popularity: 23,
    isNew: false,
    seoTitle: "Калькулятор эллипса: площадь, периметр и эксцентриситет",
    h1: "Калькулятор эллипса",
    keywords: ["калькулятор эллипса", "площадь эллипса", "периметр эллипса", "эксцентриситет"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'a', label: 'Полуось a', type: 'number', unit: 'см', defaultValue: 5, min: 0, step: 0.1 },
      { name: 'b', label: 'Полуось b', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "area": "Площадь",
      "perimeter": "Периметр (Рамануджан)",
      "eccentricity": "Эксцентриситет",
      "foci": "Расстояние между фокусами",
      "major": "Большая полуось",
      "minor": "Малая полуось",
    },
    relatedCalculatorIds: ["geom-circle", "geom-sector", "geom-annulus"],
  },
};
