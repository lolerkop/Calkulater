import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { dopplerCopyEn } from './copy.en';
import { dopplerCopyUk } from './copy.uk';
import { dopplerCopyDe } from './copy.de';
import { dopplerCopyEs } from './copy.es';
import { dopplerReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "doppler",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dopplerCopyEn, uk: dopplerCopyUk, de: dopplerCopyDe, es: dopplerCopyEs },
  referenceCases: dopplerReferenceCases,
  publishedExample: { inputs: { f: 440, vSource: 20, vObserver: 0, c: 343 }, expected: ["467,24 Гц"] },
  presentation: {
    id: "doppler",
    name: "Калькулятор эффекта Доплера",
    slug: "effekt-doplera",
    fullPath: "/physics/effekt-doplera/",
    category: "physics",
    icon: "activity",
    popularity: 34,
    isNew: false,
    shortDescription: "Слышимая частота при движении источника или наблюдателя.",
    seoTitle: "Калькулятор эффекта Доплера — сдвиг частоты",
    seoDescription: "Рассчитайте слышимую частоту при движении источника звука или наблюдателя, со сдвигом частоты в герцах и процентах.",
    h1: "Калькулятор эффекта Доплера",
    keywords: ["эффект Доплера", "сдвиг частоты", "частота сирены", "скорость звука"],
    fields: [
      { name: 'f', label: "Частота источника", type: 'number', defaultValue: 440, min: 0, step: 1 , unit: "Гц" },
      { name: 'vSource', label: "Скорость источника навстречу", type: 'number', defaultValue: 20, signed: true, step: 1 , unit: "м/с" },
      { name: 'vObserver', label: "Скорость наблюдателя навстречу", type: 'number', defaultValue: 0, signed: true, step: 1 , unit: "м/с" },
      { name: 'c', label: "Скорость волны в среде", type: 'number', defaultValue: 343, min: 0, step: 1 , unit: "м/с" },
    ],
    resultLabels: {
      "observed": "Наблюдаемая частота", "shift": "Сдвиг частоты", "relative": "Относительный сдвиг",
      "speed": "Скорость волны", "source": "Исходная частота",
    },
    relatedCalculatorIds: ["wave", "decibel", "inverse-square"],
      ...contract.ru,
  },
};
