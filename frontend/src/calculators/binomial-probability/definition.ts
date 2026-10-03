import { mathWave8ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { binomialProbabilityCopyEn } from './copy.en';
import { binomialProbabilityCopyUk } from './copy.uk';
import { binomialProbabilityCopyDe } from './copy.de';
import { binomialProbabilityCopyEs } from './copy.es';
import { binomialProbabilityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: "binomial-probability",
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: binomialProbabilityCopyEn, uk: binomialProbabilityCopyUk, de: binomialProbabilityCopyDe, es: binomialProbabilityCopyEs },
  referenceCases: binomialProbabilityReferenceCases,
  publishedExample: { inputs: { n: 10, k: 3, p: 0.5, mode: 'exactly' }, expected: ["0,1172"] },
  presentation: {
    id: "binomial-probability",
    name: "Калькулятор биномиальной вероятности",
    slug: "binomial-probability",
    fullPath: "/math/binomial-probability/",
    category: "math",
    icon: "dices",
    popularity: 35,
    isNew: false,
    shortDescription: "Вероятность ровно k, не более k и не менее k успехов в серии независимых испытаний.",
    seoTitle: "Калькулятор биномиальной вероятности — ровно k успехов",
    seoDescription: "Рассчитайте биномиальную вероятность ровно k, не более k или не менее k успехов в серии независимых испытаний.",
    h1: "Калькулятор биномиальной вероятности",
    keywords: ["биномиальная вероятность", "вероятность k успехов", "схема Бернулли", "накопленная вероятность"],
    fields: [
      { name: 'n', label: 'Число испытаний', type: 'number', defaultValue: 10, min: 1, max: 1000, step: 1 },
      { name: 'k', label: 'Число успехов', type: 'number', defaultValue: 3, min: 0, max: 1000, step: 1 },
      { name: 'p', label: 'Вероятность успеха в одном испытании', type: 'number', defaultValue: 0.5, min: 0, max: 1, step: 0.01 },
      {
        name: 'mode', label: 'Что считаем', type: 'select', defaultValue: 'exactly',
        options: [
          { value: 'exactly', label: 'ровно k успехов' },
          { value: 'atMost', label: 'не более k успехов' },
          { value: 'atLeast', label: 'не менее k успехов' },
        ],
      },
    ],
    resultLabels: {
      "exactly": "Вероятность ровно k",
      "atMost": "Вероятность не более k",
      "atLeast": "Вероятность не менее k",
      "percent": "В процентах",
      "combinations": "Число сочетаний",
      "mean": "Математическое ожидание",
      "sd": "Стандартное отклонение",
    },
    relatedCalculatorIds: ["probability-basic", "combinatorics", "factorial"],
    ...mathWave8ContractContent.ru,
  },
};
