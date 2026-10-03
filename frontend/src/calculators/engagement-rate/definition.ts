import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { engagementRateCopyEn } from './copy.en';
import { engagementRateCopyUk } from './copy.uk';
import { engagementRateCopyDe } from './copy.de';
import { engagementRateCopyEs } from './copy.es';
import { engagementRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "engagement-rate",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: engagementRateCopyEn, uk: engagementRateCopyUk, de: engagementRateCopyDe, es: engagementRateCopyEs },
  referenceCases: engagementRateReferenceCases,
  publishedExample: { inputs: { engagements: 450, base: 'reach', reach: 9000 }, expected: ["5,00%"] },
  presentation: {
    "id": "engagement-rate",
    "name": "Калькулятор вовлечённости",
    "slug": "engagement-rate",
    "fullPath": "/business/engagement-rate/",
    "category": "business",
    "icon": "heart",
    "popularity": 44,
    "isNew": false,
    "shortDescription": "Уровень вовлечённости публикации по охвату или по числу подписчиков.",
    "seoTitle": "Калькулятор вовлечённости — ER по охвату и подписчикам",
    "seoDescription": "Рассчитайте уровень вовлечённости публикации по охвату или по числу подписчиков и сравнивайте показатели с одинаковой базой.",
    "h1": "Калькулятор вовлечённости",
    "keywords": [
        "калькулятор вовлечённости",
        "engagement rate",
        "er по охвату",
        "вовлечённость подписчиков"
    ],
    "fields": [
        {
            "name": "engagements",
            "label": "Реакций всего",
            "type": "number",
            "defaultValue": 450,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "base",
            "label": "Считать от",
            "type": "select",
            "defaultValue": "reach",
            "options": [
                {
                    "value": "reach",
                    "label": "охвата"
                },
                {
                    "value": "followers",
                    "label": "числа подписчиков"
                }
            ]
        },
        {
            "name": "reach",
            "label": "Охват публикации",
            "type": "number",
            "defaultValue": 9000,
            "min": 0,
            "step": 1,
            "showIf": {
                "field": "base",
                "equals": "reach"
            },
            "max": 9007199254740991
        },
        {
            "name": "followers",
            "label": "Подписчиков",
            "type": "number",
            "defaultValue": 4000,
            "min": 0,
            "step": 1,
            "showIf": {
                "field": "base",
                "equals": "followers"
            },
            "max": 9007199254740991
        }
    ],
    "resultLabels": {
        "er": "Вовлечённость",
        "base": "База расчёта",
        "engagements": "Реакций",
        "perThousand": "Реакций на тысячу"
    },
    "relatedCalculatorIds": [
        "ctr",
        "cpm",
        "roas"
    ],
    ...contractContent.ru,
  },
};
