import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { physicsPowerCopyEn } from './copy.en';
import { physicsPowerCopyUk } from './copy.uk';
import { physicsPowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "physics-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: physicsPowerCopyEn, uk: physicsPowerCopyUk },
  referenceCases: physicsPowerReferenceCases,
  publishedExample: { inputs: { mode: 'P', W: 1000, t: 10 }, expected: ["100 Вт"] },
  presentation: {
    id: "physics-power",
    name: "Калькулятор механической мощности",
    slug: "mechanical-power",
    fullPath: "/physics/mechanical-power/",
    category: "physics",
    icon: "gauge",
    popularity: 42,
    isNew: false,
    shortDescription: "Мощность, работа или время по формуле P = W ÷ t.",
    longDescription:
      "Связывает работу и время: мощность показывает, насколько быстро совершается работа, а не сколько её сделано. Одну и ту же работу можно выполнить за секунду или за час — работа будет та же, мощность отличится в три с половиной тысячи раз. Расчёт механический: речь о работе силы, а не об электрической мощности, для которой есть закон Ома и своя страница.",
    seoTitle: "Калькулятор механической мощности — P = W ÷ t",
    seoDescription: "Рассчитайте механическую мощность, работу или время по формуле P = W ÷ t в единицах СИ.",
    h1: "Калькулятор механической мощности",
    keywords: ["калькулятор мощности", "механическая мощность", "работа за время", "p = w/t"],
    fields: [
      {
        name: 'mode', label: 'Что нужно найти', type: 'select', defaultValue: 'P',
        options: [
          { value: 'P', label: 'мощность' },
          { value: 't', label: 'время' },
          { value: 'W', label: 'работу' },
        ],
      },
      { name: 'W', label: 'Работа, Дж', type: 'number', defaultValue: 1000, min: 0, step: 1, showIf: { field: 'mode', equals: 'P' } },
      { name: 't', label: 'Время, с', type: 'number', defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'P' } },
      { name: 'W2', label: 'Работа, Дж', type: 'number', defaultValue: 600, min: 0, step: 1, showIf: { field: 'mode', equals: 't' } },
      { name: 'P', label: 'Мощность, Вт', type: 'number', defaultValue: 50, min: 0, step: 0.1, showIf: { field: 'mode', equals: 't' } },
      { name: 'P2', label: 'Мощность, Вт', type: 'number', defaultValue: 75, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'W' } },
      { name: 't2', label: 'Время, с', type: 'number', defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'W' } },
    ],
    resultLabels: {
      "power": "Мощность",
      "work": "Работа",
      "time": "Время",
      "hp": "В метрических лошадиных силах",
    },
    howToUse: ["Выберите искомую величину.", "Введите две оставшиеся в единицах СИ.", "Прочитайте результат — мощность заодно показана в лошадиных силах."],
    howItWorks: "P = W ÷ t, отсюда t = W ÷ P и W = P · t. Метрическая лошадиная сила равна 735,49875 Вт.",
    example: "Работа 1000 Дж, выполненная за 10 с, соответствует мощности 100 Вт.",
    faq: [
      { q: "Чем мощность отличается от работы?", a: "Работа — сколько сделано, мощность — как быстро. Одну и ту же работу можно выполнить медленно при малой мощности или быстро при большой." },
      { q: "Это та же мощность, что в электрике?", a: "Величина та же и единица та же — ватт. Но здесь она выводится из механической работы; для цепи мощность считается через напряжение и ток на отдельной странице." },
      { q: "Почему нулевое время не принимается?", a: "Мощность — это работа, делённая на время. За нулевое время работа не совершается, и деление не имеет значения." },
      { q: "Почему мощность показана ещё и в лошадиных силах?", a: "Для наглядности: ваттами привычно измерять электроприборы, а мощность двигателя чаще называют в лошадиных силах. Используется метрическая — 735,49875 Вт, а не механическая 745,7." },
    ],
    relatedCalculatorIds: ["work", "newton-force", "kinetic-energy"],
  },
};
