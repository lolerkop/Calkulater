import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { windChillCopyEn } from './copy.en';
import { windChillCopyUk } from './copy.uk';
import { windChillCopyDe } from './copy.de';
import { windChillCopyEs } from './copy.es';
import { windChillReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "wind-chill",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: windChillCopyEn, uk: windChillCopyUk, de: windChillCopyDe, es: windChillCopyEs },
  referenceCases: windChillReferenceCases,
  publishedExample: { inputs: { t: -10, v: 20 }, expected: ["-17,861 °C"] },
  presentation: {
    id: "wind-chill",
    name: "Калькулятор ощущаемой температуры при ветре",
    slug: "oshchushchaemaya-temperatura",
    fullPath: "/physics/oshchushchaemaya-temperatura/",
    category: "physics",
    icon: "gauge",
    popularity: 37,
    isNew: false,
    shortDescription: "Насколько холоднее ощущается мороз при ветре — по формуле метеослужб.",
    seoTitle: "Калькулятор ощущаемой температуры при ветре — wind chill",
    seoDescription: "Рассчитайте, насколько холоднее ощущается мороз при ветре, по формуле метеослужб Канады и США: ощущаемая температура и разница с термометром.",
    h1: "Калькулятор ощущаемой температуры при ветре",
    keywords: ["ощущаемая температура", "wind chill", "температура при ветре", "как ощущается мороз"],
    fields: [
      { name: 't', label: "Температура воздуха", type: 'number', defaultValue: -10, max: 10, signed: true, step: 1 , unit: "°C" },
      { name: 'v', label: "Скорость ветра", type: 'number', defaultValue: 20, min: 0, step: 1 , unit: "км/ч" },
    ],
    resultLabels: {
      "windChill": "Ощущаемая температура",
      "delta": "Разница с термометром",
      "airTemperature": "Температура воздуха",
      "windSpeed": "Скорость ветра",
      "fahrenheit": "Ощущаемая в градусах Фаренгейта",
    },
    relatedCalculatorIds: ["dew-point", "heat-index", "thermal-conduction"],
      ...contract.ru,
  },
};
