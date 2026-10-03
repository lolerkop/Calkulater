import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { validate } from './validate';
import { leasePaymentCopyEn } from './copy.en';
import { leasePaymentCopyUk } from './copy.uk';
import { leasePaymentCopyDe } from './copy.de';
import { leasePaymentCopyEs } from './copy.es';
import { leasePaymentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "lease-payment",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: leasePaymentCopyEn, uk: leasePaymentCopyUk, de: leasePaymentCopyDe, es: leasePaymentCopyEs },
  referenceCases: leasePaymentReferenceCases,
  publishedExample: { inputs: { price: 2000000, down: 400000, residualPct: 40, months: 36, rate: 12 }, expected: ["34 222,22 ₽"] },
  presentation: {
    "id": "lease-payment",
    "name": "Калькулятор платежа по лизингу",
    "slug": "platyozh-po-lizingu",
    "fullPath": "/finance/platyozh-po-lizingu/",
    "category": "finance",
    "icon": "wallet",
    "popularity": 33,
    "isNew": false,
    "shortDescription": "Ежемесячный платёж с учётом остаточной стоимости.",
    "seoTitle": "Калькулятор платежа по лизингу — с остаточной стоимостью",
    "seoDescription": "Рассчитайте ежемесячный платёж по лизингу с авансом, остаточной стоимостью и удорожанием в год.",
    "h1": "Калькулятор платежа по лизингу",
    "keywords": [
        "платёж по лизингу",
        "остаточная стоимость",
        "лизинг автомобиля",
        "аванс по лизингу"
    ],
    "fields": [
        {
            "name": "price",
            "label": "Стоимость предмета лизинга",
            "type": "number",
            "defaultValue": 2000000,
            "min": 0,
            "step": 100000,
            "unit": "₽"
        },
        {
            "name": "down",
            "label": "Аванс",
            "type": "number",
            "defaultValue": 400000,
            "min": 0,
            "step": 50000,
            "unit": "₽",
            "optional": true
        },
        {
            "name": "residualPct",
            "label": "Остаточная доля, %",
            "type": "number",
            "defaultValue": 40,
            "min": 0,
            "max": 100,
            "step": 5
        },
        {
            "name": "months",
            "label": "Срок, месяцев",
            "type": "number",
            "defaultValue": 36,
            "min": 1,
            "step": 6
        },
        {
            "name": "rate",
            "label": "Расчётная ставка, % годовых",
            "type": "number",
            "defaultValue": 12,
            "min": 0,
            "step": 0.5
        }
    ],
    "resultLabels": {
        "payment": "Ежемесячный платёж",
        "dep": "Амортизационная часть",
        "charge": "Процентная часть",
        "residual": "Остаточная стоимость",
        "total": "Всего выплат с авансом"
    },
    "relatedCalculatorIds": [
        "annuity",
        "credit-calculator",
        "car-depreciation"
    ],
    ...contractContent.ru,
  },
};
