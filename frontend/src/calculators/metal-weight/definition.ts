import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { metalWeightCopyEn } from './copy.en';
import { metalWeightCopyUk } from './copy.uk';
import { metalWeightCopyDe } from './copy.de';
import { metalWeightCopyEs } from './copy.es';
import { metalWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "metal-weight",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: metalWeightCopyEn, uk: metalWeightCopyUk, de: metalWeightCopyDe, es: metalWeightCopyEs },
  referenceCases: metalWeightReferenceCases,
  publishedExample: { inputs: { shape: 'round', density: 7.85, a: 20, b: 0, length: 6 }, expected: ["14,797 кг"] },
  presentation: {
    id: "metal-weight",
    name: "Калькулятор веса металлопроката",
    slug: "ves-metalloprokata",
    fullPath: "/building/ves-metalloprokata/",
    category: "building",
    icon: "cuboid",
    popularity: 37,
    isNew: false,
    shortDescription: "Масса круга, квадрата и полосы по размерам сечения и длине.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор веса металлопроката — круг, квадрат, полоса",
    seoDescription: "Рассчитайте массу металлопроката: круг, квадрат или полоса по размерам сечения, длине и плотности сплава.",
    h1: "Калькулятор веса металлопроката",
    keywords: ["вес металлопроката", "вес круга стального", "вес полосы", "погонный вес металла"],
    fields: [
      {
        name: 'shape', label: 'Форма сечения', type: 'select', defaultValue: 'round',
        options: [
          { value: 'round', label: 'круг' },
          { value: 'square', label: 'квадрат' },
          { value: 'flat', label: 'полоса' },
        ],
      },
      { name: 'a', label: "Диаметр или сторона", type: 'number', unit: "мм", defaultValue: 20, min: 0, step: 1 },
      { name: 'b', label: "Вторая сторона полосы", type: 'number', unit: "мм", defaultValue: 4, min: 0, step: 1, showIf: { field: 'shape', equals: 'flat' } },
      { name: 'length', label: "Длина", type: 'number', unit: "м", defaultValue: 6, min: 0, step: 0.1 },
      { name: 'density', label: "Плотность", type: 'number', unit: "г/см³", defaultValue: 7.85, min: 0, step: 0.01 },
    ],
    resultLabels: {
      "mass": "Масса",
      "area": "Площадь сечения",
      "volume": "Объём металла",
      "linear": "Погонная масса",
      "perTon": "Метров в тонне",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["wood-weight", "board-volume", "slab-foundation"],
  },
};

