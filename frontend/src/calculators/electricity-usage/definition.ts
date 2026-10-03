import { validate } from './validate';
import { contractContent } from './contractContent';
import { contextualField } from './contextualField';
// Расход электроэнергии прибором и его стоимость. Первая категория household.

import type { CalculatorDefinitionV2 } from '../../lib/platform/types';
import { compute } from './compute';
import { electricityUsageCopyEn } from './copy.en';
import { electricityUsageCopyUk } from './copy.uk';
import { electricityUsageCopyDe } from './copy.de';
import { electricityUsageCopyEs } from './copy.es';
import { electricityUsageReferenceCases } from './referenceCases';

export const definition: CalculatorDefinitionV2 = {
  id: 'electricity-usage',
  definitionVersion: 1,
  lifecycle: 'released',
  compute,
  contextualField,
  validate,
  copy: { en: electricityUsageCopyEn, uk: electricityUsageCopyUk, de: electricityUsageCopyDe, es: electricityUsageCopyEs },
  referenceCases: electricityUsageReferenceCases,
  publishedExample: { inputs: { power: 2000, powerUnit: 'w', hoursPerDay: 3, days: 30 }, expected: ['180,00 кВт·ч'] },
  presentation: {
    ...contractContent.ru,
    id: 'electricity-usage',
    name: 'Калькулятор расхода электроэнергии',
    slug: 'electricity-usage',
    fullPath: '/household/electricity-usage/',
    category: 'household',
    icon: 'home',
    popularity: 41,
    isNew: false,
    shortDescription: 'Киловатт-часы прибора и во сколько они обходятся.',
    seoTitle: 'Калькулятор расхода электроэнергии — кВт·ч и стоимость',
    seoDescription:
      'Узнайте, сколько киловатт-часов потребляет прибор за период и во сколько это обходится по вашему тарифу.',
    h1: 'Калькулятор расхода электроэнергии',
    keywords: ['расход электроэнергии', 'калькулятор кВт ч', 'стоимость электричества'],
    fields: [
      { name: 'power', label: 'Мощность прибора', type: 'number', defaultValue: 2000, min: 0, step: 10 },
      {
        name: 'powerUnit', label: 'Единица мощности', type: 'select', defaultValue: 'w',
        options: [
          { value: 'w', label: 'ватты (Вт)' },
          { value: 'kw', label: 'киловатты (кВт)' },
        ],
      },
      { name: 'hoursPerDay', label: 'Часов в сутки', type: 'number', defaultValue: 3, min: 0, max: 24, step: 0.5 },
      { name: 'days', label: 'Количество дней', type: 'number', defaultValue: 30, min: 1, step: 1 },
      { name: 'tariff', label: 'Тариф за кВт·ч', type: 'number', defaultValue: 0, unit: '₽', min: 0, step: 0.1, optional: true },
    ],
    resultLabels: { result: 'Расход энергии', perDay: 'В сутки', month: 'За 30 дней', cost: 'Стоимость за период' },
    relatedCalculatorIds: ['tip', 'convert-power', 'convert-energy'],
  },
};
