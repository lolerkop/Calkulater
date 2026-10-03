import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { salaryConvertCopyEn } from './copy.en';
import { salaryConvertCopyUk } from './copy.uk';
import { salaryConvertCopyDe } from './copy.de';
import { salaryConvertCopyEs } from './copy.es';
import { salaryConvertReferenceCases } from './referenceCases';

const PERIODS = [
  { value: 'hour', label: 'в час' },
  { value: 'day', label: 'в день' },
  { value: 'week', label: 'в неделю' },
  { value: 'month', label: 'в месяц' },
  { value: 'year', label: 'в год' },
];

export const definition: CalculatorDefinitionV2 = {
  id: 'salary-convert',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: salaryConvertCopyEn, uk: salaryConvertCopyUk, de: salaryConvertCopyDe, es: salaryConvertCopyEs },
  referenceCases: salaryConvertReferenceCases,
  publishedExample: {
    inputs: { amount: 180000, fromPeriod: 'month', toPeriod: 'year' },
    expected: ['2 160 000,00 ₽'],
  },
  presentation: {
    id: 'salary-convert',
    name: 'Конвертер зарплаты по периодам',
    slug: 'salary-period-convert',
    fullPath: '/finance/salary-period-convert/',
    category: 'finance',
    icon: 'clock',
    popularity: 23,
    isNew: false,
    shortDescription: 'Перевод зарплаты между часом, днём, месяцем и годом.',
    seoTitle: 'Конвертер зарплаты: час, день, месяц, год',
    seoDescription:
      'Переведите зарплату между часом, днём, неделей, месяцем и годом по рабочей норме 168 часов в месяц с показом всех периодов сразу.',
    h1: 'Конвертер зарплаты по периодам',
    keywords: ['конвертер зарплаты', 'зарплата в час', 'годовая зарплата', 'ставка за день'],
    fields: [
      {
        "name": "amount",
        "label": "Сумма",
        "type": "number",
        "defaultValue": 180000,
        "min": 0,
        "step": 1000,
        "unit": "₽"
      },
      {
        "name": "fromPeriod",
        "label": "Период суммы",
        "type": "select",
        "defaultValue": "month",
        "options": [
          {
            "value": "hour",
            "label": "в час"
          },
          {
            "value": "day",
            "label": "в день"
          },
          {
            "value": "week",
            "label": "в неделю"
          },
          {
            "value": "month",
            "label": "в месяц"
          },
          {
            "value": "year",
            "label": "в год"
          }
        ]
      },
      {
        "name": "toPeriod",
        "label": "Перевести в",
        "type": "select",
        "defaultValue": "year",
        "options": [
          {
            "value": "hour",
            "label": "в час"
          },
          {
            "value": "day",
            "label": "в день"
          },
          {
            "value": "week",
            "label": "в неделю"
          },
          {
            "value": "month",
            "label": "в месяц"
          },
          {
            "value": "year",
            "label": "в год"
          }
        ]
      }
    ],
    resultLabels: {
      converted: 'Зарплата за выбранный период',
      hour: 'В час',
      day: 'В день',
      month: 'В месяц',
      year: 'В год',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['overtime', 'freelance-rate', 'workday-cost'],
  },
};
