// Гасящий резистор для светодиода. Первая категория electronics.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { ledResistorCopyEn } from './copy.en';
import { ledResistorCopyUk } from './copy.uk';
import { ledResistorReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'led-resistor',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: ledResistorCopyEn, uk: ledResistorCopyUk },
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
    isNew: true,
    shortDescription: 'Гасящий резистор для светодиода и мощность, которую он рассеет.',
    longDescription:
      'Подбирает резистор, который гасит разницу между напряжением питания и прямым напряжением светодиода, и сразу показывает, сколько мощности рассеет сам резистор и сколько уйдёт в светодиод. Прямое напряжение сверяется с питанием до расчёта: гасить нечего, если разницы нет.',
    seoTitle: 'Калькулятор резистора для светодиода — сопротивление и мощность',
    seoDescription:
      'Рассчитайте гасящий резистор для светодиода по напряжению питания, прямому напряжению и рабочему току, с мощностью резистора.',
    h1: 'Калькулятор резистора для светодиода',
    keywords: ['резистор для светодиода', 'гасящий резистор', 'расчёт резистора led'],
    fields: [
      { name: 'supplyVoltage', label: 'Напряжение питания, В', type: 'number', defaultValue: 5, min: 0, step: 0.1 },
      { name: 'forwardVoltage', label: 'Прямое напряжение светодиода, В', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'current', label: 'Рабочий ток', type: 'number', defaultValue: 20, min: 0, step: 1 },
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
    howToUse: [
      'Укажите напряжение питания схемы.',
      'Возьмите прямое напряжение из документации на светодиод.',
      'Введите рабочий ток в миллиамперах или амперах.',
    ],
    howItWorks:
      'R = (напряжение питания − прямое напряжение) ÷ ток. На резисторе рассеивается это падение, умноженное на тот же ток.',
    example: 'Светодиод на 2 В при 20 мА от источника 5 В требует (5 − 2) ÷ 0,02 = 150 Ом.',
    faq: [
      { q: 'Почему прямое напряжение должно быть меньше питания?', a: 'Резистор гасит разницу между ними. Если разницы нет, гасить нечего и рабочая точка не задаётся.' },
      { q: 'Какой номинал брать на практике?', a: 'Ближайший стандартный не меньше расчётного, и обязательно сверьте его допустимую мощность с показанной здесь.' },
      { q: 'Важно ли, в чём вводить ток?', a: 'Только для удобства: миллиамперы и амперы дают одинаковый ответ, перевод калькулятор делает сам.' },
      { q: 'Почему мощность светодиода отличается от мощности резистора?', a: 'Ток через них одинаковый, но каждый рассеивает своё напряжение, умноженное на этот ток.' },
    ],
    relatedCalculatorIds: ['ohms-law', 'convert-power', 'convert-energy'],
  },
};
