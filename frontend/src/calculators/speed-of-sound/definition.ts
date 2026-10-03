import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { speedOfSoundCopyEn } from './copy.en';
import { speedOfSoundCopyUk } from './copy.uk';
import { speedOfSoundCopyDe } from './copy.de';
import { speedOfSoundCopyEs } from './copy.es';
import { speedOfSoundReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "speed-of-sound",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: speedOfSoundCopyEn, uk: speedOfSoundCopyUk, de: speedOfSoundCopyDe, es: speedOfSoundCopyEs },
  referenceCases: speedOfSoundReferenceCases,
  publishedExample: { inputs: { t: 20 }, expected: ["343,21 м/с"] },
  presentation: {
    id: "speed-of-sound",
    name: "Калькулятор скорости звука в воздухе",
    slug: "skorost-zvuka",
    fullPath: "/physics/skorost-zvuka/",
    category: "physics",
    icon: "atom",
    popularity: 31,
    isNew: false,
    shortDescription: "Скорость звука в воздухе по температуре, с пересчётом в километры в час.",
    seoTitle: "Калькулятор скорости звука в воздухе по температуре",
    seoDescription: "Рассчитайте скорость звука в воздухе по температуре, узнайте её в километрах в час и время прохождения километра.",
    h1: "Калькулятор скорости звука в воздухе",
    keywords: ["скорость звука", "звук в воздухе", "расстояние до грозы", "звуковой барьер"],
    fields: [
      { name: 't', label: "Температура воздуха", type: 'number', defaultValue: 20, min: -80, max: 80, signed: true, step: 1 , unit: "°C" },
    ],
    resultLabels: {
      "speed": "Скорость звука", "kmh": "В километрах в час",
      "km": "Километр звук пройдёт за", "three": "За три секунды",
      "delta": "Отклонение от значения при 0 °C",
    },
    relatedCalculatorIds: ["wave", "decibel", "mach-number"],
      ...contract.ru,
  },
};
