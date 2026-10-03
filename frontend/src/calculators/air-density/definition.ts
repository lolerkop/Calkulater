import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { airDensityCopyEn } from './copy.en';
import { airDensityCopyUk } from './copy.uk';
import { airDensityCopyDe } from './copy.de';
import { airDensityCopyEs } from './copy.es';
import { airDensityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "air-density",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: airDensityCopyEn, uk: airDensityCopyUk, de: airDensityCopyDe, es: airDensityCopyEs },
  referenceCases: airDensityReferenceCases,
  publishedExample: { inputs: { t: 20, pressure: 1013.25, humidity: 50 }, expected: ["1,199 кг/м³"] },
  presentation: {
    id: "air-density",
    name: "Калькулятор плотности воздуха",
    slug: "plotnost-vozduha",
    fullPath: "/physics/plotnost-vozduha/",
    category: "physics",
    icon: "gauge",
    popularity: 30,
    isNew: false,
    shortDescription: "Плотность влажного воздуха по температуре, давлению и влажности.",
    seoTitle: "Калькулятор плотности воздуха — по температуре, давлению и влажности",
    seoDescription: "Рассчитайте плотность влажного воздуха по температуре, атмосферному давлению и относительной влажности.",
    h1: "Калькулятор плотности воздуха",
    keywords: ["плотность воздуха", "влажный воздух", "давление насыщения", "стандартная атмосфера"],
    fields: [
      { name: 't', label: "Температура", type: 'number', defaultValue: 20, signed: true, step: 1 , unit: "°C" },
      { name: 'pressure', label: "Атмосферное давление", type: 'number', defaultValue: 1013.25, min: 0, step: 1 , unit: "гПа" },
      { name: 'humidity', label: "Относительная влажность", type: 'number', defaultValue: 50, min: 0, max: 100, step: 5 , unit: "%" },
    ],
    resultLabels: {
      "rho": "Плотность воздуха",
      "dry": "Плотность сухого воздуха",
      "pv": "Давление водяного пара",
      "es": "Давление насыщения",
      "delta": "Отклонение от 1,225",
    },
    relatedCalculatorIds: ["density", "dew-point", "pressure"],
      ...contract.ru,
  },
};
