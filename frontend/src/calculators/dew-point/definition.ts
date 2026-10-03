import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { dewPointCopyEn } from './copy.en';
import { dewPointCopyUk } from './copy.uk';
import { dewPointCopyDe } from './copy.de';
import { dewPointCopyEs } from './copy.es';
import { dewPointReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "dew-point",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: dewPointCopyEn, uk: dewPointCopyUk, de: dewPointCopyDe, es: dewPointCopyEs },
  referenceCases: dewPointReferenceCases,
  publishedExample: { inputs: { t: 20, rh: 60 }, expected: ["11,993 °C"] },
  presentation: {
    id: "dew-point",
    name: "Калькулятор точки росы",
    slug: "tochka-rosy",
    fullPath: "/physics/tochka-rosy/",
    category: "physics",
    icon: "droplets",
    popularity: 38,
    isNew: false,
    shortDescription: "Температура, при которой воздух этой влажности начнёт отдавать влагу.",
    seoTitle: "Калькулятор точки росы — по температуре и влажности",
    seoDescription: "Рассчитайте точку росы по температуре воздуха и относительной влажности, с разрывом до текущей температуры и значением в градусах Фаренгейта.",
    h1: "Калькулятор точки росы",
    keywords: ["точка росы", "калькулятор точки росы", "конденсат на стене", "влажность и температура"],
    fields: [
      { name: 't', label: "Температура воздуха", type: 'number', defaultValue: 20, min: -60, max: 60, signed: true, step: 0.5 , unit: "°C" },
      { name: 'rh', label: "Относительная влажность", type: 'number', defaultValue: 60, min: 0, max: 100, step: 1 , unit: "%" },
    ],
    resultLabels: {
      "dewPoint": "Точка росы",
      "spread": "Разрыв с температурой",
      "airTemperature": "Температура воздуха",
      "humidity": "Относительная влажность",
      "fahrenheit": "Точка росы в градусах Фаренгейта",
    },
    relatedCalculatorIds: ["wind-chill", "heat-index", "thermal-conduction"],
      ...contract.ru,
  },
};
