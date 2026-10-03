import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { physicsPowerCopyEn } from './copy.en';
import { physicsPowerCopyUk } from './copy.uk';
import { physicsPowerCopyDe } from './copy.de';
import { physicsPowerCopyEs } from './copy.es';
import { physicsPowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "physics-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: physicsPowerCopyEn, uk: physicsPowerCopyUk, de: physicsPowerCopyDe, es: physicsPowerCopyEs },
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
    longDescription: "Свяжите выполненную механическую работу со временем: найдите среднюю мощность, длительность или работу при постоянной средней мощности. Этот расчёт полезен для сравнения темпа подъёма и передачи энергии. Ватт равен джоулю в секунду; мощность не равна запасу энергии. Результат не является электрической потребляемой мощностью двигателя: потери и КПД здесь не задаются.",
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
      { name: 'W', label: 'Работа', type: 'number', unit: "J", defaultValue: 1000, min: 0, step: 1, showIf: { field: 'mode', equals: 'P' } },
      { name: 't', label: 'Время', type: 'number', unit: "s", defaultValue: 10, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'P' } },
      { name: 'W2', label: 'Работа', type: 'number', unit: "J", defaultValue: 600, min: 0, step: 1, showIf: { field: 'mode', equals: 't' } },
      { name: 'P', label: 'Мощность', type: 'number', unit: "W", defaultValue: 50, min: 0, step: 0.1, showIf: { field: 'mode', equals: 't' } },
      { name: 'P2', label: 'Мощность', type: 'number', unit: "W", defaultValue: 75, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'W' } },
      { name: 't2', label: 'Время', type: 'number', unit: "s", defaultValue: 4, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'W' } },
    ],
    resultLabels: {
      "power": "Мощность",
      "work": "Работа",
      "time": "Время",
      "hp": "В метрических лошадиных силах",
    },
    howToUse: ["Выберите мощность, время или работу и введите две известные величины.", "Используйте джоули, секунды и ватты: минуты умножьте на 60, килоджоули — на 1000.", "Введите неотрицательные работу и мощность. В режимах мощности и работы длительность положительна; время по нулевой мощности не определяется."],
    howItWorks: "Pср = W/t; t = W/P; W = Pсрt. Это средняя мощность за интервал; для переменной мощности нужен интеграл по времени. Пересчёт в метрические лошадиные силы: 1 л.с. = 735,49875 Вт. Знак работы силы в общем случае может быть отрицательным, но этот интерфейс считает неотрицательное количество переданной энергии.",
    example: "1000 Дж за 10 с: P = 100 Вт = 0,136 метрической л.с. Та же работа за 20 с даёт 50 Вт. В обратных режимах 600 Дж при 50 Вт требуют 12 с; 75 Вт за 4 с передают 300 Дж.",
    faq: [{"q": "Это мгновенная мощность двигателя?", "a": "Нет. W/t даёт среднюю мощность за выбранный интервал. Пиковая или мгновенная мощность может отличаться от этого числа."}, {"q": "Можно ли взять работу подъёма из mgh?", "a": "Да, как идеальную полезную работу. Затем деление на время даст среднюю полезную мощность; для мощности на входе двигателя дополнительно нужен КПД."}, {"q": "Почему 0 Вт не позволяют найти время?", "a": "При ненулевой работе конечного времени не получится. При нулевой работе и нулевой мощности время также неоднозначно; деление 0/0 ответа не задаёт."}, {"q": "Метрическая лошадиная сила совпадает с английской hp?", "a": "Нет. Здесь используется метрическая л.с.: 735,49875 Вт. Механическая hp соответствует примерно 745,6999 Вт. Поэтому 100 Вт — около 0,136 метрической л.с.; при сравнении паспортов оборудования сначала проверьте, какая единица указана."}],
    disclaimer: "Средняя неотрицательная механическая мощность. КПД, пиковые нагрузки и мощность электрической сети не рассчитываются.",
    relatedCalculatorIds: ["work", "newton-force", "kinetic-energy"],
  },
};
