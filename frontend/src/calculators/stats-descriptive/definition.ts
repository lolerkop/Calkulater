import { mathWave8ContractContent } from './contractContent';
// Описательная статистика: среднее, медиана, мода, разброс по списку значений.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { statsDescriptiveCopyEn } from './copy.en';
import { statsDescriptiveCopyUk } from './copy.uk';
import { statsDescriptiveCopyDe } from './copy.de';
import { statsDescriptiveCopyEs } from './copy.es';
import { statsDescriptiveReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'stats-descriptive',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  copy: { en: statsDescriptiveCopyEn, uk: statsDescriptiveCopyUk, de: statsDescriptiveCopyDe, es: statsDescriptiveCopyEs },
  referenceCases: statsDescriptiveReferenceCases,
  publishedExample: { inputs: { values: '12\n15\n18\n21\n24', mode: 'sample' }, expected: ['18'] },
  presentation: {
    id: 'stats-descriptive',
    name: 'Калькулятор среднего и статистики',
    slug: 'descriptive-statistics',
    fullPath: '/math/descriptive-statistics/',
    category: 'math',
    icon: 'chart',
    popularity: 58,
    isNew: false,
    shortDescription: 'Среднее, медиана, мода, размах и стандартное отклонение по списку чисел.',
    seoTitle: 'Калькулятор среднего значения — медиана, мода, дисперсия',
    seoDescription: 'Рассчитайте среднее арифметическое, медиану, моду, размах, дисперсию и стандартное отклонение по списку чисел.',
    h1: 'Калькулятор среднего и статистики',
    keywords: ['калькулятор среднего', 'среднее арифметическое', 'медиана', 'стандартное отклонение', 'дисперсия'],
    fields: [
      {
        // Подпись несёт грамматику списка: help у поля не локализуется, а
        // общий текст подсказки для textarea как раз отсылает к подписи.
        name: 'values', unit: 'ед. данных',
        label: 'Числа — по одному в строке или через пробел',
        type: 'textarea',
        defaultValue: '12\n15\n18\n21\n24',
      },
      {
        name: 'mode', label: 'Дисперсия', type: 'select', defaultValue: 'sample',
        options: [
          { value: 'sample', label: 'выборочная (n−1)' },
          { value: 'population', label: 'генеральная (n)' },
        ],
      },
    ],
    resultLabels: {
      mean: 'Среднее',
      count: 'Количество',
      sum: 'Сумма',
      median: 'Медиана',
      mode: 'Мода',
      min: 'Минимум',
      max: 'Максимум',
      range: 'Размах',
      variance: 'Дисперсия',
      sd: 'Стандартное отклонение',
    },
    relatedCalculatorIds: ['weighted-mean', 'z-score', 'difference-abs-rel'],
    ...mathWave8ContractContent.ru,
  },
};
