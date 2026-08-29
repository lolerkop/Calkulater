// Простые проценты. Двухрежимный калькулятор: та же формула, решённая
// относительно разных неизвестных. Поле ставки и поле процентов показываются
// условно, по выбранному режиму.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { FIN_DISCLAIMER } from '../../lib/disclaimers';
import { compute } from './compute';
import { simpleInterestCopyEn } from './copy.en';
import { simpleInterestCopyUk } from './copy.uk';
import { simpleInterestCopyDe } from './copy.de';
import { simpleInterestReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'simple-interest',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: simpleInterestCopyEn, uk: simpleInterestCopyUk, de: simpleInterestCopyDe },
  referenceCases: simpleInterestReferenceCases,
  publishedExample: { inputs: { mode: 'interest', principal: 100000, rate: 8, years: 3 }, expected: ['24 000 ₽', '124 000 ₽'] },
  presentation: {
    id: 'simple-interest',
    name: 'Калькулятор простых процентов',
    slug: 'simple-interest',
    fullPath: '/finance/simple-interest/',
    category: 'finance',
    icon: 'percent',
    popularity: 49,
    isNew: false,
    shortDescription: 'Проценты только на первоначальную сумму, в обе стороны.',
    longDescription:
      'Простые проценты начисляются на первоначальную сумму и никогда — на уже начисленные проценты. Калькулятор работает в обе стороны: находит проценты по известной ставке или ставку, которая даёт известную сумму процентов.',
    seoTitle: 'Калькулятор простых процентов — проценты и нужная ставка',
    seoDescription:
      'Расчёт простых процентов на первоначальную сумму, итоговой суммы и ставки, необходимой для заданных процентов.',
    h1: 'Калькулятор простых процентов',
    keywords: ['простые проценты', 'калькулятор процентов', 'нужная ставка'],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'interest',
        options: [
          { value: 'interest', label: 'Начисленные проценты' },
          { value: 'rate', label: 'Необходимую ставку' },
        ],
      },
      { name: 'principal', label: 'Начальная сумма', type: 'number', defaultValue: 100000, min: 0 },
      { name: 'rate', label: 'Годовая ставка, %', type: 'number', defaultValue: 8, min: 0, showIf: { field: 'mode', equals: 'interest' } },
      { name: 'interest', label: 'Проценты за срок', type: 'number', defaultValue: 24000, min: 0, showIf: { field: 'mode', equals: 'rate' } },
      { name: 'years', label: 'Срок, лет', type: 'number', defaultValue: 3, min: 0 },
    ],
    resultLabels: { interest: 'Проценты', rate: 'Ставка', total: 'Итоговая сумма' },
    howToUse: ['Выберите, что нужно найти.', 'Введите начальную сумму и срок.', 'Введите ставку или проценты — в зависимости от режима.'],
    howItWorks:
      'Проценты = сумма × ставка × срок ÷ 100. Второй режим решает то же равенство относительно ставки.',
    example: '100 000 под 8 % на три года дают 24 000 процентов, итог — 124 000.',
    faq: [
      { q: 'Чем это отличается от сложных процентов?', a: 'Простые проценты никогда не начисляются на проценты. За один и тот же срок сложные дают больше, и разрыв растёт со временем.' },
      { q: 'Где применяются простые проценты?', a: 'В коротких займах, рассрочках, пенях и части облигаций — везде, где база зафиксирована договором.' },
      { q: 'Можно ли указать дробный срок?', a: 'Да. Полгода — это 0,5, формула остаётся линейной по сроку.' },
      { q: 'Почему нулевой срок отклоняется?', a: 'Ставка тогда не определена: она делится на срок.' },
    ],
    relatedCalculatorIds: ['compound-interest', 'deposit-calculator', 'savings-rate'],
    disclaimer: FIN_DISCLAIMER,
  },
};
