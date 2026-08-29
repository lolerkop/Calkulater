import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomTriangleCopyEn } from './copy.en';
import { geomTriangleCopyUk } from './copy.uk';
import { geomTriangleCopyDe } from './copy.de';
import { geomTriangleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-triangle",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomTriangleCopyEn, uk: geomTriangleCopyUk, de: geomTriangleCopyDe },
  referenceCases: geomTriangleReferenceCases,
  publishedExample: { inputs: { mode: 'sss', unit: 'm', a: 3, b: 4, c: 5 }, expected: ["6 м²"] },
  presentation: {
    id: "geom-triangle",
    name: "Калькулятор треугольника",
    slug: "triangle",
    fullPath: "/geometry/triangle/",
    category: "geometry",
    icon: "triangle",
    popularity: 50,
    isNew: false,
    shortDescription: "Площадь и периметр треугольника по трём сторонам или по основанию и высоте.",
    longDescription:
      "Считает треугольник двумя способами: по трём сторонам — формулой Герона, по основанию и высоте — половиной их произведения. Три стороны сначала проверяются неравенством треугольника: если сумма любых двух не превышает третью, фигуры не существует, и калькулятор говорит об этом прямо, а не выдаёт ноль, который легко принять за ответ. Заодно определяется вид треугольника — прямоугольный, остроугольный или тупоугольный.",
    seoTitle: "Калькулятор треугольника — площадь по трём сторонам и по высоте",
    seoDescription: "Рассчитайте площадь и периметр треугольника по трём сторонам (формула Герона) или по основанию и высоте.",
    h1: "Калькулятор треугольника",
    keywords: ["калькулятор треугольника", "площадь треугольника", "формула герона", "периметр треугольника"],
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
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'sss',
        options: [
          { value: 'sss', label: 'три стороны' },
          { value: 'baseHeight', label: 'основание и высота' },
        ],
      },
      { name: 'a', label: 'Сторона a', type: 'number', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sss' } },
      { name: 'b', label: 'Сторона b', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sss' } },
      { name: 'c', label: 'Сторона c', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sss' } },
      { name: 'base', label: 'Основание', type: 'number', defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'baseHeight' } },
      { name: 'height', label: 'Высота', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'baseHeight' } },
    ],
    resultLabels: {
      area: "Площадь",
      perimeter: "Периметр",
      kind: "Вид треугольника",
      base: "Основание",
      height: "Высота",
    },
    howToUse: ["Выберите единицу длины.", "Укажите, что известно: три стороны или основание с высотой.", "Введите значения и прочитайте площадь."],
    howItWorks: "По трём сторонам площадь считается по формуле Герона S = √(p(p−a)(p−b)(p−c)), где p — полупериметр; по основанию и высоте S = ½ · a · h.",
    example: "Треугольник со сторонами 3, 4 и 5 м прямоугольный: его площадь 6 м², периметр 12 м.",
    faq: [
      { q: "Почему некоторые наборы сторон отклоняются?", a: "Три отрезка образуют треугольник только тогда, когда сумма любых двух больше третьего. Стороны 1, 2 и 3 лежат на одной прямой — фигуры нет, и площадь у неё не нулевая, а неопределённая." },
      { q: "Что такое формула Герона?", a: "Способ найти площадь по трём сторонам без углов и высоты: сначала считается полупериметр, затем корень из произведения четырёх разностей." },
      { q: "Как определяется вид треугольника?", a: "Сравнением квадрата большей стороны с суммой квадратов двух других: равно — прямоугольный, меньше — остроугольный, больше — тупоугольный." },
      { q: "Нужно ли вводить высоту к конкретной стороне?", a: "Да, высота должна быть опущена именно на введённое основание — иначе половина произведения даст не ту площадь." },
    ],
    relatedCalculatorIds: ["geom-right-triangle", "geom-square", "geom-rectangle"],
  },
};
