import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { profitCopyEn } from './copy.en';
import { profitCopyUk } from './copy.uk';
import { profitCopyDe } from './copy.de';
import { profitCopyEs } from './copy.es';
import { profitReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'profit',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: profitCopyEn, uk: profitCopyUk, de: profitCopyDe, es: profitCopyEs },
  referenceCases: profitReferenceCases,
  publishedExample: {
    inputs: { revenue: 480000, cost: 315000 },
    expected: ['165 000,00 ₽'],
  },
  presentation: {
    "id": "profit",
    "name": "Калькулятор прибыли, маржи и наценки",
    "slug": "profit-margin-markup",
    "fullPath": "/business/profit-margin-markup/",
    "category": "business",
    "icon": "wallet",
    "popularity": 24,
    "isNew": false,
    "shortDescription": "Прибыль, маржа и наценка по выручке и затратам.",
    "seoTitle": "Калькулятор прибыли: маржа и наценка",
    "seoDescription": "Рассчитайте прибыль, маржу и наценку по выручке и затратам и наглядно увидите, почему эти два процента для одной сделки различаются.",
    "h1": "Калькулятор прибыли, маржи и наценки",
    "keywords": [
        "калькулятор прибыли",
        "маржа",
        "наценка",
        "выручка и затраты"
    ],
    "fields": [
        {
            "name": "revenue",
            "label": "Выручка",
            "type": "number",
            "defaultValue": 480000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "cost",
            "label": "Затраты",
            "type": "number",
            "defaultValue": 315000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "profit": "Прибыль",
        "margin": "Маржа",
        "markup": "Наценка",
        "revenue": "Выручка",
        "cost": "Затраты"
    },
    "relatedCalculatorIds": [
        "margin-calculator",
        "cogs",
        "break-even-calculator"
    ] ,
    ...contractContent.ru,
  },
};
