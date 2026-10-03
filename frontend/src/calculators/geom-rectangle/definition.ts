import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { geomRectangleCopyEn } from './copy.en';
import { geomRectangleCopyUk } from './copy.uk';
import { geomRectangleCopyDe } from './copy.de';
import { geomRectangleCopyEs } from './copy.es';
import { geomRectangleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-rectangle",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: geomRectangleCopyEn, uk: geomRectangleCopyUk, de: geomRectangleCopyDe, es: geomRectangleCopyEs },
  referenceCases: geomRectangleReferenceCases,
  publishedExample: { inputs: { mode: 'sides', unit: 'cm', a: 8, b: 3 }, expected: ["24 см²"] },
  presentation: {
    id: "geom-rectangle",
    name: "Калькулятор прямоугольника",
    slug: "rectangle",
    fullPath: "/geometry/rectangle/",
    category: "geometry",
    icon: "rectangle-horizontal",
    popularity: 51,
    isNew: false,
    shortDescription: "Площадь, периметр и диагональ прямоугольника по сторонам или по площади.",
    longDescription:
      "Считает прямоугольник в обе стороны: по двум сторонам — площадь, периметр и диагональ, а по площади и одной стороне — вторую сторону. Второй режим отвечает на вопрос, который возникает при раскрое и планировке: «нужно 30 м² при ширине 6 м — какой длины кусок?». Диагональ считается по теореме Пифагора и полезна для проверки прямых углов при разметке.",
    seoTitle: "Калькулятор прямоугольника — площадь, периметр, диагональ",
    seoDescription: "Рассчитайте площадь, периметр и диагональ прямоугольника по двум сторонам или по площади и одной стороне.",
    h1: "Калькулятор прямоугольника",
    keywords: ["калькулятор прямоугольника", "площадь прямоугольника", "периметр прямоугольника", "диагональ прямоугольника"],
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
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'sides',
        options: [
          { value: 'sides', label: 'обе стороны' },
          { value: 'areaSide', label: 'площадь и одна сторона' },
        ],
      },
      { name: 'a', label: 'Первая сторона', type: 'number', unit: 'см', defaultValue: 8, min: 0, step: 0.1 },
      { name: 'b', label: 'Вторая сторона', type: 'number', unit: 'см', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'sides' } },
      { name: 'area', label: 'Площадь', type: 'number', unit: 'см²', defaultValue: 24, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'areaSide' } },
    ],
    resultLabels: {
      area: "Площадь",
      sideA: "Первая сторона",
      sideB: "Вторая сторона",
      perimeter: "Периметр",
      diagonal: "Диагональ",
    },
    howToUse: [
  "Для режима по сторонам измерьте две соседние стороны прямоугольника.",
  "Для режима по площади задайте положительную площадь и одну положительную сторону.",
  "Приведите длины к одной единице, площадь — к её квадрату.",
  "При проверке реальной разметки дополнительно проверьте форму и обе диагонали."
],
    howItWorks: "S = a · b, P = 2(a + b), d = √(a² + b²); во втором режиме вторая сторона находится как b = S ÷ a.",
    example: "Комната 8 × 3 м имеет площадь 24 м², периметр 22 м и диагональ 8,544 м.",
    faq: [
  {
    "q": "Зачем нужна диагональ?",
    "a": "Диагональ d = √(a²+b²) проверяет прямой угол между двумя соответствующими соседними сторонами, если они измерены независимо. Одного такого совпадения недостаточно для всех четырёх углов произвольного четырёхугольника. Для разметки проверьте также противоположные стороны, вторую диагональ и точность замеров."
  },
  {
    "q": "Как найти вторую сторону по площади?",
    "a": "Выберите режим «площадь и одна сторона»: вторая находится делением, а периметр и диагональ считаются уже от обеих."
  },
  {
    "q": "Что будет, если стороны равны?",
    "a": "Получится квадрат — расчёт это допускает и выдаёт корректные значения, просто фигура окажется частным случаем."
  },
  {
    "q": "Почему площадь нельзя перевести в другие единицы умножением на 100?",
    "a": "Потому что при переходе от метров к сантиметрам множитель длины возводится в квадрат: 1 м² — это 10 000 см², а не 100."
  },
  {
    "q": "Достаточно ли только площади для определения прямоугольника?",
    "a": "Нет. При площади 24 м² стороны могут быть 8 и 3 м или 6 и 4 м; периметры будут 22 и 20 м. Поэтому в обратном режиме требуется ещё одна сторона."
  }
],
    relatedCalculatorIds: ["geom-square", "geom-circle", "geom-triangle"],
      disclaimer: "Модель прямоугольника, а не произвольного четырёхугольника. Одна подходящая диагональ проверяет только угол между соответствующими двумя сторонами. Площадь покрытия не включает запас, швы или отходы; результаты округлены.",
  },
};
