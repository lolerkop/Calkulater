import { automotiveWave10ContractContent } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { quarterMileCopyEn } from './copy.en';
import { quarterMileCopyUk } from './copy.uk';
import { quarterMileCopyDe } from './copy.de';
import { quarterMileElapsedTimeCopyEs } from './copy.es';
import { quarterMileReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "quarter-mile-elapsed-time",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: quarterMileCopyEn, uk: quarterMileCopyUk, de: quarterMileCopyDe, es: quarterMileElapsedTimeCopyEs },
  referenceCases: quarterMileReferenceCases,
  publishedExample: { inputs: { power: 150, mass: 1300 }, expected: ["15,572 с"] },
  presentation: {
    id: "quarter-mile-elapsed-time",
    name: "Калькулятор времени четверти мили",
    slug: "chetvert-mili",
    fullPath: "/automotive/chetvert-mili/",
    category: "automotive",
    icon: "car",
    popularity: 28,
    isNew: true,
    shortDescription: "Время и скорость на финише четверти мили по мощности и массе автомобиля.",
    seoTitle: "Калькулятор четверти мили — время и скорость на финише",
    seoDescription: "Рассчитайте время прохождения четверти мили и скорость на финише по мощности двигателя и снаряжённой массе автомобиля.",
    h1: "Калькулятор времени четверти мили",
    keywords: ["четверть мили", "время разгона", "удельная мощность", "скорость на финише"],
    fields: [
      { name: 'power', label: 'Мощность, механические hp', type: 'number', unit: "hp", defaultValue: 150, min: 0, step: 10 },
      { name: 'mass', label: 'Снаряжённая масса с водителем, кг', type: 'number', unit: "кг", defaultValue: 1300, min: 0, step: 50 },
    ],
    resultLabels: {
      "et": "Время четверти мили", "trap": "Скорость на финише",
      "ptw": "Удельная мощность", "lb": "Масса в фунтах",
      "mph": "Скорость на финише в милях в час",
    },
    relatedCalculatorIds: ["power-to-weight", "acceleration", "stopping-distance"],
    ...automotiveWave10ContractContent.ru,
  },
};
