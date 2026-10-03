import { validate } from './validate';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { marketCapCopyEn } from './copy.en';
import { marketCapCopyUk } from './copy.uk';
import { marketCapCopyDe } from './copy.de';
import { marketCapCopyEs } from './copy.es';
import { marketCapReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "market-cap",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: marketCapCopyEn, uk: marketCapCopyUk, de: marketCapCopyDe, es: marketCapCopyEs },
  referenceCases: marketCapReferenceCases,
  publishedExample: { inputs: { mode: 'cap', shares: 1000000, price: 250 }, expected: ["250 000 000,00 ₽"] },
  presentation: {
    id: "market-cap",
    name: "Калькулятор рыночной капитализации",
    slug: "market-cap",
    fullPath: "/finance/market-cap/",
    category: "finance",
    icon: "building-2",
    popularity: 43,
    isNew: false,
    shortDescription: "Рыночная капитализация компании по числу акций и цене одной акции.",
    seoTitle: "Калькулятор рыночной капитализации — акции × цена",
    seoDescription: "Рассчитайте рыночную капитализацию компании по числу акций в обращении и цене акции или найдите цену по капитализации.",
    h1: "Калькулятор рыночной капитализации",
    keywords: ["калькулятор капитализации", "рыночная капитализация", "капитализация компании"],
    fields: [
      {
        "name": "mode",
        "label": "Что нужно найти",
        "type": "select",
        "defaultValue": "cap",
        "options": [
          {
            "value": "cap",
            "label": "капитализацию"
          },
          {
            "value": "price",
            "label": "цену акции"
          }
        ]
      },
      {
        "name": "shares",
        "label": "Акций в обращении, шт",
        "type": "number",
        "defaultValue": 1000000,
        "min": 1,
        "step": 1
      },
      {
        "name": "price",
        "label": "Цена одной акции",
        "type": "number",
        "defaultValue": 250,
        "min": 0,
        "step": 0.01,
        "showIf": {
          "field": "mode",
          "equals": "cap"
        },
        "unit": "₽"
      },
      {
        "name": "cap",
        "label": "Капитализация",
        "type": "number",
        "defaultValue": 250000000,
        "min": 0,
        "step": 1000,
        "showIf": {
          "field": "mode",
          "equals": "price"
        },
        "unit": "₽"
      }
    ],
    resultLabels: {
      "cap": "Капитализация",
      "price": "Цена одной акции",
      "shares": "Акций в обращении",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["dividend-yield", "roi", "cagr"],
  },
};
