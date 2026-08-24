// Бюджет 50/30/20 — проверяет вывод нескольких величин одним расчётом.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { budgetCopyEn } from './copy.en';
import { budgetCopyUk } from './copy.uk';
import { budgetReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'budget-50-30-20',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: budgetCopyEn, uk: budgetCopyUk },
  referenceCases: budgetReferenceCases,
  publishedExample: { inputs: { income: 100000 }, expected: ['50 000 ₽', '30 000 ₽', '20 000 ₽'] },
  presentation: {
    id: 'budget-50-30-20',
    name: 'Калькулятор бюджета 50/30/20',
    slug: 'budget-50-30-20',
    fullPath: '/finance/budget-50-30-20/',
    category: 'finance',
    icon: 'wallet',
    popularity: 54,
    isNew: false,
    shortDescription: 'Деление дохода на нужды, желания и сбережения.',
    longDescription:
      'Правило 50/30/20 делит доход после налогов на три части: половина на обязательные нужды, треть на желания и пятая часть на сбережения. Это ориентир, а не закон: ценность в том, что все три суммы видны сразу и видно, какая категория выбивается.',
    seoTitle: 'Калькулятор бюджета 50/30/20 — нужды, желания, сбережения',
    seoDescription:
      'Разделите месячный доход после налогов на нужды, желания и сбережения по правилу 50/30/20.',
    h1: 'Калькулятор бюджета 50/30/20',
    keywords: ['бюджет 50/30/20', 'правило бюджета', 'месячный бюджет'],
    fields: [{ name: 'income', label: 'Месячный доход после налогов', type: 'number', defaultValue: 100000, min: 0 }],
    resultLabels: { needs: 'Нужды', wants: 'Желания', savings: 'Сбережения' },
    howToUse: [
      'Введите месячный доход после налогов.',
      'Сравните три суммы с тем, сколько уходит на самом деле.',
      'Начните с категории, которая расходится сильнее всего.',
    ],
    howItWorks: 'Нужды = 50 % дохода, желания = 30 %, сбережения = 20 %.',
    example: 'Доход 100 000 даёт 50 000 на нужды, 30 000 на желания и 20 000 на сбережения.',
    faq: [
      { q: 'Что считать нуждами?', a: 'Жильё, еду, транспорт, коммунальные платежи, лекарства и обязательные платежи по долгам — всё, что нельзя пропустить в следующем месяце.' },
      { q: 'Пропорция обязательна?', a: 'Нет, это ориентир. В дорогих городах нужды часто превышают половину, и полезно именно увидеть, насколько.' },
      { q: 'Доход до или после налогов?', a: 'После налогов и обязательных удержаний, иначе все три доли завышены.' },
      { q: 'Что делать, если на сбережения не остаётся?', a: 'Начните с того, что остаётся, и повышайте долю постепенно. Небольшая регулярная сумма работает лучше амбициозной, от которой отказываются.' },
    ],
    relatedCalculatorIds: ['savings-rate', 'compound-interest', 'deposit-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
