import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validate } from './validate';
import { contractContent } from './contractContent';
import { arpuArppuCopyEn } from './copy.en';
import { arpuArppuCopyUk } from './copy.uk';
import { arpuArppuCopyDe } from './copy.de';
import { arpuArppuCopyEs } from './copy.es';
import { arpuArppuReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "arpu-arppu",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: arpuArppuCopyEn, uk: arpuArppuCopyUk, de: arpuArppuCopyDe, es: arpuArppuCopyEs },
  referenceCases: arpuArppuReferenceCases,
  publishedExample: { inputs: { revenue: 500000, users: 12500, payingUsers: 900 }, expected: ["40,00 ₽"] },
  presentation: {
    "id": "arpu-arppu",
    "name": "Калькулятор ARPU и ARPPU",
    "slug": "arpu-arppu",
    "fullPath": "/business/arpu-arppu/",
    "category": "business",
    "icon": "wallet",
    "popularity": 21,
    "isNew": false,
    "shortDescription": "Средняя выручка на пользователя и на платящего, а также доля платящих.",
    "seoTitle": "Калькулятор ARPU и ARPPU: выручка на пользователя",
    "seoDescription": "Рассчитайте ARPU и ARPPU по выручке, числу пользователей и числу платящих, а также долю платящей аудитории.",
    "h1": "Калькулятор ARPU и ARPPU",
    "keywords": [
        "ARPU",
        "ARPPU",
        "выручка на пользователя",
        "доля платящих"
    ],
    "fields": [
        {
            "name": "revenue",
            "label": "Выручка за общий период",
            "type": "number",
            "defaultValue": 500000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "users",
            "label": "Всего пользователей",
            "type": "number",
            "defaultValue": 12500,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        },
        {
            "name": "payingUsers",
            "label": "Из них платящих",
            "type": "number",
            "defaultValue": 900,
            "min": 0,
            "step": 1,
            "max": 9007199254740991
        }
    ],
    "resultLabels": {
        "arpu": "ARPU",
        "arppu": "ARPPU",
        "share": "Доля платящих",
        "revenue": "Выручка",
        "users": "Пользователей",
        "paying": "Платящих"
    },
    "relatedCalculatorIds": [
        "aov",
        "ltv",
        "mrr-arr"
    ],
    ...contractContent.ru,
  },
};
