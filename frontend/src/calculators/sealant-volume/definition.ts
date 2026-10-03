import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { sealantVolumeCopyEn } from './copy.en';
import { sealantVolumeCopyUk } from './copy.uk';
import { sealantVolumeCopyDe } from './copy.de';
import { sealantVolumeCopyEs } from './copy.es';
import { sealantVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "sealant-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: sealantVolumeCopyEn, uk: sealantVolumeCopyUk, de: sealantVolumeCopyDe, es: sealantVolumeCopyEs },
  referenceCases: sealantVolumeReferenceCases,
  publishedExample: { inputs: { width: 6, depth: 6, length: 12, cart: 310, waste: 10 }, expected: ["475,2 мл"] },
  presentation: {
    id: "sealant-volume",
    name: "Калькулятор расхода герметика",
    slug: "raskhod-germetika",
    fullPath: "/building/raskhod-germetika/",
    category: "building",
    icon: "wall",
    popularity: 28,
    isNew: false,
    shortDescription: "Расход герметика на шов заданного сечения и число картриджей.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор расхода герметика — объём и число картриджей",
    seoDescription: "Рассчитайте расход герметика по ширине, глубине и длине шва, узнайте число картриджей и метраж из одного картриджа.",
    h1: "Калькулятор расхода герметика",
    keywords: ["расход герметика", "герметик картридж", "сечение шва", "силиконовый герметик"],
    fields: [
      { name: 'width', label: "Ширина шва", type: 'number', defaultValue: 6, min: 0, step: 1 , unit: "мм" },
      { name: 'depth', label: "Глубина шва", type: 'number', defaultValue: 6, min: 0, step: 1 , unit: "мм" },
      { name: 'length', label: "Длина шва", type: 'number', defaultValue: 12, min: 0, step: 0.5 , unit: "м" },
      { name: 'cart', label: "Объём картриджа", type: 'number', defaultValue: 310, min: 0, step: 10 , unit: "мл" },
      { name: 'waste', label: "Запас", type: 'number', defaultValue: 10, min: 0, max: 100, step: 5 , unit: "%" },
    ],
    resultLabels: {
      "need": "Нужно герметика", "raw": "Без запаса", "cartridges": "Картриджей",
      "perCartridge": "Метров из одного картриджа", "section": "Сечение шва",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks: buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["epoxy-volume", "plaster", "paint-calculator"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
