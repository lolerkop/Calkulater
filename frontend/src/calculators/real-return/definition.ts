// Реальная доходность по Фишеру рядом с грубой разностью.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { realReturnCopyEn } from './copy.en';
import { realReturnCopyUk } from './copy.uk';
import { realReturnReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "real-return",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: realReturnCopyEn, uk: realReturnCopyUk },
  referenceCases: realReturnReferenceCases,
  publishedExample: { inputs: { nominal: 12, inflation: 7 }, expected: ["4,67%"] },
  presentation: {
    id: "real-return",
    name: "Калькулятор реальной доходности",
    slug: "real-return",
    fullPath: "/finance/real-return/",
    category: "finance",
    icon: "banknote",
    popularity: 35,
    isNew: false,
    shortDescription: "Доходность после инфляции точно и привычной разностью.",
    longDescription:
      "Делит единицу плюс номинальную ставку на единицу плюс инфляцию — это честный способ вычесть инфляцию. Разность ставок остаётся привычным приближением и показана рядом: при 12 и 7 процентах она даёт 5, тогда как настоящая величина 4,67, и расхождение растёт вместе с инфляцией.",
    seoTitle: "Калькулятор реальной доходности — доход после инфляции",
    seoDescription:
      "Рассчитайте реальную доходность вклада после инфляции по уравнению Фишера рядом с привычной разностью ставок.",
    h1: "Калькулятор реальной доходности",
    keywords: ["реальная доходность", "доход после инфляции", "уравнение фишера"],
    fields: [
      { name: 'nominal', label: 'Номинальная ставка, %', type: 'number', defaultValue: 12, step: 0.5, signed: true },
      { name: 'inflation', label: 'Инфляция, %', type: 'number', defaultValue: 7, step: 0.5, signed: true },
      { name: 'amount', label: 'Сумма', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 10000, optional: true },
      { name: 'years', label: 'Лет', type: 'number', defaultValue: 1, min: 1, step: 1 },
    ],
    resultLabels: { result: "Реальная доходность", rough: "Грубая оценка разностью", gap: "Расхождение с разностью", nominal: "Номинальная ставка" },
    howToUse: ["Введите номинальную ставку, которую предлагают.", "Введите ожидаемую инфляцию.", "При желании добавьте сумму и срок."],
    howItWorks: "Реальная доходность = ((1 + номинал) ÷ (1 + инфляция) − 1) × 100, где обе ставки взяты долями.",
    example: "Ставка 12 процентов при инфляции 7 даёт реальные 4,67 процента, а не 5, как подсказывает разность.",
    faq: [
      { q: "Почему нельзя просто вычесть ставки?", a: "Потому что инфляция обесценивает выросшую сумму, а не исходную. Разность близка при малых ставках и заметно расходится, когда инфляция растёт." },
      { q: "Может ли реальная доходность быть отрицательной?", a: "Да, и часто бывает. Это значит, что деньги растут медленнее цен и в конце покупают меньше, чем в начале." },
      { q: "Какую инфляцию подставлять?", a: "Ту, которую вы ожидаете на своём сроке, а не прошлогоднюю официальную. Результат ровно настолько хорош, насколько верно это допущение." },
      { q: "Учитывается ли налог?", a: "Нет. Если доход облагается, вычтите налог из номинальной ставки сами, а уже потом сравнивайте с инфляцией." },
    ],
    relatedCalculatorIds: ["rule-of-72", "compound-interest", "deposit-calculator"],
  },
};
