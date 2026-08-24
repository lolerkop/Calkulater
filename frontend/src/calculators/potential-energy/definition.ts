import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { potentialEnergyCopyEn } from './copy.en';
import { potentialEnergyCopyUk } from './copy.uk';
import { potentialEnergyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "potential-energy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: potentialEnergyCopyEn, uk: potentialEnergyCopyUk },
  referenceCases: potentialEnergyReferenceCases,
  publishedExample: { inputs: { mode: 'E', m: 5, h: 10 }, expected: ["490,33 Дж"] },
  presentation: {
    id: "potential-energy",
    name: "Калькулятор потенциальной энергии",
    slug: "potential-energy",
    fullPath: "/physics/potential-energy/",
    category: "physics",
    icon: "mountain",
    popularity: 44,
    isNew: false,
    shortDescription: "Потенциальная энергия, высота или масса по формуле E = mgh.",
    longDescription:
      "Считает энергию поднятого груза и решает формулу обратно: по энергии и массе находит высоту, по энергии и высоте — массу. Ускорение свободного падения берётся стандартным — 9,80665 м/с², а не округлённым 9,8: при массе в несколько тонн разница уже составляет сотни джоулей. Высота отсчитывается от того уровня, который вы считаете нулевым, — сама по себе потенциальная энергия определена лишь с точностью до выбора этого уровня.",
    seoTitle: "Калькулятор потенциальной энергии — E = mgh",
    seoDescription: "Рассчитайте потенциальную энергию, высоту или массу по формуле E = mgh со стандартным g = 9,80665 м/с².",
    h1: "Калькулятор потенциальной энергии",
    keywords: ["потенциальная энергия калькулятор", "энергия поднятого груза", "mgh"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'E',
        options: [
          { value: 'E', label: 'энергию' },
          { value: 'h', label: 'высоту' },
          { value: 'm', label: 'массу' },
        ],
      },
      { name: 'm', label: 'Масса, кг', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'h', label: 'Высота, м', type: 'number', defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'E', label: 'Энергия, Дж', type: 'number', defaultValue: 490.3325, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'h' } },
      { name: 'm2', label: 'Масса, кг', type: 'number', defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'h' } },
      { name: 'E2', label: 'Энергия, Дж', type: 'number', defaultValue: 98.0665, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'h2', label: 'Высота, м', type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
    ],
    resultLabels: {
      "energy": "Потенциальная энергия",
      "mass": "Масса",
      "height": "Высота",
      "g": "Ускорение свободного падения",
    },
    howToUse: ["Выберите искомую величину.", "Введите две оставшиеся в единицах СИ.", "Прочитайте результат."],
    howItWorks: "E = m · g · h при g = 9,80665 м/с²; отсюда h = E ÷ (m · g) и m = E ÷ (g · h).",
    example: "Груз массой 5 кг, поднятый на 10 м, запасает 490,333 Дж потенциальной энергии.",
    faq: [
      { q: "От какого уровня отсчитывается высота?", a: "От того, который вы сами принимаете за нулевой: пола, земли, уровня моря. Потенциальная энергия определена лишь с точностью до этого выбора, поэтому важна разность высот." },
      { q: "Почему g равно 9,80665, а не 9,8?", a: "Это стандартное значение, принятое по определению. Округление сдвигает третий знак результата, и при большой массе разница исчисляется сотнями джоулей." },
      { q: "Что происходит при нулевой высоте?", a: "Энергия равна нулю: груз на нулевом уровне ничего не запасает. Это законный результат." },
      { q: "Подходит ли формула для больших высот?", a: "Для обычных задач — да. На высотах в сотни километров ускорение свободного падения заметно убывает, и mgh перестаёт быть точным." },
    ],
    relatedCalculatorIds: ["kinetic-energy", "newton-force", "work"],
  },
};
