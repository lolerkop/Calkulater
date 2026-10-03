import { buildingWave13ContractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { beamDeflectionCopyEn } from './copy.en';
import { beamDeflectionCopyUk } from './copy.uk';
import { beamDeflectionCopyDe } from './copy.de';
import { beamDeflectionCopyEs } from './copy.es';
import { beamDeflectionReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "beam-deflection",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: beamDeflectionCopyEn, uk: beamDeflectionCopyUk, de: beamDeflectionCopyDe, es: beamDeflectionCopyEs },
  referenceCases: beamDeflectionReferenceCases,
  publishedExample: { inputs: { scheme: "uniform", load: 2, span: 3, e: 10, inertia: 1000 }, expected: ["21,094 мм"] },
  presentation: {
    id: "beam-deflection",
    name: "Калькулятор прогиба балки",
    slug: "progib-balki",
    fullPath: "/building/progib-balki/",
    category: "building",
    icon: "wall",
    popularity: 34,
    isNew: false,
    shortDescription: "Прогиб балки на двух опорах при равномерной или сосредоточенной нагрузке.",
    longDescription:
      buildingWave13ContractContent.ru.longDescription,
    seoTitle: "Калькулятор прогиба балки — равномерная и сосредоточенная нагрузка",
    seoDescription: "Рассчитайте прогиб балки на двух опорах по нагрузке, пролёту, модулю упругости и моменту инерции сечения.",
    h1: "Калькулятор прогиба балки",
    keywords: ["прогиб балки", "жёсткость перекрытия", "момент инерции сечения", "относительный прогиб"],
    fields: [
      {
        name: 'scheme', label: 'Схема нагружения', type: 'select', defaultValue: 'uniform',
        options: [
          { value: 'uniform', label: 'равномерная, кН/м' },
          { value: 'point', label: 'сосредоточенная в середине, кН' },
        ],
      },
      { name: 'load', label: 'Нагрузка', type: 'number', unit: 'кН/м или кН', defaultValue: 2, min: 0, step: 0.1 },
      { name: 'span', label: "Пролёт", type: 'number', unit: "м", defaultValue: 3, min: 0, step: 0.1 },
      { name: 'e', label: "Модуль упругости", type: 'number', unit: "ГПа", defaultValue: 10, min: 0, step: 1 },
      { name: 'inertia', label: "Момент инерции сечения", type: 'number', unit: "см⁴", defaultValue: 1000, min: 0, step: 10 },
    ],
    resultLabels: {
      "deflection": "Прогиб", "relative": "Относительный прогиб", "ei": "Жёсткость EI",
      "span": "Пролёт", "limit": "Предел 1/250",
    },
    howToUse: buildingWave13ContractContent.ru.howToUse,
    howItWorks: buildingWave13ContractContent.ru.howItWorks,
    example: buildingWave13ContractContent.ru.example,
    faq: buildingWave13ContractContent.ru.faq,
    relatedCalculatorIds: ["beam-stress", "board-volume", "metal-weight"],
    disclaimer: buildingWave13ContractContent.ru.disclaimer,
  },
};

