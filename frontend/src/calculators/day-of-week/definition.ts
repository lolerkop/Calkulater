// День недели по дате. Использует общий разбор дат без часовых поясов.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { dayOfWeekCopyEn } from './copy.en';
import { dayOfWeekCopyUk } from './copy.uk';
import { dayOfWeekReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'day-of-week',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dayOfWeekCopyEn, uk: dayOfWeekCopyUk },
  referenceCases: dayOfWeekReferenceCases,
  publishedExample: { inputs: { date: '2024-02-29' }, expected: ['четверг', '60'] },
  presentation: {
    id: 'day-of-week',
    name: 'Калькулятор дня недели',
    slug: 'day-of-week',
    fullPath: '/date-time/day-of-week/',
    category: 'date-time',
    icon: 'calendar',
    popularity: 44,
    isNew: true,
    shortDescription: 'На какой день недели приходится дата.',
    longDescription:
      'Показывает день недели для любой даты вместе с её порядковым номером в году, номером недели по ISO и признаком выходного. Даты читаются без сдвига часового пояса, поэтому ответ не зависит от того, где вы находитесь.',
    seoTitle: 'Калькулятор дня недели — день недели для любой даты',
    seoDescription:
      'Узнайте день недели для любой даты, вместе с днём года, номером недели ISO и признаком выходного.',
    h1: 'Калькулятор дня недели',
    keywords: ['день недели', 'какой был день', 'калькулятор дня недели'],
    fields: [
      { name: 'date', label: 'Дата', type: 'date', defaultValue: '2024-02-29' },
    ],
    resultLabels: { weekday: 'День недели', dayOfYear: 'День года' },
    howToUse: ['Выберите дату.', 'Прочитайте день недели.', 'При необходимости посмотрите номер недели и день года.'],
    howItWorks:
      'День недели определяется самой календарной датой; неделя по ISO — та, что содержит первый четверг года.',
    example: '29 февраля 2024 года было четвергом и 60-м днём года.',
    faq: [
      { q: 'Влияет ли часовой пояс?', a: 'Нет. Дата читается как обычная календарная, поэтому ответ везде одинаков.' },
      { q: 'Почему 1 января иногда относится к прошлому году?', a: 'По ISO 8601 первая неделя — та, что содержит первый четверг. Год, начинающийся с пятницы, субботы или воскресенья, начинается в последней неделе предыдущего.' },
      { q: 'Работает ли для прошлых веков?', a: 'Расчёт следует григорианскому календарю. Для дат до его введения в 1582 году действовал юлианский, и день недели там другой.' },
      { q: 'Учитываются ли високосные дни?', a: 'Да. 29 февраля существует только в високосные годы, и нумерация дней года сдвигается соответственно.' },
    ],
    relatedCalculatorIds: ['leap-year', 'week-number', 'age-calculator'],
  },
};
