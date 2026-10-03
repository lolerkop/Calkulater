import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { contextualField } from './contextualField';
import { specificHeatCopyEn } from './copy.en';
import { specificHeatCopyUk } from './copy.uk';
import { specificHeatCopyDe } from './copy.de';
import { specificHeatCopyEs } from './copy.es';
import { specificHeatReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "specific-heat",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: specificHeatCopyEn, uk: specificHeatCopyUk, de: specificHeatCopyDe, es: specificHeatCopyEs },
  referenceCases: specificHeatReferenceCases,
  publishedExample: { inputs: { mode: 'energy', mass: 2, c: 4186, dt: 50, q: 418600 }, expected: ["418 600 Дж"] },
  presentation: {
    id: "specific-heat",
    name: "Калькулятор теплоты нагрева",
    slug: "udelnaya-teploemkost",
    fullPath: "/physics/udelnaya-teploemkost/",
    category: "physics",
    icon: "flame",
    popularity: 30,
    isNew: false,
    shortDescription: "Сколько энергии нужно, чтобы нагреть тело: Q = c·m·ΔT.",
    seoTitle: "Калькулятор теплоты нагрева — Q = c·m·ΔT",
    seoDescription: "Рассчитайте количество теплоты на нагрев или охлаждение тела по удельной теплоёмкости, массе и перепаду температуры.",
    h1: "Калькулятор теплоты нагрева",
    keywords: ["удельная теплоёмкость", "количество теплоты", "формула q cm dt", "нагрев воды энергия"],
    fields: [
      {
        name: 'mode', label: 'Что найти', type: 'select', defaultValue: 'energy',
        options: [
          { value: 'energy', label: 'энергию' },
          { value: 'deltaT', label: 'изменение температуры' },
          { value: 'mass', label: 'массу' },
        ],
      },
      { name: 'mass', label: "Масса", type: 'number', defaultValue: 2, min: 0, step: 0.1 , unit: "кг", showIf: { field: 'mode', oneOf: ["energy","deltaT"] } },
      { name: 'c', label: "Удельная теплоёмкость", type: 'number', defaultValue: 4186, min: 0, step: 10 , unit: "Дж/(кг·К)" },
      { name: 'dt', label: "Изменение температуры", type: 'number', defaultValue: 50, signed: true, step: 1 , unit: "К", showIf: { field: 'mode', oneOf: ["energy","mass"] } },
      { name: 'q', label: "Энергия", type: 'number', defaultValue: 418600, signed: true, step: 1000 , unit: "Дж", showIf: { field: 'mode', oneOf: ["deltaT","mass"] } },
    ],
    resultLabels: {
      "energy": "Энергия",
      "deltaT": "Изменение температуры",
      "mass": "Масса",
      "kwh": "В киловатт-часах",
      "capacity": "Удельная теплоёмкость",
    },
    relatedCalculatorIds: ["thermal-conduction", "physics-power", "potential-energy"],
      ...contract.ru,
  },
};
