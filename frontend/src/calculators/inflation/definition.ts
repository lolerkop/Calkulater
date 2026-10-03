import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { inflationCopyEn } from './copy.en';
import { inflationCopyUk } from './copy.uk';
import { inflationCopyDe } from './copy.de';
import { inflationCopyEs } from './copy.es';
import { inflationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "inflation",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: inflationCopyEn, uk: inflationCopyUk, de: inflationCopyDe, es: inflationCopyEs },
  referenceCases: inflationReferenceCases,
  publishedExample: { inputs: { amount: 100000, ratePct: 8, years: 10 }, expected: ["46 319,35 ₽"] },
  presentation: {
    "id": "inflation",
    "name": "Калькулятор инфляции",
    "slug": "inflation",
    "fullPath": "/finance/inflation/",
    "category": "finance",
    "icon": "trending-up",
    "popularity": 14,
    "isNew": false,
    "shortDescription": "Покупательная способность суммы через несколько лет и размер потери.",
    "seoTitle": "Калькулятор инфляции и покупательной способности денег",
    "seoDescription": "Рассчитайте, сколько будет стоить сегодняшняя сумма через несколько лет и какую часть покупательной способности она потеряет.",
    "h1": "Калькулятор инфляции",
    "keywords": [
        "калькулятор инфляции",
        "покупательная способность",
        "обесценивание денег",
        "инфляция за годы"
    ],
    "fields": [
        {
            "name": "amount",
            "label": "Сумма сегодня",
            "type": "number",
            "defaultValue": 100000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "ratePct",
            "label": "Инфляция, % в год",
            "type": "number",
            "defaultValue": 8,
            "step": 0.1,
            "signed": true
        },
        {
            "name": "years",
            "label": "Срок, лет",
            "type": "number",
            "defaultValue": 10,
            "min": 0,
            "step": 0.1
        }
    ],
    "resultLabels": {
        "real": "Покупательная способность",
        "nominal": "Столько же в будущих деньгах",
        "lost": "Потеряно покупательной способности",
        "share": "Доля потери",
        "factor": "Множитель цен"
    },
    "relatedCalculatorIds": [
        "real-return",
        "time-value-money",
        "compound-interest"
    ],
    ...contractContent.ru,
  },
};
