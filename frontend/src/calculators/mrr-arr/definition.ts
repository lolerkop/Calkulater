import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import { mrrArrCopyEn } from './copy.en';
import { mrrArrCopyUk } from './copy.uk';
import { mrrArrCopyDe } from './copy.de';
import { mrrArrCopyEs } from './copy.es';
import { mrrArrReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "mrr-arr",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: mrrArrCopyEn, uk: mrrArrCopyUk, de: mrrArrCopyDe, es: mrrArrCopyEs },
  referenceCases: mrrArrReferenceCases,
  publishedExample: { inputs: { subscribers: 420, arpuMonth: 1490, growthPct: 4 }, expected: ["625 800,00 ₽"] },
  presentation: {
    "id": "mrr-arr",
    "name": "Калькулятор MRR и ARR",
    "slug": "mrr-arr",
    "fullPath": "/business/mrr-arr/",
    "category": "business",
    "icon": "banknote",
    "popularity": 18,
    "isNew": false,
    "shortDescription": "Текущий месячный темп регулярной выручки, его годовой масштаб и сценарий изменения MRR за следующий месяц.",
    "seoTitle": "Калькулятор MRR и ARR: регулярная выручка подписки",
    "seoDescription": "Текущий месячный темп регулярной выручки, его годовой масштаб и сценарий изменения MRR за следующий месяц.",
    "h1": "Калькулятор MRR и ARR",
    "keywords": [
        "MRR",
        "ARR",
        "регулярная выручка",
        "выручка подписки"
    ],
    "fields": [
        {
            "name": "subscribers",
            "label": "Подписчиков",
            "type": "number",
            "defaultValue": 420,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "arpuMonth",
            "label": "Средняя месячная сумма с подписчика",
            "type": "number",
            "defaultValue": 1490,
            "min": 0,
            "step": 10,
            "unit": "₽"
        },
        {
            "name": "growthPct",
            "label": "Предполагаемое изменение MRR, %",
            "type": "number",
            "defaultValue": 4,
            "step": 0.5,
            "signed": true,
            "min": -100
        }
    ],
    "resultLabels": {
        "mrr": "MRR",
        "arr": "ARR",
        "next": "MRR через месяц",
        "delta": "Прирост за месяц",
        "subscribers": "Подписчиков"
    },
    "relatedCalculatorIds": [
        "arpu-arppu",
        "ltv",
        "churn-retention"
    ],
    ...contractContent.ru,
  },
};
