import { buildingWave13ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pileFoundationCopyEn } from './copy.en';
import { pileFoundationCopyUk } from './copy.uk';
import { pileFoundationCopyDe } from './copy.de';
import { pileFoundationCopyEs } from './copy.es';
import { pileFoundationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pile-foundation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: pileFoundationCopyEn, uk: pileFoundationCopyUk, de: pileFoundationCopyDe, es: pileFoundationCopyEs },
  referenceCases: pileFoundationReferenceCases,
  publishedExample: { inputs: { count: 12, diameter: 0.3, depth: 1.8, grillageLength: 32, grillageWidth: 0.4, grillageHeight: 0.4, waste: 5 }, expected: ["6,979 м³"] },
  presentation: {
    id: "pile-foundation",
    name: "Калькулятор столбчатого фундамента",
    slug: "stolbchatyy-fundament",
    fullPath: "/building/stolbchatyy-fundament/",
    category: "building",
    icon: "layers",
    popularity: 46,
    isNew: false,
    shortDescription: "Бетон на буронабивные сваи и ростверк, который их связывает.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор столбчатого фундамента: сваи и ростверк",
    seoDescription: "Посчитайте объём бетона на буронабивные сваи и ростверк с отдельно показанным разделением между ними.",
    h1: "Калькулятор столбчатого фундамента",
    keywords: ["столбчатый фундамент", "бетон на сваи", "объём ростверка", "свайный фундамент расчёт"],
    fields: [
      { name: 'count', label: 'Количество свай', type: 'number', defaultValue: 12, min: 1, step: 1 },
      { name: 'diameter', label: "Диаметр сваи", type: 'number', unit: "м", defaultValue: 0.3, min: 0, step: 0.05 },
      { name: 'depth', label: "Глубина сваи", type: 'number', unit: "м", defaultValue: 1.8, min: 0, step: 0.1 },
      { name: 'grillageLength', label: "Длина ростверка", type: 'number', unit: "м", defaultValue: 32, min: 0, step: 1 },
      { name: 'grillageWidth', label: "Ширина ростверка", type: 'number', unit: "м", defaultValue: 0.4, min: 0, step: 0.05 },
      { name: 'grillageHeight', label: "Высота ростверка", type: 'number', unit: "м", defaultValue: 0.4, min: 0, step: 0.05 },
      { name: 'waste', label: "Запас", type: 'number', unit: "%", defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "total": "Объём бетона",
      "piles": "Объём свай",
      "grillage": "Объём ростверка",
      "net": "Чистый объём",
      "waste": "Запас",
      "one": "Объём одной сваи",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["strip-foundation", "concrete", "slab-foundation"],
    disclaimer: buildingWave13ContractContent.ru.disclaimer,
  },
};

