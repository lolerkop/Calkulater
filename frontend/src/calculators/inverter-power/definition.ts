// Потребление инвертора по выходной мощности и КПД.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { inverterPowerCopyEn } from './copy.en';
import { inverterPowerCopyUk } from './copy.uk';
import { inverterPowerCopyDe } from './copy.de';
import { inverterPowerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "inverter-power",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: inverterPowerCopyEn, uk: inverterPowerCopyUk, de: inverterPowerCopyDe },
  referenceCases: inverterPowerReferenceCases,
  publishedExample: { inputs: { outputPower: 1000, efficiency: 85, batteryVoltage: 12 }, expected: ["1 176,5 Вт"] },
  presentation: {
    id: "inverter-power",
    name: "Калькулятор мощности инвертора",
    slug: "inverter-power",
    fullPath: "/electronics/inverter-power/",
    category: "electronics",
    icon: "zap",
    popularity: 33,
    isNew: false,
    shortDescription: "Сколько инвертор тянет от батареи при заданном КПД.",
    longDescription:
      "Делит полезную выходную мощность на КПД и получает то, что инвертор реально забирает от батареи, а затем переводит это в ток при напряжении батареи. КПД выше ста процентов отвергается, а не принимается за опечатку: он нарушил бы сохранение энергии и дал бы величину, которой не бывает.",
    seoTitle: "Калькулятор мощности инвертора — потребление и ток батареи",
    seoDescription:
      "Рассчитайте потребляемую мощность, ток от батареи и потери инвертора по выходной мощности, КПД и напряжению.",
    h1: "Калькулятор мощности инвертора",
    keywords: ["мощность инвертора", "ток инвертора", "кпд инвертора"],
    fields: [
      { name: 'outputPower', label: 'Выходная мощность, Вт', type: 'number', defaultValue: 1000, min: 0, step: 50 },
      { name: 'efficiency', label: 'КПД, %', type: 'number', defaultValue: 85, min: 0, max: 100, step: 1 },
      { name: 'batteryVoltage', label: 'Напряжение батареи, В', type: 'number', defaultValue: 12, min: 0, step: 1 },
    ],
    resultLabels: { result: "Потребляемая мощность", current: "Ток от батареи", loss: "Потери", output: "Полезная мощность" },
    howToUse: ["Введите полезную выходную мощность.", "Возьмите КПД из документации на инвертор.", "Укажите напряжение батареи."],
    howItWorks: "Потребляемая мощность = выход ÷ КПД; ток = потребляемая мощность ÷ напряжение батареи; потери — их разность.",
    example: "1000 Вт при КПД 85 процентов тянут 1176,5 Вт, то есть 98,04 А от батареи 12 В.",
    faq: [
      { q: "Почему КПД выше 100 процентов не принимается?", a: "Это означало бы, что инвертор отдаёт больше энергии, чем потребляет. Не погрешность округления, а невозможная величина, поэтому ввод отвергается." },
      { q: "Учитываются ли пусковые токи?", a: "Нет. Двигатели и компрессоры на мгновение тянут в несколько раз больше номинала, и этот пик вне расчёта." },
      { q: "Где взять КПД?", a: "В документации на инвертор. Обычно он зависит от нагрузки, поэтому вводить стоит значение при вашей типичной нагрузке." },
      { q: "Учитывается ли химия аккумулятора?", a: "Нет. Расчёт чисто электрический; как поведёт себя батарея под таким током — отдельный вопрос." },
    ],
    relatedCalculatorIds: ["ohms-law", "battery-runtime", "convert-power"],
  },
};
