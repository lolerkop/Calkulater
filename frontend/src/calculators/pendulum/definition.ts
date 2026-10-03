import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { pendulumCopyEn } from './copy.en';
import { pendulumCopyUk } from './copy.uk';
import { pendulumCopyDe } from './copy.de';
import { pendulumCopyEs } from './copy.es';
import { pendulumReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "pendulum",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: pendulumCopyEn, uk: pendulumCopyUk, de: pendulumCopyDe, es: pendulumCopyEs },
  referenceCases: pendulumReferenceCases,
  publishedExample: { inputs: { length: 1, g: 9.80665 }, expected: ["2,006 с"] },
  presentation: {
    id: "pendulum",
    name: "Калькулятор периода маятника",
    slug: "period-mayatnika",
    fullPath: "/physics/period-mayatnika/",
    category: "physics",
    icon: "clock",
    popularity: 30,
    isNew: false,
    shortDescription: "Период колебаний математического маятника по длине подвеса.",
    seoTitle: "Калькулятор периода маятника — по длине подвеса",
    seoDescription: "Рассчитайте период и частоту колебаний математического маятника по длине подвеса и ускорению свободного падения.",
    h1: "Калькулятор периода маятника",
    keywords: ["период маятника", "математический маятник", "частота колебаний", "секундный маятник"],
    fields: [
      { name: 'length', label: "Длина подвеса", type: 'number', defaultValue: 1, min: 0, step: 0.1 , unit: "м" },
      { name: 'g', label: "Ускорение свободного падения", type: 'number', defaultValue: 9.80665, min: 0, step: 0.01 , unit: "м/с²" },
    ],
    resultLabels: {
      "period": "Период колебаний",
      "frequency": "Частота",
      "perMinute": "Колебаний в минуту",
      "lengthForSecond": "Длина для периода 1 с",
      "g": "Ускорение свободного падения",
    },
    relatedCalculatorIds: ["free-fall", "wave", "gravitational-force"],
      ...contract.ru,
  },
};
