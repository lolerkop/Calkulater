import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { geomCubeCopyEn } from './copy.en';
import { geomCubeCopyUk } from './copy.uk';
import { geomCubeCopyDe } from './copy.de';
import { geomCubeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "geom-cube",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: geomCubeCopyEn, uk: geomCubeCopyUk, de: geomCubeCopyDe },
  referenceCases: geomCubeReferenceCases,
  publishedExample: { inputs: { unit: 'cm', mode: 'side', side: 3 }, expected: ["27 см³"] },
  presentation: {
    id: "geom-cube",
    name: "Калькулятор куба",
    slug: "geom-cube",
    fullPath: "/geometry/geom-cube/",
    category: "geometry",
    icon: "cuboid",
    popularity: 26,
    isNew: false,
    shortDescription: "Объём, площадь поверхности и диагонали куба по ребру, объёму или площади.",
    longDescription:
      "Считает куб по любой из трёх известных величин: ребру, объёму или площади поверхности. В обратных режимах сначала восстанавливается ребро — a = ∛V или a = √(S/6), — и дальше расчёт общий. Именно ребро и показано главным результатом в этих режимах: величина, которую вы только что ввели сами, ответом не является. Диагоналей у куба две, и путать их не стоит: диагональ грани a√2 лежит в плоскости стороны, а диагональ куба a√3 проходит через тело от вершины к противоположной — она длиннее и определяет, пролезет ли предмет внутрь.",
    seoTitle: "Калькулятор куба: объём, площадь и диагональ",
    seoDescription: "Рассчитайте объём, площадь поверхности, диагонали и сумму рёбер куба по ребру, объёму или площади поверхности.",
    h1: "Калькулятор куба",
    keywords: ["калькулятор куба", "объём куба", "площадь поверхности куба", "диагональ куба"],
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
          { value: 'side', label: 'ребро' },
          { value: 'volume', label: 'объём' },
          { value: 'area', label: 'площадь поверхности' },
        ],
      },
      { name: 'side', label: 'Ребро', type: 'number', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'side' } },
      { name: 'volume', label: 'Объём', type: 'number', defaultValue: 64, min: 0, step: 1, showIf: { field: 'mode', equals: 'volume' } },
      { name: 'area', label: 'Площадь поверхности', type: 'number', defaultValue: 96, min: 0, step: 1, showIf: { field: 'mode', equals: 'area' } },
    ],
    resultLabels: {
      "volume": "Объём",
      "side": "Ребро",
      "area": "Площадь поверхности",
      "diagonal": "Диагональ куба",
      "faceDiagonal": "Диагональ грани",
      "edges": "Сумма рёбер",
    },
    howToUse: [
      "Выберите единицу длины.",
      "Укажите, какая величина известна.",
      "Введите её значение.",
      "Остальные величины куба посчитаются сразу.",
    ],
    howItWorks:
      "Объём V = a³, площадь поверхности S = 6a², диагональ грани a√2, диагональ куба a√3, сумма рёбер 12a. В обратных режимах ребро восстанавливается как a = ∛V или a = √(S/6).",
    example: "У куба с ребром 3 см объём равен 27 см³, площадь поверхности — 54 см², а диагональ — 5,196 см.",
    faq: [
      { q: "Чем диагональ куба отличается от диагонали грани?", a: "Диагональ грани a√2 лежит в плоскости стороны, а диагональ куба a√3 проходит сквозь тело от вершины к противоположной. Вторая длиннее, и именно она отвечает на вопрос, пролезет ли длинный предмет внутрь коробки." },
      { q: "Как найти ребро, если известен объём?", a: "Извлечь кубический корень: a = ∛V. Для объёма 64 см³ ребро равно 4 см. Выберите режим «объём», и калькулятор сделает это сам." },
      { q: "Зачем нужен куб, если есть калькулятор прямоугольного параллелепипеда?", a: "Куб — его частный случай, но у куба одна величина вместо трёх, и от неё считаются обратные задачи: по объёму или площади сразу находится ребро. У общего случая такой однозначной обратной задачи нет." },
      { q: "Во сколько раз вырастет объём, если удвоить ребро?", a: "В восемь раз, а площадь поверхности — вчетверо. Объём растёт как куб линейного размера, площадь — как квадрат; отсюда и правило, что крупные тела остывают медленнее мелких." },
      { q: "Как перевести результат в другие единицы?", a: "Смените единицу длины перед расчётом. Пересчитывать готовый объём вручную рискованно: в кубическом сантиметре не 10, а 1000 кубических миллиметров." },
    ],
    relatedCalculatorIds: ["geom-cuboid", "geom-square", "geom-sphere"],
  },
};
