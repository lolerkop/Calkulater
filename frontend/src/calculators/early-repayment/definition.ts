import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { earlyRepaymentCopyEn } from './copy.en';
import { earlyRepaymentCopyUk } from './copy.uk';
import { earlyRepaymentCopyDe } from './copy.de';
import { earlyRepaymentCopyEs } from './copy.es';
import { earlyRepaymentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'early-repayment',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: earlyRepaymentCopyEn, uk: earlyRepaymentCopyUk, de: earlyRepaymentCopyDe, es: earlyRepaymentCopyEs },
  referenceCases: earlyRepaymentReferenceCases,
  publishedExample: {
    inputs: { amount: 3000000, rate: 18, years: 20, extra: 10000 },
    expected: ['5 039 148,29 ₽'],
  },
  presentation: {
    "id": "early-repayment",
    "name": "Калькулятор досрочного погашения",
    "slug": "early-repayment",
    "fullPath": "/finance/early-repayment/",
    "category": "finance",
    "icon": "credit-card",
    "popularity": 24,
    "isNew": false,
    "shortDescription": "Экономия на процентах и сокращение срока от ежемесячной доплаты.",
    "seoTitle": "Калькулятор досрочного погашения кредита",
    "seoDescription": "Рассчитайте экономию на процентах и сокращение срока кредита от регулярной доплаты сверх ежемесячного платежа по графику.",
    "h1": "Калькулятор досрочного погашения",
    "keywords": [
        "досрочное погашение",
        "экономия на процентах",
        "доплата по кредиту",
        "сокращение срока"
    ],
    "fields": [
        {
            "name": "amount",
            "label": "Сумма кредита",
            "type": "number",
            "defaultValue": 3000000,
            "min": 0,
            "step": 100000,
            "unit": "₽"
        },
        {
            "name": "rate",
            "label": "Годовая ставка, %",
            "type": "number",
            "defaultValue": 18,
            "min": 0,
            "max": 200,
            "step": 0.5
        },
        {
            "name": "years",
            "label": "Срок, лет",
            "type": "number",
            "defaultValue": 20,
            "min": 0,
            "max": 50,
            "step": 1
        },
        {
            "name": "extra",
            "label": "Доплата в месяц",
            "type": "number",
            "defaultValue": 10000,
            "min": 0,
            "step": 1000,
            "unit": "₽",
            "optional": true
        }
    ],
    "resultLabels": {
        "saved": "Экономия на процентах",
        "payment": "Платёж по графику",
        "months": "Платежей вместо графика",
        "scheduled": "Платежей по графику",
        "paid": "Всего выплат"
    },
    "relatedCalculatorIds": [
        "credit-calculator",
        "mortgage-calculator",
        "annuity"
    ],
    ...contractContent.ru,
  },
};
