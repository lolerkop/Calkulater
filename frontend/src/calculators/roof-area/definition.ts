// Площадь крыши по габаритам основания и уклону.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { roofAreaCopyEn } from './copy.en';
import { roofAreaCopyUk } from './copy.uk';
import { roofAreaReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'roof-area',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: roofAreaCopyEn, uk: roofAreaCopyUk },
  referenceCases: roofAreaReferenceCases,
  publishedExample: { inputs: { mode: 'gable', length: 10, width: 8, slopeMode: 'degrees', angle: 30 }, expected: ['92,376 м²'] },
  presentation: {
    id: 'roof-area',
    name: 'Калькулятор площади крыши',
    slug: 'roof-area',
    fullPath: '/building/roof-area/',
    category: 'building',
    icon: 'wall',
    popularity: 49,
    isNew: false,
    shortDescription: 'Площадь скатов по размерам основания и уклону, в градусах или процентах.',
    longDescription:
      'Считает площадь крыши по габаритам основания и уклону. Полезно знать до расчёта: у любой крыши постоянного уклона над одним и тем же основанием площадь одна и та же — основание, делённое на косинус угла. Односкатная, двускатная и вальмовая различаются не итогом, а тем, на сколько плоскостей он делится, поэтому выбор формы меняет разбивку, а не сумму. Уклон задаётся градусами или процентами: процент переводится в угол через арктангенс, а не приравнивается к нему.',
    seoTitle: 'Калькулятор площади крыши — скаты по уклону',
    seoDescription: 'Рассчитайте площадь крыши по длине и ширине основания и уклону в градусах или процентах.',
    h1: 'Калькулятор площади крыши',
    keywords: ['площадь крыши', 'калькулятор кровли', 'площадь ската', 'уклон крыши'],
    fields: [
      {
        name: 'mode', label: 'Форма крыши', type: 'select', defaultValue: 'gable',
        options: [
          { value: 'shed', label: 'односкатная' },
          { value: 'gable', label: 'двускатная' },
          { value: 'hip', label: 'вальмовая' },
        ],
      },
      { name: 'length', label: 'Длина основания, м', type: 'number', defaultValue: 10, min: 0, step: 0.1 },
      { name: 'width', label: 'Ширина основания, м', type: 'number', defaultValue: 8, min: 0, step: 0.1 },
      {
        name: 'slopeMode', label: 'Как задан уклон', type: 'select', defaultValue: 'degrees',
        options: [
          { value: 'degrees', label: 'в градусах' },
          { value: 'percent', label: 'в процентах' },
        ],
      },
      { name: 'angle', label: 'Уклон, градусов', type: 'number', defaultValue: 30, min: 0, max: 89, step: 1, showIf: { field: 'slopeMode', equals: 'degrees' } },
      { name: 'slopePercent', label: 'Уклон, %', type: 'number', defaultValue: 30, min: 0, step: 1, showIf: { field: 'slopeMode', equals: 'percent' } },
    ],
    resultLabels: {
      total: 'Площадь крыши', slope: 'Площадь одного ската', slopes: 'Скатов',
      plan: 'Площадь основания', angle: 'Уклон', check: 'Проверьте данные',
    },
    howToUse: ['Выберите форму крыши.', 'Введите длину и ширину основания.', 'Задайте уклон в градусах или процентах.'],
    howItWorks:
      'Площадь основания делится на косинус угла уклона: скат длиннее своей проекции ровно во столько раз. Угол переводится в радианы явно, а уклон в процентах — в угол через арктангенс. При 90 градусах скат вертикален, косинус обращается в нуль, и площади не существует.',
    example: 'Двускатная крыша над основанием 10 × 8 м при уклоне 30° имеет площадь 92,376 м² — по 46,188 м² на скат.',
    faq: [
      { q: 'Почему у односкатной и двускатной крыши площадь одинаковая?', a: 'Потому что она зависит только от площади основания и уклона. Двускатная делит ту же площадь на два ската вдвое меньших — сумма не меняется.' },
      { q: 'Чем уклон в процентах отличается от уклона в градусах?', a: 'Процент — это отношение подъёма к заложению, умноженное на сто. Угол получается через арктангенс: уклон 100 % — это 45°, а не 90°.' },
      { q: 'Учитываются ли свесы?', a: 'Нет. Вводите габариты того прямоугольника, который крыша реально накрывает, включая свесы, если хотите их посчитать.' },
      { q: 'Почему для вальмовой крыши не показана площадь одного ската?', a: 'Потому что она зависит от длины конька, а её здесь не спрашивают. Общая площадь при этом верна: она определяется основанием и уклоном.' },
    ],
    relatedCalculatorIds: ['insulation', 'brick-calculator', 'room-volume'],
  },
};
