import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { vacationAccrualCopyEn } from './copy.en';
import { vacationAccrualCopyUk } from './copy.uk';
import { vacationAccrualCopyDe } from './copy.de';
import { vacationAccrualCopyEs } from './copy.es';
import { vacationAccrualReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'vacation-accrual',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: vacationAccrualCopyEn, uk: vacationAccrualCopyUk, de: vacationAccrualCopyDe, es: vacationAccrualCopyEs },
  referenceCases: vacationAccrualReferenceCases,
  publishedExample: {
    inputs: { daysPerYear: 28, monthsWorked: 7, daysUsed: 5 },
    expected: ['11,333 дн.'],
  },
  presentation: {
    id: 'vacation-accrual',
    name: 'Калькулятор накопления отпуска',
    slug: 'vacation-accrual',
    fullPath: '/finance/vacation-accrual/',
    category: 'finance',
    icon: 'calendar',
    popularity: 22,
    isNew: false,
    shortDescription: 'Остаток отпуска по годовой норме, отработанным месяцам и использованному.',
    seoTitle: 'Калькулятор накопления дней отпуска',
    seoDescription:
      'Рассчитайте остаток отпуска по годовой норме дней, числу отработанных месяцев и уже использованным дням.',
    h1: 'Калькулятор накопления отпуска',
    keywords: ['накопление отпуска', 'остаток отпуска', 'дни отпуска', 'отпуск за месяц'],
    fields: [
      {
        "name": "daysPerYear",
        "label": "Годовая норма отпуска, дней",
        "type": "number",
        "defaultValue": 28,
        "min": 0,
        "step": 1
      },
      {
        "name": "monthsWorked",
        "label": "Отработано месяцев",
        "type": "number",
        "defaultValue": 7,
        "min": 0,
        "max": 12,
        "step": 0.5
      },
      {
        "name": "daysUsed",
        "label": "Уже использовано дней",
        "type": "number",
        "defaultValue": 5,
        "min": 0,
        "step": 0.5
      }
    ],
    resultLabels: {
      balance: 'Остаток отпуска',
      accrued: 'Накоплено',
      perMonth: 'За месяц',
      used: 'Использовано',
    },
    ...contractContent.ru,
    relatedCalculatorIds: ['work-hours', 'salary-convert', 'workday-cost'],
  },
};
