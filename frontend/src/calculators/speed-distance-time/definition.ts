import { automotiveWave10ContractContent } from './contractContent';
// Скорость, расстояние и время: три режима на одну связь.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { speedDistanceTimeCopyEn } from './copy.en';
import { speedDistanceTimeCopyUk } from './copy.uk';
import { speedDistanceTimeCopyDe } from './copy.de';
import { speedDistanceTimeCopyEs } from './copy.es';
import { speedDistanceTimeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "speed-distance-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: speedDistanceTimeCopyEn, uk: speedDistanceTimeCopyUk, de: speedDistanceTimeCopyDe, es: speedDistanceTimeCopyEs },
  referenceCases: speedDistanceTimeReferenceCases,
  publishedExample: { inputs: { mode: 'speed', distance: 420, time: 5 }, expected: ["84,00 км/ч"] },
  presentation: {
    id: "speed-distance-time",
    name: "Калькулятор скорости, расстояния и времени",
    slug: "speed-distance-time",
    fullPath: "/automotive/speed-distance-time/",
    category: "automotive",
    icon: "car",
    popularity: 36,
    isNew: false,
    shortDescription: "Найти скорость, расстояние или время по двум другим.",
    seoTitle: "Калькулятор скорости, расстояния и времени — найти любую",
    seoDescription:
      "Рассчитайте скорость, расстояние или время в пути по двум известным величинам с разбивкой времени на часы и минуты.",
    h1: "Калькулятор скорости, расстояния и времени",
    keywords: ["скорость расстояние время", "время в пути", "средняя скорость"],
    fields: [
      {
        name: 'mode', label: 'Что находим', type: 'select', defaultValue: 'speed',
        options: [
          { value: 'speed', label: 'скорость' },
          { value: 'distance', label: 'расстояние' },
          { value: 'time', label: 'время' },
        ],
      },
      { name: 'distance', label: 'Расстояние, км', type: 'number', unit: "км", defaultValue: 420, min: 0, step: 10, showIf: { field: 'mode', oneOf: ['speed', 'time'] } },
      { name: 'time', label: 'Время, часов', type: 'number', unit: "ч", defaultValue: 5, min: 0, step: 0.5, showIf: { field: 'mode', oneOf: ['speed', 'distance'] } },
      { name: 'speed', label: 'Скорость, км/ч', type: 'number', unit: "км/ч", defaultValue: 84, min: 0, step: 5, showIf: { field: 'mode', oneOf: ['distance', 'time'] } },
    ],
    resultLabels: { result: "Результат", travel: "Время в пути", speed: "Скорость", distance: "Расстояние" },
    relatedCalculatorIds: ["trip-cost", "fuel-consumption", "convert-speed"],
    ...automotiveWave10ContractContent.ru,
  },
};
