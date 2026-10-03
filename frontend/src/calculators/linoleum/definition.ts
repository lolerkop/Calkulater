import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { linoleumCopyEn } from './copy.en';
import { linoleumCopyUk } from './copy.uk';
import { linoleumCopyDe } from './copy.de';
import { linoleumCopyEs } from './copy.es';
import { linoleumReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "linoleum",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: linoleumCopyEn, uk: linoleumCopyUk, de: linoleumCopyDe, es: linoleumCopyEs },
  referenceCases: linoleumReferenceCases,
  publishedExample: { inputs: { length: 5, width: 3.5, rollWidth: 3, reserve: 5 }, expected: ["10,5 м"] },
  presentation: {
    id: "linoleum",
    name: "Калькулятор линолеума",
    slug: "linoleum",
    fullPath: "/building/linoleum/",
    category: "building",
    icon: "square",
    popularity: 48,
    isNew: false,
    shortDescription: "Погонные метры рулонного покрытия на комнату с полосами, швами и обрезками.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор линолеума: погонные метры, полосы и швы",
    seoDescription: "Посчитайте, сколько погонных метров линолеума забирает комната, во сколько полос и швов это выходит и сколько останется обрезков.",
    h1: "Калькулятор линолеума",
    keywords: ["расчёт линолеума", "погонные метры рулона", "калькулятор напольного покрытия", "швы покрытия"],
    fields: [
      { name: 'length', label: "Длина комнаты", type: 'number', unit: "м", defaultValue: 5, min: 0, step: 0.1 },
      { name: 'width', label: "Ширина комнаты", type: 'number', unit: "м", defaultValue: 3.5, min: 0, step: 0.1 },
      { name: 'rollWidth', label: "Ширина рулона", type: 'number', unit: "м", defaultValue: 3, min: 0, step: 0.5 },
      { name: 'reserve', label: "Запас", type: 'number', unit: "%", defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "running": "Погонных метров",
      "strips": "Полос",
      "area": "Площадь пола",
      "bought": "Куплено",
      "offcut": "Обрезки",
      "seams": "Швов",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["laminate-calculator", "screed-calculator", "room-volume"],
  },
};

