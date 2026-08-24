// Выручка на сотрудника. Целочисленный делитель.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { revenuePerEmployeeCopyEn } from './copy.en';
import { revenuePerEmployeeCopyUk } from './copy.uk';
import { revenuePerEmployeeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'revenue-per-employee',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: revenuePerEmployeeCopyEn, uk: revenuePerEmployeeCopyUk },
  referenceCases: revenuePerEmployeeReferenceCases,
  publishedExample: { inputs: { revenue: 12000000, employees: 40 }, expected: ['300 000 ₽'] },
  presentation: {
    id: 'revenue-per-employee',
    name: 'Калькулятор выручки на сотрудника',
    slug: 'revenue-per-employee',
    fullPath: '/business/revenue-per-employee/',
    category: 'business',
    icon: 'trending-up',
    popularity: 39,
    isNew: false,
    shortDescription: 'Сколько выручки приходится на одного человека в штате.',
    longDescription:
      'Выручка на сотрудника делит годовую выручку на численность. Это самая грубая мера производительности труда и самая простая для сравнения по годам, потому что она не зависит от уровня зарплат и от того, как распределены затраты.',
    seoTitle: 'Калькулятор выручки на сотрудника — производительность труда',
    seoDescription:
      'Расчёт выручки на сотрудника по годовой выручке и численности, вместе с месячным показателем на человека.',
    h1: 'Калькулятор выручки на сотрудника',
    keywords: ['выручка на сотрудника', 'производительность труда', 'эффективность штата'],
    fields: [
      { name: 'revenue', label: 'Годовая выручка', type: 'number', defaultValue: 12000000, min: 0 },
      { name: 'employees', label: 'Число сотрудников', type: 'number', defaultValue: 40, min: 0, step: 1 },
    ],
    resultLabels: { perEmployee: 'Выручка на сотрудника' },
    howToUse: ['Введите годовую выручку.', 'Введите численность сотрудников.', 'Прочитайте выручку на человека.'],
    howItWorks: 'Выручка на сотрудника = годовая выручка ÷ численность.',
    example: 'Выручка 12 000 000 при 40 сотрудниках даёт 300 000 на человека в год.',
    faq: [
      { q: 'Учитывать ли частичную занятость?', a: 'Приведите её к полным ставкам до ввода числа, иначе показатель молча смешает две разные единицы измерения.' },
      { q: 'Включать ли подрядчиков?', a: 'Это ваш выбор, но держите его одинаковым по годам, иначе динамика перестанет что-либо значить.' },
      { q: 'Какое значение считать хорошим?', a: 'Оно осмысленно только внутри отрасли. Разработка и розница различаются на порядок.' },
      { q: 'Зачем показан месячный показатель?', a: 'Его проще соотнести с зарплатами, о которых обычно думают помесячно.' },
    ],
    relatedCalculatorIds: ['aov', 'contribution-margin', 'cac'],
    disclaimer: FIN_DISCLAIMER,
  },
};
