import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { alcoholUnitsCopyEn } from './copy.en';
import { alcoholUnitsCopyUk } from './copy.uk';
import { alcoholUnitsCopyDe } from './copy.de';
import { alcoholUnitsCopyEs } from './copy.es';
import { alcoholUnitsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "alcohol-units",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: alcoholUnitsCopyEn, uk: alcoholUnitsCopyUk, de: alcoholUnitsCopyDe, es: alcoholUnitsCopyEs },
  referenceCases: alcoholUnitsReferenceCases,
  publishedExample: { inputs: { volume_ml: 150, abv: 12, standard_g: 10 }, expected: ["1,42"] },
  presentation: {
    ...contractContent.ru,
    id: "alcohol-units",
    name: "Калькулятор стандартных единиц алкоголя",
    slug: "edinicy-alkogolya",
    fullPath: "/household/edinicy-alkogolya/",
    category: "household",
    icon: "shopping-basket",
    popularity: 32,
    isNew: false,
    shortDescription: "Сколько чистого спирта и стандартных единиц в порции напитка.",
    seoTitle: "Калькулятор стандартных единиц алкоголя и чистого спирта",
    seoDescription: "Рассчитайте, сколько чистого спирта и стандартных единиц содержит порция напитка по объёму и крепости.",
    h1: "Калькулятор стандартных единиц алкоголя",
    keywords: ["стандартная единица алкоголя", "сколько спирта в вине", "чистый спирт в напитке", "единицы алкоголя расчёт"],
    fields: [
      { name: 'volume_ml', label: 'Объём порции, мл', type: 'number', defaultValue: 150, min: 0, step: 10 },
      { name: 'abv', label: 'Крепость, %', type: 'number', defaultValue: 12, min: 0, max: 100, step: 0.5 },
      { name: 'standard_g', label: 'Норма единицы, г спирта', type: 'number', defaultValue: 10, min: 0, step: 1 },
    ],
    resultLabels: {
      "units": "Стандартных единиц",
      "grams": "Чистого спирта по массе",
      "pureMl": "Чистого спирта по объёму",
      "standard": "Норма единицы",
      "abv": "Крепость",
    },
    relatedCalculatorIds: ["brew-ratio", "recipe-scale", "price-per-unit"],
  },
};
