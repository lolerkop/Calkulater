// Конвертер температуры — второй сентинел и решающий для формы движка:
// шкалы смещены, и одного множителя недостаточно.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { temperatureNames, temperatureUnits } from './units';
import { temperatureCopyEn } from './copy.en';
import { temperatureCopyUk } from './copy.uk';
import { temperatureReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-temperature',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: temperatureCopyEn, uk: temperatureCopyUk },
  referenceCases: temperatureReferenceCases,
  publishedExample: { inputs: { value: 100, from: 'c', to: 'f' }, expected: ['212,0000 °F'] },
  presentation: {
    id: 'convert-temperature',
    name: 'Конвертер температуры',
    slug: 'convert-temperature',
    fullPath: '/converters/convert-temperature/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 59,
    isNew: true,
    shortDescription: 'Перевод между Цельсием, Фаренгейтом, Кельвином и Ранкином.',
    longDescription:
      'Переводит температуру между Цельсием, Фаренгейтом, Кельвином и Ранкином. Температурные шкалы смещены друг относительно друга, а не кратны, поэтому перевод простым умножением даёт неверный ответ.',
    seoTitle: 'Конвертер температуры — Цельсий, Фаренгейт, Кельвин',
    seoDescription:
      'Перевод температуры между Цельсием, Фаренгейтом, Кельвином и Ранкином по точным опорным точкам шкал.',
    h1: 'Конвертер температуры',
    keywords: ['конвертер температуры', 'цельсий в фаренгейт', 'кельвин'],
    fields: [
      { name: 'value', label: 'Температура', type: 'number', defaultValue: 20, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'c', options: unitOptions(temperatureUnits, temperatureNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'f', options: unitOptions(temperatureUnits, temperatureNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите температуру.', 'Выберите исходную шкалу.', 'Выберите целевую шкалу.'],
    howItWorks: 'Каждая шкала переводится через кельвин с помощью множителя и смещения.',
    example: '0 °C — это 32 °F, а 100 °C — 212 °F.',
    faq: [
      { q: 'Почему температуру нельзя перевести одним множителем?', a: 'Цельсий и Фаренгейт начинаются в разных точках, поэтому переводу нужны и множитель, и смещение. Только у Кельвина и Ранкина общий абсолютный ноль.' },
      { q: 'Где совпадают Цельсий и Фаренгейт?', a: 'При −40. Это единственная температура, где обе шкалы показывают одно и то же число.' },
      { q: 'Что такое Ранкин?', a: 'Абсолютная шкала с градусом размера Фаренгейта: 0 °Ra — абсолютный ноль, а 491,67 °Ra — точка замерзания воды.' },
      { q: 'Можно ли вводить температуру ниже абсолютного нуля?', a: 'Конвертер её посчитает, но физического смысла у такого значения нет: абсолютный ноль — это 0 K, −273,15 °C или −459,67 °F.' },
    ],
    relatedCalculatorIds: ['convert-energy', 'convert-pressure', 'convert-length'],
  },
};
