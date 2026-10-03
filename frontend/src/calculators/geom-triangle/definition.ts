import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { geomTriangleCopyEn } from './copy.en';
import { geomTriangleCopyUk } from './copy.uk';
import { geomTriangleCopyDe } from './copy.de';
import { geomTriangleCopyEs } from './copy.es';
import { geomTriangleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-triangle",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomTriangleCopyEn, uk: geomTriangleCopyUk, de: geomTriangleCopyDe, es: geomTriangleCopyEs },
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
    shortDescription: "Площадь треугольника по трём сторонам или основанию и высоте; периметр и вид — только по трём сторонам.",
    longDescription:
      "Считает треугольник двумя способами: по трём сторонам — формулой Герона, по основанию и высоте — половиной их произведения. Три стороны сначала проверяются неравенством треугольника: если сумма любых двух не превышает третью, фигуры не существует, и калькулятор говорит об этом прямо, а не выдаёт ноль, который легко принять за ответ. Заодно определяется вид треугольника — прямоугольный, остроугольный или тупоугольный.",
    seoTitle: "Калькулятор треугольника — площадь по трём сторонам и по высоте",
    seoDescription: "Площадь треугольника по трём сторонам или основанию и высоте; периметр и вид — только по трём сторонам.",
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
      { name: 'a', label: 'Сторона a', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sss' } },
      { name: 'b', label: 'Сторона b', type: 'number', unit: 'см', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sss' } },
      { name: 'c', label: 'Сторона c', type: 'number', unit: 'см', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sss' } },
      { name: 'base', label: 'Основание', type: 'number', unit: 'см', defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'baseHeight' } },
      { name: 'height', label: 'Высота', type: 'number', unit: 'см', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'baseHeight' } },
    ],
    resultLabels: {
      area: "Площадь",
      perimeter: "Периметр",
      kind: "Вид треугольника",
      base: "Основание",
      height: "Высота",
    },
    howToUse: [
  "Выберите три стороны либо основание и соответствующую перпендикулярную высоту.",
  "Вводите положительные длины в одной единице.",
  "В первом режиме сумма любых двух сторон должна строго превышать третью; периметр и вид доступны только в этом режиме.",
  "Небольшая погрешность замера возле вырождения заметно меняет площадь."
],
    howItWorks: "Сначала p = (a+b+c)/2, затем S = √(p(p−a)(p−b)(p−c)). Под корнем четыре множителя: p и три разности. Вычисление использует алгебраически равносильное выражение S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16], сохраняя малые разности перед округлением. По основанию a и перпендикулярной высоте h: S = ah/2. Периметр a+b+c и классификация по квадратам сторон доступны только при трёх известных сторонах.",
    example: "Треугольник со сторонами 3, 4 и 5 м прямоугольный: его площадь 6 м², периметр 12 м.",
    faq: [
  {
    "q": "Почему некоторые наборы сторон отклоняются?",
    "a": "Для положительной площади сумма любых двух сторон должна строго превышать третью. При 1, 2 и 3 точки лежат на одной прямой: это вырожденный случай с нулевой площадью, исключённый из области данного калькулятора."
  },
  {
    "q": "Что такое формула Герона?",
    "a": "Сначала p = (a+b+c)/2, затем S = √(p(p−a)(p−b)(p−c)). Под корнем четыре множителя: p и три разности. Вычисление использует алгебраически равносильное выражение S = √[(a+b+c)(−a+b+c)(a−b+c)(a+b−c)/16], сохраняя малые разности перед округлением."
  },
  {
    "q": "Как определяется вид треугольника?",
    "a": "Сравнением квадрата большей стороны с суммой квадратов двух других: равно — прямоугольный, меньше — остроугольный, больше — тупоугольный."
  },
  {
    "q": "Нужно ли вводить высоту к конкретной стороне?",
    "a": "Да, высота должна быть опущена именно на введённое основание — иначе половина произведения даст не ту площадь."
  },
  {
    "q": "Можно ли узнать периметр по основанию и высоте?",
    "a": "Нет: у треугольников с одинаковыми основанием и высотой площадь одинакова, но боковые стороны могут различаться. Например, основание 6 и высота 4 дают площадь 12; симметричные боковые стороны равны 5, а при сдвиге вершины они меняются."
  }
],
    relatedCalculatorIds: ["geom-right-triangle", "geom-square", "geom-rectangle"],
      disclaimer: "Только плоские треугольники положительной площади. Коллинеарные стороны отклоняются по области этого расчёта. Вид определяется по введённым числам без допуска на погрешность измерений; он не подтверждает угол реального объекта. Результаты округлены.",
  },
};
