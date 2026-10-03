import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contractContent } from './contractContent';
import { adBudgetFunnelCopyEn } from './copy.en';
import { adBudgetFunnelCopyUk } from './copy.uk';
import { adBudgetFunnelCopyDe } from './copy.de';
import { adBudgetFunnelCopyEs } from './copy.es';
import { adBudgetFunnelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ad-budget-funnel',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: adBudgetFunnelCopyEn, uk: adBudgetFunnelCopyUk, de: adBudgetFunnelCopyDe, es: adBudgetFunnelCopyEs },
  referenceCases: adBudgetFunnelReferenceCases,
  publishedExample: {
    inputs: { budget: 150000, cpc: 24, crPct: 2.4, aov: 4900 },
    expected: ['735 000,00 ₽'],
  },
  presentation: {
    "id": "ad-budget-funnel",
    "name": "Калькулятор рекламного бюджета",
    "slug": "ad-budget-funnel",
    "fullPath": "/business/ad-budget-funnel/",
    "category": "business",
    "icon": "target",
    "popularity": 23,
    "isNew": false,
    "shortDescription": "Клики, заказы, выручка и ROAS по бюджету и конверсии.",
    "seoTitle": "Калькулятор рекламного бюджета: клики, заказы, ROAS",
    "seoDescription": "Разверните рекламный бюджет в клики, заказы и выручку по цене клика, конверсии и среднему чеку с расчётом ROAS и цены заказа.",
    "h1": "Калькулятор рекламного бюджета",
    "keywords": [
        "рекламный бюджет",
        "roas",
        "цена заказа",
        "воронка рекламы"
    ],
    "fields": [
        {
            "name": "budget",
            "label": "Рекламный бюджет",
            "type": "number",
            "defaultValue": 150000,
            "min": 0,
            "step": 10000,
            "unit": "₽"
        },
        {
            "name": "cpc",
            "label": "Цена клика",
            "type": "number",
            "defaultValue": 24,
            "min": 0,
            "step": 1,
            "unit": "₽"
        },
        {
            "name": "crPct",
            "label": "Конверсия",
            "type": "number",
            "defaultValue": 2.4,
            "min": 0,
            "max": 100,
            "step": 0.1,
            "unit": "%"
        },
        {
            "name": "aov",
            "label": "Средний чек",
            "type": "number",
            "defaultValue": 4900,
            "min": 0,
            "step": 100,
            "unit": "₽"
        }
    ],
    "resultLabels": {
        "revenue": "Ожидаемая выручка",
        "clicks": "Кликов",
        "orders": "Заказов",
        "roas": "ROAS",
        "cpo": "Цена заказа"
    },
    "relatedCalculatorIds": [
        "roas",
        "cpc",
        "conversion-rate"
    ] ,
    ...contractContent.ru,
  },
};
