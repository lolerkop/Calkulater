import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { cogsCopyEn } from './copy.en';
import { cogsCopyUk } from './copy.uk';
import { cogsCopyDe } from './copy.de';
import { cogsCopyEs } from './copy.es';
import { cogsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'cogs',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: cogsCopyEn, uk: cogsCopyUk, de: cogsCopyDe, es: cogsCopyEs },
  referenceCases: cogsReferenceCases,
  publishedExample: {
    inputs: { beginInventory: 320000, purchases: 780000, endInventory: 415000 },
    expected: ['685 000,00 ₽'],
  },
  presentation: {
    "id": "cogs",
    "name": "Калькулятор COGS",
    "slug": "cogs",
    "fullPath": "/business/cogs/",
    "category": "business",
    "icon": "package",
    "popularity": 24,
    "isNew": false,
    "shortDescription": "Себестоимость проданных товаров по запасу на начало, закупкам и остатку.",
    "seoTitle": "Калькулятор COGS: себестоимость проданных товаров",
    "seoDescription": "Рассчитайте себестоимость проданных товаров по запасу на начало периода, закупкам и остатку на конец, а также объём доступного к продаже.",
    "h1": "Калькулятор COGS",
    "keywords": [
        "cogs",
        "себестоимость проданных товаров",
        "движение запасов",
        "расчёт себестоимости"
    ],
    "fields": [
        {
            "name": "beginInventory",
            "label": "Запас на начало периода",
            "type": "number",
            "defaultValue": 320000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "purchases",
            "label": "Закупки за период",
            "type": "number",
            "defaultValue": 780000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "endInventory",
            "label": "Запас на конец периода",
            "type": "number",
            "defaultValue": 415000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "cogs": "Себестоимость проданных товаров",
        "available": "Доступно к продаже",
        "begin": "Запас на начало",
        "purchases": "Закупки",
        "end": "Запас на конец"
    },
    "relatedCalculatorIds": [
        "inventory-turnover",
        "margin-calculator",
        "stock-duration"
    ] ,
    ...contractContent.ru,
  },
};
