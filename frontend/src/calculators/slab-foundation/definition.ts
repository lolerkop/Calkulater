import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { slabFoundationCopyEn } from './copy.en';
import { slabFoundationCopyUk } from './copy.uk';
import { slabFoundationCopyDe } from './copy.de';
import { slabFoundationCopyEs } from './copy.es';
import { slabFoundationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "slab-foundation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: slabFoundationCopyEn, uk: slabFoundationCopyUk, de: slabFoundationCopyDe, es: slabFoundationCopyEs },
  referenceCases: slabFoundationReferenceCases,
  publishedExample: { inputs: { length: 10, width: 8, thickness: 0.3, meshStep: 0.2, rebarDiameter: 12, waste: 5 }, expected: ["25,2 м³"] },
  presentation: {
    id: "slab-foundation",
    name: "Калькулятор плитного фундамента",
    slug: "plitnyy-fundament",
    fullPath: "/building/plitnyy-fundament/",
    category: "building",
    icon: "layers",
    popularity: 54,
    isNew: false,
    shortDescription: "Объём бетона и арматурная сетка для плитного фундамента.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор плитного фундамента: бетон и арматура",
    seoDescription: "Посчитайте объём бетона и длину с весом арматурной сетки для плитного фундамента.",
    h1: "Калькулятор плитного фундамента",
    keywords: ["плитный фундамент", "бетон для плиты", "расчёт арматурной сетки", "объём бетона фундамента"],
    fields: [
      { name: 'length', label: "Длина плиты", type: 'number', defaultValue: 10, min: 0, step: 0.5 , unit: "м" },
      { name: 'width', label: "Ширина плиты", type: 'number', defaultValue: 8, min: 0, step: 0.5 , unit: "м" },
      { name: 'thickness', label: "Толщина плиты", type: 'number', defaultValue: 0.3, min: 0, step: 0.05 , unit: "м" },
      { name: 'meshStep', label: "Шаг сетки", type: 'number', defaultValue: 0.2, min: 0, step: 0.05 , unit: "м" },
      { name: 'rebarDiameter', label: "Диаметр арматуры", type: 'number', defaultValue: 12, min: 0, step: 1 , unit: "мм" },
      { name: 'waste', label: "Запас", type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "concrete": "Объём бетона",
      "area": "Площадь плиты",
      "net": "Чистый объём",
      "waste": "Запас",
      "rebarLength": "Длина арматуры",
      "rebarMass": "Вес арматуры",
      "bars": "Прутков",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["concrete", "strip-foundation", "room-volume"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
