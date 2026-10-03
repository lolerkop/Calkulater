// Квадрат. Сторона задаётся напрямую, через площадь или через периметр.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { geomSquareCopyEn } from './copy.en';
import { geomSquareCopyUk } from './copy.uk';
import { geomSquareCopyDe } from './copy.de';
import { geomSquareCopyEs } from './copy.es';
import { geomSquareReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'geom-square',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomSquareCopyEn, uk: geomSquareCopyUk, de: geomSquareCopyDe, es: geomSquareCopyEs },
  referenceCases: geomSquareReferenceCases,
  publishedExample: { inputs: { mode: 'side', unit: 'cm', side: 5 }, expected: ['25 см²'] },
  presentation: {
    id: 'geom-square',
    name: 'Калькулятор квадрата',
    slug: 'square',
    fullPath: '/geometry/square/',
    category: 'geometry',
    icon: 'square',
    popularity: 52,
    isNew: false,
    shortDescription: 'Площадь, периметр и диагональ квадрата по любой из них.',
    longDescription:
      "Решает квадрат от той величины, которая известна: от стороны, от площади или от периметра. Все четыре величины возвращаются вместе, поэтому площадь пола в 49 м² сразу даёт и семиметровую стену, вдоль которой он идёт, и диагональ 9,9 м, которую вы бы намерили поперёк. Единица длины выбирается один раз и не пересчитывается — площадь просто выводится в её квадрате.",
    seoTitle: 'Калькулятор квадрата — площадь, периметр, диагональ',
    seoDescription: 'Рассчитайте площадь, периметр и диагональ квадрата по стороне, площади или периметру.',
    h1: 'Калькулятор квадрата',
    keywords: ['калькулятор квадрата', 'площадь квадрата', 'периметр квадрата', 'диагональ квадрата'],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'side',
        options: [
          { value: 'side', label: 'сторона' },
          { value: 'area', label: 'площадь' },
          { value: 'perimeter', label: 'периметр' },
        ],
      },
      { name: 'side', label: 'Сторона', type: 'number', unit: 'см', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'side' } },
      { name: 'area', label: 'Площадь', type: 'number', unit: 'см²', defaultValue: 25, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'area' } },
      { name: 'perimeter', label: 'Периметр', type: 'number', unit: 'см', defaultValue: 20, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'perimeter' } },
    ],
    resultLabels: {
      area: 'Площадь',
      side: 'Сторона',
      perimeter: 'Периметр',
      diagonal: 'Диагональ',
    },
    howToUse: [
  "Выберите сторону, площадь или периметр как исходный параметр квадрата.",
  "Все длины относятся к выбранной единице, площадь — к её квадрату.",
  "Введите положительное значение.",
  "Для перевода квадрата из см² в м² разделите площадь на 10 000 перед вводом, а не просто переключите единицу."
],
    howItWorks: "S = a², P = 4a, d = a√2. В обратных режимах a = √S или a = P/4; затем вычисляются остальные размеры. Единица площади — квадрат выбранной единицы длины.",
    example: "Квадратная комната со стороной 5 м имеет площадь 25 м², периметр 20 м и диагональ 7,071 м.",
    faq: [
  {
    "q": "Можно ли ввести площадь вместо стороны?",
    "a": "Да. Выберите режим по площади — сторона восстанавливается как квадратный корень, а периметр и диагональ считаются уже от неё."
  },
  {
    "q": "Почему площадь выводится в квадратных единицах?",
    "a": "Потому что площадь ими и измеряется. Если размеры введены в сантиметрах, площадь получается в квадратных сантиметрах, и пересчитывать её линейным множителем нельзя."
  },
  {
    "q": "Принимается ли нулевая сторона?",
    "a": "Нет. Квадрата без стороны не существует, поэтому калькулятор сообщает об ошибке, а не выдаёт правдоподобный ноль."
  },
  {
    "q": "Как находится диагональ?",
    "a": "По теореме Пифагора для двух равных сторон, что сводится к d = a√2."
  },
  {
    "q": "Что произойдёт с квадратом при удвоении стороны?",
    "a": "Периметр и диагональ увеличатся вдвое, а площадь — вчетверо: (2a)² = 4a². Поэтому запас по длине нельзя применять к площади тем же множителем."
  }
],
    relatedCalculatorIds: ["geom-rectangle", "geom-circle", "geom-triangle"],
      disclaimer: "Расчёт предполагает четыре равные стороны и четыре прямых угла. Площадь сама по себе не доказывает, что участок квадратный. Результаты округлены; вырожденный квадрат с нулевой стороной здесь исключён.",
  },
};
