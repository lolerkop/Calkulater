import { validate } from './validate';
import { contract } from './contractContent';
// Чаевые и деление счёта на компанию.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tipCopyEn } from './copy.en';
import { tipCopyUk } from './copy.uk';
import { tipCopyDe } from './copy.de';
import { tipCopyEs } from './copy.es';
import { tipReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'tip',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: tipCopyEn, uk: tipCopyUk, de: tipCopyDe, es: tipCopyEs },
  referenceCases: tipReferenceCases,
  publishedExample: { inputs: { bill: 3200, tipPercent: 10, people: 1 }, expected: ['3 520,00 ₽'] },
  presentation: {
    id: 'tip',
    name: 'Калькулятор чаевых',
    slug: 'tip',
    fullPath: '/household/tip/',
    category: 'household',
    icon: 'home',
    popularity: 37,
    isNew: false,
    shortDescription: 'Чаевые, итог и деление счёта на компанию.',
    seoTitle: 'Калькулятор чаевых — чаевые, итог и сумма с человека',
    seoDescription:
      'Посчитайте чаевые, общую сумму счёта и сколько платит каждый, с округлением доли вверх.',
    h1: 'Калькулятор чаевых',
    keywords: ['калькулятор чаевых', 'разделить счёт', 'чаевые процент'],
    fields: [
  {
    "name": "bill",
    "label": "Сумма счёта",
    "type": "number",
    "defaultValue": 3200,
    "unit": "₽",
    "min": 0,
    "step": 10
  },
  {
    "name": "tipPercent",
    "label": "Чаевые",
    "type": "number",
    "defaultValue": 10,
    "min": 0,
    "max": 100,
    "step": 1,
    "unit": "%"
  },
  {
    "name": "people",
    "label": "Человек",
    "type": "number",
    "defaultValue": 1,
    "min": 1,
    "step": 1,
    "unit": "чел."
  },
  {
    "name": "roundPerPerson",
    "label": "Округлять долю вверх",
    "type": "toggle",
    "defaultValue": "no",
    "options": [
      {
        "value": "no",
        "label": "Нет"
      },
      {
        "value": "yes",
        "label": "Да"
      }
    ]
  }
],
    resultLabels: {
  "result": "Итого к оплате",
  "tip": "Чаевые",
  "bill": "Счёт без чаевых",
  "perPerson": "С человека"
},
    relatedCalculatorIds: ['electricity-usage', 'percent-calculator', 'discount-calculator'],
    ...contract.ru,
  },
};
