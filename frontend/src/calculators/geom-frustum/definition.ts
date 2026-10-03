import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomFrustumCopyEn } from './copy.en';
import { geomFrustumCopyUk } from './copy.uk';
import { geomFrustumCopyDe } from './copy.de';
import { geomFrustumCopyEs } from './copy.es';
import { geomFrustumReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-frustum",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomFrustumCopyEn, uk: geomFrustumCopyUk, de: geomFrustumCopyDe, es: geomFrustumCopyEs },
  referenceCases: geomFrustumReferenceCases,
  publishedExample: { inputs: { unit: 'cm', R: 6, r: 3, h: 8 }, expected: ["527,79 см³"] },
  presentation: {
    ...contractContent.ru,
    id: "geom-frustum",
    name: "Калькулятор усечённого конуса",
    slug: "geom-frustum",
    fullPath: "/geometry/geom-frustum/",
    category: "geometry",
    icon: "cone",
    popularity: 22,
    isNew: false,
    seoTitle: "Калькулятор усечённого конуса: объём и площадь поверхности",
    h1: "Калькулятор усечённого конуса",
    keywords: ["усечённый конус", "объём усечённого конуса", "площадь усечённого конуса", "образующая"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'R', label: 'Больший радиус', type: 'number', unit: 'см', defaultValue: 6, min: 0, step: 0.1 },
      { name: 'r', label: 'Меньший радиус', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'h', label: 'Высота', type: 'number', unit: 'см', defaultValue: 8, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "volume": "Объём",
      "slant": "Образующая",
      "lateral": "Боковая поверхность",
      "total": "Полная поверхность",
    },
    relatedCalculatorIds: ["geom-cone", "geom-cylinder", "geom-sphere"],
  },
};
