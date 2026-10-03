import { automotiveWave10ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { stoppingDistanceCopyEn } from './copy.en';
import { stoppingDistanceCopyUk } from './copy.uk';
import { stoppingDistanceCopyDe } from './copy.de';
import { stoppingDistanceCopyEs } from './copy.es';
import { stoppingDistanceReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "stopping-distance",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: stoppingDistanceCopyEn, uk: stoppingDistanceCopyUk, de: stoppingDistanceCopyDe, es: stoppingDistanceCopyEs },
  referenceCases: stoppingDistanceReferenceCases,
  publishedExample: { inputs: { speed: 90, reaction: 1, mu: 0.7, grade: 0 }, expected: ["70,523 м"] },
  presentation: {
    id: "stopping-distance",
    name: "Калькулятор тормозного пути",
    slug: "tormoznoy-put",
    fullPath: "/automotive/tormoznoy-put/",
    category: "automotive",
    icon: "car",
    popularity: 37,
    isNew: false,
    shortDescription: "Полный остановочный путь: реакция плюс торможение.",
    seoTitle: "Калькулятор тормозного пути — реакция, сцепление, уклон",
    seoDescription: "Рассчитайте полный остановочный путь по скорости, времени реакции, коэффициенту сцепления и уклону дороги.",
    h1: "Калькулятор тормозного пути",
    keywords: ["тормозной путь", "остановочный путь", "коэффициент сцепления", "время реакции водителя"],
    fields: [
      { name: 'speed', label: 'Скорость, км/ч', type: 'number', unit: "км/ч", defaultValue: 90, min: 0, step: 10 },
      { name: 'reaction', label: 'Время реакции, с', type: 'number', unit: "с", defaultValue: 1, min: 0, step: 0.1 },
      { name: 'mu', label: 'Коэффициент сцепления', type: 'number', defaultValue: 0.7, min: 0, step: 0.05 },
      { name: 'grade', label: 'Уклон дороги, %', type: 'number', unit: "%", defaultValue: 0, signed: true, step: 1 },
    ],
    resultLabels: {
      "total": "Полный остановочный путь",
      "reactionDist": "Путь за время реакции",
      "braking": "Тормозной путь",
      "decel": "Замедление",
      "brakeTime": "Время торможения",
    },
    relatedCalculatorIds: ["speed-distance-time", "tire-size", "fuel-consumption"],
    ...automotiveWave10ContractContent.ru,
  },
};
