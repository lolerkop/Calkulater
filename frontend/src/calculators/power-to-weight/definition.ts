import { automotiveWave10ContractContent } from './contractContent';
// Удельная мощность автомобиля. Первая категория automotive.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { powerToWeightCopyEn } from './copy.en';
import { powerToWeightCopyUk } from './copy.uk';
import { powerToWeightCopyDe } from './copy.de';
import { powerToWeightCopyEs } from './copy.es';
import { powerToWeightReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'power-to-weight',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: powerToWeightCopyEn, uk: powerToWeightCopyUk, de: powerToWeightCopyDe, es: powerToWeightCopyEs },
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
    isNew: false,
    shortDescription: 'Удельная мощность в кВт на тонну, л.с. на тонну и кг на силу.',
    seoTitle: 'Калькулятор мощности к массе — кВт на тонну и кг на л.с.',
    seoDescription:
      'Рассчитайте отношение мощности к массе в киловаттах на тонну, лошадиных силах на тонну и килограммах на силу.',
    h1: 'Калькулятор мощности к массе',
    keywords: ['мощность к массе', 'кВт на тонну', 'кг на лошадиную силу'],
    fields: [
      { name: 'power', label: 'Мощность двигателя', type: 'number', unit: "PS / kW", defaultValue: 150, min: 0, step: 1 },
      {
        name: 'powerUnit', label: 'Единица мощности', type: 'select', defaultValue: 'ps',
        options: [
          { value: 'ps', label: 'метрические л.с. (PS)' },
          { value: 'kw', label: 'киловатты (кВт)' },
        ],
      },
      { name: 'mass', label: 'Снаряжённая масса, кг', type: 'number', unit: "кг", defaultValue: 1400, min: 0, step: 10 },
      { name: 'payload', label: 'Дополнительная нагрузка, кг', type: 'number', unit: "кг", defaultValue: 0, min: 0, step: 10, optional: true },
    ],
    resultLabels: { result: 'Удельная мощность', hpPerTonne: 'Лошадиных сил на тонну', kgPerHp: 'Килограммов на силу', power: 'Мощность' },
    relatedCalculatorIds: ['fuel-consumption', 'convert-power', 'convert-mass'],
    ...automotiveWave10ContractContent.ru,
  },
};
