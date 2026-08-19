import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomRegularPolygonCopyEn } from './copy.en';
import { geomRegularPolygonCopyUk } from './copy.uk';
import { geomRegularPolygonReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-regular-polygon",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomRegularPolygonCopyEn, uk: geomRegularPolygonCopyUk },
  referenceCases: geomRegularPolygonReferenceCases,
  publishedExample: { inputs: { unit: 'cm', n: 6, side: 2 }, expected: ["10,392 см²"] },
  presentation: {
    id: "geom-regular-polygon",
    name: "Калькулятор правильного многоугольника",
    slug: "regular-polygon",
    fullPath: "/geometry/regular-polygon/",
    category: "geometry",
    icon: "hexagon",
    popularity: 41,
    isNew: true,
    shortDescription: "Площадь, периметр, апофема и углы правильного многоугольника.",
    longDescription:
      "Считает правильный многоугольник — фигуру с равными сторонами и равными углами: шестигранную плитку, восьмиугольную беседку, треугольный или пятиугольный участок. Число сторон обязано быть целым и не меньше трёх: из двух отрезков многоугольника не построить, и дробное число сторон смысла не имеет. Внутренний угол выводится в градусах, хотя площадь считается через тангенс в радианах — путать эти две меры нельзя.",
    seoTitle: "Калькулятор правильного многоугольника — площадь и периметр",
    seoDescription: "Рассчитайте площадь, периметр, апофему и внутренний угол правильного многоугольника по числу сторон и длине стороны.",
    h1: "Калькулятор правильного многоугольника",
    keywords: ["калькулятор правильного многоугольника", "площадь шестиугольника", "площадь пятиугольника", "апофема"],
    fields: [
      {
        name: 'unit', label: 'Единица длины', type: 'select', defaultValue: 'cm',
        options: [
          { value: 'mm', label: 'миллиметры' },
          { value: 'cm', label: 'сантиметры' },
          { value: 'm', label: 'метры' },
        ],
      },
      { name: 'n', label: 'Число сторон', type: 'number', defaultValue: 6, min: 3, max: 1000, step: 1 },
      { name: 'side', label: 'Длина стороны', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
    ],
    resultLabels: {
      "area": "Площадь",
      "perimeter": "Периметр",
      "apothem": "Апофема",
      "angle": "Внутренний угол",
    },
    howToUse: ["Выберите единицу длины.", "Укажите число сторон — целое, не меньше трёх.", "Введите длину стороны и прочитайте площадь."],
    howItWorks: "S = n · a² ÷ (4 · tg(π ÷ n)), периметр P = n · a, апофема m = a ÷ (2 · tg(π ÷ n)); внутренний угол равен (n − 2) · 180° ÷ n.",
    example: "Правильный шестиугольник со стороной 2 см имеет площадь 10,392 см² и внутренний угол 120°.",
    faq: [
      { q: "Почему нельзя задать две стороны?", a: "Двумя отрезками замкнутую фигуру не построить: многоугольник начинается с трёх сторон, и это не ограничение калькулятора, а определение." },
      { q: "Что такое апофема?", a: "Расстояние от центра до середины стороны — радиус вписанной окружности. По нему удобно проверять, поместится ли фигура в отверстие." },
      { q: "Почему число сторон должно быть целым?", a: "Сторона либо есть, либо её нет: половины стороны у многоугольника не бывает, поэтому дробное значение отклоняется." },
      { q: "В каких единицах выводится угол?", a: "В градусах. Внутри площадь считается через тангенс от радиан, но в ответ угол переводится в привычные градусы." },
    ],
    relatedCalculatorIds: ["geom-triangle", "geom-square", "geom-circle"],
  },
};
