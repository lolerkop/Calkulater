import { validate } from './validate';
import { dateTimeWave15ContractContent } from '../../data/dateTimeWave15ContractContent';
// Продолжительность времени — второй многорежимный калькулятор волны.
// Проверяет условные поля вместе с дискретной областью: часы и минуты целые,
// а сутки замкнуты в круг.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { timeDurationCopyEn } from './copy.en';
import { timeDurationCopyUk } from './copy.uk';
import { timeDurationCopyDe } from './copy.de';
import { timeDurationCopyEs } from './copy.es';
import { timeDurationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'time-duration',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: timeDurationCopyEn, uk: timeDurationCopyUk, de: timeDurationCopyDe, es: timeDurationCopyEs },
  referenceCases: timeDurationReferenceCases,
  publishedExample: {
    inputs: { mode: 'difference', startHour: 22, startMinute: 15, endHour: 6, endMinute: 45 },
    expected: ['8 ч 30 мин', '510'],
  },
  presentation: {
    id: 'time-duration',
    name: 'Калькулятор продолжительности времени',
    slug: 'time-duration',
    fullPath: '/date-time/time-duration/',
    category: 'date-time',
    icon: 'timer',
    popularity: 47,
    isNew: false,
    shortDescription: 'Промежуток между моментами или время со сдвигом.',
    seoTitle: 'Калькулятор продолжительности времени — часы и минуты',
    seoDescription:
      'Расчёт промежутка между двумя моментами, прибавление и вычитание часов и минут, включая переход через полночь.',
    h1: 'Калькулятор продолжительности времени',
    keywords: ['продолжительность времени', 'часы между моментами', 'прибавить время'],
    fields: [
      {
        name: 'mode', label: 'Что рассчитать', type: 'select', defaultValue: 'difference',
        options: [
          { value: 'difference', label: 'Промежуток между моментами' },
          { value: 'add', label: 'Прибавить длительность' },
          { value: 'subtract', label: 'Вычесть длительность' },
        ],
      },
      { name: 'startHour', label: 'Час начала', type: 'number', defaultValue: 9, min: 0, max: 23 },
      { name: 'startMinute', label: 'Минута начала', type: 'number', defaultValue: 0, min: 0, max: 59 },
      { name: 'endHour', label: 'Час окончания', type: 'number', defaultValue: 17, min: 0, max: 23, showIf: { field: 'mode', equals: 'difference' } },
      { name: 'endMinute', label: 'Минута окончания', type: 'number', defaultValue: 30, min: 0, max: 59, showIf: { field: 'mode', equals: 'difference' } },
      { name: 'spanHour', label: 'Часов длительности', type: 'number', defaultValue: 2, min: 0, max: 999, showIf: { field: 'mode', oneOf: ['add', 'subtract'] } },
      { name: 'spanMinute', label: 'Минут длительности', type: 'number', defaultValue: 30, min: 0, max: 59, showIf: { field: 'mode', oneOf: ['add', 'subtract'] } },
    ],
    resultLabels: { duration: 'Продолжительность', time: 'Время' },
    relatedCalculatorIds: ['working-days-calculator', 'date-shift-calculator', 'week-number'],
  
    ...dateTimeWave15ContractContent.ru['time-duration'],
  },
};
