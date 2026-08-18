// Конвертер энергии. Самый широкий диапазон величин в волне: от электронвольта
// до мегаджоуля — тридцать с лишним порядков, поэтому именно он проверяет
// переключение представления на экспоненциальную запись.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { energyNames, energyUnits } from './units';
import { energyCopyEn } from './copy.en';
import { energyCopyUk } from './copy.uk';
import { energyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-energy',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: energyCopyEn, uk: energyCopyUk },
  referenceCases: energyReferenceCases,
  publishedExample: { inputs: { value: 100, from: 'kcal', to: 'kj' }, expected: ['418,4000 кДж'] },
  presentation: {
    id: 'convert-energy',
    name: 'Конвертер энергии',
    slug: 'convert-energy',
    fullPath: '/converters/convert-energy/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 51,
    isNew: true,
    shortDescription: 'Перевод энергии между джоулями, киловатт-часами, калориями и BTU.',
    longDescription:
      'Переводит энергию между джоулями, килоджоулями, мегаджоулями, ватт-часами, киловатт-часами, калориями, килокалориями, BTU и электронвольтами. Киловатт-часы стоят в квитанции за электричество, килокалории — на упаковке продуктов, BTU — в характеристиках кондиционеров и отопительных приборов.',
    seoTitle: 'Конвертер энергии — джоули, кВт·ч, калории, BTU',
    seoDescription:
      'Перевод энергии между джоулями, киловатт-часами, калориями, килокалориями, BTU и электронвольтами.',
    h1: 'Конвертер энергии',
    keywords: ['конвертер энергии', 'кВт·ч в джоули', 'калории в джоули'],
    fields: [
      { name: 'value', label: 'Энергия', type: 'number', defaultValue: 100, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'kcal', options: unitOptions(energyUnits, energyNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'kj', options: unitOptions(energyUnits, energyNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к джоулю через точные определённые множители.',
    example: 'Один киловатт-час — ровно 3 600 000 джоулей, одна килокалория — ровно 4184 джоуля.',
    faq: [
      { q: 'Почему киловатт-час равен 3 600 000 джоулей?', a: 'Ватт — это джоуль в секунду, поэтому киловатт в течение часа даёт 1000 × 3600 джоулей.' },
      { q: 'Пищевая калория — это калория отсюда?', a: 'Пищевая «калория» на упаковке — это килокалория. Для этикеток выбирайте ккал, для малой термохимической калории в 4,184 Дж — кал.' },
      { q: 'Какая BTU используется?', a: 'International Table, 1055,05585262 Дж. Другие определения BTU расходятся в третьем знаке после запятой.' },
      { q: 'Почему электронвольт показан степенью?', a: 'Он равен примерно 1,6·10⁻¹⁹ джоуля, и в обычной записи потребовалось бы девятнадцать нулей после запятой.' },
    ],
    relatedCalculatorIds: ['convert-power', 'convert-mass', 'convert-time'],
  },
};
