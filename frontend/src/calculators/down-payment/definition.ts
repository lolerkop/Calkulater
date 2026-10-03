import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { downPaymentCopyEn } from './copy.en';
import { downPaymentCopyUk } from './copy.uk';
import { downPaymentCopyDe } from './copy.de';
import { downPaymentCopyEs } from './copy.es';
import { downPaymentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "down-payment",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: downPaymentCopyEn, uk: downPaymentCopyUk, de: downPaymentCopyDe, es: downPaymentCopyEs },
  referenceCases: downPaymentReferenceCases,
  publishedExample: { inputs: { mode: 'percent', price: 5000000, percent: 20 }, expected: ["1 000 000,00 ₽"] },
  presentation: {
    "id": "down-payment",
    "name": "Калькулятор первоначального взноса",
    "slug": "down-payment",
    "fullPath": "/finance/down-payment/",
    "category": "finance",
    "icon": "wallet",
    "popularity": 47,
    "isNew": false,
    "shortDescription": "Первоначальный взнос и сумма кредита по цене и доле взноса.",
    "seoTitle": "Калькулятор первоначального взноса — сумма взноса и кредита",
    "seoDescription": "Рассчитайте первоначальный взнос по цене и проценту либо процент по накопленной сумме, а также остаток, который придётся взять в кредит.",
    "h1": "Калькулятор первоначального взноса",
    "keywords": [
        "калькулятор первоначального взноса",
        "первоначальный взнос по ипотеке",
        "сумма кредита после взноса"
    ],
    "fields": [
        {
            "name": "mode",
            "label": "Что известно",
            "type": "select",
            "defaultValue": "percent",
            "options": [
                {
                    "value": "percent",
                    "label": "доля взноса в процентах"
                },
                {
                    "value": "amount",
                    "label": "Сумма взноса в цену"
                }
            ]
        },
        {
            "name": "price",
            "label": "Цена покупки",
            "type": "number",
            "defaultValue": 5000000,
            "min": 0,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "percent",
            "label": "Первоначальный взнос, %",
            "type": "number",
            "defaultValue": 20,
            "min": 0,
            "max": 100,
            "step": 1,
            "showIf": {
                "field": "mode",
                "equals": "percent"
            }
        },
        {
            "name": "downPayment",
            "label": "Взнос в цену покупки",
            "type": "number",
            "defaultValue": 1500000,
            "min": 0,
            "step": 1000,
            "showIf": {
                "field": "mode",
                "equals": "amount"
            },
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "down": "Первоначальный взнос",
        "loan": "Сумма кредита",
        "share": "Доля взноса",
        "rest": "Осталось накопить"
    },
    "relatedCalculatorIds": [
        "mortgage-calculator",
        "credit-calculator",
        "savings-rate"
    ],
    ...contractContent.ru,
  },
};
