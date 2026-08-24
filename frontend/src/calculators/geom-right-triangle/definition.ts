import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomRightTriangleCopyEn } from './copy.en';
import { geomRightTriangleCopyUk } from './copy.uk';
import { geomRightTriangleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-right-triangle",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomRightTriangleCopyEn, uk: geomRightTriangleCopyUk },
  referenceCases: geomRightTriangleReferenceCases,
  publishedExample: { inputs: { mode: 'legs', unit: 'm', a: 3, b: 4 }, expected: ["5 м"] },
  presentation: {
    id: "geom-right-triangle",
    name: "Калькулятор прямоугольного треугольника",
    slug: "right-triangle",
    fullPath: "/geometry/right-triangle/",
    category: "geometry",
    icon: "triangle-right",
    popularity: 49,
    isNew: false,
    shortDescription: "Гипотенуза, катет, площадь и периметр по теореме Пифагора.",
    longDescription:
      "Достраивает прямоугольный треугольник в обе стороны: по двум катетам находит гипотенузу, по катету и гипотенузе — второй катет. Второй режим строже первого: гипотенуза обязана быть длиннее катета, иначе под корнем окажется отрицательное число, и результат перестанет существовать. Это тот самый расчёт, которым на стройке проверяют прямой угол по «правилу 3-4-5».",
    seoTitle: "Калькулятор прямоугольного треугольника — гипотенуза и катет",
    seoDescription: "Найдите гипотенузу по двум катетам или второй катет по гипотенузе, а также площадь и периметр прямоугольного треугольника.",
    h1: "Калькулятор прямоугольного треугольника",
    keywords: ["калькулятор прямоугольного треугольника", "теорема пифагора калькулятор", "найти гипотенузу", "найти катет"],
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
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'legs',
        options: [
          { value: 'legs', label: 'два катета' },
          { value: 'legHyp', label: 'катет и гипотенуза' },
        ],
      },
      { name: 'a', label: 'Катет a', type: 'number', defaultValue: 3, min: 0, step: 0.1 },
      { name: 'b', label: 'Катет b', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'legs' } },
      { name: 'c', label: 'Гипотенуза', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'legHyp' } },
    ],
    resultLabels: {
      hypotenuse: "Гипотенуза",
      otherLeg: "Второй катет",
      area: "Площадь",
      perimeter: "Периметр",
    },
    howToUse: ["Выберите единицу длины.", "Укажите, что известно: два катета или катет с гипотенузой.", "Введите значения и прочитайте недостающую сторону."],
    howItWorks: "a² + b² = c²; отсюда c = √(a² + b²) и b = √(c² − a²). Площадь прямоугольного треугольника равна половине произведения катетов.",
    example: "Катеты 3 и 4 м дают гипотенузу 5 м, площадь 6 м² и периметр 12 м.",
    faq: [
      { q: "Почему гипотенуза не может равняться катету?", a: "Гипотенуза — самая длинная сторона прямоугольного треугольника. При равенстве второй катет обратился бы в ноль, и треугольник выродился бы в отрезок." },
      { q: "Что такое правило 3-4-5?", a: "Приём разметки: если отложить 3 и 4 единицы по двум сторонам, а диагональ окажется ровно 5, угол между ними прямой. Это частный случай теоремы Пифагора." },
      { q: "Как считается площадь?", a: "Как половина произведения катетов: они перпендикулярны, поэтому один из них служит основанием, а второй — высотой." },
      { q: "Можно ли задать гипотенузу меньше катета?", a: "Нет. Такой набор не описывает треугольник, и калькулятор сообщает об этом вместо того, чтобы вернуть корень из отрицательного числа." },
    ],
    relatedCalculatorIds: ["geom-triangle", "geom-square", "geom-rectangle"],
  },
};
