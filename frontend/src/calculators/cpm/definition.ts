// CPM: стоимость тысячи показов. Знаменатель — показы, делённые на тысячу.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { cpmCopyEn } from './copy.en';
import { cpmCopyUk } from './copy.uk';
import { cpmCopyDe } from './copy.de';
import { cpmCopyEs } from './copy.es';
import { cpmReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "cpm",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: cpmCopyEn, uk: cpmCopyUk, de: cpmCopyDe, es: cpmCopyEs },
  referenceCases: cpmReferenceCases,
  publishedExample: { inputs: { mode: 'cpm', cost: 45000, impressions: 1200000 }, expected: ["37,50 ₽"] },
  presentation: {
    "id": "cpm",
    "name": "Калькулятор CPM",
    "slug": "cpm",
    "fullPath": "/business/cpm/",
    "category": "business",
    "icon": "trending-up",
    "popularity": 33,
    "isNew": false,
    "shortDescription": "Стоимость тысячи показов в любую сторону.",
    "seoTitle": "Калькулятор CPM — стоимость тысячи показов",
    "seoDescription": "Рассчитайте CPM по бюджету и показам или решите обратную задачу: сколько показов либо какой бюджет даёт заданный CPM.",
    "h1": "Калькулятор CPM",
    "keywords": [
        "cpm калькулятор",
        "стоимость тысячи показов",
        "реклама cpm"
    ],
    "fields": [
        {
            "name": "mode",
            "label": "Что находим",
            "type": "select",
            "defaultValue": "cpm",
            "options": [
                {
                    "value": "cpm",
                    "label": "CPM"
                },
                {
                    "value": "impressions",
                    "label": "показы"
                },
                {
                    "value": "cost",
                    "label": "бюджет"
                }
            ]
        },
        {
            "name": "cost",
            "label": "Бюджет кампании",
            "type": "number",
            "defaultValue": 45000,
            "unit": "₽",
            "min": 0,
            "step": 1000,
            "showIf": {
                "field": "mode",
                "oneOf": [
                    "cpm",
                    "impressions"
                ]
            }
        },
        {
            "name": "impressions",
            "label": "Показы",
            "type": "number",
            "defaultValue": 1200000,
            "min": 1,
            "step": 1,
            "max": 9007199254740991,
            "showIf": {
                "field": "mode",
                "oneOf": [
                    "cpm",
                    "cost"
                ]
            }
        },
        {
            "name": "cpm",
            "label": "CPM",
            "type": "number",
            "defaultValue": 37.5,
            "unit": "₽",
            "min": 0,
            "step": 0.5,
            "showIf": {
                "field": "mode",
                "oneOf": [
                    "cost",
                    "impressions"
                ]
            }
        }
    ],
    "resultLabels": {
        "result": "CPM",
        "budget": "Бюджет",
        "impressions": "Показы",
        "perImpression": "Стоимость показа"
    },
    "relatedCalculatorIds": [
        "ctr",
        "ad-roi",
        "roas"
    ],
    ...contractContent.ru,
  },
};
