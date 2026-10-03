import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { orbitalPeriodCopyEn } from './copy.en';
import { orbitalPeriodCopyUk } from './copy.uk';
import { orbitalPeriodCopyDe } from './copy.de';
import { orbitalPeriodCopyEs } from './copy.es';
import { orbitalPeriodReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "orbital-period",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: orbitalPeriodCopyEn, uk: orbitalPeriodCopyUk, de: orbitalPeriodCopyDe, es: orbitalPeriodCopyEs },
  referenceCases: orbitalPeriodReferenceCases,
  publishedExample: { inputs: { mass24: 5.972, radiusKm: 6771 }, expected: ["5 544,93 с"] },
  presentation: {
    id: "orbital-period",
    name: "Калькулятор периода обращения по орбите",
    slug: "period-obrashcheniya-po-orbite",
    fullPath: "/physics/period-obrashcheniya-po-orbite/",
    category: "physics",
    icon: "globe",
    popularity: 30,
    isNew: false,
    shortDescription: "Период обращения спутника по массе центрального тела и радиусу орбиты.",
    seoTitle: "Калькулятор периода обращения — спутник и геостационар",
    seoDescription: "Рассчитайте период обращения по круговой орбите и орбитальную скорость по массе центрального тела и радиусу орбиты.",
    h1: "Калькулятор периода обращения по орбите",
    keywords: ["период обращения", "орбитальная скорость", "геостационарная орбита", "третий закон Кеплера"],
    fields: [
      { name: 'mass24', label: "Масса центрального тела", type: 'number', defaultValue: 5.972, min: 0, step: 0.001 , unit: "10²⁴ кг" },
      { name: 'radiusKm', label: "Радиус орбиты", type: 'number', defaultValue: 6771, min: 0, step: 1 , unit: "км" },
    ],
    resultLabels: {
      "period": "Период обращения", "hours": "В часах", "speed": "Орбитальная скорость",
      "perDay": "Оборотов в сутки", "radius": "Радиус орбиты",
    },
    relatedCalculatorIds: ["centripetal-force", "escape-velocity", "gravitational-force"],
      ...contract.ru,
  },
};
