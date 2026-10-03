import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { epoxyVolumeCopyEn } from './copy.en';
import { epoxyVolumeCopyUk } from './copy.uk';
import { epoxyVolumeCopyDe } from './copy.de';
import { epoxyVolumeCopyEs } from './copy.es';
import { epoxyVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "epoxy-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: epoxyVolumeCopyEn, uk: epoxyVolumeCopyUk, de: epoxyVolumeCopyDe, es: epoxyVolumeCopyEs },
  referenceCases: epoxyVolumeReferenceCases,
  publishedExample: { inputs: { length: 100, width: 50, thickness: 5, density: 1.1, ratio: 2 }, expected: ["2,75 кг"] },
  presentation: {
    id: "epoxy-volume",
    name: "Калькулятор эпоксидной смолы",
    slug: "obyom-epoksidnoy-smoly",
    fullPath: "/building/obyom-epoksidnoy-smoly/",
    category: "building",
    icon: "droplets",
    popularity: 32,
    isNew: false,
    shortDescription: "Сколько смолы и отвердителя нужно на заливку.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор эпоксидной смолы — расход на заливку",
    seoDescription: "Рассчитайте, сколько эпоксидной смолы и отвердителя нужно на заливку, по размерам и толщине слоя.",
    h1: "Калькулятор эпоксидной смолы",
    keywords: ["эпоксидная смола", "расход смолы", "пропорция отвердителя", "заливка столешницы"],
    fields: [
      { name: 'length', label: "Длина заливки", type: 'number', unit: "см", defaultValue: 100, min: 0, step: 10 },
      { name: 'width', label: "Ширина заливки", type: 'number', unit: "см", defaultValue: 50, min: 0, step: 10 },
      { name: 'thickness', label: "Толщина слоя", type: 'number', unit: "мм", defaultValue: 5, min: 0, step: 0.5 },
      { name: 'density', label: "Плотность смеси", type: 'number', unit: "г/см³", defaultValue: 1.1, min: 0, step: 0.05 },
      { name: 'ratio', label: 'Частей смолы на часть отвердителя', type: 'number', defaultValue: 2, min: 0, step: 0.5 },
    ],
    resultLabels: {
      "mass": "Всего смеси",
      "resin": "Смолы",
      "hardener": "Отвердителя",
      "volume": "Объём заливки",
      "area": "Площадь заливки",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["concrete", "plaster", "board-volume"],
  },
};

