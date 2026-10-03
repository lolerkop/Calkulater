import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { validate } from './validate';
import { refinancingCopyEn } from './copy.en';
import { refinancingCopyUk } from './copy.uk';
import { refinancingCopyDe } from './copy.de';
import { refinancingCopyEs } from './copy.es';
import { refinancingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "refinancing",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: refinancingCopyEn, uk: refinancingCopyUk, de: refinancingCopyDe, es: refinancingCopyEs },
  referenceCases: refinancingReferenceCases,
  publishedExample: { inputs: { balance: 2000000, oldRate: 14, oldMonths: 120, newRate: 10, newMonths: 120, fee: 30000 }, expected: ["524 776,76 ₽"] },
  presentation: {
    "id": "refinancing",
    "name": "Калькулятор рефинансирования кредита",
    "slug": "refinansirovanie",
    "fullPath": "/finance/refinansirovanie/",
    "category": "finance",
    "icon": "repeat",
    "popularity": 52,
    "isNew": false,
    "shortDescription": "Сравнивает действующий кредит с новым и показывает, чего на самом деле стоит переход.",
    "seoTitle": "Калькулятор рефинансирования кредита: выгоден ли переход",
    "seoDescription": "Сравните действующий кредит с предложением рефинансирования с учётом расходов на сделку и увидьте настоящую выгоду или потерю.",
    "h1": "Калькулятор рефинансирования кредита",
    "keywords": [
        "рефинансирование кредита",
        "выгодно ли рефинансирование",
        "сравнение кредитов",
        "экономия на рефинансировании"
    ],
    "fields": [
        {
            "name": "balance",
            "label": "Остаток долга",
            "type": "number",
            "defaultValue": 2000000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "oldRate",
            "label": "Текущая ставка, % годовых",
            "type": "number",
            "defaultValue": 14,
            "min": 0,
            "max": 100,
            "step": 0.1
        },
        {
            "name": "oldMonths",
            "label": "Осталось месяцев",
            "type": "number",
            "defaultValue": 120,
            "min": 0,
            "step": 1
        },
        {
            "name": "newRate",
            "label": "Новая ставка, % годовых",
            "type": "number",
            "defaultValue": 10,
            "min": 0,
            "max": 100,
            "step": 0.1
        },
        {
            "name": "newMonths",
            "label": "Новый срок, месяцев",
            "type": "number",
            "defaultValue": 120,
            "min": 0,
            "step": 1
        },
        {
            "name": "fee",
            "label": "Расходы на сделку",
            "type": "number",
            "defaultValue": 30000,
            "min": 0,
            "step": 1000,
            "unit": "₽",
            "optional": true
        }
    ],
    "resultLabels": {
        "benefit": "Выгода от рефинансирования",
        "oldPayment": "Платёж сейчас",
        "newPayment": "Платёж после",
        "oldTotal": "Итого сейчас",
        "newTotal": "Итого после",
        "paymentDelta": "Разница в платеже",
        "fee": "Расходы на сделку"
    },
    "relatedCalculatorIds": [
        "credit-calculator",
        "early-repayment",
        "annuity"
    ],
    ...contractContent.ru,
  },
};
