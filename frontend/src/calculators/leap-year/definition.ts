import { validate } from './validate';
import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
// Високосный год. Календарное правило без разбора дат: оно зависит только от
// номера года.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { leapYearCopyEn } from './copy.en';
import { leapYearCopyUk } from './copy.uk';
import { leapYearCopyDe } from './copy.de';
import { leapYearCopyEs } from './copy.es';
import { leapYearReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'leap-year',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: leapYearCopyEn, uk: leapYearCopyUk, de: leapYearCopyDe, es: leapYearCopyEs },
  referenceCases: leapYearReferenceCases,
  publishedExample: { inputs: { year: 2024 }, expected: ['Да', '366'] },
  presentation: {
    id: 'leap-year',
    name: 'Калькулятор високосного года',
    slug: 'leap-year',
    fullPath: '/date-time/leap-year/',
    category: 'date-time',
    icon: 'calendar',
    popularity: 45,
    isNew: false,
    shortDescription: 'Високосный ли год и какие високосные рядом.',
    seoTitle: 'Калькулятор високосного года — високосный ли этот год',
    seoDescription:
      'Проверьте, високосный ли год, посмотрите длину февраля и ближайшие високосные годы.',
    h1: 'Калькулятор високосного года',
    keywords: ['високосный год', 'високосный ли год', '29 февраля'],
    fields: [
      { name: 'year', label: 'Год', type: 'number', defaultValue: 2024, min: 1, max: 9999, step: 1 },
    ],
    resultLabels: { leap: 'Високосный год', days: 'Дней в году' },
    relatedCalculatorIds: ['week-number', 'age-calculator', 'time-duration'],
  
    ...dateTimeWave15ContractContent.ru['leap-year'],
  },
};
