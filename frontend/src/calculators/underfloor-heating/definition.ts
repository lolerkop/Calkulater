import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { underfloorHeatingCopyEn } from './copy.en';
import { underfloorHeatingCopyUk } from './copy.uk';
import { underfloorHeatingCopyDe } from './copy.de';
import { underfloorHeatingReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "underfloor-heating",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: underfloorHeatingCopyEn, uk: underfloorHeatingCopyUk, de: underfloorHeatingCopyDe },
  referenceCases: underfloorHeatingReferenceCases,
  publishedExample: { inputs: { area: 20, step: 0.15, loopMax: 90, edgeZone: 4, edgeStep: 0.1, waste: 10 }, expected: ["161,33 м"] },
  presentation: {
    id: "underfloor-heating",
    name: "Калькулятор трубы тёплого пола",
    slug: "teplyy-pol",
    fullPath: "/building/teplyy-pol/",
    category: "building",
    icon: "flame",
    popularity: 50,
    isNew: false,
    shortDescription: "Длина трубы и число петель для водяного тёплого пола.",
    longDescription:
      "Считает, сколько трубы забирает пол и на сколько петель её надо разделить. Краевая зона укладывается плотнее остальной — вдоль наружной стены потери больше, — поэтому площадь делится надвое со своим шагом для каждой части, а не усредняется в одно число. Среднее выглядело бы правдоподобно и оставило бы холодную полосу вдоль окна. Число петель округляется вверх, потому что труба длиннее предела гидравлически не работает, а «2,3 петли» означает три.",
    seoTitle: "Калькулятор трубы тёплого пола: длина и петли",
    seoDescription: "Посчитайте длину трубы и число петель тёплого пола по площади, шагу укладки и краевой зоне.",
    h1: "Калькулятор трубы тёплого пола",
    keywords: ["тёплый пол расчёт", "длина трубы тёплого пола", "длина петли отопления", "шаг укладки трубы"],
    fields: [
      { name: 'area', label: 'Площадь обогрева, м²', type: 'number', defaultValue: 20, min: 0, step: 1 },
      { name: 'step', label: 'Шаг укладки, м', type: 'number', defaultValue: 0.15, min: 0, step: 0.05 },
      { name: 'loopMax', label: 'Предельная длина петли, м', type: 'number', defaultValue: 90, min: 0, step: 5 },
      { name: 'edgeZone', label: 'Площадь краевой зоны, м²', type: 'number', defaultValue: 4, min: 0, step: 1 },
      { name: 'edgeStep', label: 'Шаг в краевой зоне, м', type: 'number', defaultValue: 0.1, min: 0, step: 0.05 },
      { name: 'waste', label: 'Запас, %', type: 'number', defaultValue: 10, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "length": "Длина трубы",
      "loops": "Петель",
      "perLoop": "На петлю",
      "area": "Площадь",
      "mainArea": "Основная зона",
      "edgeArea": "Краевая зона",
    },
    howToUse: [
      "Введите площадь обогрева, а не всю комнату, если часть занята мебелью.",
      "Введите шаг укладки; 150 мм — распространённый выбор.",
      "Введите площадь краевой зоны и её более плотный шаг.",
      "Задайте предельную длину петли, которую позволяют коллектор и насос.",
    ],
    howItWorks:
      "Длина трубы — это основная площадь, делённая на свой шаг, плюс краевая зона, делённая на свой, всё увеличенное на запас. Петель — эта длина, делённая на предел и округлённая вверх.",
    example: "20 м² с шагом 150 мм и краевой зоной 4 м² с шагом 100 мм забирают 161,33 м трубы в двух петлях.",
    faq: [
      { q: "Почему краевая зона плотнее?", a: "Потому что у наружной стены и окна тепло уходит быстрее. Одинаковый шаг везде даёт ровную укладку и неровный пол." },
      { q: "Что ограничивает длину петли?", a: "Потеря давления. Свыше примерно 90–120 м для трубы 16 мм насос не проталкивает достаточно воды, и дальний конец петли остаётся холодным." },
      { q: "Считать ли всю комнату?", a: "Считайте то, что действительно обогреваете. Под встроенную кухонную мебель и ванну трубу обычно не кладут, и учтя их, вы купите лишнее." },
      { q: "Меняет ли шаг теплоотдачу?", a: "Да: более плотный шаг — это больше трубы на квадратный метр и больше тепла. Калькулятор даёт трубу для выбранного вами шага, а не шаг для нужной мощности." },
      { q: "Учтена ли стяжка?", a: "Нет. Объём стяжки считается отдельно по площади и толщине." },
    ],
    relatedCalculatorIds: ["screed-calculator", "heating-power", "room-volume"],
  },
};
