// Топливо и платные дороги, делённые на пассажиров.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { tripCostCopyEn } from './copy.en';
import { tripCostCopyUk } from './copy.uk';
import { tripCostReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "trip-cost",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: tripCostCopyEn, uk: tripCostCopyUk },
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
    isNew: true,
    shortDescription: "Топливо и платные дороги с делением на попутчиков.",
    longDescription:
      "Переводит расстояние и расход в литры, оценивает их по цене на колонке и добавляет платные дороги. Считается только то, что действительно тратится в дороге: амортизация, износ и налоги на километр зависят от машины и пробега, и подставить их значило бы выдать догадку за расчёт.",
    seoTitle: "Калькулятор стоимости поездки — топливо, дороги, на человека",
    seoDescription:
      "Рассчитайте стоимость поездки по топливу и платным дорогам, с поездкой туда и обратно и делением на пассажиров.",
    h1: "Калькулятор стоимости поездки",
    keywords: ["стоимость поездки", "расходы на бензин", "разделить расходы на дорогу"],
    fields: [
      { name: 'distance', label: 'Расстояние, км', type: 'number', defaultValue: 800, min: 0, step: 10 },
      { name: 'consumption', label: 'Расход, л/100 км', type: 'number', defaultValue: 7.5, min: 0, step: 0.1 },
      { name: 'fuelPrice', label: 'Цена топлива', type: 'number', defaultValue: 62, unit: '₽', min: 0, step: 0.5 },
      { name: 'tolls', label: 'Платные дороги', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 100, optional: true },
      { name: 'passengers', label: 'Пассажиров', type: 'number', defaultValue: 1, min: 1, step: 1 },
      {
        name: 'roundTrip', label: 'Туда и обратно', type: 'toggle', defaultValue: 'no',
        options: [{ value: 'no', label: 'Нет' }, { value: 'yes', label: 'Да' }],
      },
    ],
    resultLabels: { result: "Стоимость поездки", fuel: "Топливо", litres: "Израсходовано литров", perPerson: "На человека" },
    howToUse: ["Введите расстояние и свой расход.", "Укажите цену топлива, по которой заправляетесь.", "Добавьте платные дороги и пассажиров, если они есть."],
    howItWorks: "Литры = расстояние ÷ 100 × расход; стоимость = литры × цена + платные дороги; доля — это итог, делённый на пассажиров.",
    example: "800 км при 7,5 л на 100 и цене 62 требуют 60 литров и обходятся в 3720.",
    faq: [
      { q: "Учитывается ли износ и амортизация?", a: "Нет, только топливо и платные дороги. Стоимость километра по износу сильно зависит от машины и была бы догадкой, а не расчётом." },
      { q: "Как посчитать дорогу обратно?", a: "Включите режим «туда и обратно» — расстояние удвоится вместе с нужным топливом." },
      { q: "Какой расход указывать?", a: "Тот, что замерили сами. Трасса и город различаются достаточно, чтобы паспортная цифра редко совпадала с реальной поездкой." },
      { q: "Платные дороги — за одну сторону или всего?", a: "Всего. Введите то, во что обойдётся вся поездка, включая обратный путь, если он выбран." },
    ],
    relatedCalculatorIds: ["fuel-consumption", "power-to-weight", "speed-distance-time"],
  },
};
