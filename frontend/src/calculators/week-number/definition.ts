// Номер недели — проверка дискретной области и вывода нескольких целых
// величин одним расчётом. Границы года делают его нетривиальным.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { weekNumberCopyEn } from './copy.en';
import { weekNumberCopyUk } from './copy.uk';
import { weekNumberCopyDe } from './copy.de';
import { weekNumberReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'week-number',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: weekNumberCopyEn, uk: weekNumberCopyUk, de: weekNumberCopyDe },
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
    shortDescription: 'Номер недели по ISO и день года для любой даты.',
    longDescription:
      'Показывает номер недели по ISO 8601, порядковый день года и сколько дней осталось. Первая неделя — та, что содержит первый четверг года, поэтому начало января может относиться ещё к прошлому году.',
    seoTitle: 'Калькулятор номера недели — ISO-неделя и день года',
    seoDescription:
      'Узнайте номер недели по ISO 8601, день года и количество оставшихся дней для любой даты.',
    h1: 'Калькулятор номера недели',
    keywords: ['номер недели', 'iso неделя', 'день года'],
    fields: [{ name: 'date', label: 'Дата', type: 'date', defaultValue: '2026-08-18' }],
    resultLabels: { week: 'Номер недели', dayOfYear: 'День года' },
    howToUse: [
      'Выберите дату.',
      'Прочитайте номер недели и день года.',
      'Рядом с границей года проверьте, к какому году относится неделя.',
    ],
    howItWorks: 'Неделя = floor((день года − день недели + 10) / 7) с поправкой на границах года.',
    example: '18 августа 2026 года — это 230-й день и 34-я неделя.',
    faq: [
      { q: 'Почему 1 января иногда показывает 52-ю неделю?', a: 'Первая неделя по ISO — та, что содержит первый четверг. Если год начинается с пятницы, субботы или воскресенья, эти дни относятся ещё к последней неделе прошлого года.' },
      { q: 'Бывает ли в году 53 недели?', a: 'Да, когда год начинается с четверга или когда он високосный и начинается со среды.' },
      { q: 'Неделя начинается с воскресенья?', a: 'В ISO 8601 — нет, неделя идёт с понедельника по воскресенье. Системы с воскресеньем в начале используют другую нумерацию.' },
      { q: 'Влияет ли високосный год на день года?', a: 'Да. С 1 марта каждая дата сдвигается на день, а в году становится 366 дней вместо 365.' },
    ],
    relatedCalculatorIds: ['date-shift-calculator', 'working-days-calculator', 'age-calculator'],
  },
};
