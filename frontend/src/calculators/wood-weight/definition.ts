import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { woodWeightCopyEn } from './copy.en';
import { woodWeightCopyUk } from './copy.uk';
import { woodWeightCopyDe } from './copy.de';
import { woodWeightCopyEs } from './copy.es';
import { woodWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "wood-weight",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: woodWeightCopyEn, uk: woodWeightCopyUk, de: woodWeightCopyDe, es: woodWeightCopyEs },
  referenceCases: woodWeightReferenceCases,
  publishedExample: { inputs: { volume: 1, species: 'pine', moisture: 12 }, expected: ["520 кг"] },
  presentation: {
    id: "wood-weight",
    name: "Калькулятор веса древесины",
    slug: "ves-drevesiny",
    fullPath: "/building/ves-drevesiny/",
    category: "building",
    icon: "package",
    popularity: 47,
    isNew: false,
    shortDescription: "Вес древесины по её объёму, породе и влажности.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор веса древесины по породе и влажности",
    seoDescription: "Посчитайте, сколько весит древесина по объёму, породе и влажности, с показанной плотностью, из которой вышел ответ.",
    h1: "Калькулятор веса древесины",
    keywords: ["вес древесины", "вес кубометра леса", "плотность древесины по породе", "вес пиломатериалов"],
    fields: [
      { name: 'volume', label: "Объём", type: 'number', defaultValue: 1, min: 0, step: 0.1 , unit: "м³" },
      {
        name: 'species', label: 'Порода', type: 'select', defaultValue: 'pine',
        options: [
          { value: 'pine', label: 'Сосна' },
          { value: 'spruce', label: 'Ель' },
          { value: 'birch', label: 'Берёза' },
          { value: 'oak', label: 'Дуб' },
          { value: 'larch', label: 'Лиственница' },
          { value: 'aspen', label: 'Осина' },
        ],
      },
      { name: 'moisture', label: "Влажность", type: 'number', defaultValue: 12, min: 0, max: 100, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "mass": "Масса",
      "density": "Плотность при заданной влажности",
      "baseDensity": "Базовая плотность при 12 %",
      "volume": "Объём",
      "perM3": "Килограммов на кубометр",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["board-volume", "insulation", "roof-area"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
