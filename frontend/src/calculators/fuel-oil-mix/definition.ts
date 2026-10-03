import { automotiveWave10ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { fuelOilMixCopyEn } from './copy.en';
import { fuelOilMixCopyUk } from './copy.uk';
import { fuelOilMixCopyDe } from './copy.de';
import { fuelOilMixCopyEs } from './copy.es';
import { fuelOilMixReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "fuel-oil-mix",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: fuelOilMixCopyEn, uk: fuelOilMixCopyUk, de: fuelOilMixCopyDe, es: fuelOilMixCopyEs },
  referenceCases: fuelOilMixReferenceCases,
  publishedExample: { inputs: { fuel: 5, ratio: 50 }, expected: ["100 мл"] },
  presentation: {
    id: "fuel-oil-mix",
    name: "Калькулятор бензина с маслом для двухтактного двигателя",
    slug: "benzin-s-maslom-dlya-dvuhtaktnogo",
    fullPath: "/automotive/benzin-s-maslom-dlya-dvuhtaktnogo/",
    category: "automotive",
    icon: "flame",
    popularity: 35,
    isNew: false,
    shortDescription: "Сколько масла добавить в бензин по пропорции 1:N.",
    seoTitle: "Калькулятор бензина с маслом для двухтактного двигателя — 1:25, 1:50",
    seoDescription: "Рассчитайте, сколько масла добавить в бензин для двухтактного двигателя при пропорции от 1:20 до 1:100.",
    h1: "Калькулятор бензина с маслом для двухтактного двигателя",
    keywords: ["бензин с маслом", "двухтактный двигатель", "пропорция 1:50", "смесь для бензопилы"],
    fields: [
      { name: 'fuel', label: 'Бензина, л', type: 'number', unit: "л", defaultValue: 5, min: 0, step: 0.5 },
      { name: 'ratio', label: 'Пропорция 1:N', type: 'number', defaultValue: 50, min: 20, max: 100, step: 1 },
    ],
    resultLabels: {
      "oil": "Масла", "mix": "Объём смеси", "share": "Доля масла",
      "ratio": "Соотношение", "fuel": "Бензина",
    },
    relatedCalculatorIds: ["fuel-consumption", "generator-fuel", "trip-cost"],
    ...automotiveWave10ContractContent.ru,
  },
};
