import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pipeWeightCopyEn } from './copy.en';
import { pipeWeightCopyUk } from './copy.uk';
import { pipeWeightCopyDe } from './copy.de';
import { pipeWeightCopyEs } from './copy.es';
import { pipeWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pipe-weight",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pipeWeightCopyEn, uk: pipeWeightCopyUk, de: pipeWeightCopyDe, es: pipeWeightCopyEs },
  referenceCases: pipeWeightReferenceCases,
  publishedExample: { inputs: { d: 108, wall: 4, len: 6, rho: 7850 }, expected: ["61,555 кг"] },
  presentation: {
    id: "pipe-weight",
    name: "Калькулятор веса трубы",
    slug: "ves-truby",
    fullPath: "/building/ves-truby/",
    category: "building",
    icon: "wall",
    popularity: 25,
    isNew: false,
    shortDescription: "Масса трубы по наружному диаметру, толщине стенки, длине и плотности материала.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор веса трубы — по диаметру, стенке и длине",
    seoDescription: "Рассчитайте массу стальной или пластиковой трубы по наружному диаметру, толщине стенки, длине и плотности материала.",
    h1: "Калькулятор веса трубы",
    keywords: ["вес трубы", "масса трубы", "погонный метр трубы", "внутренний диаметр"],
    fields: [
      { name: 'd', label: "Наружный диаметр", type: 'number', unit: "мм", defaultValue: 108, min: 0, step: 1 },
      { name: 'wall', label: "Толщина стенки", type: 'number', unit: "мм", defaultValue: 4, min: 0, step: 0.5 },
      { name: 'len', label: "Длина", type: 'number', unit: "м", defaultValue: 6, min: 0, step: 0.5 },
      { name: 'rho', label: "Плотность материала", type: 'number', unit: "кг/м³", defaultValue: 7850, min: 0, step: 50 },
    ],
    resultLabels: {
      "mass": "Масса трубы", "perMetre": "Масса погонного метра",
      "inner": "Внутренний диаметр", "area": "Площадь сечения металла",
      "volume": "Объём внутренней полости",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["metal-weight", "pipe-flow", "wood-weight"],
  },
};

