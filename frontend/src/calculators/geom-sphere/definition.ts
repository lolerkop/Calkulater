import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomSphereCopyEn } from './copy.en';
import { geomSphereCopyUk } from './copy.uk';
import { geomSphereCopyDe } from './copy.de';
import { geomSphereReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-sphere",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomSphereCopyEn, uk: geomSphereCopyUk, de: geomSphereCopyDe },
  referenceCases: geomSphereReferenceCases,
  publishedExample: { inputs: { unit: 'm', mode: 'radius', r: 3 }, expected: ["113,1 м³"] },
  presentation: {
    id: "geom-sphere",
    name: "Калькулятор шара",
    slug: "sphere",
    fullPath: "/geometry/sphere/",
    category: "geometry",
    icon: "globe",
    popularity: 43,
    isNew: false,
    shortDescription: "Объём и поверхность шара по радиусу, диаметру или объёму.",
    longDescription:
      "Решает шар от любой известной величины: радиуса, диаметра или самого объёма. Обратный ход нужен чаще, чем кажется — по объёму ёмкости узнают её радиус, чтобы понять, пройдёт ли она в люк. Объём выводится в кубе выбранной единицы, поверхность — в квадрате: это разные степени одной и той же длины, и переводить их одинаковым множителем нельзя.",
    seoTitle: "Калькулятор шара — объём и площадь поверхности",
    seoDescription: "Рассчитайте объём и площадь поверхности шара по радиусу, диаметру или известному объёму.",
    h1: "Калькулятор шара",
    keywords: ["калькулятор шара", "объём шара", "площадь поверхности шара", "радиус по объёму"],
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
          { value: 'volume', label: 'объём' },
        ],
      },
      { name: 'r', label: 'Радиус', type: 'number', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'radius' } },
      { name: 'd', label: 'Диаметр', type: 'number', defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'diameter' } },
      { name: 'volume', label: 'Объём', type: 'number', defaultValue: 113.1, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'volume' } },
    ],
    resultLabels: {
      "volume": "Объём",
      "surface": "Площадь поверхности",
      "radius": "Радиус",
      "diameter": "Диаметр",
    },
    howToUse: ["Выберите единицу длины.", "Укажите, что известно: радиус, диаметр или объём.", "Введите значение и прочитайте остальные."],
    howItWorks: "V = (4 ÷ 3) · π · r³ и S = 4 · π · r²; радиус по объёму находится как кубический корень из 3V ÷ (4π).",
    example: "Шар радиусом 3 м имеет объём 113,097 м³ и поверхность 113,097 м².",
    faq: [
      { q: "Почему объём и поверхность при радиусе 3 совпали?", a: "Это совпадение чисел, а не величин: 4πr² и (4/3)πr³ равны ровно при r = 3. Единицы у них разные — квадрат и куб длины." },
      { q: "Как найти радиус, зная объём?", a: "Выберите режим по объёму: радиус извлекается кубическим корнем из 3V ÷ (4π), после чего считается поверхность." },
      { q: "Чем шар отличается от сферы?", a: "Сфера — только поверхность, шар — тело вместе с внутренностью. Объём есть у шара, площадь поверхности — у ограничивающей его сферы." },
      { q: "Учитывается ли толщина стенки ёмкости?", a: "Нет. Расчёт идеальный: считается геометрическое тело, а не бак с материалом стенок." },
    ],
    relatedCalculatorIds: ["geom-cylinder", "geom-cone", "geom-circle"],
  },
};
