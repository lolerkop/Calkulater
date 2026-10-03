import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { emergencyFundCopyEn } from './copy.en';
import { emergencyFundCopyUk } from './copy.uk';
import { emergencyFundCopyDe } from './copy.de';
import { emergencyFundCopyEs } from './copy.es';
import { emergencyFundReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'emergency-fund',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: emergencyFundCopyEn, uk: emergencyFundCopyUk, de: emergencyFundCopyDe, es: emergencyFundCopyEs },
  referenceCases: emergencyFundReferenceCases,
  publishedExample: {
    inputs: { monthlyExpenses: 85000, months: 6, saved: 210000 },
    expected: ['510 000,00 ₽'],
  },
  presentation: {
    "id": "emergency-fund",
    "name": "Калькулятор финансовой подушки",
    "slug": "emergency-fund",
    "fullPath": "/finance/emergency-fund/",
    "category": "finance",
    "icon": "shield",
    "popularity": 23,
    "isNew": false,
    "shortDescription": "Цель подушки в месяцах расходов и готовность к ней.",
    "seoTitle": "Калькулятор финансовой подушки безопасности",
    "seoDescription": "Рассчитайте цель финансовой подушки по месячным расходам и желаемому запасу в месяцах с показом готовности и недостающей суммы.",
    "h1": "Калькулятор финансовой подушки",
    "keywords": [
        "финансовая подушка",
        "резервный фонд",
        "запас на месяцы",
        "накопления"
    ],
    "fields": [
        {
            "name": "monthlyExpenses",
            "label": "Месячные расходы",
            "type": "number",
            "defaultValue": 85000,
            "min": 0,
            "step": 5000,
            "unit": "₽"
        },
        {
            "name": "months",
            "label": "Желаемый запас, месяцев",
            "type": "number",
            "defaultValue": 6,
            "min": 1,
            "max": 36,
            "step": 0.5
        },
        {
            "name": "saved",
            "label": "Уже накоплено",
            "type": "number",
            "defaultValue": 210000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "target": "Цель подушки",
        "gap": "Не хватает",
        "covered": "Уже покрыто месяцев",
        "ready": "Готовность"
    },
    "relatedCalculatorIds": [
        "savings-rate",
        "budget-50-30-20",
        "deposit-calculator"
    ],
    ...contractContent.ru,
  },
};
