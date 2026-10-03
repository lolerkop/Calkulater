// Реальная доходность по Фишеру рядом с грубой разностью.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { realReturnCopyEn } from './copy.en';
import { realReturnCopyUk } from './copy.uk';
import { realReturnCopyDe } from './copy.de';
import { realReturnCopyEs } from './copy.es';
import { realReturnReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "real-return",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: realReturnCopyEn, uk: realReturnCopyUk, de: realReturnCopyDe, es: realReturnCopyEs },
  referenceCases: realReturnReferenceCases,
  publishedExample: { inputs: { nominal: 12, inflation: 7 }, expected: ["4,67%"] },
  presentation: {
    "id": "real-return",
    "name": "Калькулятор реальной доходности",
    "slug": "real-return",
    "fullPath": "/finance/real-return/",
    "category": "finance",
    "icon": "banknote",
    "popularity": 35,
    "isNew": false,
    "shortDescription": "Доходность после инфляции точно и привычной разностью.",
    "seoTitle": "Калькулятор реальной доходности — доход после инфляции",
    "seoDescription": "Рассчитайте реальную доходность вклада после инфляции по уравнению Фишера рядом с привычной разностью ставок.",
    "h1": "Калькулятор реальной доходности",
    "keywords": [
        "реальная доходность",
        "доход после инфляции",
        "уравнение фишера"
    ],
    "fields": [
        {
            "name": "nominal",
            "label": "Годовая доходность, %",
            "type": "number",
            "defaultValue": 12,
            "step": 0.5,
            "signed": true
        },
        {
            "name": "inflation",
            "label": "Инфляция, %",
            "type": "number",
            "defaultValue": 7,
            "step": 0.5,
            "signed": true
        },
        {
            "name": "amount",
            "label": "Сумма",
            "type": "number",
            "defaultValue": 0,
            "unit": "₽",
            "min": 0,
            "step": 10000,
            "optional": true
        },
        {
            "name": "years",
            "label": "Лет",
            "type": "number",
            "defaultValue": 1,
            "min": 0,
            "step": 0.1
        }
    ],
    "resultLabels": {
        "result": "Реальная доходность",
        "rough": "Грубая оценка разностью",
        "gap": "Расхождение с разностью",
        "nominal": "Номинальная ставка"
    },
    "relatedCalculatorIds": [
        "rule-of-72",
        "compound-interest",
        "deposit-calculator"
    ],
    ...contractContent.ru,
  },
};
