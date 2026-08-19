// Время наполнения по объёму и расходу воды. Три формы чаши.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { poolFillTimeCopyEn } from './copy.en';
import { poolFillTimeCopyUk } from './copy.uk';
import { poolFillTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pool-fill-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: poolFillTimeCopyEn, uk: poolFillTimeCopyUk },
  referenceCases: poolFillTimeReferenceCases,
  publishedExample: { inputs: { mode: 'volume', volume: 32, flow: 20, flowUnit: 'lmin' }, expected: ["26,67 ч"] },
  presentation: {
    id: "pool-fill-time",
    name: "Калькулятор наполнения бассейна",
    slug: "pool-fill-time",
    fullPath: "/household/pool-fill-time/",
    category: "household",
    icon: "home",
    popularity: 30,
    isNew: true,
    shortDescription: "За сколько наполнится бассейн при известном расходе.",
    longDescription:
      "Берёт объём — заданный напрямую или посчитанный по размерам прямоугольной либо круглой чаши, — переводит его в литры и делит на расход. Поддержаны ровно три формы, те, что встречаются на практике; произвольная чаша сюда не поместится, и делать вид, что помещается, калькулятор не станет.",
    seoTitle: "Калькулятор наполнения бассейна — часы по объёму и расходу",
    seoDescription:
      "Узнайте, за сколько наполнится бассейн, по его объёму или размерам чаши и расходу воды из источника.",
    h1: "Калькулятор наполнения бассейна",
    keywords: ["наполнение бассейна", "объём бассейна в литрах", "сколько наполнять бассейн"],
    fields: [
      {
        name: 'mode', label: 'Форма чаши', type: 'select', defaultValue: 'volume',
        options: [
          { value: 'volume', label: 'известный объём' },
          { value: 'rect', label: 'прямоугольная' },
          { value: 'round', label: 'круглая' },
        ],
      },
      { name: 'volume', label: 'Объём, м³', type: 'number', defaultValue: 32, min: 0, step: 1, showIf: { field: 'mode', equals: 'volume' } },
      { name: 'length', label: 'Длина, м', type: 'number', defaultValue: 8, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'rect' } },
      { name: 'width', label: 'Ширина, м', type: 'number', defaultValue: 4, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'rect' } },
      { name: 'diameter', label: 'Диаметр, м', type: 'number', defaultValue: 4, min: 0, step: 0.5, showIf: { field: 'mode', equals: 'round' } },
      { name: 'depth', label: 'Глубина, м', type: 'number', defaultValue: 1.5, min: 0, step: 0.1 },
      { name: 'flow', label: 'Расход', type: 'number', defaultValue: 20, min: 0, step: 1 },
      {
        name: 'flowUnit', label: 'Единица расхода', type: 'select', defaultValue: 'lmin',
        options: [
          { value: 'lmin', label: 'л/мин' },
          { value: 'lhour', label: 'л/ч' },
          { value: 'm3hour', label: 'м³/ч' },
        ],
      },
    ],
    resultLabels: { result: "Время наполнения", hm: "Часы и минуты", volume: "Объём чаши", litres: "Объём в литрах" },
    howToUse: ["Выберите, знаете вы объём или размеры.", "Введите значения для этой формы.", "Укажите расход воды и его единицу."],
    howItWorks: "Объём в кубометрах переводится в литры умножением на тысячу; время — это литры, делённые на расход в минуту.",
    example: "Бассейн 32 м³ при 20 литрах в минуту наполняется 1600 минут, то есть около 26,7 часа.",
    faq: [
      { q: "Где взять расход воды?", a: "Наполните ведро известного объёма и засеките время. Садовый шланг и магистраль различаются в разы, и замер надёжнее догадки." },
      { q: "Измерять глубину по факту наполнения?", a: "Да. Бассейны редко наполняют до краёв, и объём определяет именно уровень воды." },
      { q: "Поддерживаются ли другие формы?", a: "Нет, только известный объём, прямоугольник и круг. Овальная или произвольная чаша потребовала бы геометрии, которой у калькулятора нет." },
      { q: "Держится ли расход постоянным на практике?", a: "Редко. Давление падает, когда воду разбирают в других точках, поэтому считайте результат нижней оценкой времени." },
    ],
    relatedCalculatorIds: ["electricity-usage", "tip", "room-volume"],
  },
};
