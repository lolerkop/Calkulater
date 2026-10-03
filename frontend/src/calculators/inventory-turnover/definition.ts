import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { inventoryTurnoverCopyEn } from './copy.en';
import { inventoryTurnoverCopyUk } from './copy.uk';
import { inventoryTurnoverCopyDe } from './copy.de';
import { inventoryTurnoverCopyEs } from './copy.es';
import { inventoryTurnoverReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "inventory-turnover",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: inventoryTurnoverCopyEn, uk: inventoryTurnoverCopyUk, de: inventoryTurnoverCopyDe, es: inventoryTurnoverCopyEs },
  referenceCases: inventoryTurnoverReferenceCases,
  publishedExample: { inputs: { cogs: 600000, mode: 'direct', avgInventory: 150000 }, expected: ["4,00 раз"] },
  presentation: {
    "id": "inventory-turnover",
    "name": "Калькулятор оборачиваемости запасов",
    "slug": "inventory-turnover",
    "fullPath": "/business/inventory-turnover/",
    "category": "business",
    "icon": "repeat",
    "popularity": 42,
    "isNew": false,
    "shortDescription": "Оборачиваемость запасов и срок хранения по себестоимости продаж.",
    "seoTitle": "Калькулятор оборачиваемости запасов — обороты и дни хранения",
    "seoDescription": "Рассчитайте оборачиваемость запасов по себестоимости продаж и среднему запасу, а также средний срок хранения товара в днях.",
    "h1": "Калькулятор оборачиваемости запасов",
    "keywords": [
        "оборачиваемость запасов",
        "калькулятор оборачиваемости",
        "срок хранения товара",
        "себестоимость продаж"
    ],
    "fields": [
        {
            "name": "cogs",
            "label": "Годовая себестоимость продаж",
            "type": "number",
            "defaultValue": 600000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "mode",
            "label": "Средний запас",
            "type": "select",
            "defaultValue": "direct",
            "options": [
                {
                    "value": "direct",
                    "label": "известен"
                },
                {
                    "value": "beginEnd",
                    "label": "считать по остаткам"
                }
            ]
        },
        {
            "name": "avgInventory",
            "label": "Средний запас",
            "type": "number",
            "defaultValue": 150000,
            "min": 0,
            "step": 1000,
            "showIf": {
                "field": "mode",
                "equals": "direct"
            },
            "unit": "₽"
        },
        {
            "name": "beginInventory",
            "label": "Запас на начало",
            "type": "number",
            "defaultValue": 30000,
            "min": 0,
            "step": 1000,
            "showIf": {
                "field": "mode",
                "equals": "beginEnd"
            },
            "unit": "₽"
        },
        {
            "name": "endInventory",
            "label": "Запас на конец",
            "type": "number",
            "defaultValue": 20000,
            "min": 0,
            "step": 1000,
            "showIf": {
                "field": "mode",
                "equals": "beginEnd"
            },
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "turns": "Оборачиваемость",
        "days": "Срок хранения",
        "avg": "Средний запас"
    },
    "relatedCalculatorIds": [
        "contribution-margin",
        "break-even-calculator",
        "margin-calculator"
    ] ,
    ...contractContent.ru,
  },
};
