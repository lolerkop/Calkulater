// ROAS рядом с ROI: метрики разные, отличаются на единицу в кратности.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { roasCopyEn } from './copy.en';
import { roasCopyUk } from './copy.uk';
import { roasCopyDe } from './copy.de';
import { roasCopyEs } from './copy.es';
import { roasReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "roas",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roasCopyEn, uk: roasCopyUk, de: roasCopyDe, es: roasCopyEs },
  referenceCases: roasReferenceCases,
  publishedExample: { inputs: { revenue: 480000, cost: 120000, margin: 100 }, expected: ["4,00×"] },
  presentation: {
    "id": "roas",
    "name": "Калькулятор ROAS",
    "slug": "roas",
    "fullPath": "/business/roas/",
    "category": "business",
    "icon": "trending-up",
    "popularity": 37,
    "isNew": false,
    "shortDescription": "ROAS по выручке и доходность рекламы с учётом маржи.",
    "seoTitle": "Калькулятор ROAS — выручка и покрытие рекламы",
    "seoDescription": "ROAS по выручке, остаток после учтённых затрат и рекламы и порог покрытия рекламных расходов с заданной маржой.",
    "h1": "Калькулятор ROAS",
    "keywords": [
        "roas калькулятор",
        "окупаемость рекламы",
        "roas и roi"
    ],
    "fields": [
        {
            "name": "revenue",
            "label": "Доход",
            "type": "number",
            "defaultValue": 480000,
            "unit": "₽",
            "min": 0,
            "step": 10000
        },
        {
            "name": "cost",
            "label": "Расход на рекламу",
            "type": "number",
            "defaultValue": 120000,
            "unit": "₽",
            "min": 0,
            "step": 10000
        },
        {
            "name": "margin",
            "label": "Маржа до рекламы, %",
            "type": "number",
            "defaultValue": 100,
            "min": 0,
            "max": 100,
            "step": 5
        }
    ],
    "resultLabels": {
        "result": "ROAS",
        "percent": "ROAS в процентах",
        "roi": "Доходность рекламного расхода",
        "profit": "Остаток после учтённых затрат и рекламы"
    },
    "relatedCalculatorIds": [
        "ad-roi",
        "cpm",
        "ctr"
    ],
    ...contractContent.ru,
  },
};
