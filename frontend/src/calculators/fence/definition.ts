import { buildingWave13ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { fenceCopyEn } from './copy.en';
import { fenceCopyUk } from './copy.uk';
import { fenceCopyDe } from './copy.de';
import { fenceCopyEs } from './copy.es';
import { fenceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "fence",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: fenceCopyEn, uk: fenceCopyUk, de: fenceCopyDe, es: fenceCopyEs },
  referenceCases: fenceReferenceCases,
  publishedExample: { inputs: { length: 40, span: 2.5, height: 1.8, rails: 2, gates: 1 }, expected: ["18"] },
  presentation: {
    id: "fence",
    name: "Калькулятор забора",
    slug: "zabor",
    fullPath: "/building/zabor/",
    category: "building",
    icon: "layers",
    popularity: 48,
    isNew: false,
    shortDescription: "Столбы, секции и лаги для забора заданной длины.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор забора: столбы, секции и лаги",
    seoDescription: "Посчитайте, сколько столбов, секций и метров лаг забирает забор, с учётом столбов под калитку и настоящего шага.",
    h1: "Калькулятор забора",
    keywords: ["расчёт забора", "шаг столбов забора", "сколько столбов", "лаги для забора"],
    fields: [
      { name: 'length', label: "Длина забора", type: 'number', unit: "м", defaultValue: 40, min: 0, step: 1 },
      { name: 'span', label: "Пролёт", type: 'number', unit: "м", defaultValue: 2.5, min: 0, step: 0.5 },
      { name: 'height', label: "Высота забора", type: 'number', unit: "м", defaultValue: 1.8, min: 0, step: 0.1 },
      { name: 'rails', label: 'Лаг на секцию', type: 'number', defaultValue: 2, min: 1, max: 5, step: 1 },
      { name: 'gates', label: 'Калиток и ворот', type: 'number', defaultValue: 1, min: 0, step: 1 },
    ],
    resultLabels: {
      "posts": "Столбов",
      "sections": "Секций",
      "railMeters": "Метров лаг",
      "area": "Площадь зашивки",
      "span": "Пролёт",
      "perPost": "Фактический шаг столбов",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks:
      buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["brick-calculator", "concrete", "board-volume"],
  },
};

