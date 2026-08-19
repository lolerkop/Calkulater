// Правило 72: приближение срока удвоения и точный ответ рядом.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ruleOf72CopyEn } from './copy.en';
import { ruleOf72CopyUk } from './copy.uk';
import { ruleOf72ReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'rule-of-72',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: ruleOf72CopyEn, uk: ruleOf72CopyUk },
  referenceCases: ruleOf72ReferenceCases,
  publishedExample: { inputs: { rate: 8 }, expected: ['9,00 лет'] },
  presentation: {
    id: 'rule-of-72',
    name: 'Калькулятор правила 72',
    slug: 'rule-of-72',
    fullPath: '/finance/rule-of-72/',
    category: 'finance',
    icon: 'banknote',
    popularity: 39,
    isNew: true,
    shortDescription: 'За сколько лет удвоятся деньги и насколько врёт правило.',
    longDescription:
      'Семьдесят два, делённые на ставку, дают срок удвоения в годах — приближение, которое считается в уме. Рядом стоит точное значение через логарифм и расхождение между ними: не чтобы подменить правило, а чтобы было видно, где оно начинает вводить в заблуждение. На восьми процентах расхождение меньше недели, на половине процента правило ошибается на пять лет.',
    seoTitle: 'Калькулятор правила 72 — срок удвоения и его погрешность',
    seoDescription:
      'Оцените, за сколько лет вложение удвоится по правилу 72, рядом с точным значением и разницей между ними.',
    h1: 'Калькулятор правила 72',
    keywords: ['правило 72', 'срок удвоения', 'удвоение вклада'],
    fields: [
      { name: 'rate', label: 'Ставка, % годовых', type: 'number', defaultValue: 8, min: 0, step: 0.1 },
      { name: 'amount', label: 'Начальная сумма', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 1000, optional: true },
    ],
    resultLabels: { result: 'Удвоение по правилу 72', exact: 'Точный срок удвоения', gap: 'Расхождение правила', doubled: 'Сумма после удвоения' },
    howToUse: ['Введите годовую ставку.', 'Прочитайте оценку по правилу 72.', 'Сравните её с точным значением рядом.'],
    howItWorks: 'Оценка — это 72 ÷ ставка; точный срок равен ln 2 ÷ ln(1 + ставка ÷ 100) при годовой капитализации.',
    example: 'При 8 процентах правило даёт 72 ÷ 8 = 9 лет, а точный ответ — 9,01.',
    faq: [
      { q: 'Почему 72, а не 70?', a: 'Семьдесят два нацело делятся на многие ходовые ставки — 2, 3, 4, 6, 8, 9, 12, — и именно поэтому приём считается в уме.' },
      { q: 'Когда правило перестаёт работать?', a: 'Ниже примерно четырёх процентов и выше примерно двенадцати расхождение быстро растёт. Поэтому разница вынесена отдельной строкой.' },
      { q: 'Это то же самое, что калькулятор сложного процента?', a: 'Нет. Тот наращивает сумму за выбранный срок, а этот отвечает на один вопрос — когда она удвоится.' },
      { q: 'Какая капитализация предполагается?', a: 'Годовая. Более частая капитализация немного сокращает точный срок, и правило этого не учитывает.' },
    ],
    relatedCalculatorIds: ['compound-interest', 'deposit-calculator', 'cagr'],
  },
};
