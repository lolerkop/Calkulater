// Выручка на сотрудника. Целочисленный делитель.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { revenuePerEmployeeCopyEn } from './copy.en';
import { revenuePerEmployeeCopyUk } from './copy.uk';
import { revenuePerEmployeeCopyDe } from './copy.de';
import { revenuePerEmployeeCopyEs } from './copy.es';
import { revenuePerEmployeeReferenceCases } from './referenceCases';

import { contractContent } from './contractContent';

export const definition: CalculatorDefinitionV2 = {
  id: 'revenue-per-employee',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: revenuePerEmployeeCopyEn, uk: revenuePerEmployeeCopyUk, de: revenuePerEmployeeCopyDe, es: revenuePerEmployeeCopyEs },
  referenceCases: revenuePerEmployeeReferenceCases,
  publishedExample: { inputs: { revenue: 12000000, employees: 20 }, expected: ['600 000 ₽', '50 000 ₽'] },
  presentation: {
    id: 'revenue-per-employee',
    name: 'Калькулятор выручки на сотрудника',
    slug: 'revenue-per-employee',
    fullPath: '/business/revenue-per-employee/',
    category: 'business',
    icon: 'trending-up',
    popularity: 39,
    isNew: false,
    shortDescription: "Годовая выручка, делённая на целое число сотрудников.",
    seoTitle: 'Калькулятор выручки на сотрудника — производительность труда',
    seoDescription:
      "Рассчитайте годовую выручку на сотрудника по годовой выручке и целой численности. Месячная строка делит этот годовой показатель на 12; дробные FTE не поддерживаются.",
    h1: 'Калькулятор выручки на сотрудника',
    keywords: ['выручка на сотрудника', 'производительность труда', 'эффективность штата'],
    fields: [
      { name: 'revenue', label: 'Годовая выручка', type: 'number', defaultValue: 12000000, min: 0 },
      { name: 'employees', label: 'Число сотрудников', type: 'number', defaultValue: 40, min: 0, step: 1 },
    ],
    resultLabels: { perEmployee: 'Выручка на сотрудника' },
    relatedCalculatorIds: ['aov', 'contribution-margin', 'cac'],
    ...contractContent.ru,
  },
};
