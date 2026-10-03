import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { freeFallCopyEn } from './copy.en';
import { freeFallCopyUk } from './copy.uk';
import { freeFallCopyDe } from './copy.de';
import { freeFallCopyEs } from './copy.es';
import { freeFallReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "free-fall",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: freeFallCopyEn, uk: freeFallCopyUk, de: freeFallCopyDe, es: freeFallCopyEs },
  referenceCases: freeFallReferenceCases,
  publishedExample: { inputs: { mode: 'fromHeight', h: 20, t: 2, g: 9.80665 }, expected: ["19,806 м/с"] },
  presentation: {
    id: "free-fall",
    name: "Калькулятор свободного падения",
    slug: "svobodnoe-padenie",
    fullPath: "/physics/svobodnoe-padenie/",
    category: "physics",
    icon: "arrow-left-right",
    popularity: 32,
    isNew: false,
    shortDescription: "Скорость у земли и время падения по высоте или по времени.",
    seoTitle: "Калькулятор свободного падения — скорость и время",
    seoDescription: "Рассчитайте скорость у земли и время свободного падения по высоте или по времени, с ускорением свободного падения полем.",
    h1: "Калькулятор свободного падения",
    keywords: ["свободное падение", "скорость падения", "время падения", "высота падения"],
    fields: [
      {
        name: 'mode', label: 'Что известно', type: 'select', defaultValue: 'fromHeight',
        options: [
          { value: 'fromHeight', label: 'высота' },
          { value: 'fromTime', label: 'время' },
        ],
      },
      { name: 'h', label: "Высота", type: 'number', defaultValue: 20, min: 0, step: 1, showIf: { field: 'mode', equals: 'fromHeight' } , unit: "м" },
      { name: 't', label: "Время падения", type: 'number', defaultValue: 2, min: 0, step: 0.1, showIf: { field: 'mode', equals: 'fromTime' } , unit: "с" },
      { name: 'g', label: "Ускорение свободного падения", type: 'number', defaultValue: 9.80665, min: 0, step: 0.01 , unit: "м/с²" },
    ],
    resultLabels: {
      "speed": "Скорость у земли", "time": "Время падения", "height": "Высота падения",
      "kmh": "В километрах в час", "energy": "Кинетическая энергия на килограмм",
    },
    relatedCalculatorIds: ["projectile-motion", "acceleration", "potential-energy"],
      ...contract.ru,
  },
};
