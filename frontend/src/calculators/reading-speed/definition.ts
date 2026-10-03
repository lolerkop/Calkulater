import { contextualField } from './contextualField';
import { validate } from './validate';
import { contractContent } from './contractContent';
// Скорость чтения и время на книгу.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { readingSpeedCopyEn } from './copy.en';
import { readingSpeedCopyUk } from './copy.uk';
import { readingSpeedCopyDe } from './copy.de';
import { readingSpeedCopyEs } from './copy.es';
import { readingSpeedReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'reading-speed',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: readingSpeedCopyEn, uk: readingSpeedCopyUk, de: readingSpeedCopyDe, es: readingSpeedCopyEs },
  referenceCases: readingSpeedReferenceCases,
  publishedExample: { inputs: { words: 3000, minutes: 12 }, expected: ['250 слов/мин'] },
  presentation: {
  id: 'reading-speed',
  name: 'Калькулятор скорости чтения',
  slug: 'reading-speed',
  fullPath: '/education/reading-speed/',
  category: 'education',
  icon: 'graduation-cap',
  popularity: 33,
  isNew: false,
  shortDescription: 'Слова в минуту по засечённому отрывку и время на целую книгу.',
  seoTitle: 'Калькулятор скорости чтения — слов в минуту',
  seoDescription:
      'Измерьте скорость чтения в словах за минуту и оцените, сколько времени займёт книга заданного объёма.',
  h1: 'Калькулятор скорости чтения',
  keywords: ['скорость чтения', 'слов в минуту', 'калькулятор чтения'],
  fields: [
      { name: 'words', label: 'Прочитано слов', type: 'number', defaultValue: 3000, min: 1, step: 1 },
      { name: 'minutes', label: 'Время', type: 'number', unit: 'мин', defaultValue: 12, min: 0, step: 0.5 },
      { name: 'bookWords', label: 'Слов в книге', type: 'number', defaultValue: 0, min: 0, step: 1000, optional: true },
    ],
  resultLabels: { result: 'Скорость чтения', perHour: 'Слов в час', book: 'Время на книгу' },
  relatedCalculatorIds: ['test-score-percent', 'time-duration', 'percent-calculator'],
  ...contractContent.ru
},
};
