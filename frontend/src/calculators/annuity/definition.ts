// Аннуитетный платёж и график его разложения на проценты и тело долга.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { validate } from './validate';
import { annuityCopyEn } from './copy.en';
import { annuityCopyUk } from './copy.uk';
import { annuityCopyDe } from './copy.de';
import { annuityCopyEs } from './copy.es';
import { annuityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'annuity',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: annuityCopyEn, uk: annuityCopyUk, de: annuityCopyDe, es: annuityCopyEs },
  referenceCases: annuityReferenceCases,
  publishedExample: { inputs: { amount: 1000000, rate: 12, months: 12 }, expected: ['88 848,79 ₽'] },
  presentation: {
    "id": "annuity",
    "name": "Калькулятор аннуитета",
    "slug": "annuity",
    "fullPath": "/finance/annuity/",
    "category": "finance",
    "icon": "wallet",
    "popularity": 49,
    "isNew": false,
    "shortDescription": "Равный платёж и помесячный график: сколько уходит в проценты, сколько в долг.",
    "seoTitle": "Калькулятор аннуитета — платёж и график погашения",
    "seoDescription": "Рассчитайте аннуитетный платёж и получите помесячный график: проценты, основной долг и остаток по каждому месяцу.",
    "h1": "Калькулятор аннуитета",
    "keywords": [
        "аннуитетный платёж",
        "калькулятор аннуитета",
        "график погашения",
        "формула аннуитета"
    ],
    "fields": [
        {
            "name": "amount",
            "label": "Сумма долга",
            "type": "number",
            "defaultValue": 1000000,
            "min": 1,
            "step": 1000,
            "unit": "₽"
        },
        {
            "name": "rate",
            "label": "Ставка",
            "type": "number",
            "defaultValue": 12,
            "min": 0,
            "step": 0.1,
            "unit": "% годовых"
        },
        {
            "name": "months",
            "label": "Срок, мес.",
            "type": "number",
            "defaultValue": 12,
            "min": 1,
            "max": 480,
            "step": 1
        }
    ],
    "resultLabels": {
        "payment": "Ежемесячный платёж",
        "paid": "Всего выплат",
        "overpay": "Переплата",
        "firstInterest": "Первый месяц: проценты",
        "firstPrincipal": "Первый месяц: тело",
        "last": "Последний платёж"
    },
    "relatedCalculatorIds": [
        "installment",
        "credit-calculator",
        "mortgage-calculator"
    ],
    ...contractContent.ru,
  },
};
