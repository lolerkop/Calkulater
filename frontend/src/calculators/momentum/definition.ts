import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { momentumCopyEn } from './copy.en';
import { momentumCopyUk } from './copy.uk';
import { momentumReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "momentum",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: momentumCopyEn, uk: momentumCopyUk },
  referenceCases: momentumReferenceCases,
  publishedExample: { inputs: { mode: 'p', m: 3, v: 4 }, expected: ["12 кг·м/с"] },
  presentation: {
    id: "momentum",
    name: "Калькулятор импульса",
    slug: "momentum",
    fullPath: "/physics/momentum/",
    category: "physics",
    icon: "move-right",
    popularity: 41,
    isNew: false,
    shortDescription: "Импульс, масса или скорость по формуле p = m · v.",
    longDescription:
      "Считает импульс — произведение массы на скорость — и решает формулу в обратную сторону. Импульс отвечает на вопрос, который энергия не решает: насколько трудно остановить тело. Грузовик на пешеходной скорости и пуля несут сопоставимую энергию совсем по-разному, и именно импульс сохраняется при столкновениях. В отличие от кинетической энергии скорость входит в первой степени, а не в квадрате.",
    seoTitle: "Калькулятор импульса — p = m · v",
    seoDescription: "Рассчитайте импульс тела, его массу или скорость по формуле p = m · v в единицах СИ.",
    h1: "Калькулятор импульса",
    keywords: ["калькулятор импульса", "импульс тела", "p = mv", "количество движения"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'p',
        options: [
          { value: 'p', label: 'импульс' },
          { value: 'v', label: 'скорость' },
          { value: 'm', label: 'массу' },
        ],
      },
      { name: 'm', label: 'Масса, кг', type: 'number', defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'p' } },
      { name: 'v', label: 'Скорость, м/с', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'p' } },
      { name: 'p', label: 'Импульс, кг·м/с', type: 'number', defaultValue: 30, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'v' } },
      { name: 'm2', label: 'Масса, кг', type: 'number', defaultValue: 6, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'v' } },
      { name: 'p2', label: 'Импульс, кг·м/с', type: 'number', defaultValue: 18, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'v2', label: 'Скорость, м/с', type: 'number', defaultValue: 9, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
    ],
    resultLabels: {
      "momentum": "Импульс",
      "mass": "Масса",
      "speed": "Скорость",
      "energy": "Кинетическая энергия",
    },
    howToUse: ["Выберите искомую величину.", "Введите две оставшиеся в единицах СИ.", "Прочитайте импульс и сопутствующие величины."],
    howItWorks: "p = m · v, отсюда v = p ÷ m и m = p ÷ v. Кинетическая энергия показана рядом как p · v ÷ 2 — она растёт быстрее импульса.",
    example: "Тело массой 3 кг со скоростью 4 м/с имеет импульс 12 кг·м/с.",
    faq: [
      { q: "Чем импульс отличается от кинетической энергии?", a: "Скорость входит в импульс в первой степени, а в энергию — в квадрате. Поэтому вдвое более быстрое тело несёт вдвое больший импульс, но вчетверо большую энергию." },
      { q: "Почему импульс важен при столкновениях?", a: "Потому что он сохраняется: суммарный импульс тел до удара равен суммарному после. Энергия при этом может частично перейти в тепло и деформацию." },
      { q: "Что означает нулевая скорость?", a: "Импульс равен нулю: покоящееся тело импульса не имеет. Это законный результат, а не ошибка." },
      { q: "Учитывается ли направление?", a: "Нет, считается модуль. Импульс — векторная величина, и при разборе столкновений знаки направлений расставляются отдельно." },
    ],
    relatedCalculatorIds: ["kinetic-energy", "newton-force", "physics-power"],
  },
};
