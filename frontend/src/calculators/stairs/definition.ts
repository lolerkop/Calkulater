import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stairsCopyEn } from './copy.en';
import { stairsCopyUk } from './copy.uk';
import { stairsCopyDe } from './copy.de';
import { stairsCopyEs } from './copy.es';
import { stairsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "stairs",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: stairsCopyEn, uk: stairsCopyUk, de: stairsCopyDe, es: stairsCopyEs },
  referenceCases: stairsReferenceCases,
  publishedExample: { inputs: { rise_total: 2.8, tread: 0.28, max_riser: 0.18 }, expected: ["16 шт"] },
  presentation: {
    id: "stairs",
    name: "Калькулятор лестницы",
    slug: "raschet-lestnicy",
    fullPath: "/building/raschet-lestnicy/",
    category: "building",
    icon: "layers",
    popularity: 41,
    isNew: false,
    shortDescription: "Число ступеней, высота подступенка, длина марша и угол наклона.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор лестницы — ступени, подступенок, угол наклона",
    seoDescription: "Рассчитайте лестницу: число ступеней по предельной высоте подступенка, длину марша, угол наклона и формулу удобства 2h + b.",
    h1: "Калькулятор лестницы",
    keywords: ["расчёт лестницы", "калькулятор ступеней", "высота подступенка", "угол наклона лестницы"],
    fields: [
      { name: 'rise_total', label: "Общий подъём", type: 'number', defaultValue: 2.8, min: 0, step: 0.05 , unit: "м" },
      { name: 'tread', label: "Проступь (глубина ступени)", type: 'number', defaultValue: 0.28, min: 0, step: 0.01 , unit: "м" },
      { name: 'max_riser', label: "Предельная высота ступени", type: 'number', defaultValue: 0.18, min: 0, step: 0.005 , unit: "м" },
    ],
    resultLabels: {
      "risers": "Подступенков",
      "riser": "Высота подступенка",
      "treads": "Проступей",
      "run": "Длина марша",
      "angle": "Угол наклона",
      "step": "Формула удобства 2h + b",
      "verdict": "Оценка шага",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks: buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["rafters", "concrete", "room-volume"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
