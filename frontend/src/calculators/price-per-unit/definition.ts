import { contextualField } from './contextualField';
import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pricePerUnitCopyEn } from './copy.en';
import { pricePerUnitCopyUk } from './copy.uk';
import { pricePerUnitCopyDe } from './copy.de';
import { pricePerUnitCopyEs } from './copy.es';
import { pricePerUnitReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "price-per-unit",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: pricePerUnitCopyEn, uk: pricePerUnitCopyUk, de: pricePerUnitCopyDe, es: pricePerUnitCopyEs },
  referenceCases: pricePerUnitReferenceCases,
  publishedExample: { inputs: { mode: 'single', unit: 'kg', price: 150, amount: 0.5 }, expected: ["300,00 ₽ за кг"] },
  presentation: {
    id: "price-per-unit",
    name: "Калькулятор цены за единицу",
    slug: "price-per-unit",
    fullPath: "/household/price-per-unit/",
    category: "household",
    icon: "shopping-basket",
    popularity: 47,
    isNew: false,
    shortDescription: "Цена за килограмм, литр или штуку и сравнение двух упаковок.",
    seoTitle: "Калькулятор цены за единицу — сравнение упаковок",
    seoDescription: "Рассчитайте цену за килограмм, литр или штуку и сравните две упаковки, чтобы понять, какая выгоднее.",
    h1: "Калькулятор цены за единицу",
    keywords: ["цена за единицу", "цена за килограмм", "сравнить упаковки", "что выгоднее купить"],
    fields: [
  {
    "name": "mode",
    "label": "Что делаем",
    "type": "select",
    "defaultValue": "single",
    "options": [
      {
        "value": "single",
        "label": "цена за единицу"
      },
      {
        "value": "compare",
        "label": "сравнить две упаковки"
      }
    ]
  },
  {
    "name": "unit",
    "label": "Единица",
    "type": "select",
    "defaultValue": "kg",
    "options": [
      {
        "value": "kg",
        "label": "килограмм"
      },
      {
        "value": "l",
        "label": "литр"
      },
      {
        "value": "pcs",
        "label": "штука"
      }
    ]
  },
  {
    "name": "price",
    "label": "Цена упаковки",
    "type": "number",
    "defaultValue": 150,
    "min": 0,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "single"
    },
    "unit": "₽"
  },
  {
    "name": "amount",
    "label": "Количество в упаковке",
    "type": "number",
    "defaultValue": 0.5,
    "min": 0,
    "step": 0.01,
    "showIf": {
      "field": "mode",
      "equals": "single"
    },
    "unit": "выбранная единица"
  },
  {
    "name": "priceA",
    "label": "Цена упаковки A",
    "type": "number",
    "defaultValue": 150,
    "min": 0,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "compare"
    },
    "unit": "₽"
  },
  {
    "name": "amountA",
    "label": "Количество в упаковке A",
    "type": "number",
    "defaultValue": 0.5,
    "min": 0,
    "step": 0.01,
    "showIf": {
      "field": "mode",
      "equals": "compare"
    },
    "unit": "выбранная единица"
  },
  {
    "name": "priceB",
    "label": "Цена упаковки B",
    "type": "number",
    "defaultValue": 260,
    "min": 0,
    "step": 1,
    "showIf": {
      "field": "mode",
      "equals": "compare"
    },
    "unit": "₽"
  },
  {
    "name": "amountB",
    "label": "Количество в упаковке B",
    "type": "number",
    "defaultValue": 1,
    "min": 0,
    "step": 0.01,
    "showIf": {
      "field": "mode",
      "equals": "compare"
    },
    "unit": "выбранная единица"
  }
],
    resultLabels: {
  "unitPrice": "Цена за единицу",
  "a": "Упаковка A",
  "b": "Упаковка B",
  "cheaper": "Выгоднее",
  "overpay": "Переплата за единицу"
},
    relatedCalculatorIds: ["discount-calculator", "shipping-per-unit", "stock-duration"],
    ...contract.ru,
  },
};
