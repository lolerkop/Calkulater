import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bikeGearRatioCopyEn } from './copy.en';
import { bikeGearRatioCopyUk } from './copy.uk';
import { bikeGearRatioCopyDe } from './copy.de';
import { bikeGearRatioReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bike-gear-ratio",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: bikeGearRatioCopyEn, uk: bikeGearRatioCopyUk, de: bikeGearRatioCopyDe },
  referenceCases: bikeGearRatioReferenceCases,
  publishedExample: { inputs: { chainring: 50, sprocket: 25, wheelCircumference: 0 }, expected: ["2,00"] },
  presentation: {
    id: "bike-gear-ratio",
    name: "Калькулятор велосипедной передачи",
    slug: "bike-gear-ratio",
    fullPath: "/sport/bike-gear-ratio/",
    category: "sport",
    icon: "bike",
    popularity: 41,
    isNew: false,
    shortDescription: "Передаточное отношение велосипеда и развитие метража за оборот педалей.",
    longDescription:
      "Считает передаточное отношение — во сколько раз заднее колесо обгоняет педали. Отношение 2 означает, что за один оборот педалей колесо делает два. Если задать длину окружности колеса, добавляется развитие: сколько метров велосипед проезжает за оборот педалей — величина, по которой передачи и сравнивают между собой, потому что она уже учитывает размер колеса и не зависит от того, какими зубьями это отношение набрано.",
    seoTitle: "Калькулятор велосипедной передачи — передаточное отношение и развитие",
    seoDescription: "Рассчитайте передаточное отношение велосипеда по числу зубьев звёзд и развитие метража за оборот педалей.",
    h1: "Калькулятор велосипедной передачи",
    keywords: ["калькулятор велосипедной передачи", "передаточное отношение велосипеда", "развитие метража", "звёзды велосипеда"],
    fields: [
      { name: 'chainring', label: 'Зубьев на передней звезде', type: 'number', defaultValue: 50, min: 1, max: 200, step: 1 },
      { name: 'sprocket', label: 'Зубьев на задней звезде', type: 'number', defaultValue: 25, min: 1, max: 200, step: 1 },
      { name: 'wheelCircumference', label: 'Длина окружности колеса, м', type: 'number', defaultValue: 0, min: 0, step: 0.01, optional: true },
    ],
    resultLabels: {
      "ratio": "Передаточное отношение",
      "development": "Развитие за оборот",
      "wheelTurns": "Оборотов колеса на оборот педалей",
    },
    howToUse: ["Введите число зубьев на передней и задней звёздах.", "При желании укажите длину окружности колеса.", "Прочитайте отношение и развитие метража."],
    howItWorks: "Передаточное отношение = зубья передней звезды ÷ зубья задней. Развитие = отношение × длина окружности колеса.",
    example: "Звёзды 50 и 25 дают отношение 2,00: за оборот педалей колесо делает два оборота.",
    faq: [
      { q: "Что означает передаточное отношение?", a: "Во сколько раз колесо обгоняет педали. Отношение 4 — тяжёлая передача для скорости по ровному, отношение около 1 — лёгкая для подъёма." },
      { q: "Зачем нужно развитие?", a: "Оно переводит отношение в метры и позволяет сравнивать передачи на велосипедах с разными колёсами. Одно и то же отношение на 26 и 29 дюймах даёт разный метраж." },
      { q: "Где взять длину окружности колеса?", a: "Проще всего измерить: отметьте точку на покрышке, прокатите велосипед на один оборот и замерьте расстояние. Так учтётся и давление, и посадка покрышки." },
      { q: "Почему число зубьев должно быть целым?", a: "Потому что зубья считаются штуками. Дробное значение означает опечатку, и калькулятор о ней сообщает." },
    ],
    relatedCalculatorIds: ["running-pace-calculator", "speed-distance-time", "convert-speed"],
  },
};
