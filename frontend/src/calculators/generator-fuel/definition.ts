import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
// Расход топлива генератора.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { generatorFuelCopyEn } from './copy.en';
import { generatorFuelCopyUk } from './copy.uk';
import { generatorFuelCopyDe } from './copy.de';
import { generatorFuelCopyEs } from './copy.es';
import { generatorFuelReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'generator-fuel',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: generatorFuelCopyEn, uk: generatorFuelCopyUk, de: generatorFuelCopyDe, es: generatorFuelCopyEs },
  referenceCases: generatorFuelReferenceCases,
  publishedExample: { inputs: { load: 5, sfc: 0.3, hours: 8, price: 60 }, expected: ['12,00 л', '720,00 ₽'] },
  presentation: {
    ...contractContent.ru,
    id: 'generator-fuel',
    name: 'Калькулятор расхода топлива генератора',
    slug: 'generator-fuel',
    fullPath: '/household/generator-fuel/',
    category: 'household',
    icon: 'home',
    popularity: 47,
    isNew: false,
    shortDescription: 'Сколько топлива сожжёт генератор за смену и сколько это стоит.',
    seoTitle: 'Калькулятор расхода топлива генератора',
    seoDescription: 'Рассчитайте расход топлива генератора по нагрузке, удельному расходу и времени работы, вместе со стоимостью.',
    h1: 'Калькулятор расхода топлива генератора',
    keywords: ['расход топлива генератора', 'сколько топлива ест генератор', 'калькулятор генератора'],
    fields: [
      { name: 'load', label: 'Нагрузка, кВт', type: 'number', defaultValue: 5, min: 0, step: 0.1 },
      { name: 'sfc', label: 'Удельный расход, л/кВт·ч', type: 'number', defaultValue: 0.3, min: 0, step: 0.01 },
      { name: 'hours', label: 'Время работы, ч', type: 'number', defaultValue: 8, min: 0, step: 0.5 },
      // Необязательная сумма по контракту платформы: нуль значит «цены нет»,
      // и строка стоимости тогда просто не выводится.
      { name: 'price', label: "Цена топлива за литр", type: 'number', unit: '₽', defaultValue: 0, min: 0, step: 1, optional: true },
    ],
    resultLabels: { fuel: 'Расход топлива', perHour: 'Расход в час', cost: 'Стоимость топлива' },
    relatedCalculatorIds: ['electricity-usage', 'fuel-consumption', 'inverter-power'],
  },
};
