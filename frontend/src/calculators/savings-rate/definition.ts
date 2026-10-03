// Норма сбережений — первый калькулятор, созданный на Platform V2 с нуля,
// а не перенесённый. Взят самым простым намеренно: он задаёт нижнюю границу
// стоимости калькулятора и показывает, сколько кода нужно, когда формула
// умещается в одну строку.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { savingsRateCopyEn } from './copy.en';
import { savingsRateCopyUk } from './copy.uk';
import { savingsRateCopyDe } from './copy.de';
import { savingsRateCopyEs } from './copy.es';
import { savingsRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'savings-rate',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: savingsRateCopyEn, uk: savingsRateCopyUk, de: savingsRateCopyDe, es: savingsRateCopyEs },
  referenceCases: savingsRateReferenceCases,
  // Пример со страницы: он же проверяется тестом на соответствие расчёту.
  publishedExample: { inputs: { income: 100000, expenses: 70000 }, expected: ['30,00 %', '30 000 ₽'] },
  presentation: {
    "id": "savings-rate",
    "name": "Калькулятор нормы сбережений",
    "slug": "savings-rate",
    "fullPath": "/finance/savings-rate/",
    "category": "finance",
    "icon": "piggy-bank",
    "popularity": 52,
    "isNew": false,
    "shortDescription": "Какая доля дохода остаётся после расходов.",
    "seoTitle": "Калькулятор нормы сбережений — сколько процентов дохода вы откладываете",
    "seoDescription": "Расчёт нормы сбережений: доля дохода, которая остаётся после расходов, и сумма сбережений за период.",
    "h1": "Калькулятор нормы сбережений",
    "keywords": [
        "норма сбережений",
        "сколько откладывать",
        "личный бюджет"
    ],
    "fields": [
        {
            "name": "income",
            "label": "Доход за период",
            "type": "number",
            "defaultValue": 100000,
            "min": 0,
            "unit": "₽"
        },
        {
            "name": "expenses",
            "label": "Расходы за период",
            "type": "number",
            "defaultValue": 70000,
            "min": 0,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "rate": "Норма сбережений",
        "saved": "Сбережения за период"
    },
    "relatedCalculatorIds": [
        "compound-interest",
        "deposit-calculator",
        "credit-calculator"
    ],
    ...contractContent.ru,
  },
};
