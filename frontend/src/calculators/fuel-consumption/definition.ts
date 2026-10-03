import { automotiveWave10ContractContent } from './contractContent';
// Расход топлива по факту заправки и пробега. Три режима.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { fuelConsumptionCopyEn } from './copy.en';
import { fuelConsumptionCopyUk } from './copy.uk';
import { fuelConsumptionCopyDe } from './copy.de';
import { fuelConsumptionCopyEs } from './copy.es';
import { fuelConsumptionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'fuel-consumption',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: fuelConsumptionCopyEn, uk: fuelConsumptionCopyUk, de: fuelConsumptionCopyDe, es: fuelConsumptionCopyEs },
  referenceCases: fuelConsumptionReferenceCases,
  publishedExample: { inputs: { mode: 'measure', litres: 42, distance: 560 }, expected: ['7,50 л/100 км'] },
  presentation: {
    id: 'fuel-consumption',
    name: 'Калькулятор расхода топлива',
    slug: 'fuel-consumption',
    fullPath: '/automotive/fuel-consumption/',
    category: 'automotive',
    icon: 'car',
    popularity: 42,
    isNew: false,
    shortDescription: 'Литры на 100 км по заправке или топливо на поездку.',
    seoTitle: 'Калькулятор расхода топлива — литров на 100 км',
    seoDescription:
      'Рассчитайте расход топлива в литрах на 100 км по залитым литрам и пробегу или узнайте, сколько топлива нужно на поездку.',
    h1: 'Калькулятор расхода топлива',
    keywords: ['расход топлива', 'литров на 100 км', 'калькулятор бензина'],
    fields: [
      {
        name: 'mode', label: 'Что считаем', type: 'select', defaultValue: 'measure',
        options: [
          { value: 'measure', label: 'литров на 100 км' },
          { value: 'kml', label: 'километров на литр' },
          { value: 'need', label: 'сколько топлива нужно на поездку' },
        ],
      },
      { name: 'litres', label: 'Израсходовано литров', type: 'number', unit: "л", defaultValue: 42, min: 0, step: 0.1, showIf: { field: 'mode', oneOf: ['measure', 'kml'] } },
      { name: 'distance', label: 'Пробег, км', type: 'number', unit: "км", defaultValue: 560, min: 0, step: 1 },
      { name: 'consumption', label: 'Расход, л/100 км', type: 'number', unit: "л/100 км", defaultValue: 7.5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'need' } },
    ],
    resultLabels: { result: 'Расход', perHundred: 'Литров на 100 км', kmPerLitre: 'Километров на литр', thousand: 'Расход на 1000 км' },
    relatedCalculatorIds: ['power-to-weight', 'convert-volume', 'convert-length'],
    ...automotiveWave10ContractContent.ru,
  },
};
