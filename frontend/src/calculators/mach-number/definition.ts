import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { machNumberCopyEn } from './copy.en';
import { machNumberCopyUk } from './copy.uk';
import { machNumberCopyDe } from './copy.de';
import { machNumberCopyEs } from './copy.es';
import { machNumberReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "mach-number",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: machNumberCopyEn, uk: machNumberCopyUk, de: machNumberCopyDe, es: machNumberCopyEs },
  referenceCases: machNumberReferenceCases,
  publishedExample: { inputs: { v: 900, t: -50 }, expected: ["0,8349"] },
  presentation: {
    id: "mach-number",
    name: "Калькулятор числа Маха",
    slug: "chislo-maha",
    fullPath: "/physics/chislo-maha/",
    category: "physics",
    icon: "atom",
    popularity: 26,
    isNew: false,
    shortDescription: "Число Маха по скорости и температуре воздуха, с определением режима полёта.",
    seoTitle: "Калькулятор числа Маха — скорость звука и режим полёта",
    seoDescription: "Число Маха по скорости относительно воздуха и его температуре в приближённой модели сухого воздуха; скорость звука и широкая классификация режима.",
    h1: "Калькулятор числа Маха",
    keywords: ["число Маха", "скорость звука", "звуковой барьер", "сверхзвук"],
    fields: [
      { name: 'v', label: "Скорость относительно воздуха", type: 'number', defaultValue: 900, min: 0, step: 10 , unit: "км/ч" },
      { name: 't', label: "Температура воздуха", type: 'number', defaultValue: -50, signed: true, step: 1 , unit: "°C" },
    ],
    resultLabels: {
      "mach": "Число Маха", "sound": "Скорость звука", "regime": "Режим",
      "ms": "Скорость в метрах в секунду", "soundKmh": "Скорость звука в километрах в час",
    },
    relatedCalculatorIds: ["speed-distance-time", "wave", "air-density"],
      ...contract.ru,
  },
};
