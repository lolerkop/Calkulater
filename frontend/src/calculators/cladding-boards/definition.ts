import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { claddingBoardsCopyEn } from './copy.en';
import { claddingBoardsCopyUk } from './copy.uk';
import { claddingBoardsCopyDe } from './copy.de';
import { claddingBoardsCopyEs } from './copy.es';
import { claddingBoardsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "cladding-boards",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: claddingBoardsCopyEn, uk: claddingBoardsCopyUk, de: claddingBoardsCopyDe, es: claddingBoardsCopyEs },
  referenceCases: claddingBoardsReferenceCases,
  publishedExample: { inputs: { wall_area: 30, board_len: 3, board_width: 0.19, overlap: 0.02, waste: 10 }, expected: ["65 шт"] },
  presentation: {
    id: "cladding-boards",
    name: "Калькулятор обшивки стены доской",
    slug: "obshivka-doskoy",
    fullPath: "/building/obshivka-doskoy/",
    category: "building",
    icon: "layers",
    popularity: 34,
    isNew: false,
    shortDescription: "Сколько досок нужно на стену с учётом нахлёста и запаса.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор обшивки стены доской — количество досок с нахлёстом",
    seoDescription: "Рассчитайте, сколько досок нужно на обшивку стены: полезная ширина с учётом нахлёста, запас на подрезку и погонные метры.",
    h1: "Калькулятор обшивки стены доской",
    keywords: ["расчёт обшивки доской", "сколько досок на стену", "калькулятор имитации бруса", "обшивка внахлёст"],
    fields: [
      { name: 'wall_area', label: "Площадь стены", type: 'number', unit: "м²", defaultValue: 30, min: 0, step: 0.5 },
      { name: 'board_len', label: "Длина доски", type: 'number', unit: "м", defaultValue: 3, min: 0, step: 0.1 },
      { name: 'board_width', label: "Ширина доски", type: 'number', unit: "м", defaultValue: 0.19, min: 0, step: 0.01 },
      { name: 'overlap', label: "Нахлёст", type: 'number', unit: "м", defaultValue: 0.02, min: 0, step: 0.005 },
      { name: 'waste', label: "Запас на подрезку", type: 'number', unit: "%", defaultValue: 10, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "boards": "Досок",
      "effWidth": "Полезная ширина доски",
      "need": "Площадь с запасом",
      "coverage": "Перекроют",
      "linear": "Погонных метров доски",
      "lost": "Съедает нахлёст",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["board-volume", "wood-weight", "drywall"],
  },
};

