import { automotiveWave10ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tireSizeCopyEn } from './copy.en';
import { tireSizeCopyUk } from './copy.uk';
import { tireSizeCopyDe } from './copy.de';
import { tireSizeCopyEs } from './copy.es';
import { tireSizeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "tire-size",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: tireSizeCopyEn, uk: tireSizeCopyUk, de: tireSizeCopyDe, es: tireSizeCopyEs },
  referenceCases: tireSizeReferenceCases,
  publishedExample: { inputs: { width: 205, profile: 55, diameter: 16 }, expected: ["631,9 мм"] },
  presentation: {
    id: "tire-size",
    name: "Калькулятор размера шин",
    slug: "tire-size",
    fullPath: "/automotive/tire-size/",
    category: "automotive",
    icon: "car",
    popularity: 41,
    isNew: false,
    shortDescription: "Внешний диаметр, высота профиля и число оборотов на километр по маркировке шины.",
    seoTitle: "Калькулятор размера шин — диаметр и оборот колеса",
    seoDescription: "Рассчитайте внешний диаметр шины, высоту профиля, длину окружности и число оборотов на километр по маркировке типоразмера.",
    h1: "Калькулятор размера шин",
    keywords: ["размер шин", "внешний диаметр шины", "высота профиля", "обороты колеса на километр"],
    fields: [
      { name: 'width', label: 'Ширина шины, мм', type: 'number', unit: "мм", defaultValue: 205, min: 0, step: 5 },
      { name: 'profile', label: 'Профиль, % от ширины', type: 'number', unit: "%", defaultValue: 55, min: 0, step: 5 },
      { name: 'diameter', label: 'Диаметр диска, дюймов', type: 'number', unit: "дюйм", defaultValue: 16, min: 0, step: 1 },
    ],
    resultLabels: {
      "outer": "Внешний диаметр",
      "sidewall": "Высота профиля",
      "circumference": "Длина окружности",
      "revs": "Оборотов на километр",
      "inches": "Диаметр в дюймах",
    },
    relatedCalculatorIds: ["speed-distance-time", "fuel-consumption", "power-to-weight"],
    ...automotiveWave10ContractContent.ru,
  },
};
