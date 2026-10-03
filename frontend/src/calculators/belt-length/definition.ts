import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { beltLengthCopyEn } from './copy.en';
import { beltLengthCopyUk } from './copy.uk';
import { beltLengthCopyDe } from './copy.de';
import { beltLengthCopyEs } from './copy.es';
import { beltLengthReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "belt-length",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: beltLengthCopyEn, uk: beltLengthCopyUk, de: beltLengthCopyDe, es: beltLengthCopyEs },
  referenceCases: beltLengthReferenceCases,
  publishedExample: { inputs: { center: 300, d1: 100, d2: 200 }, expected: ["1 079,57 мм"] },
  presentation: {
    ...contractContent.ru,
    id: "belt-length",
    name: "Калькулятор длины ремня",
    slug: "dlina-remnya",
    fullPath: "/geometry/dlina-remnya/",
    category: "geometry",
    icon: "circle",
    popularity: 33,
    isNew: false,
    seoTitle: "Калькулятор длины ремня — по межосевому расстоянию и шкивам",
    h1: "Калькулятор длины ремня",
    keywords: ["длина ремня", "ремённая передача", "межосевое расстояние", "угол обхвата шкива"],
    fields: [
      { name: 'center', label: 'Межосевое расстояние', type: 'number', unit: 'мм', defaultValue: 300, min: 0, step: 10 },
      { name: 'd1', label: 'Расчётный диаметр первого шкива', type: 'number', unit: 'мм', defaultValue: 100, min: 0, step: 10 },
      { name: 'd2', label: 'Расчётный диаметр второго шкива', type: 'number', unit: 'мм', defaultValue: 200, min: 0, step: 10 },
    ],
    resultLabels: {
      "length": "Длина ремня",
      "meters": "В метрах",
      "wrap": "Угол обхвата малого шкива",
      "ratio": "Передаточное отношение",
      "center": "Межосевое расстояние",
    },
    relatedCalculatorIds: ["geom-circle", "geom-sector", "bike-gear-ratio"],
  },
};
