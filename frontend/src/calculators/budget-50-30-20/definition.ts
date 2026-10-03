// Бюджет 50/30/20 — проверяет вывод нескольких величин одним расчётом.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { budgetCopyEn } from './copy.en';
import { budgetCopyUk } from './copy.uk';
import { budgetCopyDe } from './copy.de';
import { budget503020CopyEs } from './copy.es';
import { budgetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'budget-50-30-20',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: budgetCopyEn, uk: budgetCopyUk, de: budgetCopyDe, es: budget503020CopyEs },
  referenceCases: budgetReferenceCases,
  publishedExample: { inputs: { income: 100000 }, expected: ['50 000 ₽', '30 000 ₽', '20 000 ₽'] },
  presentation: {
    "id": "budget-50-30-20",
    "name": "Калькулятор бюджета 50/30/20",
    "slug": "budget-50-30-20",
    "fullPath": "/finance/budget-50-30-20/",
    "category": "finance",
    "icon": "wallet",
    "popularity": 54,
    "isNew": false,
    "shortDescription": "Деление дохода на нужды, желания и сбережения.",
    "seoTitle": "Калькулятор бюджета 50/30/20 — нужды, желания, сбережения",
    "seoDescription": "Разделите месячный доход после налогов на нужды, желания и сбережения по правилу 50/30/20.",
    "h1": "Калькулятор бюджета 50/30/20",
    "keywords": [
        "бюджет 50/30/20",
        "правило бюджета",
        "месячный бюджет"
    ],
    "fields": [
        {
            "name": "income",
            "label": "Месячный доход после налогов",
            "type": "number",
            "defaultValue": 100000,
            "min": 0,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "needs": "Нужды",
        "wants": "Желания",
        "savings": "Сбережения"
    },
    "relatedCalculatorIds": [
        "savings-rate",
        "compound-interest",
        "deposit-calculator"
    ],
    ...contractContent.ru,
  },
};
