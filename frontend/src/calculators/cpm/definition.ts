// CPM: стоимость тысячи показов. Знаменатель — показы, делённые на тысячу.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { cpmCopyEn } from './copy.en';
import { cpmCopyUk } from './copy.uk';
import { cpmReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "cpm",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: cpmCopyEn, uk: cpmCopyUk },
  referenceCases: cpmReferenceCases,
  publishedExample: { inputs: { mode: 'cpm', cost: 45000, impressions: 1200000 }, expected: ["37,50 ₽"] },
  presentation: {
    id: "cpm",
    name: "Калькулятор CPM",
    slug: "cpm",
    fullPath: "/business/cpm/",
    category: "business",
    icon: "trending-up",
    popularity: 33,
    isNew: false,
    shortDescription: "Стоимость тысячи показов в любую сторону.",
    longDescription:
      "Делит бюджет на показы и умножает на тысячу либо решает обратную задачу: сколько показов купит бюджет. Знаменатель — то единственное, что отличает CPM от соседних метрик: у CPC внизу клики, у CPA — действия, а формулы похожи достаточно, чтобы подмена дала правдоподобное неверное число.",
    seoTitle: "Калькулятор CPM — стоимость тысячи показов",
    seoDescription:
      "Рассчитайте CPM по бюджету и показам или решите обратную задачу: сколько показов либо какой бюджет даёт заданный CPM.",
    h1: "Калькулятор CPM",
    keywords: ["cpm калькулятор", "стоимость тысячи показов", "реклама cpm"],
    fields: [
      {
        name: 'mode', label: 'Что находим', type: 'select', defaultValue: 'cpm',
        options: [
          { value: 'cpm', label: 'CPM' },
          { value: 'impressions', label: 'показы' },
          { value: 'cost', label: 'бюджет' },
        ],
      },
      { name: 'cost', label: 'Бюджет кампании', type: 'number', defaultValue: 45000, unit: '₽', min: 0, step: 1000, showIf: { field: 'mode', equals: 'cpm' } },
      { name: 'impressions', label: 'Показы', type: 'number', defaultValue: 1200000, min: 1, step: 1000 },
      { name: 'cpm', label: 'CPM', type: 'number', defaultValue: 37.5, unit: '₽', min: 0, step: 0.5, showIf: { field: 'mode', equals: 'cost' } },
    ],
    resultLabels: { result: "CPM", budget: "Бюджет", impressions: "Показы", perImpression: "Стоимость показа" },
    howToUse: ["Выберите величину, которую нужно найти.", "Введите две известные.", "Прочитайте результат и стоимость одного показа."],
    howItWorks: "CPM = бюджет ÷ показы × 1000; остальные два режима — перестановки этой же связи.",
    example: "45 000 на 1 200 000 показов дают CPM 37,50.",
    faq: [
      { q: "Какой CPM считается хорошим?", a: "Зависит от площадки и аудитории, поэтому ориентиров здесь нет. Сравнивайте с собственными кампаниями." },
      { q: "Чем CPM отличается от CPC?", a: "Знаменателем. У CPM внизу тысячи показов, у CPC — клики." },
      { q: "Может ли бюджет быть нулевым?", a: "Да, и CPM тогда равен нулю. Бесплатное размещение — реальный случай, а не ошибка ввода." },
      { q: "Показы — это то же, что охват?", a: "Нет. Показы считают просмотры, включая повторные одному человеку; охват считает людей." },
    ],
    relatedCalculatorIds: ["ctr", "ad-roi", "roas"],
  },
};
