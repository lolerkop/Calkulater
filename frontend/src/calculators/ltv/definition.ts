// LTV: срок жизни задаётся напрямую или выводится из оттока.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { ltvCopyEn } from './copy.en';
import { ltvCopyUk } from './copy.uk';
import { ltvCopyDe } from './copy.de';
import { ltvCopyEs } from './copy.es';
import { ltvReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "ltv",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: ltvCopyEn, uk: ltvCopyUk, de: ltvCopyDe, es: ltvCopyEs },
  referenceCases: ltvReferenceCases,
  publishedExample: { inputs: { mode: 'months', arpu: 1200, months: 18, margin: 100 }, expected: ["21 600,00 ₽"] },
  presentation: {
    "id": "ltv",
    "name": "Калькулятор LTV",
    "slug": "ltv",
    "fullPath": "/business/ltv/",
    "category": "business",
    "icon": "trending-up",
    "popularity": 36,
    "isNew": false,
    "shortDescription": "Ценность клиента по сроку жизни или по оттоку.",
    "seoTitle": "Калькулятор LTV — пожизненная ценность клиента",
    "seoDescription": "Ценность клиента по месячной выручке, сроку или постоянному месячному оттоку и валовой марже, до CAC и неучтённых расходов.",
    "h1": "Калькулятор LTV",
    "keywords": [
        "ltv калькулятор",
        "пожизненная ценность клиента",
        "ltv к cac"
    ],
    "fields": [
        {
            "name": "mode",
            "label": "Как задан срок",
            "type": "select",
            "defaultValue": "months",
            "options": [
                {
                    "value": "months",
                    "label": "по сроку"
                },
                {
                    "value": "churn",
                    "label": "по оттоку"
                }
            ]
        },
        {
            "name": "arpu",
            "label": "Месячная выручка с клиента",
            "type": "number",
            "defaultValue": 1200,
            "unit": "₽",
            "min": 0,
            "step": 100
        },
        {
            "name": "months",
            "label": "Срок жизни, месяцев",
            "type": "number",
            "defaultValue": 18,
            "min": 0,
            "step": 1,
            "showIf": {
                "field": "mode",
                "equals": "months"
            }
        },
        {
            "name": "churn",
            "label": "Месячный отток клиентов, %",
            "type": "number",
            "defaultValue": 5,
            "min": 0,
            "max": 100,
            "step": 1,
            "showIf": {
                "field": "mode",
                "equals": "churn"
            }
        },
        {
            "name": "margin",
            "label": "Валовая маржа, %",
            "type": "number",
            "defaultValue": 100,
            "min": 0,
            "max": 100,
            "step": 5
        },
        {
            "name": "cac",
            "label": "Стоимость привлечения",
            "type": "number",
            "defaultValue": 0,
            "unit": "₽",
            "min": 0,
            "step": 500,
            "optional": true
        }
    ],
    "resultLabels": {
        "result": "LTV",
        "lifetime": "Срок жизни клиента",
        "arpu": "Средний доход за месяц",
        "ratio": "Отношение LTV к CAC"
    },
    "relatedCalculatorIds": [
        "cac",
        "roas",
        "revenue-per-employee"
    ],
    ...contractContent.ru,
  },
};
