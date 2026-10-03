import { contractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { creditCardPayoffCopyEn } from './copy.en';
import { creditCardPayoffCopyUk } from './copy.uk';
import { creditCardPayoffCopyDe } from './copy.de';
import { creditCardPayoffCopyEs } from './copy.es';
import { creditCardPayoffReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "credit-card-payoff",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: { ...creditCardPayoffCopyEn, ...contractContent.en }, uk: { ...creditCardPayoffCopyUk, ...contractContent.uk }, de: { ...creditCardPayoffCopyDe, ...contractContent.de }, es: { ...creditCardPayoffCopyEs, ...contractContent.es } },
  referenceCases: creditCardPayoffReferenceCases,
  publishedExample: { inputs: { balance: 100000, apr: 24, payment: 5000 }, expected: ["26 мес"] },
  presentation: {
    id: "credit-card-payoff",
    name: "Калькулятор погашения кредитной карты",
    slug: "pogashenie-kreditnoy-karty",
    fullPath: "/finance/pogashenie-kreditnoy-karty/",
    category: "finance",
    icon: "wallet",
    popularity: 43,
    isNew: false,
    shortDescription: "За сколько месяцев закроется долг по карте при фиксированном платеже.",
    seoTitle: "Калькулятор погашения кредитной карты — срок и переплата",
    seoDescription: "Рассчитайте, за сколько месяцев закроется долг по кредитной карте при фиксированном платеже, и сколько составит переплата процентами.",
    h1: "Калькулятор погашения кредитной карты",
    keywords: ["погашение кредитной карты", "за сколько закрыть долг по карте", "переплата по кредитной карте", "минимальный платёж по карте"],
    fields: [
      { name: 'balance', label: 'Долг по карте', unit: '₽', type: 'number', defaultValue: 100000, min: 0, step: 1000 },
      { name: 'apr', label: 'Годовая ставка, %', type: 'number', defaultValue: 24, min: 0, step: 0.1 },
      { name: 'payment', label: 'Ежемесячный платёж', unit: '₽', type: 'number', defaultValue: 5000, min: 0, step: 500 },
    ],
    resultLabels: {
      "months": "Срок погашения",
      "interest": "Переплата процентами",
      "total": "Выплачено всего",
      "share": "Доля переплаты",
      "firstInterest": "Первый месяц: проценты",
      "firstPrincipal": "Первый месяц: тело долга",
      "schedule": "График погашения",
      "month": "Месяц",
      "payment": "Платёж",
      "interestColumn": "Проценты",
      "principal": "Основной долг",
      "balance": "Остаток",
    },
    ...contractContent.ru,
    relatedCalculatorIds: ["early-repayment", "annuity", "installment"],
  },
};
