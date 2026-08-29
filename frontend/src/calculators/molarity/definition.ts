// Молярная концентрация раствора: C = n / V.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { molarityCopyEn } from './copy.en';
import { molarityCopyUk } from './copy.uk';
import { molarityCopyDe } from './copy.de';
import { molarityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'molarity',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: molarityCopyEn, uk: molarityCopyUk, de: molarityCopyDe },
  referenceCases: molarityReferenceCases,
  publishedExample: { inputs: { mode: 'moles', moles: 0.5, volumeUnit: 'l', volume: 2 }, expected: ['0,25 моль/л'] },
  presentation: {
    id: 'molarity',
    name: 'Калькулятор молярности',
    slug: 'molarity',
    fullPath: '/chemistry/molarity/',
    category: 'chemistry',
    icon: 'flask',
    popularity: 42,
    isNew: false,
    shortDescription: 'Молярная концентрация раствора по количеству вещества или по массе.',
    longDescription:
      'Считает молярную концентрацию — сколько молей растворённого вещества приходится на литр раствора. Если количество вещества неизвестно, его можно получить из массы и молярной массы прямо здесь, не пересчитывая отдельно. Объём приводится к литрам до подстановки в формулу, поэтому миллилитры и кубометры выбираются в списке, а не переводятся вручную: именно на этом переводе чаще всего и ошибаются, получая число, отличающееся в тысячу раз и выглядящее правдоподобно.',
    seoTitle: 'Калькулятор молярности — концентрация раствора в моль/л',
    seoDescription: 'Рассчитайте молярную концентрацию раствора по количеству вещества или по массе и молярной массе.',
    h1: 'Калькулятор молярности',
    keywords: ['молярность', 'молярная концентрация', 'моль на литр', 'концентрация раствора'],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'moles',
        options: [
          { value: 'moles', label: 'количество вещества' },
          { value: 'mass', label: 'масса и молярная масса' },
        ],
      },
      { name: 'moles', label: 'Количество вещества, моль', type: 'number', defaultValue: 0.5, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'moles' } },
      { name: 'mass', label: 'Масса вещества, г', type: 'number', defaultValue: 58.44, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'mass' } },
      { name: 'molarMass', label: 'Молярная масса, г/моль', type: 'number', defaultValue: 58.44, min: 0, step: 0.001, showIf: { field: 'mode', equals: 'mass' } },
      {
        name: 'volumeUnit', label: 'Единица объёма', type: 'select', defaultValue: 'l',
        options: [
          { value: 'ml', label: 'миллилитры' },
          { value: 'l', label: 'литры' },
          { value: 'm3', label: 'кубометры' },
        ],
      },
      { name: 'volume', label: 'Объём раствора', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
    ],
    resultLabels: { molarity: 'Молярная концентрация', moles: 'Количество вещества', volume: 'Объём раствора' },
    howToUse: ['Выберите, известно количество вещества или его масса.', 'Введите значение и молярную массу, если считаете от массы.', 'Выберите единицу объёма и введите объём раствора.'],
    howItWorks:
      'C = n / V, где n — количество вещества в молях, а V — объём раствора в литрах. Если задана масса, количество вещества сначала находится как n = m / M. Выбранная единица объёма приводится к литрам до деления.',
    example: 'Полмоля вещества в двух литрах раствора дают концентрацию 0,25 моль/л.',
    faq: [
      { q: 'Молярность считается по объёму раствора или растворителя?', a: 'По объёму готового раствора. Это разные величины: при растворении объём меняется, поэтому литр воды плюс вещество — это не литр раствора.' },
      { q: 'Как посчитать молярность, если известна только масса?', a: 'Выберите режим по массе и укажите молярную массу вещества. Количество вещества найдётся как масса, делённая на молярную массу, и дальше расчёт тот же.' },
      { q: 'Почему единицу объёма нужно выбирать?', a: 'Потому что формула работает в литрах. Миллилитры и кубометры приводятся к ним автоматически — без этого результат отличался бы в тысячу раз и при этом выглядел правдоподобно.' },
      { q: 'Чем молярность отличается от процентной концентрации?', a: 'Молярность считает частицы, процентная концентрация — массу. Для одного и того же раствора это два разных числа, и подменять одно другим нельзя.' },
    ],
    relatedCalculatorIds: ['moles', 'solution-concentration', 'dilution'],
  },
};
