import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { beamStressCopyEn } from './copy.en';
import { beamStressCopyUk } from './copy.uk';
import { beamStressCopyDe } from './copy.de';
import { beamStressCopyEs } from './copy.es';
import { beamStressReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "beam-stress",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: beamStressCopyEn, uk: beamStressCopyUk, de: beamStressCopyDe, es: beamStressCopyEs },
  referenceCases: beamStressReferenceCases,
  publishedExample: { inputs: { moment: 4500, section: 'rect', b: 100, h: 200, d: 100 }, expected: ["6,75 МПа"] },
  presentation: {
    id: "beam-stress",
    name: "Калькулятор напряжения изгиба балки",
    slug: "napryazhenie-izgiba-balki",
    fullPath: "/building/napryazhenie-izgiba-balki/",
    category: "building",
    icon: "rectangle-horizontal",
    popularity: 30,
    isNew: false,
    shortDescription: "Напряжение изгиба по моменту и форме сечения балки.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор напряжения изгиба балки — момент сопротивления",
    seoDescription: "Рассчитайте напряжение изгиба в балке по изгибающему моменту и форме сечения: прямоугольник или круг, с моментом сопротивления.",
    h1: "Калькулятор напряжения изгиба балки",
    keywords: ["напряжение изгиба", "момент сопротивления", "расчёт балки", "изгибающий момент"],
    fields: [
      { name: 'moment', label: "Изгибающий момент", type: 'number', unit: "Н·м", defaultValue: 4500, min: 0, step: 100 },
      {
        name: 'section', label: 'Сечение', type: 'select', defaultValue: 'rect',
        options: [
          { value: 'rect', label: 'прямоугольник' },
          { value: 'circle', label: 'круг' },
        ],
      },
      { name: 'b', label: "Ширина сечения", type: 'number', unit: "мм", defaultValue: 100, min: 0, step: 10, showIf: { field: 'section', equals: 'rect' } },
      { name: 'h', label: "Высота сечения", type: 'number', unit: "мм", defaultValue: 200, min: 0, step: 10, showIf: { field: 'section', equals: 'rect' } },
      { name: 'd', label: "Диаметр", type: 'number', unit: "мм", defaultValue: 100, min: 0, step: 10, showIf: { field: 'section', equals: 'circle' } },
    ],
    resultLabels: {
      "stress": "Напряжение изгиба", "modulus": "Момент сопротивления",
      "moment": "Изгибающий момент", "section": "Сечение", "size": "Определяющий размер сечения",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["stress-strain", "metal-weight", "rafters"],
    disclaimer: buildingWave13ContractContent.ru.disclaimer,
  },
};

