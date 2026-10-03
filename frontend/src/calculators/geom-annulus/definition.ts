import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomAnnulusCopyEn } from './copy.en';
import { geomAnnulusCopyUk } from './copy.uk';
import { geomAnnulusCopyDe } from './copy.de';
import { geomAnnulusCopyEs } from './copy.es';
import { geomAnnulusReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-annulus",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomAnnulusCopyEn, uk: geomAnnulusCopyUk, de: geomAnnulusCopyDe, es: geomAnnulusCopyEs },
  referenceCases: geomAnnulusReferenceCases,
  publishedExample: { inputs: { unit: 'cm', R: 10, r: 6 }, expected: ["201,06 см²"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-annulus",
    name: "Калькулятор кольца",
    slug: "geom-annulus",
    fullPath: "/geometry/geom-annulus/",
    category: "geometry",
    icon: "circle",
    popularity: 24,
    isNew: false,
    seoTitle: "Калькулятор кольца: площадь между двумя окружностями",
    h1: "Калькулятор кольца",
    keywords: ["калькулятор кольца", "площадь кольца", "кольцевая площадь", "площадь между окружностями"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'R', label: 'Внешний радиус', type: 'number', unit: 'см', defaultValue: 10, min: 0, step: 0.1 },
      { name: 'r', label: 'Внутренний радиус', type: 'number', unit: 'см', defaultValue: 6, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "area": "Площадь",
      "width": "Ширина кольца",
      "outer": "Внешняя окружность",
      "inner": "Внутренняя окружность",
      "mean": "Средний радиус",
    },
    relatedCalculatorIds: ["geom-circle", "geom-sector", "geom-cylinder"],
  },
};
