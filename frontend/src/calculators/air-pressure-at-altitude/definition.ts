import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { airPressureAtAltitudeCopyEn } from './copy.en';
import { airPressureAtAltitudeCopyUk } from './copy.uk';
import { airPressureAtAltitudeCopyDe } from './copy.de';
import { airPressureAtAltitudeCopyEs } from './copy.es';
import { airPressureAtAltitudeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "air-pressure-at-altitude",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: airPressureAtAltitudeCopyEn, uk: airPressureAtAltitudeCopyUk, de: airPressureAtAltitudeCopyDe, es: airPressureAtAltitudeCopyEs },
  referenceCases: airPressureAtAltitudeReferenceCases,
  publishedExample: { inputs: { h: 2000 }, expected: ["79,496 кПа"] },
  presentation: {
    id: "air-pressure-at-altitude",
    name: "Калькулятор атмосферного давления на высоте",
    slug: "davlenie-na-vysote",
    fullPath: "/physics/davlenie-na-vysote/",
    category: "physics",
    icon: "atom",
    popularity: 28,
    isNew: false,
    shortDescription: "Атмосферное давление, температура и плотность воздуха на заданной высоте.",
    seoTitle: "Калькулятор атмосферного давления на высоте",
    seoDescription: "Модель давления, температуры и плотности для высот от −430 до 11 000 м с заданным температурным градиентом.",
    h1: "Калькулятор атмосферного давления на высоте",
    keywords: ["атмосферное давление", "давление на высоте", "стандартная атмосфера", "плотность воздуха"],
    fields: [
      { name: 'h', label: "Высота над уровнем моря", type: 'number', defaultValue: 2000, min: -430, max: 11000, signed: true, step: 100 , unit: "м" },
    ],
    resultLabels: {
      "pressure": "Давление", "mmhg": "В миллиметрах ртутного столба",
      "share": "Доля от уровня моря", "temperature": "Температура по стандартной атмосфере",
      "density": "Плотность воздуха",
    },
    relatedCalculatorIds: ["air-density", "boiling-point", "hydrostatic-pressure"],
      ...contract.ru,
  },
};
