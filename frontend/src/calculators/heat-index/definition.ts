import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { heatIndexCopyEn } from './copy.en';
import { heatIndexCopyUk } from './copy.uk';
import { heatIndexCopyDe } from './copy.de';
import { heatIndexCopyEs } from './copy.es';
import { heatIndexReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "heat-index",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: heatIndexCopyEn, uk: heatIndexCopyUk, de: heatIndexCopyDe, es: heatIndexCopyEs },
  referenceCases: heatIndexReferenceCases,
  publishedExample: { inputs: { t: 32, rh: 70 }, expected: ["40,409 °C"] },
  presentation: {
    id: "heat-index",
    name: "Калькулятор индекса жары",
    slug: "indeks-zhary",
    fullPath: "/physics/indeks-zhary/",
    category: "physics",
    icon: "flame",
    popularity: 31,
    isNew: false,
    shortDescription: "Учебный индекс жары по регрессии без дополнительных поправок.",
    seoTitle: "Калькулятор индекса жары — ощущаемая температура и влажность",
    seoDescription: "Девятичленная регрессия Ротфуша без дополнительных поправок NWS: индекс жары, разница с температурой и категории по шкале °F.",
    h1: "Калькулятор индекса жары",
    keywords: ["индекс жары", "ощущаемая температура", "влажность и жара", "heat index калькулятор"],
    fields: [
      { name: 't', label: "Температура", type: 'number', defaultValue: 32, min: 20, max: 60, step: 0.1 , unit: "°C" },
      { name: 'rh', label: "Относительная влажность", type: 'number', defaultValue: 70, min: 0, max: 100, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "index": "Ощущается как",
      "delta": "Прибавка к термометру",
      "fahrenheit": "В градусах Фаренгейта",
      "thermometerF": "Термометр по Фаренгейту",
      "risk": "Категория индекса",
    },
    relatedCalculatorIds: ["pressure", "density", "convert-temperature"],
      ...contract.ru,
  },
};
