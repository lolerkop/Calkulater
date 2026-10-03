import { mathWave8ContractContent } from './contractContent';
import { validate } from './validate';
import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { diceProbabilityCopyEn } from './copy.en';
import { diceProbabilityCopyUk } from './copy.uk';
import { diceProbabilityCopyDe } from './copy.de';
import { diceProbabilityCopyEs } from './copy.es';
import { diceProbabilityReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'dice-probability',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  validate,
  copy: { en: diceProbabilityCopyEn, uk: diceProbabilityCopyUk, de: diceProbabilityCopyDe, es: diceProbabilityCopyEs },
  referenceCases: diceProbabilityReferenceCases,
  publishedExample: {
    inputs: { count: 2, sides: 6, target: 7 },
    expected: ['16,67%'],
  },
  presentation: {
    id: 'dice-probability',
    name: 'Калькулятор вероятности на кубиках',
    slug: 'dice-probability',
    fullPath: '/math/dice-probability/',
    category: 'math',
    icon: 'dices',
    popularity: 22,
    isNew: false,
    shortDescription: 'Вероятность выпадения заданной суммы на нескольких одинаковых кубиках.',
    seoTitle: 'Калькулятор вероятности суммы на кубиках',
    seoDescription:
      'Рассчитайте вероятность выпадения заданной суммы на нескольких одинаковых кубиках с точным числом благоприятных и всех исходов.',
    h1: 'Калькулятор вероятности на кубиках',
    keywords: ['вероятность кубиков', 'сумма на кубиках', 'd6 шансы', 'благоприятные исходы'],
    fields: [
      { name: 'count', label: 'Сколько кубиков', type: 'number', defaultValue: 2, min: 1, max: 10, step: 1 },
      { name: 'sides', label: 'Граней на кубике', type: 'number', defaultValue: 6, min: 2, max: 100, step: 1 },
      { name: 'target', label: 'Целевая сумма', type: 'number', defaultValue: 7, min: 1, step: 1 },
    ],
    resultLabels: {
      probability: 'Вероятность суммы',
      ways: 'Благоприятных исходов',
      total: 'Всего исходов',
      mean: 'Ожидаемая сумма',
    },
    relatedCalculatorIds: ['probability-basic', 'binomial-probability', 'combinatorics'],
    ...mathWave8ContractContent.ru,
  },
};
