import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { rentalYieldCopyEn } from './copy.en';
import { rentalYieldCopyUk } from './copy.uk';
import { rentalYieldCopyDe } from './copy.de';
import { rentalYieldCopyEs } from './copy.es';
import { rentalYieldReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "rental-yield",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: rentalYieldCopyEn, uk: rentalYieldCopyUk, de: rentalYieldCopyDe, es: rentalYieldCopyEs },
  referenceCases: rentalYieldReferenceCases,
  publishedExample: { inputs: { price: 10000000, rentMode: 'annual', annualRent: 600000, annualCosts: 0 }, expected: ["6,00%"] },
  presentation: {
    id: "rental-yield",
    name: "Калькулятор арендной доходности",
    slug: "rental-yield",
    fullPath: "/finance/rental-yield/",
    category: "finance",
    icon: "home",
    popularity: 42,
    isNew: false,
    shortDescription: "Валовая и чистая доходность недвижимости от сдачи в аренду.",
    seoTitle: "Калькулятор арендной доходности — валовая и чистая",
    seoDescription: "Рассчитайте валовую и чистую доходность недвижимости от сдачи в аренду по цене покупки, арендной плате и годовым расходам.",
    h1: "Калькулятор арендной доходности",
    keywords: ["калькулятор арендной доходности", "доходность недвижимости", "валовая и чистая доходность аренды"],
    fields: [
      {
        "name": "price",
        "label": "Цена покупки",
        "type": "number",
        "defaultValue": 10000000,
        "min": 0,
        "step": 10000,
        "unit": "₽"
      },
      {
        "name": "rentMode",
        "label": "Аренда задана",
        "type": "select",
        "defaultValue": "annual",
        "options": [
          {
            "value": "annual",
            "label": "за год"
          },
          {
            "value": "monthly",
            "label": "за месяц"
          }
        ]
      },
      {
        "name": "annualRent",
        "label": "Аренда за год",
        "type": "number",
        "defaultValue": 600000,
        "min": 0,
        "step": 1000,
        "showIf": {
          "field": "rentMode",
          "equals": "annual"
        },
        "unit": "₽"
      },
      {
        "name": "monthlyRent",
        "label": "Аренда за месяц",
        "type": "number",
        "defaultValue": 50000,
        "min": 0,
        "step": 1000,
        "showIf": {
          "field": "rentMode",
          "equals": "monthly"
        },
        "unit": "₽"
      },
      {
        "name": "annualCosts",
        "label": "Годовые расходы",
        "type": "number",
        "defaultValue": 0,
        "min": 0,
        "step": 1000,
        "optional": true,
        "unit": "₽"
      }
    ],
    resultLabels: {
      "gross": "Валовая доходность",
      "net": "Чистая доходность",
      "annual": "Аренда за год",
      "payback": "Окупаемость",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["roi", "dividend-yield", "deposit-calculator"],
  },
};
