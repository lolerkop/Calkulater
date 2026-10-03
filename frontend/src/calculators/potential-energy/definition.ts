import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { potentialEnergyCopyEn } from './copy.en';
import { potentialEnergyCopyUk } from './copy.uk';
import { potentialEnergyCopyDe } from './copy.de';
import { potentialEnergyCopyEs } from './copy.es';
import { potentialEnergyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "potential-energy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: potentialEnergyCopyEn, uk: potentialEnergyCopyUk, de: potentialEnergyCopyDe, es: potentialEnergyCopyEs },
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
    longDescription: "Оцените изменение энергии при подъёме груза относительно выбранного нулевого уровня или найдите высоту и массу обратным расчётом. Здесь E = mgh — модель постоянного земного g, а не энергия орбиты, пружины или электрического поля. Для двух положений важна разность высот. Положительная энергия не гарантирует, что её всю удастся превратить в полезную работу: потери и КПД не учтены.",
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
      { name: 'm', label: 'Масса', type: 'number', unit: "kg", defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'h', label: 'Высота', type: 'number', unit: "m", defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'E', label: 'Энергия', type: 'number', unit: "J", defaultValue: 490.3325, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'h' } },
      { name: 'm2', label: 'Масса', type: 'number', unit: "kg", defaultValue: 5, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'h' } },
      { name: 'E2', label: 'Энергия', type: 'number', unit: "J", defaultValue: 98.0665, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'h2', label: 'Высота', type: 'number', unit: "m", defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
    ],
    resultLabels: {
      "energy": "Потенциальная энергия",
      "mass": "Масса",
      "height": "Высота",
      "g": "Ускорение свободного падения",
    },
    howToUse: ["Выберите энергию, высоту или массу: в каждом режиме нужны две оставшиеся величины.", "Введите массу в кг, высоту в м, энергию в Дж. Для подъёма используйте вертикальную разность высот, не длину лестницы или склона.", "Этот интерфейс принимает неотрицательные высоты и энергии относительно выбранного уровня. Для поиска массы высота должна быть больше нуля."],
    howItWorks: "E = m · 9,80665 · h; h = E/(m · 9,80665); m = E/(9,80665 · h). g — стандартное ускорение, не измеренное местное значение. Расчёт подходит для небольших по сравнению с радиусом Земли изменений высоты; масса положительна в прямом расчёте.",
    example: "5 кг × 9,80665 м/с² × 10 м = 490,3325 Дж → 490,33 Дж на экране. Обратно 490,3325 Дж при массе 5 кг дают 10 м. 98,0665 Дж на высоте 2 м соответствуют 5 кг; для обратного расчёта вводите неокруглённую энергию.",
    faq: [{"q": "Нужна высота над морем?", "a": "Только если уровень моря выбран нулём. Для груза, поднятого с пола на полку, нужна разность высот между полом и полкой."}, {"q": "Что означает нулевая энергия?", "a": "При положительной массе и нулевой высоте E = 0 относительно выбранного уровня. Это не отсутствие всех видов энергии у тела."}, {"q": "Можно ли оценить мощность подъёмника?", "a": "E даёт идеальную работу подъёма. Для средней полезной мощности разделите её на время; потребляемую мощность дополнительно увеличивают потери, которых здесь нет."}, {"q": "Можно ли заменить стандартное g местным значением?", "a": "В этом интерфейсе g фиксировано: 9,80665 м/с². Местное ускорение зависит от положения и высоты, поэтому расчёт не является геодезическим измерением. Если в задаче дано другое g, используйте E = mgh с этим значением отдельно."}],
    disclaimer: "Модель E = mgh с постоянным стандартным g. Отрицательные уровни, местная гравитация и КПД не задаются.",
    relatedCalculatorIds: ["kinetic-energy", "newton-force", "work"],
  },
};
