import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { specificHeatCopyEn } from './copy.en';
import { specificHeatCopyUk } from './copy.uk';
import { specificHeatCopyDe } from './copy.de';
import { specificHeatReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "specific-heat",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: specificHeatCopyEn, uk: specificHeatCopyUk, de: specificHeatCopyDe },
  referenceCases: specificHeatReferenceCases,
  publishedExample: { inputs: { mode: 'energy', mass: 2, c: 4186, dt: 50, q: 418600 }, expected: ["418 600 Дж"] },
  presentation: {
    id: "specific-heat",
    name: "Калькулятор теплоты нагрева",
    slug: "udelnaya-teploemkost",
    fullPath: "/physics/udelnaya-teploemkost/",
    category: "physics",
    icon: "flame",
    popularity: 30,
    isNew: false,
    shortDescription: "Сколько энергии нужно, чтобы нагреть тело: Q = c·m·ΔT.",
    longDescription:
      "Считает количество теплоты на нагрев или охлаждение тела и решает в три стороны: энергия, перепад температуры или масса. Перепад знаковый намеренно — охлаждение такой же законный случай, как нагрев, и отрицательная энергия означает отданное тепло, а не ошибку ввода. Отличие от теплопередачи через слой: та страница считает поток тепла сквозь конструкцию в ваттах, здесь — количество тепла на нагрев вещества в джоулях. Теплота фазовых переходов не входит: на плавление и кипение уходит энергия, при которой температура не меняется вовсе.",
    seoTitle: "Калькулятор теплоты нагрева — Q = c·m·ΔT",
    seoDescription: "Рассчитайте количество теплоты на нагрев или охлаждение тела по удельной теплоёмкости, массе и перепаду температуры.",
    h1: "Калькулятор теплоты нагрева",
    keywords: ["удельная теплоёмкость", "количество теплоты", "формула q cm dt", "нагрев воды энергия"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'energy',
        options: [
          { value: 'energy', label: 'энергию' },
          { value: 'deltaT', label: 'изменение температуры' },
          { value: 'mass', label: 'массу' },
        ],
      },
      { name: 'mass', label: 'Масса, кг', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'c', label: 'Удельная теплоёмкость, Дж/(кг·К)', type: 'number', defaultValue: 4186, min: 0, step: 10 },
      { name: 'dt', label: 'Изменение температуры, К', type: 'number', defaultValue: 50, signed: true, step: 1 },
      { name: 'q', label: 'Энергия, Дж', type: 'number', defaultValue: 418600, signed: true, step: 1000 },
    ],
    resultLabels: {
      "energy": "Энергия",
      "deltaT": "Изменение температуры",
      "mass": "Масса",
      "kwh": "В киловатт-часах",
      "capacity": "Удельная теплоёмкость",
    },
    howToUse: [
      "Выберите, что ищете: энергию, перепад температуры или массу.",
      "Введите две остальные величины и удельную теплоёмкость вещества.",
      "Теплоёмкость воды 4186, алюминия 900, стали 460, воздуха 1005 Дж/(кг·К).",
      "Для охлаждения задайте отрицательный перепад: энергия выйдет со знаком минус.",
    ],
    howItWorks: "Количество теплоты равно произведению удельной теплоёмкости, массы и изменения температуры: Q = c·m·ΔT. Изменение в кельвинах и градусах Цельсия численно одинаково.",
    example: "Нагрев двух литров воды на 50 К требует 418 600 Дж — около 0,12 киловатт-часа.",
    faq: [
      { q: "Чем это отличается от теплопередачи через слой?", a: "Там считается поток тепла сквозь конструкцию в ваттах, зависящий от теплопроводности и толщины. Здесь — количество тепла на нагрев вещества в джоулях, зависящее от массы и теплоёмкости." },
      { q: "Учитывается ли плавление или кипение?", a: "Нет. На фазовый переход уходит теплота, при которой температура не меняется вовсе, и эта формула её не описывает. Для воды это 334 кДж/кг на плавление и 2260 кДж/кг на испарение." },
      { q: "Кельвины или градусы Цельсия?", a: "Для ИЗМЕНЕНИЯ температуры разницы нет: шкалы отличаются только началом отсчёта, а величина деления одна и та же." },
      { q: "Почему энергия бывает отрицательной?", a: "Потому что тело охлаждается и отдаёт тепло, а не получает. Знак показывает направление, а не ошибку." },
    ],
    relatedCalculatorIds: ["thermal-conduction", "physics-power", "potential-energy"],
  },
};
