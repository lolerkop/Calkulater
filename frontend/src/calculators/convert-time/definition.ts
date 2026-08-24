// Конвертер времени. Единственный в волне, где часть ходовых единиц намеренно
// не поддержана: месяц и год не имеют постоянной длительности.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { timeNames, timeUnits } from './units';
import { timeCopyEn } from './copy.en';
import { timeCopyUk } from './copy.uk';
import { timeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-time',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: timeCopyEn, uk: timeCopyUk },
  referenceCases: timeReferenceCases,
  publishedExample: { inputs: { value: 2, from: 'h', to: 'min' }, expected: ['120,0000 мин'] },
  presentation: {
    id: 'convert-time',
    name: 'Конвертер времени',
    slug: 'convert-time',
    fullPath: '/converters/convert-time/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 52,
    isNew: false,
    shortDescription: 'Перевод времени между миллисекундами, секундами, минутами, часами, сутками и неделями.',
    longDescription:
      'Переводит длительность между миллисекундами, секундами, минутами, часами, сутками и неделями. Месяцы и годы сознательно не включены: их длительность непостоянна, и один множитель дал бы правдоподобный, но неверный ответ.',
    seoTitle: 'Конвертер времени — секунды, минуты, часы, сутки, недели',
    seoDescription:
      'Перевод длительности между миллисекундами, секундами, минутами, часами, сутками и неделями.',
    h1: 'Конвертер времени',
    keywords: ['конвертер времени', 'часы в минуты', 'секунды в часы'],
    fields: [
      { name: 'value', label: 'Длительность', type: 'number', defaultValue: 2, min: 0 },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'h', options: unitOptions(timeUnits, timeNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'min', options: unitOptions(timeUnits, timeNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к секунде через точные множители.',
    example: '90 минут — это 1,5 часа, а одна неделя — ровно 604 800 секунд.',
    faq: [
      { q: 'Почему нет месяцев и лет?', a: 'В месяце от 28 до 31 суток, а год бывает високосным. Постоянный множитель молча выбрал бы за вас одно из допущений.' },
      { q: 'Как узнать срок между двумя датами?', a: 'Для этого есть калькулятор разницы дат: он работает с календарём, а не с множителем.' },
      { q: 'Сутки здесь всегда 86 400 секунд?', a: 'Да. Високосные секунды и перевод часов — календарные явления, а не свойство единицы.' },
      { q: 'Можно ли пересчитать беговой темп?', a: 'Нет: темп смешивает время и расстояние. Для него есть калькулятор темпа.' },
    ],
    relatedCalculatorIds: ['convert-speed', 'convert-angle', 'convert-energy'],
  },
};
