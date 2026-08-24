// Ленточный фундамент: объём бетона по длине ленты.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stripFoundationCopyEn } from './copy.en';
import { stripFoundationCopyUk } from './copy.uk';
import { stripFoundationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'strip-foundation',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: stripFoundationCopyEn, uk: stripFoundationCopyUk },
  referenceCases: stripFoundationReferenceCases,
  publishedExample: { inputs: { perimeter: 40, width: 0.4, depth: 0.8, waste: 5 }, expected: ['13,44 м³'] },
  presentation: {
    id: 'strip-foundation',
    name: 'Калькулятор ленточного фундамента',
    slug: 'strip-foundation',
    fullPath: '/building/strip-foundation/',
    category: 'building',
    icon: 'wall',
    popularity: 52,
    isNew: false,
    shortDescription: 'Объём бетона для ленты по её длине, ширине и глубине.',
    longDescription:
      'Считает объём бетона для ленточного фундамента. Вводится длина самой ленты, а не габарит здания: под внутренние несущие стены лента идёт тоже, и её длина прибавляется к внешнему контуру. Подставить сюда периметр коробки — самая частая ошибка, и она занижает заказ ровно на внутренние стены. Чистый объём и объём с запасом выводятся раздельно: по первому сверяются, второй заказывают.',
    seoTitle: 'Калькулятор ленточного фундамента — объём бетона',
    seoDescription: 'Рассчитайте объём бетона для ленточного фундамента по длине ленты, её ширине и глубине с запасом.',
    h1: 'Калькулятор ленточного фундамента',
    keywords: ['ленточный фундамент', 'объём бетона на фундамент', 'калькулятор фундамента', 'бетон на ленту'],
    fields: [
      { name: 'perimeter', label: 'Общая длина ленты, м', type: 'number', defaultValue: 40, min: 0, step: 0.1 },
      { name: 'width', label: 'Ширина ленты, м', type: 'number', defaultValue: 0.4, min: 0, step: 0.05 },
      { name: 'depth', label: 'Глубина ленты, м', type: 'number', defaultValue: 0.8, min: 0, step: 0.05 },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: { total: 'Объём бетона', clean: 'Чистый объём', waste: 'Запас', section: 'Площадь сечения ленты' },
    howToUse: [
      'Сложите длину внешнего контура и всех внутренних лент.',
      'Введите ширину и глубину ленты.',
      'Задайте запас и прочитайте объём заказа.',
    ],
    howItWorks:
      'Объём — длина ленты, умноженная на ширину и глубину её сечения. Полученное значение умножается на единицу плюс запас в долях; чистый объём остаётся отдельной строкой.',
    example: 'Лента длиной 40 м сечением 0,4 × 0,8 м — это 12,8 м³ бетона; с запасом 5 % заказать нужно 13,44 м³.',
    faq: [
      { q: 'Длину ленты или периметр здания вводить?', a: 'Длину ленты. Под внутренними несущими стенами она тоже идёт, и её нужно прибавить к внешнему контуру — иначе заказ окажется меньше нужного ровно на внутренние стены.' },
      { q: 'Чем это отличается от калькулятора бетона?', a: 'Калькулятор бетона считает три формы заливки вообще. Здесь только лента, зато от той величины, которой её реально меряют, и с подписями, которые не дают перепутать длину ленты с габаритом дома.' },
      { q: 'Как учесть песчаную подушку?', a: 'Никак — она не бетон. Посчитайте её объём отдельно по той же длине ленты и толщине подсыпки.' },
      { q: 'Нужно ли вычитать арматуру?', a: 'Нет. Объём стали мал по сравнению с бетоном, и на практике его не вычитают.' },
    ],
    relatedCalculatorIds: ['concrete', 'brick-calculator', 'screed-calculator'],
  },
};
