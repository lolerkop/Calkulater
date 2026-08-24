import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomCircleCopyEn } from './copy.en';
import { geomCircleCopyUk } from './copy.uk';
import { geomCircleReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-circle",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomCircleCopyEn, uk: geomCircleCopyUk },
  referenceCases: geomCircleReferenceCases,
  publishedExample: { inputs: { mode: 'radius', unit: 'm', r: 3 }, expected: ["28,274 м²"] },
  presentation: {
    id: "geom-circle",
    name: "Калькулятор круга",
    slug: "circle",
    fullPath: "/geometry/circle/",
    category: "geometry",
    icon: "circle",
    popularity: 53,
    isNew: false,
    shortDescription: "Площадь, длина окружности, диаметр и радиус по любой из них.",
    longDescription:
      "Решает круг от любой известной величины: радиуса, диаметра, длины окружности или площади. Это важнее, чем кажется: у трубы или бочки обычно известен диаметр, у клумбы — длина бортика, а у заготовки — площадь, и каждый раз считать вручную приходится в свою сторону. Число π берётся с полной точностью, а не как 3,14, поэтому длина окружности не «уезжает» на третьем знаке.",
    seoTitle: "Калькулятор круга — площадь, длина окружности, радиус, диаметр",
    seoDescription: "Рассчитайте площадь круга, длину окружности, радиус или диаметр по любой известной величине.",
    h1: "Калькулятор круга",
    keywords: ["калькулятор круга", "площадь круга", "длина окружности", "радиус по площади"],
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
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'radius',
        options: [
          { value: 'radius', label: 'радиус' },
          { value: 'diameter', label: 'диаметр' },
          { value: 'circumference', label: 'длина окружности' },
          { value: 'area', label: 'площадь' },
        ],
      },
      { name: 'r', label: 'Радиус', type: 'number', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'radius' } },
      { name: 'd', label: 'Диаметр', type: 'number', defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'diameter' } },
      { name: 'c', label: 'Длина окружности', type: 'number', defaultValue: 18.85, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'circumference' } },
      { name: 'area', label: 'Площадь', type: 'number', defaultValue: 28.27, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'area' } },
    ],
    resultLabels: {
      area: "Площадь",
      radius: "Радиус",
      diameter: "Диаметр",
      circumference: "Длина окружности",
    },
    howToUse: ["Выберите единицу длины.", "Укажите, какая величина известна.", "Введите её и прочитайте остальные три."],
    howItWorks: "S = πr², C = 2πr, d = 2r; радиус по длине окружности находится как r = C ÷ 2π, а по площади — как r = √(S ÷ π).",
    example: "Круг радиусом 3 м имеет площадь 28,274 м² и длину окружности 18,85 м.",
    faq: [
      { q: "Какое значение π используется?", a: "Полное машинное значение, а не 3,14. При радиусе в несколько метров разница видна уже в сантиметрах длины окружности." },
      { q: "Чем радиус отличается от диаметра при вводе?", a: "Диаметр вдвое больше радиуса, поэтому если перепутать их местами, площадь отличится вчетверо. Режим ввода выбирается явно именно поэтому." },
      { q: "Можно ли получить радиус из площади?", a: "Да, выберите режим по площади: радиус находится как корень из отношения площади к π." },
      { q: "Что означает длина окружности?", a: "Это длина замкнутой линии по краю круга — то, что вы намеряете рулеткой вокруг трубы или бочки." },
    ],
    relatedCalculatorIds: ["geom-square", "geom-rectangle", "geom-triangle"],
  },
};
