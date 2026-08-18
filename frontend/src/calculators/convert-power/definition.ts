// Конвертер мощности. Единственный в волне, где две ходовые единицы носят одно
// и то же бытовое имя «лошадиная сила», но различаются на 1,4 %.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { unitOptions } from '../../lib/platform/conversion';
import { compute } from './compute';
import { powerNames, powerUnits } from './units';
import { powerCopyEn } from './copy.en';
import { powerCopyUk } from './copy.uk';
import { powerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'convert-power',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: powerCopyEn, uk: powerCopyUk },
  referenceCases: powerReferenceCases,
  publishedExample: { inputs: { value: 100, from: 'kw', to: 'ps' }, expected: ['135,9622 л.с.'] },
  presentation: {
    id: 'convert-power',
    name: 'Конвертер мощности',
    slug: 'convert-power',
    fullPath: '/converters/convert-power/',
    category: 'converters',
    icon: 'arrow-left-right',
    popularity: 50,
    isNew: true,
    shortDescription: 'Перевод мощности между ваттами, киловаттами и лошадиными силами.',
    longDescription:
      'Переводит мощность между ваттами, киловаттами, мегаваттами, механическими и метрическими лошадиными силами и BTU в час. Механическая и метрическая лошадиные силы — разные единицы, и конвертер их различает, а не усредняет.',
    seoTitle: 'Конвертер мощности — ватты, киловатты, лошадиные силы',
    seoDescription:
      'Перевод мощности между ваттами, киловаттами, мегаваттами, механическими и метрическими лошадиными силами и BTU в час.',
    h1: 'Конвертер мощности',
    keywords: ['конвертер мощности', 'кВт в л.с.', 'лошадиные силы'],
    fields: [
      { name: 'value', label: 'Мощность', type: 'number', defaultValue: 100, signed: true },
      { name: 'from', label: 'Из единицы', type: 'select', defaultValue: 'kw', options: unitOptions(powerUnits, powerNames) },
      { name: 'to', label: 'В единицу', type: 'select', defaultValue: 'ps', options: unitOptions(powerUnits, powerNames) },
    ],
    resultLabels: { result: 'Результат' },
    howToUse: ['Введите значение.', 'Выберите исходную единицу.', 'Выберите целевую единицу.'],
    howItWorks: 'Все единицы приводятся к ватту через определённые множители.',
    example: '100 кВт — это около 136 метрических лошадиных сил или около 134 механических.',
    faq: [
      { q: 'Почему лошадиных сил две?', a: 'Механическая равна 550 фут·фунт-сила в секунду, то есть 745,6999 Вт. Метрическая равна 75 кгс·м/с, то есть ровно 735,49875 Вт. Разница около 1,4 %.' },
      { q: 'Какая используется в характеристиках автомобилей?', a: 'В европейских — метрическая. В американских и британских цифрах обычно подразумевается механическая.' },
      { q: 'Для чего нужны BTU в час?', a: 'Так измеряют производительность кондиционеров и отопительных приборов. Один киловатт — около 3412 BTU/ч.' },
      { q: 'Киловатт-час — это мощность?', a: 'Нет, это энергия: мощность, умноженная на время. Для киловатт-часов есть конвертер энергии.' },
    ],
    relatedCalculatorIds: ['convert-energy', 'convert-speed', 'convert-time'],
  },
};
