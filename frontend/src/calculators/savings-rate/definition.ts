// Норма сбережений — первый калькулятор, созданный на Platform V2 с нуля,
// а не перенесённый. Взят самым простым намеренно: он задаёт нижнюю границу
// стоимости калькулятора и показывает, сколько кода нужно, когда формула
// умещается в одну строку.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { savingsRateCopyEn } from './copy.en';
import { savingsRateCopyUk } from './copy.uk';
import { savingsRateReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'savings-rate',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: savingsRateCopyEn, uk: savingsRateCopyUk },
  referenceCases: savingsRateReferenceCases,
  // Пример со страницы: он же проверяется тестом на соответствие расчёту.
  publishedExample: { inputs: { income: 100000, expenses: 70000 }, expected: ['30,00 %', '30 000 ₽'] },
  presentation: {
    id: 'savings-rate',
    name: 'Калькулятор нормы сбережений',
    slug: 'savings-rate',
    fullPath: '/finance/savings-rate/',
    category: 'finance',
    icon: 'piggy-bank',
    popularity: 52,
    isNew: true,
    shortDescription: 'Какая доля дохода остаётся после расходов.',
    longDescription:
      'Норма сбережений показывает, какую часть дохода вы откладываете. Это базовый показатель личного бюджета: он не зависит от размера дохода и поэтому позволяет сравнивать месяцы между собой и следить за динамикой.',
    seoTitle: 'Калькулятор нормы сбережений — сколько процентов дохода вы откладываете',
    seoDescription:
      'Расчёт нормы сбережений: доля дохода, которая остаётся после расходов, и сумма сбережений за период.',
    h1: 'Калькулятор нормы сбережений',
    keywords: ['норма сбережений', 'сколько откладывать', 'личный бюджет'],
    fields: [
      { name: 'income', label: 'Доход за период', type: 'number', defaultValue: 100000, min: 0 },
      { name: 'expenses', label: 'Расходы за период', type: 'number', defaultValue: 70000, min: 0 },
    ],
    resultLabels: { rate: 'Норма сбережений', saved: 'Сбережения за период' },
    howToUse: [
      'Введите доход за месяц или другой удобный период.',
      'Введите расходы за тот же период.',
      'Сравните норму с предыдущими периодами: важна динамика, а не одно значение.',
    ],
    howItWorks:
      'Норма сбережений = (доход − расходы) / доход × 100 %. Показатель не зависит от валюты и размера дохода, поэтому подходит для сравнения периодов.',
    example: 'Доход 100 000 и расходы 70 000 дают сбережения 30 000 и норму 30 %.',
    faq: [
      { q: 'Какая норма сбережений считается хорошей?', a: 'Ориентир для устойчивого бюджета — от 10 %, комфортный уровень — около 20 %. Но важнее стабильность, чем разовое высокое значение.' },
      { q: 'Что считать доходом?', a: 'Сумму, которая реально поступила за период после налогов. Разовые поступления лучше считать отдельно, иначе норма скачет.' },
      { q: 'Почему норма отрицательная?', a: 'Расходы превысили доход: разница покрыта из накоплений или в долг. Калькулятор показывает это отдельной строкой.' },
      { q: 'За какой период считать?', a: 'Удобнее всего за месяц. Если доход неровный, берите квартал или год — короткий период у фрилансера покажет случайный результат.' },
    ],
    relatedCalculatorIds: ['compound-interest', 'deposit-calculator', 'credit-calculator'],
    disclaimer: FIN_DISCLAIMER,
  },
};
