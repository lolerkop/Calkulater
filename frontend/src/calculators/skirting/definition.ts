import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { skirtingCopyEn } from './copy.en';
import { skirtingCopyUk } from './copy.uk';
import { skirtingCopyDe } from './copy.de';
import { skirtingCopyEs } from './copy.es';
import { skirtingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "skirting",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: skirtingCopyEn, uk: skirtingCopyUk, de: skirtingCopyDe, es: skirtingCopyEs },
  referenceCases: skirtingReferenceCases,
  publishedExample: { inputs: { length: 5.2, width: 3.4, doors: 2, doorWidth: 0.9, plank: 2.5, waste: 5 }, expected: ["16,17 м"] },
  presentation: {
    id: "skirting",
    name: "Калькулятор плинтуса",
    slug: "plintus",
    fullPath: "/building/plintus/",
    category: "building",
    icon: "wall",
    popularity: 31,
    isNew: true,
    shortDescription: "Длина плинтуса по периметру комнаты с вычетом проёмов и раскроем на планки.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор плинтуса — длина и количество планок",
    seoDescription: "Рассчитайте длину плинтуса по размерам комнаты с вычетом дверных проёмов, запасом на подрезку и числом планок.",
    h1: "Калькулятор плинтуса",
    keywords: ["плинтус", "длина плинтуса", "напольный плинтус", "раскрой планок"],
    fields: [
      { name: 'length', label: "Длина комнаты", type: 'number', defaultValue: 5.2, min: 0, step: 0.1 , unit: "м" },
      { name: 'width', label: "Ширина комнаты", type: 'number', defaultValue: 3.4, min: 0, step: 0.1 , unit: "м" },
      { name: 'doors', label: 'Дверных проёмов', type: 'number', defaultValue: 2, min: 0, step: 1 },
      { name: 'doorWidth', label: "Ширина проёма", type: 'number', defaultValue: 0.9, min: 0, step: 0.1 , unit: "м" },
      { name: 'plank', label: "Длина планки", type: 'number', defaultValue: 2.5, min: 0, step: 0.1 , unit: "м" },
      { name: 'waste', label: "Запас на подрезку", type: 'number', defaultValue: 5, min: 0, max: 100, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "need": "Длина с запасом", "perimeter": "Периметр комнаты",
      "openings": "Вычет на проёмы", "planks": "Планок", "bought": "Куплено с запасом",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks: buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["laminate-calculator", "linoleum", "room-volume"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
