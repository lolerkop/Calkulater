import { contractContent } from './contractContent';
// Номер недели — проверка дискретной области и вывода нескольких целых
// величин одним расчётом. Границы года делают его нетривиальным.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { validateDate } from './validateDate';
import { weekNumberCopyEn } from './copy.en';
import { weekNumberCopyUk } from './copy.uk';
import { weekNumberCopyDe } from './copy.de';
import { weekNumberCopyEs } from './copy.es';
import { weekNumberReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'week-number',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validateDate,
  copy: { en: weekNumberCopyEn, uk: weekNumberCopyUk, de: weekNumberCopyDe, es: weekNumberCopyEs },
  referenceCases: weekNumberReferenceCases,
  publishedExample: { inputs: { date: '2026-08-18' }, expected: ['34', '230'] },
  presentation: {
    id: 'week-number',
    name: 'Калькулятор номера недели',
    slug: 'week-number',
    fullPath: '/date-time/week-number/',
    category: 'date-time',
    icon: 'calendar-check',
    popularity: 48,
    isNew: false,
    shortDescription: 'Номер недели по ISO и день года для существующей григорианской даты.',
    seoTitle: 'Калькулятор номера недели — ISO-неделя и день года',
    seoDescription:
      'Узнайте номер недели по ISO 8601, день года и количество оставшихся дней для существующей григорианской даты.',
    h1: 'Калькулятор номера недели',
    keywords: ['номер недели', 'iso неделя', 'день года'],
    fields: [{ name: 'date', label: 'Дата', type: 'date', defaultValue: '2026-08-18' }],
    resultLabels: { week: 'Номер недели', dayOfYear: 'День года' },
    relatedCalculatorIds: ['date-shift-calculator', 'working-days-calculator', 'age-calculator'],
    ...contractContent.ru,
  },
};
