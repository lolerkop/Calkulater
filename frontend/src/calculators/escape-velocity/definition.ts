import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { escapeVelocityCopyEn } from './copy.en';
import { escapeVelocityCopyUk } from './copy.uk';
import { escapeVelocityCopyDe } from './copy.de';
import { escapeVelocityCopyEs } from './copy.es';
import { escapeVelocityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "escape-velocity",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: escapeVelocityCopyEn, uk: escapeVelocityCopyUk, de: escapeVelocityCopyDe, es: escapeVelocityCopyEs },
  referenceCases: escapeVelocityReferenceCases,
  publishedExample: { inputs: { mass24: 5.972, radiusKm: 6371 }, expected: ["11 185,98 м/с"] },
  presentation: {
    id: "escape-velocity",
    name: "Калькулятор второй космической скорости",
    slug: "vtoraya-kosmicheskaya-skorost",
    fullPath: "/physics/vtoraya-kosmicheskaya-skorost/",
    category: "physics",
    icon: "globe",
    popularity: 31,
    isNew: false,
    shortDescription: "Скорость ухода с планеты по её массе и радиусу.",
    seoTitle: "Калькулятор второй космической скорости — по массе и радиусу",
    seoDescription: "Рассчитайте скорости ухода и круговой орбиты в ньютоновской модели по массе и расстоянию от центра, вместе с гравитационным ускорением.",
    h1: "Калькулятор второй космической скорости",
    keywords: ["вторая космическая скорость", "первая космическая скорость", "скорость убегания", "гравитация планеты"],
    fields: [
      { name: 'mass24', label: "Масса тела", type: 'number', defaultValue: 5.972, min: 0, step: 0.001 , unit: "10²⁴ кг" },
      { name: 'radiusKm', label: "Радиус", type: 'number', defaultValue: 6371, min: 0, step: 1 , unit: "км" },
    ],
    resultLabels: {
      "escape": "Вторая космическая скорость",
      "orbital": "Первая космическая скорость",
      "kmh": "В километрах в час",
      "g": "Ускорение свободного падения",
      "mass": "Масса тела",
    },
    relatedCalculatorIds: ["gravitational-force", "orbital-period", "potential-energy"],
      ...contract.ru,
  },
};
