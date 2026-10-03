import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roofBattensCopyEn } from './copy.en';
import { roofBattensCopyUk } from './copy.uk';
import { roofBattensCopyDe } from './copy.de';
import { roofBattensCopyEs } from './copy.es';
import { roofBattensReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "roof-battens",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roofBattensCopyEn, uk: roofBattensCopyUk, de: roofBattensCopyDe, es: roofBattensCopyEs },
  referenceCases: roofBattensReferenceCases,
  publishedExample: { inputs: { area: 60, step: 0.35, battenLength: 6, sectionWidth: 50, sectionHeight: 50, waste: 10 }, expected: ["188,57 м"] },
  presentation: {
    id: "roof-battens",
    name: "Калькулятор обрешётки",
    slug: "obreshetka",
    fullPath: "/building/obreshetka/",
    category: "building",
    icon: "layers",
    popularity: 45,
    isNew: false,
    shortDescription: "Погонные метры, бруски и объём древесины для обрешётки крыши.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор обрешётки крыши: метры, бруски и объём",
    seoDescription: "Посчитайте погонные метры, число брусков и объём древесины для обрешётки крыши по площади и шагу.",
    h1: "Калькулятор обрешётки крыши",
    keywords: ["расчёт обрешётки", "шаг обрешётки", "объём древесины на крышу", "брусков на квадратный метр"],
    fields: [
      { name: 'area', label: "Площадь крыши", type: 'number', defaultValue: 60, min: 0, step: 1 , unit: "м²" },
      { name: 'step', label: "Шаг обрешётки", type: 'number', defaultValue: 0.35, min: 0, step: 0.05 , unit: "м" },
      { name: 'battenLength', label: "Длина бруска", type: 'number', defaultValue: 6, min: 0, step: 0.5 , unit: "м" },
      { name: 'sectionWidth', label: "Ширина сечения", type: 'number', defaultValue: 50, min: 0, step: 5 , unit: "мм" },
      { name: 'sectionHeight', label: "Высота сечения", type: 'number', defaultValue: 50, min: 0, step: 5 , unit: "мм" },
      { name: 'waste', label: "Запас", type: 'number', defaultValue: 10, min: 0, max: 50, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "running": "Погонных метров",
      "pieces": "Брусков",
      "volume": "Объём древесины",
      "area": "Площадь крыши",
      "step": "Шаг обрешётки",
      "perM2": "Метров на квадратный метр",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks:
      buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["roof-area", "rafters", "board-volume"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
