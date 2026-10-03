import { buildingWave13ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { drywallCopyEn } from './copy.en';
import { drywallCopyUk } from './copy.uk';
import { drywallCopyDe } from './copy.de';
import { drywallCopyEs } from './copy.es';
import { drywallReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "drywall",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: drywallCopyEn, uk: drywallCopyUk, de: drywallCopyDe, es: drywallCopyEs },
  referenceCases: drywallReferenceCases,
  publishedExample: { inputs: { area: 40, sheetLength: 2.5, sheetWidth: 1.2, layers: 1, profileStep: 0.6, waste: 10 }, expected: ["15"] },
  presentation: {
    id: "drywall",
    name: "Калькулятор гипсокартона",
    slug: "gipsokarton",
    fullPath: "/building/gipsokarton/",
    category: "building",
    icon: "layers",
    popularity: 49,
    isNew: false,
    shortDescription: "Листы, профиль и саморезы для гипсокартонной стены или потолка.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор гипсокартона: листы, профиль и саморезы",
    seoDescription: "Посчитайте, сколько листов гипсокартона, метров профиля и саморезов нужно стене или потолку с учётом слоёв и запаса.",
    h1: "Калькулятор гипсокартона",
    keywords: ["расчёт гипсокартона", "листы гипсокартона", "шаг профиля", "саморезы для гипсокартона"],
    fields: [
      { name: 'area', label: "Площадь обшивки", type: 'number', unit: "м²", defaultValue: 40, min: 0, step: 1 },
      { name: 'sheetLength', label: "Длина листа", type: 'number', unit: "м", defaultValue: 2.5, min: 0, step: 0.5 },
      { name: 'sheetWidth', label: "Ширина листа", type: 'number', unit: "м", defaultValue: 1.2, min: 0, step: 0.05 },
      { name: 'layers', label: 'Слоёв', type: 'number', defaultValue: 1, min: 1, max: 3, step: 1 },
      { name: 'profileStep', label: "Шаг профиля", type: 'number', unit: "м", defaultValue: 0.6, min: 0, step: 0.1 },
      { name: 'waste', label: "Запас", type: 'number', unit: "%", defaultValue: 10, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "sheets": "Листов",
      "area": "Площадь",
      "withWaste": "С запасом",
      "sheetArea": "Площадь листа",
      "profileMeters": "Метров профиля",
      "screws": "Саморезов",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["plaster", "insulation", "room-volume"],
  },
};

