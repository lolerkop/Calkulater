import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { balusterSpacingCopyEn } from './copy.en';
import { balusterSpacingCopyUk } from './copy.uk';
import { balusterSpacingCopyDe } from './copy.de';
import { balusterSpacingCopyEs } from './copy.es';
import { balusterSpacingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "baluster-spacing",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: balusterSpacingCopyEn, uk: balusterSpacingCopyUk, de: balusterSpacingCopyDe, es: balusterSpacingCopyEs },
  referenceCases: balusterSpacingReferenceCases,
  publishedExample: { inputs: { run: 3000, baluster_width: 40, max_gap: 100 }, expected: ["21 шт"] },
  presentation: {
    id: "baluster-spacing",
    name: "Калькулятор шага балясин",
    slug: "shag-balyasin",
    fullPath: "/building/shag-balyasin/",
    category: "building",
    icon: "layers",
    popularity: 33,
    isNew: false,
    shortDescription: "Сколько балясин на пролёт при предельном просвете между ними.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор шага балясин — количество по предельному просвету",
    seoDescription: "Рассчитайте количество балясин на пролёт по ширине стойки и предельному просвету, с фактическим зазором и шагом между осями.",
    h1: "Калькулятор шага балясин",
    keywords: ["шаг балясин", "расстояние между балясинами", "количество балясин", "просвет ограждения"],
    fields: [
      { name: 'run', label: "Пролёт между опорами", type: 'number', unit: "мм", defaultValue: 3000, min: 0, step: 50 },
      { name: 'baluster_width', label: "Ширина стойки", type: 'number', unit: "мм", defaultValue: 40, min: 0, step: 5 },
      { name: 'max_gap', label: "Предельный просвет", type: 'number', unit: "мм", defaultValue: 100, min: 0, step: 5 },
    ],
    resultLabels: {
      "balusters": "Балясин",
      "gap": "Фактический просвет",
      "pitch": "Шаг между осями",
      "totalWidth": "Суммарная ширина стоек",
      "gaps": "Просветов",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["fence", "stairs", "board-volume"],
  },
};

