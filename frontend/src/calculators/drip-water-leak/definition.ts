import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { dripWaterLeakCopyEn } from './copy.en';
import { dripWaterLeakCopyUk } from './copy.uk';
import { dripWaterLeakCopyDe } from './copy.de';
import { dripWaterLeakCopyEs } from './copy.es';
import { dripWaterLeakReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "drip-water-leak",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: dripWaterLeakCopyEn, uk: dripWaterLeakCopyUk, de: dripWaterLeakCopyDe, es: dripWaterLeakCopyEs },
  referenceCases: dripWaterLeakReferenceCases,
  publishedExample: { inputs: { drops: 10, price: 45, dropMl: 0.05 }, expected: ["0,72 л"] },
  presentation: {
    ...contractContent.ru,
    id: "drip-water-leak",
    name: "Калькулятор потерь воды из подтекающего крана",
    slug: "protechka-krana",
    fullPath: "/household/protechka-krana/",
    category: "household",
    icon: "droplet",
    popularity: 28,
    isNew: true,
    shortDescription: "Сколько воды и денег утекает через капающий кран за сутки, месяц и год.",
    seoTitle: "Калькулятор потерь воды из капающего крана",
    seoDescription: "Посчитайте, сколько литров и денег теряется через подтекающий кран за сутки, месяц и год по числу капель в минуту.",
    h1: "Калькулятор потерь воды из подтекающего крана",
    keywords: ["капающий кран", "потери воды", "утечка воды", "экономия воды"],
    fields: [
      { name: 'drops', label: 'Капель в минуту', type: 'number', defaultValue: 10, min: 0, step: 1 },
      { name: 'price', label: "Цена воды за м³", type: 'number', unit: '₽', defaultValue: 45, min: 0, step: 1 },
      { name: 'dropMl', label: 'Объём капли, мл', type: 'number', defaultValue: 0.05, min: 0, step: 0.01 },
    ],
    resultLabels: { "day": "Утекает за сутки", "month": "За месяц", "year": "За год", "m3": "В кубометрах за год", "cost": "Стоимость за год", },
    relatedCalculatorIds: ["pool-fill-time", "utility-total", "electricity-usage"],
  },
};
