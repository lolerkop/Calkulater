import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { airExchangeCopyEn } from './copy.en';
import { airExchangeCopyUk } from './copy.uk';
import { airExchangeCopyDe } from './copy.de';
import { airExchangeCopyEs } from './copy.es';
import { airExchangeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "air-exchange",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: airExchangeCopyEn, uk: airExchangeCopyUk, de: airExchangeCopyDe, es: airExchangeCopyEs },
  referenceCases: airExchangeReferenceCases,
  publishedExample: { inputs: { area: 20, height: 2.7, ach: 3 }, expected: ["162 м³/ч"] },
  presentation: {
    id: "air-exchange",
    name: "Калькулятор воздухообмена",
    slug: "kratnost-vozduhoobmena",
    fullPath: "/building/kratnost-vozduhoobmena/",
    category: "building",
    icon: "gauge",
    popularity: 35,
    isNew: false,
    shortDescription: "Требуемый расход воздуха по объёму помещения и кратности.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор воздухообмена — расход воздуха по кратности",
    seoDescription: "Рассчитайте требуемый расход воздуха по площади, высоте помещения и кратности воздухообмена — в м³/ч и л/с.",
    h1: "Калькулятор воздухообмена",
    keywords: ["кратность воздухообмена", "расход воздуха", "подбор вентилятора", "вентиляция помещения"],
    fields: [
      { name: 'area', label: "Площадь помещения", type: 'number', unit: "м²", defaultValue: 20, min: 0, step: 1 },
      { name: 'height', label: "Высота потолка", type: 'number', unit: "м", defaultValue: 2.7, min: 0, step: 0.1 },
      { name: 'ach', label: "Кратность воздухообмена", type: 'number', unit: "1/ч", defaultValue: 3, min: 0, step: 0.5 },
    ],
    resultLabels: {
      "flow": "Требуемый расход воздуха", "volume": "Объём помещения",
      "flowLs": "В литрах в секунду", "perDay": "Смен воздуха в сутки",
      "flowMin": "В кубометрах в минуту",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["room-volume", "heating-power", "underfloor-heating"],
  },
};

