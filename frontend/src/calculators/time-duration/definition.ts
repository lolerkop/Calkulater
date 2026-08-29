// Продолжительность времени — второй многорежимный калькулятор волны.
// Проверяет условные поля вместе с дискретной областью: часы и минуты целые,
// а сутки замкнуты в круг.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { timeDurationCopyEn } from './copy.en';
import { timeDurationCopyUk } from './copy.uk';
import { timeDurationCopyDe } from './copy.de';
import { timeDurationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'time-duration',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: timeDurationCopyEn, uk: timeDurationCopyUk, de: timeDurationCopyDe },
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
    longDescription:
      'Считает, сколько времени проходит между двумя моментами, и во сколько получится время после прибавления или вычитания длительности. Переход через полночь обрабатывается как обычный случай, а не как ошибка.',
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
      { name: 'spanHour', label: 'Часов длительности', type: 'number', defaultValue: 2, min: 0, max: 999, showIf: { field: 'mode', equals: 'add' } },
      { name: 'spanMinute', label: 'Минут длительности', type: 'number', defaultValue: 30, min: 0, max: 59, showIf: { field: 'mode', equals: 'add' } },
    ],
    resultLabels: { duration: 'Продолжительность', time: 'Время' },
    howToUse: [
      'Выберите, что нужно рассчитать.',
      'Введите время в часах и минутах.',
      'Прочитайте промежуток или получившееся время.',
    ],
    howItWorks: 'Всё переводится в минуты от полуночи, а результат замыкается в сутки.',
    example: 'С 22:15 до 06:45 проходит 8 часов 30 минут.',
    faq: [
      { q: 'Что если окончание раньше начала?', a: 'Это считается переходом через полночь — именно так работает ночная смена. Результат отмечается отдельной строкой.' },
      { q: 'Может ли длительность превышать сутки?', a: 'Прибавляемая или вычитаемая длительность может быть больше 24 часов; получившееся время замыкается по кругу.' },
      { q: 'Поддерживаются ли секунды?', a: 'Нет, расчёт идёт в целых минутах — этого достаточно для смен и расписаний.' },
      { q: 'Что происходит со значениями вне диапазона?', a: 'Часы приводятся к 0–23, минуты к 0–59, поэтому опечатка даёт осмысленное время, а не сломанный результат.' },
    ],
    relatedCalculatorIds: ['working-days-calculator', 'date-shift-calculator', 'week-number'],
  },
};
