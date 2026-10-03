import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { underfloorHeatingCopyEn } from './copy.en';
import { underfloorHeatingCopyUk } from './copy.uk';
import { underfloorHeatingCopyDe } from './copy.de';
import { underfloorHeatingCopyEs } from './copy.es';
import { underfloorHeatingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "underfloor-heating",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: underfloorHeatingCopyEn, uk: underfloorHeatingCopyUk, de: underfloorHeatingCopyDe, es: underfloorHeatingCopyEs },
  referenceCases: underfloorHeatingReferenceCases,
  publishedExample: { inputs: { area: 20, step: 0.15, loopMax: 90, edgeZone: 4, edgeStep: 0.1, waste: 10 }, expected: ["161,33 м"] },
  presentation: {
    id: "underfloor-heating",
    name: "Калькулятор трубы тёплого пола",
    slug: "teplyy-pol",
    fullPath: "/building/teplyy-pol/",
    category: "building",
    icon: "flame",
    popularity: 50,
    isNew: false,
    shortDescription: "Длина трубы и число петель для водяного тёплого пола.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор трубы тёплого пола: длина и петли",
    seoDescription: "Посчитайте длину трубы и число петель тёплого пола по площади, шагу укладки и краевой зоне.",
    h1: "Калькулятор трубы тёплого пола",
    keywords: ["тёплый пол расчёт", "длина трубы тёплого пола", "длина петли отопления", "шаг укладки трубы"],
    fields: [
      { name: 'area', label: "Площадь обогрева", type: 'number', defaultValue: 20, min: 0, step: 1 , unit: "м²" },
      { name: 'step', label: "Шаг укладки", type: 'number', defaultValue: 0.15, min: 0, step: 0.05 , unit: "м" },
      { name: 'loopMax', label: "Предельная длина петли", type: 'number', defaultValue: 90, min: 0, step: 5 , unit: "м" },
      { name: 'edgeZone', label: "Площадь краевой зоны", type: 'number', defaultValue: 4, min: 0, step: 1 , unit: "м²" },
      { name: 'edgeStep', label: "Шаг в краевой зоне", type: 'number', defaultValue: 0.1, min: 0, step: 0.05 , unit: "м" },
      { name: 'waste', label: "Запас", type: 'number', defaultValue: 10, min: 0, max: 50, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "length": "Длина трубы",
      "loops": "Петель",
      "perLoop": "На петлю",
      "area": "Площадь",
      "mainArea": "Основная зона",
      "edgeArea": "Краевая зона",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["screed-calculator", "heating-power", "room-volume"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
