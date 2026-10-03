// CTR: кликабельность объявления. Знаменатель — показы.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { ctrCopyEn } from './copy.en';
import { ctrCopyUk } from './copy.uk';
import { ctrCopyDe } from './copy.de';
import { ctrCopyEs } from './copy.es';
import { ctrReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ctr',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: ctrCopyEn, uk: ctrCopyUk, de: ctrCopyDe, es: ctrCopyEs },
  referenceCases: ctrReferenceCases,
  publishedExample: { inputs: { clicks: 1250, impressions: 84000 }, expected: ['1,49%'] },
  presentation: {
    "id": "ctr",
    "name": "Калькулятор CTR",
    "slug": "ctr",
    "fullPath": "/business/ctr/",
    "category": "business",
    "icon": "trending-up",
    "popularity": 38,
    "isNew": false,
    "shortDescription": "Кликабельность по кликам и показам плюс цена клика.",
    "seoTitle": "Калькулятор CTR — кликабельность и цена клика",
    "seoDescription": "Рассчитайте CTR объявления по кликам и показам, а также цену клика и цену тысячи показов кампании.",
    "h1": "Калькулятор CTR",
    "keywords": [
        "ctr калькулятор",
        "кликабельность",
        "цена клика"
    ],
    "fields": [
        {
            "name": "clicks",
            "label": "Клики",
            "type": "number",
            "defaultValue": 1250,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "impressions",
            "label": "Показы",
            "type": "number",
            "defaultValue": 84000,
            "min": 1,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "cost",
            "label": "Расход кампании",
            "type": "number",
            "defaultValue": 0,
            "unit": "₽",
            "min": 0,
            "step": 100,
            "optional": true
        }
    ],
    "resultLabels": {
        "result": "CTR",
        "ratio": "Кликов на показы",
        "perClick": "Показов на один клик",
        "cpc": "Цена клика"
    },
    "relatedCalculatorIds": [
        "ad-roi",
        "cac",
        "aov"
    ],
    ...contractContent.ru,
  },
};
