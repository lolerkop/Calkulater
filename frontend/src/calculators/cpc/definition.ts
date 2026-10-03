import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { cpcCopyEn } from './copy.en';
import { cpcCopyUk } from './copy.uk';
import { cpcCopyDe } from './copy.de';
import { cpcCopyEs } from './copy.es';
import { cpcReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'cpc',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: cpcCopyEn, uk: cpcCopyUk, de: cpcCopyDe, es: cpcCopyEs },
  referenceCases: cpcReferenceCases,
  publishedExample: {
    inputs: { cost: 36000, clicks: 1450, impressions: 92000 },
    expected: ['24,83 ₽'],
  },
  presentation: {
    "id": "cpc",
    "name": "Калькулятор CPC",
    "slug": "cpc",
    "fullPath": "/business/cpc/",
    "category": "business",
    "icon": "target",
    "popularity": 23,
    "isNew": false,
    "shortDescription": "Цена клика по бюджету и кликам, а также CPM и кликабельность.",
    "seoTitle": "Калькулятор CPC: цена клика, CPM и кликабельность",
    "seoDescription": "Рассчитайте цену клика по рекламному бюджету и числу кликов, а также CPM и кликабельность, если известны показы.",
    "h1": "Калькулятор CPC",
    "keywords": [
        "калькулятор cpc",
        "цена клика",
        "cpm",
        "кликабельность"
    ],
    "fields": [
        {
            "name": "cost",
            "label": "Рекламный расход",
            "type": "number",
            "defaultValue": 36000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "clicks",
            "label": "Получено кликов",
            "type": "number",
            "defaultValue": 1450,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "impressions",
            "label": "Показы, 0 если неизвестны",
            "type": "number",
            "defaultValue": 92000,
            "min": 0,
            "step": 1,
            "max": 9007199254740991,
            "optional": true
        }
    ],
    "resultLabels": {
        "cpc": "Цена клика (CPC)",
        "clicks": "Кликов",
        "cost": "Бюджет",
        "cpm": "CPM",
        "ctr": "Кликабельность"
    },
    "relatedCalculatorIds": [
        "cpm",
        "ctr",
        "cpa-cpl-cpi"
    ],
    ...contractContent.ru,
  },
};
