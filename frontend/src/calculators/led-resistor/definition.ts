import { contextualField } from './contextualField';
import { contract } from './contractContent';
// Гасящий резистор для светодиода. Первая категория electronics.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ledResistorCopyEn } from './copy.en';
import { ledResistorCopyUk } from './copy.uk';
import { ledResistorCopyDe } from './copy.de';
import { ledResistorCopyEs } from './copy.es';
import { ledResistorReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'led-resistor',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: ledResistorCopyEn, uk: ledResistorCopyUk, de: ledResistorCopyDe, es: ledResistorCopyEs },
  referenceCases: ledResistorReferenceCases,
  publishedExample: {
    inputs: { supplyVoltage: 5, forwardVoltage: 2, current: 20, currentUnit: 'ma' },
    expected: ['150 Ом'],
  },
  presentation: {
    id: 'led-resistor',
    name: 'Калькулятор резистора для светодиода',
    slug: 'led-resistor',
    fullPath: '/electronics/led-resistor/',
    category: 'electronics',
    icon: 'zap',
    popularity: 38,
    isNew: false,
    shortDescription: 'Гасящий резистор для светодиода и мощность, которую он рассеет.',
    
    seoTitle: 'Калькулятор резистора для светодиода — сопротивление и мощность',
    seoDescription:
      'Рассчитайте гасящий резистор для светодиода по напряжению питания, прямому напряжению и рабочему току, с мощностью резистора.',
    h1: 'Калькулятор резистора для светодиода',
    keywords: ['резистор для светодиода', 'гасящий резистор', 'расчёт резистора led'],
    fields: [
      { name: 'supplyVoltage', label: "Напряжение питания", type: 'number', defaultValue: 5, min: 0, step: 0.1 , unit: "В" },
      { name: 'forwardVoltage', label: "Прямое напряжение при выбранном токе", type: 'number', defaultValue: 2, min: 0, step: 0.1 , unit: "В" },
      { name: 'current', label: "Рабочий ток", type: 'number', defaultValue: 20, min: 0, step: 1 },
      {
        name: 'currentUnit', label: 'Единица тока', type: 'select', defaultValue: 'ma',
        options: [
          { value: 'ma', label: 'миллиамперы (мА)' },
          { value: 'a', label: 'амперы (А)' },
        ],
      },
    ],
    resultLabels: {
      result: 'Сопротивление',
      drop: 'Падение на резисторе',
      resistorPower: 'Мощность на резисторе',
      ledPower: 'Мощность на светодиоде',
    },
    
    
    
    
    relatedCalculatorIds: ['ohms-law', 'convert-power', 'convert-energy'],
      
      ...contract.ru,
  },
};
