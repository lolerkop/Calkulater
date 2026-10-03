import { validate } from './validate';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
// Рассрочка: равные платежи по цене с наценкой, без процентов на остаток.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { installmentCopyEn } from './copy.en';
import { installmentCopyUk } from './copy.uk';
import { installmentCopyDe } from './copy.de';
import { installmentCopyEs } from './copy.es';
import { installmentReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'installment',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: installmentCopyEn, uk: installmentCopyUk, de: installmentCopyDe, es: installmentCopyEs },
  referenceCases: installmentReferenceCases,
  publishedExample: { inputs: { price: 60000, down: 10000, months: 6, markup: 12 }, expected: ['9 333,33 ₽'] },
  presentation: {
    id: 'installment',
    name: 'Калькулятор рассрочки',
    slug: 'installment',
    fullPath: '/finance/installment/',
    category: 'finance',
    icon: 'wallet',
    popularity: 46,
    isNew: false,
    shortDescription: 'Платёж по рассрочке с наценкой и график погашения по месяцам.',
    seoTitle: 'Калькулятор рассрочки — платёж и график',
    seoDescription: 'Рассчитайте ежемесячный платёж по рассрочке с первоначальным взносом и наценкой, с графиком по месяцам.',
    h1: 'Калькулятор рассрочки',
    keywords: ['калькулятор рассрочки', 'платёж по рассрочке', 'рассрочка с наценкой', 'беспроцентная рассрочка'],
    fields: [
      {
        "name": "price",
        "label": "Цена",
        "type": "number",
        "defaultValue": 60000,
        "min": 0.01,
        "step": 1000,
        "unit": "₽"
      },
      {
        "name": "down",
        "label": "Первоначальный взнос",
        "type": "number",
        "defaultValue": 10000,
        "min": 0,
        "step": 1000,
        "unit": "₽",
        "optional": true
      },
      {
        "name": "months",
        "label": "Срок, мес.",
        "type": "number",
        "defaultValue": 6,
        "min": 1,
        "max": 60,
        "step": 1
      },
      {
        "name": "markup",
        "label": "Наценка",
        "type": "number",
        "defaultValue": 12,
        "min": 0,
        "step": 0.5,
        "unit": "%"
      }
    ],
    resultLabels: {
      payment: 'Ежемесячный платёж',
      financed: 'Сумма рассрочки',
      total: 'Всего к выплате',
      overpay: 'Переплата',
      last: 'Последний платёж',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['annuity', 'credit-calculator', 'discount-calculator'],
  },
};
