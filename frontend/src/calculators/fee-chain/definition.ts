import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { contractContent } from './contractContent';
import { feeChainCopyEn } from './copy.en';
import { feeChainCopyUk } from './copy.uk';
import { feeChainCopyDe } from './copy.de';
import { feeChainCopyEs } from './copy.es';
import { feeChainReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "fee-chain",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: feeChainCopyEn, uk: feeChainCopyUk, de: feeChainCopyDe, es: feeChainCopyEs },
  referenceCases: feeChainReferenceCases,
  publishedExample: {
    inputs: { price: 2000, commissionPct: 17, acquiringPct: 1.5, logistics: 55, storage: 0, cost: 900 },
    expected: ["1 575,00 ₽"],
  },
  presentation: {
    "id": "fee-chain",
    "name": "Калькулятор комиссии маркетплейса",
    "slug": "fee-chain",
    "fullPath": "/business/fee-chain/",
    "category": "business",
    "icon": "package",
    "popularity": 44,
    "isNew": false,
    "shortDescription": "Комиссия площадки, эквайринг, логистика и хранение — сразу вся цепочка удержаний.",
    "seoTitle": "Калькулятор комиссии маркетплейса — выплата продавцу",
    "seoDescription": "Рассчитайте выплату продавцу после комиссии площадки, эквайринга, логистики и хранения, а также прибыль с учётом себестоимости.",
    "h1": "Калькулятор комиссии маркетплейса",
    "keywords": [
        "комиссия маркетплейса",
        "выплата продавцу",
        "расчёт комиссии площадки",
        "прибыль на маркетплейсе"
    ],
    "fields": [
        {
            "name": "price",
            "label": "Цена товара",
            "type": "number",
            "defaultValue": 2000,
            "min": 0,
            "step": 1,
            "unit": "₽"
        },
        {
            "name": "commissionPct",
            "label": "Комиссия площадки",
            "type": "number",
            "defaultValue": 17,
            "min": 0,
            "max": 100,
            "step": 0.1,
            "unit": "%"
        },
        {
            "name": "acquiringPct",
            "label": "Эквайринг",
            "type": "number",
            "defaultValue": 1.5,
            "min": 0,
            "max": 100,
            "step": 0.1,
            "unit": "%"
        },
        {
            "name": "logistics",
            "label": "Логистика за отправление",
            "type": "number",
            "defaultValue": 55,
            "min": 0,
            "step": 1,
            "unit": "₽"
        },
        {
            "name": "storage",
            "label": "Хранение за отправление",
            "type": "number",
            "defaultValue": 0,
            "min": 0,
            "step": 1,
            "optional": true,
            "unit": "₽"
        },
        {
            "name": "cost",
            "label": "Себестоимость товара",
            "type": "number",
            "defaultValue": 900,
            "min": 0,
            "step": 1,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "payout": "Выплата продавцу",
        "commission": "Комиссия площадки",
        "acquiring": "Эквайринг",
        "logistics": "Логистика",
        "storage": "Хранение",
        "fees": "Удержано всего",
        "share": "Доля удержаний",
        "profit": "Прибыль",
        "margin": "Рентабельность к цене"
    },
    "relatedCalculatorIds": [
        "shipping-per-unit",
        "contribution-margin",
        "margin-calculator"
    ] ,
    ...contractContent.ru,
  },
};
