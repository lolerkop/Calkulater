import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { savingsGoalCopyEn } from './copy.en';
import { savingsGoalCopyUk } from './copy.uk';
import { savingsGoalCopyDe } from './copy.de';
import { savingsGoalCopyEs } from './copy.es';
import { savingsGoalReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "savings-goal",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: savingsGoalCopyEn, uk: savingsGoalCopyUk, de: savingsGoalCopyDe, es: savingsGoalCopyEs },
  referenceCases: savingsGoalReferenceCases,
  publishedExample: { inputs: { mode: 'payment', goal: 1000000, initial: 100000, rate: 8, years: 5, monthly: 15000 }, expected: ["11 582,09 ₽"] },
  presentation: {
    "id": "savings-goal",
    "name": "Калькулятор финансовой цели",
    "slug": "finansovaya-cel",
    "fullPath": "/finance/finansovaya-cel/",
    "category": "finance",
    "icon": "target",
    "popularity": 49,
    "isNew": false,
    "shortDescription": "Сколько откладывать в месяц или за сколько цель достигается при заданном взносе.",
    "seoTitle": "Калькулятор финансовой цели: взнос в месяц или срок накопления",
    "seoDescription": "Посчитайте, сколько откладывать в месяц для достижения цели, или за сколько времени цель достигается при выбранном взносе.",
    "h1": "Калькулятор финансовой цели",
    "keywords": [
        "финансовая цель",
        "сколько откладывать в месяц",
        "срок накопления",
        "план накоплений"
    ],
    "fields": [
        {
            "name": "mode",
            "label": "Что посчитать",
            "type": "select",
            "defaultValue": "payment",
            "options": [
                {
                    "value": "payment",
                    "label": "Взнос в месяц"
                },
                {
                    "value": "term",
                    "label": "За сколько накопится"
                }
            ]
        },
        {
            "name": "goal",
            "label": "Сумма цели",
            "type": "number",
            "defaultValue": 1000000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "initial",
            "label": "Уже накоплено",
            "type": "number",
            "defaultValue": 100000,
            "min": 0,
            "step": 10000,
            "unit": "₽",
            "optional": true
        },
        {
            "name": "rate",
            "label": "Годовая ставка, %",
            "type": "number",
            "defaultValue": 8,
            "min": 0,
            "max": 100,
            "step": 0.1
        },
        {
            "name": "years",
            "label": "Срок, лет",
            "type": "number",
            "defaultValue": 5,
            "min": 0,
            "step": 0.5,
            "showIf": {
                "field": "mode",
                "equals": "payment"
            }
        },
        {
            "name": "monthly",
            "label": "Ежемесячный взнос",
            "type": "number",
            "defaultValue": 15000,
            "min": 0,
            "step": 1000,
            "showIf": {
                "field": "mode",
                "equals": "term"
            },
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "payment": "Взнос в месяц",
        "term": "Срок",
        "months": "Месяцев",
        "years": "В годах",
        "contributions": "Всего взносов",
        "interest": "Начислено процентов",
        "final": "Итоговая сумма",
        "goal": "Цель"
    },
    "relatedCalculatorIds": [
        "compound-interest",
        "emergency-fund",
        "time-value-money"
    ],
    ...contractContent.ru,
  },
};
