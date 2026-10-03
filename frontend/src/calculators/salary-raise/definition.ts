import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { salaryRaiseCopyEn } from './copy.en';
import { salaryRaiseCopyUk } from './copy.uk';
import { salaryRaiseCopyDe } from './copy.de';
import { salaryRaiseCopyEs } from './copy.es';
import { salaryRaiseReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'salary-raise',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: salaryRaiseCopyEn, uk: salaryRaiseCopyUk, de: salaryRaiseCopyDe, es: salaryRaiseCopyEs },
  referenceCases: salaryRaiseReferenceCases,
  publishedExample: {
    inputs: { mode: 'fromNew', oldSalary: 120000, newSalary: 148000 },
    expected: ['23,33%'],
  },
  presentation: {
    id: 'salary-raise',
    name: 'Калькулятор повышения зарплаты',
    slug: 'salary-raise',
    fullPath: '/finance/salary-raise/',
    category: 'finance',
    icon: 'trending-up',
    popularity: 23,
    isNew: false,
    shortDescription: 'Процент повышения по новой сумме или новая сумма по проценту.',
    seoTitle: 'Калькулятор повышения зарплаты в процентах',
    seoDescription:
      'Рассчитайте процент повышения зарплаты по прежней и новой сумме или новую сумму по заданному проценту, с разницей в деньгах.',
    h1: 'Калькулятор повышения зарплаты',
    keywords: ['повышение зарплаты', 'процент повышения', 'новая зарплата', 'разница в зарплате'],
    fields: [
      {
        "name": "mode",
        "label": "Что известно",
        "type": "select",
        "defaultValue": "fromNew",
        "options": [
          {
            "value": "fromNew",
            "label": "новая зарплата"
          },
          {
            "value": "fromPct",
            "label": "процент повышения"
          }
        ]
      },
      {
        "name": "oldSalary",
        "label": "Прежняя зарплата",
        "type": "number",
        "defaultValue": 120000,
        "min": 0,
        "step": 5000,
        "unit": "₽"
      },
      {
        "name": "newSalary",
        "label": "Новая зарплата",
        "type": "number",
        "defaultValue": 148000,
        "min": 0,
        "step": 5000,
        "showIf": {
          "field": "mode",
          "equals": "fromNew"
        },
        "unit": "₽"
      },
      {
        "name": "raisePct",
        "label": "Повышение, %",
        "type": "number",
        "defaultValue": 15,
        "signed": true,
        "step": 1,
        "showIf": {
          "field": "mode",
          "equals": "fromPct"
        }
      }
    ],
    resultLabels: {
      change: 'Изменение',
      newSalary: 'Новая зарплата',
      delta: 'Разница',
      before: 'Было',
      after: 'Стало',
      multiple: 'Множитель',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['salary-convert', 'percent-calculator', 'inflation'],
  },
};
