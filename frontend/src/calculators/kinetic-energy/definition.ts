import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { kineticEnergyCopyEn } from './copy.en';
import { kineticEnergyCopyUk } from './copy.uk';
import { kineticEnergyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "kinetic-energy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: kineticEnergyCopyEn, uk: kineticEnergyCopyUk },
  referenceCases: kineticEnergyReferenceCases,
  publishedExample: { inputs: { mode: 'E', m: 2, v: 3 }, expected: ["9 Дж"] },
  presentation: {
    id: "kinetic-energy",
    name: "Калькулятор кинетической энергии",
    slug: "kinetic-energy",
    fullPath: "/physics/kinetic-energy/",
    category: "physics",
    icon: "zap",
    popularity: 46,
    isNew: true,
    shortDescription: "Кинетическая энергия, скорость или масса по формуле E = ½mv².",
    longDescription:
      "Считает энергию движущегося тела и решает формулу в обратную сторону: по энергии и массе находит скорость, по энергии и скорости — массу. Скорость входит в квадрате, и это главное, что стоит помнить: вдвое более быстрое тело несёт вчетверо больше энергии. Именно поэтому тормозной путь растёт не пропорционально скорости, а куда быстрее.",
    seoTitle: "Калькулятор кинетической энергии — E = ½mv²",
    seoDescription: "Рассчитайте кинетическую энергию, скорость или массу тела по формуле E = ½mv² в единицах СИ.",
    h1: "Калькулятор кинетической энергии",
    keywords: ["кинетическая энергия калькулятор", "энергия движения", "найти скорость по энергии"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'E',
        options: [
          { value: 'E', label: 'энергию' },
          { value: 'v', label: 'скорость' },
          { value: 'm', label: 'массу' },
        ],
      },
      { name: 'm', label: 'Масса, кг', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'v', label: 'Скорость, м/с', type: 'number', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'E', label: 'Энергия, Дж', type: 'number', defaultValue: 100, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'v' } },
      { name: 'm2', label: 'Масса, кг', type: 'number', defaultValue: 8, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'v' } },
      { name: 'E2', label: 'Энергия, Дж', type: 'number', defaultValue: 50, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'v2', label: 'Скорость, м/с', type: 'number', defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
    ],
    resultLabels: {
      "energy": "Кинетическая энергия",
      "mass": "Масса",
      "speed": "Скорость",
    },
    howToUse: ["Выберите искомую величину.", "Введите две оставшиеся в единицах СИ.", "Прочитайте результат."],
    howItWorks: "E = ½ · m · v², отсюда v = √(2E ÷ m) и m = 2E ÷ v².",
    example: "Тело массой 2 кг со скоростью 3 м/с несёт 9 Дж кинетической энергии.",
    faq: [
      { q: "Почему скорость входит в квадрате?", a: "Потому что энергия накапливается по мере разгона, и каждый следующий метр в секунду обходится дороже предыдущего. Вдвое более быстрое тело несёт вчетверо больше энергии." },
      { q: "Что будет при нулевой скорости?", a: "Энергия равна нулю: покоящееся тело кинетической энергии не имеет. Это законный результат, а не ошибка." },
      { q: "Почему нельзя найти массу при нулевой скорости?", a: "Масса равна 2E ÷ v². При нулевой скорости знаменатель обращается в ноль, и о массе ничего сказать нельзя." },
      { q: "Учитывается ли вращение тела?", a: "Нет. Считается только энергия поступательного движения; энергия вращения описывается другой формулой с моментом инерции." },
    ],
    relatedCalculatorIds: ["newton-force", "potential-energy", "work"],
  },
};
