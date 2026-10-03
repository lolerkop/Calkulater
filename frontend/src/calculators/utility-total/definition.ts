import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { utilityTotalCopyEn } from './copy.en';
import { utilityTotalCopyUk } from './copy.uk';
import { utilityTotalCopyDe } from './copy.de';
import { utilityTotalCopyEs } from './copy.es';
import { utilityTotalReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "utility-total",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: utilityTotalCopyEn, uk: utilityTotalCopyUk, de: utilityTotalCopyDe, es: utilityTotalCopyEs },
  referenceCases: utilityTotalReferenceCases,
  publishedExample: { inputs: { meters: 'электричество 250 5,5\nвода 8 45\nгаз 40 7,2', fixed: 1200 }, expected: ["3 223,00 ₽"] },
  presentation: {
    ...contractContent.ru,
    id: "utility-total",
    name: "Калькулятор коммунальных платежей",
    slug: "kommunalnye-platezhi",
    fullPath: "/household/kommunalnye-platezhi/",
    category: "household",
    icon: "home",
    popularity: 48,
    isNew: false,
    shortDescription: "Складывает услуги по счётчикам и постоянные начисления в один месячный итог.",
    seoTitle: "Калькулятор коммунальных платежей: счётчики, тарифы и постоянная часть",
    seoDescription: "Сложите электричество, воду и газ по показаниям и тарифам вместе с постоянными начислениями в один месячный итог.",
    h1: "Калькулятор коммунальных платежей",
    keywords: ["коммунальные платежи", "итог коммуналки за месяц", "стоимость по показаниям", "счёт за электричество воду газ"],
    fields: [
      {
        name: 'meters', label: 'Услуги: название, расход и тариф в строке', type: 'textarea',
        // Умолчание не имеет пути локализации, поэтому названия здесь нейтральны.
        defaultValue: 'electricity 250 5.5\nwater 8 45\ngas 40 7.2',
      },
      { name: 'fixed', label: 'Постоянные начисления за месяц', type: 'number', unit: '₽', defaultValue: 1200, min: 0, step: 50 },
    ],
    resultLabels: {
      "total": "Итого за месяц",
      "count": "Позиций",
      "topName": "Самая дорогая услуга",
      "variable": "Переменная часть",
      "fixed": "Постоянная часть",
      "perYear": "В год",
      "table": "Расход по услугам",
    },
    relatedCalculatorIds: ["electricity-usage", "heating-power", "price-per-unit"],
  },
};
