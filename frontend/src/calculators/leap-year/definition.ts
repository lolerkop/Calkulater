// Високосный год. Календарное правило без разбора дат: оно зависит только от
// номера года.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { leapYearCopyEn } from './copy.en';
import { leapYearCopyUk } from './copy.uk';
import { leapYearCopyDe } from './copy.de';
import { leapYearReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'leap-year',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: leapYearCopyEn, uk: leapYearCopyUk, de: leapYearCopyDe },
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
    longDescription:
      'Применяет григорианское правило: год, делящийся на четыре, високосный, кроме вековых, которые должны делиться ещё и на четыреста. Именно поэтому 1900 год был обычным, а 2000 — високосным.',
    seoTitle: 'Калькулятор високосного года — високосный ли этот год',
    seoDescription:
      'Проверьте, високосный ли год, посмотрите длину февраля и ближайшие високосные годы.',
    h1: 'Калькулятор високосного года',
    keywords: ['високосный год', 'високосный ли год', '29 февраля'],
    fields: [
      { name: 'year', label: 'Год', type: 'number', defaultValue: 2024, min: 1, step: 1 },
    ],
    resultLabels: { leap: 'Високосный год', days: 'Дней в году' },
    howToUse: ['Введите год.', 'Прочитайте ответ.', 'При необходимости посмотрите ближайшие високосные годы.'],
    howItWorks:
      'Год делится на 4 и при этом либо не делится на 100, либо делится на 400.',
    example: '2024 год високосный, 1900 не был, а 2000 был — потому что делится на 400.',
    faq: [
      { q: 'Зачем нужно вековое исключение?', a: 'Тропический год длится около 365,2422 суток — чуть меньше 365,25. Отбрасывание трёх високосных дней за четыре века удерживает календарь в согласии с временами года.' },
      { q: 'Был ли 1900 год високосным?', a: 'Нет. Он делится на 100, но не на 400, поэтому февраль был из 28 дней.' },
      { q: 'Как часто встречается високосный год?', a: 'Раз в четыре года, за вычетом вековых исключений — 97 високосных лет на каждые 400.' },
      { q: 'Работает ли правило для старых дат?', a: 'Григорианский календарь введён в 1582 году; для более ранних дат действовало юлианское правило, где високосным был каждый четвёртый год без исключений.' },
    ],
    relatedCalculatorIds: ['week-number', 'age-calculator', 'time-duration'],
  },
};
