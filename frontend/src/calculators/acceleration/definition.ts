import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { accelerationCopyEn } from './copy.en';
import { accelerationCopyUk } from './copy.uk';
import { accelerationReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'acceleration',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: accelerationCopyEn, uk: accelerationCopyUk },
  referenceCases: accelerationReferenceCases,
  publishedExample: {
    inputs: { mode: 'a', v0: 0, v: 27.8, t: 8.4 },
    expected: ['3,31 м/с²'],
  },
  presentation: {
    id: 'acceleration',
    name: 'Калькулятор ускорения',
    slug: 'acceleration',
    fullPath: '/physics/acceleration/',
    category: 'physics',
    icon: 'gauge',
    popularity: 23,
    isNew: false,
    shortDescription: 'Ускорение по изменению скорости и времени или конечная скорость по ускорению.',
    longDescription:
      'Равноускоренное движение связывает четыре величины — начальную скорость, конечную скорость, время и само ускорение, — и знание любых трёх даёт четвёртую. Калькулятор считает два направления, которые нужны на практике: ускорение по измеренному изменению скорости и скорость, набранную за заданное время. Путь рядом с ответом выводится через среднюю скорость, а не через ускорение: алгебраически это одно и то же, но такая запись не теряет точность в режиме, где ускорение само только что получено делением.',
    seoTitle: 'Калькулятор ускорения: скорость, время и путь',
    seoDescription:
      'Рассчитайте ускорение по начальной и конечной скорости и времени или конечную скорость по ускорению, вместе с путём и изменением скорости.',
    h1: 'Калькулятор ускорения',
    keywords: ['калькулятор ускорения', 'равноускоренное движение', 'конечная скорость', 'путь за время'],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'a',
        options: [
          { value: 'a', label: 'ускорение' },
          { value: 'v', label: 'конечную скорость' },
        ],
      },
      { name: 'v0', label: 'Начальная скорость, м/с', type: 'number', defaultValue: 0, signed: true, step: 1 },
      { name: 'v', label: 'Конечная скорость, м/с', type: 'number', defaultValue: 27.8, signed: true, step: 1, showIf: { field: 'mode', equals: 'a' } },
      { name: 'a', label: 'Ускорение, м/с²', type: 'number', defaultValue: 3.5, signed: true, step: 0.5, showIf: { field: 'mode', equals: 'v' } },
      { name: 't', label: 'Время, с', type: 'number', defaultValue: 8.4, min: 0, step: 0.5 },
    ],
    resultLabels: {
      acceleration: 'Ускорение',
      finalSpeed: 'Конечная скорость',
      delta: 'Изменение скорости',
      distance: 'Пройденный путь',
      time: 'Время',
    },
    howToUse: [
      'Выберите, что ищете: ускорение или конечную скорость.',
      'Введите начальную скорость в метрах в секунду.',
      'Введите конечную скорость либо ускорение, если ищете скорость.',
      'Укажите время, за которое произошло изменение.',
    ],
    howItWorks:
      'Ускорение a = (v − v₀) ÷ t, обратная связь даёт v = v₀ + a × t. Путь считается по средней скорости: s = (v₀ + v) ÷ 2 × t.',
    example: 'Разгон с места до 27,8 м/с за 8,4 секунды — это 3,31 м/с² и 116,76 метра пути.',
    faq: [
      {
        q: 'Может ли ускорение получиться отрицательным?',
        a: 'Да, и это торможение. Отрицательный результат означает, что конечная скорость ниже начальной; с вводом при этом всё в порядке.',
      },
      {
        q: 'Как перевести км/ч в м/с?',
        a: 'Разделить на 3,6. Сто километров в час — это 27,78 м/с, поэтому стандартный разгон «до сотни» считают именно от этого числа.',
      },
      {
        q: 'Почему путь считается через среднюю скорость?',
        a: 'При равноускоренном движении полусумма начальной и конечной скоростей и есть настоящая средняя за весь промежуток, поэтому умножение её на время даёт точный путь.',
      },
      {
        q: 'Подходит ли расчёт, если ускорение не постоянно?',
        a: 'Ускорение получится средним за промежуток, и как сводная величина оно верно. А вот путь предполагает равномерное изменение и разойдётся с истиной, если разгон шёл неровно.',
      },
    ],
    relatedCalculatorIds: ['speed-distance-time', 'newton-force', 'kinetic-energy'],
  },
};
