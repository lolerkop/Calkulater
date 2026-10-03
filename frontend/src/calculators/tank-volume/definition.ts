import { buildingWave16ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { tankVolumeCopyEn } from './copy.en';
import { tankVolumeCopyUk } from './copy.uk';
import { tankVolumeCopyDe } from './copy.de';
import { tankVolumeCopyEs } from './copy.es';
import { tankVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "tank-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: tankVolumeCopyEn, uk: tankVolumeCopyUk, de: tankVolumeCopyDe, es: tankVolumeCopyEs },
  referenceCases: tankVolumeReferenceCases,
  publishedExample: {
    inputs: { shape: 'vertical-cylinder', d: 1.5, len: 2, level: 1.2 },
    expected: ["2,121 м³"],
  },
  presentation: {
    id: "tank-volume",
    name: "Калькулятор объёма ёмкости",
    slug: "obyom-emkosti",
    fullPath: "/building/obyom-emkosti/",
    category: "building",
    icon: "cylinder",
    popularity: 33,
    isNew: false,
    shortDescription: "Полный объём бака и объём налитого при заданном уровне.",
    longDescription:
      buildingWave16ContractContent.ru.longDescription,
    seoTitle: "Калькулятор объёма ёмкости — бак, цистерна, бочка",
    seoDescription: "Рассчитайте полный объём ёмкости и объём налитого по уровню для вертикального бака, горизонтальной цистерны, прямоугольной ванны и капсулы.",
    h1: "Калькулятор объёма ёмкости",
    keywords: ["объём ёмкости", "объём цистерны", "объём бака", "сколько литров в бочке"],
    fields: [
      {
        name: 'shape', label: 'Форма ёмкости', type: 'select', defaultValue: 'vertical-cylinder',
        options: [
          { value: 'vertical-cylinder', label: 'вертикальный цилиндр' },
          { value: 'horizontal-cylinder', label: 'горизонтальная цистерна' },
          { value: 'rect', label: 'прямоугольная' },
          { value: 'capsule', label: 'капсула' },
        ],
      },
      { name: 'd', label: "Диаметр или сторона", type: 'number', defaultValue: 1.5, min: 0, step: 0.1 , unit: "м" },
      { name: 'len', label: "Высота или длина", type: 'number', defaultValue: 2, min: 0, step: 0.1 , unit: "м" },
      { name: 'level', label: "Уровень жидкости", type: 'number', defaultValue: 1.2, min: 0, step: 0.1 , unit: "м" },
    ],
    resultLabels: {
      "filled": "Объём налитого",
      "full": "Полный объём",
      "share": "Заполнено",
      "litres": "В литрах",
      "free": "Свободно",
    },
    howToUse: buildingWave16ContractContent.ru.howToUse,
    howItWorks: buildingWave16ContractContent.ru.howItWorks,
    example: buildingWave16ContractContent.ru.example,
    faq: buildingWave16ContractContent.ru.faq,
    relatedCalculatorIds: ["geom-cylinder", "pool-fill-time", "room-volume"],
      disclaimer: buildingWave16ContractContent.ru.disclaimer,
  },
};
