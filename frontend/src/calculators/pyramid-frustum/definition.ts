import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pyramidFrustumCopyEn } from './copy.en';
import { pyramidFrustumCopyUk } from './copy.uk';
import { pyramidFrustumCopyDe } from './copy.de';
import { pyramidFrustumCopyEs } from './copy.es';
import { pyramidFrustumReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pyramid-frustum",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pyramidFrustumCopyEn, uk: pyramidFrustumCopyUk, de: pyramidFrustumCopyDe, es: pyramidFrustumCopyEs },
  referenceCases: pyramidFrustumReferenceCases,
  publishedExample: { inputs: { a: 10, b: 6, h: 8 }, expected: ["522,67 см³"] },
  presentation: {
    ...contractContent.ru,
    id: "pyramid-frustum",
    name: "Калькулятор усечённой пирамиды",
    slug: "usechennaya-piramida",
    fullPath: "/geometry/usechennaya-piramida/",
    category: "geometry",
    icon: "shapes",
    popularity: 26,
    isNew: true,
    seoTitle: "Калькулятор усечённой пирамиды — объём и поверхности",
    h1: "Калькулятор усечённой пирамиды",
    keywords: ["усечённая пирамида", "объём усечённой пирамиды", "апофема", "боковая поверхность"],
    fields: [
      { name: 'a', label: 'Сторона нижнего основания', type: 'number', unit: 'см', defaultValue: 10, min: 0, step: 1 },
      { name: 'b', label: 'Сторона верхнего основания', type: 'number', unit: 'см', defaultValue: 6, min: 0, step: 1 },
      { name: 'h', label: 'Высота', type: 'number', unit: 'см', defaultValue: 8, min: 0, step: 1 },
    ],
    resultLabels: {
      "volume": "Объём", "apothem": "Апофема", "lateral": "Боковая поверхность",
      "total": "Полная поверхность", "bases": "Площади оснований",
    },
    relatedCalculatorIds: ["geom-frustum", "geom-pyramid", "geom-prism"],
  },
};
