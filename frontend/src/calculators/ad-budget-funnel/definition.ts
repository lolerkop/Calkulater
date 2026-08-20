import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { adBudgetFunnelCopyEn } from './copy.en';
import { adBudgetFunnelCopyUk } from './copy.uk';
import { adBudgetFunnelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'ad-budget-funnel',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: adBudgetFunnelCopyEn, uk: adBudgetFunnelCopyUk },
  referenceCases: adBudgetFunnelReferenceCases,
  publishedExample: {
    inputs: { budget: 150000, cpc: 24, crPct: 2.4, aov: 4900 },
    expected: ['735 000,00 ₽'],
  },
  presentation: {
    id: 'ad-budget-funnel',
    name: 'Калькулятор рекламного бюджета',
    slug: 'ad-budget-funnel',
    fullPath: '/business/ad-budget-funnel/',
    category: 'business',
    icon: 'target',
    popularity: 23,
    isNew: true,
    shortDescription: 'Клики, заказы, выручка и ROAS по бюджету и конверсии.',
    longDescription:
      'Там, где ROAS оценивает уже потраченное, здесь бюджет разворачивается вперёд: сколько кликов он купит, сколько из них станут заказами и какую выручку это даст. Каждое звено умножается на следующее, поэтому ошибка в конверсии портит ответ ровно так же сильно, как ошибка в цене клика, — а конверсию обычно оценивают куда небрежнее всего. Цена заказа стоит рядом с выручкой не случайно: сравнение её со средним чеком — самая быстрая проверка того, может ли затея сработать вообще, ещё до того, как потрачены деньги.',
    seoTitle: 'Калькулятор рекламного бюджета: клики, заказы, ROAS',
    seoDescription:
      'Разверните рекламный бюджет в клики, заказы и выручку по цене клика, конверсии и среднему чеку с расчётом ROAS и цены заказа.',
    h1: 'Калькулятор рекламного бюджета',
    keywords: ['рекламный бюджет', 'roas', 'цена заказа', 'воронка рекламы'],
    fields: [
      { name: 'budget', label: 'Рекламный бюджет, ₽', type: 'number', defaultValue: 150000, min: 0, step: 10000 },
      { name: 'cpc', label: 'Цена клика, ₽', type: 'number', defaultValue: 24, min: 0, step: 1 },
      { name: 'crPct', label: 'Конверсия, %', type: 'number', defaultValue: 2.4, min: 0, max: 100, step: 0.1 },
      { name: 'aov', label: 'Средний чек, ₽', type: 'number', defaultValue: 4900, min: 0, step: 100 },
    ],
    resultLabels: {
      revenue: 'Ожидаемая выручка',
      clicks: 'Кликов',
      orders: 'Заказов',
      roas: 'ROAS',
      cpo: 'Цена заказа',
    },
    howToUse: [
      'Введите бюджет, который планируете потратить.',
      'Укажите цену клика, ожидаемую на аукционе.',
      'Укажите конверсию из клика в заказ.',
      'Введите средний чек по рекламируемым товарам.',
    ],
    howItWorks:
      'Клики = бюджет ÷ цена клика. Заказы = клики × конверсия ÷ 100. Выручка = заказы × средний чек, а ROAS — выручка ÷ бюджет.',
    example: 'Бюджет 150 000 ₽ при цене клика 24 ₽, конверсии 2,4 % и чеке 4 900 ₽ даёт 735 000 ₽ — ROAS 4,9.',
    faq: [
      {
        q: 'К какому входу стоит отнестись внимательнее всего?',
        a: 'К конверсии. Она умножается через всю цепочку, и предположение о 3 % против реальных 1,5 % вдвое режет выручку, выглядя на странице небольшой разницей.',
      },
      {
        q: 'Какой ROAS считать достаточным?',
        a: 'Зависит от маржи. При марже тридцать процентов ROAS 3,33 лишь выводит в ноль по товару; всё, что ниже, приносит убыток, как бы внушительно ни выглядела выручка.',
      },
      {
        q: 'Учитывает ли выручка возвраты?',
        a: 'Нет, это валовая выручка по оформленным заказам. В категориях с высоким процентом возвратов пригодная к работе цифра бывает на пятую часть ниже.',
      },
      {
        q: 'Зачем показывать цену заказа отдельно?',
        a: 'Она напрямую сравнивается со средним чеком и с вашей маржой. Если заказ обходится дороже, чем приносит, воронка сломана независимо от того, как выглядят итоги.',
      },
    ],
    relatedCalculatorIds: ['roas', 'cpc', 'conversion-rate'],
  },
};
