import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { churnRetentionCopyEn } from './copy.en';
import { churnRetentionCopyUk } from './copy.uk';
import { churnRetentionCopyDe } from './copy.de';
import { churnRetentionCopyEs } from './copy.es';
import { churnRetentionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "churn-retention",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: churnRetentionCopyEn, uk: churnRetentionCopyUk, de: churnRetentionCopyDe, es: churnRetentionCopyEs },
  referenceCases: churnRetentionReferenceCases,
  publishedExample: { inputs: { startCustomers: 1000, lost: 50, gained: 80 }, expected: ["5,00%"] },
  presentation: {
    "id": "churn-retention",
    "name": "Калькулятор оттока и удержания",
    "slug": "churn-retention",
    "fullPath": "/business/churn-retention/",
    "category": "business",
    "icon": "repeat",
    "popularity": 20,
    "isNew": false,
    "shortDescription": "Отток, удержание, чистый прирост и средний срок жизни клиента за период.",
    "seoTitle": "Калькулятор оттока и удержания клиентов (churn и retention)",
    "seoDescription": "Рассчитайте отток, удержание, чистый прирост клиентов и средний срок жизни клиента за период.",
    "h1": "Калькулятор оттока и удержания",
    "keywords": [
        "отток клиентов",
        "churn rate",
        "удержание клиентов",
        "retention"
    ],
    "fields": [
        {
            "name": "startCustomers",
            "label": "Клиентов на начало периода",
            "type": "number",
            "defaultValue": 1000,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "lost",
            "label": "Ушло из начальной группы",
            "type": "number",
            "defaultValue": 50,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "gained",
            "label": "Новые клиенты, оставшиеся на конец",
            "type": "number",
            "defaultValue": 80,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        }
    ],
    "resultLabels": {
        "churn": "Отток",
        "retention": "Удержание",
        "endCustomers": "Клиентов на конец",
        "net": "Чистый прирост",
        "lifetime": "Средний срок жизни, периодов"
    },
    "relatedCalculatorIds": [
        "ltv",
        "arpu-arppu",
        "mrr-arr"
    ] ,
    ...contractContent.ru,
  },
};
