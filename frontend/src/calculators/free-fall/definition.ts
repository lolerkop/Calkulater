import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { freeFallCopyEn } from './copy.en';
import { freeFallCopyUk } from './copy.uk';
import { freeFallReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "free-fall",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: freeFallCopyEn, uk: freeFallCopyUk },
  referenceCases: freeFallReferenceCases,
  publishedExample: { inputs: { mode: 'fromHeight', h: 20, t: 2, g: 9.80665 }, expected: ["19,806 м/с"] },
  presentation: {
    id: "free-fall",
    name: "Калькулятор свободного падения",
    slug: "svobodnoe-padenie",
    fullPath: "/physics/svobodnoe-padenie/",
    category: "physics",
    icon: "arrow-left-right",
    popularity: 32,
    isNew: true,
    shortDescription: "Скорость у земли и время падения по высоте или по времени.",
    longDescription:
      "Считает падение с двух концов: по высоте — сколько лететь и с какой скоростью тело встретит землю, по времени — какую высоту оно пролетит. Ускорение вынесено в поле, потому что на Луне оно 1,62, а на Марсе 3,72, и формула при этом та же. Сопротивление воздуха не учитывается, и это сказано прямо: для камня с десяти метров расхождение мало, для листа бумаги расчёт неверен совсем, а у парашютиста скорость выходит на предельную и дальше не растёт.",
    seoTitle: "Калькулятор свободного падения — скорость и время",
    seoDescription: "Рассчитайте скорость у земли и время свободного падения по высоте или по времени, с ускорением свободного падения полем.",
    h1: "Калькулятор свободного падения",
    keywords: ["свободное падение", "скорость падения", "время падения", "высота падения"],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'fromHeight',
        options: [
          { value: 'fromHeight', label: 'высота' },
          { value: 'fromTime', label: 'время' },
        ],
      },
      { name: 'h', label: 'Высота, м', type: 'number', defaultValue: 20, min: 0, step: 1, showIf: { field: 'mode', equals: 'fromHeight' } },
      { name: 't', label: 'Время падения, с', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'fromTime' } },
      { name: 'g', label: 'Ускорение свободного падения, м/с²', type: 'number', defaultValue: 9.80665, min: 0, step: 0.01 },
    ],
    resultLabels: {
      "speed": "Скорость у земли", "time": "Время падения", "height": "Высота падения",
      "kmh": "В километрах в час", "energy": "Кинетическая энергия на килограмм",
    },
    howToUse: [
      "Выберите, что известно: высота или время падения.",
      "Ускорение оставьте земным 9,80665 или задайте лунное 1,62 и марсианское 3,72.",
      "Скорость у земли — главный ответ в обоих режимах: режим меняет то, что известно, а не то, о чём спрашивают.",
      "Помните про воздух: для лёгких и парусящих тел расчёт завышает скорость.",
    ],
    howItWorks: "h = g·t²/2, откуда t = √(2h/g), а скорость у земли v = g·t.",
    example: "Падение с двадцати метров длится 2,02 секунды, скорость у земли 19,8 м/с — это 71 км/ч.",
    faq: [
      { q: "Зависит ли скорость падения от массы?", a: "Без воздуха — нет: пёрышко и камень падают одинаково, и формула массы не содержит. С воздухом разница огромна, но это уже не свободное падение." },
      { q: "Почему высота растёт как квадрат времени?", a: "Потому что скорость нарастает равномерно, а пройденный путь — это площадь под графиком скорости. За две секунды тело пролетает вчетверо больше, чем за одну." },
      { q: "Можно ли так считать прыжок с парашютом?", a: "Только первые секунды. Дальше сопротивление воздуха уравновешивает вес, скорость выходит на предельную около 55 м/с и больше не растёт, а расчёт продолжал бы её увеличивать." },
      { q: "Откуда берётся 9,80665?", a: "Это условное стандартное значение, принятое для расчётов. Реальное ускорение меняется от 9,78 на экваторе до 9,83 на полюсе и слегка убывает с высотой." },
    ],
    relatedCalculatorIds: ["projectile-motion", "acceleration", "potential-energy"],
  },
};
