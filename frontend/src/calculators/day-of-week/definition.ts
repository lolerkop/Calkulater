// День недели по дате. Использует общий разбор дат без часовых поясов.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validateDate } from './validateDate';
import { dayOfWeekCopyEn } from './copy.en';
import { dayOfWeekCopyUk } from './copy.uk';
import { dayOfWeekCopyDe } from './copy.de';
import { dayOfWeekCopyEs } from './copy.es';
import { dayOfWeekReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'day-of-week',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validateDate,
  copy: { en: dayOfWeekCopyEn, uk: dayOfWeekCopyUk, de: dayOfWeekCopyDe, es: dayOfWeekCopyEs },
  referenceCases: dayOfWeekReferenceCases,
  publishedExample: { inputs: { date: '2024-02-29' }, expected: ['четверг', '60'] },
  presentation: {
    id: 'day-of-week',
    name: 'Калькулятор дня недели',
    slug: 'day-of-week',
    fullPath: '/date-time/day-of-week/',
    category: 'date-time',
    icon: 'calendar',
    popularity: 44,
    isNew: false,
    shortDescription: 'На какой день недели приходится дата.',
    seoTitle: 'Калькулятор дня недели — день недели для любой даты',
    seoDescription:
      "Узнайте день недели григорианской даты, день года, номер и год недели ISO. Признак выходного отмечает субботу и воскресенье без государственных праздников.",
    h1: 'Калькулятор дня недели',
    keywords: ['день недели', 'какой был день', 'калькулятор дня недели'],
    fields: [
      { name: 'date', label: 'Дата', type: 'date', defaultValue: '2024-02-29' },
    ],
    resultLabels: { weekday: 'День недели', dayOfYear: 'День года' },
    relatedCalculatorIds: ['leap-year', 'week-number', 'age-calculator'],
    ...contractContent.ru,
  },
};
