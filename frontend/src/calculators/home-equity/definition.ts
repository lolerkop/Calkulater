import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { homeEquityCopyEn } from './copy.en';
import { homeEquityCopyUk } from './copy.uk';
import { homeEquityCopyDe } from './copy.de';
import { homeEquityCopyEs } from './copy.es';
import { homeEquityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "home-equity",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: homeEquityCopyEn, uk: homeEquityCopyUk, de: homeEquityCopyDe, es: homeEquityCopyEs },
  referenceCases: homeEquityReferenceCases,
  publishedExample: { inputs: { value: 9000000, balance: 3200000, ltv: 80, rate: 18, years: 10 }, expected: ["4 000 000 ₽"] },
  presentation: {
    id: "home-equity",
    name: "Калькулятор кредита под залог жилья",
    slug: "kredit-pod-zalog-zhilya",
    fullPath: "/finance/kredit-pod-zalog-zhilya/",
    category: "finance",
    icon: "wallet",
    popularity: 26,
    isNew: true,
    shortDescription: "Доступная сумма под залог жилья с учётом остатка ипотеки и допустимой доли залога.",
    seoTitle: "Калькулятор кредита под залог жилья — доступная сумма и платёж",
    seoDescription: "Рассчитайте доступную сумму кредита под залог жилья по стоимости, остатку ипотеки и допустимой доле залога.",
    h1: "Калькулятор кредита под залог жилья",
    keywords: ["кредит под залог жилья", "доля залога", "собственный капитал в жилье", "вторая ипотека"],
    fields: [
      {
        "name": "value",
        "label": "Рыночная стоимость жилья",
        "type": "number",
        "defaultValue": 9000000,
        "min": 0,
        "step": 100000,
        "unit": "₽"
      },
      {
        "name": "balance",
        "label": "Остаток по ипотеке",
        "type": "number",
        "defaultValue": 3200000,
        "min": 0,
        "step": 100000,
        "unit": "₽"
      },
      {
        "name": "ltv",
        "label": "Допустимая доля залога, %",
        "type": "number",
        "defaultValue": 80,
        "min": 0,
        "max": 100,
        "step": 1
      },
      {
        "name": "rate",
        "label": "Номинальная ставка, % годовых",
        "type": "number",
        "defaultValue": 18,
        "min": 0,
        "step": 0.5
      },
      {
        "name": "years",
        "label": "Срок, лет",
        "type": "number",
        "defaultValue": 10,
        "min": 0.08333333333333333,
        "step": 0.08333333333333333
      }
    ],
    resultLabels: {
      "available": "Доступная сумма", "own": "Собственный капитал в жилье",
      "limit": "Предел по доле залога", "share": "Доля собственного капитала",
      "payment": "Платёж по такому кредиту",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["max-loan", "refinancing", "down-payment"],
  },
};
