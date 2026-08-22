import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { gasLawsCopyEn } from './copy.en';
import { gasLawsCopyUk } from './copy.uk';
import { gasLawsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "gas-laws",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: gasLawsCopyEn, uk: gasLawsCopyUk },
  referenceCases: gasLawsReferenceCases,
  publishedExample: { inputs: { mode: 'p2', p1: 100, v1: 2, t1: 300, p2: 100, v2: 1, t2: 300 }, expected: ["200 кПа"] },
  presentation: {
    id: "gas-laws",
    name: "Калькулятор объединённого газового закона",
    slug: "gazovye-zakony",
    fullPath: "/chemistry/gazovye-zakony/",
    category: "chemistry",
    icon: "atom",
    popularity: 30,
    isNew: true,
    shortDescription: "Переход газа между двумя состояниями: p₁V₁/T₁ = p₂V₂/T₂.",
    longDescription:
      "Считает переход одной и той же порции газа из первого состояния во второе по объединённому газовому закону. Отличие от уравнения состояния идеального газа простое: та страница описывает одно состояние через количество вещества и универсальную газовую постоянную, здесь количество вещества сокращается — оно у обоих состояний одно и то же, — и остаётся отношение трёх величин. Частные законы Бойля, Шарля и Гей-Люссака получаются из этой формулы, если оставить одну величину постоянной.",
    seoTitle: "Калькулятор объединённого газового закона — p₁V₁/T₁ = p₂V₂/T₂",
    seoDescription: "Рассчитайте давление, объём или температуру газа при переходе между двумя состояниями по объединённому газовому закону.",
    h1: "Калькулятор объединённого газового закона",
    keywords: ["объединённый газовый закон", "закон бойля мариотта", "закон шарля", "p1v1 t1 p2v2 t2"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'p2',
        options: [
          { value: 'p2', label: 'давление p₂' },
          { value: 'v2', label: 'объём V₂' },
          { value: 't2', label: 'температуру T₂' },
        ],
      },
      { name: 'p1', label: 'Давление p₁, кПа', type: 'number', defaultValue: 100, min: 0, step: 1 },
      { name: 'v1', label: 'Объём V₁, л', type: 'number', defaultValue: 2, min: 0, step: 0.1 },
      { name: 't1', label: 'Температура T₁, К', type: 'number', defaultValue: 300, min: 0, step: 1 },
      { name: 'p2', label: 'Давление p₂, кПа', type: 'number', defaultValue: 100, min: 0, step: 1 },
      { name: 'v2', label: 'Объём V₂, л', type: 'number', defaultValue: 1, min: 0, step: 0.1 },
      { name: 't2', label: 'Температура T₂, К', type: 'number', defaultValue: 300, min: 0, step: 1 },
    ],
    resultLabels: {
      "p2": "Давление p₂",
      "v2": "Объём V₂",
      "t2": "Температура T₂",
      "state1": "Состояние 1: p·V/T",
      "state2": "Состояние 2: p·V/T",
      "first": "Первое состояние",
    },
    howToUse: [
      "Выберите, какую величину второго состояния ищете.",
      "Введите давление, объём и температуру первого состояния.",
      "Заполните две известные величины второго состояния: третья станет только для чтения.",
      "Температуру задавайте в кельвинах: к градусам Цельсия прибавьте 273,15.",
    ],
    howItWorks: "Для одной и той же порции газа отношение p·V/T постоянно, поэтому p₁V₁/T₁ = p₂V₂/T₂. Искомая величина выражается из этого равенства.",
    example: "Два литра газа под 100 кПа при 300 К, сжатые до литра при той же температуре, дают 200 кПа.",
    faq: [
      { q: "Чем это отличается от уравнения состояния идеального газа?", a: "Там считается одно состояние через количество вещества и газовую постоянную. Здесь считается переход между двумя состояниями одной порции, и количество вещества сокращается." },
      { q: "Почему температура только в кельвинах?", a: "Потому что в формулу входит отношение температур. В шкале Цельсия нуль произволен, и при нуле градусов знаменатель обратился бы в нуль." },
      { q: "Где здесь законы Бойля и Шарля?", a: "Это частные случаи. Оставьте температуру постоянной — получится закон Бойля — Мариотта, оставьте давление — закон Шарля." },
      { q: "Годится ли расчёт для реального газа?", a: "Как приближение — да, при умеренных давлениях и вдали от точки конденсации. У сжатых и близких к сжижению газов отклонения становятся заметными." },
    ],
    relatedCalculatorIds: ["ideal-gas-law", "moles", "pressure"],
  },
};
