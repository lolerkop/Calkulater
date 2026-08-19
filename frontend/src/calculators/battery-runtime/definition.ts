// Время работы аккумулятора под нагрузкой.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { batteryRuntimeCopyEn } from './copy.en';
import { batteryRuntimeCopyUk } from './copy.uk';
import { batteryRuntimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "battery-runtime",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: batteryRuntimeCopyEn, uk: batteryRuntimeCopyUk },
  referenceCases: batteryRuntimeReferenceCases,
  publishedExample: { inputs: { capacity: 100, voltage: 12, load: 200, dod: 80, efficiency: 90 }, expected: ["4,32 ч"] },
  presentation: {
    id: "battery-runtime",
    name: "Калькулятор времени работы аккумулятора",
    slug: "battery-runtime",
    fullPath: "/electronics/battery-runtime/",
    category: "electronics",
    icon: "zap",
    popularity: 32,
    isNew: true,
    shortDescription: "Сколько проработает аккумулятор при заданной нагрузке.",
    longDescription:
      "Переводит ампер-часы в ватт-часы через напряжение батареи, применяет глубину разряда и КПД преобразования, а затем делит на нагрузку. Ампер-часы — не энергия, и путаница между ними даёт ответ, ошибающийся во столько раз, каково напряжение, поэтому перевод сделан одним видимым шагом.",
    seoTitle: "Калькулятор времени работы аккумулятора — часы по ёмкости",
    seoDescription:
      "Оцените, сколько проработает аккумулятор под нагрузкой, по ёмкости, напряжению, глубине разряда и КПД.",
    h1: "Калькулятор времени работы аккумулятора",
    keywords: ["время работы аккумулятора", "ампер-часы в ватт-часы", "ресурс батареи"],
    fields: [
      { name: 'capacity', label: 'Ёмкость, А·ч', type: 'number', defaultValue: 100, min: 0, step: 1 },
      { name: 'voltage', label: 'Напряжение, В', type: 'number', defaultValue: 12, min: 0, step: 0.1 },
      { name: 'load', label: 'Нагрузка, Вт', type: 'number', defaultValue: 200, min: 0, step: 10 },
      { name: 'dod', label: 'Глубина разряда, %', type: 'number', defaultValue: 80, min: 0, max: 100, step: 5 },
      { name: 'efficiency', label: 'КПД преобразования, %', type: 'number', defaultValue: 90, min: 0, max: 100, step: 1 },
    ],
    resultLabels: { result: "Время работы", hm: "Часы и минуты", energy: "Полезная энергия", total: "Полная энергия батареи" },
    howToUse: ["Введите ёмкость в ампер-часах и напряжение батареи.", "Укажите нагрузку в ваттах.", "Задайте глубину разряда и КПД преобразования."],
    howItWorks: "Энергия = ёмкость × напряжение × глубина разряда × КПД; время = энергия ÷ нагрузка.",
    example: "100 А·ч при 12 В с глубиной 80 процентов и КПД 90 дают 864 Вт·ч, а это 4,32 часа на нагрузке 200 Вт.",
    faq: [
      { q: "Почему на практике время выходит меньше?", a: "Расчёт линейный. Свинцовые батареи на большом токе отдают меньше, а кривая разряда, эффект Пейкерта и температура здесь не моделируются." },
      { q: "Зачем нужна глубина разряда?", a: "Большинство батарей нельзя опустошать полностью. Значение 80 процентов означает, что полезной считается только эта доля ёмкости." },
      { q: "Включать ли в КПД инвертор?", a: "Да, если нагрузка питается через него. Именно эти потери преобразования поле и должно учитывать." },
      { q: "Зачем умножать на напряжение?", a: "Ампер-часы измеряют заряд, а не энергию. Умножение на напряжение переводит их в ватт-часы, которые и потребляет нагрузка в ваттах." },
    ],
    relatedCalculatorIds: ["inverter-power", "led-resistor", "electricity-usage"],
  },
};
