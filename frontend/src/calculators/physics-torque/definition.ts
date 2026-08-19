// Момент силы: τ = F · r · sin θ.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { physicsTorqueCopyEn } from './copy.en';
import { physicsTorqueCopyUk } from './copy.uk';
import { physicsTorqueReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'physics-torque',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: physicsTorqueCopyEn, uk: physicsTorqueCopyUk },
  referenceCases: physicsTorqueReferenceCases,
  publishedExample: { inputs: { force: 50, radius: 0.3, angle: 90 }, expected: ['15 Н·м'] },
  presentation: {
    id: 'physics-torque',
    name: 'Калькулятор момента силы',
    slug: 'torque',
    fullPath: '/physics/torque/',
    category: 'physics',
    icon: 'atom',
    popularity: 41,
    isNew: true,
    shortDescription: 'Момент силы по силе, плечу и углу между ними.',
    longDescription:
      'Считает момент силы: τ = F·r·sin θ. Это расчёт физической величины, а не перевод единиц — конвертер момента живёт отдельной страницей и только меняет масштаб уже известного числа. Угол между силой и рычагом решает многое: при прямом угле момент максимален, а при нулевом сила тянет вдоль рычага и не поворачивает его вовсе. Этот нуль здесь точный, а не машинный остаток от синуса.',
    seoTitle: 'Калькулятор момента силы — τ = F·r·sin θ',
    seoDescription: 'Рассчитайте момент силы по величине силы, длине плеча и углу между ними, вместе с плечом силы.',
    h1: 'Калькулятор момента силы',
    keywords: ['момент силы', 'крутящий момент формула', 'калькулятор момента', 'плечо силы'],
    fields: [
      { name: 'force', label: 'Сила, Н', type: 'number', defaultValue: 50, min: 0, step: 1 },
      { name: 'radius', label: 'Плечо, м', type: 'number', defaultValue: 0.3, min: 0, step: 0.01 },
      { name: 'angle', label: 'Угол между силой и плечом, градусов', type: 'number', defaultValue: 90, min: 0, max: 180, step: 1 },
    ],
    resultLabels: { torque: 'Момент силы', arm: 'Плечо силы', sin: 'Синус угла' },
    howToUse: ['Введите силу в ньютонах.', 'Укажите длину плеча в метрах.', 'Задайте угол между силой и плечом.'],
    howItWorks:
      'τ = F · r · sin θ. Угол переводится в радианы явно. Произведение r·sin θ — это плечо силы, то есть расстояние от оси до линии действия силы; момент равен силе, умноженной на него.',
    example: 'Сила 50 Н на плече 0,3 м под прямым углом даёт момент 15 Н·м; под углом 30° — вдвое меньше, 7,5 Н·м.',
    faq: [
      { q: 'Чем это отличается от конвертера момента?', a: 'Конвертер переводит уже известный момент из ньютон-метров в килограмм-силу-метры и обратно. Здесь момент вычисляется из силы, плеча и угла — это разные задачи.' },
      { q: 'Почему при нулевом угле момент равен нулю?', a: 'Потому что сила направлена вдоль рычага и только тянет его, не поворачивая. Синус нуля равен нулю, и здесь этот нуль точный, а не остаток двоичной арифметики.' },
      { q: 'Что такое плечо силы?', a: 'Расстояние от оси вращения до линии действия силы, то есть r·sin θ. Момент равен силе, умноженной на это расстояние, и растёт вместе с ним.' },
      { q: 'При каком угле момент наибольший?', a: 'При 90 градусах: синус равен единице, и вся сила работает на поворот. Именно поэтому ключ держат перпендикулярно.' },
    ],
    relatedCalculatorIds: ['physics-power', 'newton-force', 'work'],
  },
};
