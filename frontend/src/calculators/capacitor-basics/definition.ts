import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { capacitorBasicsCopyEn } from './copy.en';
import { capacitorBasicsCopyUk } from './copy.uk';
import { capacitorBasicsCopyDe } from './copy.de';
import { capacitorBasicsReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "capacitor-basics",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: capacitorBasicsCopyEn, uk: capacitorBasicsCopyUk, de: capacitorBasicsCopyDe },
  referenceCases: capacitorBasicsReferenceCases,
  publishedExample: { inputs: { mode: 'charge', c: 100, v: 12, q: 1200 }, expected: ["1 200 мкКл"] },
  presentation: {
    id: "capacitor-basics",
    name: "Калькулятор заряда и энергии конденсатора",
    slug: "zaryad-kondensatora",
    fullPath: "/electronics/zaryad-kondensatora/",
    category: "electronics",
    icon: "zap",
    popularity: 34,
    isNew: false,
    shortDescription: "Заряд, напряжение или ёмкость конденсатора и энергия его поля.",
    longDescription:
      "Связывает три величины конденсатора — заряд, напряжение и ёмкость — и решает в любую сторону, а рядом показывает энергию электрического поля. Ёмкость задаётся в микрофарадах, а заряд в микрокулонах: это те единицы, что напечатаны на корпусе. Не путайте фарады с ампер-часами аккумулятора: ампер-часы — это запас заряда для длительной отдачи, фарады — способность накопить заряд при данном напряжении, и величины эти разной природы.",
    seoTitle: "Калькулятор конденсатора — заряд, напряжение, ёмкость, энергия",
    seoDescription: "Рассчитайте заряд, напряжение или ёмкость конденсатора по формуле Q = C·U и энергию его электрического поля.",
    h1: "Калькулятор заряда и энергии конденсатора",
    keywords: ["заряд конденсатора", "энергия конденсатора", "ёмкость конденсатора", "формула q c u"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'charge',
        options: [
          { value: 'charge', label: 'заряд' },
          { value: 'voltage', label: 'напряжение' },
          { value: 'capacitance', label: 'ёмкость' },
        ],
      },
      { name: 'c', label: 'Ёмкость, мкФ', type: 'number', defaultValue: 100, min: 0, step: 1 },
      { name: 'v', label: 'Напряжение, В', type: 'number', defaultValue: 12, signed: true, step: 1 },
      { name: 'q', label: 'Заряд, мкКл', type: 'number', defaultValue: 1200, signed: true, step: 100 },
    ],
    resultLabels: {
      "charge": "Заряд",
      "voltage": "Напряжение",
      "capacitance": "Ёмкость",
      "energy": "Энергия поля",
    },
    howToUse: [
      "Выберите, какую из трёх величин ищете.",
      "Введите две остальные: решаемая станет только для чтения.",
      "Ёмкость берите в микрофарадах прямо с корпуса конденсатора.",
      "Сверьте напряжение с допустимым для этого конденсатора: расчёт его не проверяет.",
    ],
    howItWorks: "Заряд равен произведению ёмкости на напряжение: Q = C·U. Энергия поля равна половине произведения ёмкости на квадрат напряжения, при переводе микрофарад в фарады.",
    example: "Конденсатор 100 мкФ при 12 В несёт заряд 1 200 мкКл и запасает 0,0072 Дж.",
    faq: [
      { q: "Чем фарады отличаются от ампер-часов аккумулятора?", a: "Ампер-часы — это запас заряда для длительной отдачи. Фарады — способность накопить заряд при данном напряжении. Величины разной природы, и напрямую они не сравниваются." },
      { q: "Почему энергия растёт быстрее напряжения?", a: "Потому что заряд линеен по напряжению, а энергия квадратична. Вдвое большее напряжение даёт вдвое больший заряд и вчетверо большую энергию." },
      { q: "Учитывается ли допустимое напряжение конденсатора?", a: "Нет. Расчёт связывает величины формулой и не знает паспортного предела. Превышение допустимого напряжения выводит конденсатор из строя независимо от того, что показал расчёт." },
      { q: "Что с последовательным и параллельным соединением?", a: "Здесь считается один конденсатор. При параллельном соединении ёмкости складываются, при последовательном складываются обратные величины." },
    ],
    relatedCalculatorIds: ["ohms-law", "resistor-network", "battery-series-parallel"],
  },
};
