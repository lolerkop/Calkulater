import { contract } from './contractContent';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { bernoulliCopyEn } from './copy.en';
import { bernoulliCopyUk } from './copy.uk';
import { bernoulliCopyDe } from './copy.de';
import { bernoulliCopyEs } from './copy.es';
import { bernoulliReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "bernoulli",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: bernoulliCopyEn, uk: bernoulliCopyUk, de: bernoulliCopyDe, es: bernoulliCopyEs },
  referenceCases: bernoulliReferenceCases,
  publishedExample: { inputs: { p1: 300, v1: 2, h1: 0, v2: 6, h2: 0, rho: 1000 }, expected: ["284 кПа"] },
  presentation: {
    id: "bernoulli",
    name: "Калькулятор уравнения Бернулли",
    slug: "uravnenie-bernulli",
    fullPath: "/physics/uravnenie-bernulli/",
    category: "physics",
    icon: "atom",
    popularity: 25,
    isNew: false,
    shortDescription: "Давление во втором сечении потока по скоростям и высотам с полным напором.",
    seoTitle: "Калькулятор уравнения Бернулли — давление в потоке",
    seoDescription: "Рассчитайте давление во втором сечении потока по уравнению Бернулли: скорости, высоты, плотность и полный напор.",
    h1: "Калькулятор уравнения Бернулли",
    keywords: ["уравнение Бернулли", "полный напор", "динамический напор", "давление в потоке"],
    fields: [
      { name: 'p1', label: "Давление в первом сечении", type: 'number', defaultValue: 300, min: 0, step: 10 , unit: "кПа" },
      { name: 'v1', label: "Скорость в первом сечении", type: 'number', defaultValue: 2, min: 0, step: 0.5 , unit: "м/с" },
      { name: 'h1', label: "Высота первого сечения", type: 'number', defaultValue: 0, signed: true, step: 0.5 , unit: "м" },
      { name: 'v2', label: "Скорость во втором сечении", type: 'number', defaultValue: 6, min: 0, step: 0.5 , unit: "м/с" },
      { name: 'h2', label: "Высота второго сечения", type: 'number', defaultValue: 0, signed: true, step: 0.5 , unit: "м" },
      { name: 'rho', label: "Плотность жидкости", type: 'number', defaultValue: 1000, min: 0, step: 10 , unit: "кг/м³" },
    ],
    resultLabels: {
      "p2": "Давление во втором сечении", "delta": "Изменение давления",
      "dyn1": "Динамический напор в первом сечении",
      "dyn2": "Динамический напор во втором сечении", "total": "Полный напор",
    },
    relatedCalculatorIds: ["pipe-flow", "hydrostatic-pressure", "pressure"],
      ...contract.ru,
  },
};
