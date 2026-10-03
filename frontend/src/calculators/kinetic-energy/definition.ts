import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { kineticEnergyCopyEn } from './copy.en';
import { kineticEnergyCopyUk } from './copy.uk';
import { kineticEnergyCopyDe } from './copy.de';
import { kineticEnergyCopyEs } from './copy.es';
import { kineticEnergyReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "kinetic-energy",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: kineticEnergyCopyEn, uk: kineticEnergyCopyUk, de: kineticEnergyCopyDe, es: kineticEnergyCopyEs },
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
    isNew: false,
    shortDescription: "Кинетическая энергия, скорость или масса по формуле E = ½mv².",
    longDescription: "Найдите энергию поступательного движения, скорость по энергии или массу по энергии и скорости. Для сравнения скоростей используйте одну систему отсчёта: энергия зависит от движения относительно наблюдателя. Формула ½mv² описывает классическую механику; вращение, деформация при ударе и релятивистские эффекты сюда не входят. Энергия сама по себе не определяет тормозной путь.",
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
      { name: 'm', label: 'Масса', type: 'number', unit: "kg", defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'v', label: 'Скорость', type: 'number', unit: "m/s", defaultValue: 3, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'E' } },
      { name: 'E', label: 'Энергия', type: 'number', unit: "J", defaultValue: 100, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'v' } },
      { name: 'm2', label: 'Масса', type: 'number', unit: "kg", defaultValue: 8, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'v' } },
      { name: 'E2', label: 'Энергия', type: 'number', unit: "J", defaultValue: 50, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
      { name: 'v2', label: 'Скорость', type: 'number', unit: "m/s", defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'm' } },
    ],
    resultLabels: {
      "energy": "Кинетическая энергия",
      "mass": "Масса",
      "speed": "Скорость",
    },
    howToUse: ["Выберите искомую величину и введите две известные в кг, м/с и Дж.", "Введите модуль скорости. Переведите км/ч в м/с делением на 3,6: 36 км/ч = 10 м/с.", "Нулевая скорость допустима для энергии, но не для поиска массы: деление на v² не определено."],
    howItWorks: "E = m v²/2; v = √(2E/m); m = 2E/v². Масса в прямом расчёте положительна, скорость и энергия неотрицательны. Возвращается модуль скорости, а не её направление. Удвоение скорости при той же массе увеличивает энергию в четыре раза.",
    example: "2 кг при 3 м/с: E = 2 × 3²/2 = 9 Дж. При 6 м/с тот же груз имеет 36 Дж. Обратно E = 100 Дж и m = 8 кг дают √25 = 5 м/с; E = 50 Дж и v = 10 м/с дают m = 1 кг.",
    faq: [{"q": "Можно ли ввести скорость со знаком минус?", "a": "Нет: поле принимает модуль скорости. В формуле энергия зависит от квадрата, поэтому направления +v и −v дают одинаковую энергию."}, {"q": "Это полная энергия колеса?", "a": "Нет. Поступательная часть равна mv²/2, а вращательная добавляется отдельно как Iω²/2; момент инерции здесь не вводится."}, {"q": "Можно ли получить тормозной путь или силу удара?", "a": "Нет. Для тормозного пути нужны силы и условия торможения; для средней силы удара — расстояние либо время остановки и модель столкновения."}, {"q": "Как ввести энергию, если она указана в килоджоулях?", "a": "Поле принимает джоули: 1 кДж = 1000 Дж. Например, для 1 кДж и массы 80 кг введите 1000 и 80: v = √(2000/80) = 5 м/с. Если ввести 1 вместо 1000, изменится не только подпись, но и сам расчёт."}],
    disclaimer: "Классическая энергия поступательного движения. Для скоростей, сравнимых со скоростью света, нужен релятивистский расчёт.",
    relatedCalculatorIds: ["newton-force", "potential-energy", "work"],
  },
};
