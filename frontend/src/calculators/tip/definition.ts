// Чаевые и деление счёта на компанию.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tipCopyEn } from './copy.en';
import { tipCopyUk } from './copy.uk';
import { tipReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'tip',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: tipCopyEn, uk: tipCopyUk },
  referenceCases: tipReferenceCases,
  publishedExample: { inputs: { bill: 3200, tipPercent: 10, people: 1 }, expected: ['3 520,00 ₽'] },
  presentation: {
    id: 'tip',
    name: 'Калькулятор чаевых',
    slug: 'tip',
    fullPath: '/household/tip/',
    category: 'household',
    icon: 'home',
    popularity: 37,
    isNew: false,
    shortDescription: 'Чаевые, итог и деление счёта на компанию.',
    longDescription:
      'Прибавляет к счёту чаевые выбранного процента и делит итог на количество человек. Округление доли вверх пересчитывает и общую сумму: если каждый кладёт целое, на столе оказывается больше, чем счёт с чаевыми, и показывать прежнюю сумму было бы неправдой. Процент задаёте вы — нормы различаются от страны к стране.',
    seoTitle: 'Калькулятор чаевых — чаевые, итог и сумма с человека',
    seoDescription:
      'Посчитайте чаевые, общую сумму счёта и сколько платит каждый, с округлением доли вверх.',
    h1: 'Калькулятор чаевых',
    keywords: ['калькулятор чаевых', 'разделить счёт', 'чаевые процент'],
    fields: [
      { name: 'bill', label: 'Сумма счёта', type: 'number', defaultValue: 3200, unit: '₽', min: 0, step: 10 },
      { name: 'tipPercent', label: 'Чаевые, %', type: 'number', defaultValue: 10, min: 0, max: 100, step: 1 },
      { name: 'people', label: 'Человек', type: 'number', defaultValue: 1, min: 1, step: 1 },
      {
        name: 'roundPerPerson', label: 'Округлять долю вверх', type: 'toggle', defaultValue: 'no',
        options: [{ value: 'no', label: 'Нет' }, { value: 'yes', label: 'Да' }],
      },
    ],
    resultLabels: { result: 'Итого к оплате', tip: 'Чаевые', bill: 'Счёт без чаевых', perPerson: 'С человека' },
    howToUse: ['Введите сумму счёта.', 'Задайте процент чаевых, который хотите оставить.', 'Укажите, на скольких человек делится счёт.'],
    howItWorks: 'чаевые = счёт × процент ÷ 100; итого = счёт + чаевые; доля — это итог, делённый на число человек.',
    example: 'Счёт 5400 с чаевыми 15 процентов даёт 6210, то есть по 1552,50 на четверых.',
    faq: [
      { q: 'Сколько принято оставлять на чай?', a: 'Это зависит от страны и заведения, поэтому процент выбираете вы. Калькулятор не подсказывает норму и не подставляет её за вас.' },
      { q: 'Что делает округление доли вверх?', a: 'Округляет сумму каждого до целого, из-за чего на столе обычно оказывается чуть больше счёта. Этот излишек показан отдельной строкой, чтобы ничего не пряталось.' },
      { q: 'Вычитается ли уже включённое обслуживание?', a: 'Нет. Заменяет ли сервисный сбор чаевые — решение по вашему счёту, а не вывод из арифметики.' },
      { q: 'Можно ли считать без деления на компанию?', a: 'Да. Оставьте одного человека, и вы получите просто чаевые и итог.' },
    ],
    relatedCalculatorIds: ['electricity-usage', 'percent-calculator', 'discount-calculator'],
  },
};
