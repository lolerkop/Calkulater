// Удельная мощность автомобиля. Первая категория automotive.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { powerToWeightCopyEn } from './copy.en';
import { powerToWeightCopyUk } from './copy.uk';
import { powerToWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'power-to-weight',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: powerToWeightCopyEn, uk: powerToWeightCopyUk },
  referenceCases: powerToWeightReferenceCases,
  publishedExample: { inputs: { power: 150, powerUnit: 'ps', mass: 1400 }, expected: ['78,80 кВт/т'] },
  presentation: {
    id: 'power-to-weight',
    name: 'Калькулятор мощности к массе',
    slug: 'power-to-weight',
    fullPath: '/automotive/power-to-weight/',
    category: 'automotive',
    icon: 'car',
    popularity: 35,
    isNew: true,
    shortDescription: 'Удельная мощность в кВт на тонну, л.с. на тонну и кг на силу.',
    longDescription:
      'Делит мощность двигателя на массу автомобиля и показывает результат в трёх привычных видах. Лошадиная сила здесь метрическая — 735,49875 Вт, именно она стоит в паспорте транспортного средства; механическая отличается примерно на полтора процента и тихо испортила бы любое сравнение.',
    seoTitle: 'Калькулятор мощности к массе — кВт на тонну и кг на л.с.',
    seoDescription:
      'Рассчитайте отношение мощности к массе в киловаттах на тонну, лошадиных силах на тонну и килограммах на силу.',
    h1: 'Калькулятор мощности к массе',
    keywords: ['мощность к массе', 'кВт на тонну', 'кг на лошадиную силу'],
    fields: [
      { name: 'power', label: 'Мощность двигателя', type: 'number', defaultValue: 150, min: 0, step: 1 },
      {
        name: 'powerUnit', label: 'Единица мощности', type: 'select', defaultValue: 'ps',
        options: [
          { value: 'ps', label: 'метрические л.с. (PS)' },
          { value: 'kw', label: 'киловатты (кВт)' },
        ],
      },
      { name: 'mass', label: 'Снаряжённая масса, кг', type: 'number', defaultValue: 1400, min: 0, step: 10 },
      { name: 'payload', label: 'Дополнительная нагрузка, кг', type: 'number', defaultValue: 0, min: 0, step: 10, optional: true },
    ],
    resultLabels: { result: 'Удельная мощность', hpPerTonne: 'Лошадиных сил на тонну', kgPerHp: 'Килограммов на силу', power: 'Мощность' },
    howToUse: ['Введите мощность двигателя и выберите единицу.', 'Укажите снаряжённую массу.', 'При желании добавьте груз, который нужно учесть.'],
    howItWorks: 'Мощность приводится к киловаттам, масса — к тоннам, и берётся их отношение; килограммы на силу — та же связь, только обратная.',
    example: '150 л.с. при массе 1400 кг — это 110,32 кВт на 1,4 т, то есть 78,80 кВт на тонну.',
    faq: [
      { q: 'Какая лошадиная сила используется?', a: 'Метрическая, 735,49875 Вт, она же PS. Именно она указана в паспорте транспортного средства.' },
      { q: 'Учитывать ли пассажиров и топливо?', a: 'Это ваш выбор. Обычно сравнивают по снаряжённой массе, а поле дополнительной нагрузки позволяет добавить всё, что нужно учесть.' },
      { q: 'Зачем показывать ещё и килограммы на силу?', a: 'Многие помнят показатель именно в таком виде, а меньшее значение означает лучшую динамику — кому-то это нагляднее.' },
      { q: 'Предсказывает ли это разгон?', a: 'Только грубо. Передаточные числа, сцепление, аэродинамика и то, на каких оборотах приходит мощность, здесь не учитываются.' },
    ],
    relatedCalculatorIds: ['fuel-consumption', 'convert-power', 'convert-mass'],
  },
};
