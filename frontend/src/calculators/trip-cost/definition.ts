import { automotiveWave10ContractContent } from './contractContent';
import { validate } from './validate';
// Топливо и платные дороги, делённые на пассажиров.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tripCostCopyEn } from './copy.en';
import { tripCostCopyUk } from './copy.uk';
import { tripCostCopyDe } from './copy.de';
import { tripCostCopyEs } from './copy.es';
import { tripCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "trip-cost",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: tripCostCopyEn, uk: tripCostCopyUk, de: tripCostCopyDe, es: tripCostCopyEs },
  referenceCases: tripCostReferenceCases,
  publishedExample: { inputs: { distance: 800, consumption: 7.5, fuelPrice: 62, tolls: 0, passengers: 1 }, expected: ["3 720,00 ₽"] },
  presentation: {
    id: "trip-cost",
    name: "Калькулятор стоимости поездки",
    slug: "trip-cost",
    fullPath: "/automotive/trip-cost/",
    category: "automotive",
    icon: "car",
    popularity: 34,
    isNew: false,
    shortDescription: "Топливо и платные дороги с делением на попутчиков.",
    seoTitle: "Калькулятор стоимости поездки — топливо, дороги, на человека",
    seoDescription:
      "Рассчитайте стоимость поездки по топливу и платным дорогам, с поездкой туда и обратно и делением на пассажиров.",
    h1: "Калькулятор стоимости поездки",
    keywords: ["стоимость поездки", "расходы на бензин", "разделить расходы на дорогу"],
    fields: [
      { name: 'distance', label: 'Расстояние, км', type: 'number', unit: "км", defaultValue: 800, min: 0, step: 10 },
      { name: 'consumption', label: 'Расход, л/100 км', type: 'number', unit: "л/100 км", defaultValue: 7.5, min: 0, step: 0.1 },
      { name: 'fuelPrice', label: 'Цена топлива за литр', type: 'number', defaultValue: 62, unit: '₽/л', min: 0, step: 0.5 },
      { name: 'tolls', label: 'Платные дороги', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 100, optional: true },
      { name: 'passengers', label: 'Пассажиров', type: 'number', defaultValue: 1, min: 1, step: 1 },
      {
        name: 'roundTrip', label: 'Туда и обратно', type: 'toggle', defaultValue: 'no',
        options: [{ value: 'no', label: 'Нет' }, { value: 'yes', label: 'Да' }],
      },
    ],
    resultLabels: { result: "Стоимость поездки", fuel: "Топливо", litres: "Израсходовано литров", perPerson: "На человека" },
    relatedCalculatorIds: ["fuel-consumption", "power-to-weight", "speed-distance-time"],
    ...automotiveWave10ContractContent.ru,
  },
};
