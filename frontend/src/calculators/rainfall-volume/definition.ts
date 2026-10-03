import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { rainfallVolumeCopyEn } from './copy.en';
import { rainfallVolumeCopyUk } from './copy.uk';
import { rainfallVolumeCopyDe } from './copy.de';
import { rainfallVolumeCopyEs } from './copy.es';
import { rainfallVolumeReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "rainfall-volume",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  copy: { en: rainfallVolumeCopyEn, uk: rainfallVolumeCopyUk, de: rainfallVolumeCopyDe, es: rainfallVolumeCopyEs },
  referenceCases: rainfallVolumeReferenceCases,
  publishedExample: { inputs: { area: 60, depth: 25, coeff: 0.9 }, expected: ["1 350 л"] },
  presentation: {
    ...contractContent.ru,
    id: "rainfall-volume",
    name: "Калькулятор сбора дождевой воды",
    slug: "sbor-dozhdevoy-vody",
    fullPath: "/household/sbor-dozhdevoy-vody/",
    category: "household",
    icon: "droplet",
    popularity: 30,
    isNew: false,
    shortDescription: "Сколько воды соберётся с крыши за дождь заданной силы.",
    seoTitle: "Калькулятор сбора дождевой воды с крыши",
    seoDescription: "Посчитайте, сколько литров воды соберётся с крыши заданной площади за дождь, с учётом коэффициента стока и числа бочек.",
    h1: "Калькулятор сбора дождевой воды",
    keywords: ["сбор дождевой воды", "дождевая вода с крыши", "коэффициент стока", "бочка для воды"],
    fields: [
      { name: 'area', label: 'Площадь крыши в плане, м²', type: 'number', defaultValue: 60, min: 0, step: 1 },
      { name: 'depth', label: 'Слой осадков, мм', type: 'number', defaultValue: 25, min: 0, step: 1 },
      { name: 'coeff', label: 'Коэффициент стока', type: 'number', defaultValue: 0.9, min: 0, max: 1, step: 0.05 },
    ],
    resultLabels: {
      "litres": "Соберётся воды", "m3": "В кубометрах", "barrels": "Бочек по 200 литров",
      "perSquare": "Собрано с квадратного метра", "lost": "Потеряно на стоке и испарении",
    },
    relatedCalculatorIds: ["pool-fill-time", "roof-area", "tank-volume"],
  },
};
