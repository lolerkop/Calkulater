// Скорость чтения и время на книгу.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { readingSpeedCopyEn } from './copy.en';
import { readingSpeedCopyUk } from './copy.uk';
import { readingSpeedCopyDe } from './copy.de';
import { readingSpeedReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'reading-speed',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: readingSpeedCopyEn, uk: readingSpeedCopyUk, de: readingSpeedCopyDe },
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
    longDescription:
      'Делит прочитанные слова на затраченные минуты и даёт скорость в словах за минуту вместе с часовым показателем. Если указать объём книги, калькулятор оценит, сколько времени она займёт в таком темпе. Измеряется именно скорость: понимание прочитанного — отдельный вопрос, и здесь оно не оценивается.',
    seoTitle: 'Калькулятор скорости чтения — слов в минуту',
    seoDescription:
      'Измерьте скорость чтения в словах за минуту и оцените, сколько времени займёт книга заданного объёма.',
    h1: 'Калькулятор скорости чтения',
    keywords: ['скорость чтения', 'слов в минуту', 'калькулятор чтения'],
    fields: [
      { name: 'words', label: 'Прочитано слов', type: 'number', defaultValue: 3000, min: 1, step: 1 },
      { name: 'minutes', label: 'Время, минут', type: 'number', defaultValue: 12, min: 0, step: 0.5 },
      { name: 'bookWords', label: 'Слов в книге', type: 'number', defaultValue: 0, min: 0, step: 1000, optional: true },
    ],
    resultLabels: { result: 'Скорость чтения', perHour: 'Слов в час', book: 'Время на книгу' },
    howToUse: ['Прочитайте отрывок и посчитайте, сколько в нём слов.', 'Введите затраченное время в минутах.', 'При желании укажите объём книги для оценки.'],
    howItWorks: 'скорость = слова ÷ минуты; время на книгу — её объём, делённый на эту скорость.',
    example: '3000 слов за 12 минут дают 250 слов в минуту.',
    faq: [
      { q: 'Измеряется ли понимание прочитанного?', a: 'Нет, только темп. Более быстрое чтение с меньшим пониманием всё равно даст здесь большее число.' },
      { q: 'Какая скорость чтения считается обычной?', a: 'Большинство взрослых читают прозу со скоростью примерно от 200 до 300 слов в минуту, но показатель зависит от текста и знакомства с темой.' },
      { q: 'Почему число знаков приблизительное?', a: 'Оно исходит из средней длины слова, а она различается по языкам и текстам. Считайте это грубым переводом, а не измерением.' },
      { q: 'Обязательно ли указывать объём книги?', a: 'Нет, поле необязательное. Без него вы получите просто скорость.' },
    ],
    relatedCalculatorIds: ['test-score-percent', 'time-duration', 'percent-calculator'],
  },
};
