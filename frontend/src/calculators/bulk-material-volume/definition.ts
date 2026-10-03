import { buildingWave13ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bulkMaterialVolumeCopyEn } from './copy.en';
import { bulkMaterialVolumeCopyUk } from './copy.uk';
import { bulkMaterialVolumeCopyDe } from './copy.de';
import { bulkMaterialVolumeCopyEs } from './copy.es';
import { bulkMaterialVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bulk-material-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: bulkMaterialVolumeCopyEn, uk: bulkMaterialVolumeCopyUk, de: bulkMaterialVolumeCopyDe, es: bulkMaterialVolumeCopyEs },
  referenceCases: bulkMaterialVolumeReferenceCases,
  publishedExample: { inputs: { length: 5, width: 4, depth: 10, density: 1.6, waste: 5 }, expected: ["2,1 м³"] },
  presentation: {
    id: "bulk-material-volume",
    name: "Калькулятор сыпучего материала",
    slug: "sypuchiy-material",
    fullPath: "/building/sypuchiy-material/",
    category: "building",
    icon: "package",
    popularity: 38,
    isNew: false,
    shortDescription: "Объём и масса щебня, песка или отсева на засыпку площадки.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор сыпучего материала — объём и масса засыпки",
    seoDescription: "Рассчитайте объём и массу щебня, песка или отсева на засыпку площадки по размерам, толщине слоя и насыпной плотности.",
    h1: "Калькулятор сыпучего материала",
    keywords: ["расчёт щебня", "сколько песка на засыпку", "объём сыпучего материала", "калькулятор отсева"],
    fields: [
      { name: 'length', label: "Длина площадки", type: 'number', unit: "м", defaultValue: 5, min: 0, step: 0.5 },
      { name: 'width', label: "Ширина площадки", type: 'number', unit: "м", defaultValue: 4, min: 0, step: 0.5 },
      { name: 'depth', label: "Толщина слоя", type: 'number', unit: "см", defaultValue: 10, min: 0, step: 1 },
      { name: 'density', label: "Насыпная плотность", type: 'number', unit: "т/м³", defaultValue: 1.6, min: 0, step: 0.05 },
      { name: 'waste', label: "Запас на усадку", type: 'number', unit: "%", defaultValue: 5, min: 0, max: 50, step: 1 },
    ],
    resultLabels: {
      "need": "Нужно материала",
      "volume": "Чистый объём",
      "mass": "Масса",
      "bags": "Мешков по 25 кг",
      "area": "Площадь основания",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["concrete", "slab-foundation", "room-volume"],
  },
};

