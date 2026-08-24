import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pressureCopyEn } from './copy.en';
import { pressureCopyUk } from './copy.uk';
import { pressureReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pressure",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pressureCopyEn, uk: pressureCopyUk },
  referenceCases: pressureReferenceCases,
  publishedExample: { inputs: { mode: 'p', F: 1000, A: 2 }, expected: ["500 Па"] },
  presentation: {
    id: "pressure",
    name: "Калькулятор давления",
    slug: "pressure",
    fullPath: "/physics/pressure/",
    category: "physics",
    icon: "gauge",
    popularity: 44,
    isNew: false,
    shortDescription: "Давление, сила или площадь по формуле p = F ÷ A.",
    longDescription:
      "Считает механическое давление — силу, распределённую по площади, — и решает соотношение в любую сторону. Обратный ход отвечает на практичный вопрос: какая опорная площадь нужна, чтобы грунт или основание выдержали заданную нагрузку. Отсюда же понятно, почему широкая лыжа держит на снегу, а тонкий каблук продавливает паркет: сила та же, площадь разная.",
    seoTitle: "Калькулятор давления — p = F ÷ A",
    seoDescription: "Рассчитайте механическое давление, силу или опорную площадь по формуле p = F ÷ A в паскалях.",
    h1: "Калькулятор давления",
    keywords: ["калькулятор давления", "давление на площадь", "паскали", "опорная площадь"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'p',
        options: [
          { value: 'p', label: 'давление' },
          { value: 'F', label: 'силу' },
          { value: 'A', label: 'площадь' },
        ],
      },
      { name: 'F', label: 'Сила, Н', type: 'number', defaultValue: 1000, min: 0, step: 1, showIf: { field: 'mode', equals: 'p' } },
      { name: 'A', label: 'Площадь, м²', type: 'number', defaultValue: 2, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'p' } },
      { name: 'p', label: 'Давление, Па', type: 'number', defaultValue: 101325, min: 0, step: 1, showIf: { field: 'mode', equals: 'F' } },
      { name: 'A2', label: 'Площадь, м²', type: 'number', defaultValue: 1, min: 0, step: 0.01, showIf: { field: 'mode', equals: 'F' } },
      { name: 'F2', label: 'Сила, Н', type: 'number', defaultValue: 2000, min: 0, step: 1, showIf: { field: 'mode', equals: 'A' } },
      { name: 'p2', label: 'Давление, Па', type: 'number', defaultValue: 100000, min: 0, step: 1, showIf: { field: 'mode', equals: 'A' } },
    ],
    resultLabels: {
      "pressure": "Давление",
      "force": "Сила",
      "area": "Площадь",
      "atm": "В атмосферах",
    },
    howToUse: ["Выберите искомую величину.", "Введите две оставшиеся в единицах СИ.", "Прочитайте результат — давление показано и в атмосферах."],
    howItWorks: "p = F ÷ A, отсюда F = p · A и A = F ÷ p. Одна стандартная атмосфера равна 101 325 Па.",
    example: "Сила 1000 Н, распределённая по 2 м², даёт давление 500 Па.",
    faq: [
      { q: "Почему широкая опора давит меньше?", a: "Потому что та же сила распределяется по большей площади. Давление — это отношение, и увеличение площади вдвое уменьшает давление вдвое." },
      { q: "Какое давление считается — избыточное или абсолютное?", a: "Считается именно отношение силы к площади. Атмосферное давление сюда не добавляется: если нужно абсолютное, прибавьте 101 325 Па самостоятельно." },
      { q: "Как подобрать опорную площадь под нагрузку?", a: "Выберите режим «площадь», задайте силу и допустимое давление грунта или основания — получите минимально необходимую площадь опоры." },
      { q: "Это то же давление, что в шинах или в трубопроводе?", a: "Величина та же и единица та же. Но манометр показывает избыточное давление сверх атмосферного, и это стоит учитывать при сравнении." },
    ],
    relatedCalculatorIds: ["newton-force", "density", "convert-pressure"],
  },
};
