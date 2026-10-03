import { validate } from './validate';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
// Стоимость рабочего дня и часа по месячному окладу.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { workdayCostCopyEn } from './copy.en';
import { workdayCostCopyUk } from './copy.uk';
import { workdayCostCopyDe } from './copy.de';
import { workdayCostCopyEs } from './copy.es';
import { workdayCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'workday-cost',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  contextualField,
  copy: { en: workdayCostCopyEn, uk: workdayCostCopyUk, de: workdayCostCopyDe, es: workdayCostCopyEs },
  referenceCases: workdayCostReferenceCases,
  publishedExample: { inputs: { salary: 80000, days: 21, hours: 8 }, expected: ['476,19 ₽'] },
  presentation: {
    id: 'workday-cost',
    name: 'Калькулятор стоимости рабочего дня',
    slug: 'workday-cost',
    fullPath: '/finance/workday-cost/',
    category: 'finance',
    icon: 'wallet',
    popularity: 47,
    isNew: false,
    shortDescription: 'Сколько стоит один рабочий день и один рабочий час при вашем окладе.',
    seoTitle: 'Калькулятор стоимости рабочего дня и часа',
    seoDescription: 'Рассчитайте стоимость одного рабочего дня и часа по месячному окладу и числу рабочих дней.',
    h1: 'Калькулятор стоимости рабочего дня',
    keywords: ['стоимость рабочего дня', 'стоимость рабочего часа', 'оклад за день', 'сколько стоит час работы'],
    fields: [
      {
        "name": "salary",
        "label": "Месячный оклад",
        "type": "number",
        "defaultValue": 80000,
        "min": 0,
        "step": 1000,
        "unit": "₽"
      },
      {
        "name": "days",
        "label": "Рабочих дней в месяце",
        "type": "number",
        "defaultValue": 21,
        "min": 1,
        "max": 31,
        "step": 1
      },
      {
        "name": "hours",
        "label": "Часов в рабочем дне",
        "type": "number",
        "defaultValue": 8,
        "min": 0,
        "max": 24,
        "step": 0.5
      }
    ],
    resultLabels: { perDay: 'Стоимость рабочего дня', perHour: 'Стоимость часа', monthHours: 'Рабочих часов в месяце' },
    ...contractContent.ru,
    relatedCalculatorIds: ['budget-50-30-20', 'savings-rate', 'working-days-calculator'],
  },
};
